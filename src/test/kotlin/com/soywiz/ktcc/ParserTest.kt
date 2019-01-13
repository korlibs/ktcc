package com.soywiz.ktcc

import com.soywiz.ktcc.util.*
import org.junit.*

class ParserTest {
    @Test
    fun test() {
        val expr = listOf("1", "+", "(", "2", "+", "3", "*", "4", ")").reader("").expression()
        println(expr)
    }
}