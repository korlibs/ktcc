package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

class ProgramParser(items: List<String>, pos: Int = 0) : ListReader<String>(items, "<eof>", pos) {
    val POINTER_SIZE = 4
    val typedefTypes = LinkedHashMap<String, ListTypeSpecifier>()
    val typedefAliases = LinkedHashMap<String, FType>()
    val current get() = this.peek()
    val strings = LinkedHashSet<String>()

    var structId = 0
    val structTypesByName = LinkedHashMap<String, ProgramType>()
    val structTypesBySpecifier = LinkedHashMap<StructUnionTypeSpecifier, ProgramType>()

    fun FType.getSize(): Int = when (this) {
        is IntFType -> size ?: 4
        is PointerFType -> POINTER_SIZE
        else -> error("${this::class.java}: $this")
    }

    fun getType(name: String): ProgramType {
        return structTypesByName[name] ?: error("Can't find type by name $name")
    }

    fun getType(spec: StructUnionTypeSpecifier): ProgramType {
        return structTypesBySpecifier[spec] ?: error("Can't find type by spec $spec")
    }

    override fun toString(): String = "ProgramParser(current='$current', pos=$pos)"
}

data class StructField(val name: String, var type: FType, val offset: Int, val size: Int) {
    val offsetName = "OFFSET_$name"
}

data class ProgramType(
        var name: String,
        //val spec: StructUnionTypeSpecifier,
        val spec: TypeSpecifier,
        var size: Int = 0
) {
    val fields = arrayListOf<StructField>()
}

open class Node {
    var pos: Int = -1
}

data class Id(val name: String) : Expr() {
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

        fun validate(name: String) {
            throw ExpectException(isValidMsg(name) ?: return)
        }
    }

    override fun toString(): String = name
}

data class StringConstant(val raw: String) : Expr() {
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
}

data class CharConstant(val raw: String) : Expr() {
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
}

data class IntConstant(val data: String) : Expr() {
    val value get() = data.toInt()

    init {
        validate(data)
    }

    companion object {
        fun isValid(data: String): Boolean = isValidMsg(data) == null
        fun isValidMsg(data: String): String? {
            if (!data.all { it.isDigit() }) return "Constant can only contain digits"
            return null
        }

        fun validate(data: String) {
            throw ExpectException(isValidMsg(data) ?: return)
        }
    }

    override fun toString(): String = data
}

abstract class Expr : Node()

abstract class LValue : Expr()

data class ConstExpr(val expr: Expr) : Expr()
data class PostfixExpr(val lvalue: Expr, val op: String) : Expr()
data class Unop(val op: String, val lvalue: Expr) : Expr()
data class AssignExpr(val lvalue: Expr, val op: String, val value: Expr) : Expr()

data class ArrayAccessExpr(val expr: Expr, val index: Expr) : LValue()
data class FieldAccessExpr(val expr: Expr, val id: Id, val indirect: Boolean) : LValue()
data class CallExpr(val expr: Expr, val args: List<Expr>) : Expr()

data class OperatorsExpr(val exprs: List<Expr>, val ops: List<String>) : Expr() {
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

data class Binop(val l: Expr, val op: String, val r: Expr) : Expr()

abstract class Stm : Node()

data class IfElse(val cond: Expr, val strue: Stm, val sfalse: Stm?) : Stm()
data class While(val cond: Expr, val body: Stm) : Stm()
data class DoWhile(val expr: Expr, val body: Stm) : Stm()
data class For(val init: Node?, val cond: Expr?, val post: Expr?, val body: Stm) : Stm()
data class Goto(val id: Id) : Stm()
data class Continue(val dummy: Boolean = true) : Stm()
data class Break(val dummy: Boolean = true) : Stm()
data class Return(val expr: Expr?) : Stm()
data class Switch(val expr: Expr, val body: Stm) : Stm()
data class ExprStm(val expr: Expr?) : Stm()
data class LabeledStm(val id: Id, val stm: Stm) : Stm()
data class CaseStm(val expr: ConstExpr, val stm: Stm) : Stm()
data class DefaultStm(val stm: Stm) : Stm()
data class Stms(val stms: List<Stm>) : Stm()

abstract class Decl : Stm()

data class CParam(val type: FType, val name: String) : Node()

data class FuncDecl(val rettype: ListTypeSpecifier, val name: Id, val params: List<CParam>, val body: Stm) : Decl()

data class Program(val decls: List<Decl>, val parser: ProgramParser) : Node() {
    fun getFunctionOrNull(name: String): FuncDecl? = decls.filterIsInstance<FuncDecl>().firstOrNull { it.name.name == name }
    fun getFunction(name: String): FuncDecl = getFunctionOrNull(name) ?: error("Can't find function named '$name'")
}

fun <T> whileBlock(cond: (Int) -> Boolean, gen: () -> T): List<T> = arrayListOf<T>().apply { while (cond(size)) this += gen() }
fun <T> whileNotNull(gen: (Int) -> T?): List<T> = arrayListOf<T>().apply { while (true) this += gen(size) ?: break }

fun <T> ProgramParser.list(end: String, separator: String? = null, consumeEnd: Boolean = false, gen: () -> T): List<T> {
    val out = arrayListOf<T>()
    if (peek() != end) {
        while (true) {
            if (out.size >= 16 * 1024) {
                error("Array too big")
            }
            out += gen()
            if (peek() == separator) {
                read()
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
    return Id(read())
}

fun ProgramParser.primaryExpr(): Expr = tryPrimaryExpr() ?: TODO(::primaryExpr.name)

fun ProgramParser.tryPrimaryExpr(): Expr? = tag {
    when (val v = peek()) {
        "+", "-" -> {
            val op = read()
            Unop(op, primaryExpr())
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
                Id.isValid(v) -> Id(read())
                StringConstant.isValid(v) -> StringConstant(read().also { strings += it })
                CharConstant.isValid(v) -> CharConstant(read())
                IntConstant.isValid(v) -> IntConstant(read())
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
                ArrayAccessExpr(expr, index)
            }
            "(" -> {
                // @TODO: Might be: ( type-name ) { initializer-list }

                expect("(")
                val args = list(")", ",") { expression() }
                expect(")")
                CallExpr(expr, args)
            }
            ".", "->" -> {
                val indirect = read() == "->"
                val id = identifier()
                FieldAccessExpr(expr, id, indirect)
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

data class UnaryExpr(val op: String, val expr: Expr) : Expr()
data class CastExpr(val type: TypeName, val expr: Expr) : Expr()
data class SizeAlignTypeExpr(val kind: String, val typeName: Node) : Expr()

fun ProgramParser.tryUnaryExpression(): Expr? = tag {
    when (peek()) {
        "++", "--" -> {
            val op = read()
            val expr = tryUnaryExpression()
            UnaryExpr(op, expr!!)
        }
        "&", "*", "+", "-", "~", "!" -> {
            val op = read()
            val expr = tryCastExpression()
            UnaryExpr(op, expr!!)
        }
        "sizeof", "Alignof" -> {
            val kind = expectAny("sizeof", "Alignof")
            if (kind == "Alignof" || peek() == "(") {
                expect("(")
                val type = typeName()
                expect(")")
                SizeAlignTypeExpr(kind, type)
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
            val type = tryTypeName() ?: return@restoreOnNull null
            expect(")")
            val expr = tryCastExpression()
            CastExpr(type, expr!!)
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

    if (exprs.size == 0) throw ExpectException("Not a expression! at $this")

    if (exprs.size == 1) {
        exprs.first()
    } else {
        OperatorsExpr(exprs, ops).expand()
    }
}

data class ConditionalExpr(val cond: Expr, val etrue: Expr, val efalse: Expr) : Expr()

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

fun ProgramParser.tryAssignmentExpr(): Expr? = tag {
    val exprs = arrayListOf<Expr>()
    val ops = arrayListOf<String>()
    while (!eof) {
        exprs += tryConditionalExpr() ?: return null

        //println("PEEK AFTER EXPRESSION: ${peek()}")
        if (!eof && peek() in assignmentOperators) {
            ops += read()
            continue
        } else {
            break
        }
    }

    if (exprs.size == 0) throw ExpectException("Not a expression! at $this")

    if (exprs.size == 1) {
        exprs.first()
    } else {
        OperatorsExpr(exprs, ops).expand()
    }
}

fun ProgramParser.tryExpression(): Expr? = tryAssignmentExpr() // @TODO: Support comma separated
fun ProgramParser.expression(): Expr = tryExpression() ?: error("Not an expression at $this")

fun ProgramParser.constantExpression(): ConstExpr {
    return ConstExpr(expression()) // @TODO: Validate it is constant
}

fun ProgramParser.stringLiteral(): ConstExpr {
    return ConstExpr(expression()) // @TODO: Validate it is constant
}

private inline fun <T : Node?> ProgramParser.tag(callback: () -> T): T {
    val startPos = this.pos
    return callback().apply {
        this?.pos = startPos
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
        else -> tryBlocks("block-item", { declaration() }, { statement() })
    }
}

fun ProgramParser.statement(): Stm = tag {
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
            val body = statement()
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
            DoWhile(expr, body)
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
        "goto" -> run { expect("goto"); val id = identifier(); expect(";"); Goto(id) }
        "continue" -> run { expect("continue", ";"); Continue() }
        "break" -> run { expect("break", ";"); Break() }
        "return" -> {
            expect("return")
            val expr = tryExpression()
            expect(";")
            Return(expr)
        }
        // (6.8.2) compound-statement:
        "{" -> compoundStatement()
        // (6.8.1) labeled-statement:
        "case" -> {
            expect("case")
            val expr = constantExpression()
            expect(":")
            val stm = statement()
            CaseStm(expr, stm)

        }
        "default" -> run { expect("default", ":"); val stm = statement(); DefaultStm(stm) }
        // (6.8.3) expression-statement:
        else -> {
            val result = tryBlocks("expression-statement",
                    // (6.8.1) labeled-statement:
                    {
                        val id = identifier()
                        expect(":")
                        val stm = statement()
                        LabeledStm(id, stm)
                    },
                    {
                        val expr = tryExpression()
                        expect(";")
                        ExprStm(expr)
                    }
            )
            result ?: error("Can't be null!")
        }
    }
}

open class TypeSpecifier : Node()
fun List<TypeSpecifier>.withoutTypedefs() = this.filter { ((it !is StorageClassSpecifier) || it.kind != "typedef") && it !is TypedefTypeSpecifierName }
data class ListTypeSpecifier(val items: List<TypeSpecifier>) : TypeSpecifier() {
    fun isEmpty() = items.isEmpty()
    val hasTypedef get() = items.any { it is StorageClassSpecifier && it.kind == "typedef" }
    val typedefId get() = items.filterIsInstance<TypedefTypeSpecifierName>()?.firstOrNull()?.id
}
data class AtomicTypeSpecifier(val id: Node) : TypeSpecifier()
data class BasicTypeSpecifier(val id: String) : TypeSpecifier()
data class TypedefTypeSpecifierName(val id: String): TypeSpecifier()
data class TypedefTypeSpecifierRef(val id: String): TypeSpecifier()
data class AnonymousTypeSpecifier(val kind: String, val id: Id?) : TypeSpecifier()
data class StructUnionTypeSpecifier(val kind: String, val id: Id?, val decls: List<StructDeclaration>) : TypeSpecifier()

data class StorageClassSpecifier(val kind: String) : TypeSpecifier()
data class TypeQualifier(val kind: String) : TypeSpecifier()
data class FunctionSpecifier(val kind: String) : TypeSpecifier()
data class AlignAsSpecifier(val info: Node) : TypeSpecifier()

data class TodoNode(val todo: String) : TypeSpecifier()
data class TypeName(val specifiers: ListTypeSpecifier, val abstractDecl: AbstractDeclarator?) : TypeSpecifier()

// (6.7.7) type-name:
fun ProgramParser.typeName(): Node = tryTypeName() ?: TODO("typeName")
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
                TODO("tryDirectAbstractDeclarator")
                expect("(")
                val adc = tryAbstractDeclarator()
                expect(")")
                adc
            }
            "[" -> {
                TODO("tryDirectAbstractDeclarator")
            }
            else -> break@loop
        }
    }
    return out
}

open class AbstractDeclarator(val ptr: Pointer?, adc: Node?) : Node()

fun ProgramParser.tryAbstractDeclarator(): AbstractDeclarator? = tag {
    val pointer = tryPointer()
    val adc = tryDirectAbstractDeclarator()
    if (pointer == null && adc == null) return null
    AbstractDeclarator(pointer, adc)
}

// (6.7) declaration-specifiers:
fun ProgramParser.declarationSpecifiers(): ListTypeSpecifier? {
    val out = arrayListOf<TypeSpecifier>()
    var hasTypedef = false
    while (true) {
        if (eof) error("eof found")
        val spec = tryDeclarationSpecifier(hasTypedef) ?: break
        if (spec is StorageClassSpecifier && spec.kind == "typedef") hasTypedef = true
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
        "const", "restrict", "volatile", "_Atomic" -> TypeQualifier(read())
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

open class StructDeclarator(val declarator: Declarator?, val bit: ConstExpr?) : Node()
open class StructDeclaration(val specifiers: ListTypeSpecifier, val declarators: List<StructDeclarator>) : Node()

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
        val declarators = whileNotNull { tryStructDeclarator() }
        expect(";")
        StructDeclaration(specifiers!!, declarators)
    }
}

fun ProgramParser.tryDeclarationSpecifier(hasTypedef: Boolean): TypeSpecifier? = tag {
    when (val v = peek()) {
        "typedef", "extern", "static", "_Thread_local", "auto", "register" -> StorageClassSpecifier(read())
        "const", "restrict", "volatile", "_Atomic" -> TypeQualifier(read())
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
            BasicTypeSpecifier(read())
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
            val id = if (peek() != "{") identifier() else null
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
                val structName = it.id?.name ?: "Unknown${structId++}"
                val structType = ProgramType(structName, it)
                structTypesByName[structName] = structType
                structTypesBySpecifier[it] = structType
                var offset = 0
                for (decl in it.decls) {
                    val ftype = decl.specifiers.toFinalType()
                    for (dtors in decl.declarators) {
                        val name = dtors.declarator?.getName() ?: "unknown"
                        val rftype = ftype.withDeclarator(dtors.declarator)
                        val rsize = rftype.getSize()
                        structType.fields += StructField(name, rftype, offset, rsize)
                        offset += rsize
                    }
                }
                structType.size = offset
            }

            struct
        }
        else -> when {
            v in typedefTypes -> TypedefTypeSpecifierRef(read())
            hasTypedef && Id.isValid(v) -> TypedefTypeSpecifierName(read())
            else -> null
        }
    }
}

data class Pointer(val qualifiers: List<TypeQualifier>, val parent: Pointer?) : Node()

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

data class ParameterDecl(val specs: ListTypeSpecifier, val declarator: Declarator) : Node()

open class Declarator: Node()
data class DeclaratorWithPointer(val pointer: Pointer, val declarator: Declarator): Declarator()
data class IdentifierDeclarator(val id: Id) : Declarator()
data class CompoundDeclarator(val decls: List<Declarator>) : Declarator()
data class ParameterDeclarator(val base: Declarator, val decls: List<ParameterDecl>) : Declarator()

// (6.7.6) parameter-declaration:
fun ProgramParser.parameterDeclaration(): ParameterDecl = tag {
    val specs = declarationSpecifiers()
    val decl = declarator()
    ParameterDecl(specs!!, decl)
}

// (6.7.6) declarator:
// (6.7.6) direct-declarator:
fun ProgramParser.declarator(): Declarator = tryDeclarator()
        ?: throw ExpectException("Not a declarator")

fun ProgramParser.tryDeclarator(): Declarator? = tag {
    val pointer = tryPointer()
    var out: Declarator? = null
    loop@while (true) {
        out = when (peek()) {
            "(" -> {
                // ( declarator )
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
                    ParameterDeclarator(out, params)
                }
            }
            // direct-declarator [ type-qualifier-listopt assignment-expressionopt ]
            // direct-declarator [ static type-qualifier-listopt assignment-expression ]
            // direct-declarator [type-qualifier-list static assignment-expression]
            // direct-declarator [type-qualifier-listopt *]
            "[" -> {
                expect("[")
                TODO("tryDeclarator")
                expect("]")
                TODO("tryDeclarator")
            }
            else -> {
                // identifier
                if (Id.isValid(peek())) {
                    IdentifierDeclarator(identifier())
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

open class Designator : Node()
data class ArrayAccessDesignator(val constant: ConstExpr) : Designator()
data class FieldAccessDesignator(val field: Id) : Designator()

data class DesignatorList(val list: List<Designator>) : Node()

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

data class DesignOptInit(val design: DesignatorList?, val initializer: Expr) : Node()

fun ProgramParser.designOptInitializer(): DesignOptInit = tag {
    val designationOpt = tryDesignation()
    val initializer = initializer()
    DesignOptInit(designationOpt, initializer)
}

data class ArrayInitExpr(val items: List<DesignOptInit>) : Expr()

// (6.7.9) initializer:
fun ProgramParser.initializer(): Expr = tag {
    if (peek() == "{") {
        expect("{")
        val items = list("}", ",") { designOptInitializer() }
        expect("}")
        ArrayInitExpr(items)
    } else {
        expression()
    }
}

data class InitDeclarator(val decl: Declarator, val initializer: Expr?) : Node()

// (6.7) init-declarator:
fun ProgramParser.initDeclarator(): InitDeclarator = tag {
    val decl = declarator()
    val initializer = if (tryExpect("=") != null) initializer() else null
    InitDeclarator(decl, initializer)
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
fun ProgramParser.tryDeclaration(): Decl? = tag {
    when (peek()) {
        "_Static_assert" -> staticAssert()
        else -> {
            val specs = declarationSpecifiers() ?: return@tag null
            if (specs.isEmpty()) return@tag null
            val initDeclaratorList = list(";", ",") { initDeclarator() }
            expect(";")
            Declaration(specs, initDeclaratorList)
        }
    }
}

data class Declaration(val specs: ListTypeSpecifier, val initDeclaratorList: List<InitDeclarator>): Decl()

fun ProgramParser.declaration(): Decl = tryDeclaration()
        ?: throw ExpectException("TODO: ProgramParser.declaration")

// (6.8.2) compound-statement:
fun ProgramParser.compoundStatement(): Stms = tag {
    expect("{")
    val stms = whileBlock({ peek() != "}" }) { blockItem() }
    expect("}")
    Stms(stms)
}

fun ParameterDecl.toCParam(): CParam = CParam(
        this.specs.toFinalType().withDeclarator(declarator),
        this.declarator.getName()
)

// (6.9.1) function-definition:
fun ProgramParser.functionDefinition(): FuncDecl = tag {
    try {
        val rettype = declarationSpecifiers() ?: error("Can't declarationSpecifiers $this")
        val decl = declarator()
        val body = compoundStatement()
        if (decl !is ParameterDeclarator) error("Not a function")
        if (decl.base !is IdentifierDeclarator) error("Function without name")
        val name = decl.base.id
        val params = decl.decls.map { it.toCParam() }
        //val name = identifier()
        //expect("(")
        //val params = list(")", ",") { CParam(type(), identifier()) }
        //expect(")")
        //val body = compoundStatement()
        return FuncDecl(rettype, name, params, body)
    } catch (e: Throwable) {
        e.printStackTrace()
        throw e
    }
}

// (6.9) external-declaration
fun ProgramParser.externalDeclaration(): Decl = tag {
    tryBlocks("externalDeclaration", { declaration() }, { functionDefinition() })
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
    val decls = whileBlock ({ !eof }) { externalDeclaration() }
    if (!eof) error("Invalid program")
    Program(decls, this)
}

fun ProgramParser.program(): Program = translationUnits()

fun ListReader<String>.programParser() = ProgramParser(this.items, this.pos)
fun ListReader<String>.program() = programParser().program()
fun String.programParser() = tokenize().programParser()


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

