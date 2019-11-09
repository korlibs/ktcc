// GENERATED. Do not modify
package com.soywiz.ktcc.gen

private val DOLLAR = '$'
val KotlinRuntime = """// KTCC RUNTIME ///////////////////////////////////////////////////
/*!!inline*/ data class CPointer<T>(val ptr: Int)
/*!!inline*/ data class CFunction0<TR>(val ptr: Int)
/*!!inline*/ data class CFunction1<T0, TR>(val ptr: Int)
/*!!inline*/ data class CFunction2<T0, T1, TR>(val ptr: Int)
/*!!inline*/ data class CFunction3<T0, T1, T2, TR>(val ptr: Int)
/*!!inline*/ data class CFunction4<T0, T1, T2, T3, TR>(val ptr: Int)
/*!!inline*/ data class CFunction5<T0, T1, T2, T3, T4, TR>(val ptr: Int)
/*!!inline*/ data class CFunction6<T0, T1, T2, T3, T4, T5, TR>(val ptr: Int)
/*!!inline*/ data class CFunction7<T0, T1, T2, T3, T4, T5, T6, TR>(val ptr: Int)

open class Runtime(REQUESTED_HEAP_SIZE: Int = 0, REQUESTED_STACK_PTR: Int = 0) : AbstractRuntime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR) {
    val HEAP = ByteArray(HEAP_SIZE)

    override fun lb(ptr: Int): Byte = HEAP[ptr]
    override fun sb(ptr: Int, value: Byte): Unit = run { HEAP[ptr] = value }

    override fun lh(ptr: Int): Short = ((lbu(ptr) shl 0) or (lbu(ptr + 1) shl 8)).toShort()
    override fun sh(ptr: Int, value: Short): Unit = sb(ptr, (value.toInt() ushr 0).toByte()).also { sb(ptr + 1, (value.toInt() ushr 8).toByte()) }

    override fun lw(ptr: Int): Int = ((lbu(ptr) shl 0) or (lbu(ptr + 1) shl 8) or (lbu(ptr + 2) shl 16) or (lbu(ptr + 3) shl 24))
    override fun sw(ptr: Int, value: Int): Unit = sb(ptr, (value ushr 0).toByte()).also { sb(ptr + 1, (value ushr 8).toByte()) }.also { sb(ptr + 2, (value ushr 16).toByte()) }.also { sb(ptr + 3, (value ushr 24).toByte()) }

    override fun ld(ptr: Int): Long = (lwu(ptr) shl 0) or (lwu(ptr + 4) shl 32)
    override fun sd(ptr: Int, value: Long): Unit = sw(ptr, (value ushr 0).toInt()).also { sw(ptr + 4, (value ushr 32).toInt()) }
}

@Suppress("MemberVisibilityCanBePrivate", "FunctionName", "CanBeVal", "DoubleNegation", "LocalVariableName", "NAME_SHADOWING", "VARIABLE_WITH_REDUNDANT_INITIALIZER", "RemoveRedundantCallsOfConversionMethods", "EXPERIMENTAL_IS_NOT_ENABLED", "RedundantExplicitType", "RemoveExplicitTypeArguments", "RedundantExplicitType", "unused", "UNCHECKED_CAST", "UNUSED_VARIABLE", "UNUSED_PARAMETER", "NOTHING_TO_INLINE", "PropertyName", "ClassName", "USELESS_CAST", "PrivatePropertyName", "CanBeParameter", "UnusedMainParameter")
@UseExperimental(ExperimentalUnsignedTypes::class)
abstract class AbstractRuntime(val REQUESTED_HEAP_SIZE: Int = 0, val REQUESTED_STACK_PTR: Int = 0) {
    val Float.Companion.SIZE_BYTES get() = 4
    val Double.Companion.SIZE_BYTES get() = 8

    infix fun UByte.shr(other: Int): UInt = this.toUInt() shr other
    infix fun UByte.shl(other: Int): UInt = this.toUInt() shl other

    val FUNCTIONS = arrayListOf<kotlin.reflect.KFunction<*>>()

    interface IStruct {
    }

    interface IStructCompanion<T : IStruct> {
        val SIZE: Int
    }

    val POINTER_SIZE = 4

    val HEAP_SIZE = if (REQUESTED_HEAP_SIZE <= 0) 16 * 1024 * 1024 else REQUESTED_HEAP_SIZE // 16 MB default
    var STACK_PTR = if (REQUESTED_STACK_PTR == 0) 512 * 1024 else REQUESTED_STACK_PTR // 0.5 MB
    var HEAP_PTR = STACK_PTR

    abstract fun lb(ptr: Int): Byte
    abstract fun sb(ptr: Int, value: Byte): Unit

    abstract fun lh(ptr: Int): Short
    abstract fun sh(ptr: Int, value: Short): Unit

    abstract fun lw(ptr: Int): Int
    abstract fun sw(ptr: Int, value: Int): Unit

    abstract fun ld(ptr: Int): Long
    abstract fun sd(ptr: Int, value: Long): Unit

    fun lbu(ptr: Int): Int = lb(ptr).toInt() and 0xFF
    fun lhu(ptr: Int): Int = lh(ptr).toInt() and 0xFFFF
    fun lwu(ptr: Int): Long = lw(ptr).toLong() and 0xFFFFFFFFL

    inline fun <T> Int.toCPointer(): CPointer<T> = CPointer(this)
    inline fun <T> CPointer<*>.toCPointer(): CPointer<T> = CPointer(this.ptr)

    fun <T> CPointer<T>.addPtr(offset: Int, elementSize: Int) = CPointer<T>(this.ptr + offset * elementSize)

    @JvmName("plusPtr") operator fun <T> CPointer<CPointer<T>>.plus(offset: Int) = addPtr<CPointer<T>>(offset, 4)
    @JvmName("minusPtr") operator fun <T> CPointer<CPointer<T>>.minus(offset: Int) = addPtr<CPointer<T>>(-offset, 4)
    @JvmName("minusPtr") operator fun <T> CPointer<CPointer<T>>.minus(other: CPointer<CPointer<T>>) = (this.ptr - other.ptr) / 4

    operator fun <T> CPointer<CPointer<T>>.set(offset: Int, value: CPointer<T>) = sw(this.ptr + offset * 4, value.ptr)
    operator fun <T> CPointer<CPointer<T>>.get(offset: Int): CPointer<T> = CPointer(lw(this.ptr + offset * 4))

    var <T> CPointer<CPointer<T>>.value: CPointer<T> get() = this[0]; set(value) = run { this[0] = value }

    fun Boolean.toInt() = if (this) 1 else 0
    fun CPointer<*>.toInt() = ptr
    fun CPointer<*>.toBool() = ptr != 0

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

    data class Chunk(val head: Int, val size: Int)

    val chunks = LinkedHashMap<Int, Chunk>()
    val freeChunks = arrayListOf<Chunk>()

    // HEAP ALLOC
    // @TODO: OPTIMIZE!
    fun malloc(size: Int): CPointer<Unit> {
        val chunk = freeChunks.firstOrNull { it.size >= size }
        if (chunk != null) {
            freeChunks.remove(chunk)
            chunks[chunk.head] = chunk
            return CPointer(chunk.head)
        } else {
            val head = HEAP_PTR
            HEAP_PTR += size
            chunks[head] = Chunk(head, size)
            return CPointer(head)
        }
    }
    fun free(ptr: CPointer<*>): Unit {
        chunks.remove(ptr.ptr)?.let {
            freeChunks += it
        }
    }

    // I/O
    fun putchar(c: Int): Int = c.also { System.out.print(c.toChar()) }

    fun exit(code: Int) {
        kotlin.system.exitProcess(code)
    }

    fun prevAligned(size: Int, alignment: Int): Int {
        if (size % alignment == 0) return size
        return size - (alignment - (size % alignment))
    }

    fun memWrite(ptr: CPointer<*>, data: ByteArray, offset: Int = 0, size: Int = data.size) = run { for (n in offset until offset + size) sb(ptr.ptr + n, data[n]) }
    fun memRead(ptr: CPointer<*>, data: ByteArray, offset: Int = 0, size: Int = data.size) = run { for (n in offset until offset + size) data[n] = lb(ptr.ptr + n) }

    fun memWrite(ptr: CPointer<*>, data: ShortArray, offset: Int = 0, size: Int = data.size) = run { for (n in offset until offset + size) sh(ptr.ptr + n * 2, data[n]) }
    fun memRead(ptr: CPointer<*>, data: ShortArray, offset: Int = 0, size: Int = data.size) = run { for (n in offset until offset + size) data[n] = lh(ptr.ptr + n * 2) }

    open fun fopen(file: CPointer<Byte>, mode: CPointer<Byte>): CPointer<CPointer<Unit>> = TODO()
    open fun fread(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int = TODO()
    open fun fwrite(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int = TODO()
    open fun fflush(stream: CPointer<CPointer<Unit>>): Int = TODO()
    open fun ftell(stream: CPointer<CPointer<Unit>>): Long = TODO()
    open fun fsetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int = TODO()
    open fun fgetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int = TODO()
    open fun fseek(stream: CPointer<CPointer<Unit>>, offset: Long, whence: Int): Int = TODO()
    open fun fclose(stream: CPointer<CPointer<Unit>>): Unit = TODO()

    fun Any?.getAsInt(): Int = when (this) {
        null -> 0
        is CPointer<*> -> this.ptr
        is Char -> this.toInt()
        is UByte -> this.toInt()
        is UShort -> this.toInt()
        is UInt -> this.toInt()
        is Number -> this.toInt()
        else -> -1
    }

    fun Any?.getAsString(): String = when (this) {
        null -> "NULL"
        is CPointer<*> -> (this as CPointer<Byte>).readStringz()
        is Character -> "${DOLLAR}this"
        is Number -> CPointer<Byte>(this.toInt()).readStringz()
        else -> "<INVALID>"
    }

    fun sprintf(out: CPointer<Byte>, format: CPointer<Byte>, vararg params: Any?) {
        out.writeStringz(_format(format, *params).toString())
    }

    fun printf(format: CPointer<Byte>, vararg params: Any?) {
        print(_format(format, *params).toString())
    }

    private fun String.toCase(upper: Boolean) = if (upper) this.toUpperCase() else this.toLowerCase()

    fun _format(format: CPointer<Byte>, vararg params: Any?, appendable: Appendable = StringBuilder()): Appendable {
        var paramPos = 0
        val fmt = format.readStringz()
        var n = 0
        //println("_format: fmt='${DOLLAR}fmt', params=${DOLLAR}{params.toList()}")
        while (n < fmt.length) {
            val c = fmt[n++]
            if (c == '%') {
                var c2: Char = ' '
                var pad: Char = ' '
                var len: Int = 0
                do {
                    c2 = fmt[n++]
                    if (c2 == '0') {
                        pad = c2
                    } else if (c2 in '0'..'9') {
                        len *= 10
                        len += c2 - '0'
                    }
                } while (c2 in '0'..'9')

                if (c2 == '%') {
                    appendable.append('%')
                    continue
                }

                val vparam = params.getOrNull(paramPos++)
                //println("VPARAM: ${DOLLAR}vparam : ${DOLLAR}{vparam!!::class}")
                val iparam = vparam?.getAsInt() ?: 0
                // http://www.cplusplus.com/reference/cstdio/printf/
                when (c2) {
                    'n' -> Unit
                    'c' -> appendable.append(iparam.toChar())
                    'p' -> appendable.append("0x%08x".format(iparam))
                    'f', 'F' -> appendable.append("%f".format((vparam as Number).toFloat()).toCase(c2.isUpperCase()))
                    'e', 'E' -> appendable.append("%e".format((vparam as Number).toFloat()).toCase(c2.isUpperCase()))
                    'a', 'A' -> appendable.append("%a".format((vparam as Number).toFloat()).toCase(c2.isUpperCase()))
                    'g', 'G' -> appendable.append("%g".format((vparam as Number).toFloat()).toCase(c2.isUpperCase()))
                    'd' -> appendable.append(iparam.toString(10).padStart(len, pad))
                    'u' -> appendable.append(iparam.toUInt().toString(10).padStart(len, pad))
                    'x', 'X' -> appendable.append((iparam.toLong() and 0xFFFFFFFFL).toString(16).toCase(c2.isUpperCase()).padStart(len, pad))
                    's' -> appendable.append(CPointer<Byte>(iparam).getAsString())
                    else -> {
                        appendable.append(c)
                        appendable.append(c2)
                    }
                }
            } else {
                appendable.append(c)
            }
        }
        return appendable
    }

    // string/memory
    open fun memset(ptr: CPointer<*>, value: Int, num: Int): CPointer<Unit> = run { for (n in 0 until num) { sb(ptr.ptr + n, value.toByte()) }; return (ptr as CPointer<Unit>) }
    open fun memcpy(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
        for (n in 0 until num) sb(dest.ptr + n, lb(src.ptr + n))
        return dest as CPointer<Unit>
    }
    open fun memmove(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
        if (dest.ptr > src.ptr) {
            for (m in 0 until num) {
                val n = num - 1 - m
                sb(dest.ptr + n, lb(src.ptr + n))
            }
        } else {
            for (n in 0 until num) sb(dest.ptr + n, lb(src.ptr + n))
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

    // @TODO: UTF-8?
    fun CPointer<Byte>.writeStringz(str: String) {
        //str.encodeToByteArray()
        for (n in str.indices) {
            this[n] = str[n].toByte()
        }
        this[str.length] = 0.toByte()
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

    @JvmName("getterByte") operator fun CPointer<Byte>.get(offset: Int): Byte = lb(this.ptr + offset * 1)
    @JvmName("setterByte") operator fun CPointer<Byte>.set(offset: Int, value: Byte) = sb(this.ptr + offset * 1, value)
    @set:JvmName("setter_Byte_value") @get:JvmName("getter_Byte_value") var CPointer<Byte>.value: Byte get() = this[0]; set(value): Unit = run { this[0] = value }
    @JvmName("plusByte") operator fun CPointer<Byte>.plus(offset: Int) = addPtr<Byte>(offset, 1)
    @JvmName("minusByte") operator fun CPointer<Byte>.minus(offset: Int) = addPtr<Byte>(-offset, 1)
    @JvmName("minusBytePtr") operator fun CPointer<Byte>.minus(other: CPointer<Byte>) = (this.ptr - other.ptr) / 1
    fun fixedArrayOfByte(size: Int, vararg values: Byte): CPointer<Byte> = alloca_zero(size * 1).toCPointer<Byte>().also { for (n in 0 until values.size) sb(it.ptr + n * 1, values[n]) }

    @JvmName("getterShort") operator fun CPointer<Short>.get(offset: Int): Short = lh(this.ptr + offset * 2)
    @JvmName("setterShort") operator fun CPointer<Short>.set(offset: Int, value: Short) = sh(this.ptr + offset * 2, value)
    @set:JvmName("setter_Short_value") @get:JvmName("getter_Short_value") var CPointer<Short>.value: Short get() = this[0]; set(value): Unit = run { this[0] = value }
    @JvmName("plusShort") operator fun CPointer<Short>.plus(offset: Int) = addPtr<Short>(offset, 2)
    @JvmName("minusShort") operator fun CPointer<Short>.minus(offset: Int) = addPtr<Short>(-offset, 2)
    @JvmName("minusShortPtr") operator fun CPointer<Short>.minus(other: CPointer<Short>) = (this.ptr - other.ptr) / 2
    fun fixedArrayOfShort(size: Int, vararg values: Short): CPointer<Short> = alloca_zero(size * 2).toCPointer<Short>().also { for (n in 0 until values.size) sh(it.ptr + n * 2, values[n]) }

    @JvmName("getterInt") operator fun CPointer<Int>.get(offset: Int): Int = lw(this.ptr + offset * 4)
    @JvmName("setterInt") operator fun CPointer<Int>.set(offset: Int, value: Int) = sw(this.ptr + offset * 4, value)
    @set:JvmName("setter_Int_value") @get:JvmName("getter_Int_value") var CPointer<Int>.value: Int get() = this[0]; set(value): Unit = run { this[0] = value }
    @JvmName("plusInt") operator fun CPointer<Int>.plus(offset: Int) = addPtr<Int>(offset, 4)
    @JvmName("minusInt") operator fun CPointer<Int>.minus(offset: Int) = addPtr<Int>(-offset, 4)
    @JvmName("minusIntPtr") operator fun CPointer<Int>.minus(other: CPointer<Int>) = (this.ptr - other.ptr) / 4
    fun fixedArrayOfInt(size: Int, vararg values: Int): CPointer<Int> = alloca_zero(size * 4).toCPointer<Int>().also { for (n in 0 until values.size) sw(it.ptr + n * 4, values[n]) }

    @JvmName("getterLong") operator fun CPointer<Long>.get(offset: Int): Long = ld(this.ptr + offset * 8)
    @JvmName("setterLong") operator fun CPointer<Long>.set(offset: Int, value: Long) = sd(this.ptr + offset * 8, value)
    @set:JvmName("setter_Long_value") @get:JvmName("getter_Long_value") var CPointer<Long>.value: Long get() = this[0]; set(value): Unit = run { this[0] = value }
    @JvmName("plusLong") operator fun CPointer<Long>.plus(offset: Int) = addPtr<Long>(offset, 8)
    @JvmName("minusLong") operator fun CPointer<Long>.minus(offset: Int) = addPtr<Long>(-offset, 8)
    @JvmName("minusLongPtr") operator fun CPointer<Long>.minus(other: CPointer<Long>) = (this.ptr - other.ptr) / 8
    fun fixedArrayOfLong(size: Int, vararg values: Long): CPointer<Long> = alloca_zero(size * 8).toCPointer<Long>().also { for (n in 0 until values.size) sd(it.ptr + n * 8, values[n]) }

    operator fun CPointer<UByte>.get(offset: Int): UByte = lb(this.ptr + offset * 1).toUByte()
    operator fun CPointer<UByte>.set(offset: Int, value: UByte) = sb(this.ptr + offset * 1, (value).toByte())
    var CPointer<UByte>.value: UByte get() = this[0]; set(value): Unit = run { this[0] = value }
    @JvmName("plusUByte") operator fun CPointer<UByte>.plus(offset: Int) = addPtr<UByte>(offset, 1)
    @JvmName("minusUByte") operator fun CPointer<UByte>.minus(offset: Int) = addPtr<UByte>(-offset, 1)
    @JvmName("minusUBytePtr") operator fun CPointer<UByte>.minus(other: CPointer<UByte>) = (this.ptr - other.ptr) / 1
    fun fixedArrayOfUByte(size: Int, vararg values: UByte): CPointer<UByte> = alloca_zero(size * 1).toCPointer<UByte>().also { for (n in 0 until values.size) sb(it.ptr + n * 1, (values[n]).toByte()) }

    operator fun CPointer<UShort>.get(offset: Int): UShort = lh(this.ptr + offset * 2).toUShort()
    operator fun CPointer<UShort>.set(offset: Int, value: UShort) = sh(this.ptr + offset * 2, (value).toShort())
    var CPointer<UShort>.value: UShort get() = this[0]; set(value): Unit = run { this[0] = value }
    @JvmName("plusUShort") operator fun CPointer<UShort>.plus(offset: Int) = addPtr<UShort>(offset, 2)
    @JvmName("minusUShort") operator fun CPointer<UShort>.minus(offset: Int) = addPtr<UShort>(-offset, 2)
    @JvmName("minusUShortPtr") operator fun CPointer<UShort>.minus(other: CPointer<UShort>) = (this.ptr - other.ptr) / 2
    fun fixedArrayOfUShort(size: Int, vararg values: UShort): CPointer<UShort> = alloca_zero(size * 2).toCPointer<UShort>().also { for (n in 0 until values.size) sh(it.ptr + n * 2, (values[n]).toShort()) }

    operator fun CPointer<UInt>.get(offset: Int): UInt = lw(this.ptr + offset * 4).toUInt()
    operator fun CPointer<UInt>.set(offset: Int, value: UInt) = sw(this.ptr + offset * 4, (value).toInt())
    var CPointer<UInt>.value: UInt get() = this[0]; set(value): Unit = run { this[0] = value }
    @JvmName("plusUInt") operator fun CPointer<UInt>.plus(offset: Int) = addPtr<UInt>(offset, 4)
    @JvmName("minusUInt") operator fun CPointer<UInt>.minus(offset: Int) = addPtr<UInt>(-offset, 4)
    @JvmName("minusUIntPtr") operator fun CPointer<UInt>.minus(other: CPointer<UInt>) = (this.ptr - other.ptr) / 4
    fun fixedArrayOfUInt(size: Int, vararg values: UInt): CPointer<UInt> = alloca_zero(size * 4).toCPointer<UInt>().also { for (n in 0 until values.size) sw(it.ptr + n * 4, (values[n]).toInt()) }

    operator fun CPointer<ULong>.get(offset: Int): ULong = ld(this.ptr + offset * 8).toULong()
    operator fun CPointer<ULong>.set(offset: Int, value: ULong) = sd(this.ptr + offset * 8, (value).toLong())
    var CPointer<ULong>.value: ULong get() = this[0]; set(value): Unit = run { this[0] = value }
    @JvmName("plusULong") operator fun CPointer<ULong>.plus(offset: Int) = addPtr<ULong>(offset, 8)
    @JvmName("minusULong") operator fun CPointer<ULong>.minus(offset: Int) = addPtr<ULong>(-offset, 8)
    @JvmName("minusULongPtr") operator fun CPointer<ULong>.minus(other: CPointer<ULong>) = (this.ptr - other.ptr) / 8
    fun fixedArrayOfULong(size: Int, vararg values: ULong): CPointer<ULong> = alloca_zero(size * 8).toCPointer<ULong>().also { for (n in 0 until values.size) sd(it.ptr + n * 8, (values[n]).toLong()) }

    @JvmName("getterFloat") operator fun CPointer<Float>.get(offset: Int): Float = Float.fromBits(lw(this.ptr + offset * 4))
    @JvmName("setterFloat") operator fun CPointer<Float>.set(offset: Int, value: Float) = sw(this.ptr + offset * 4, (value).toBits())
    @set:JvmName("setter_Float_value") @get:JvmName("getter_Float_value") var CPointer<Float>.value: Float get() = this[0]; set(value): Unit = run { this[0] = value }
    @JvmName("plusFloat") operator fun CPointer<Float>.plus(offset: Int) = addPtr<Float>(offset, 4)
    @JvmName("minusFloat") operator fun CPointer<Float>.minus(offset: Int) = addPtr<Float>(-offset, 4)
    @JvmName("minusFloatPtr") operator fun CPointer<Float>.minus(other: CPointer<Float>) = (this.ptr - other.ptr) / 4
    fun fixedArrayOfFloat(size: Int, vararg values: Float): CPointer<Float> = alloca_zero(size * 4).toCPointer<Float>().also { for (n in 0 until values.size) sw(it.ptr + n * 4, (values[n]).toBits()) }

    @JvmName("getterDouble") operator fun CPointer<Double>.get(offset: Int): Double = Double.fromBits(ld(this.ptr + offset * 4))
    @JvmName("setterDouble") operator fun CPointer<Double>.set(offset: Int, value: Double) = sd(this.ptr + offset * 4, (value).toBits())
    @set:JvmName("setter_Double_value") @get:JvmName("getter_Double_value") var CPointer<Double>.value: Double get() = this[0]; set(value): Unit = run { this[0] = value }
    @JvmName("plusDouble") operator fun CPointer<Double>.plus(offset: Int) = addPtr<Double>(offset, 4)
    @JvmName("minusDouble") operator fun CPointer<Double>.minus(offset: Int) = addPtr<Double>(-offset, 4)
    @JvmName("minusDoublePtr") operator fun CPointer<Double>.minus(other: CPointer<Double>) = (this.ptr - other.ptr) / 4
    fun fixedArrayOfDouble(size: Int, vararg values: Double): CPointer<Double> = alloca_zero(size * 4).toCPointer<Double>().also { for (n in 0 until values.size) sd(it.ptr + n * 4, (values[n]).toBits()) }


    val FUNCTION_ADDRS = LinkedHashMap<kotlin.reflect.KFunction<*>, Int>()

    operator fun <TR> CFunction0<TR>.invoke(): TR = (FUNCTIONS[this.ptr] as (() -> TR)).invoke()
    val <TR> kotlin.reflect.KFunction0<TR>.cfunc get() = CFunction0<TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, TR> CFunction1<T0, TR>.invoke(v0: T0): TR = (FUNCTIONS[this.ptr] as ((T0) -> TR)).invoke(v0)
    val <T0, TR> kotlin.reflect.KFunction1<T0, TR>.cfunc get() = CFunction1<T0, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, TR> CFunction2<T0, T1, TR>.invoke(v0: T0, v1: T1): TR = (FUNCTIONS[this.ptr] as ((T0, T1) -> TR)).invoke(v0, v1)
    val <T0, T1, TR> kotlin.reflect.KFunction2<T0, T1, TR>.cfunc get() = CFunction2<T0, T1, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, T2, TR> CFunction3<T0, T1, T2, TR>.invoke(v0: T0, v1: T1, v2: T2): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2) -> TR)).invoke(v0, v1, v2)
    val <T0, T1, T2, TR> kotlin.reflect.KFunction3<T0, T1, T2, TR>.cfunc get() = CFunction3<T0, T1, T2, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, T2, T3, TR> CFunction4<T0, T1, T2, T3, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3) -> TR)).invoke(v0, v1, v2, v3)
    val <T0, T1, T2, T3, TR> kotlin.reflect.KFunction4<T0, T1, T2, T3, TR>.cfunc get() = CFunction4<T0, T1, T2, T3, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, T2, T3, T4, TR> CFunction5<T0, T1, T2, T3, T4, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3, v4: T4): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3, T4) -> TR)).invoke(v0, v1, v2, v3, v4)
    val <T0, T1, T2, T3, T4, TR> kotlin.reflect.KFunction5<T0, T1, T2, T3, T4, TR>.cfunc get() = CFunction5<T0, T1, T2, T3, T4, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, T2, T3, T4, T5, TR> CFunction6<T0, T1, T2, T3, T4, T5, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3, T4, T5) -> TR)).invoke(v0, v1, v2, v3, v4, v5)
    val <T0, T1, T2, T3, T4, T5, TR> kotlin.reflect.KFunction6<T0, T1, T2, T3, T4, T5, TR>.cfunc get() = CFunction6<T0, T1, T2, T3, T4, T5, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, T2, T3, T4, T5, T6, TR> CFunction7<T0, T1, T2, T3, T4, T5, T6, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3, T4, T5, T6) -> TR)).invoke(v0, v1, v2, v3, v4, v5, v6)
    val <T0, T1, T2, T3, T4, T5, T6, TR> kotlin.reflect.KFunction7<T0, T1, T2, T3, T4, T5, T6, TR>.cfunc get() = CFunction7<T0, T1, T2, T3, T4, T5, T6, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
}
"""