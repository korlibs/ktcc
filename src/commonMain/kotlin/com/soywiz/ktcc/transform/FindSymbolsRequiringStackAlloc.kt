package com.soywiz.ktcc.transform

import com.soywiz.ktcc.parser.*

fun Node.findSymbolsRequiringStackAlloc(): Set<Id> {
    val out = LinkedHashSet<Id>()
    this.visitAllDescendants {
        //println(it)
        if (it is Unop && it.op == "&" && it.rvalue is Id && it.rvalue.symbol?.scope?.isGlobal != true) {
            out += it.rvalue
        }
    }
    return out
}
