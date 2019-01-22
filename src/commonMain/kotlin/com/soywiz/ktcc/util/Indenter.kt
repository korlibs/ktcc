package com.soywiz.ktcc.util

inline fun Indenter(callback: Indenter.() -> Unit): String = Indenter().apply(callback).toString()

class Indenter {
    @PublishedApi
    internal val cmds = arrayListOf<Any>()

    @PublishedApi
    internal object Indent
    @PublishedApi
    internal object Unindent

    fun line(str: String) {
        cmds += str
    }

    inline fun line(str: String, callback: () -> Unit) {
        line("$str {")
        indent {
            callback()
        }
        line("}")
    }

    inline fun indent() = run { cmds += Indent }
    inline fun unindent() = run { cmds += Unindent }

    inline fun <T> indent(callback: () -> T): T {
        indent()
        try {
            return callback()
        } finally {
            unindent()
        }
    }

    override fun toString(): String = buildString {
        var pre = ""
        for (cmd in cmds) {
            when (cmd) {
                // @TODO: Precompute indents
                Indent -> pre += "\t"
                Unindent -> pre = pre.substring(0, pre.length - 1)
                is String -> {
                    for (line in cmd.split("\n")) {
                        append(pre)
                        append("$line\n")
                    }
                }
            }
        }
    }
}