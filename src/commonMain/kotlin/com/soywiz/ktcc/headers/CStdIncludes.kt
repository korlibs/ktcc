package com.soywiz.ktcc.headers

import com.soywiz.ktcc.util.*

data class Include(val file: String, val cHeader: String, val ktImpl: String, val cImpl: String)

class CIncludes {
    val map = LinkedHashMap<String, Include>()
    fun FILE(file: String, /* language=c */ header: String, /* language=kt */ ktImpl: String = "", /* language=c */ cImpl: String = "") {
        val once = ("__" + file.replace(DOT, "_").replace("/", "_") + "_").toUpperCase()
        map[file] = Include(file, "#pragma once\n#ifndef $once\n#define $once\n${header.trimIndent()}\n#endif", ktImpl, cImpl)
    }
}

