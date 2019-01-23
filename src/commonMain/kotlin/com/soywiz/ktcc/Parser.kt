package com.soywiz.ktcc

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

data class TypeInfo(val type: FType) : AutocompletionInfo() {
    override val name: String = type.toString().removePrefix("struct ")
    override val desc: String = ""
}

data class SymbolInfo(val scope: SymbolScope, override val name: String, val type: FType, val node: Node, val token: CToken) : AutocompletionInfo() {
    override val desc get() = type.toString()
    override val score: Int get() = scope.level
}

class SymbolScope(val parent: SymbolScope?, var start: Int = -1, var end: Int = -1) {
    val level: Int = if (parent != null) parent.level + 1 else 0

    val children = arrayListOf<SymbolScope>()
    val symbols = LinkedHashMap<String, SymbolInfo>()

    fun createInfo(name: String, type: FType, node: Node, token: CToken) = SymbolInfo(this, name, type, node, token)

    init {
        parent?.children?.add(this)
    }

    fun registerInfo(name: String, type: FType, node: Node, token: CToken) = register(createInfo(name, type, node, token))

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

    override fun toString(): String = "SymbolScope(level=$level, symbols=${symbols.keys}, children=${children.size}, parent=${parent != null}, start=$start, end=$end)"
}

data class ProgramMessage(val message: String, val token: CToken, val pos: Int, val marker: ProgramParser.Marker, val level: Level) {
    enum class Level { WARNING, ERROR }
    val file get() = marker.translatedFile
    val row1 get() = token.row - marker.rowDiff
    val row0 get() = row1 - 1
    val columnStart get() = token.columnStart
}

class ParserException(val info: ProgramMessage) : ExpectException(info.message) {
}

interface ProgramParserRef {
    val parser: ProgramParser
}

class FunctionScope {
    var name: String = ""
    var type: FunctionFType? = null
    var hasGoto: Boolean = false
    val rettype: FType get() = type?.retType ?: FType.UNRESOLVED
}

class ProgramParser(items: List<String>, val tokens: List<CToken>, pos: Int = 0) : ListReader<String>(items, "<eof>", pos), ProgramParserRef, FTypeResolver {
    init {
        for (n in 0 until items.size) tokens[n].tokenIndex = n
    }
    override val parser = this
    val POINTER_SIZE = 4
    val typedefTypes = LinkedHashMap<String, ListTypeSpecifier>()
    val typedefAliases = LinkedHashMap<String, FType>()
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

    fun parserException(message: String, pos: Int = this.pos): Nothing = throw ParserException(ProgramMessage(message, token(pos), pos, currentMarker, ProgramMessage.Level.ERROR))

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

    override fun resolve(type: FType): FType = type.fresolve()

    fun FType.fresolve(default: FType? = null): FType {
        if (this.resolved == null) {
            this.resolved = fresolveUncached(default)
        }
        return this.resolved!!
    }

    fun FType.fresolveUncached(default: FType? = null): FType = when (this) {
        is TypedefFTypeRef -> (typedefAliases[this.id] ?: default ?: UnknownFType("Can't resolve type '$id'")).fresolve(default)
        is FunctionFType -> FunctionFType(name, retType.fresolve(default), args.map { CParam(it.decl, it.type.fresolve(default), it.nameId) }, variadic)
        is PointerFType -> PointerFType(elementType.fresolve(default), this.const)
        is ArrayFType -> ArrayFType(elementType.fresolve(default), size)
        is IntFType -> this
        is FloatFType -> this
        is BoolFType -> this
        is DummyFType -> this
        is UnknownFType -> this
        is StructFType -> this // @TODO: Should we resolve members?
        else -> error("Unsupported resolving type $this")
    }

    fun FType.getSize(): Int = when (this) {
        is IntFType -> typeSize
        is FloatFType -> size
        is PointerFType -> POINTER_SIZE
        is TypedefFTypeRef -> fresolve().getSize()
        is StructFType -> getStructTypeInfo(this.spec).size
        is ArrayFType -> {
            if (this.size != null) {
                this.elementType.getSize() * this.size.toInt()
            } else {
                POINTER_SIZE
            }
        }
        else -> error("${this::class}: $this")
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
        if (peekOutside() == "#") {
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
        }
    }

    data class Pos(val row1: Int, val column0: Int)
    data class PosWithFile(val row1: Int, val column0: Int, val file: String)

    // From preprocessor to original file
    fun translatePos(pos: Pos): PosWithFile {
        TODO()
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

fun Node.visitAllChildren(callback: (Node) -> Unit) {
    this.visitChildren {
        callback(it)
        it.visitAllChildren(callback)
    }
}

inline fun Node.visitChildren(callback: (Node) -> Unit) {
    val visitor = ChildrenVisitor()
    this.visitChildren(visitor)
    for (node in visitor.out) callback(node)
}

class ChildrenVisitor(val out: ArrayList<Node> = arrayListOf()) {
    fun clear() {
        out.clear()
    }

    operator fun invoke(a: Node?) {
        if (a != null) {
            out += a
        }
    }

    operator fun invoke(items: List<Node?>) {
        for (it in items) this(it)
    }

    operator fun invoke(a: Node?, b: Node?) {
        this(a)
        this(b)
    }

    operator fun invoke(a: Node?, b: Node?, c: Node?) {
        this(a)
        this(b)
        this(c)
    }
}

data class StructField(val name: String, var type: FType, val offset: Int, val size: Int, val node: StructDeclaration) {
    val offsetName = "OFFSET_$name"
}

data class StructTypeInfo(
        var name: String,
        //val spec: StructUnionTypeSpecifier,
        val spec: TypeSpecifier,
        val type: StructFType,
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

abstract class Node {
    var tagged = false
    var pos: Int = -1
    var endPos: Int = -1
    var func: FunctionScope? = null
    abstract fun visitChildren(visit: ChildrenVisitor)
}

data class DummyNode(val dummy: Boolean) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

data class IdDecl(val name: String) : Node() {
    override fun toString(): String = name
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

data class Id(val name: String, override val type: FType) : Expr() {
    init {
        validate(name)
    }

    companion object {
        fun isValid(name: String): Boolean = isValidMsg(name) == null
        fun isValidMsg(name: String): String? {
            if (name.isEmpty()) return "Empty is not a valid identifier"
            if (!name[0].isAlphaOrUnderscore()) return "Identifier must start with a-zA-Z_"
            if (!name.all { it.isAlnumOrUnderscore() }) return "Identifier can only contain a-zA-Z0-9_"
            return null
        }

        fun validate(name: String): String {
            throw ExpectException(isValidMsg(name) ?: return name)
        }
    }

    override fun visitChildren(visit: ChildrenVisitor) = Unit
    override fun toString(): String = name
}

data class StringConstant(val raw: String) : Expr() {
    override val type get() = FType.CHAR_PTR
    val value get() = raw.cunquoted

    init {
        validate(raw)
    }

    companion object {
        fun isValid(data: String): Boolean = isValidMsg(data) == null
        fun isValidMsg(data: String): String? {
            if (!data.startsWith('"')) return "Not starting with '\"'"
            return null
        }

        fun validate(data: String) {
            throw ExpectException(isValidMsg(data) ?: return)
        }
    }

    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

data class CharConstant(val raw: String) : Expr() {
    override val type get() = FType.CHAR

    val value get() = raw.cunquoted.getOrElse(0) { '\u0000' }

    init {
        validate(raw)
    }

    companion object {
        fun isValid(data: String): Boolean = isValidMsg(data) == null
        fun isValidMsg(data: String): String? {
            if (!data.startsWith('\'')) return "Not starting with \"\'\""
            return null
        }

        fun validate(data: String) {
            throw ExpectException(isValidMsg(data) ?: return)
        }
    }

    override fun visitChildren(visit: ChildrenVisitor) = Unit
}

fun IntConstant(value: Int): IntConstant = IntConstant("$value")
data class IntConstant(val data: String) : Expr() {
    override val type get() = FType.INT

    val dataWithoutSuffix = data.removeSuffix("u").removeSuffix("l").removeSuffix("L")

    val value get() = when {
        dataWithoutSuffix.startsWith("0x") || dataWithoutSuffix.startsWith("0X") -> dataWithoutSuffix.substring(2).toInt(16)
        dataWithoutSuffix.startsWith("0") -> dataWithoutSuffix.toInt(8)
        else -> dataWithoutSuffix.toInt()
    }

    init {
        validate(data)
    }

    companion object {
        fun isValid(data: String): Boolean = isValidMsg(data) == null
        fun isValidMsg(data: String): String? {
            if (data.contains(".")) return "Decimal"
            if (data.startsWith('-')) return null // Negated number
            if (data.startsWith("0x")) return null // Hex
            if (data.startsWith("0")) return null // Octal
            if (data.firstOrNull() in '0'..'9' && !data.contains('.') && !data.endsWith('f')) return null
            return "Constant can only contain digits"
        }

        fun validate(data: String) {
            throw ExpectException(isValidMsg(data) ?: return)
        }
    }

    override fun visitChildren(visit: ChildrenVisitor) = Unit
    override fun toString(): String = data
}

data class DoubleConstant(val data: String) : Expr() {
    override val type get() = FType.DOUBLE

    val dataWithoutSuffix = data.removeSuffix("f")
    val value get() = dataWithoutSuffix.toDouble()

    init {
        validate(data)
    }

    companion object {
        fun isValid(data: String): Boolean = isValidMsg(data) == null
        fun isValidMsg(data: String): String? {
            if (data.firstOrNull() in '0'..'9' || data.firstOrNull() == '.') return null
            return "Constant can only contain digits"
        }

        fun validate(data: String) {
            throw ExpectException(isValidMsg(data) ?: return)
        }
    }

    override fun visitChildren(visit: ChildrenVisitor) = Unit
    override fun toString(): String = data
}

abstract class Expr : Node() {
    abstract val type: FType
}

fun Expr.not() = UnaryExpr("!", this)

abstract class LValue : Expr()

data class CommaExpr(val exprs: List<Expr>) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(exprs)
    override val type: FType get() = exprs.last().type
}
data class ConstExpr(val expr: Expr) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr)
    override val type: FType get() = expr.type
}

abstract class SingleOperandExpr() : Expr() {
    abstract val operand: Expr
}

abstract class BaseUnaryOp() : SingleOperandExpr() {
    abstract val op: String
}

data class UnaryExpr(override val op: String, val rvalue: Expr) : BaseUnaryOp() {
    override val operand get() = rvalue

    val rvalueType = rvalue.type

    override fun visitChildren(visit: ChildrenVisitor) = visit(rvalue)

    override val type: FType get() = when (op) {
        "*" -> if (rvalueType is BasePointerFType) rvalueType.elementType else rvalueType
        "&" -> PointerFType(rvalueType, false)
        else -> rvalueType
    }
}

data class PostfixExpr(val lvalue: Expr, override val op: String) : BaseUnaryOp() {
    override val operand get() = lvalue
    override val type: FType get() = lvalue.type // @TODO: Fix Type
    override fun visitChildren(visit: ChildrenVisitor) = visit(lvalue)
}

data class AssignExpr(val l: Expr, val op: String, val r: Expr) : Expr() {
    override val type: FType get() = l.type // @TODO: Fix Type
    override fun visitChildren(visit: ChildrenVisitor) = visit(l, r)
}

data class ArrayAccessExpr(val expr: Expr, val index: Expr) : LValue() {
    val arrayType = expr.type
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr, index)
    override val type: FType get() = when (arrayType) {
        is PointerFType -> arrayType.elementType
        is ArrayFType -> arrayType.elementType
        else -> FType.INT
    }
}
data class FieldAccessExpr(val expr: Expr, val id: IdDecl, val indirect: Boolean, override val type: FType) : LValue() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr)
}
data class CallExpr(val expr: Expr, val args: List<Expr>) : Expr() {
    override val type: FType get() {
        val etype = expr.type
        return when (etype) {
            is FunctionFType -> etype.retType
            else -> etype
        }
    }
    override fun visitChildren(visit: ChildrenVisitor) = run { visit(expr); visit(args) }
}

data class OperatorsExpr(val exprs: List<Expr>, val ops: List<String>) : Expr() {
    override val type: FType get() = exprs.first().type
    companion object {
        val precedences = listOf(
                "*", "/", "%",
                "+", "-",
                "<<", ">>",
                "<", "<=", ">", ">=",
                "==", "!=",
                "&",
                "|",
                "&&",
                "||",
                "=", "*=", "/=", "%=", "+=", "-=", "<<=", ">>=", "&=", "^=", "|="
        ).withIndex().associate { it.value to it.index }
        fun compareOps(l: String, r: String): Int = (precedences[l] ?: -1).compareTo(precedences[r] ?: -1)
    }
    override fun visitChildren(visit: ChildrenVisitor) = run { visit(exprs) }
    fun expand(): Expr {
        var out = Binop(exprs[0], ops[0], exprs[1])
        for ((next, op) in exprs.drop(2).zip(ops.drop(1))) {
            out = if (compareOps(out.op, op) > 0) {
                Binop(out.l, out.op, Binop(out.r, op, next))
            } else {
                Binop(out, op, next)
            }
        }
        return out


        //var out = exprs.first()
        //var first = true
        //for ((next, op) in exprs.drop(1).zip(ops)) {
        //    if (!first && out is Binop && compareOps(out.op, op) > 0) {
        //        //println("prevL=${out.l}, prevR=${out.r}, prevOP=${out.op}, nextOP=${op}, next=${next}")
        //        out = Binop(out.l, out.op, Binop(out.r, op, next))
        //        //println(" ---> $out")
        //    } else {
        //        out = Binop(out, op, next)
        //    }
        //    first = false
        //}
        //return out
    }
}

data class Binop(val l: Expr, val op: String, val r: Expr) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(l, r)
    override val type: FType get() = when (op) {
        "==", "!=", "<", "<=", ">", ">=" -> FType.BOOL
        else -> when (l.type) {
            is BasePointerFType -> when (op) {
                "-" -> FType.INT
                else -> l.type
            }
            else -> l.type
        }
    }
}

abstract class Stm : Node()

data class RawStm(val raw: String) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}
data class CommentStm(val comment: String) : Stm() {
    val multiline = comment.contains('\n')
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}
data class EmptyStm(val reason: String) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}
data class IfElse(val cond: Expr, val strue: Stm, val sfalse: Stm?) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(cond, strue).also { if (sfalse != null) visit(sfalse) }
}
abstract class Loop : Stm() {
    abstract val body: Stm
    var addScope = true
    var onBreak: (() -> Stm)? = null
    var onContinue: (() -> Stm)? = null
}
data class While(val cond: Expr, override val body: Stm) : Loop() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(cond, body)
}
data class DoWhile(override val body: Stm, val cond: Expr) : Loop() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(body, cond)
}
data class For(val init: Node?, val cond: Expr?, val post: Expr?, override val body: Stm) : Loop() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(init).also { visit(cond) }.also { visit(post) }.also { visit(body) }
}
data class Goto(val id: IdDecl) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}
data class Continue(val dummy: Boolean = true) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}
data class Break(val dummy: Boolean = true) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}
data class Return(val expr: Expr?) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr)
}
abstract class SwitchBase() : Stm() {
    abstract val subject: Expr
    abstract val body: Stms
    val bodyCases by lazy { body.stms.filterIsInstance<DefaultCaseStm>().sortedBy { if (it is CaseStm) -1 else +1 } }
    override fun visitChildren(visit: ChildrenVisitor) = visit(subject, body)
}
data class Switch(override val subject: Expr, override val body: Stms) : SwitchBase()
data class SwitchWithoutFallthrough(override val subject: Expr, override val body: Stms) : SwitchBase()
data class ExprStm(val expr: Expr?) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr)
}
data class LabeledStm(val id: IdDecl, val stm: Stm) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id, stm)
}

abstract class DefaultCaseStm() : Stm() {
    abstract val optExpr: Expr?
    abstract val stm: Stms
}
data class CaseStm(val expr: ConstExpr, override val stm: Stms) : DefaultCaseStm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr, stm)
    override val optExpr: Expr? get() = expr
}
data class DefaultStm(override val stm: Stms) : DefaultCaseStm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(stm)
    override val optExpr: Expr? get() = null
}

data class Stms(val stms: List<Stm>) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(stms)
}

fun Stm.stms(): Stms = if (this is Stms) this else Stms(listOf(this))

abstract class Decl : Stm()

abstract class CParamBase() : Node()

data class CParamVariadic(val dummy: Boolean) : CParamBase() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
    override fun toString(): String = "..."
}

data class CParam(val decl: ParameterDecl, val type: FType, val nameId: IdentifierDeclarator) : CParamBase() {
    val name get() = nameId.id

    override fun visitChildren(visit: ChildrenVisitor) = visit(decl, nameId)
    override fun toString(): String = "$type $name"
}

data class FuncDecl(val rettype: ListTypeSpecifier, val name: IdDecl, val params: List<CParam>, val body: Stms, val varargs: Boolean) : Decl() {
    val paramsWithVariadic: List<CParamBase> = if (varargs) params + listOf(CParamVariadic(true)) else params
    override fun visitChildren(visit: ChildrenVisitor) = visit(name, rettype, body)
}

val ProgramParserRef.warnings: List<ProgramMessage> get() = parser.warnings
val ProgramParserRef.errors: List<ProgramMessage> get() = parser.errors
val ProgramParserRef.warningsAndErrors: List<ProgramMessage> get() = parser.warnings + parser.errors

data class Program(val decls: List<Decl>, override val parser: ProgramParser) : Node(), ProgramParserRef {
    fun getFunctionOrNull(name: String): FuncDecl? = decls.filterIsInstance<FuncDecl>().firstOrNull { it.name.name == name }
    fun getFunction(name: String): FuncDecl = getFunctionOrNull(name) ?: error("Can't find function named '$name'")
    override fun visitChildren(visit: ChildrenVisitor) = visit(decls)
}

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
    return Id(name, symbol?.type ?: FType.INT)
}

fun ProgramParser.identifierDecl(): IdDecl {
    return IdDecl(read())
}

fun ProgramParser.primaryExpr(): Expr = tryPrimaryExpr() ?: TODO(::primaryExpr.name)

fun ProgramParser.tryPrimaryExpr(): Expr? = tag {
    when (val v = peek()) {
        "+", "-" -> {
            val op = read()
            UnaryExpr(op, primaryExpr())
        }
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
                DoubleConstant.isValid(v) -> DoubleConstant(read())
                else -> null
            }
        }
    }
}


//fun ProgramParser.tryExpression(): Expr? = tryBlock { expression() }

// (6.5.2) postfix-expression:
fun ProgramParser.tryPostFixExpression(): Expr? {
    var expr = tryPrimaryExpr() ?: return null
    loop@while (!eof) {
        expr = when (peek()) {
            "[" -> {
                expect("[")
                val index = expression()
                expect("]")
                if (expr.type !is PointerFType && expr.type !is ArrayFType) {
                    reportWarning("Can't array-access a non-pointer type ${expr.type}")
                }
                ArrayAccessExpr(expr, index)
            }
            "(" -> {
                val exprType = expr.type
                // @TODO: Might be: ( type-name ) { initializer-list }
                if (exprType !is FunctionFType) {
                    reportError("Not calling a function ($exprType)")
                }

                expect("(")
                //val args = list(")", ",") { expression() }
                val args = list(")", ",") { assignmentExpr() }
                expect(")")
                if (exprType is FunctionFType) {
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
            ".", "->" -> {
                val indirect = read() == "->"

                val id = if (Id.isValid(peek())) identifierDecl() else {
                    reportError("Expected identifier after field access")
                    IdDecl("<unknown>")
                }
                val _type = expr.type

                val type = if (_type is PointerFType) {
                    _type.elementType
                } else {
                    _type
                }
                val expectedIndirect = _type is PointerFType || _type is ArrayFType

                if (indirect != expectedIndirect) {
                    if (indirect) {
                        reportError("Expected . but found ->")
                    } else {
                        reportError("Expected -> but found .")
                    }
                }

                val resolvedType2 = type.fresolve()
                val resolvedType = if (resolvedType2 is BasePointerFType) resolvedType2.elementType else resolvedType2

                val ftype = if (resolvedType is StructFType) {
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
                FieldAccessExpr(expr, id, indirect, ftype ?: FType.INT)
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

data class CastExpr(val expr: Expr, override val type: FType) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr)
}
fun Expr.castTo(type: FType) = if (this.type != type) CastExpr(this, type) else this

abstract class SizeOfAlignExprBase() : Expr() {
    abstract val ftype: FType
}

data class SizeOfAlignTypeExpr(val kind: String, val typeName: TypeName) : SizeOfAlignExprBase() {
    override val type: FType get() = FType.INT
    override val ftype by lazy { typeName.toFinalType() }
    override fun visitChildren(visit: ChildrenVisitor) = visit(typeName)
}

data class SizeOfAlignExprExpr(val expr: Expr) : SizeOfAlignExprBase() {
    override val ftype = expr.type
    override val type: FType get() = FType.INT
    override fun visitChildren(visit: ChildrenVisitor) = visit(expr)
}

fun ProgramParser.tryUnaryExpression(): Expr? = tag {
    when (peek()) {
        "++", "--" -> {
            val op = read()
            val expr = tryUnaryExpression()
            UnaryExpr(op, expr!!)
        }
        "&", "*", "+", "-", "~", "!" -> {
            val op = read()
            val expr = tryCastExpression() ?: parserException("Cast expression expected")
            UnaryExpr(op, expr)
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
        OperatorsExpr(exprs, ops).expand()
    }
}

data class ConditionalExpr(val cond: Expr, val etrue: Expr, val efalse: Expr) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(cond, etrue, efalse)
    override val type: FType get() = etrue.type
}

fun ProgramParser.tryConditionalExpr(): Expr? = tag {
    val expr = tryBinopExpr()
    if (expr != null && !eof && peek() == "?") {
        expect("?")
        val etrue = expression()
        expect(":")
        val efalse = tryConditionalExpr()!!
        ConditionalExpr(expr, etrue, efalse)
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
            reportWarning("Can't assign ${right.type} to ${left.type} (${right.type.fresolve()} != ${left.type.fresolve()})")
        }
        AssignExpr(left, op, right)
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
    return ConstExpr(expression()) // @TODO: Validate it is constant
}

fun ProgramParser.stringLiteral(): ConstExpr {
    return ConstExpr(expression()) // @TODO: Validate it is constant
}

private inline fun <T : Node?> ProgramParser.tag(callback: () -> T): T {
    val startPos = this.pos
    return callback().apply {
        if (this?.tagged != true) {
            this?.tagged = true
            this?.pos = startPos
            this?.endPos = pos
            if (this?.func == null) {
                this?.func = _functionScope
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
        "goto" -> run { _functionScope?.hasGoto = true; expect("goto"); val id = identifierDecl(); expect(";"); Goto(id) }
        "continue" -> run { expect("continue", ";"); Continue() }
        "break" -> run { expect("break", ";"); Break() }
        "return" -> {
            expect("return")
            val expr = tryExpression()
            //println(functionScope.type)
            //println(functionScope.rettype)
            when {
                expr == null && functionScope.rettype != FType.VOID -> reportError("Return must return ${functionScope.rettype}")
                expr != null && !expr.type.canAssignTo(functionScope.rettype, this) -> reportError("Returned ${expr.type} but must return ${functionScope.rettype} (${expr.type.fresolve(FType.INT)} != ${_functionScope?.rettype?.fresolve(FType.INT)})")
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

abstract class TypeSpecifier : Node()

data class VariadicTypeSpecifier(val id: IdDecl) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}

fun List<TypeSpecifier>.withoutTypedefs() = this.filter { ((it !is StorageClassSpecifier) || it.kind != StorageClassSpecifier.Kind.TYPEDEF) && it !is TypedefTypeSpecifierName }
data class ListTypeSpecifier(val items: List<TypeSpecifier>) : TypeSpecifier() {
    fun isEmpty() = items.isEmpty()
    override fun visitChildren(visit: ChildrenVisitor) = visit(items)
    val hasTypedef get() = items.any { it is StorageClassSpecifier && it.kind == StorageClassSpecifier.Kind.TYPEDEF }
    val typedefId get() = items.filterIsInstance<TypedefTypeSpecifierName>()?.firstOrNull()?.id
}
data class AtomicTypeSpecifier(val id: Node) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}
data class BasicTypeSpecifier(val id: Kind) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
    enum class Kind(override val keyword: String) : KeywordEnum {
        VOID("void"), CHAR("char"), SHORT("short"), INT("int"), LONG("long"), FLOAT("float"), DOUBLE("double"), SIGNED("signed"), UNSIGNED("unsigned"), BOOL("_Bool"), COMPLEX("_Complex");
        companion object : KeywordEnum.Companion<Kind>({ values() })
    }
}
data class TypedefTypeSpecifierName(val id: String): TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}
data class TypedefTypeSpecifierRef(val id: String): TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}
data class AnonymousTypeSpecifier(val kind: String, val id: Id?) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}
data class StructUnionTypeSpecifier(val kind: String, val id: IdDecl?, val decls: List<StructDeclaration>) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id).also { visit(decls) }
}

interface KeywordEnum {
    val keyword: String

    open class Companion<T : KeywordEnum>(val gen: () -> Array<T>) {
        val BY_KEYWORD = gen().associateBy { it.keyword }
        operator fun get(keyword: String) = BY_KEYWORD[keyword] ?: error("Can't find enum entry with keyword '$keyword'")
    }
}


data class StorageClassSpecifier(val kind: Kind) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
    enum class Kind(override val keyword: String) : KeywordEnum {
        TYPEDEF("typedef"), EXTERN("extern"), STATIC("static"), THREAD_LOCAL("_Thread_local"), AUTO("auto"), REGISTER("register");
        companion object : KeywordEnum.Companion<Kind>({ values() })
    }
}
data class TypeQualifier(val kind: Kind) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
    enum class Kind(override val keyword: String) : KeywordEnum {
        CONST("const"), RESTRICT("restrict"), VOLATILE("volatile"), ATOMIC("_Atomic");
        companion object : KeywordEnum.Companion<Kind>({ values() })
    }
}
data class FunctionSpecifier(val kind: String) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}
data class AlignAsSpecifier(val info: Node) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(info)
}

data class TypeName(val specifiers: ListTypeSpecifier, val abstractDecl: AbstractDeclarator?) : TypeSpecifier() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(specifiers, abstractDecl)
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
    loop@while (true) {
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

open class AbstractDeclarator(val ptr: Pointer?, val adc: Node?) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(ptr, adc)
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
    val result = if (out.isEmpty()) null else ListTypeSpecifier(out)
    if (hasTypedef) {
        result!!
        val name = out.filterIsInstance<TypedefTypeSpecifierName>().firstOrNull() ?: error("Typedef doesn't include a name")
        // @TODO: Merge those?
        typedefTypes[name.id] = result
        typedefAliases[name.id] = ListTypeSpecifier(result.items.withoutTypedefs()).toFinalType()

        val structTypeSpecifier = out.filterIsInstance<StructUnionTypeSpecifier>().firstOrNull()
        if (structTypeSpecifier != null) {
            val structType = getStructTypeInfo(structTypeSpecifier)
            structTypesByName.remove(structType.name)
            structType.name = name.id
            structTypesByName[structType.name] = structType
        }

        //out.firstIsInstance<TypedefTypeSpecifier>().id
        //println("hasTypedef: $hasTypedef")
    }
    return result
}

fun ProgramParser.type(): ListTypeSpecifier= tag {
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

data class StructDeclarator(val declarator: Declarator?, val bit: ConstExpr?) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(declarator, bit)
}
data class StructDeclaration(val specifiers: ListTypeSpecifier, val declarators: List<StructDeclarator>) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(specifiers).also { visit(declarators) }
}

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

fun ProgramParser.tryDeclarationSpecifier(hasTypedef: Boolean, hasMoreSpecifiers: Boolean, sure: Boolean = false): TypeSpecifier? = tag {
    when (val v = peek()) {
        "typedef", "extern", "static", "_Thread_local", "auto", "register" -> StorageClassSpecifier(StorageClassSpecifier.Kind[read()]!!)
        "const", "restrict", "volatile", "_Atomic" -> TypeQualifier(TypeQualifier.Kind[read()])
        "inline", "_Noreturn" -> FunctionSpecifier(read())
        "_Alignas" -> {
            expect("_Alignas")
            expect("(")
            val node = tryTypeName() ?: constantExpression()
            expect(")")
            AlignAsSpecifier(node)
        }
        "_Atomic" -> {
            expect("_Atomic", "(")
            TODO("_Atomic")
            val name = typeName()
            expect(")")
            AtomicTypeSpecifier(name)
        }
        "void", "char", "short", "int", "long", "float", "double", "signed", "unsigned", "_Bool", "_Complex" -> {
            BasicTypeSpecifier(BasicTypeSpecifier.Kind[read()])
        }
        "enum" -> {
            val kind = read()
            val id = if (peek() != "{") identifier() else null
            if (peek() != "{") {
                expect("{")
                TODO("enum")
                expect("}")
            }
            TODO("enum")
        }
        "struct", "union" -> {
            val kind = read()
            val id = if (peek() != "{") identifierDecl() else null
            val decls = if (peek() == "{") {
                expect("{")
                val decls = list("}", null) { tryStructDeclaration() ?: error("No a struct-declaration") }
                expect("}")
                decls
            } else {
                null
            }
            val struct = StructUnionTypeSpecifier(kind, id, decls ?: listOf())

            // Analyzer
            run {
                val it = struct
                val isUnion = struct.kind == "union"
                val structName = it.id?.name ?: "Anonymous${structId++}"
                val structType = StructTypeInfo(structName, it, StructFType(it))
                structTypesByName[structName] = structType
                structTypesBySpecifier[it] = structType
                var offset = 0
                var maxSize = 0
                for (decl in it.decls) {
                    val ftype = decl.specifiers.toFinalType()
                    for (dtors in decl.declarators) {
                        val name = dtors.declarator?.getName() ?: "unknown"
                        val rftype = ftype.withDeclarator(dtors.declarator)
                        val rsize = rftype.getSize()
                        structType.addField(StructField(name, rftype, offset, rsize, decl))
                        maxSize = kotlin.math.max(maxSize, rsize)
                        if (!isUnion) {
                            offset += rsize
                        }
                    }
                }
                structType.size = if (isUnion) maxSize else offset
            }

            struct
        }
        else -> when {
            v in typedefTypes -> TypedefTypeSpecifierRef(read())
            hasTypedef && Id.isValid(v) -> TypedefTypeSpecifierName(read())
            else -> when {
                hasMoreSpecifiers -> null // @TODO: check?
                sure -> throw ExpectException("'$v' is not a valid type")
                else -> null
            }
        }
    }
}

data class Pointer(val qualifiers: List<TypeQualifier>, val parent: Pointer?) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(qualifiers).also { visit(parent) }
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

data class ParameterDecl(val specs: ListTypeSpecifier, val declarator: Declarator) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(specs, declarator)
}

abstract class Declarator: Node()

data class VarargDeclarator(val id: IdentifierDeclarator) : Declarator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}

data class DeclaratorWithPointer(val pointer: Pointer, val declarator: Declarator): Declarator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(pointer, declarator)
}
data class IdentifierDeclarator(val id: IdDecl) : Declarator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(id)
}
data class CompoundDeclarator(val decls: List<Declarator>) : Declarator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(decls)
}
data class ParameterDeclarator(val base: Declarator, val decls: List<ParameterDecl>) : Declarator() {
    val variadic = decls.any { it.declarator is VarargDeclarator }
    val declsWithoutVariadic = decls.filter { it.declarator !is VarargDeclarator }
    override fun visitChildren(visit: ChildrenVisitor) = visit(base).also { visit(decls) }
}
data class ArrayDeclarator(val base: Declarator, val typeQualifiers: List<TypeQualifier>, val expr: Expr?, val static0: Boolean, val static1: Boolean) : Declarator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(base).also { visit(typeQualifiers) }.also { visit(expr) }
}

// (6.7.6) parameter-declaration:
fun ProgramParser.parameterDeclaration(): ParameterDecl = tag {
    if (peek() == "...") {
        val id = tag { IdDecl(read()) }
        ParameterDecl(ListTypeSpecifier(listOf(VariadicTypeSpecifier(id))), VarargDeclarator(IdentifierDeclarator(id)))
    } else {
        val specs = declarationSpecifiers() ?: error("Expected declaration specifiers at $this")
        val decl = declarator()
        ParameterDecl(specs, decl)
    }
}

// (6.7.6) declarator:
// (6.7.6) direct-declarator:
fun ProgramParser.declarator(): Declarator = tryDeclarator()
        ?: throw ExpectException("Not a declarator at $this")

fun ProgramParser.tryDeclarator(): Declarator? = tag {
    val pointer = tryPointer()
    var out: Declarator? = null
    loop@while (true) {
        out = when (peek()) {
            "(" -> {
                // ( declarator )
                tag {
                    if (out == null) {
                        expect("(")
                        val decl = declarator()
                        expect(")")
                        decl
                    }
                    // direct-declarator ( parameter-type-list )
                    // direct-declarator ( identifier-listopt )
                    else {
                        expect("(")
                        val params = list(")", ",") { parameterDeclaration() }
                        expect(")")
                        ParameterDeclarator(out as Declarator, params)
                    }
                }
            }
            // direct-declarator [ type-qualifier-listopt assignment-expressionopt ]
            // direct-declarator [ static type-qualifier-listopt assignment-expression ]
            // direct-declarator [type-qualifier-list static assignment-expression]
            // direct-declarator [type-qualifier-listopt *]
            "[" -> {
                if (out == null) break@loop
                tag {
                    expect("[")
                    val static0 = tryExpect("static") != null
                    val typeQualifiers = whileNotNull { tryTypeQualifier() }
                    val static1 = tryExpect("static") != null
                    val expr = tryExpression()
                    expect("]")
                    ArrayDeclarator(out!!, typeQualifiers, expr, static0, static1)
                }
            }
            else -> {
                // identifier
                if (Id.isValid(peek())) {
                    tag { IdentifierDeclarator(identifierDecl()) }
                }
                // Not part of the declarator
                else {
                    break@loop
                }
            }
        }

    }
    return when {
        out == null -> null
        pointer != null -> DeclaratorWithPointer(pointer, out)
        else -> out
    }
}

abstract class Designator : Node()
data class ArrayAccessDesignator(val constant: ConstExpr) : Designator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(constant)
}
data class FieldAccessDesignator(val field: Id) : Designator() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(field)
}

data class DesignatorList(val list: List<Designator>) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(list)
}

// (6.7.9) designator:
fun ProgramParser.tryDesignator(): Designator? = tag {
    when (peek()) {
        "." -> {
            expect(".")
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

data class DesignOptInit(val design: DesignatorList?, val initializer: Expr) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(design, initializer)
}

fun ProgramParser.designOptInitializer(): DesignOptInit = tag {
    val designationOpt = tryDesignation()
    val initializer = initializer(FType.UNKNOWN)
    DesignOptInit(designationOpt, initializer)
}

data class ArrayInitExpr(val items: List<DesignOptInit>, val ltype: FType) : Expr() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(items)
    override val type: FType get() = ltype
}

// (6.7.9) initializer:
fun ProgramParser.initializer(ltype: FType): Expr = tag {
    if (peek() == "{") {
        expect("{")
        val items = list("}", ",", tailingSeparator = true) { designOptInitializer() }
        expect("}")
        ArrayInitExpr(items, ltype)
    } else {
        tryAssignmentExpr() ?: error("Not an assignment-expression")
    }
}

data class InitDeclarator(val decl: Declarator, val initializer: Expr?, val type: FType) : Node() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(decl, initializer)
}

// (6.7) init-declarator:
fun ProgramParser.initDeclarator(specsType: FType): InitDeclarator = tag {
    val decl = declarator()
    val ftype = specsType.withDeclarator(decl)
    val initializer = if (tryExpect("=") != null) initializer(ftype) else null
    if (initializer != null) {

        if (!initializer.type.canAssignTo(ftype, this)) {
            reportWarning("Can't assign ${initializer.type} to $ftype (${initializer.type.fresolve()} != ${ftype.fresolve()})")
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
                val nameId = item.decl.getNameId()
                val token = token(nameId.pos)
                symbols.registerInfo(nameId.id.name, specs.toFinalType(item.decl), nameId, token)
            }
            Declaration(specs, initDeclaratorList)
        }
    }
}

data class Declaration(val specs: ListTypeSpecifier, val initDeclaratorList: List<InitDeclarator>): Decl() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(specs).also { visit(initDeclaratorList) }
}

fun Declaration(type: FType, name: String, init: Expr? = null): Declaration {
    return Declaration(ListTypeSpecifier(listOf(BasicTypeSpecifier(BasicTypeSpecifier.Kind.INT))), listOf(
            InitDeclarator(IdentifierDeclarator(IdDecl(name)), init, type)
    ))
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
    else -> error("Not a DeclaratorWithPointer $this")
}

// (6.9.1) function-definition:
fun ProgramParser.functionDefinition(): FuncDecl = tag {
    try {
        val rettype = declarationSpecifiers() ?: parserException("Can't declarationSpecifiers $this")
        val decl = declarator()
        val paramDecl = decl.extractParameter()
        if (paramDecl.base !is IdentifierDeclarator) parserException("Function without name at $this but decl.base=${paramDecl.base}")
        val name = paramDecl.base.id
        val variadic = paramDecl.decls.any { it.declarator is VarargDeclarator }
        val params = paramDecl.decls.filter { it.declarator !is VarargDeclarator }.map { it.toCParam() }
        val funcType = rettype.toFinalType(decl) as FunctionFType
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
                FuncDecl(rettype, name, params, body, variadic).apply {
                    func = _functionScope
                }
            }
        }
    } catch (e: Throwable) {
        //println(e)
        throw e
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
    } catch (e: ParserException) {
        reportError(e)
        skip(1)
        null
    }
}

// (6.7.2) type-specifier:
fun ProgramParser.tryTypeSpecifier(): TypeSpecifier? = tag<TypeSpecifier> {
    TODO("tryTypeSpecifier")
    when (peek()) {

    }
}

fun ProgramParser.typeSpecifier() = tryTypeSpecifier() ?: error("Not a type specifier at '${this.peek()}'")

// (6.9) translation-unit
fun ProgramParser.translationUnits() = tag {
    val decls = arrayListOf<Decl>()
    try {
        while (true) {
            consumeLineMarkers()
            if (eof) break
            decls += tryExternalDeclaration() ?: continue
        }
    } catch (eof: EOFException) {

    }
    Program(decls, this)
}

fun ProgramParser.program(): Program = translationUnits()

fun ListReader<CToken>.programParser() = ProgramParser(this.items.map { it.str }, this.items, this.pos)
fun ListReader<String>.program() = ListReader(this.items.map { CToken(it) }, CToken("") ).programParser().program()
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
    is UnaryExpr -> {
        val rv = this.rvalue.constantEvaluate(ctx)
        when (op) {
            "!" -> !rv.toBool()
            else -> TODO("Unop: $op")
        }
    }
    is IntConstant -> this.value
    is DoubleConstant -> this.value
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



