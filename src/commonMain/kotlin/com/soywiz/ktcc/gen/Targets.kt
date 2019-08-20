package com.soywiz.ktcc.gen

object Targets {
    val kotlin get() = KotlinTarget
    val c get() = CTarget
    val all by lazy { setOf(kotlin, c) }
    val byName by lazy { all.associateBy { it.name } }
}
