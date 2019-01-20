package com.soywiz.ktcc

import kotlin.test.*

class TokenizerTest {
    @Test
    fun test() {
        val tokens = doTokenize("0xFF + 0xFF + 1.0 + 1e-100", "") { str, pos, nline -> str }
        println(tokens.items)
    }

    @Test
    fun test2() {
        val tokens = doTokenize("9.53674316e-07f/3 + .3 +.4 -.3", "") { str, pos, nline -> str }
        println(tokens.items)
    }

    @Test
    fun test3() {
        val tokens = doTokenize("static const float g_deq_L12[18*3] = { 9.53674316e-07f/3 };", "") { str, pos, nline -> str }
        println(tokens.items)
    }

    @Test
    fun test4() {
        val tokens = doTokenize("a.l", "") { str, pos, nline -> str }
        println(tokens.items)
    }
}