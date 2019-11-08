package com.soywiz.ktcc.util

import java.io.*
import java.nio.charset.*

inline fun <T> captureStdout(charset: Charset = Charsets.UTF_8, callback: () -> T): Pair<String, T> {
    val out = ByteArrayOutputStream()
    val ps = PrintStream(out, true, charset.name())
    val old = System.out
    try {
        System.setOut(ps)
        val result = callback()
        return out.toByteArray().toString(charset) to result
    } finally {
        System.setOut(old)
    }
}