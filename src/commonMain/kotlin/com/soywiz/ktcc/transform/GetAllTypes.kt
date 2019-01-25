package com.soywiz.ktcc.transform

import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.types.*

private fun Type.expandTypes(out: LinkedHashSet<Type>) {
    out += this
    when {
        this is BasePointerType -> this.elementType.expandTypes(out)
        this is FunctionType -> {
            this.retType.expandTypes(out)
            for (arg in args) arg.type.expandTypes(out)
        }
    }
}

fun Node.getAllTypes(resolver: TypeResolver): Set<Type> {
    val out = LinkedHashSet<Type>()
    this.visitAllDescendants {
        when (it) {
            is VarDeclaration -> for (decl in it.parsedList) resolver.resolve(decl.type).expandTypes(out)
            is FuncDeclaration -> resolver.resolve(it.funcType).expandTypes(out)
        }
    }
    return out
}
