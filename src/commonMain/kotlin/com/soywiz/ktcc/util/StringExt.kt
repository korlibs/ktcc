package com.soywiz.ktcc.util

fun String.splitWithSeparator(separator: String): List<String> {
    val out = arrayListOf<String>()
    val parts = this.split(separator)
    for (n in 0 until parts.size) {
        if (n != 0) {
            out += separator
        }
        out += parts[n]
    }
    return out
}
