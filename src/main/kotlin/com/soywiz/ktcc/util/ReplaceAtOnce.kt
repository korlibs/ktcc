package com.soywiz.ktcc.util

data class PReplaceRange(val range: IntRange, val newValue: String?) {
    val start get() = range.start
    val end get() = range.endInclusive + 1
}

fun String.replaceAtOnce(replaces: List<PReplaceRange>): String {
    val str = this
    if (replaces.isEmpty()) return this
    val freplaces = buildList<PReplaceRange> {
        add(PReplaceRange(0 until replaces.first().start, null))
        for (n in 1 until replaces.size) {
            val r0 = replaces[n - 1]
            val r1 = replaces[n]
            add(r0)
            add(PReplaceRange(r0.end until r1.start, null))
        }
        add(replaces.last())
        add(PReplaceRange(replaces.last().end until str.length, null))
    }
    return freplaces.map {
        when {
            it.newValue != null -> it.newValue
            it.range.endInclusive < it.range.start -> ""
            else -> str.substring(it.range)
        }
    }.joinToString("")
}
