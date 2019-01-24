package com.soywiz.ktcc.transform

import com.soywiz.ktcc.parser.*

fun Node.findSymbolsRequiringStackAlloc(): Set<Id> {
    val out = LinkedHashSet<Id>()
    this.visitAllDescendants {
        if (it is UnaryExpr && it.op == "&" && it.rvalue is Id && it.rvalue.symbol?.scope?.isGlobal != true) {
            out += it.rvalue
        }
    }
    return out
}
