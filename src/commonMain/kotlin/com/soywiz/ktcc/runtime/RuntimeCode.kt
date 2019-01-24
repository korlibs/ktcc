package com.soywiz.ktcc.runtime

import com.soywiz.ktcc.util.*

val RuntimeCode = buildString {
    appendln("// KTCC RUNTIME ///////////////////////////////////////////////////")
    appendln("/*!!inline*/ class CPointer<T>(val ptr: Int)")

    data class FuncType(val n: Int) {
        val cname = "CFunction$n"
        val kname = "kotlin.reflect.KFunction$n"
        val targsNR = (0 until n).map { "T$it" }.joinToString(", ")
        val targs = ((0 until n).map { "T$it" } + listOf("TR")).joinToString(", ")
        val vargs = ((0 until n).map { "v$it: T$it" }).joinToString(", ")
        val cargs = ((0 until n).map { "v$it" }).joinToString(", ")
    }

    data class KType(val name: String, val size: Int, val load: (addr: String) -> String, val store: (addr: String, value: String) -> String, val default: String = "0", val unsigned: Boolean = false) {
        val dummy = if (unsigned) "dummy: $name = $default, unsignedDummy: Unit = Unit" else "dummy: $name = $default"
    }

    val ktypes = listOf(
            KType("Byte", 1, { addr -> "lb($addr)" }, { addr, v -> "sb($addr, $v)" }),
            KType("Short", 2, { addr -> "lh($addr)" }, { addr, v -> "sh($addr, $v)" }),
            KType("Int", 4, { addr -> "lw($addr)" }, { addr, v -> "sw($addr, $v)" }),
            KType("Long", 8, { addr -> "ld($addr)" }, { addr, v -> "sd($addr, $v)" }, default = "0L"),

            //KType("UByte", 1, { addr -> "lb($addr).toUByte()" }, { addr, v -> "sb($addr, ($v).toByte())" }, default = "0u", unsigned = true),
            //KType("UShort", 2, { addr -> "lh($addr).toUShort()" }, { addr, v -> "sh($addr, ($v).toShort())" }, default = "0u", unsigned = true),
            //KType("UInt", 4, { addr -> "lw($addr).toUInt()" }, { addr, v -> "sw($addr, ($v).toInt())" }, default = "0u", unsigned = true),
            //KType("ULong", 8, { addr -> "ld($addr).toULong()" }, { addr, v -> "sd($addr, ($v).toLong())" }, default = "0uL", unsigned = true),

            KType("Float", 4, { addr -> "Float.fromBits(lw($addr))" }, { addr, v -> "sw($addr, ($v).toBits())" }, default = "0f")
    )

    val funcTypes = (0 until 8).map { FuncType(it) }

    for (ft in funcTypes) {
        appendln("/*!!inline*/ class ${ft.cname}<${ft.targs}>(val ptr: Int)")
    }

    appendln("")

    appendln("open class Runtime(val REQUESTED_HEAP_SIZE: Int = 0) {")

    appendln(/*language=kotlin*/ """
        val HEAP_SIZE = if (REQUESTED_HEAP_SIZE <= 0) 16 * 1024 * 1024 else REQUESTED_HEAP_SIZE // 16 MB default
        val HEAP = java.nio.ByteBuffer.allocateDirect(HEAP_SIZE).order(java.nio.ByteOrder.LITTLE_ENDIAN)

        val FUNCTIONS = arrayListOf<kotlin.reflect.KFunction<*>>()

        val POINTER_SIZE = 4

        var STACK_PTR = 512 * 1024 // 0.5 MB
        var HEAP_PTR = STACK_PTR

        fun lb(ptr: Int) = HEAP[ptr]
        fun sb(ptr: Int, value: Byte) = run { HEAP.put(ptr, value) }

        fun lh(ptr: Int): Short = HEAP.getShort(ptr)
        fun sh(ptr: Int, value: Short): Unit = run { HEAP.putShort(ptr, value) }

        fun lw(ptr: Int): Int = HEAP.getInt(ptr)
        fun sw(ptr: Int, value: Int): Unit = run { HEAP.putInt(ptr, value) }

        fun ld(ptr: Int): Long = HEAP.getLong(ptr)
        fun sd(ptr: Int, value: Long): Unit = run { HEAP.putLong(ptr, value) }

        inline fun <T> Int.toCPointer(): CPointer<T> = CPointer(this)
        inline fun <T> CPointer<*>.toCPointer(): CPointer<T> = CPointer(this.ptr)

        fun <T> CPointer<T>.addPtr(offset: Int, elementSize: Int) = CPointer<T>(this.ptr + offset * elementSize)

        fun <T> CPointer<CPointer<T>>.plus(offset: Int, dummy: Unit = Unit) = addPtr<CPointer<T>>(offset, 4)
        fun <T> CPointer<CPointer<T>>.minus(offset: Int, dummy: Unit = Unit) = addPtr<CPointer<T>>(-offset, 4)

        operator fun <T> CPointer<CPointer<T>>.set(offset: Int, value: CPointer<T>) = sw(this.ptr + offset * 4, value.ptr)
        operator fun <T> CPointer<CPointer<T>>.get(offset: Int): CPointer<T> = CPointer(lw(this.ptr + offset * 4))

        inline fun Number.toBool() = this.toInt() != 0
        inline fun UByte.toBool() = this.toInt() != 0
        inline fun UShort.toBool() = this.toInt() != 0
        inline fun UInt.toBool() = this.toInt() != 0
        inline fun ULong.toBool() = this.toInt() != 0
        fun Boolean.toBool() = this

        // STACK ALLOC
        inline fun <T> stackFrame(callback: () -> T): T {
            val oldPos = STACK_PTR
            return try { callback() } finally { STACK_PTR = oldPos }
        }
        fun alloca(size: Int): CPointer<Unit> = CPointer<Unit>((STACK_PTR - size).also { STACK_PTR -= size })
        fun alloca_zero(size: Int): CPointer<Unit> = alloca(size).also { memset(it, 0, size) }

        // HEAP ALLOC
        fun malloc(size: Int): CPointer<Unit> = CPointer<Unit>(HEAP_PTR.also { HEAP_PTR += size })
        fun free(ptr: CPointer<*>): Unit = Unit // @TODO

        // I/O
        fun putchar(c: Int): Int = c.also { System.out.print(c.toChar()) }

        fun printf(format: CPointer<Byte>, vararg params: Any?) {
            var paramPos = 0;
            val fmt = format.readStringz()
            var n = 0
            while (n < fmt.length) {
                val c = fmt[n++]
                if (c == '%') {
                    val c2 = fmt[n++]
                    when (c2) {
                        'd' -> print((params[paramPos++] as Number).toInt())
                        's' -> {
                            val v = params[paramPos++]
                            if (v is CPointer<*>) {
                                print((v as CPointer<Byte>).readStringz())
                            } else {
                                print(v)
                            }
                        }
                        else -> {
                            print(c)
                            print(c2)
                        }
                    }
                } else {
                    putchar(c.toInt())
                }
            }
        }

        // string/memory
        fun memset(ptr: CPointer<*>, value: Int, num: Int): CPointer<Unit> = (ptr as CPointer<Unit>).also { for (n in 0 until num) sb(ptr.ptr + value, value.toByte()) }
        fun memcpy(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
            for (n in 0 until num) {
                sb(dest.ptr + n, lb(src.ptr + n))
            }
            return dest as CPointer<Unit>
        }

        private val STRINGS = LinkedHashMap<String, CPointer<Byte>>()

        // @TODO: UTF-8?
        fun CPointer<Byte>.readStringz(): String {
            var sb = StringBuilder()
            var pos = this.ptr
            while (true) {
                val c = lb(pos++)
                if (c == 0.toByte()) break
                sb.append(c.toChar())
            }
            return sb.toString()
        }

        val String.ptr: CPointer<Byte> get() = STRINGS.getOrPut(this) {
            val bytes = this.toByteArray(Charsets.UTF_8)
            val ptr = malloc(bytes.size + 1).toCPointer<Byte>()
            val p = ptr.ptr
            for (n in 0 until bytes.size) sb(p + n, bytes[n])
            sb(p + bytes.size, 0)
            ptr
        }

        val Array<String>.ptr: CPointer<CPointer<Byte>> get() {
            val array = this
            val ptr = malloc(POINTER_SIZE * array.size).toCPointer<CPointer<Byte>>()
            for (n in 0 until array.size) {
                sw(ptr.ptr + n * POINTER_SIZE, array[n].ptr.ptr)
            }
            return ptr
        }
    """.trimIndent())
    appendln("")
    for (ktype in ktypes) ktype.apply { appendln("operator fun CPointer<$name>.get(offset: Int): $name = ${load("this.ptr + offset * $size")}") }
    appendln("")
    for (ktype in ktypes) ktype.apply { appendln("operator fun CPointer<$name>.set(offset: Int, value: $name) = ${store("this.ptr + offset * $size", "value")}") }
    appendln("")
    for (ktype in ktypes) ktype.apply { appendln("fun CPointer<$name>.plus(offset: Int, $dummy) = addPtr<$name>(offset, $size)") }
    appendln("")
    for (ktype in ktypes) ktype.apply { appendln("fun CPointer<$name>.minus(offset: Int, $dummy) = addPtr<$name>(-offset, $size)") }
    appendln("")
    for (ktype in ktypes) ktype.apply { appendln("fun fixedArrayOf$name(size: Int, vararg values: $name): CPointer<$name> = alloca_zero(size * $size).toCPointer<$name>().also { for (n in 0 until values.size) ${store("it.ptr + n * $size", "values[n]")} }") }

    appendln("")
    appendln("val FUNCTION_ADDRS = LinkedHashMap<kotlin.reflect.KFunction<*>, Int>()")
    appendln("")
    for (ft in funcTypes) {
        ft.apply {
            appendln("operator fun <$targs> $cname<$targs>.invoke($vargs): TR = (FUNCTIONS[this.ptr] as (($targsNR) -> TR)).invoke($cargs)")
            appendln("val <$targs> $kname<$targs>.cfunc get() = $cname<$targs>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })")
        }
    }

    appendln("}")
}