package com.soywiz.ktcc.util

class EOFException : RuntimeException()

open class ListReader<T>(val items: List<T>, val default: T, var pos: Int = 0) {
    val size: Int get() = items.size
    val eof: Boolean get() = pos >= size

    open fun createExpectException(str: String): ExpectException = ExpectException(str)

    fun skip(count: Int = 1) {
        pos += count
    }

    fun read(): T {
        if (eof) throw EOFException()
        return items[pos++]
    }

    fun readOutside(): T {
        return items.getOrElse(pos++) { default }
    }

    fun peek(offset: Int = 0): T {
        if (eof) throw EOFException()
        return items[pos + offset]
    }

    fun peekOutside(offset: Int = 0): T {
        return items.getOrElse(pos + offset) { default }
    }

    fun expect(expect: T): T {
        val actual = readOutside()
        if (actual != expect) throw createExpectException("Expected '$expect' but found '$actual'")
        return actual
    }

    fun <R> expectPair(expectPre: T, expectPost: T, callback: () -> R): R {
        expect(expectPre)
        val out = callback()
        expect(expectPost)
        return out
    }

    fun expect(vararg expect: T) {
        for (e in expect) expect(e)
    }

    fun expectAny(vararg expect: T): T {
        val actual = readOutside()
        if (actual !in expect) throw createExpectException("Expected '$expect' but found '$actual'")
        return actual
    }

    fun tryExpect(expect: T): T? {
        if (peek() == expect) {
            return readOutside()
        } else {
            return null
        }
    }

    inline fun <R : Any> restoreOnNull(callback: () -> R?): R? {
        val oldPos = pos
        val result = callback()
        if (result == null) {
            pos = oldPos
        }
        return result
    }

    inline fun <R : Any> tryBlock(callback: () -> R): R? = tryBlockResult(callback).valueOrNull

    inline fun <R : Any> tryBlockResult(callback: () -> R): ItemOrError<R> {
        val oldPos = pos
        val result = try {
            callback()
        } catch (e: ExpectException) {
            e
        }
        if (result is ExpectException) pos = oldPos
        return ItemOrError(result)
    }

    inline fun <R : Any> tryBlocks(name: String, context: Any?, vararg callbacks: () -> R, propagateLast: Boolean = false): R {
        val errors = arrayListOf<Throwable>()
        for (callback in callbacks) {
            val result = tryBlockResult(callback)
            if (!result.isError) {
                return result.value
            } else {
                errors += result.error
            }
        }
        if (propagateLast) {
            throw errors.last()
        } else {
            throw createExpectException("Tried to parse $name but failed with $errors in $context")
        }
    }

    inline fun <T> keepPos(callback: () -> T): T {
        val spos = pos
        try {
            return callback()
        } finally {
            pos = spos
        }
    }
}

open class ExpectException(msg: String) : Exception(msg)

inline class ItemOrError<T>(val _value: Any) {
    val valueOrNull: T? get() = if (!isError) value else null
    val value: T get() = _value as T
    val error: Throwable get() = _value as Throwable
    val isError get() = _value is Throwable
}

//inline class ItemOrError<T>(val _value: Any?) {
//    val valueOrNull: T? get() = if (!isError) value else null
//    val value: T get() = _value as T
//    val error: Throwable get() = _value as Throwable
//    val isError get() = _value is Throwable
//}

fun <T> List<T>.reader(default: T) = ListReader(this, default)