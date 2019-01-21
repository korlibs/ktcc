package com.soywiz.ktcc.util

class UnexpectedException(msg: String) : Exception(msg)
fun unexpected(msg: String = "unexpected"): Nothing = throw UnexpectedException(msg)