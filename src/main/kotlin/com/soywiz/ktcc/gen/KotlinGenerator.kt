package com.soywiz.ktcc.gen

import com.soywiz.ktcc.*
import com.soywiz.ktcc.util.*

class KotlinGenerator {
    fun generate(program: Program) = Indenter {
        for (decl in program.decls) {
            generate(decl)
        }
    }

    fun Indenter.generate(it: Decl): Unit = when (it) {
        is FuncDecl -> {
            line("fun ${it.name.name}() {")
            indent {
                generate(it.body)
            }
            line("}")
        }
        else -> error("Don't know how to generate decl $it")
    }

    fun Indenter.generate(it: Stm): Unit = when (it) {
        is Stms -> {
            for (s in it.stms) generate(s)
        }
        is Return -> {
            if (it.expr != null) line("return ${generate(it.expr)}") else line("return")
        }
        is VarDef -> {
            if (it.initializer != null) {
                line("var ${it.name.name} = ${generate(it.initializer!!)}")
            } else {
                line("var ${it.name.name}")
            }
        }
        is While -> {
            line("while (${generate(it.expr)}) {")
            indent {
                generate(it.body)
            }
            line("}")
        }
        is ExprStm -> {
            if (it.expr != null) {
                line("${generate(it.expr!!)}")
            }
            Unit
        }
        else -> error("Don't know how to generate stm $it")
    }

    fun generate(it: Expr): String = when (it) {
        is Constant -> "${it.value}"
        is Binop -> "(${generate(it.l)} ${it.op} ${generate(it.r)})"
        is Id -> "${it.name}"
        is PostfixExpr -> {
            generate(it.lvalue) + it.op
        }
        else -> error("Don't know how to generate expr $it")
    }
}