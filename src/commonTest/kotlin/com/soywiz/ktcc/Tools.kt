package com.soywiz.ktcc

import com.soywiz.ktcc.parser.*

fun String.parseMessages() = programParser().apply { program() }.warningsAndErrors.map { it.message }.joinToString(",")
