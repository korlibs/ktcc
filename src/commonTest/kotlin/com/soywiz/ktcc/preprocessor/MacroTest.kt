package com.soywiz.ktcc.preprocessor

import com.soywiz.ktcc.*
import kotlin.test.*

class MacroTest {
    @Test fun test1a() = assertEquals(Macro("HELLO", listOf("WORLD"), null), Macro("HELLO=WORLD"))
    @Test fun test1b() = assertEquals(Macro("HELLO", listOf("WORLD"), null), Macro("HELLO", "WORLD"))

    @Test fun test2a() = assertEquals(Macro("HELLO", listOf("(", "WORLD", ")"), null), Macro("HELLO= (WORLD)"))
    @Test fun test2b() = assertEquals(Macro("HELLO", listOf("(", "WORLD", ")"), null), Macro("HELLO", " (WORLD)"))

    @Test fun test3a() = assertEquals(Macro("HELLO", listOf(), listOf("WORLD")), Macro("HELLO=(WORLD)"))
    @Test fun test3b() = assertEquals(Macro("HELLO", listOf(), listOf("WORLD")), Macro("HELLO", "(WORLD)"))

    @Test fun test4a() = assertEquals(Macro("HELLO", listOf("A", "+", "B"), listOf("A", "B")), Macro("HELLO=(A, B) A+B"))
    @Test fun test4b() = assertEquals(Macro("HELLO", listOf("A", "+", "B"), listOf("A", "B")), Macro("HELLO", "(A, B) A+B"))
}