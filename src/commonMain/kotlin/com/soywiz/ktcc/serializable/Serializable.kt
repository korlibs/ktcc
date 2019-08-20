package com.soywiz.ktcc.serializable

import kotlin.reflect.*

interface KSerializer<T>
annotation class Serializable(
    val with: KClass<out KSerializer<*>> = KSerializer::class
)
//typealias Serializable = kotlinx.serialization.Serializable
