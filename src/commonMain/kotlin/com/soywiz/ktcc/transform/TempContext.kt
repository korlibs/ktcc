package com.soywiz.ktcc.transform

class TempContext {
    var lastId = 0

    fun gen(prefix: String, suffix: String = "") = "$prefix${lastId++}$suffix"
}