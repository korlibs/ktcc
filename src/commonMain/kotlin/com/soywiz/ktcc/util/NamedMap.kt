package com.soywiz.ktcc.util

class NamedMap<T>(val map: MutableMap<String, T> = mutableMapOf(), val getName: (T) -> String) : MutableMap<String, T> by map {
    fun addAll(items: Iterable<T>) {
        for (item in items) add(item)
    }

    fun addAll(vararg items: T) {
        for (item in items) add(item)
    }

    fun add(item: T) {
        map[getName(item)] = item
    }

    fun removeItem(item: T) {
        map.remove(getName(item))
    }
}
