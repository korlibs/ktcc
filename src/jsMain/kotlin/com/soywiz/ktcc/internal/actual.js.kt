package com.soywiz.ktcc.internal

import com.soywiz.ktcc.js.*

actual fun readFile(name: String): ByteArray? {
    return files[name]
}

actual fun writeFile(name: String, content: ByteArray) {
    files[name] = content
}
