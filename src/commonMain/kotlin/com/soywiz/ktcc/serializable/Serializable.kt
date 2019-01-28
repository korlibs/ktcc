package com.soywiz.ktcc.serializable

import kotlin.reflect.KClass

interface KSerializer<T>
annotation class Serializable(
    val with: KClass<out KSerializer<*>> = KSerializer::class
)
//typealias Serializable = kotlinx.serialization.Serializable
