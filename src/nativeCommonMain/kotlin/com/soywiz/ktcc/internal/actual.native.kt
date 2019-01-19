package com.soywiz.ktcc.internal

import kotlinx.cinterop.addressOf
import kotlinx.cinterop.convert
import kotlinx.cinterop.encodeToUtf8
import kotlinx.cinterop.usePinned
import platform.posix.*

actual fun readFile(name: String): ByteArray? {
    val fd = fopen(name, "rb")
    return if (fd != null) {
        fseek(fd, 0L, SEEK_END)
        val length = ftell(fd)
        fseek(fd, 0L, SEEK_SET)
        val out = ByteArray(length.toInt())
        val read = if (out.isNotEmpty()) {
            out.usePinned { ptr ->
                fread(ptr.addressOf(0), 1.convert(), length.convert(), fd).toInt()
            }
        } else {
            0
        }
        fclose(fd)
        out.copyOf(read)
    } else {
        null
    }
}