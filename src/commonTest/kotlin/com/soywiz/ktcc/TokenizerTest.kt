package com.soywiz.ktcc

import kotlin.test.*

class TokenizerTest {
    @Test
    fun test() {
        assertEquals(
                listOf("0xFF", "+", "0xFF", "+", "1.0", "+", "1e-100"),
                tokenize("0xFF + 0xFF + 1.0 + 1e-100")
        )
    }

    @Test
    fun test2() {
        assertEquals(
                listOf("9.53674316e-07f", "/", "3", "+", ".3", "+", ".4", "-", ".3"),
                tokenize("9.53674316e-07f/3 + .3 +.4 -.3")
        )
    }

    @Test
    fun test3() {
        assertEquals(
                listOf("static", "const", "float", "g_deq_L12", "[", "18", "*", "3", "]", "=", "{", "9.53674316e-07f", "/", "3", "}", ";"),
                tokenize("static const float g_deq_L12[18*3] = { 9.53674316e-07f/3 };")
        )
    }

    @Test
    fun test4() {
        assertEquals(listOf("a", ".", "l"), tokenize("a.l"))
    }

    @Test
    fun test5() {
        assertEquals(listOf("dec", ".", "free_format_bytes"), tokenize("dec.free_format_bytes"))
    }

    @Test
    fun test6() {
        assertEquals(listOf("1.", "u"), tokenize("1.u"))
    }

    @Test
    fun test7() {
        assertEquals(listOf("4.f"), tokenize("4.f"))
    }

    @Test
    fun test8() {
        assertEquals(
                listOf("void", "simple_printf", "(", "const", "char", "*", "fmt", ",", "...", ")"),
                tokenize("void simple_printf(const char* fmt, ...)")
        )
    }


    private fun tokenize(s: String): List<String> = doTokenize(s, "") { this.str }.items
}