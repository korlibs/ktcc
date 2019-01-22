package com.soywiz.ktcc.transform

import com.soywiz.ktcc.*

fun Switch.removeFallthrough(ctx: TempContext): Stm = StmBuilder {
    val it = this@removeFallthrough
    val tempVarName = ctx.gen("when", "_case")
    val tempVarType = FType.INT
    val tempVar = Id(tempVarName, tempVarType)

    STM(Declaration(tempVarType, tempVarName, IntConstant(-1)))
    val filteredStms = it.body.stms.filterIsInstance<DefaultCaseStm>()
    SWITCH_NO_FALLTHROUGH(it.subject) {
        for ((index, stm) in filteredStms.withIndex().sortedBy { if (it.value is CaseStm) -1 else +1 }) {
            when (stm) {
                is CaseStm -> CASE(stm.expr, ExprStm(AssignExpr(tempVar, "=", IntConstant(index))))
                is DefaultStm -> DEFAULT(ExprStm(AssignExpr(tempVar, "=", IntConstant(index))))
            }
        }
    }
    WHILE(IntConstant(1)) {
        SWITCH_NO_FALLTHROUGH(tempVar) {
            for ((index, stm) in filteredStms.withIndex()) {
                CASE(IntConstant(index)) {
                    STM(stm.stm)
                    STM(AssignExpr(tempVar, "=", IntConstant(index + 1)))
                    CONTINUE()
                }
            }
        }
        BREAK()
    }.apply {
        addScope = false
    }
}

fun SwitchWithoutFallthrough.toIfs(): Stms = TODO()
