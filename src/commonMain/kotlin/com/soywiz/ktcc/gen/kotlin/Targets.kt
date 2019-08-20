package com.soywiz.ktcc.gen.kotlin

object Targets {
    val kotlin = KotlinTarget
    val c = CTarget
    val all = setOf(kotlin, c)
    val byName = all.associateBy { it.name }
}
