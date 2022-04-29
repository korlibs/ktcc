// GENERATED. Do not modify
package com.soywiz.ktcc.gen

private val DOLLAR = '$'
val KotlinRuntime = """import kotlin.time.*

// KTCC RUNTIME ///////////////////////////////////////////////////
public/*!*/ inline/*!*/ class CPointer<T>(val ptr: Int)
public/*!*/ inline/*!*/ class CFunction0<TR>(val ptr: Int)
public/*!*/ inline/*!*/ class CFunction1<T0, TR>(val ptr: Int)
public/*!*/ inline/*!*/ class CFunction2<T0, T1, TR>(val ptr: Int)
public/*!*/ inline/*!*/ class CFunction3<T0, T1, T2, TR>(val ptr: Int)
public/*!*/ inline/*!*/ class CFunction4<T0, T1, T2, T3, TR>(val ptr: Int)
public/*!*/ inline/*!*/ class CFunction5<T0, T1, T2, T3, T4, TR>(val ptr: Int)
public/*!*/ inline/*!*/ class CFunction6<T0, T1, T2, T3, T4, T5, TR>(val ptr: Int)
public/*!*/ inline/*!*/ class CFunction7<T0, T1, T2, T3, T4, T5, T6, TR>(val ptr: Int)

public/*!*/ open class Runtime(REQUESTED_HEAP_SIZE: Int = 0, REQUESTED_STACK_PTR: Int = 0, __syscalls: RuntimeSyscalls = DummyRuntimeSyscalls) : AbstractRuntime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls) {
    private val HEAP = ByteArray(HEAP_SIZE)

    final override fun lb(ptr: Int): Byte = HEAP[ptr]
    final override fun sb(ptr: Int, value: Byte): Unit { HEAP[ptr] = value }

    final override fun lh(ptr: Int): Short = ((lbu(ptr) shl 0) or (lbu(ptr + 1) shl 8)).toShort()
    final override fun sh(ptr: Int, value: Short): Unit = sb(ptr, (value.toInt() ushr 0).toByte()).also { sb(ptr + 1, (value.toInt() ushr 8).toByte()) }

    final override fun lw(ptr: Int): Int = ((lbu(ptr) shl 0) or (lbu(ptr + 1) shl 8) or (lbu(ptr + 2) shl 16) or (lbu(ptr + 3) shl 24))
    final override fun sw(ptr: Int, value: Int): Unit = sb(ptr, (value ushr 0).toByte()).also { sb(ptr + 1, (value ushr 8).toByte()) }.also { sb(ptr + 2, (value ushr 16).toByte()) }.also { sb(ptr + 3, (value ushr 24).toByte()) }

    final override fun ld(ptr: Int): Long = (lwu(ptr) shl 0) or (lwu(ptr + 4) shl 32)
    final override fun sd(ptr: Int, value: Long): Unit = sw(ptr, (value ushr 0).toInt()).also { sw(ptr + 4, (value ushr 32).toInt()) }

    final override fun memset(ptr: CPointer<*>, value: Int, num: Int): CPointer<Unit> {
        this.HEAP.fill(value.toByte(), ptr.ptr, ptr.ptr + num)
        return (ptr as CPointer<Unit>)
    }
    final override fun memmove(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
        this.HEAP.copyInto(this.HEAP, dest.ptr, src.ptr, src.ptr + num)
        return dest
    }
    final override fun memcpy(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
        return memmove(dest, src, num)
    }
}

public/*!*/ interface RuntimeSyscalls {
    fun AbstractRuntime.fopen(file: CPointer<Byte>, mode: CPointer<Byte>): CPointer<CPointer<Unit>> = TODO()
    fun AbstractRuntime.fread(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int = TODO()
    fun AbstractRuntime.fwrite(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int = TODO()
    fun AbstractRuntime.fflush(stream: CPointer<CPointer<Unit>>): Int = TODO()
    fun AbstractRuntime.ftell(stream: CPointer<CPointer<Unit>>): Long = TODO()
    fun AbstractRuntime.fsetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int = TODO()
    fun AbstractRuntime.fgetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int = TODO()
    fun AbstractRuntime.fseek(stream: CPointer<CPointer<Unit>>, offset: Long, whence: Int): Int = TODO()
    fun AbstractRuntime.fclose(stream: CPointer<CPointer<Unit>>): Unit = TODO()
}

public/*!*/ object DummyRuntimeSyscalls : RuntimeSyscalls

@Suppress("MemberVisibilityCanBePrivate", "FunctionName", "CanBeVal", "DoubleNegation", "LocalVariableName", "NAME_SHADOWING", "VARIABLE_WITH_REDUNDANT_INITIALIZER", "RemoveRedundantCallsOfConversionMethods", "EXPERIMENTAL_IS_NOT_ENABLED", "RedundantExplicitType", "RemoveExplicitTypeArguments", "RedundantExplicitType", "unused", "UNCHECKED_CAST", "UNUSED_VARIABLE", "UNUSED_PARAMETER", "NOTHING_TO_INLINE", "PropertyName", "ClassName", "USELESS_CAST", "PrivatePropertyName", "CanBeParameter", "UnusedMainParameter")
@OptIn(ExperimentalUnsignedTypes::class)
public/*!*/ abstract class AbstractRuntime(val REQUESTED_HEAP_SIZE: Int = 0, val REQUESTED_STACK_PTR: Int = 0, val __syscalls: RuntimeSyscalls = DummyRuntimeSyscalls) : RuntimeSyscalls by __syscalls {

    val Float.Companion.SIZE_BYTES: Int get() = 4
    val Double.Companion.SIZE_BYTES: Int get() = 8

    infix fun UByte.shr(other: Int): UInt = this.toUInt() shr other
    infix fun UByte.shl(other: Int): UInt = this.toUInt() shl other

    val FUNCTIONS: ArrayList<kotlin.reflect.KFunction<*>> = arrayListOf<kotlin.reflect.KFunction<*>>()

    interface IStruct {
    }

    interface IStructCompanion<T : IStruct> {
        val SIZE: Int
    }

    val POINTER_SIZE: Int = 4

    val HEAP_SIZE: Int = if (REQUESTED_HEAP_SIZE <= 0) 16 * 1024 * 1024 else REQUESTED_HEAP_SIZE // 16 MB default
    var STACK_PTR: Int = if (REQUESTED_STACK_PTR == 0) 512 * 1024 else REQUESTED_STACK_PTR // 0.5 MB
    var HEAP_PTR: Int = STACK_PTR

    abstract fun lb(ptr: Int): Byte
    abstract fun sb(ptr: Int, value: Byte): Unit

    abstract fun lh(ptr: Int): Short
    abstract fun sh(ptr: Int, value: Short): Unit

    abstract fun lw(ptr: Int): Int
    abstract fun sw(ptr: Int, value: Int): Unit

    abstract fun ld(ptr: Int): Long
    abstract fun sd(ptr: Int, value: Long): Unit

    open fun lwf(ptr: Int): Float = Float.fromBits(lw(ptr))
    open fun swf(ptr: Int, value: Float): Unit { sw(ptr, value.toRawBits()) }

    open fun ldf(ptr: Int): Double = Double.fromBits(ld(ptr))
    open fun sdf(ptr: Int, value: Double): Unit { sd(ptr, value.toRawBits()) }

    fun lbu(ptr: Int): Int = lb(ptr).toInt() and 0xFF
    fun lhu(ptr: Int): Int = lh(ptr).toInt() and 0xFFFF
    fun lwu(ptr: Int): Long = lw(ptr).toLong() and 0xFFFFFFFFL

    inline fun <T> Int.toCPointer(): CPointer<T> = CPointer(this)
    inline fun <T> CPointer<*>.toCPointer(): CPointer<T> = CPointer(this.ptr)

    inline fun <T> CPointer<T>.addPtr(offset: Int, elementSize: Int): CPointer<T> = CPointer<T>(this.ptr + offset * elementSize)

    @kotlin.jvm.JvmName("plusPtr") operator fun <T> CPointer<CPointer<T>>.plus(offset: Int): CPointer<CPointer<T>> = addPtr<CPointer<T>>(offset, 4)
    @kotlin.jvm.JvmName("minusPtr") operator fun <T> CPointer<CPointer<T>>.minus(offset: Int): CPointer<CPointer<T>> = addPtr<CPointer<T>>(-offset, 4)
    fun <T> CPointer<CPointer<T>>.minusPtrPtr(other: CPointer<CPointer<T>>): Int = (this.ptr - other.ptr) / 4

    operator fun <T> CPointer<CPointer<T>>.set(offset: Int, value: CPointer<T>): Unit = sw(this.ptr + offset * 4, value.ptr)
    @kotlin.jvm.JvmName("getPtrPtr") operator fun <T> CPointer<CPointer<T>>.get(offset: Int): CPointer<T> = CPointer(lw(this.ptr + offset * 4))

    @get:kotlin.jvm.JvmName("getPtrValue")
    var <T> CPointer<CPointer<T>>.value: CPointer<T> get() = this[0]; set(value) { this[0] = value }

    fun Boolean.toInt(): Int = if (this) 1 else 0
    fun CPointer<*>.toInt(): Int = ptr
    fun CPointer<*>.toBool(): Boolean = ptr != 0

    inline fun Number.toBool(): Boolean = this.toInt() != 0
    inline fun UByte.toBool(): Boolean = this.toInt() != 0
    inline fun UShort.toBool(): Boolean = this.toInt() != 0
    inline fun UInt.toBool(): Boolean = this.toInt() != 0
    inline fun ULong.toBool(): Boolean = this.toInt() != 0
    fun Boolean.toBool(): Boolean = this

    // STACK ALLOC
    inline fun <T> stackFrame(callback: () -> T): T {
        val oldPos = STACK_PTR
        return try { callback() } finally { STACK_PTR = oldPos }
    }
    fun alloca(size: Int): CPointer<Unit> = CPointer<Unit>((STACK_PTR - size).also { STACK_PTR -= size })
    fun alloca_zero(size: Int): CPointer<Unit> = alloca(size).also { memset(it, 0, size) }

    data class Chunk(val head: Int, val size: Int)

    val chunks: LinkedHashMap<Int, Chunk> = LinkedHashMap<Int, Chunk>()
    val freeChunks: ArrayList<Chunk> = arrayListOf<Chunk>()

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
    fun putchar(c: Int): Int = c.also { print(c.toChar()) }

    class ExitError(val code: Int) : Error()

    fun exit(code: Int): Unit {
        throw ExitError(code)
    }

    fun prevAligned(size: Int, alignment: Int): Int {
        if (size % alignment == 0) return size
        return size - (alignment - (size % alignment))
    }

    fun memWrite(ptr: CPointer<*>, data: ByteArray, offset: Int = 0, size: Int = data.size): Unit { for (n in offset until offset + size) sb(ptr.ptr + n, data[n]) }
    fun memRead(ptr: CPointer<*>, data: ByteArray, offset: Int = 0, size: Int = data.size): Unit { for (n in offset until offset + size) data[n] = lb(ptr.ptr + n) }

    fun memWrite(ptr: CPointer<*>, data: ShortArray, offset: Int = 0, size: Int = data.size): Unit { for (n in offset until offset + size) sh(ptr.ptr + n * 2, data[n]) }
    fun memRead(ptr: CPointer<*>, data: ShortArray, offset: Int = 0, size: Int = data.size): Unit { for (n in offset until offset + size) data[n] = lh(ptr.ptr + n * 2) }

    fun sprintf(out: CPointer<Byte>, format: CPointer<Byte>, vararg params: Any?): Unit {
        out.writeStringz(_format(format, *params).toString())
    }

    fun printf(format: CPointer<Byte>, vararg params: Any?): Unit {
        print(_format(format, *params).toString())
    }

    private fun String.toCase(upper: Boolean): String = if (upper) this.uppercase() else this.lowercase()

    fun _format(format: CPointer<Byte>, vararg params: Any?, appendable: Appendable = StringBuilder()): Appendable {
        return _format(format.readStringz(), *params, appendable = appendable)
    }

    private fun Char.isUpperCase(): Boolean = this in 'A'..'Z'

    private fun Int.clamp(min: Int, max: Int) = when {
        this < min -> min
        this > max -> max
        else -> this
    }

    private fun String.substr(offset: Int, len: Int = this.length): String {
        val roffset = if (offset < 0) this.length + offset else offset
        return this.substring(roffset.clamp(0, length), (roffset + len).clamp(0, length))
    }

    fun numberToStringDecimal(res: String, decimalPlaces: Int, skipTrailingZeros: Boolean = false): String {
        val data = StringBuilder()
        var commaIndex = -1
        var state = 0
        var sign = +1
        var evalue = 0
        var esign = 1
        for (n in 0 until res.length) {
            val c = res[n]
            if (state == 0) {
                when (c) {
                    '-' -> sign = -1
                    '+' -> sign = +1
                    '.' -> commaIndex = n
                    in '0'..'9' -> data.append(c)
                    'e', 'E' -> state = 1
                }
            } else if (state == 1) {
                when (c) {
                    '-' -> esign = -1
                    '+' -> esign = +1
                    in '0'..'9' -> {
                        evalue *= 10
                        evalue += c - '0'
                    }
                }
            }
        }

        val exp = evalue * esign
        val rCommaIndex = if (commaIndex >= 0) commaIndex else data.length
        val commaOffset = rCommaIndex + exp
        val out = if (commaOffset < 0) {
            "0." + "0".repeat(-commaOffset + decimalPlaces) + data
        } else {
            val res = data.toString() + "0".repeat(kotlin.math.max(1, commaOffset - data.length + 1 + decimalPlaces))
            res.substring(0, commaOffset) + "." + res.substring(commaOffset)
        }
        val parts = out.split(".")
        val rout = if (decimalPlaces <= 0) {
            parts[0]
        } else {
            val res = parts[1].substr(0, decimalPlaces)
            //val pp = parts[1].substr(1, decimalPlaces).takeIf { it.isNotEmpty() } ?: "0"
            "${DOLLAR}{parts[0]}.${DOLLAR}{res}"
        }
        val rrout = if (rout.startsWith(".")) "0${DOLLAR}rout" else rout
        val rrrout = if (skipTrailingZeros) rrout.replace(Regex("0-${DOLLAR}"), "") else rrout
        return if (sign > 0) rrrout else "-${DOLLAR}rrrout"
    }

    private fun Double.toStringDecimal(decimalPlaces: Int, skipTrailingZeros: Boolean = false): String = numberToStringDecimal(this.toString(), decimalPlaces, skipTrailingZeros)
    private fun Float.toStringDecimal(decimalPlaces: Int, skipTrailingZeros: Boolean = false): String = this.toDouble().toStringDecimal(decimalPlaces, skipTrailingZeros)

    protected open fun _formatF(value: Number): String {
        return value.toDouble().toStringDecimal(6)
    }
    private fun _formatE(value: Number): String = "${DOLLAR}value"
    private fun _formatG(value: Number): String = "${DOLLAR}value"
    private fun _formatA(value: Number): String = "${DOLLAR}value"

    // http://www.cplusplus.com/reference/cstdio/printf/
    fun _format(fmt: String, vararg params: Any?, appendable: Appendable = StringBuilder()): Appendable {
        var paramPos = 0
        var n = 0


        fun String.toCase(upper: Boolean): String = if (upper) this.toUpperCase() else this.toLowerCase()
        fun Char.isUpperCase(): Boolean = this in 'A'..'Z'
        //fun _formatF(value: Number, digits: Int): String = "${DOLLAR}value"
        //fun _formatE(value: Number, digits: Int): String = "${DOLLAR}value"
        //fun _formatG(value: Number, digits: Int): String = "${DOLLAR}value"
        //fun _formatA(value: Number, digits: Int): String = "${DOLLAR}value"

        fun readParam(): Any? = params.getOrNull(paramPos++)
        fun readParamI(): Int {
            val v = readParam()
            return when (v) {
                null -> 0
                is Char -> v.toInt()
                is UByte -> v.toInt()
                is UShort -> v.toInt()
                is UInt -> v.toInt()
                is Number -> v.toInt()
                is CPointer<*> -> v.ptr
                is String -> v.toIntOrNull() ?: 0
                else -> -1
            }
        }
        fun readParamS(): String {
            val v = readParam()
            return when (v) {
                null -> "NULL"
                is Char -> "${DOLLAR}v"
                is CPointer<*> -> (v as CPointer<Byte>).readStringz()
                is Number -> CPointer<Byte>(v.toInt()).readStringz()
                is String -> v.toString()
                else -> "<INVALID>"
            }
        }

        loop@ while (n < fmt.length) {
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
                    continue@loop
                }

                when (c2) {
                    'n' -> readParam()
                    'c' -> appendable.append(readParamI().toChar())
                    'p' -> appendable.append("0x" + readParamI().toString(16).padStart(8, '0'))
                    'f', 'F' -> appendable.append(_formatF(readParam() as Number).toCase(c2.isUpperCase()))
                    'e', 'E' -> appendable.append(_formatE(readParam() as Number).toCase(c2.isUpperCase()))
                    'a', 'A' -> appendable.append(_formatA(readParam() as Number).toCase(c2.isUpperCase()))
                    'g', 'G' -> appendable.append(_formatG(readParam() as Number).toCase(c2.isUpperCase()))
                    'd', 'i' -> appendable.append(readParamI().toString(10).padStart(len, pad))
                    'u' -> appendable.append(readParamI().toUInt().toString(10).padStart(len, pad))
                    'x', 'X' -> appendable.append((readParamI().toLong() and 0xFFFFFFFFL).toString(16).toCase(c2.isUpperCase()).padStart(len, pad))
                    'o', 'O' -> appendable.append((readParamI().toLong() and 0xFFFFFFFFL).toString(8).toCase(c2.isUpperCase()).padStart(len, pad))
                    's' -> appendable.append(readParamS())
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
    open fun memset(ptr: CPointer<*>, value: Int, num: Int): CPointer<Unit> {
        for (n in 0 until num) { sb(ptr.ptr + n, value.toByte()) }
        return (ptr as CPointer<Unit>)
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
    open fun memcpy(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
        for (n in 0 until num) sb(dest.ptr + n, lb(src.ptr + n))
        return dest as CPointer<Unit>
    }

    private val STRINGS: LinkedHashMap<String, CPointer<Byte>> = LinkedHashMap<String, CPointer<Byte>>()

    private class ByteArrayBuilder(val initialCapacity: Int = 64) {
        private var data = ByteArray(initialCapacity)
        private var pos = 0
        fun append(byte: Byte) {
            if (pos >= data.size - 1) {
                data = data.copyOf(kotlin.math.max(data.size * 2, data.size + 64))
            }
            data[pos++] = byte
        }
        fun bytes(): ByteArray {
            return data.copyOf(pos)
        }
    }

    fun CPointer<Byte>.strlenz(): Int {
        for (n in 0 until Int.MAX_VALUE) if (this[n] == 0.toByte()) return 0
        return Int.MAX_VALUE
    }

    @OptIn(ExperimentalStdlibApi::class)
    fun CPointer<Byte>.readStringz(): String {
        var sb = ByteArrayBuilder(this.strlenz())
        var pos = this.ptr
        while (true) {
            val c = lb(pos++)
            if (c == 0.toByte()) break
            sb.append(c)
        }
        return sb.bytes().decodeToString()
    }

    // @TODO: Make this allocation-free by manually implementing it
    @OptIn(ExperimentalStdlibApi::class)
    inline fun encodeToByteArray(data: String, out: (b: Byte) -> Unit): Int {
        var count = 0
        for (c in data.encodeToByteArray()) {
            out(c)
            count++
        }
        return count
    }

    @OptIn(ExperimentalStdlibApi::class)
    fun CPointer<Byte>.writeStringz(str: String) {
        var n = 0
        encodeToByteArray(str) { this[n++] = it }
        this[n++] = 0.toByte()
    }

    @OptIn(ExperimentalStdlibApi::class)
    val String.ptr: CPointer<Byte> get() = STRINGS.getOrPut(this) {
        val bytes = this.encodeToByteArray()
        val ptr = malloc(bytes.size + 1).toCPointer<Byte>()
        val p = ptr.ptr
        for (n in 0 until bytes.size) sb(p + n, bytes[n])
        sb(p + bytes.size, 0)
        ptr
    }

    @OptIn(kotlin.time.ExperimentalTime::class)
    private val start = TimeSource.Monotonic.markNow()

    @OptIn(kotlin.time.ExperimentalTime::class)
    fun clock(): Long = start.elapsedNow().inMilliseconds.toLong()

    val Array<String>.ptr: CPointer<CPointer<Byte>> get() {
        val array = this
        val ptr = malloc(POINTER_SIZE * array.size).toCPointer<CPointer<Byte>>()
        for (n in 0 until array.size) {
            sw(ptr.ptr + n * POINTER_SIZE, array[n].ptr.ptr)
        }
        return ptr
    }


    @kotlin.jvm.JvmName("getterByte") operator fun CPointer<Byte>.get(offset: Int): Byte = lb(this.ptr + offset * 1)
    @kotlin.jvm.JvmName("setterByte") operator fun CPointer<Byte>.set(offset: Int, value: Byte): Unit = sb(this.ptr + offset * 1, value)
    @set:kotlin.jvm.JvmName("setter_Byte_value") @get:kotlin.jvm.JvmName("getter_Byte_value") var CPointer<Byte>.value: Byte get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusByte") operator fun CPointer<Byte>.plus(offset: Int): CPointer<Byte> = addPtr<Byte>(offset, 1)
    @kotlin.jvm.JvmName("minusByte") operator fun CPointer<Byte>.minus(offset: Int): CPointer<Byte> = addPtr<Byte>(-offset, 1)
    fun CPointer<Byte>.minusPtrByte(other: CPointer<Byte>): Int = (this.ptr - other.ptr) / 1
    inline fun fixedArrayOfByte(size: Int, setItems: CPointer<Byte>.() -> Unit): CPointer<Byte> = alloca_zero(size * 1).toCPointer<Byte>().apply(setItems)

    @kotlin.jvm.JvmName("getterShort") operator fun CPointer<Short>.get(offset: Int): Short = lh(this.ptr + offset * 2)
    @kotlin.jvm.JvmName("setterShort") operator fun CPointer<Short>.set(offset: Int, value: Short): Unit = sh(this.ptr + offset * 2, value)
    @set:kotlin.jvm.JvmName("setter_Short_value") @get:kotlin.jvm.JvmName("getter_Short_value") var CPointer<Short>.value: Short get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusShort") operator fun CPointer<Short>.plus(offset: Int): CPointer<Short> = addPtr<Short>(offset, 2)
    @kotlin.jvm.JvmName("minusShort") operator fun CPointer<Short>.minus(offset: Int): CPointer<Short> = addPtr<Short>(-offset, 2)
    fun CPointer<Short>.minusPtrShort(other: CPointer<Short>): Int = (this.ptr - other.ptr) / 2
    inline fun fixedArrayOfShort(size: Int, setItems: CPointer<Short>.() -> Unit): CPointer<Short> = alloca_zero(size * 2).toCPointer<Short>().apply(setItems)

    @kotlin.jvm.JvmName("getterInt") operator fun CPointer<Int>.get(offset: Int): Int = lw(this.ptr + offset * 4)
    @kotlin.jvm.JvmName("setterInt") operator fun CPointer<Int>.set(offset: Int, value: Int): Unit = sw(this.ptr + offset * 4, value)
    @set:kotlin.jvm.JvmName("setter_Int_value") @get:kotlin.jvm.JvmName("getter_Int_value") var CPointer<Int>.value: Int get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusInt") operator fun CPointer<Int>.plus(offset: Int): CPointer<Int> = addPtr<Int>(offset, 4)
    @kotlin.jvm.JvmName("minusInt") operator fun CPointer<Int>.minus(offset: Int): CPointer<Int> = addPtr<Int>(-offset, 4)
    fun CPointer<Int>.minusPtrInt(other: CPointer<Int>): Int = (this.ptr - other.ptr) / 4
    inline fun fixedArrayOfInt(size: Int, setItems: CPointer<Int>.() -> Unit): CPointer<Int> = alloca_zero(size * 4).toCPointer<Int>().apply(setItems)

    @kotlin.jvm.JvmName("getterLong") operator fun CPointer<Long>.get(offset: Int): Long = ld(this.ptr + offset * 8)
    @kotlin.jvm.JvmName("setterLong") operator fun CPointer<Long>.set(offset: Int, value: Long): Unit = sd(this.ptr + offset * 8, value)
    @set:kotlin.jvm.JvmName("setter_Long_value") @get:kotlin.jvm.JvmName("getter_Long_value") var CPointer<Long>.value: Long get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusLong") operator fun CPointer<Long>.plus(offset: Int): CPointer<Long> = addPtr<Long>(offset, 8)
    @kotlin.jvm.JvmName("minusLong") operator fun CPointer<Long>.minus(offset: Int): CPointer<Long> = addPtr<Long>(-offset, 8)
    fun CPointer<Long>.minusPtrLong(other: CPointer<Long>): Int = (this.ptr - other.ptr) / 8
    inline fun fixedArrayOfLong(size: Int, setItems: CPointer<Long>.() -> Unit): CPointer<Long> = alloca_zero(size * 8).toCPointer<Long>().apply(setItems)

    operator fun CPointer<UByte>.get(offset: Int): UByte = lb(this.ptr + offset * 1).toUByte()
    operator fun CPointer<UByte>.set(offset: Int, value: UByte): Unit = sb(this.ptr + offset * 1, (value).toByte())
    var CPointer<UByte>.value: UByte get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusUByte") operator fun CPointer<UByte>.plus(offset: Int): CPointer<UByte> = addPtr<UByte>(offset, 1)
    @kotlin.jvm.JvmName("minusUByte") operator fun CPointer<UByte>.minus(offset: Int): CPointer<UByte> = addPtr<UByte>(-offset, 1)
    fun CPointer<UByte>.minusPtrUByte(other: CPointer<UByte>): Int = (this.ptr - other.ptr) / 1
    inline fun fixedArrayOfUByte(size: Int, setItems: CPointer<UByte>.() -> Unit): CPointer<UByte> = alloca_zero(size * 1).toCPointer<UByte>().apply(setItems)

    operator fun CPointer<UShort>.get(offset: Int): UShort = lh(this.ptr + offset * 2).toUShort()
    operator fun CPointer<UShort>.set(offset: Int, value: UShort): Unit = sh(this.ptr + offset * 2, (value).toShort())
    var CPointer<UShort>.value: UShort get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusUShort") operator fun CPointer<UShort>.plus(offset: Int): CPointer<UShort> = addPtr<UShort>(offset, 2)
    @kotlin.jvm.JvmName("minusUShort") operator fun CPointer<UShort>.minus(offset: Int): CPointer<UShort> = addPtr<UShort>(-offset, 2)
    fun CPointer<UShort>.minusPtrUShort(other: CPointer<UShort>): Int = (this.ptr - other.ptr) / 2
    inline fun fixedArrayOfUShort(size: Int, setItems: CPointer<UShort>.() -> Unit): CPointer<UShort> = alloca_zero(size * 2).toCPointer<UShort>().apply(setItems)

    operator fun CPointer<UInt>.get(offset: Int): UInt = lw(this.ptr + offset * 4).toUInt()
    operator fun CPointer<UInt>.set(offset: Int, value: UInt): Unit = sw(this.ptr + offset * 4, (value).toInt())
    var CPointer<UInt>.value: UInt get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusUInt") operator fun CPointer<UInt>.plus(offset: Int): CPointer<UInt> = addPtr<UInt>(offset, 4)
    @kotlin.jvm.JvmName("minusUInt") operator fun CPointer<UInt>.minus(offset: Int): CPointer<UInt> = addPtr<UInt>(-offset, 4)
    fun CPointer<UInt>.minusPtrUInt(other: CPointer<UInt>): Int = (this.ptr - other.ptr) / 4
    inline fun fixedArrayOfUInt(size: Int, setItems: CPointer<UInt>.() -> Unit): CPointer<UInt> = alloca_zero(size * 4).toCPointer<UInt>().apply(setItems)

    operator fun CPointer<ULong>.get(offset: Int): ULong = ld(this.ptr + offset * 8).toULong()
    operator fun CPointer<ULong>.set(offset: Int, value: ULong): Unit = sd(this.ptr + offset * 8, (value).toLong())
    var CPointer<ULong>.value: ULong get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusULong") operator fun CPointer<ULong>.plus(offset: Int): CPointer<ULong> = addPtr<ULong>(offset, 8)
    @kotlin.jvm.JvmName("minusULong") operator fun CPointer<ULong>.minus(offset: Int): CPointer<ULong> = addPtr<ULong>(-offset, 8)
    fun CPointer<ULong>.minusPtrULong(other: CPointer<ULong>): Int = (this.ptr - other.ptr) / 8
    inline fun fixedArrayOfULong(size: Int, setItems: CPointer<ULong>.() -> Unit): CPointer<ULong> = alloca_zero(size * 8).toCPointer<ULong>().apply(setItems)

    @kotlin.jvm.JvmName("getterFloat") inline operator fun CPointer<Float>.get(offset: Int): Float = lwf(this.ptr + offset * 4)
    @kotlin.jvm.JvmName("setterFloat") inline operator fun CPointer<Float>.set(offset: Int, value: Float): Unit = swf(this.ptr + offset * 4, (value))
    @set:kotlin.jvm.JvmName("setter_Float_value") @get:kotlin.jvm.JvmName("getter_Float_value") inline var CPointer<Float>.value: Float get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusFloat") operator fun CPointer<Float>.plus(offset: Int): CPointer<Float> = addPtr<Float>(offset, 4)
    @kotlin.jvm.JvmName("minusFloat") operator fun CPointer<Float>.minus(offset: Int): CPointer<Float> = addPtr<Float>(-offset, 4)
    fun CPointer<Float>.minusPtrFloat(other: CPointer<Float>): Int = (this.ptr - other.ptr) / 4
    inline fun fixedArrayOfFloat(size: Int, setItems: CPointer<Float>.() -> Unit): CPointer<Float> = alloca_zero(size * 4).toCPointer<Float>().apply(setItems)

    @kotlin.jvm.JvmName("getterDouble") operator fun CPointer<Double>.get(offset: Int): Double = ldf(this.ptr + offset * 4)
    @kotlin.jvm.JvmName("setterDouble") operator fun CPointer<Double>.set(offset: Int, value: Double): Unit = sdf(this.ptr + offset * 4, (value))
    @set:kotlin.jvm.JvmName("setter_Double_value") @get:kotlin.jvm.JvmName("getter_Double_value") var CPointer<Double>.value: Double get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusDouble") operator fun CPointer<Double>.plus(offset: Int): CPointer<Double> = addPtr<Double>(offset, 4)
    @kotlin.jvm.JvmName("minusDouble") operator fun CPointer<Double>.minus(offset: Int): CPointer<Double> = addPtr<Double>(-offset, 4)
    fun CPointer<Double>.minusPtrDouble(other: CPointer<Double>): Int = (this.ptr - other.ptr) / 4
    inline fun fixedArrayOfDouble(size: Int, setItems: CPointer<Double>.() -> Unit): CPointer<Double> = alloca_zero(size * 4).toCPointer<Double>().apply(setItems)


    val FUNCTION_ADDRS: LinkedHashMap<kotlin.reflect.KFunction<*>, Int> = LinkedHashMap<kotlin.reflect.KFunction<*>, Int>()

    operator fun <TR> CFunction0<TR>.invoke(): TR = (FUNCTIONS[this.ptr] as (() -> TR)).invoke()
    @get:kotlin.jvm.JvmName("cfunc0") val <TR> kotlin.reflect.KFunction0<TR>.cfunc get() = CFunction0<TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, TR> CFunction1<T0, TR>.invoke(v0: T0): TR = (FUNCTIONS[this.ptr] as ((T0) -> TR)).invoke(v0)
    @get:kotlin.jvm.JvmName("cfunc1") val <T0, TR> kotlin.reflect.KFunction1<T0, TR>.cfunc get() = CFunction1<T0, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, TR> CFunction2<T0, T1, TR>.invoke(v0: T0, v1: T1): TR = (FUNCTIONS[this.ptr] as ((T0, T1) -> TR)).invoke(v0, v1)
    @get:kotlin.jvm.JvmName("cfunc2") val <T0, T1, TR> kotlin.reflect.KFunction2<T0, T1, TR>.cfunc get() = CFunction2<T0, T1, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, T2, TR> CFunction3<T0, T1, T2, TR>.invoke(v0: T0, v1: T1, v2: T2): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2) -> TR)).invoke(v0, v1, v2)
    @get:kotlin.jvm.JvmName("cfunc3") val <T0, T1, T2, TR> kotlin.reflect.KFunction3<T0, T1, T2, TR>.cfunc get() = CFunction3<T0, T1, T2, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, T2, T3, TR> CFunction4<T0, T1, T2, T3, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3) -> TR)).invoke(v0, v1, v2, v3)
    @get:kotlin.jvm.JvmName("cfunc4") val <T0, T1, T2, T3, TR> kotlin.reflect.KFunction4<T0, T1, T2, T3, TR>.cfunc get() = CFunction4<T0, T1, T2, T3, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, T2, T3, T4, TR> CFunction5<T0, T1, T2, T3, T4, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3, v4: T4): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3, T4) -> TR)).invoke(v0, v1, v2, v3, v4)
    @get:kotlin.jvm.JvmName("cfunc5") val <T0, T1, T2, T3, T4, TR> kotlin.reflect.KFunction5<T0, T1, T2, T3, T4, TR>.cfunc get() = CFunction5<T0, T1, T2, T3, T4, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, T2, T3, T4, T5, TR> CFunction6<T0, T1, T2, T3, T4, T5, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3, T4, T5) -> TR)).invoke(v0, v1, v2, v3, v4, v5)
    @get:kotlin.jvm.JvmName("cfunc6") val <T0, T1, T2, T3, T4, T5, TR> kotlin.reflect.KFunction6<T0, T1, T2, T3, T4, T5, TR>.cfunc get() = CFunction6<T0, T1, T2, T3, T4, T5, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
    operator fun <T0, T1, T2, T3, T4, T5, T6, TR> CFunction7<T0, T1, T2, T3, T4, T5, T6, TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): TR = (FUNCTIONS[this.ptr] as ((T0, T1, T2, T3, T4, T5, T6) -> TR)).invoke(v0, v1, v2, v3, v4, v5, v6)
    @get:kotlin.jvm.JvmName("cfunc7") val <T0, T1, T2, T3, T4, T5, T6, TR> kotlin.reflect.KFunction7<T0, T1, T2, T3, T4, T5, T6, TR>.cfunc get() = CFunction7<T0, T1, T2, T3, T4, T5, T6, TR>(FUNCTION_ADDRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })
}
"""
val KotlinRuntimeJvm = """// https://slideshare.net/RafaelWinterhalter/java-10-java-11-and-beyond
@Suppress("unused")
public/*!*/ open class RuntimeJvm(REQUESTED_HEAP_SIZE: Int = 0, REQUESTED_STACK_PTR: Int = 0, __syscalls: RuntimeSyscalls = JvmRuntimeSyscalls) : AbstractRuntime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls = __syscalls) {
    //val HEAP: java.nio.ByteBuffer = java.nio.ByteBuffer.allocateDirect(HEAP_SIZE).order(java.nio.ByteOrder.LITTLE_ENDIAN)
    private val HEAP: java.nio.ByteBuffer = java.nio.ByteBuffer.allocateDirect(HEAP_SIZE).order(java.nio.ByteOrder.nativeOrder())

    final override fun lb(ptr: Int) = HEAP[ptr]
    final override fun sb(ptr: Int, value: Byte): Unit { HEAP.put(ptr, value) }

    final override fun lh(ptr: Int): Short = HEAP.getShort(ptr)
    final override fun sh(ptr: Int, value: Short): Unit { HEAP.putShort(ptr, value) }

    final override fun lw(ptr: Int): Int = HEAP.getInt(ptr)
    final override fun sw(ptr: Int, value: Int): Unit { HEAP.putInt(ptr, value) }

    final override fun ld(ptr: Int): Long = HEAP.getLong(ptr)
    final override fun sd(ptr: Int, value: Long): Unit { HEAP.putLong(ptr, value) }

    final override fun lwf(ptr: Int): Float = HEAP.getFloat(ptr)
    final override fun swf(ptr: Int, value: Float): Unit { HEAP.putFloat(ptr, value) }

    final override fun ldf(ptr: Int): Double = HEAP.getDouble(ptr)
    final override fun sdf(ptr: Int, value: Double): Unit { HEAP.putDouble(ptr, value) }

    private val tempSrc = HEAP.slice()
    private val tempDst = HEAP.slice()
    final override fun memset(ptr: CPointer<*>, value: Int, num: Int): CPointer<Unit> {
        tempDst.clear()
        tempDst.position(ptr.ptr)
        tempDst.limit(ptr.ptr + num)
        for (n in 0 until num) tempDst.put(value.toByte())
        return ptr as CPointer<Unit>
    }

    final override fun memmove(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
        tempSrc.clear()
        tempSrc.position(src.ptr)
        tempSrc.limit(src.ptr + num)

        tempDst.clear()
        tempDst.position(dest.ptr)
        tempDst.limit(dest.ptr + num)

        tempDst.put(tempSrc)

        return dest
    }

    final override fun memcpy(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
        return memmove(dest, src, num)
    }

    // @TODO: This shouldn't be necessary
    final override fun _formatF(value: Number): String = "%f".format(value.toFloat())
}

public/*!*/ object JvmRuntimeSyscalls : RuntimeSyscalls {
    val fileHandlers = LinkedHashMap<Int, java.io.RandomAccessFile>()
    var lastFileHandle = 1

    override fun AbstractRuntime.fopen(file: CPointer<Byte>, mode: CPointer<Byte>): CPointer<CPointer<Unit>> {
        return try {
            val modep = mode.readStringz().replace("b", "")
            val modeAppend = modep.contains("a")
            val modeWrite = modep.contains("w") || modeAppend
            val raf = java.io.RandomAccessFile(file.readStringz(), when {
                modeWrite -> "rw"
                else -> "r"
            })
            if (modeAppend) {
                raf.seek(raf.length())
            }
            val fileHandle = lastFileHandle++
            fileHandlers[fileHandle] = raf
            CPointer<CPointer<Unit>>(fileHandle)
        } catch (e: java.io.FileNotFoundException) {
            CPointer<CPointer<Unit>>(0)
        }
    }

    override fun AbstractRuntime.fread(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        val available = raf.length() - raf.filePointer
        val temp = ByteArray(prevAligned(kotlin.math.min(available.toLong(), (size * nmemb).toLong()).toInt(), size))
        val readCount = raf.read(temp)
        memWrite(ptr, temp, 0, readCount)
        return readCount / size
    }

    override fun AbstractRuntime.fwrite(ptr: CPointer<Unit>, size: Int, nmemb: Int, stream: CPointer<CPointer<Unit>>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        val temp = ByteArray(size * nmemb)
        memRead(ptr, temp)
        raf.write(temp)
        return nmemb
    }

    override fun AbstractRuntime.fflush(stream: CPointer<CPointer<Unit>>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        return 0
    }
    override fun AbstractRuntime.ftell(stream: CPointer<CPointer<Unit>>): Long {
        val raf = fileHandlers[stream.ptr] ?: return 0L
        return raf.filePointer
    }

    override fun AbstractRuntime.fsetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        raf.seek(ptrHolder[0])
        return 0
    }

    override fun AbstractRuntime.fgetpos(stream: CPointer<CPointer<Unit>>, ptrHolder: CPointer<Long>): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        ptrHolder[0] = raf.filePointer
        return 0
    }

    override fun AbstractRuntime.fseek(stream: CPointer<CPointer<Unit>>, offset: Long, whence: Int): Int {
        val raf = fileHandlers[stream.ptr] ?: return -1
        when (whence) {
            0 -> raf.seek(offset)
            1 -> raf.seek(raf.filePointer + offset)
            2 -> raf.seek(raf.length() + offset)
        }
        return 0
    }

    override fun AbstractRuntime.fclose(stream: CPointer<CPointer<Unit>>) {
        val raf = fileHandlers.remove(stream.ptr)
        raf?.close()
    }
}

"""
