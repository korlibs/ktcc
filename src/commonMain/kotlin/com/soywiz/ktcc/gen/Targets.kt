package com.soywiz.ktcc.gen

object Targets {
    val kotlin get() = KotlinTarget
    val c get() = CTarget
    val csharp get() = CSharpTarget
    val default get() = kotlin
    val all by lazy { setOf(kotlin, c, csharp) }
    val byName by lazy { all.associateBy { it.name } }
    //operator fun get(name: String) = byName[name] ?: default
    operator fun get(name: String) = byName[name] ?: error("Unknown target '$name'. Supported targets: ${byName.keys}")
}
