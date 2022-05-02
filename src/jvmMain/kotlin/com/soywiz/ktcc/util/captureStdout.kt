package com.soywiz.ktcc.util

import java.io.*
import java.nio.charset.*

data class CaptureStdoutResult<T>(val stdout: String, val stderr: String, val result: T) {
    val stdoutStderr = "$stdout$stderr"
}

fun runProcess(vararg args: String): CaptureStdoutResult<Int> {
    return run {
        val p = ProcessBuilder(*args)
            //.also { it.redirectOutput(ProcessBuilder.Redirect.INHERIT) }
            //.also { it.redirectError(ProcessBuilder.Redirect.INHERIT) }
            //.inheritIO()
            .start()
        val stdout = p.inputStream.readAllBytes().toString(Charsets.UTF_8)
        val stderr = p.errorStream.readAllBytes().toString(Charsets.UTF_8)
        CaptureStdoutResult(stdout, stderr, p.waitFor())
    }
}

inline fun <T> captureStdout(charset: Charset = Charsets.UTF_8, callback: () -> T): Pair<String, T> {
    val result = captureStdoutStderr(charset, doOut = true, doErr = false, callback)
    return result.stdout to result.result
}

inline fun <T> captureStdoutStderr(charset: Charset = Charsets.UTF_8, doOut: Boolean = true, doErr: Boolean = true, callback: () -> T): CaptureStdoutResult<T> {
    val out = ByteArrayOutputStream()
    val err = ByteArrayOutputStream()
    val pOut = PrintStream(out, true, charset.name())
    val pErr = PrintStream(err, true, charset.name())
    val old = System.out
    val oldErr = System.err
    try {
        if (doOut) System.setOut(pOut)
        if (doErr) System.setErr(pErr)
        val result = callback()
        return CaptureStdoutResult<T>(out.toByteArray().toString(charset), err.toByteArray().toString(charset), result)
    } finally {
        System.setErr(oldErr)
        System.setOut(old)
    }
}
