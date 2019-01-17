package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

private val allSymbols = allOperators + setOf("->", "(", ")", "[", "]", "{", "}", ";", ",", ".")
private val sym3 by lazy { allSymbols.filter { it.length == 3 } }
private val sym2 by lazy { allSymbols.filter { it.length == 2 } }
private val sym1 by lazy { allSymbols.filter { it.length == 1 } }

fun String.tokenize(): ListReader<String> = doTokenize(this, "") { str, pos -> str }

fun <T> doTokenize(file: String, default: T, gen: StrReader.(str: String, pos: Int) -> T): ListReader<T> {
    val out = arrayListOf<T>()
    StrReader(file).apply {
        while (!eof) {
            val v = peek()
            val spos = pos
            if (v.isWhitespace() || v == '\n' || v == '\r') {
                read()
                continue
            }
            if (v == '"' || v == '\'') {
                val literal = readBlock {
                    val start = v
                    read()
                    while (!eof && peek() != start) {
                        val c = read()
                        if (c == '\\') {
                            read()
                        }
                    }
                    if (!eof) read()
                }
                out += gen(literal, spos)
                continue
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
                peek3 in sym3 -> out += gen(read(3), spos)
                peek2 in sym2 -> out += gen(read(2), spos)
                peek1 in sym1 -> out += gen(read(1), spos)
                else -> {
                    // Numeric constant
                    if (v.isDigit()) {
                        out += gen(readBlock { while (!eof && peek().isDigit()) read() }, spos)
                    }
                    // Identifier
                    else if (v.isAlphaOrUnderscore()) {
                        out += gen(readBlock { while (!eof && peek().isAlnumOrUnderscore()) read() }, spos)
                    }
                    else {
                        error("Unknown symbol: '$v'")
                    }

                }
            }
        }
    }
    return out.reader(default)
}
