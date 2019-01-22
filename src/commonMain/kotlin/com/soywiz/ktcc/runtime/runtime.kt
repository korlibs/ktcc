package com.soywiz.ktcc.runtime

val RuntimeCode = /*language=kotlin*/ """// KTCC RUNTIME ///////////////////////////////////////////////////
val HEAP = java.nio.ByteBuffer.allocateDirect(16 * 1024).order(java.nio.ByteOrder.LITTLE_ENDIAN) // 16KB
val HEAP8 = HEAP
val HEAP16 = HEAP.asShortBuffer()
val HEAP32 = HEAP.asIntBuffer()

var HEAP_PTR = 4 * 1024
var STACK_PTR = 4 * 1024 // 4 KB

fun lb(ptr: Int) = HEAP[ptr]
fun sb(ptr: Int, value: Byte) = run { HEAP.put(ptr, value) }

fun lh(ptr: Int): Short = HEAP.getShort(ptr)
fun sh(ptr: Int, value: Short): Unit = run { HEAP.putShort(ptr, value) }

fun lw(ptr: Int): Int = HEAP.getInt(ptr)
fun sw(ptr: Int, value: Int): Unit = run { HEAP.putInt(ptr, value) }

//fun lw(ptr: Int): Int = HEAP32[ptr ushr 2]
//fun sw(ptr: Int, value: Int): Unit = run { HEAP32.put(ptr ushr 2, value) }

/*!!inline*/ class CPointer<T>(val ptr: Int)

inline fun <T> Int.toCPointer(): CPointer<T> = CPointer(this)
inline fun <T> CPointer<*>.toCPointer(): CPointer<T> = CPointer(this.ptr)

operator fun CPointer<Byte>.get(offset: Int): Byte = lb(this.ptr + offset * 1)
operator fun CPointer<Short>.get(offset: Int): Short = lh(this.ptr + offset * 2)
operator fun CPointer<Int>.get(offset: Int): Int = lw(this.ptr + offset * 4)

operator fun CPointer<Byte>.set(offset: Int, value: Byte) = sb(this.ptr + offset * 1, value)
operator fun CPointer<Short>.set(offset: Int, value: Short) = sh(this.ptr + offset * 2, value)
operator fun CPointer<Int>.set(offset: Int, value: Int) = sw(this.ptr + offset * 4, value)

operator fun CPointer<Byte>.plus(offset: Int): CPointer<Byte> = CPointer<Byte>(ptr + offset * 1)
operator fun CPointer<Byte>.minus(offset: Int): CPointer<Byte> = CPointer<Byte>(ptr - offset * 1)

//operator fun CPointer<Byte>.inc(): CPointer<Byte> = this + 1
//inline operator fun CPointer<Byte>.dec(): CPointer<Byte> = this - 1

fun Int.toBool() = this != 0
fun Boolean.toBool() = this

// STACK ALLOC
inline fun <T> stackFrame(callback: () -> T): T {
    val oldPos = STACK_PTR
    return try { callback() } finally { STACK_PTR = oldPos }
}
fun alloca(size: Int): CPointer<Unit> = CPointer<Unit>((STACK_PTR - size).also { STACK_PTR -= size })

// HEAP ALLOC
fun malloc(size: Int): CPointer<Unit> = CPointer<Unit>(HEAP_PTR.also { HEAP_PTR += size })
fun free(ptr: CPointer<*>): Unit = Unit // @TODO

// I/O
fun putchar(c: Int): Int = c.also { System.out.print(c.toChar()) }

typealias size_t = Int

// memset
fun memset(ptr: CPointer<*>, value: Int, num: size_t): CPointer<Unit> = (ptr as CPointer<Unit>).also { for (n in 0 until num) sb(ptr.ptr + value, value.toByte()) }

private val STRINGS = LinkedHashMap<String, CPointer<Byte>>()

val String.ptr: CPointer<Byte> get() = STRINGS.getOrPut(this) {
    val bytes = this.toByteArray(Charsets.UTF_8)
    val ptr = malloc(bytes.size + 1).toCPointer<Byte>()
    val p = ptr.ptr
    for (n in 0 until bytes.size) sb(p + n, bytes[n])
    sb(p + bytes.size, 0)
    ptr
}

///////////////////////////////////////////////////////////////////
"""
