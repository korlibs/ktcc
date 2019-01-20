package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

private val allSymbols = allOperators + setOf("->", "(", ")", "[", "]", "{", "}", ";", ",", ".")
private val sym3 by lazy { allSymbols.filter { it.length == 3 } }
private val sym2 by lazy { allSymbols.filter { it.length == 2 } }
private val sym1 by lazy { allSymbols.filter { it.length == 1 } }

data class CToken(val str: String, val pos: Int, val nline: Int)

fun String.tokenize(): ListReader<CToken> = doTokenize(this, CToken("", this.length, -1)) { str, pos, nline -> CToken(str, pos, nline) }

enum class IncludeMode(val eol: Boolean = false, val spaces: Boolean = false, val comments: Boolean = false) {
    NORMAL(), EOL(eol = true), ALL(eol = true, spaces = true, comments = true)
}

fun <T> doTokenize(file: String, default: T, include: IncludeMode = IncludeMode.NORMAL, gen: StrReader.(str: String, pos: Int, nline: Int) -> T): ListReader<T> = doTokenize(StrReader(file), default, include, gen)

fun <T> doTokenize(file: StrReader, default: T, include: IncludeMode = IncludeMode.NORMAL, gen: StrReader.(str: String, pos: Int, nline: Int) -> T): ListReader<T> {
    val out = arrayListOf<T>()
    var nline = 1
    file.apply {
        while (!eof) {
            val v = peek()
            val spos = pos
            if (v == '\n') {
                read()
                if (include.eol) out += gen(this, "$v", spos, nline)
                nline++
                continue
            }
            if (v.isWhitespace() || v == '\r') {
                read()
                if (include.spaces) out += gen(this, "$v", spos, nline)
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
                out += gen(literal, spos, nline)
                continue
            }
            val peek3 = peek(3)
            val peek2 = peek(2)
            val peek1 = peek(1)

            // Single line comments
            if (peek2 == "//") {
                val comment = readBlock {
                    expect("//")
                    while (!eof && peek() != '\n') read()
                    if (!eof) expect("\n")
                }
                if (include.comments) out += gen(this, comment, spos, nline)
                continue
            }

            // Multi line comments
            if (peek2 == "/*") {
                val comment = readBlock {
                    expect("/*")
                    while (!eof && peek(2) != "*/") read()
                    if (!eof) expect("*/")
                }
                if (include.comments) out += gen(this, comment, spos, nline)
                continue
            }

            val number = tryRead {
                var number = ""
                var hex = false
                var suffix = false
                var ndigits = 0
                loop@while (!eof) {
                    when (val peek = peek()) {
                        in '0'..'9' -> {
                            if (suffix) break@loop
                            number += read()
                            ndigits++
                        }
                        '.' -> {
                            if (suffix) break@loop
                            if (number.contains('.')) {
                                break@loop
                            } else {
                                number += read()
                            }
                        }
                        'x', 'X' -> {
                            if (number.isEmpty()) break@loop
                            if (suffix) break@loop
                            if (number == "0") {
                                number += read()
                                hex = true
                            } else {
                                break@loop
                            }
                        }
                        in 'a'..'f', in 'A'..'F' -> {
                            if (number.isEmpty()) break@loop
                            when {
                                hex -> {
                                    if (suffix) break@loop
                                    number += read()
                                    ndigits++
                                }
                                (peek == 'e' || peek == 'E') && number.lastOrNull() in '0'..'9' -> number += read()
                                (peek == 'f') -> {
                                    number += read()
                                    suffix = true
                                }
                                else -> break@loop
                            }
                        }
                        'l', 'L', 'u', 'U' -> {
                            if (ndigits > 0 && number.isNotEmpty()) {
                                number += read()
                                suffix = true
                            } else {
                                break@loop
                            }
                        }
                        '-', '+' -> {
                            //if (number.isEmpty() || number.endsWith("e") || number.endsWith("E")) {
                            if (number.endsWith("e") || number.endsWith("E")) {
                                number += read()
                            } else {
                                break@loop
                            }
                        }
                        else -> break@loop
                    }
                }
                if (number.isEmpty()) null else number
            }

            when {
                number != null -> out += gen(number, spos, nline)
                peek3 in sym3 -> out += gen(read(3), spos, nline)
                peek2 in sym2 -> out += gen(read(2), spos, nline)
                peek1 in sym1 -> out += gen(read(1), spos, nline)
                else -> {
                    // Numeric constant
                    if (v.isDigit()) {
                        out += gen(
                                readBlock { while (!eof && peek().isDigit() || peek() in 'A'..'F' || peek() in 'a'..'f' || peek() == 'x' || peek() == 'X' || peek() == 'e') read() },
                                spos,
                                nline
                        )
                    }
                    // Identifier
                    else if (v.isAlphaOrUnderscore()) {
                        out += gen(readBlock { while (!eof && peek().isAlnumOrUnderscore()) read() }, spos, nline)
                    }
                    else if (v == '#') {
                        out += gen(readBlock {
                            read()
                            while (!eof && peek().isAlnumOrUnderscore()) read()
                        }, spos, nline)
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
