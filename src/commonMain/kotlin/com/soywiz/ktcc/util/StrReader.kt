package com.soywiz.ktcc.util

import kotlin.math.*

class StrReader(val str: String, var pos: Int = 0) {
    val size get() = str.length
    val eof get() = pos >= size
    val available get() = size - pos

    fun peek() = str.getOrElse(pos) { '\u0000' }
    fun read() = str.getOrElse(pos++) { '\u0000' }
    fun peek(count: Int) = str.substring(pos, pos + min(available, count))
    fun read(count: Int) = peek(count).also { pos += it.length }
    fun expect(expect: String) {
        val actual = read(expect.length)
        if (actual != expect) error("Expected '$expect' actual '$actual'")
    }

    inline fun readBlock(callback: () -> Unit): String {
        val startPos = pos
        callback()
        return str.substring(startPos, pos)
    }
}