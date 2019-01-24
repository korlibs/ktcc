package com.soywiz.ktcc.runtime

val RuntimeCode = buildString {
    append("// KTCC RUNTIME ///////////////////////////////////////////////////\n")
    append("/*!!inline*/ class CPointer<T>(val ptr: Int)\n")

    data class FuncType(val n: Int) {
        val cname = "CFunction$n"
        val kname = "kotlin.reflect.KFunction$n"
        val targsNR = (0 until n).map { "T$it" }.joinToString(", ")
        val targs = ((0 until n).map { "T$it" } + listOf("TR")).joinToString(", ")
        val vargs = ((0 until n).map { "v$it: T$it" }).joinToString(", ")
        val cargs = ((0 until n).map { "v$it" }).joinToString(", ")
    }

    val funcTypes = (0 until 8).map { FuncType(it) }

    for (ft in funcTypes) {
        append("/*!!inline*/ class ${ft.cname}<${ft.targs}>(val ptr: Int)\n")
    }

    append("\n")

    append("open class Runtime(val REQUESTED_HEAP_SIZE: Int = 0) {\n")

    append(/*language=kotlin*/ """
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

        inline fun <T> Int.toCPointer(): CPointer<T> = CPointer(this)
        inline fun <T> CPointer<*>.toCPointer(): CPointer<T> = CPointer(this.ptr)

        operator fun CPointer<Short>.get(offset: Int): Short = lh(this.ptr + offset * 2)
        operator fun CPointer<Short>.set(offset: Int, value: Short) = sh(this.ptr + offset * 2, value)

        operator fun CPointer<Int>.get(offset: Int): Int = lw(this.ptr + offset * 4)
        operator fun CPointer<Int>.set(offset: Int, value: Int) = sw(this.ptr + offset * 4, value)

        operator fun CPointer<Byte>.get(offset: Int): Byte = lb(this.ptr + offset * 1)
        operator fun CPointer<Byte>.set(offset: Int, value: Byte) = sb(this.ptr + offset * 1, value)

        operator fun <T> CPointer<CPointer<T>>.get(offset: Int): CPointer<T> = CPointer<T>(lw(this.ptr + offset * 4))
        operator fun <T> CPointer<CPointer<T>>.set(offset: Int, value: CPointer<T>) = sw(this.ptr + offset * 4, value.ptr)

        fun <T> CPointer<T>.addPtr(offset: Int, elementSize: Int) = CPointer<T>(this.ptr + offset * elementSize)

        fun CPointer<Byte>.plus(offset: Int, dummy: Byte = 0) = addPtr<Byte>(offset, 1)
        fun CPointer<Byte>.minus(offset: Int, dummy: Byte = 0) = addPtr<Byte>(-offset, 1)

        fun CPointer<Int>.plus(offset: Int, dummy: Int = 0) = addPtr<Int>(offset, 4)
        fun CPointer<Int>.minus(offset: Int, dummy: Int = 0) = addPtr<Int>(-offset, 4)

        fun <T> CPointer<CPointer<T>>.plus(offset: Int, dummy: Unit = Unit) = addPtr<CPointer<T>>(offset, 4)
        fun <T> CPointer<CPointer<T>>.minus(offset: Int, dummy: Unit = Unit) = addPtr<CPointer<T>>(-offset, 4)

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
    append("\n")
    append("val FUNCTION_ADDRS = LinkedHashMap<kotlin.reflect.KFunction<*>, Int>()\n")
    for (ft in funcTypes) {
        ft.apply {
            append("operator fun <$targs> $cname<$targs>.invoke($vargs): TR = (FUNCTIONS[this.ptr] as (($targsNR) -> TR)).invoke($cargs)\n")
            append("val <$targs> $kname<$targs>.cfunc get() = $cname<$targs>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })\n")
        }
    }

    append("}\n")
}