package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

private val allSymbols = operators + setOf("->", "(", ")", "[", "]", "{", "}", ";", ",", ".")
private val sym3 by lazy { allSymbols.filter { it.length == 3 } }
private val sym2 by lazy { allSymbols.filter { it.length == 2 } }
private val sym1 by lazy { allSymbols.filter { it.length == 1 } }

fun tokenize(file: String): ListReader<String> {
    val out = arrayListOf<String>()
    StrReader(file).apply {
        while (!eof) {
            val v = peek()
            if (v.isWhitespace() || v == '\n' || v == '\r') {
                read()
                continue
            }
            if (v == '"' || v == '\'') {
                TODO("string literals")
            }
            when {
                peek(3) in sym3 -> out += read(3)
                peek(2) in sym2 -> out += read(2)
                peek(1) in sym1 -> out += read(1)
                else -> {
                    // Numeric constant
                    if (v.isDigit()) {
                        out += readBlock { while (!eof && peek().isDigit()) read() }
                    }
                    // Identifier
                    else if (v.isAlphaOrUnderscore()) {
                        out += readBlock { while (!eof && peek().isAlnumOrUnderscore()) read() }
                    }
                    else {
                        error("Unknown symbol: '$v'")
                    }

                }
            }
        }
    }
    return out.reader("")
}
