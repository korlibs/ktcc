package com.soywiz.ktcc.parser

import com.soywiz.ktcc.preprocessor.*
import com.soywiz.ktcc.serializable.*
import com.soywiz.ktcc.tokenizer.*
import com.soywiz.ktcc.types.*
import com.soywiz.ktcc.util.*
import kotlin.math.*

abstract class AutocompletionInfo() {
    abstract val name: String
    abstract val desc: String
    open val score: Int = 0
}

data class KeywordInfo(val keyword: String) : AutocompletionInfo() {
    override val name: String = keyword
    override val desc: String = ""
}

data class TypeInfo(val type: Type) : AutocompletionInfo() {
    override val name: String = type.toString().removePrefix("struct ")
    override val desc: String = ""
}

data class SymbolInfo(val scope: SymbolScope, override val name: String, val type: Type, val node: Node, val token: CToken) : AutocompletionInfo() {
    override val desc get() = type.toString()
    override val score: Int get() = scope.level
}

class SymbolScope(val parent: SymbolScope?, var start: Int = -1, var end: Int = -1) {
    val level: Int = if (parent != null) parent.level + 1 else 0
    val isGlobal get() = parent == null

    val children = arrayListOf<SymbolScope>()
    val symbols = LinkedHashMap<String, SymbolInfo>()

    fun createInfo(name: String, type: Type, node: Node, token: CToken) = SymbolInfo(this, name, type, node, token)

    init {
        parent?.children?.add(this)
    }

    fun registerInfo(name: String, type: Type, node: Node, token: CToken) = register(createInfo(name, type, node, token))

    fun register(symbol: SymbolInfo) {
        symbols[symbol.name] = symbol
    }

    operator fun get(symbol: String): SymbolInfo? {
        return getHere(symbol) ?: parent?.get(symbol)
    }

    fun getHere(symbol: String): SymbolInfo? {
        return this.symbols[symbol]
    }

    fun getAllSymbolNames(out: MutableSet<String> = mutableSetOf()): Set<String> {
        out += symbols.keys
        parent?.getAllSymbolNames(out)
        return out
    }

    override fun toString(): String =
        "SymbolScope(level=$level, symbols=${symbols.keys}, children=${children.size}, parent=${parent != null}, start=$start, end=$end)"
}

data class ProgramMessage(val message: String, val token: CToken, val pos: Int, val marker: ProgramParser.Marker, val level: Level) {
    enum class Level { WARNING, ERROR }

    val file get() = marker.translatedFile
    val row1 get() = token.row - marker.rowDiff
    val row0 get() = row1 - 1
    val columnStart get() = token.columnStart
}

class ParserException(val info: ProgramMessage, val parent: Throwable?) : ExpectException(info.message) {
}

interface ProgramParserRef {
    val parser: ProgramParser
}

@Serializable
class FunctionScope {
    var name: String = ""
    var type: FunctionType? = null
    var hasGoto: Boolean = false
    val rettype: Type get() = type?.retType ?: Type.UNRESOLVED
}

val POINTER_SIZE = 4

class ProgramParser(items: List<String>, val tokens: List<CToken>, pos: Int = 0) : ListReader<String>(items, "<eof>", pos), ProgramParserRef,
    TypeResolver by ResolveCache() {
    init {
        for (n in 0 until items.size) tokens[n].tokenIndex = n
    }

    override val parser = this
    val typedefTypes = LinkedHashMap<String, ListTypeSpecifier>()
    val typedefAliases = LinkedHashMap<String, Type>()
    val current get() = this.peek()
    val strings = LinkedHashSet<String>()

    var structId = 0
    val structTypesByName = LinkedHashMap<String, StructTypeInfo>()
    val structTypesBySpecifier = LinkedHashMap<StructUnionTypeSpecifier, StructTypeInfo>()

    var symbols = SymbolScope(null, 0, tokens.size)

    var _functionScope: FunctionScope? = null
    val functionScope: FunctionScope get() = _functionScope ?: error("Not inside a function")

    val warnings = arrayListOf<ProgramMessage>()
    val errors = arrayListOf<ProgramMessage>()

    fun token(pos: Int) = tokens.getOrElse(pos) { CToken("") }
    fun token(node: Node) = token(node.pos)

    fun reportWarning(msg: String, pos: Int = this.pos) {
        warnings += ProgramMessage(msg, token(pos), pos, currentMarker, ProgramMessage.Level.WARNING)
    }

    fun reportError(msg: String, pos: Int = this.pos) {
        errors += ProgramMessage(msg, token(pos), pos, currentMarker, ProgramMessage.Level.ERROR)
    }

    fun reportError(exception: ParserException) {
        errors += exception.info
    }

    fun reportError(exception: Throwable) {
        when (exception) {
            is ParserException -> errors += exception.info
            else -> reportError(exception.message ?: "error")
        }
    }

    fun parserException(message: String, pos: Int = this.pos, parent: Throwable? = null): Nothing =
        throw ParserException(ProgramMessage(message, token(pos), pos, currentMarker, ProgramMessage.Level.ERROR), parent)

    override fun createExpectException(message: String): ExpectException = parserException(message)

    inline fun <T> scopeFunction(crossinline callback: () -> T): T {
        val old = _functionScope
        _functionScope = FunctionScope()
        try {
            return callback()
        } finally {
            _functionScope = old
        }
    }

    inline fun <T> scopeSymbols(crossinline callback: () -> T): T {
        val old = symbols
        return try {
            symbols = SymbolScope(old, pos, pos)
            callback()
        } finally {
            symbols.end = pos
            symbols = old
        }
    }

    fun getStructTypeInfo(name: String): StructTypeInfo = structTypesByName[name] ?: error("Can't find type by name $name")

    fun getStructTypeInfo(spec: StructUnionTypeSpecifier): StructTypeInfo =
        structTypesBySpecifier[spec] ?: error("Can't find type by spec $spec")

    fun findNearToken(row: Int, column: Int): CToken? {
        val testIndex = genericBinarySearch(0, size, { from, to, low, high -> low }) {
            val token = tokens[it]
            val comp1 = token.row.compareTo(row)
            if (comp1 == 0) token.columnMiddle.compareTo(column) else comp1
        }
        return tokens.getOrNull(testIndex)
    }

    fun SymbolScope.contains(token: CToken): Boolean = token.tokenIndex in this.start..this.end

    fun getInnerSymbolsScopeAt(token: CToken?, scope: SymbolScope = this.symbols): SymbolScope {
        if (token != null) {
            for (childScope in scope.children) {
                //println("token=$token, contains=${childScope.contains(token)}, childScope=$childScope")
                if (childScope.contains(token)) return getInnerSymbolsScopeAt(token, childScope)
            }
        }
        return scope
    }

    fun findNodeTreeAtIndex(root: Node, pos: Int, out: ArrayList<Node> = arrayListOf()): List<Node> {
        //println("findNodeAtIndex: $pos : ${root.pos}-${root.endPos} : $root")
        out.add(root)
        root.visitChildren {
            if (pos in it.pos..it.endPos) {
                return findNodeTreeAtIndex(it, pos, out)
            }
        }
        return out
    }

    fun findNodeTreeAtToken(root: Node, foundToken: CToken, out: ArrayList<Node> = arrayListOf()): List<Node> {
        return findNodeTreeAtIndex(root, foundToken.tokenIndex, out)
    }

    data class Marker(
        val originalPos: Int = 0,
        val originalRow1: Int = 0,
        val translatedFile: String = "",
        val translatedRow1: Int = 0
    ) {
        val rowDiff = (originalRow1 - translatedRow1)
    }

    val markers = arrayListOf<Marker>()
    var currentMarker = Marker()

    fun consumeLineMarkers() {
        while (true) {
            val peek = peekOutside()

            if (peek == "#") {
                val markerPos = pos
                expect("#")
                val row = read()
                val fileQuoted = read()

                if (!fileQuoted.startsWith('"')) {
                    error("Invalid # $row $fileQuoted")
                }

                currentMarker = Marker(
                    originalPos = markerPos,
                    originalRow1 = token(markerPos).row + 1,
                    translatedRow1 = row.toInt(),
                    translatedFile = fileQuoted.cunquoted
                )
                markers += currentMarker
                continue
            }
            if (peek.startsWith("//")) {
                skip()
                println("COMMENT! $peek")
                continue
            }
            if (peek.startsWith("/*")) {
                skip()
                println("COMMENT! $peek")
                continue
            }
            break
        }
    }

    data class Pos(val row1: Int, val column0: Int) {
        val row0 get() = row1 - 1
    }

    data class PosWithFile(val row1: Int, val column0: Int, val file: String) {
        val row0 get() = row1 - 1
    }

    // From preprocessor to original file
    fun translatePos(pos: Pos): PosWithFile {
        TODO("translatePos")
    }

    // From original file to preprocessor
    fun translatePos(pos: PosWithFile): Pos? {
        for (marker in markers.reversed()) {
            if (marker.translatedFile == pos.file && pos.row1 >= marker.translatedRow1) {
                return Pos(pos.row1 + marker.rowDiff, pos.column0)
            }
        }
        return null
    }

    override fun toString(): String = "ProgramParser(current='${peekOutside()}', pos=$pos, token=${tokens.getOrNull(pos)}, marker=$currentMarker)"
}

fun Node.visitAllDescendants(callback: (Node) -> Unit) {
    this.visitChildren {
        callback(it)
        it.visitAllDescendants(callback)
    }
}

inline fun Node.visitChildren(callback: (Node) -> Unit) {
    val visitor = ArrayChildrenVisitor()
    this.visitChildren(visitor)
    for (node in visitor.out) callback(node)
}

interface ChildrenVisitor {
    operator fun invoke(a: Node)
}

//typealias ChildrenVisitor = ((Node) -> Unit)

class FuncChildrenVisitor(val func: (Node) -> Unit) : ChildrenVisitor {
    override fun invoke(a: Node) = func(a)
}

class ArrayChildrenVisitor(val out: ArrayList<Node> = arrayListOf()) : ChildrenVisitor {
    fun clear() {
        out.clear()
    }

    override operator fun invoke(mode: Node) {
        out += mode
    }
}

operator fun ChildrenVisitor.invoke(a: Node?) {
    if (a != null) {
        invoke(a)
    }
}

operator fun ChildrenVisitor.invoke(items: List<Node?>?) {
    if (items != null) for (it in items) this(it)
}

operator fun ChildrenVisitor.invoke(a: Node?, b: Node?) {
    this(a)
    this(b)
}

operator fun ChildrenVisitor.invoke(a: Node?, b: Node?, c: Node?) {
    this(a)
    this(b)
    this(c)
}

data class StructField(val name: String, var type: Type, val offset: Int, val size: Int, val node: StructDeclaration) {
    val offsetName = "OFFSET_$name"
}

data class StructTypeInfo(
    var name: String,
    //val spec: StructUnionTypeSpecifier,
    val spec: TypeSpecifier,
    val type: StructType,
    val struct: StructUnionTypeSpecifier,
    var size: Int = 0
) {
    private val _fieldsByName = LinkedHashMap<String, StructField>()
    private val _fields = ArrayList<StructField>()
    val fields: List<StructField> get() = _fields
    val fieldsByName: Map<String, StructField> get() = _fieldsByName
    fun addField(field: StructField) {
        _fields += field
        _fieldsByName[field.name] = field
    }
}

val ProgramParserRef.warnings: List<ProgramMessage> get() = parser.warnings
val ProgramParserRef.errors: List<ProgramMessage> get() = parser.errors
val ProgramParserRef.warningsAndErrors: List<ProgramMessage> get() = parser.warnings + parser.errors

inline fun <T> whileBlock(cond: (Int) -> Boolean, gen: () -> T): List<T> = arrayListOf<T>().apply { while (cond(size)) this += gen() }
inline fun <T> whileNotNull(gen: (Int) -> T?): List<T> = arrayListOf<T>().apply { while (true) this += gen(size) ?: break }

fun <T> ProgramParser.list(end: String, separator: String? = null, consumeEnd: Boolean = false, tailingSeparator: Boolean = false, gen: () -> T): List<T> {
    val out = arrayListOf<T>()
    if (peek() != end) {
        while (true) {
            if (out.size >= 16 * 1024) {
                error("Array too big")
            }
            out += gen()
            if (peek() == separator) {
                read()
                if (tailingSeparator) {
                    if (peek() == end) {
                        break
                    }
                }
                continue
            } else if (peek() == end) {
                break
            }
        }
    }
    if (consumeEnd) expect(end)
    return out
}

fun ProgramParser.identifier(): Id {
    val name = Id.validate(peek())
    val symbol = symbols[name]
    if (symbol == null) {
        reportWarning("Can't find identifier '$name'. Asumed as int.")
    }
    read()
    return Id(name, symbol)
}

fun ProgramParser.identifierDecl(): IdDecl {
    return IdDecl(read())
}

fun ProgramParser.primaryExpr(): Expr = tryPrimaryExpr() ?: TODO("primaryExpr: ${::primaryExpr.name}")

fun ProgramParser.tryPrimaryExpr(): Expr? = tag {
    when (val v = peek()) {
        //"+", "-" -> Unop(read(), primaryExpr())
        "(" -> {
            expect("(")
            val expr = expression()
            expect(")")
            expr
        }
        "_Generic" -> {
            expect("_Generic", "(")
            TODO("_Generic")
            expect(")")
            TODO("_Generic")
        }
        else -> {
            when {
                Id.isValid(v) -> identifier()
                StringConstant.isValid(v) -> StringConstant(read().also { strings += it })
                CharConstant.isValid(v) -> CharConstant(read())
                IntConstant.isValid(v) -> IntConstant(read())
                DecimalConstant.isValid(v) -> DecimalConstant(read())
                else -> null
            }
        }
    }
}

//fun ProgramParser.tryExpression(): Expr? = tryBlock { expression() }

// (6.5.2) postfix-expression:
fun ProgramParser.tryPostFixExpression(): Expr? {
    var expr = tryPrimaryExpr() ?: return null
    loop@ while (!eof) {
        expr = when (peek()) {
            "[" -> {
                expect("[")
                val index = expression()
                expect("]")
                if (expr.type !is PointerType && expr.type !is ArrayType) {
                    reportWarning("Can't array-access a non-pointer type ${expr.type}")
                }
                ArrayAccessExpr(expr, index)
            }
            "(" -> {
                val exprType = expr.type
                // @TODO: Might be: ( type-name ) { initializer-list }
                if (exprType !is FunctionType) {
                    reportError("Not calling a function ($exprType)")
                }

                expect("(")
                //val args = list(")", ",") { expression() }
                val args = list(")", ",") { assignmentExpr() }
                expect(")")
                if (exprType is FunctionType) {
                    val func = exprType
                    val funcName = func.name
                    val funcParams = exprType.args
                    for (n in 0 until max(args.size, funcParams.size)) {
                        val exType = exprType.args.getOrNull(n)?.type
                        val arg = args.getOrNull(n)
                        if (arg == null) {
                            reportError("Expected parameter at $n for $funcName")
                        }
                        if ((arg != null) && (exType != null && !arg.type.canAssignTo(exType, this))) {
                            reportError("Can't assign ${arg.type} to $exType of parameter $n of $funcName")
                        }
                        if (exType == null && !func.variadic) {
                            reportError("Unexpected argument $n calling '$funcName'. Function only have ${funcParams.size} parameters and it is not variadic")
                        }
                    }
                }

                CallExpr(expr, args)
            }
            DOT, "->" -> {
                val indirect = read() == "->"

                val id = if (Id.isValid(peek())) identifierDecl() else {
                    reportError("Expected identifier after field access")
                    IdDecl("<unknown>")
                }
                val _type = expr.type

                val type = if (_type is PointerType) {
                    _type.elementType
                } else {
                    _type
                }
                val expectedIndirect = _type is PointerType || _type is ArrayType

                if (indirect != expectedIndirect) {
                    if (indirect) {
                        reportError("Expected . but found ->")
                    } else {
                        reportError("Expected -> but found .")
                    }
                }

                val resolvedType2 = type.resolve(parser)
                val resolvedType = if (resolvedType2 is BasePointerType) resolvedType2.elementType else resolvedType2

                val ftype = if (resolvedType is StructType) {
                    val struct = structTypesBySpecifier[resolvedType.spec]
                    if (struct != null) {
                        val ftype = struct.fieldsByName[id.name]?.type
                        if (ftype == null) {
                            reportError("Struct '$type' doesn't contain field '${id.name}'")
                        }
                        ftype
                    } else {
                        reportError("Can't find struct of ${resolvedType.spec.id} : ${structTypesByName.keys}")
                        null
                    }
                } else {
                    reportError("Can't get field '${id.name}' from non struct type '$type'")
                    null
                }
                //println("$type: (${type::class})")
                FieldAccessExpr(expr, id, indirect, ftype ?: Type.INT, resolvedType)
            }
            "++", "--" -> {
                val op = read()
                PostfixExpr(expr, op)
            }
            else -> {
                break@loop
            }
        }
    }
    return expr
}

fun ProgramParser.tryUnaryExpression(): Expr? = tag {
    when (peek()) {
        "++", "--" -> {
            val op = read()
            val expr = tryUnaryExpression()
            Unop(op, expr!!)
        }
        "*" -> {
            expect("*")
            val expr = tryCastExpression() ?: parserException("Cast expression expected")
            ArrayAccessExpr(expr, IntConstant(0), isDeref = true)
        }
        "&", "+", "-", "~", "!" -> {
            val op = read()
            val expr = tryCastExpression() ?: parserException("Cast expression expected")
            if ((op == "+" || op == "-") && expr is NumberConstant) {
                when (op) {
                    "-" -> when (expr) {
                        is IntConstant -> IntConstant(-expr.value)
                        is DecimalConstant -> DecimalConstant(-expr.value)
                        else -> Unop(op, expr)
                    }
                    else -> expr
                }
            } else {
                Unop(op, expr)
            }
        }
        "sizeof", "Alignof" -> {
            val kind = expectAny("sizeof", "Alignof")
            if (peek() == "(") {
                expect("(")
                val type = tryTypeName()
                val expr = if (type == null) tryUnaryExpression()!! else null
                expect(")")
                expr?.let { SizeOfAlignExprExpr(it) } ?: SizeOfAlignTypeExpr(kind, type!!)
            } else {
                tryUnaryExpression()!!
            }
        }
        else -> tryPostFixExpression()
    }
}

fun ProgramParser.tryCastExpression(): Expr? = tag {
    if (peek() == "(") {
        restoreOnNull {
            expect("(")
            val tname = tryTypeName() ?: return@restoreOnNull null
            expect(")")
            val expr = tryCastExpression()
            val ftype = tname.specifiers.toFinalType().withDeclarator(tname.abstractDecl)
            CastExpr(expr!!, ftype)
        } ?: tryUnaryExpression()
    } else {
        tryUnaryExpression()
    }
}

fun ProgramParser.tryBinopExpr(): Expr? = tag {
    val exprs = arrayListOf<Expr>()
    val ops = arrayListOf<String>()
    while (!eof) {
        exprs += tryCastExpression() ?: return null

        //println("PEEK AFTER EXPRESSION: ${peek()}")
        if (!eof && peek() in binaryOperators) {
            ops += read()
            continue
        } else {
            break
        }
    }

    if (exprs.size == 0) parserException("Not a expression! at $this")

    if (exprs.size == 1) {
        exprs.first()
    } else {
        BinOperatorsExpr(exprs, ops).expand()
    }
}

fun ProgramParser.tryConditionalExpr(): Expr? = tag {
    val expr = tryBinopExpr()
    if (expr != null && !eof && peek() == "?") {
        expect("?")
        val etrue = expression()
        expect(":")
        val efalse = tryConditionalExpr()!!
        TenaryExpr(expr, etrue, efalse)
    } else {
        expr
    }
}

// Right associativity
fun ProgramParser.tryAssignmentExpr(): Expr? = tag {
    val left = tryConditionalExpr() ?: return null
    return if (!eof && peek() in assignmentOperators) {
        val op = read()
        val right = tryAssignmentExpr() ?: parserException("Expected value after assignment")
        if (!right.type.canAssignTo(left.type, this)) {
            reportWarning("Can't assign ${right.type} to ${left.type} (${right.type.resolve(parser)} != ${left.type.resolve(parser)})")
        }
        AssignExpr(left, op, right).toSimpleAssignExpr()
    } else {
        left
    }
}

fun ProgramParser.assignmentExpr(): Expr = tryAssignmentExpr() ?: parserException("Not an assignment-expression at $this")

// @TODO: Support comma separated
fun ProgramParser.tryExpression(): Expr? {
    val exprs = arrayListOf<Expr>()
    while (!eof) {
        exprs += tryAssignmentExpr() ?: break
        if (peekOutside() == ",") {
            read()
            continue
        } else {
            break
        }
    }
    return when {
        exprs.isEmpty() -> null
        exprs.size == 1 -> exprs.first()
        else -> CommaExpr(exprs)
    }
}

fun ProgramParser.expression(): Expr = tryExpression() ?: parserException("Not an expression at $this")

fun ProgramParser.constantExpression(): ConstExpr {
    return ConstExpr(tryConditionalExpr() ?: error("Not a conditional-expression")) // @TODO: Validate it is constant
}

fun ProgramParser.stringLiteral(): ConstExpr {
    return ConstExpr(expression()) // @TODO: Validate it is constant
}

private inline fun <T : Node?> ProgramParser.tag(callback: () -> T): T {
    val startPos = this.pos
    return callback().also {
        if (it?.tagged != true) {
            it?.tagged = true
            it?.pos = startPos
            it?.endPos = pos
            var rcomment = tokens[startPos].comment
            /*
            for (n in startPos + 1 until pos) {
                val comment = tokens[n].comment
                if (comment != "") {
                    rcomment += comment
                }
            }
             */
            it?.comment = rcomment
            if (it?.func == null) {
                it?.func = _functionScope
            }
        }
    }
}

//private fun <T : Any> TokenReader.multiple(report: (Throwable) -> Unit = { }, callback: () -> T): List<T> {
//    val out = arrayListOf<T>()
//    while (!eof) {
//        out += tryBlock { callback() } ?: break
//        //val result = tryBlockResult { callback() }
//        //if (result.isError) {
//        //    //report(result.error)
//        //    break
//        //} else {
//        //    out += result.value
//        //}
//    }
//    return out
//}

//fun <T : Any> TokenReader.multipleWithSeparator(callback: () -> T, separator: () -> Unit): List<T> {
//    val out = arrayListOf<T>()
//    while (true) {
//        out += tryBlock { callback() } ?: break
//        tryBlock { separator() } ?: break
//    }
//    return out
//}

fun ProgramParser.blockItem(): Stm = tag {
    when (peek()) {
        // Do not try declarations on these
        "if", "switch", "while", "do", "for", "goto", "continue", "break", "return", "{", "case", "default" -> statement()
        else -> {
            tryBlocks("block-item", this, { declaration(sure = true) }, { statement() })
        }
    }
}

fun ProgramParser.statement(): Stm = tag {
    consumeLineMarkers()
    when (peek()) {
        // (6.8.4) selection-statement:
        "if" -> {
            expect("if", "(")
            val expr = expression()
            expect(")")
            val strue = statement()
            val sfalse = if (tryExpect("else") != null) statement() else null
            IfElse(expr, strue, sfalse)
        }
        "switch" -> {
            expect("switch", "(")
            val expr = expression()
            expect(")")
            val body = compoundStatement()
            Switch(expr, body)
        }
        // (6.8.5) iteration-statement:
        "while" -> {
            expect("while", "(")
            val expr = expression()
            expect(")")
            val body = statement()
            While(expr, body)
        }
        "do" -> {
            expect("do")
            val body = statement()
            expect("while")
            expect("(")
            val expr = expression()
            expect(")")
            expect(";")
            DoWhile(body, expr)
        }
        "for" -> {
            expect("for", "(")
            //val init = expressionOpt()
            //expect(";")

            val initDecl = tryDeclaration()
            val init = if (initDecl == null) {
                val expr = tryExpression()
                expect(";")
                expr
            } else {
                initDecl
            }
            val cond = tryExpression()
            expect(";")
            val post = tryExpression()
            expect(")")
            val body = statement()
            For(init, cond, post, body)
        }
        // (6.8.6) jump-statement:
        "goto" -> run {
            _functionScope?.hasGoto = true; expect("goto");
            val id = identifierDecl(); expect(";"); Goto(id)
        }
        "continue" -> run { expect("continue", ";"); Continue() }
        "break" -> run { expect("break", ";"); Break() }
        "return" -> {
            expect("return")
            val expr = tryExpression()
            //println(functionScope.type)
            //println(functionScope.rettype)
            when {
                expr == null && functionScope.rettype != Type.VOID -> reportError("Return must return ${functionScope.rettype}")
                expr != null && !expr.type.canAssignTo(
                    functionScope.rettype,
                    this
                ) -> reportError(
                    "Returned ${expr.type} but must return ${functionScope.rettype} (${expr.type.resolve(parser)} != ${_functionScope?.rettype?.resolve(
                        parser
                    )})"
                )
            }
            expect(";")
            Return(expr)
        }
        // (6.8.2) compound-statement:
        "{" -> compoundStatement()
        // (6.8.1) labeled-statement:
        "case", "default" -> {
            val isDefault = peek() == "default"
            read()
            val expr = if (isDefault) null else constantExpression()
            expect(":")
            val stms = arrayListOf<Stm>()
            while (!eof) {
                if (peek() == "case") break
                if (peek() == "default") break
                if (peek() == "}") break
                stms += blockItem()
            }
            val stm = Stms(stms)
            if (expr != null) {
                CaseStm(expr, stm)
            } else {
                DefaultStm(stm)
            }
        }
        // (6.8.3) expression-statement:
        else -> {
            val result = tryBlocks("expression-statement", this,
                // (6.8.1) labeled-statement:
                {
                    val id = identifierDecl()
                    expect(":")
                    val stm = statement()
                    LabeledStm(id, stm)
                },
                {
                    val expr = tryExpression()
                    if (peekOutside() != ";") {
                        reportError("Expected ; after expression")
                        when (peekOutside()) {
                            in keywords -> Unit
                            "}" -> Unit
                            else -> skip()
                        }
                    } else {
                        expect(";")
                    }
                    ExprStm(expr)
                }
            )
            result
        }
    }
}

interface KeywordEnum {
    val keyword: String

    open class Companion<T : KeywordEnum>(val gen: () -> Array<T>) {
        val BY_KEYWORD = gen().associateBy { it.keyword }
        operator fun get(keyword: String) = BY_KEYWORD[keyword] ?: error("Can't find enum entry with keyword '$keyword'")
    }
}

// (6.7.7) type-name:
fun ProgramParser.typeName(): Node = tryTypeName() ?: TODO("typeName as $this")

fun ProgramParser.tryTypeName(): TypeName? = tag {
    val specifiers = declarationSpecifiers() ?: return null
    val absDecl = tryAbstractDeclarator()
    TypeName(specifiers, absDecl)
}

fun ProgramParser.tryDirectAbstractDeclarator(): Node? {
    var out: Node? = null
    loop@ while (true) {
        out = when (peek()) {
            "(" -> {
                TODO("tryDirectAbstractDeclarator at $this")
                expect("(")
                val adc = tryAbstractDeclarator()
                expect(")")
                adc
            }
            "[" -> {
                TODO("tryDirectAbstractDeclarator at $this")
            }
            else -> break@loop
        }
    }
    return out
}

fun ProgramParser.tryAbstractDeclarator(): AbstractDeclarator? = tag {
    val pointer = tryPointer()
    val adc = tryDirectAbstractDeclarator()
    if (pointer == null && adc == null) return null
    AbstractDeclarator(pointer, adc)
}

// (6.7) declaration-specifiers:
fun ProgramParser.declarationSpecifiers(sure: Boolean = false): ListTypeSpecifier? {
    consumeLineMarkers()
    val out = arrayListOf<TypeSpecifier>()
    var hasTypedef = false
    while (true) {
        if (eof) error("eof found")
        val spec = tryDeclarationSpecifier(hasTypedef, out.isNotEmpty(), sure) ?: break
        if (spec is StorageClassSpecifier && spec.kind == StorageClassSpecifier.Kind.TYPEDEF) hasTypedef = true
        //if (spec is TypedefTypeSpecifier) break // @TODO: Check this!
        out += spec
    }
    return if (out.isEmpty()) null else ListTypeSpecifier(out)
}

fun ProgramParser.type(): ListTypeSpecifier = tag {
    return declarationSpecifiers()!!
    //NamedCType(identifier())
}

fun ProgramParser.tryTypeQualifier(): TypeQualifier? = tag {
    when (peek()) {
        "const", "restrict", "volatile", "_Atomic" -> TypeQualifier(TypeQualifier.Kind[read()])
        else -> null
    }
}

//fun ProgramParser.trySpecifierQualifier() = tag {
//    when (val v = peek()) {
//
//        "const", "restrict", "volatile", "_Atomic" -> TypeQualifier(v)
//        else -> null
//    }
//
//}

// (6.7.2.1) struct-declarator:
fun ProgramParser.structDeclarator(): StructDeclarator = tryStructDeclarator() ?: error("Not a struct declarator!")

fun ProgramParser.tryStructDeclarator(): StructDeclarator? = tag {
    val declarator = tryDeclarator()
    val bitExpr = if (declarator == null || peek() == ":") {
        if (declarator == null && peek() != ":") return@tag null
        expect(":")
        constantExpression()
    } else {
        null
    }
    StructDeclarator(declarator, bitExpr)
}

// (6.7.2.1) struct-declaration:
fun ProgramParser.tryStructDeclaration(): StructDeclaration? = tag {
    return if (peek() == "_Static_assert") {
        staticAssert()
    } else {
        val specifiers = declarationSpecifiers() // DISALLOW others
        val declarators = list(";", ",") { structDeclarator() }
        expect(";")
        StructDeclaration(specifiers ?: error("$specifiers $declarators at $this"), declarators)
    }
}

fun ProgramParser.enumerator(): EnumItemDef = tag {
    val id = identifierDecl()
    val expr = if (peek() == "=") {
        expect("=")
        constantExpression()
    } else {
        null
    }
    EnumItemDef(id, expr)
}

fun ProgramParser.tryDeclarationSpecifier(hasTypedef: Boolean, hasMoreSpecifiers: Boolean, sure: Boolean = false): TypeSpecifier? = tag {
    when (val v = peek()) {
        "typedef", "extern", "static", "_Thread_local", "auto", "register" -> StorageClassSpecifier(StorageClassSpecifier.Kind[read()]!!)
        "const", "restrict", "volatile" -> {
            val kind = TypeQualifier.Kind[read()]
            if (kind == TypeQualifier.Kind.ATOMIC && peekOutside() == "(") {
                expect("(")
                TODO("_Atomic")
                val name = typeName()
                expect(")")
                AtomicTypeSpecifier(name)
            }
            TypeQualifier(kind)
        }
        "inline", "_Noreturn" -> FunctionSpecifier(read())
        "_Alignas" -> {
            expect("_Alignas")
            expect("(")
            val node = tryTypeName() ?: constantExpression()
            expect(")")
            AlignAsSpecifier(node)
        }
        "void", "char", "short", "int", "long", "float", "double", "signed", "unsigned", "_Bool", "_Complex" -> {
            BasicTypeSpecifier(BasicTypeSpecifier.Kind[read()])
        }
        "enum" -> {
            val kind = read()
            val id = if (Id.isValid(peek())) read() else null
            val decls = if (peek() == "{") {
                expect("{")
                val enums = this.list("}", ",") { enumerator() }
                expect("}")
                enums
            } else {
                null
            }
            EnumTypeSpecifier(id, decls)
        }
        "struct", "union" -> {
            val kind = read()
            val id = if (peek() != "{") identifierDecl() else null
            val decls = if (peek() == "{") {
                expectPair("{", "}") {
                    list("}", null) { tryStructDeclaration() ?: error("No a struct-declaration") }
                }
            } else {
                null
            }

            // Analyzer
            if (decls != null) { // { ... }
                val struct = StructUnionTypeSpecifier(kind, id, decls)
                val it = struct
                val isUnion = struct.kind == "union"
                val structName = it.id?.name ?: "Anonymous${structId++}"
                val structInfo = StructTypeInfo(structName, it, StructType(it), struct)
                struct.info = structInfo
                structTypesByName[structName] = structInfo
                structTypesBySpecifier[it] = structInfo
                var offset = 0
                var maxSize = 0
                for (decl in it.decls) {
                    val ftype = decl.specifiers.toFinalType()
                    for (dtors in decl.declarators) {
                        val name = dtors.declarator?.getName() ?: "unknown"
                        val rftype = ftype.withDeclarator(dtors.declarator)
                        val rsize = rftype.getSize(parser)
                        structInfo.addField(StructField(name, rftype, offset, rsize, decl))
                        maxSize = kotlin.math.max(maxSize, rsize)
                        if (!isUnion) {
                            offset += rsize
                        }
                    }
                }
                structInfo.size = if (isUnion) maxSize else offset
                struct
            } else {
                val structType = structTypesByName[id?.name]
                val struct = structType?.struct ?: StructUnionTypeSpecifier(kind, id, listOf())
                struct
            }
        }
        else -> when {
            v in typedefTypes -> {
                val typeName = read()
                RefTypeSpecifier(typeName, typedefAliases[typeName] ?: Type.UNKNOWN_TYPEDEF)
            }
            //hasTypedef && Id.isValid(v) -> TypedefTypeSpecifierName(read())
            else -> when {
                hasMoreSpecifiers -> null // @TODO: check?
                sure -> throw ExpectException("'$v' is not a valid type")
                else -> null
            }
        }
    }
}

fun ProgramParser.tryPointer(): Pointer? = tag {
    var pointer: Pointer? = null
    while (true) {
        pointer = if (peek() == "*") {
            expect("*")
            Pointer(whileNotNull { tryTypeQualifier() }, pointer)
        } else {
            break
        }
    }
    pointer
}

// (6.7.6) parameter-declaration:
fun ProgramParser.parameterDeclaration(): ParameterDecl = tag {
    if (peek() == "...") {
        val id = tag { IdDecl(read()) }
        ParameterDecl(ListTypeSpecifier(listOf(VariadicTypeSpecifier(id))), VarargDeclarator(IdentifierDeclarator(id)))
    } else {
        val specs = declarationSpecifiers()
        if (specs == null) {
            reportError("Expected declaration specifiers at $this")
        }
        val decl = declarator()
        ParameterDecl(specs ?: ListTypeSpecifier(listOf()), decl)
    }
}

// (6.7.6) declarator:
// (6.7.6) direct-declarator:
fun ProgramParser.declarator(): Declarator = tryDeclarator()
    ?: throw ExpectException("Not a declarator at $this")

fun ProgramParser.tryDeclarator(): Declarator? = tag {
    val pointer = tryPointer()
    val base: Declarator = tag {
        when (peek()) {
            // ( declarator )
            "(" -> {
                expect("(")
                val decl = declarator()
                expect(")")
                decl
            }
            else -> {
                if (Id.isValid(peek())) {
                    IdentifierDeclarator(identifierDecl())
                }
                // Not part of the declarator
                else {
                    null
                }
            }
        }
    } ?: return@tag null

    val postfixs = arrayListOf<DeclaratorPostfix>()
    loop@ while (true) {
        postfixs += tag {
            when (peek()) {
                // direct-declarator ( parameter-type-list )
                // direct-declarator ( identifier-listopt )
                "(" -> {
                    expect("(")
                    val params = if (peekOutside() == "void" && peekOutside(+1) == ")") {
                        expect("void")
                        listOf()
                    } else {
                        list(")", ",") { parameterDeclaration() }
                    }
                    expect(")")
                    ParamDeclaratorPostfix(params)
                }
                // direct-declarator [ type-qualifier-listopt assignment-expressionopt ]
                // direct-declarator [ static type-qualifier-listopt assignment-expression ]
                // direct-declarator [type-qualifier-list static assignment-expression]
                // direct-declarator [type-qualifier-listopt *]
                "[" -> {
                    expect("[")
                    val static0 = tryExpect("static") != null
                    val typeQualifiers = whileNotNull { tryTypeQualifier() }
                    val static1 = tryExpect("static") != null
                    val expr = tryExpression()
                    expect("]")
                    ArrayDeclaratorPostfix(typeQualifiers, expr, static0, static1)
                }
                else -> {
                    null
                }
            }
        } ?: break
    }

    var out = base
    for (postfix in postfixs.reversed()) out = postfix.toDeclarator(out)
    //for (postfix in postfixs) out = postfix.toDeclarator(out)
    return if (pointer != null) DeclaratorWithPointer(pointer, out) else out
}

// (6.7.9) designator:
fun ProgramParser.tryDesignator(): Designator? = tag {
    when (peek()) {
        DOT -> {
            expect(DOT)
            FieldAccessDesignator(identifier())
        }
        "[" -> {
            expect("[")
            val expr = constantExpression()
            expect("]")
            ArrayAccessDesignator(expr)
        }
        else -> null
    }
}

fun ProgramParser.designatorList(): List<Designator> = whileNotNull { tryDesignator() }

// (6.7.9) designation:
fun ProgramParser.tryDesignation(): DesignatorList? = tag {
    val design = designatorList()
    if (design.isNotEmpty()) {
        expect("=")
        DesignatorList(design)
    } else {
        null
    }
}

// (6.7.9) initializer:
fun ProgramParser.initializer(ltype: Type): Expr = tag {
    if (peek() == "{") {
        val elementType = ltype.elementType
        expect("{")
        val items = list("}", ",", tailingSeparator = true) {
            val designationOpt = tryDesignation()
            val initializer = initializer(elementType)
            DesignOptInit(designationOpt, initializer)
        }
        //val items = list("}", ",", tailingSeparator = true) { designOptInitializer(ltype.elementType) }
        expect("}")
        ArrayInitExpr(items, ltype)
    } else {
        tryAssignmentExpr() ?: error("Not an assignment-expression")
    }
}

// (6.7) init-declarator:
fun ProgramParser.initDeclarator(specsType: Type): InitDeclarator = tag {
    val decl = declarator()
    val ftype = specsType.withDeclarator(decl)
    val initializer = if (tryExpect("=") != null) initializer(ftype) else null
    if (initializer != null) {

        if (!initializer.type.canAssignTo(ftype, this)) {
            reportWarning("Can't assign ${initializer.type} to $ftype (${initializer.type.resolve(parser)} != ${ftype.resolve(parser)})")
        }
    }
    InitDeclarator(decl, initializer, ftype)
}

fun ProgramParser.staticAssert(): Nothing {
    expect("_Static_assert", "(")
    val expr = constantExpression()
    expect(",")
    val str = stringLiteral()
    expect(")")
    TODO("_Static_assert")
}

// (6.7) declaration:
fun ProgramParser.tryDeclaration(sure: Boolean = false): Decl? = tag {
    when (peek()) {
        "_Static_assert" -> staticAssert()
        else -> {
            val specs = declarationSpecifiers(sure) ?: return@tag null
            if (specs.isEmpty()) return@tag null
            val specsType = specs.toFinalType()
            val initDeclaratorList = list(";", ",") { initDeclarator(specsType) }
            expect(";")

            for (item in initDeclaratorList) {
                val nameId = item.declarator.getNameId()
                val token = token(nameId.pos)
                val name = nameId.getName()
                val itemType = specs.toFinalType(item.declarator)

                if (specs.hasTypedef && !typedefTypes.containsKey(name)) {
                    // @TODO: Merge those?
                    typedefTypes[name] = specs
                    typedefAliases[name] = itemType

                    val structTypeSpecifier = specs.items.filterIsInstance<StructUnionTypeSpecifier>().firstOrNull()
                    if (structTypeSpecifier != null) {
                        val structType = getStructTypeInfo(structTypeSpecifier)
                        structTypesByName.remove(structType.name)
                        structType.name = name
                        structTypesByName[structType.name] = structType
                    }

                    //out.firstIsInstance<TypedefTypeSpecifier>().id
                    //println("hasTypedef: $hasTypedef")
                } else {
                    symbols.registerInfo(nameId.id.name, itemType, nameId, token)
                }
            }
            VarDeclaration(specs, initDeclaratorList)
        }
    }
}

fun Declaration(type: Type, name: String, init: Expr? = null): VarDeclaration {
    return VarDeclaration(
        ListTypeSpecifier(listOf(BasicTypeSpecifier(BasicTypeSpecifier.Kind.INT))), listOf(
            InitDeclarator(IdentifierDeclarator(IdDecl(name)), init, type)
        )
    )
}

fun ProgramParser.declaration(sure: Boolean = true): Decl = tryDeclaration(sure = sure)
    ?: parserException("TODO: ProgramParser.declaration")

fun ProgramParser.recovery(tokens: Set<String>) {
    if (eof) {
        error("EOF")
    }

    val spos = pos
    while (!eof && peek() !in tokens) read()
    val epos = pos

    // We have to skip something to recover, or we will end in an infinite loop
    if (!eof && spos == epos) {
        read()
    }
}

private val compoundStatementRecoveryTokens = setOf(
    ";", "}", "if", "return", "switch", "while", "do", "for", "goto", "continue", "break"
)

// (6.8.2) compound-statement:
fun ProgramParser.compoundStatement(): Stms = tag {
    scopeSymbols {
        expect("{")
        val stms = arrayListOf<Stm>()
        while (!eof && peekOutside() != "}") {
            val spos = this.pos
            try {
                stms += blockItem()
            } catch (e: ParserException) {
                pos = spos
                reportError(e)
                recovery(compoundStatementRecoveryTokens)
                if (peekOutside() == ";") expect(";")
            }
        }
        expect("}")
        Stms(stms)
    }
}

fun ParameterDecl.toCParam(): CParam = CParam(
    this,
    this.specs.toFinalType().withDeclarator(declarator),
    this.declarator.getNameId()
)

fun Declarator.extractParameter(): ParameterDeclarator = when {
    this is DeclaratorWithPointer -> this.declarator.extractParameter()
    this is ParameterDeclarator -> this
    this is IdentifierDeclarator -> ParameterDeclarator(this, listOf()) // @TODO: Check this!
    else -> error("Not a DeclaratorWithPointer $this")
}

// (6.9.1) function-definition:
fun ProgramParser.functionDefinition(): FuncDeclaration = tag {
    val rettype = declarationSpecifiers() ?: parserException("Can't declarationSpecifiers $this")
    val decl = declarator()
    val paramDecl = decl.extractParameter()
    if (paramDecl.base !is IdentifierDeclarator) parserException("Function without name at $this but decl.base=${paramDecl.base}")
    val name = paramDecl.base.id
    val variadic = paramDecl.decls.any { it.declarator is VarargDeclarator }
    val params = paramDecl.decls.filter { it.declarator !is VarargDeclarator }.map { it.toCParam() }
    val funcType = rettype.toFinalType(decl)
    if (funcType !is FunctionType) {
        error("Not a function type: $funcType")
    }
    symbols.registerInfo(name.name, funcType, name, token(name))
    scopeFunction {
        _functionScope?.apply {
            this.name = name.name
            this.type = funcType
        }
        scopeSymbols {
            for (param in params) {
                symbols.registerInfo(param.name.name, param.type, param.nameId, token(param.nameId.pos))
            }
            val body = compoundStatement()
            FuncDeclaration(rettype, name, params, body, variadic, funcType).apply {
                func = _functionScope
            }
        }
    }
}

// (6.9) external-declaration
fun ProgramParser.tryExternalDeclaration(): Decl? = tag {
    try {
        consumeLineMarkers()
        if (!eof) {
            tryBlocks(
                "external-declaration", this,
                {
                    consumeLineMarkers()
                    declaration(sure = false)
                },
                {
                    consumeLineMarkers()
                    functionDefinition()
                },
                propagateLast = true
            )
        } else {
            null
        }
    } catch (e: Throwable) {
        reportError(e)
        skip(1)
        null
    }
}

// (6.7.2) type-specifier:
fun ProgramParser.tryTypeSpecifier(): TypeSpecifier? = tag<TypeSpecifier> {
    TODO("tryTypeSpecifier")
    //when (peek()) { }
}

fun ProgramParser.typeSpecifier() = tryTypeSpecifier() ?: error("Not a type specifier at '${this.peek()}'")

// (6.9) translation-unit
fun ProgramParser.translationUnits() = tag {
    //println("PROGRAM: ${this@translationUnits.tokens}")
    val decls = arrayListOf<Decl>()
    try {
        while (true) {
            consumeLineMarkers()
            if (eof) break
            val externalDefinition = tryExternalDeclaration() ?: continue
            //println("externalDefinition: $externalDefinition")
            decls += externalDefinition
        }
    } catch (eof: EOFException) {

    }
    Program(decls)
}

fun ProgramParser.program(): Program = translationUnits()
fun ProgramParser.parsedProgram(info: PreprocessorInfo): ParsedProgram = ParsedProgram(program(), this, info)

fun ListReader<CToken>.programParser() = ProgramParser(this.items.map { it.str }, this.items, this.pos)
fun ListReader<String>.program() = ListReader(this.items.map { CToken(it) }, CToken("")).programParser().program()
fun String.programParser() = tokenize().programParser()

operator fun Number.times(other: Number): Number {
    if (this is Int && other is Int) return this * other
    TODO("Number.times $this (${this::class}), $other (${other::class})")
}

operator fun Number.plus(other: Number): Number {
    if (this is Int && other is Int) return this + other
    TODO("Number.times $this (${this::class}), $other (${other::class})")
}

open class EvalContext {
    open fun resolveId(id: String): Any? {
        error("Unknown identifier '$id'")
    }

    open fun callFunction(id: String, args: Array<Any?>): Any? {
        error("Unknown function $id")
    }
}

fun Any?.toBool(): Boolean = when (this) {
    null -> false
    is Boolean -> this
    is Number -> toInt() != 0
    is String -> isNotBlank() && this != "0" && this != "false"
    else -> false
}

fun Any?.toNumber(): Number = when (this) {
    is Boolean -> if (this) 1 else 0
    is Number -> this
    is String -> this.toDoubleOrNull() ?: 0.0
    else -> 0.0
}

fun Any?.toDouble(): Double = toNumber().toDouble()
fun Any?.toInt(): Int = toNumber().toInt()

fun Expr.constantEvaluate(ctx: EvalContext = EvalContext()): Any? = when (this) {
    is Binop -> {
        val lv = this.l.constantEvaluate(ctx)
        val rv = this.r.constantEvaluate(ctx)
        when (op) {
            "+" -> (lv.toInt()) + (rv.toInt())
            "-" -> (lv.toInt()) - (rv.toInt())
            "*" -> (lv.toInt()) * (rv.toInt())
            "/" -> (lv.toInt()) / (rv.toInt())
            "%" -> (lv.toInt()) % (rv.toInt())
            "<" -> (lv.toDouble()) < (rv.toDouble())
            ">" -> (lv.toDouble()) > (rv.toDouble())
            "<=" -> (lv.toDouble()) <= (rv.toDouble())
            ">=" -> (lv.toDouble()) >= (rv.toDouble())
            "==" -> (lv.toDouble()) == (rv.toDouble())
            "!=" -> (lv.toDouble()) != (rv.toDouble())
            "&&" -> lv.toBool() && rv.toBool()
            "||" -> lv.toBool() || rv.toBool()
            else -> TODO("Binop: $op")
        }
    }
    is Unop -> {
        val rv = this.rvalue.constantEvaluate(ctx)
        when (op) {
            "!" -> !rv.toBool()
            else -> TODO("Unop: $op")
        }
    }
    is IntConstant -> this.value
    is DecimalConstant -> this.value
    is StringConstant -> this.value
    is CharConstant -> this.value
    is Id -> ctx.resolveId(name)
    is CallExpr -> {
        if (this.expr !is Id) error("Can't evaluate function $expr")
        ctx.callFunction(expr.name, this.args.map { it.constantEvaluate(ctx) }.toTypedArray())
    }
    else -> error("Don't know how to constant-evaluate ${this::class} '$this'")
}

// Annex A: (6.4.1)
val keywords = setOf(
    "auto", "break", "case", "char", "const", "continue", "default", "do", "double", "else", "enum", "extern",
    "float", "for", "goto", "if", "inline", "int", "long", "register", "restrict", "return", "short", "signed",
    "sizeof", "static", "struct", "switch", "typedef", "union", "unsigned", "void", "volatile", "while",
    "_Alignas", "_Alignof", "_Atomic", "_Bool", "_Complex", "_Generic", "_Imaginary", "_Noreturn", "_Static_assert", "_Thread_local"
)

// (6.7.1) storage-class-specifier:
val storageClassSpecifiers = setOf("typedef", "extern", "static", "_Thread_local", "auto", "register")

// (6.7.2) type-specifier:
val typeSpecifier = setOf("void", "char", "short", "int", "long", "float", "double", "signed", "unsigned", "_Bool", "_Complex")

val unaryOperators = setOf("&", "*", "+", "-", "~", "!")
val assignmentOperators = setOf("=", "*=", "/=", "%=", "+=", "-=", "<<=", ">>=", "&=", "^=", "|=")
val binaryOperators = setOf(
    "*", "/", "%",
    "+", "-",
    "<<", ">>",
    "<", ">", "<=", ">=",
    "==", "!=",
    "&", "^", "|",
    "&&", "||"
)
val ternaryOperators = setOf("?", ":")
val postPreFixOperators = setOf("++", "--")

val allOperators = unaryOperators + binaryOperators + ternaryOperators + postPreFixOperators + assignmentOperators



