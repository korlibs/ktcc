package com.soywiz.ktcc.headers

import com.soywiz.ktcc.util.*

class CIncludes {
    val map = LinkedHashMap<String, String>()
    fun FILE(file: String, /* language=c */ header: String, /* language=c */ implementation: String = "") {
        val once = ("__" + file.replace(DOT, "_").replace("/", "_") + "_").toUpperCase()
        map[file] = "#pragma once\n#ifndef $once\n#define $once\n${header.trimIndent()}\n#endif"
    }
}

