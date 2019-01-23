package com.soywiz.ktcc.transform

import com.soywiz.ktcc.parser.*

fun For.lower(): Stm = StmBuilder {
    val it = this@lower
    when (it.init) {
        null -> Unit
        is Decl -> STM(it.init)
        is Expr -> STM(it.init)
        else -> error("Not a Decl or Expr in for init init=${it.init} (${it.init::class})")
    }
    WHILE(it.cond ?: IntConstant(1)) {
        STM(it.body)
        if (it.post != null) {
            STM(it.post)
        }
    }.apply {
        if (it.post != null) {
            onContinue = { StmBuilder { STM(it.post) } }
        }
    }
}