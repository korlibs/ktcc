package com.soywiz.ktcc

import com.soywiz.ktcc.*

class Evaluator(val program: Program) {
    val memory = ByteArray(1024)

    class Scope(val parent: Scope? = null) {
        val data = LinkedHashMap<String, Any?>()

        operator fun contains(name: String): Boolean {
            return parent?.contains(name) ?: name in data
        }

        fun scopeContaining(name: String): Scope? {
            if (name in data) return this
            return parent?.scopeContaining(name)
        }

        fun create(name: String, value: Any?) {
            data[name] = value
        }

        fun put(name: String, value: Any?) {
            val scope = scopeContaining(name) ?: this
            scope.create(name, value)
        }

        fun get(name: String): Any? {
            val scope = scopeContaining(name) ?: this
            return scope.data[name]
        }
    }

    private var currentScope = Scope()

    private fun <T> scope(callback: Scope.() -> T): T {
        val oldScope = currentScope
        currentScope = Scope(oldScope)
        try {
            return callback(currentScope)
        } finally {
            currentScope = oldScope
        }
    }

    private val RETURN_KEY = "\$return"

    fun evaluate(func: FuncDecl, args: List<Any?>): Any? {
        return scope {
            for ((param, arg) in func.params.zip(args)) {
                put(param.name.name, arg)
            }
            put(RETURN_KEY, null)
            func.body.evaluate()
            get(RETURN_KEY)
        }
    }

    fun Stm.evaluate(): Boolean {
        when (this) {
            is Stms -> {
                for (stm in stms) {
                    if (stm.evaluate()) return true
                }
                return false
            }
            is Return -> {
                currentScope.put(RETURN_KEY, this.expr?.evaluate())
                return true
            }
            else -> error("Don't know how to evaluate $this")
        }
    }

    fun Expr.evaluate(): Any? = when (this) {
        is Constant -> this.value
        is Binop -> {
            val ll = this.l.evaluate()
            val rr = this.r.evaluate()
            when (op) {
                "+" -> (ll as Int) + (rr as Int)
                else -> error("Don't know how to handle binary operator '$op'")
            }
        }
        is Id -> {
            program.getFunctionOrNull(this.name) ?: currentScope.get(this.name)
        }
        is CallExpr -> {
            val result = this.expr.evaluate()
            if (result !is FuncDecl) error("'$result' is not a function")
            evaluate(result, this.args.map { it.evaluate() })
        }
        else -> error("Don't know how to evaluate $this (${this::class})")
    }
}

fun FuncDecl.evaluate(vararg args: Any?, evaluator: Evaluator): Any? = evaluator.evaluate(this, args.toList())

fun Program.evaluateFunc(func: String, vararg args: Any?): Any? {
    return Evaluator(this).evaluate(getFunction(func), args.toList())
}