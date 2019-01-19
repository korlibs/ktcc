package com.soywiz.ktcc.runtime

val CStdIncludes = mapOf(
        "stdint.h" to """
        """.trimIndent(),
        "stdio.h" to """
            int putchar(int c);
        """.trimIndent(),
        "stdlib.h" to """
        """.trimIndent(),
        "string.h" to """
        """.trimIndent()
)