package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

class ProgramParser(items: List<String>, pos: Int = 0) : ListReader<String>(items, "", pos) {
    val typedefTypes = LinkedHashMap<String, Unit>()
    val current get() = this.peek()

    override fun toString(): String = "ProgramParser(current=$current)"
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

data class Constant(val data: String) : Expr() {
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

abstract class CType : Expr()

data class NamedCType(val id: Id): CType()
data class CTypeWithSpecifiers(val specs: List<TypeSpecifier>): CType()

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
                "||"
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

data class IfElse(val expr: Expr, val strue: Stm, val sfalse: Stm?) : Stm()
data class While(val expr: Expr, val body: Stm) : Stm()
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

data class VarDef(val type: CType, val name: Id, val initializer: Expr?) : Decl()

data class CParam(val type: CType, val name: Id) : Decl()

data class FuncDecl(val rettype: CType, val name: Id, val params: List<CParam>, val body: Stm) : Decl()

data class Program(val decls: List<Decl>) : Node() {
    fun getFunctionOrNull(name: String): FuncDecl? = decls.filterIsInstance<FuncDecl>().firstOrNull { it.name.name == name }
    fun getFunction(name: String): FuncDecl = getFunctionOrNull(name) ?: error("Can't find function named '$name'")
}

fun <T> whileBlock(cond: (Int) -> Boolean, gen: () -> T): List<T> = arrayListOf<T>().apply { while (cond(size)) this += gen() }
fun <T> whileNotNull(gen: (Int) -> T?): List<T> = arrayListOf<T>().apply { while (true) this += gen(size) ?: break }

fun <T> ProgramParser.list(end: String, separator: String? = null, consumeEnd: Boolean = false, gen: () -> T): List<T> {
    val out = arrayListOf<T>()
    if (peek() != end) {
        while (true) {
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

fun ProgramParser.baseExpr(): Expr = tryBaseExpr() ?: TODO("baseExpr")

fun ProgramParser.tryBaseExpr(): Expr? {
    return tag {
        when (val v = peek()) {
            "+", "-" -> {
                val op = read()
                Unop(op, baseExpr())
            }
            "(" -> {
                expect("(")
                val expr = expression()
                expect(")")
                expr
            }
            else -> {
                when {
                    Id.isValid(v) -> Id(read())
                    Constant.isValid(v) -> Constant(read())
                    else -> null
                }
            }
        }
    }
}

fun ProgramParser.expression(): Expr = tryExpression() ?: error("Not an expression")

//fun ProgramParser.tryExpression(): Expr? = tryBlock { expression() }

fun ProgramParser.tryExpression(): Expr? {
    val exprs = arrayListOf<Expr>()
    val ops = arrayListOf<String>()
    while (true) {
        val expr = tryBaseExpr() ?: return null
        exprs += expr

        //println("PEEK AFTER EXPRESSION: ${peek()}")
        if (peek() in binaryOperators) {
            ops += read()
            continue
        } else {
            break
        }
    }

    if (exprs.size == 0) throw ExpectException("Not a expression! at ${peek()}")
    val primary = if (exprs.size == 1) {
        exprs.first()
    } else {
        OperatorsExpr(exprs, ops).expand()
    }

    // (6.5.2) postfix-expression:
    return when (peek()) {
        "[" -> {
            expect("[")
            val index = expression()
            expect("]")
            ArrayAccessExpr(primary, index)
        }
        "(" -> {
            expect("(")
            val args = list(")", ",") { expression() }
            expect(")")
            CallExpr(primary, args)
        }
        ".", "->" -> {
            val indirect = read() == "->"
            val id = identifier()
            FieldAccessExpr(primary, id, indirect)
        }
        "++", "--" -> {
            PostfixExpr(primary, read())
        }
        "=", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "&&=", "||=" -> {
            val op = read()
            val expr = expression()
            AssignExpr(primary, op, expr)
        }
        else -> {
            primary
        }
    }
}

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
        "goto" -> {
            expect("goto")
            val id = identifier()
            expect(";")
            Goto(id)
        }
        "continue" -> {
            expect("continue", ";")
            Continue()
        }
        "break" -> {
            expect("break", ";")
            Break()
        }
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
        "default" -> {
            expect("default", ":")
            val stm = statement()
            DefaultStm(stm)

        }
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
data class AtomicTypeSpecifier(val id: Node) : TypeSpecifier()
data class BasicTypeSpecifier(val id: String) : TypeSpecifier()
data class TypedefTypeSpecifier(val id: String): TypeSpecifier()
data class AnonymousTypeSpecifier(val kind: String, val id: Id?) : TypeSpecifier()
data class StructUnionTypeSpecifier(val kind: String, val id: Id?) : TypeSpecifier()

data class StorageClassSpecifier(val kind: String) : TypeSpecifier()
data class TypeQualifier(val kind: String) : TypeSpecifier()
data class FunctionSpecifier(val kind: String) : TypeSpecifier()
data class AlignAsSpecifier(val info: Node) : TypeSpecifier()

// (6.7.7) type-name:
fun ProgramParser.tryTypeName(): Node? = TODO("tryTypeName")
fun ProgramParser.typeName(): Node = tryTypeName() ?: TODO("typeName")

// (6.7) declaration-specifiers:
fun ProgramParser.declarationSpecifiers(): List<TypeSpecifier> {
    val out = arrayListOf<TypeSpecifier>()
    var hasTypedef = false
    while (true) {
        val spec = tryDeclarationSpecifier(hasTypedef) ?: break
        if (spec is StorageClassSpecifier && spec.kind == "typedef") hasTypedef = true
        //if (spec is TypedefTypeSpecifier) break // @TODO: Check this!
        out += spec
    }
    return out
}

fun ProgramParser.type(): CType = tag {
    return CTypeWithSpecifiers(declarationSpecifiers())
    //NamedCType(identifier())
}

fun ProgramParser.tryTypeQualifier(): TypeQualifier? = tag {
    when (peek()) {
        "const", "restrict", "volatile", "_Atomic" -> TypeQualifier(read())
        else -> null
    }
}

fun ProgramParser.tryDeclarationSpecifier(hasTypedef: Boolean): TypeSpecifier? = tag {
    when (peek()) {
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
            if (peek() != "{") {
                expect("{")
                TODO("struct-union")
                expect("}")
            }
            StructUnionTypeSpecifier(kind, id)
        }
        else -> when {
            hasTypedef -> TypedefTypeSpecifier(read())
            peek() in typedefTypes -> TypedefTypeSpecifier(read())
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

data class ParameterDecl(val specs: List<TypeSpecifier>, val declarator: Declarator) : Node()

open class Declarator: Node()
data class DeclaratorWithPointer(val pointer: Node, val declarator: Declarator): Declarator()
data class IdentifierDeclarator(val id: Id) : Declarator()
data class CompoundDeclarator(val decls: List<Declarator>) : Declarator()
data class ParameterDeclarator(val base: Declarator, val decls: List<ParameterDecl>) : Declarator()

// (6.7.6) parameter-declaration:
fun ProgramParser.parameterDeclaration(): ParameterDecl = tag {
    val specs = declarationSpecifiers()
    val decl = declarator()
    ParameterDecl(specs, decl)
}

// (6.7.6) declarator:
// (6.7.6) direct-declarator:
fun ProgramParser.declarator(): Declarator = tryDeclarator() ?: throw ExpectException("Not a declarator")
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

data class DesignOptInit(val design: DesignatorList?, val initializer: Node) : Node()

fun ProgramParser.designOptInitializer(): DesignOptInit = tag {
    val designationOpt = tryDesignation()
    val initializer = initializer()
    DesignOptInit(designationOpt, initializer)
}

data class ArrayInit(val items: List<DesignOptInit>) : Expr()

// (6.7.9) initializer:
fun ProgramParser.initializer(): Node = tag {
    if (peek() == "{") {
        expect("{")
        val items = list("}", ",") { designOptInitializer() }
        expect("}")
        ArrayInit(items)
    } else {
        expression()
    }
}

data class InitDeclarator(val decl: Declarator, val initializer: Node?) : Node()

// (6.7) init-declarator:
fun ProgramParser.initDeclarator(): InitDeclarator = tag {
    val decl = declarator()
    val initializer = if (tryExpect("=") != null) initializer() else null
    InitDeclarator(decl, initializer)
}

// (6.7) declaration:
fun ProgramParser.tryDeclaration(): Decl? = tag {
    when (peek()) {
        "_Static_assert" -> {
            expect("_Static_assert", "(")
            val expr = constantExpression()
            expect(",")
            val str = stringLiteral()
            expect(")")
            TODO("_Static_assert")
        }
        else -> {
            val specs = declarationSpecifiers()
            val initDeclaratorList = list(";", ",") { initDeclarator() }
            expect(";")
            Declaration(specs, initDeclaratorList)
        }
    }
}

data class Declaration(val specs: List<TypeSpecifier>, val initDeclaratorList: List<InitDeclarator>): Decl()

fun ProgramParser.declaration(): Decl = tryDeclaration() ?: throw ExpectException("TODO")

// (6.8.2) compound-statement:
fun ProgramParser.compoundStatement(): Stms = tag {
    expect("{")
    val stms = whileBlock({ peek() != "}" }) { blockItem() }
    expect("}")
    Stms(stms)
}

fun ParameterDecl.toCParam(): CParam {
    val type = CTypeWithSpecifiers(this.specs)
    return when (declarator) {
        is IdentifierDeclarator -> CParam(type, declarator.id)
        else -> error("Not supported other declarators than IdentifierDeclarator yet")
    }
}

// (6.9.1) function-definition:
fun ProgramParser.functionDefinition(): FuncDecl = tag {
    try {
        val rettype = CTypeWithSpecifiers(declarationSpecifiers())
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
    Program(decls)
}

fun ProgramParser.program(): Program = translationUnits()

fun ListReader<String>.programParser() = ProgramParser(this.items, this.pos)
fun ListReader<String>.program() = programParser().program()


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
val assignmentOperators = setOf("=", "*=", "/=", "%=", "+=", "-=", "<<=", ">>=", "&=", "^=", "|=")

val allOperators = unaryOperators + binaryOperators + ternaryOperators + postPreFixOperators + assignmentOperators

