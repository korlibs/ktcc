package com.soywiz.ktcc.util

val String.cescaped: String
    get() {
        val out = StringBuilder()
        for (c in this) {
            when (c) {
                '\\' -> out.append("\\\\")
                //'\'' -> out.append("\\'")
                '"' -> out.append("\\\"")
                '\n' -> out.append("\\n")
                '\r' -> out.append("\\r")
                '\t' -> out.append("\\t")
                else -> out.append(c)
            }
        }
        return out.toString()
    }

val String.cquoted: String get() = "\"$cescaped\""

val String.cunescaped: String
    get() {
        val out = StringBuilder()
        var n = 0
        while (n < this.length) {
            val c = this[n++]
            when (c) {
                '\\' -> {
                    val c2 = this[n++]
                    when (c2) {
                        'n' -> out.append('\n')
                        'r' -> out.append('\r')
                        't' -> out.append('\t')
                        'x' -> {
                            val h0 = this[n++]
                            val h1 = this[n++]
                            TODO("cunescaped")
                        }
                    }
                }
                else -> {
                    out.append(c)
                }
            }
        }
        return out.toString()
    }

val String.cunquoted: String
    get() = if (this.isNotEmpty() && (this[0] == '"' || this[0] == '\'') && this[this.length - 1] == this[0]) {
        this.substring(1, this.length - 1).cunescaped
    } else {
        error("String '$this' is not quoted")
    }
