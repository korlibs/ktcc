package com.soywiz.ktcc.transform

import com.soywiz.ktcc.parser.*

fun Node.getMutatingVariables(): Set<String> {
    val assignNames = linkedSetOf<String>()
    this.visitAllDescendants {
        when {
            it is AssignExpr && it.l is Id -> assignNames += it.l.name
            it is BaseUnaryOp && it.operand is Id && (it.op == "++" || it.op == "--") -> assignNames += (it.operand as Id).name
        }
    }
    return assignNames
}
