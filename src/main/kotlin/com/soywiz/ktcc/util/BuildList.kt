package com.soywiz.ktcc.util

fun <T> buildList(gen: MutableList<T>.() -> Unit): List<T> = ArrayList<T>().apply(gen)
