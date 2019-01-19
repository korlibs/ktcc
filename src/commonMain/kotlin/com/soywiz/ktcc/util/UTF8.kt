package com.soywiz.ktcc.util

fun ByteArray.toStringUtf8(): String = buildString {
    val src = this@toStringUtf8
    val start = 0
    val end = src.size
    if ((start < 0 || start > src.size) || (end < 0 || end > src.size)) error("Out of bounds")
    var i = start
    while (i < end) {
        val c = src[i].toInt() and 0xFF
        when (c shr 4) {
            in 0..7 -> {
                // 0xxxxxxx
                append(c.toChar())
                i += 1
            }
            in 12..13 -> {
                // 110x xxxx   10xx xxxx
                append((c and 0x1F shl 6 or (src[i + 1].toInt() and 0x3F)).toChar())
                i += 2
            }
            14 -> {
                // 1110 xxxx  10xx xxxx  10xx xxxx
                append((c and 0x0F shl 12 or (src[i + 1].toInt() and 0x3F shl 6) or (src[i + 2].toInt() and 0x3F)).toChar())
                i += 3
            }
            else -> {
                i += 1
            }
        }
    }
}
