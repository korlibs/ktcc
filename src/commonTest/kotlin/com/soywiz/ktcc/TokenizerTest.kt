package com.soywiz.ktcc

import kotlin.test.*

class TokenizerTest {
    @Test
    fun test() {
        val tokens = doTokenize("0xFF + 0xFF + 1.0 + 1e-100", "") { str, pos, nline -> str }
        println(tokens.items)
    }
}