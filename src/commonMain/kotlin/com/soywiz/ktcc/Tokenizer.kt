package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

private val allSymbols = allOperators + setOf("->", "(", ")", "[", "]", "{", "}", ";", ",", ".")
private val sym3 by lazy { StrReader.MatchSet(allSymbols.filter { it.length == 3 }) }
private val sym2 by lazy { StrReader.MatchSet(allSymbols.filter { it.length == 2 }) }
private val sym1 by lazy { StrReader.MatchSet(allSymbols.filter { it.length == 1 }) }

data class CToken(val str: String, val pos: Int = -1, val row: Int = 0, val lineStart: Int = -1) {
    var tokenIndex: Int = -1
    val columnStart get() = pos - lineStart
    val columnEnd get() = columnStart + str.length
    val columnMiddle get() = (columnStart + columnEnd) / 2
}

fun String.tokenize(): ListReader<CToken> = doTokenize(this, CToken("", this.length, -1, -1)) { CToken(str, pos, nline, lineStart) }

enum class IncludeMode(val eol: Boolean = false, val spaces: Boolean = false, val comments: Boolean = false) {
    NORMAL(), EOL(eol = true), ALL(eol = true, spaces = true, comments = true)
}

fun <T> doTokenize(file: String, default: T, include: IncludeMode = IncludeMode.NORMAL, gen: MutableTokenInfo.() -> T): ListReader<T> = doTokenize(StrReader(file), default, include, gen)

class MutableTokenInfo(val reader: StrReader) {
    var str: String = ""
    var pos: Int = 0
    var nline: Int = 1
    var lineStart: Int = 0
    val column get() = pos - lineStart
}

private class Tokenizer<T>(val reader: StrReader, val gen: MutableTokenInfo.() -> T) {
    val out = arrayListOf<T>()
    val info = MutableTokenInfo(reader).apply { lineStart = 0 }
    var spos: Int = reader.pos

    fun doTokenize(default: T, include: IncludeMode = IncludeMode.NORMAL): ListReader<T> {
        reader.doTokenize(default, include)
        return out.reader(default)
    }

    private fun rgen(str: String, pos: Int = spos): T {
        info.str = str
        info.pos = pos
        return gen(info)
    }

    fun StrReader.doTokenize(default: T, include: IncludeMode = IncludeMode.NORMAL) {
        while (!eof) {
            val v = peek()
            spos = pos

            if (v == '\n') {
                read()
                info.lineStart = pos
                info.nline++
                if (include.eol) out += rgen("$v")
                continue
            }
            if (v.isWhitespaceFast() || v == '\r') {
                read()
                if (include.spaces) out += rgen("$v")
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
                out += rgen(literal)
                continue
            }

            // Single line comments
            if (tryPeek("//")) {
                val comment = readBlock {
                    expect("//")
                    while (!eof && peek() != '\n') read()
                    if (!eof) {
                        expect("\n")
                        info.lineStart = pos
                        info.nline++
                    }
                }
                if (include.comments) out += rgen(comment)
                continue
            }

            // Multi line comments
            if (tryPeek("/*")) {
                val comment = readBlock {
                    expect("/*")
                    while (!eof && peek(2) != "*/") {
                        if (peek() == '\n') {
                            expect('\n')
                            info.lineStart = pos
                            info.nline++
                        } else {
                            read()
                        }
                    }
                    if (!eof) expect("*/")
                }
                if (include.comments) out += rgen(comment)
                continue
            }

            val number = tryReadNumber()

            when {
                number != null -> out += rgen(number)
                tryPeek(sym3) == 3 -> out += rgen(read(3))
                tryPeek(sym2) == 2 -> out += rgen(read(2))
                tryPeek(sym1) == 1 -> out += rgen(read(1))
                else -> when {
                    // Numeric constant
                    v.isDigit() -> out += rgen(readBlock { while (!eof && peek().isDigit() || peek() in 'A'..'F' || peek() in 'a'..'f' || peek() == 'x' || peek() == 'X' || peek() == 'e') read() })
                    // Identifier
                    v.isAlphaOrUnderscore() -> out += rgen(readBlock { while (!eof && peek().isAlnumOrUnderscore()) read() })
                    v == '#' -> out += rgen(readBlock {
                        read()
                        while (!eof && peek().isAlnumOrUnderscore()) read()
                    })
                    else -> error("Unknown symbol: '$v'")
                }
            }
        }
    }

    private fun StrReader.tryReadNumber() = tryRead {
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
}

fun <T> doTokenize(file: StrReader, default: T, include: IncludeMode = IncludeMode.NORMAL, gen: MutableTokenInfo.() -> T): ListReader<T> {
    return Tokenizer<T>(file, gen).doTokenize(default, include)
}
