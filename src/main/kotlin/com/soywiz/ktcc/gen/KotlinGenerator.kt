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
            line("fun ${it.name.name}(${it.params.map { generateParam(it) }.joinToString(", ")}): ${generate(it.rettype)} {")
            indent {
                generate(it.body)
            }
            line("}")
        }
        is Declaration -> {
            val ftype = it.specs.toFinalType()
            for (init in it.initDeclaratorList) {
                val varType = ftype.withDeclarator(init.decl)
                val name = init.decl.getName()
                val varInit = init.initializer
                if (varInit != null) {
                    line("var $name: $varType = ${generate(varInit)}")
                } else {
                    line("var $name: $varType")
                }
            }
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
                line("var ${it.name.name}: ${generate(it.type)} = ${generate(it.initializer)}")
            } else {
                line("var ${it.name.name}: ${generate(it.type)} = ${generateDefault(it.type)}")
            }
        }
        is ExprStm -> {
            if (it.expr != null) {
                line(generate(it.expr!!))
            }
            Unit
        }
        is While -> {
            line("while (${generate(it.expr)}) {")
            indent {
                generate(it.body)
            }
            line("}")
        }
        is For -> {
            if (it.init != null) {
                val init = it.init
                if (init != null) {
                    if (init !is Decl) error("Not a Decl in for init")
                    generate(init)
                }
            }
            line("while (${generate(it.cond ?: IntConstant("1"))}) {")
            indent {
                generate(it.body)
                if (it.post != null) {
                    line(generate(it.post))
                }
            }
            line("}")
        }
        is Break -> {
            line("break")
        }
        is Decl -> generate(it)
        else -> error("Don't know how to generate stm $it")
    }

    fun generateParam(it: CParam): String = it.name.name + ": " + generate(it.type)

    fun CType.toKotlinType(): String = when (this) {
        is CTypeWithSpecifiers -> {
            var void = false
            var unsigned = false
            var integral = false
            var longCount = 0
            for (spec in specs) {
                when (spec) {
                    is BasicTypeSpecifier -> {
                        when (spec.id) {
                            "void" -> void = true
                            "int" -> integral = true
                            else -> TODO(spec.id)
                        }
                    }
                    else -> TODO()
                }
            }
            when {
                void -> "Unit"
                integral -> "Int"
                else -> TODO()
            }
        }
        else -> TODO()
    }

    fun generate(it: CType): String = it.toKotlinType()

    fun generateDefault(it: CType): String = when (it) {
        is NamedCType -> when (it.id.name) {
            "int" -> "0"
            "void" -> "Unit"
            else -> error("Unknown type $it")
        }
        else -> error("Don't know how to generate default value for type $it")
    }

    fun generate(it: Expr): String = when (it) {
        is IntConstant -> "${it.value}"
        is Binop -> "(${generate(it.l)} ${it.op} ${generate(it.r)})"
        is Id -> it.name
        is PostfixExpr -> {
            generate(it.lvalue) + it.op
        }
        is CallExpr -> {
            generate(it.expr) + "(" + it.args.joinToString(", ") { generate(it) } + ")"
        }
        is StringConstant -> it.raw
        is CharConstant -> "${it.raw}.toInt()"
        else -> error("Don't know how to generate expr $it")
    }
}