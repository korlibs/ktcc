package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

private val allSymbols = allOperators + setOf("->", "(", ")", "[", "]", "{", "}", ";", ",", ".")
private val sym3 by lazy { allSymbols.filter { it.length == 3 } }
private val sym2 by lazy { allSymbols.filter { it.length == 2 } }
private val sym1 by lazy { allSymbols.filter { it.length == 1 } }

fun String.tokenize(): ListReader<String> = doTokenize(this)
fun doTokenize(file: String): ListReader<String> {
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
            val peek3 = peek(3)
            val peek2 = peek(2)
            val peek1 = peek(1)

            // Single line comments
            if (peek2 == "//") {
                expect("//")
                while (!eof && peek() != '\n') read()
                if (!eof) expect("\n")
                continue
            }

            // Multi line comments
            if (peek2 == "/*") {
                expect("/*")
                while (!eof && peek(2) != "*/") read()
                if (!eof) expect("*/")
                continue
            }

            when {
                peek3 in sym3 -> out += read(3)
                peek2 in sym2 -> out += read(2)
                peek1 in sym1 -> out += read(1)
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
