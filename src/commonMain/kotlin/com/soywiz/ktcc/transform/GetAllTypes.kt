package com.soywiz.ktcc.transform

import com.soywiz.ktcc.*
import com.soywiz.ktcc.parser.*

private fun FType.expandTypes(out: LinkedHashSet<FType>) {
    out += this
    when {
        this is BasePointerFType -> this.elementType.expandTypes(out)
        this is FunctionFType -> {
            this.retType.expandTypes(out)
            for (arg in args) arg.type.expandTypes(out)
        }
    }
}

fun Node.getAllTypes(resolver: FTypeResolver): Set<FType> {
    val out = LinkedHashSet<FType>()
    this.visitAllDescendants {
        when (it) {
            is VarDeclaration -> for (decl in it.parsedList) resolver.resolve(decl.type).expandTypes(out)
            is FuncDeclaration -> resolver.resolve(it.funcType).expandTypes(out)
        }
    }
    return out
}
