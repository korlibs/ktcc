package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

typealias TokenReader = ListReader<String>

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

abstract class LValue : Expr()

data class ConstExpr(val expr: Expr) : Expr()
data class PostfixExpr(val lvalue: Expr, val op: String) : Expr()
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
data class For(val init: Expr?, val cond: Expr?, val post: Expr?, val body: Stm) : Stm()
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

data class FuncDecl(val type: CType, val name: Id, val params: List<CParam>, val body: Stm) : Decl()

data class Program(val decls: List<Decl>) : Node() {
    fun getFunctionOrNull(name: String): FuncDecl? = decls.filterIsInstance<FuncDecl>().firstOrNull { it.name.name == name }
    fun getFunction(name: String): FuncDecl = getFunctionOrNull(name) ?: error("Can't find function named '$name'")
}

fun TokenReader.type(): CType = tag {
    NamedCType(identifier())
}

fun <T> whileBlock(cond: (Int) -> Boolean, gen: () -> T): List<T> {
    val out = arrayListOf<T>()
    while (cond(out.size)) {
        out += gen()
    }
    return out
}

fun TokenReader.program(): Program = tag {
    val decls = whileBlock ({ !eof }) { declaration() }
    if (!eof) error("Invalid program")
    Program(decls)
}

fun TokenReader.declaration(): Decl = tag {
    try {
        val rettype = type()
        val name = identifier()
        expect("(")
        val params = multipleWithSeparator({
            CParam(type(), identifier())
        }, { expect(",") })
        expect(")")
        val body = statement()
        FuncDecl(rettype, name, params, body)
    } catch (e: Throwable) {
        e.printStackTrace()
        throw e
    }
}

fun <T : Any> TokenReader.multipleWithSeparator(callback: () -> T, separator: () -> Unit): List<T> {
    val out = arrayListOf<T>()
    while (true) {
        out += tryBlock { callback() } ?: break
        tryBlock { separator() } ?: break
    }
    return out
}

fun TokenReader.identifier(): Id {
    return Id(read())
}

fun TokenReader.expression(): Expr {
    val exprs = arrayListOf<Expr>()
    val ops = arrayListOf<String>()
    while (true) {
        val expr = tag {
            when (val v = peek()) {
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
        if (expr != null) {
            exprs += expr
        }

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
            val args = multipleWithSeparator({ expression() }, { expect(",") })
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

fun TokenReader.constantExpression(): ConstExpr {
    return ConstExpr(expression()) // @TODO: Validate it is constant
}

fun TokenReader.expressionOpt(): Expr? = tryBlock { expression() }

private inline fun <T : Node?> TokenReader.tag(callback: () -> T): T {
    val startPos = this.pos
    return callback().apply {
        this?.pos = startPos
    }
}

private fun <T : Any> TokenReader.multiple(report: (Throwable) -> Unit = { }, callback: () -> T): List<T> {
    val out = arrayListOf<T>()
    while (!eof) {
        out += tryBlock { callback() } ?: break
        //val result = tryBlockResult { callback() }
        //if (result.isError) {
        //    //report(result.error)
        //    break
        //} else {
        //    out += result.value
        //}
    }
    return out
}

fun TokenReader.statement(): Stm = tag {
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
            val init = expressionOpt()
            expect(";")
            val cond = expressionOpt()
            expect(";")
            val post = expressionOpt()
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
            val expr = expressionOpt()
            expect(";")
            Return(expr)
        }
        // (6.8.2) compound-statement:
        "{" -> {
            expect("{")
            val stms = whileBlock({ peek() != "}" }) {
                statement()
            }
            expect("}")
            Stms(stms)
        }
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
                    {
                        val type = type()
                        val id = identifier()
                        val initializer = tryBlock {
                            expect("=")
                            expression()
                        }
                        expect(";")
                        VarDef(type, id, initializer)
                    },
                    // (6.8.1) labeled-statement:
                    {
                        val id = identifier()
                        expect(":")
                        val stm = statement()
                        LabeledStm(id, stm)
                    },
                    {
                        val expr = expressionOpt()
                        expect(";")
                        ExprStm(expr)
                    }
            )
            result ?: error("Can't be null!")
        }
    }
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

