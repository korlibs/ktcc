package com.soywiz.ktcc.internal

expect fun readFile(name: String): ByteArray?
expect fun writeFile(name: String, content: ByteArray)
