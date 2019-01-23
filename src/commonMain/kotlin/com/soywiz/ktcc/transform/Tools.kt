package com.soywiz.ktcc.transform

import com.soywiz.ktcc.parser.*

fun Node?.containsBreakOrContinue(): Boolean = object : NodeVisitor() {
    var contains = false
    override fun visit(it: Break) = run { contains = true }
    override fun visit(it: Continue) = run { contains = true }
}.also { it.visit(this) }.contains
