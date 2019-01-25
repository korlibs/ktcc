package com.soywiz.ktcc.transform

import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.types.*
import com.soywiz.ktcc.util.*

object StateMachineLowerer {
    class Output {
        val decls = arrayListOf<Decl>()
        val stms = arrayListOf<Stm>()
        var nlabel = 0
        val labelsByName = LinkedHashMap<String, Label>()
        fun label(): Label = Label(nlabel++)

        fun label(it: String) = labelsByName.getOrPut(it) { label() }

        fun add(it: Decl) {
            decls += it
        }

        fun add(it: VarDeclaration) {
            decls += VarDeclaration(it.specifiers, it.initDeclaratorList.map { it.copy(initializer = null) })
            for (i in it.initDeclaratorList) {
                if (i.initializer != null) {
                    add(ExprStm(SimpleAssignExpr(Id(i.declarator.getName(), null, i.type, false), i.initializer)))
                }
            }
        }

        fun add(it: Stm) {
            if (it is VarDeclaration) {
                add(it)
            } else {
                stms += it
            }
        }

        fun add(label: Label) = add(LowLabel(label))
    }

    fun lower(stms: Stms): Output {
        val out = Output()

        stms.visitAllDescendants {
            if (it is LabeledStm) {
                out.label(it.id.name)
            }
        }

        for (s in stms.stms) {
            out.processStm(s)
        }
        return out
    }

    private fun Output.processStm(it: Stm) {
        when (it) {
            is VarDeclaration -> {
                add(it)
            }
            is Stms -> {
                for (s in it.stms) processStm(s)
            }
            is IfElse -> {
                val elseLabel = label()
                val endLabel = if (it.sfalse != null) label() else null
                add(LowIfGoto(it.cond.not(), elseLabel))
                processStm(it.strue)
                if (endLabel != null) {
                    add(LowGoto(endLabel))
                }
                add(elseLabel)
                if (endLabel != null && it.sfalse != null) {
                    processStm(it.sfalse)
                    add(endLabel)
                }
            }
            is Switch -> {
                val labeledCases = it.bodyCases.map { it.optExpr to label() }
                add(LowSwitchGoto(it.subject, labeledCases.toMap()))
                for ((case, lc) in it.bodyCases.zip(labeledCases)) {
                    val (_, label) = lc
                    add(label)
                    add(case.stm)
                }
            }
            is While -> {
                val condLabel = label()
                val endLabel = label()
                add(condLabel)
                add(LowIfGoto(it.cond.not(), endLabel))
                processStm(it.body)
                add(LowGoto(condLabel))
                add(endLabel)
            }
            is For -> {
                processStm(it.lower())
            }
            is LabeledStm -> {
                add(LowLabel(label(it.id.name)))
                processStm(it.stm)
            }
            is Goto -> {
                if (it.id.name in labelsByName) {
                    add(LowGoto(label(it.id.name)))
                } else {
                    add(RawStm("error(${"label ${it.id.name} doesn't exist".cquoted})"))
                }
            }
            is ExprStm -> {
                add(it)
            }
            is Return -> {
                add(it)
            }
            else -> {
                add(CommentStm("TODO $it"))
            }
        }
    }
}

data class Label(val id: Int, val name: String = "label$id")
data class LowLabel(val label: Label) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}
data class LowGoto(val label: Label) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = Unit
}
data class LowIfGoto(val cond: Expr, val label: Label) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) = visit(cond)
}
data class LowSwitchGoto(val subject: Expr, val map: Map<Expr?, Label>) : Stm() {
    override fun visitChildren(visit: ChildrenVisitor) {
        visit(subject)
        for (v in map.keys) visit(v)
    }
}