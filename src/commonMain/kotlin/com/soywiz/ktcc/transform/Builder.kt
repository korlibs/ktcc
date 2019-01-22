package com.soywiz.ktcc.transform

import com.soywiz.ktcc.*

@DslMarker annotation class BuilderMarker

@BuilderMarker
class StmBuilder {
    private val stms = arrayListOf<Stm>()

    companion object {
        operator fun invoke(callback: StmBuilder.() -> Unit): Stm = Stms(StmBuilder().apply(callback).stms)
    }

    fun <T : Stm> STM(stm: T): T = stm.also { stms += it }
    fun STM(expr: Expr) = STM(ExprStm(expr))
    fun STMS(block: StmBuilder.() -> Unit) = STM(StmBuilder(block))
    fun SWITCH_NO_FALLTHROUGH(subject: Expr, block: SwitchBuilder.() -> Unit) = STM(SwitchBuilder(subject, block))
    fun WHILE(cond: Expr, block: StmBuilder.() -> Unit) = STM(While(cond, StmBuilder(block)))
    fun BREAK() = STM(Break())
    fun CONTINUE() = STM(Continue())
}


@BuilderMarker
class SwitchBuilder {
    private val stms = arrayListOf<DefaultCaseStm>()

    companion object {
        operator fun invoke(subject: Expr, callback: SwitchBuilder.() -> Unit): SwitchWithoutFallthrough = SwitchWithoutFallthrough(subject, Stms(SwitchBuilder().apply(callback).stms))
    }

    fun CASE(expr: Expr, body: StmBuilder.() -> Unit) = CASE(ConstExpr(expr), StmBuilder(body))
    fun DEFAULT(body: StmBuilder.() -> Unit) = DEFAULT(StmBuilder(body))
    fun CASE(expr: ConstExpr, body: Stm) = run { stms += CaseStm(expr, body) }
    fun DEFAULT(body: Stm) = run { stms += DefaultStm(body) }
}

