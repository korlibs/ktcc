package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

typealias TokenReader = ListReader<String>

private fun Char.isAlphaLC() = (this in 'a'..'z')
private fun Char.isAlphaUC() = (this in 'A'..'Z')
private fun Char.isAlpha() = isAlphaLC() || isAlphaUC()
private fun Char.isAlnum() = isAlpha() || isDigit()
private fun Char.isAlphaOrUnderscore() = this.isAlpha() || this == '_'
private fun Char.isAlnumOrUnderscore() = this.isAlphaOrUnderscore() || isDigit()

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
            error(isValidMsg(name) ?: return)
        }
    }

    override fun toString(): String = name
}

data class Constant(val data: String) : Expr() {
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
            error(isValidMsg(data) ?: return)
        }
    }

    override fun toString(): String = data
}

abstract class Expr : Node()

abstract class CType : Expr()

data class NamedCType(val id: Id): CType()

abstract class LValue : Expr()

data class ConstExpr(val expr: Expr) : Expr()
data class PostfixExpr(val expr: Expr, val op: String) : Expr()

data class ArrayAccessExpr(val expr: Expr, val index: Expr) : LValue()
data class FieldAccessExpr(val expr: Expr, val id: Id, val indirect: Boolean) : LValue()

data class OperatorsExpr(val exprs: List<Expr>, val ops: List<String>) : Expr()

abstract class Stm : Node()

data class IfElse(val expr: Expr, val strue: Stm, val sfalse: Stm?) : Stm()
data class While(val expr: Expr, val body: Stm) : Stm()
data class DoWhile(val expr: Expr, val body: Stm) : Stm()
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

abstract class Decl : Node()

data class CParam(val type: CType, val name: Id) : Decl()

data class FuncDecl(val type: CType, val name: Id, val params: List<CParam>, val body: Stm) : Decl()

data class Program(val decls: List<Decl>) : Node()

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

fun <T> TokenReader.multipleWithSeparator(callback: () -> T, separator: () -> Unit): List<T> {
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
        exprs += tag {
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
                        else -> error("INVALID EXPRESSION '$v'")
                    }
                }
            }
        }

        if (peek() in operators) {
            ops += read()
            continue
        } else {
            break
        }
    }

    val primary = if (exprs.size == 1) {
        exprs.first()
    } else {
        OperatorsExpr(exprs, ops)
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
            TODO()
        }
        ".", "->" -> {
            val indirect = read() == "->"
            val id = identifier()
            FieldAccessExpr(primary, id, indirect)
        }
        "++", "--" -> {
            PostfixExpr(primary, read())
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

private inline fun <T : Node> TokenReader.tag(callback: () -> T): T {
    val pos = this.pos
    return callback().apply {
        this.pos = pos
    }
}

private inline fun <T> TokenReader.multiple(report: (Throwable) -> Unit = { }, callback: () -> T): List<T> {
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
            TODO()
            expect(")")
            val body = statement()
            Stms(listOf())
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
            val stms = multiple {
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
            tryBlocks("expression-statement",
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

val operators = unaryOperators + binaryOperators + ternaryOperators + postPreFixOperators + assignmentOperators

