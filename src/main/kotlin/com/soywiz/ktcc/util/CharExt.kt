package com.soywiz.ktcc.util

fun Char.isAlphaLC() = (this in 'a'..'z')
fun Char.isAlphaUC() = (this in 'A'..'Z')
fun Char.isAlpha() = isAlphaLC() || isAlphaUC()
fun Char.isAlnum() = isAlpha() || isDigit()
fun Char.isAlphaOrUnderscore() = this.isAlpha() || this == '_'
fun Char.isAlnumOrUnderscore() = this.isAlphaOrUnderscore() || isDigit()
