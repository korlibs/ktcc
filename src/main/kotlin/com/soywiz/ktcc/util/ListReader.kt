package com.soywiz.ktcc.util

class ListReader<T>(val items: List<T>, val default: T, var pos: Int = 0) {
    val size get() = items.size
    val eof get() = pos >= size

    fun read(): T {
        return items.getOrElse(pos++) { default }
    }

    fun peek(): T {
        return items.getOrElse(pos) { default }
    }

    fun expect(expect: T) {
        val actual = read()
        if (actual != expect) error("Expected $expect but found $actual")
    }

    fun expect(vararg expect: T) {
        for (e in expect) expect(e)
    }

    fun tryExpect(expect: T): T? {
        if (peek() == expect) {
            return read()
        } else {
            return null
        }
    }

    inline fun <R> tryBlock(callback: () -> R): R? = tryBlockResult(callback).valueOrNull

    inline fun <R> tryBlockResult(callback: () -> R): ItemOrError<R> {
        val oldPos = pos
        val result = try {
            callback()
        } catch (e: Throwable) {
            null
        }
        if (result == null) pos = oldPos
        return ItemOrError(result)
    }

    inline fun <R> tryBlocks(name: String, vararg callbacks: () -> R): R {
        val errors = arrayListOf<Throwable>()
        for (callback in callbacks) {
            val result = tryBlockResult(callback)
            if (!result.isError) {
                return result.value
            } else {
                errors += result.error
            }
        }
        error("Tried to parse $name but failed with $errors")
    }
}

inline class ItemOrError<T>(val _value: Any?) {
    val valueOrNull: T? get() = if (!isError) value else null
    val value: T get() = _value as T
    val error: Throwable get() = _value as Throwable
    val isError get() = _value is Throwable
}

fun <T> List<T>.reader(default: T) = ListReader(this, default)