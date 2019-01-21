package com.soywiz.ktcc

fun String.parseMessages() = programParser().program().warningsAndErrors.map { it.message }.joinToString(",")
