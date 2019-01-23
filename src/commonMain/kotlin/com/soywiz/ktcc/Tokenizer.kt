package com.soywiz.ktcc

import com.soywiz.ktcc.util.*

private val allSymbols = allOperators + setOf("->", "(", ")", "[", "]", "{", "}", ";", ",", ".", "...", "#", "##", "\\")
private val sym3 by lazy { StrReader.MatchSet(allSymbols.filter { it.length == 3 }) }
private val sym2 by lazy { StrReader.MatchSet(allSymbols.filter { it.length == 2 }) }
private val sym1 by lazy { StrReader.MatchSet(allSymbols.filter { it.length == 1 }) }

data class CToken(val str: String, val pos: Int = -1, val row: Int = 0, val lineStart: Int = -1) {
    var tokenIndex: Int = -1
    val columnStart get() = pos - lineStart
    val columnEnd get() = columnStart + str.length
    val columnMiddle get() = (columnStart + columnEnd) / 2
}

fun String.tokenize(include: IncludeMode = IncludeMode.NORMAL): ListReader<CToken> = doTokenize(this, CToken("", this.length, -1, -1), include = include) { CToken(str, pos, nline, lineStart) }

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
                    else -> error("Unknown symbol: '$v'")
                }
            }
        }
    }

    private fun StrReader.skipNumbers(isHex: Boolean): Int {
        var ndigits = 0
        while (!eof) {
            val c = peek()
            if (isHex && !c.isHexDigit()) break
            if (!isHex && !c.isDigit()) break
            skip(1)
            ndigits++
        }
        return ndigits
    }

    private fun StrReader.tryReadNumber() = tryRead {
        val start = pos
        var isHex = false
        var isDecimal = false
        //if (tryPeek("-") || tryPeek("+")) {
        //    skip(1)
        //}
        if (tryPeek("0x") || tryPeek("0X")) {
            isHex = true
            skip(2)
        }
        val ndigits = skipNumbers(isHex)
        if (ndigits > 0 || peek() == '.') {
            var ndecdigits = 0
            if (!isHex) {
                if (tryPeek(".")) {
                    skip(1)
                    isDecimal = true
                    ndecdigits = skipNumbers(isHex = false)
                }
                if (tryPeek("e") || tryPeek("E")) {
                    skip(1)
                    isDecimal = true
                    if (tryPeek("-") || tryPeek("+")) skip(1)
                    ndecdigits += skipNumbers(isHex = false)
                }
            }
            if (!isDecimal) {
                while (true) {
                    val c = peek()
                    if (c == 'u' || c == 'U' || c == 'l' || c == 'L') { skip(1); continue }
                    break
                }
            }
            if (isDecimal && ndigits > 0 || ndecdigits > 0) {
                while (true) {
                    val c = peek()
                    if (c == 'f') { skip(1); continue }
                    break
                }
            }
            if (ndigits > 0 || ndecdigits > 0) {
                val end = pos
                val res = this.str.substring(start, end)
                res
            } else {
                null
            }
        } else {
            null
        }
    }
}

fun <T> doTokenize(file: StrReader, default: T, include: IncludeMode = IncludeMode.NORMAL, gen: MutableTokenInfo.() -> T): ListReader<T> {
    return Tokenizer<T>(file, gen).doTokenize(default, include)
}
