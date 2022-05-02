// KTCC RUNTIME ///////////////////////////////////////////////////

@Suppress("MemberVisibilityCanBePrivate", "FunctionName", "CanBeVal", "DoubleNegation", "LocalVariableName", "NAME_SHADOWING", "VARIABLE_WITH_REDUNDANT_INITIALIZER", "RemoveRedundantCallsOfConversionMethods", "EXPERIMENTAL_IS_NOT_ENABLED", "RedundantExplicitType", "RemoveExplicitTypeArguments", "RedundantExplicitType", "unused", "UNCHECKED_CAST", "UNUSED_VARIABLE", "UNUSED_PARAMETER", "NOTHING_TO_INLINE", "PropertyName", "ClassName", "USELESS_CAST", "PrivatePropertyName", "CanBeParameter", "UnusedMainParameter")
@OptIn(ExperimentalUnsignedTypes::class)
public/*!*/ abstract class AbstractRuntime(val REQUESTED_HEAP_SIZE: Int = 0, val REQUESTED_STACK_PTR: Int = 0, val __syscalls: RuntimeSyscalls = DummyRuntimeSyscalls) : RuntimeSyscalls by __syscalls {
    val HEAP_SIZE: Int = if (REQUESTED_HEAP_SIZE <= 0) 16 * 1024 * 1024 else REQUESTED_HEAP_SIZE // 16 MB default
    var STACK_PTR: Int = if (REQUESTED_STACK_PTR == 0) HEAP_SIZE else REQUESTED_STACK_PTR // 0.5 MB
    var HEAP_PTR: Int = 128

    ///////////////////////////////////
    // MEMORY TRANSFER / STRING/MEMORY OPERATIONS
    ///////////////////////////////////

    abstract fun lb(ptr: Int): Byte
    abstract fun sb(ptr: Int, value: Byte): Unit
    abstract fun memset(ptr: CPointer<*>, value: Int, num: Int): CPointer<Unit>
    abstract fun memmove(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit>
    abstract fun memcpy(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit>

    fun lbu(ptr: Int): Int = lb(ptr).toInt() and 0xFF
    fun lhu(ptr: Int): Int = lh(ptr).toInt() and 0xFFFF
    fun lwu(ptr: Int): Long = lw(ptr).toLong() and 0xFFFFFFFFL

    open fun lh(ptr: Int): Short = ((lbu(ptr) shl 0) or (lbu(ptr + 1) shl 8)).toShort()
    open fun sh(ptr: Int, value: Short): Unit { sb(ptr, (value.toInt() ushr 0).toByte()); sb(ptr + 1, (value.toInt() ushr 8).toByte()) }

    open fun lw(ptr: Int): Int = ((lbu(ptr) shl 0) or (lbu(ptr + 1) shl 8) or (lbu(ptr + 2) shl 16) or (lbu(ptr + 3) shl 24))
    open fun sw(ptr: Int, value: Int): Unit { sb(ptr + 0, (value ushr 0).toByte()); sb(ptr + 1, (value ushr 8).toByte()); sb(ptr + 2, (value ushr 16).toByte()); sb(ptr + 3, (value ushr 24).toByte()) }

    open fun ld(ptr: Int): Long = (lwu(ptr) shl 0) or (lwu(ptr + 4) shl 32)
    open fun sd(ptr: Int, value: Long): Unit { sw(ptr, (value ushr 0).toInt()); sw(ptr + 4, (value ushr 32).toInt()) }

    open fun lwf(ptr: Int): Float = Float.fromBits(lw(ptr))
    open fun swf(ptr: Int, value: Float): Unit { sw(ptr, value.toRawBits()) }

    open fun ldf(ptr: Int): Double = Double.fromBits(ld(ptr))
    open fun sdf(ptr: Int, value: Double): Unit { sd(ptr, value.toRawBits()) }

    open fun memWrite(ptr: CPointer<*>, data: ByteArray, offset: Int = 0, size: Int = data.size) { for (n in offset until offset + size) sb(ptr.ptr + n, data[n]) }
    open fun memRead(ptr: CPointer<*>, data: ByteArray, offset: Int = 0, size: Int = data.size) { for (n in offset until offset + size) data[n] = lb(ptr.ptr + n) }
    open fun memWrite(ptr: CPointer<*>, data: ShortArray, offset: Int = 0, size: Int = data.size) { for (n in offset until offset + size) sh(ptr.ptr + n * 2, data[n]) }
    open fun memRead(ptr: CPointer<*>, data: ShortArray, offset: Int = 0, size: Int = data.size) { for (n in offset until offset + size) data[n] = lh(ptr.ptr + n * 2) }

    ///////////////////////////////////
    // CASTING OPERATIONS
    ///////////////////////////////////

    fun Boolean.toInt(): Int = if (this) 1 else 0
    fun CPointer<*>.toInt(): Int = ptr
    fun CPointer<*>.toBool(): Boolean = ptr != 0
    fun Byte.toBool(): Boolean = this.toInt() != 0
    fun Short.toBool(): Boolean = this.toInt() != 0
    fun Int.toBool(): Boolean = this != 0
    fun Long.toBool(): Boolean = this != 0L
    fun Float.toBool(): Boolean = this != 0f
    fun Double.toBool(): Boolean = this != 0.0
    fun UByte.toBool(): Boolean = this.toInt() != 0
    fun UShort.toBool(): Boolean = this.toInt() != 0
    fun UInt.toBool(): Boolean = this.toInt() != 0
    fun ULong.toBool(): Boolean = this.toInt() != 0
    fun Boolean.toBool(): Boolean = this

    ///////////////////////////////////
    // POINTER OPERATIONS
    ///////////////////////////////////

    fun <T> CPointer<T>.addPtr(offset: Int, elementSize: Int): CPointer<T> = CPointer<T>(this.ptr + offset * elementSize)

    // void**
    @kotlin.jvm.JvmName("plusPtr") operator fun <T> CPointer<CPointer<T>>.plus(offset: Int): CPointer<CPointer<T>> = addPtr<CPointer<T>>(offset, 4)
    @kotlin.jvm.JvmName("minusPtr") operator fun <T> CPointer<CPointer<T>>.minus(offset: Int): CPointer<CPointer<T>> = addPtr<CPointer<T>>(-offset, 4)
    @get:kotlin.jvm.JvmName("getPtrValue") var <T> CPointer<CPointer<T>>.value: CPointer<T> get() = this[0]; set(value) { this[0] = value }
    fun <T> CPointer<CPointer<T>>.minusPtrPtr(other: CPointer<CPointer<T>>): Int = (this.ptr - other.ptr) / 4
    operator fun <T> CPointer<CPointer<T>>.set(offset: Int, value: CPointer<T>): Unit = sw(this.ptr + offset * 4, value.ptr)
    @kotlin.jvm.JvmName("getPtrPtr") operator fun <T> CPointer<CPointer<T>>.get(offset: Int): CPointer<T> = CPointer(lw(this.ptr + offset * 4))

    // char*
    @kotlin.jvm.JvmName("getterByte") operator fun CPointer<Byte>.get(offset: Int): Byte = lb(this.ptr + offset * 1)
    @kotlin.jvm.JvmName("setterByte") operator fun CPointer<Byte>.set(offset: Int, value: Byte): Unit = sb(this.ptr + offset * 1, value)
    @set:kotlin.jvm.JvmName("setter_Byte_value") @get:kotlin.jvm.JvmName("getter_Byte_value") var CPointer<Byte>.value: Byte get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusByte") operator fun CPointer<Byte>.plus(offset: Int): CPointer<Byte> = addPtr<Byte>(offset, 1)
    @kotlin.jvm.JvmName("minusByte") operator fun CPointer<Byte>.minus(offset: Int): CPointer<Byte> = addPtr<Byte>(-offset, 1)
    fun CPointer<Byte>.minusPtrByte(other: CPointer<Byte>): Int = (this.ptr - other.ptr) / 1
    inline fun fixedArrayOfByte(size: Int, setItems: CPointer<Byte>.() -> Unit): CPointer<Byte> = CPointer<Byte>(alloca_zero(size * 1).ptr).apply(setItems)
    fun fixedArrayOfByte(vararg values: Byte, size: Int = values.size): CPointer<Byte> = fixedArrayOfByte(size) { for (n in 0 until values.size) this[n] = values[n] }
    fun fixedArrayOfByte(values: String, size: Int = values.length): CPointer<Byte> = fixedArrayOfByte(size) { for (n in 0 until values.length) this[n] = values[n].code.toByte() }

    // short*
    @kotlin.jvm.JvmName("getterShort") operator fun CPointer<Short>.get(offset: Int): Short = lh(this.ptr + offset * 2)
    @kotlin.jvm.JvmName("setterShort") operator fun CPointer<Short>.set(offset: Int, value: Short): Unit = sh(this.ptr + offset * 2, value)
    @set:kotlin.jvm.JvmName("setter_Short_value") @get:kotlin.jvm.JvmName("getter_Short_value") var CPointer<Short>.value: Short get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusShort") operator fun CPointer<Short>.plus(offset: Int): CPointer<Short> = addPtr<Short>(offset, 2)
    @kotlin.jvm.JvmName("minusShort") operator fun CPointer<Short>.minus(offset: Int): CPointer<Short> = addPtr<Short>(-offset, 2)
    fun CPointer<Short>.minusPtrShort(other: CPointer<Short>): Int = (this.ptr - other.ptr) / 2
    inline fun fixedArrayOfShort(size: Int, setItems: CPointer<Short>.() -> Unit): CPointer<Short> = CPointer<Short>(alloca_zero(size * 2).ptr).apply(setItems)
    fun fixedArrayOfShort(vararg values: Short, size: Int = values.size): CPointer<Short> = fixedArrayOfShort(size) { for (n in 0 until values.size) this[n] = values[n] }
    fun fixedArrayOfShort(values: String, size: Int = values.length): CPointer<Short> = fixedArrayOfShort(size) { for (n in 0 until values.length) this[n] = values[n].code.toShort() }

    // int*
    @kotlin.jvm.JvmName("getterInt") operator fun IntPointer.get(offset: Int): Int = lw(this.ptr + offset * 4)
    @kotlin.jvm.JvmName("setterInt") operator fun IntPointer.set(offset: Int, value: Int): Unit = sw(this.ptr + offset * 4, value)
    @set:kotlin.jvm.JvmName("setter_Int_value") @get:kotlin.jvm.JvmName("getter_Int_value") var IntPointer.value: Int get() = this[0]; set(value): Unit { this[0] = value }
    inline fun fixedArrayOfInt(size: Int, setItems: IntPointer.() -> Unit): IntPointer = IntPointer(alloca_zero(size * 4).ptr).apply(setItems)
    fun fixedArrayOfInt(vararg values: Int, size: Int = values.size): IntPointer = fixedArrayOfInt(size) { for (n in 0 until values.size) this[n] = values[n] }
    ///////////////////////////////////////

    // long*
    @kotlin.jvm.JvmName("getterLong") operator fun CPointer<Long>.get(offset: Int): Long = ld(this.ptr + offset * 8)
    @kotlin.jvm.JvmName("setterLong") operator fun CPointer<Long>.set(offset: Int, value: Long): Unit = sd(this.ptr + offset * 8, value)
    @set:kotlin.jvm.JvmName("setter_Long_value") @get:kotlin.jvm.JvmName("getter_Long_value") var CPointer<Long>.value: Long get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusLong") operator fun CPointer<Long>.plus(offset: Int): CPointer<Long> = addPtr<Long>(offset, 8)
    @kotlin.jvm.JvmName("minusLong") operator fun CPointer<Long>.minus(offset: Int): CPointer<Long> = addPtr<Long>(-offset, 8)
    fun CPointer<Long>.minusPtrLong(other: CPointer<Long>): Int = (this.ptr - other.ptr) / 8
    inline fun fixedArrayOfLong(size: Int, setItems: CPointer<Long>.() -> Unit): CPointer<Long> = CPointer<Long>(alloca_zero(size * 8).ptr).apply(setItems)
    fun fixedArrayOfLong(vararg values: Long, size: Int = values.size): CPointer<Long> = fixedArrayOfLong(size) { for (n in 0 until values.size) this[n] = values[n] }

    operator fun CPointer<UByte>.get(offset: Int): UByte = lb(this.ptr + offset * 1).toUByte()
    operator fun CPointer<UByte>.set(offset: Int, value: UByte): Unit = sb(this.ptr + offset * 1, (value).toByte())
    var CPointer<UByte>.value: UByte get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusUByte") operator fun CPointer<UByte>.plus(offset: Int): CPointer<UByte> = addPtr<UByte>(offset, 1)
    @kotlin.jvm.JvmName("minusUByte") operator fun CPointer<UByte>.minus(offset: Int): CPointer<UByte> = addPtr<UByte>(-offset, 1)
    fun CPointer<UByte>.minusPtrUByte(other: CPointer<UByte>): Int = (this.ptr - other.ptr) / 1
    inline fun fixedArrayOfUByte(size: Int, setItems: CPointer<UByte>.() -> Unit): CPointer<UByte> = CPointer<UByte>(alloca_zero(size * 1).ptr).apply(setItems)
    fun fixedArrayOfUByte(vararg values: UByte, size: Int = values.size): CPointer<UByte> = fixedArrayOfUByte(size) { for (n in 0 until values.size) this[n] = values[n] }
    fun fixedArrayOfUByte(values: String, size: Int = values.length): CPointer<UByte> = fixedArrayOfUByte(size) { for (n in 0 until values.length) this[n] = values[n].code.toUByte() }

    operator fun CPointer<UShort>.get(offset: Int): UShort = lh(this.ptr + offset * 2).toUShort()
    operator fun CPointer<UShort>.set(offset: Int, value: UShort): Unit = sh(this.ptr + offset * 2, (value).toShort())
    var CPointer<UShort>.value: UShort get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusUShort") operator fun CPointer<UShort>.plus(offset: Int): CPointer<UShort> = addPtr<UShort>(offset, 2)
    @kotlin.jvm.JvmName("minusUShort") operator fun CPointer<UShort>.minus(offset: Int): CPointer<UShort> = addPtr<UShort>(-offset, 2)
    fun CPointer<UShort>.minusPtrUShort(other: CPointer<UShort>): Int = (this.ptr - other.ptr) / 2
    inline fun fixedArrayOfUShort(size: Int, setItems: CPointer<UShort>.() -> Unit): CPointer<UShort> = CPointer<UShort>(alloca_zero(size * 2).ptr).apply(setItems)
    fun fixedArrayOfUShort(vararg values: UShort, size: Int = values.size): CPointer<UShort> = fixedArrayOfUShort(size) { for (n in 0 until values.size) this[n] = values[n] }
    fun fixedArrayOfUShort(values: String, size: Int = values.length): CPointer<UShort> = fixedArrayOfUShort(size) { for (n in 0 until values.length) this[n] = values[n].code.toUShort() }

    operator fun CPointer<UInt>.get(offset: Int): UInt = lw(this.ptr + offset * 4).toUInt()
    operator fun CPointer<UInt>.set(offset: Int, value: UInt): Unit = sw(this.ptr + offset * 4, (value).toInt())
    var CPointer<UInt>.value: UInt get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusUInt") operator fun CPointer<UInt>.plus(offset: Int): CPointer<UInt> = addPtr<UInt>(offset, 4)
    @kotlin.jvm.JvmName("minusUInt") operator fun CPointer<UInt>.minus(offset: Int): CPointer<UInt> = addPtr<UInt>(-offset, 4)
    fun CPointer<UInt>.minusPtrUInt(other: CPointer<UInt>): Int = (this.ptr - other.ptr) / 4
    inline fun fixedArrayOfUInt(size: Int, setItems: CPointer<UInt>.() -> Unit): CPointer<UInt> = CPointer<UInt>(alloca_zero(size * 4).ptr).apply(setItems)
    fun fixedArrayOfUInt(vararg values: UInt, size: Int = values.size): CPointer<UInt> = fixedArrayOfUInt(size) { for (n in 0 until values.size) this[n] = values[n] }

    operator fun CPointer<ULong>.get(offset: Int): ULong = ld(this.ptr + offset * 8).toULong()
    operator fun CPointer<ULong>.set(offset: Int, value: ULong): Unit = sd(this.ptr + offset * 8, (value).toLong())
    var CPointer<ULong>.value: ULong get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusULong") operator fun CPointer<ULong>.plus(offset: Int): CPointer<ULong> = addPtr<ULong>(offset, 8)
    @kotlin.jvm.JvmName("minusULong") operator fun CPointer<ULong>.minus(offset: Int): CPointer<ULong> = addPtr<ULong>(-offset, 8)
    fun CPointer<ULong>.minusPtrULong(other: CPointer<ULong>): Int = (this.ptr - other.ptr) / 8
    inline fun fixedArrayOfULong(size: Int, setItems: CPointer<ULong>.() -> Unit): CPointer<ULong> = CPointer<ULong>(alloca_zero(size * 8).ptr).apply(setItems)
    fun fixedArrayOfULong(vararg values: ULong, size: Int = values.size): CPointer<ULong> = fixedArrayOfULong(size) { for (n in 0 until values.size) this[n] = values[n] }

    ///////////////////////////////////////
    operator fun FloatPointer.get(offset: Int): Float = lwf(this.ptr + offset * 4)
    operator fun FloatPointer.set(offset: Int, value: Float): Unit = swf(this.ptr + offset * 4, (value))
    var FloatPointer.value: Float get() = this[0]; set(value): Unit { this[0] = value }
    inline fun fixedArrayOfFloat(size: Int, setItems: FloatPointer.() -> Unit): FloatPointer = FloatPointer(alloca_zero(size * 4).ptr).apply(setItems)
    fun fixedArrayOfFloat(vararg values: Float, size: Int = values.size): FloatPointer = fixedArrayOfFloat(size) { for (n in 0 until values.size) this[n] = values[n] }
    ///////////////////////////////////////

    @kotlin.jvm.JvmName("getterDouble") operator fun CPointer<Double>.get(offset: Int): Double = ldf(this.ptr + offset * 4)
    @kotlin.jvm.JvmName("setterDouble") operator fun CPointer<Double>.set(offset: Int, value: Double): Unit = sdf(this.ptr + offset * 4, (value))
    @set:kotlin.jvm.JvmName("setter_Double_value") @get:kotlin.jvm.JvmName("getter_Double_value") var CPointer<Double>.value: Double get() = this[0]; set(value): Unit { this[0] = value }
    @kotlin.jvm.JvmName("plusDouble") operator fun CPointer<Double>.plus(offset: Int): CPointer<Double> = addPtr<Double>(offset, 4)
    @kotlin.jvm.JvmName("minusDouble") operator fun CPointer<Double>.minus(offset: Int): CPointer<Double> = addPtr<Double>(-offset, 4)
    fun CPointer<Double>.minusPtrDouble(other: CPointer<Double>): Int = (this.ptr - other.ptr) / 4
    inline fun fixedArrayOfDouble(size: Int, setItems: CPointer<Double>.() -> Unit): CPointer<Double> = CPointer<Double>(alloca_zero(size * 4).ptr).apply(setItems)
    fun fixedArrayOfDouble(vararg values: Double, size: Int = values.size): CPointer<Double> = fixedArrayOfDouble(size) { for (n in 0 until values.size) this[n] = values[n] }

    ///////////////////////////////////////
    // STACK ALLOC
    ///////////////////////////////////////
    inline fun <T> stackFrame(callback: () -> T): T {
        val oldPos = STACK_PTR
        return try { callback() } finally { STACK_PTR = oldPos }
    }
    fun alloca(size: Int): CPointer<Unit> = CPointer<Unit>(STACK_PTR - size).also { STACK_PTR -= size }
    fun alloca_zero(size: Int): CPointer<Unit> = alloca(size).also { memset(it, 0, size) }

    ///////////////////////////////////////
    // HEAP ALLOC
    ///////////////////////////////////////
    // @TODO: OPTIMIZE!
    // Pair<head: Int, size: Int>
    private val chunks: LinkedHashMap<Int, Pair<Int, Int>> = LinkedHashMap<Int, Pair<Int, Int>>()
    private val freeChunks: ArrayList<Pair<Int, Int>> = arrayListOf<Pair<Int, Int>>()
    fun malloc(size: Int): CPointer<Unit> {
        val chunk = freeChunks.firstOrNull { it.second >= size }
        if (chunk != null) {
            freeChunks.remove(chunk)
            chunks[chunk.first] = chunk
            return CPointer(chunk.first)
        } else {
            val head = HEAP_PTR
            HEAP_PTR += size
            chunks[head] = Pair(head, size)
            return CPointer(head)
        }
    }
    fun free(ptr: CPointer<*>): Unit { chunks.remove(ptr.ptr)?.let { freeChunks += it } }

    ///////////////////////////////////////
    // I/O
    ///////////////////////////////////////
    fun putchar(c: Int): Int {
        print(c.toChar())
        return c
    }

    ///////////////////////////////////////
    // STRINGS
    ///////////////////////////////////////
    private val STRINGS: LinkedHashMap<String, CPointer<Byte>> = LinkedHashMap<String, CPointer<Byte>>()

    val String.ptr: CPointer<Byte> get() = STRINGS.getOrPut(this) {
        val bytes = this.encodeToByteArray()
        val ptr = CPointer<Byte>(malloc(bytes.size + 1).ptr)
        val p = ptr.ptr
        for (n in 0 until bytes.size) sb(p + n, bytes[n])
        sb(p + bytes.size, 0)
        ptr
    }

    val Array<String>.ptr: CPointer<CPointer<Byte>> get() {
        val POINTER_SIZE: Int = 4
        val array = this
        val ptr = CPointer<CPointer<Byte>>(malloc(POINTER_SIZE * array.size).ptr)
        for (n in 0 until array.size) sw(ptr.ptr + n * POINTER_SIZE, array[n].ptr.ptr)
        return ptr
    }

    fun CPointer<Byte>.strlenz(): Int {
        for (n in 0 until Int.MAX_VALUE) if (this[n] == 0.toByte()) return n
        return Int.MAX_VALUE
    }

    fun CPointer<Byte>.readStringz(): String {
        val len = this.strlenz()
        val ba = ByteArray(len)
        var pos = this.ptr
        for (n in 0 until len) ba[n] = lb(pos++)
        return ba.decodeToString()
    }

    fun CPointer<Byte>.writeStringz(str: String) {
        val bytes = str.encodeToByteArray()
        memWrite(this, bytes)
        this[bytes.size] = 0.toByte()
    }

    ///////////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////////
    val FUNCTIONS: ArrayList<kotlin.reflect.KFunction<*>> = arrayListOf<kotlin.reflect.KFunction<*>>()
    val FUNCTION_PTRS: LinkedHashMap<kotlin.reflect.KFunction<*>, Int> = LinkedHashMap<kotlin.reflect.KFunction<*>, Int>()

    val <T> CFunction<T>.func: T get() = (FUNCTIONS[this.ptr] as T)
    val <T : kotlin.reflect.KFunction<*>> T.cfunc: CFunction<T> get() = CFunction<T>(FUNCTION_PTRS.getOrPut(this) { FUNCTIONS.add(this); FUNCTIONS.size - 1 })

    inline operator fun <TR> CFunction<() -> TR>.invoke(): TR = func.invoke()
    inline operator fun <T0, TR> CFunction<(T0) -> TR>.invoke(v0: T0): TR = func.invoke(v0)
    inline operator fun <T0, T1, TR> CFunction<(T0, T1) -> TR>.invoke(v0: T0, v1: T1): TR = func.invoke(v0, v1)
    inline operator fun <T0, T1, T2, TR> CFunction<(T0, T1, T2) -> TR>.invoke(v0: T0, v1: T1, v2: T2): TR = func.invoke(v0, v1, v2)
    inline operator fun <T0, T1, T2, T3, TR> CFunction<(T0, T1, T2, T3) -> TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3): TR = func.invoke(v0, v1, v2, v3)
    inline operator fun <T0, T1, T2, T3, T4, TR> CFunction<(T0, T1, T2, T3, T4) -> TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3, v4: T4): TR = func.invoke(v0, v1, v2, v3, v4)
    inline operator fun <T0, T1, T2, T3, T4, T5, TR> CFunction<(T0, T1, T2, T3, T4, T5) -> TR>.invoke(v0: T0, v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): TR = func.invoke(v0, v1, v2, v3, v4, v5)

    ///////////////////////////////////////
    // TOOLS
    ///////////////////////////////////////
    @OptIn(kotlin.contracts.ExperimentalContracts::class)
    public inline fun block(block: () -> Unit) {
        kotlin.contracts.contract { callsInPlace(block, kotlin.contracts.InvocationKind.EXACTLY_ONCE) }
        return block()
    }
}

@Suppress("UNCHECKED_CAST")
public/*!*/ open class Runtime(REQUESTED_HEAP_SIZE: Int = 0, REQUESTED_STACK_PTR: Int = 0, __syscalls: RuntimeSyscalls = DummyRuntimeSyscalls) : AbstractRuntime(REQUESTED_HEAP_SIZE, REQUESTED_STACK_PTR, __syscalls) {
    private val HEAP = ByteArray(HEAP_SIZE)

    final override fun lb(ptr: Int): Byte = HEAP[ptr]
    final override fun sb(ptr: Int, value: Byte): Unit { HEAP[ptr] = value }

    override fun memset(ptr: CPointer<*>, value: Int, num: Int): CPointer<Unit> {
        this.HEAP.fill(value.toByte(), ptr.ptr, ptr.ptr + num)
        return (ptr as CPointer<Unit>)
    }
    override fun memmove(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
        this.HEAP.copyInto(this.HEAP, dest.ptr, src.ptr, src.ptr + num)
        return dest
    }
    override fun memcpy(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
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

//////////////////////

@kotlin.jvm.JvmInline public/*!*/ value/*!*/ class CPointer<T>(val ptr: Int)
@kotlin.jvm.JvmInline public/*!*/ value/*!*/ class CFunction<T>(val ptr: Int)

@kotlin.jvm.JvmInline public/*!*/ value/*!*/ class FloatPointer(val ptr: Int) {
    operator fun plus(offset: Int): FloatPointer = FloatPointer(this.ptr + offset * 4)
    operator fun minus(other: FloatPointer): Int = (this.ptr - other.ptr) / 4
    operator fun minus(offset: Int): FloatPointer = this + (-offset)
    operator fun inc(): FloatPointer = this + 1
    operator fun dec(): FloatPointer = this - 1
}

@kotlin.jvm.JvmInline public/*!*/ value/*!*/ class IntPointer(val ptr: Int) {
    operator fun plus(offset: Int): IntPointer = IntPointer(this.ptr + offset * 4)
    operator fun minus(other: IntPointer): Int = (this.ptr - other.ptr) / 4
    operator fun minus(offset: Int): IntPointer = this + (-offset)
    operator fun inc(): IntPointer = this + 1
    operator fun dec(): IntPointer = this - 1
}
