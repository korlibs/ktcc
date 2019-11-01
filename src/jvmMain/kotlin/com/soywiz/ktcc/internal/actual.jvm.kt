package com.soywiz.ktcc.internal

import java.io.File

actual fun readFile(name: String): ByteArray? {
    return File(name).takeIf { it.exists() }?.readBytes()
}

actual fun writeFile(name: String, content: ByteArray) {
    File(name).writeBytes(content)
}
