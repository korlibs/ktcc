package com.soywiz.ktcc

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

    fun evaluate(func: FuncDecl, args: List<Any?>): Any? {
        return scope {
            try {
                for ((param, arg) in func.params.zip(args)) {
                    put(param.name.name, arg)
                }
                func.body.evaluate()
                null
            } catch (e: ReturnException) {
                e.result
            }
        }
    }

    class ReturnException(val result: Any?) : Exception()

    fun Stm.evaluate() {
        when (this) {
            is VarDef -> {
                currentScope.create(this.name.name, this.initializer?.evaluate())
            }
            is Stms -> {
                return scope {
                    for (stm in stms) stm.evaluate()
                }
            }
            is Return -> {
                throw ReturnException(this.expr?.evaluate())
            }
            is While -> {
                while ((this.expr.evaluate() as Int) != 0) {
                    this.body.evaluate()
                }
            }
            is ExprStm -> {
                this.expr?.evaluate()
            }
            is For -> {
                val init = this.init
                if (init != null) {
                    if (init !is Decl) error("Don't know how to handle for init no Decl")
                    init.evaluate()
                }
                while (((this.cond?.evaluate() ?: 1) as Int) != 0) {
                    this.body.evaluate()
                    this.post?.evaluate()
                }
            }
            is Switch -> {
                val subject = this.expr.evaluate()
                val stms = (this.body as Stms)
                var executing = false
                for (stm in stms.stms) {
                    if (executing) {
                        stm.evaluate()
                    } else if (stm is CaseStm && stm.expr.evaluate() == subject) {
                        executing = true
                        stm.evaluate()
                    }
                }
            }
            is CaseStm -> {
                this.stm.evaluate()
            }
            else -> error("Don't know how to evaluate $this")
        }
    }

    fun Expr.evaluate(): Any? = when (this) {
        is Constant -> this.value
        is Unop -> {
            val v = this.lvalue.evaluate()
            when (op) {
                "+" -> v
                "-" -> -(v as Int)
                else -> error("Don't know how to handle unary operator '$op'")
            }
        }
        is Binop -> {
            val ll = this.l.evaluate()
            val rr = this.r.evaluate()
            when (op) {
                "+" -> (ll as Int) + (rr as Int)
                "*" -> (ll as Int) * (rr as Int)
                "<" -> if ((ll as Int) < (rr as Int)) 1 else 0
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
        is PostfixExpr -> {
            val lvalue = this.lvalue
            fun op(old: Int): Int = when (this.op) {
                "++" -> old + 1
                "--" -> old - 1
                else -> error("Unknown postfix operator $op")
            }
            when (lvalue) {
                is Id -> {
                    val old = currentScope.get(lvalue.name) as Int
                    currentScope.put(lvalue.name, op(old))
                }
                else -> error ("$lvalue is not an l-value")
            }
        }
        is AssignExpr -> {
            val lvalue = this.lvalue
            val expr = this.value.evaluate()
            when (lvalue) {
                is Id -> {
                    currentScope.put(lvalue.name, expr)
                }
                else -> error ("$lvalue is not an l-value")
            }
        }
        is ConstExpr -> this.expr.evaluate()
        else -> error("Don't know how to evaluate $this (${this::class})")
    }
}

fun FuncDecl.evaluate(vararg args: Any?, evaluator: Evaluator): Any? = evaluator.evaluate(this, args.toList())

fun Program.evaluateFunc(func: String, vararg args: Any?): Any? {
    return Evaluator(this).evaluate(getFunction(func), args.toList())
}