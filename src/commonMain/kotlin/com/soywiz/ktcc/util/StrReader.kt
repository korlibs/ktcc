package com.soywiz.ktcc.util

import kotlin.math.*

class StrReader(val str: String, var pos: Int = 0) {
    val size get() = str.length
    val eof get() = pos >= size
    val available get() = size - pos

    fun peek() = str.getOrElse(pos) { '\u0000' }
    fun peekOffset(offset: Int) = str.getOrElse(pos + offset) { '\u0000' }
    fun read() = str.getOrElse(pos++) { '\u0000' }
    fun peek(count: Int) = str.substring(pos, pos + min(available, count))
    fun read(count: Int) = peek(count).also { pos += it.length }
    fun expect(expect: String) {
        val actual = read(expect.length)
        if (actual != expect) error("Expected '$expect' actual '$actual'")
    }

    fun expect(expect: Char) {
        val actual = read()
        if (actual != expect) error("Expected '$expect' actual '$actual'")
    }

    fun tryPeek(str: String): Boolean {
        for (n in 0 until str.length) {
            if (peekOffset(n) != str[n]) return false
        }
        return true
    }

    fun tryPeek(set: MatchSet): Int {
        val str = peek(set.maxLength)
        if (str !in set.values) return 0
        return set.maxLength
    }

    inline fun readBlock(callback: () -> Unit): String {
        val startPos = pos
        callback()
        return str.substring(startPos, pos)
    }

    fun <T> keepPos(callback: () -> T): T {
        val old = pos
        try {
            return callback()
        } finally {
            pos = old
        }
    }

    inline fun <T> tryRead(callback: () -> T?): T? {
        val old = pos
        val result = callback()
        if (result == null) pos = old
        return result
    }

    data class MatchSet(val values: List<String>) {
        val maxLength = values.map { it.length }.max() ?: 0
        init {
            if (!values.all { it.length == maxLength }) error("All entries in MatchSet have to have the same length")
        }
    }
}