package com.soywiz.ktcc.preprocessor

import com.soywiz.ktcc.*
import kotlin.test.*

class PreprocessorTest {
    @Test
    fun test() {
        assertEquals(
            """
                # 1 "unknown"

                ((1) < (2) ? (2) : (1))
                ((((1) < (2) ? (2) : (1))) < (3) ? (3) : (((1) < (2) ? (2) : (1))))
            """.trimIndent(),
            """
                #define MAX(a, b)           ((a) < (b) ? (b) : (a))
                MAX(1, 2)
                MAX(MAX(1, 2), 3)
            """.trimIndent().preprocess()
        )
    }
}