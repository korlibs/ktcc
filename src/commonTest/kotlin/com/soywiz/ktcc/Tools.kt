package com.soywiz.ktcc

import com.soywiz.ktcc.parser.*

fun String.parseMessages() = programParser().program().warningsAndErrors.map { it.message }.joinToString(",")
