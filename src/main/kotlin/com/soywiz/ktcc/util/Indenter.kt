package com.soywiz.ktcc.util

fun Indenter(callback: Indenter.() -> Unit): String = Indenter().apply(callback).toString()

class Indenter {
    private val cmds = arrayListOf<Any>()

    private object Indent
    private object Unindent

    fun line(str: String) {
        cmds += str
    }

    fun <T> indent(callback: () -> T): T {
        cmds += Indent
        try {
            return callback()
        } finally {
            cmds += Unindent
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