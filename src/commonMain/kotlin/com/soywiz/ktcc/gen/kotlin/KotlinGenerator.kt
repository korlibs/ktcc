package com.soywiz.ktcc.gen.kotlin

import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.transform.*
import com.soywiz.ktcc.types.*
import com.soywiz.ktcc.util.*
import kotlin.jvm.JvmName

class KotlinGenerator(program: Program, parser: ProgramParser) : BaseGenerator(KotlinTarget, program, parser) {
    //val analyzer = ProgramAnalyzer()
}

object KotlinTarget : BaseTarget("kotlin") {
    override fun createGenerator(program: Program, parser: ProgramParser): BaseGenerator = KotlinGenerator(program, parser)

    val KotlinSupressions = """@Suppress("MemberVisibilityCanBePrivate", "FunctionName", "CanBeVal", "DoubleNegation", "LocalVariableName", "NAME_SHADOWING", "VARIABLE_WITH_REDUNDANT_INITIALIZER", "RemoveRedundantCallsOfConversionMethods", "EXPERIMENTAL_IS_NOT_ENABLED", "RedundantExplicitType", "RemoveExplicitTypeArguments", "RedundantExplicitType", "unused", "UNCHECKED_CAST", "UNUSED_VARIABLE", "UNUSED_PARAMETER", "NOTHING_TO_INLINE", "PropertyName", "ClassName", "USELESS_CAST", "PrivatePropertyName", "CanBeParameter", "UnusedMainParameter")"""

    val Type.valueProp: String get() = when {
        //this is BasePointerType && this.elementType is IntType && !this.elementType.signed -> VALUEU
        else -> VALUE
    }

    val VALUE = "value"
    val VALUEU = "valueu"

    data class KType(val ctype: Type, val name: String, val size: Int, val load: (addr: String) -> String, val store: (addr: String, value: String) -> String, val default: String = "0", val unsigned: Boolean = false) {
        val dummy = if (unsigned) "dummy: $name = $default, unsignedDummy: Unit = Unit" else "dummy: $name = $default"
    }

    data class FuncType(val n: Int) {
        val cname = "CFunction$n"
        val kname = "kotlin.reflect.KFunction$n"
        val targsNR = (0 until n).map { "T$it" }.joinToString(", ")
        val targs = ((0 until n).map { "T$it" } + listOf("TR")).joinToString(", ")
        val vargs = ((0 until n).map { "v$it: T$it" }).joinToString(", ")
        val cargs = ((0 until n).map { "v$it" }).joinToString(", ")
    }

    val funcTypes = (0 until 8).map { FuncType(it) }

    val ktypes = ArrayList<KType>().apply {
        add(KType(Type.CHAR, "Byte", 1, { addr -> "lb($addr)" }, { addr, v -> "sb($addr, $v)" }))
        add(KType(Type.SHORT, "Short", 2, { addr -> "lh($addr)" }, { addr, v -> "sh($addr, $v)" }))
        add(KType(Type.INT, "Int", 4, { addr -> "lw($addr)" }, { addr, v -> "sw($addr, $v)" }))
        add(KType(Type.LONG, "Long", 8, { addr -> "ld($addr)" }, { addr, v -> "sd($addr, $v)" }, default = "0L"))

        add(KType(Type.UCHAR, "UByte", 1, { addr -> "lb($addr).toUByte()" }, { addr, v -> "sb($addr, ($v).toByte())" }, default = "0u", unsigned = true))
        add(KType(Type.USHORT, "UShort", 2, { addr -> "lh($addr).toUShort()" }, { addr, v -> "sh($addr, ($v).toShort())" }, default = "0u", unsigned = true))
        add(KType(Type.UINT, "UInt", 4, { addr -> "lw($addr).toUInt()" }, { addr, v -> "sw($addr, ($v).toInt())" }, default = "0u", unsigned = true))
        add(KType(Type.ULONG, "ULong", 8, { addr -> "ld($addr).toULong()" }, { addr, v -> "sd($addr, ($v).toLong())" }, default = "0uL", unsigned = true))

        add(KType(Type.FLOAT, "Float", 4, { addr -> "Float.fromBits(lw($addr))" }, { addr, v -> "sw($addr, ($v).toBits())" }, default = "0f"))
        add(KType(Type.DOUBLE, "Double", 4, { addr -> "Double.fromBits(ld($addr))" }, { addr, v -> "sd($addr, ($v).toBits())" }, default = "0.0"))
    }.toList()

    val ktypesFromCType = ktypes.associateBy { it.ctype }

    override val runtime: String = buildString {
        appendln("// KTCC RUNTIME ///////////////////////////////////////////////////")
        appendln("/*!!inline*/ class CPointer<T>(val ptr: Int)")

        for (ft in funcTypes) {
            appendln("/*!!inline*/ class ${ft.cname}<${ft.targs}>(val ptr: Int)")
        }

        appendln("")

        appendln(KotlinSupressions)
        appendln("@UseExperimental(ExperimentalUnsignedTypes::class)")
        appendln("open class Runtime(val REQUESTED_HEAP_SIZE: Int = 0) {")

        appendln(/*language=kotlin*/ """
        val Float.Companion.SIZE_BYTES get() = 4
        val Double.Companion.SIZE_BYTES get() = 8

        infix fun UByte.shr(other: Int): UInt = this.toUInt() shr other
        infix fun UByte.shl(other: Int): UInt = this.toUInt() shl other

        val HEAP_SIZE = if (REQUESTED_HEAP_SIZE <= 0) 16 * 1024 * 1024 else REQUESTED_HEAP_SIZE // 16 MB default
        val HEAP: java.nio.ByteBuffer = java.nio.ByteBuffer.allocateDirect(HEAP_SIZE).order(java.nio.ByteOrder.LITTLE_ENDIAN)

        val FUNCTIONS = arrayListOf<kotlin.reflect.KFunction<*>>()

        val POINTER_SIZE = 4

        var STACK_PTR = 512 * 1024 // 0.5 MB
        var HEAP_PTR = STACK_PTR

        fun lb(ptr: Int) = HEAP[ptr]
        fun sb(ptr: Int, value: Byte): Unit = run { HEAP.put(ptr, value) }

        fun lh(ptr: Int): Short = HEAP.getShort(ptr)
        fun sh(ptr: Int, value: Short): Unit = run { HEAP.putShort(ptr, value) }

        fun lw(ptr: Int): Int = HEAP.getInt(ptr)
        fun sw(ptr: Int, value: Int): Unit = run { HEAP.putInt(ptr, value) }

        fun ld(ptr: Int): Long = HEAP.getLong(ptr)
        fun sd(ptr: Int, value: Long): Unit = run { HEAP.putLong(ptr, value) }

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

        // HEAP ALLOC
        fun malloc(size: Int): CPointer<Unit> = CPointer<Unit>(HEAP_PTR.also { HEAP_PTR += size })
        fun free(ptr: CPointer<*>): Unit = Unit // @TODO

        // I/O
        fun putchar(c: Int): Int = c.also { System.out.print(c.toChar()) }

        fun printf(format: CPointer<Byte>, vararg params: Any?) {
            var paramPos = 0
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
        fun memmove(dest: CPointer<Unit>, src: CPointer<Unit>, num: Int): CPointer<Unit> {
            TODO()
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
        for (ktype in ktypes) ktype.apply {
            val valueProp = ctype.ptr().valueProp
            if (ctype.signed) {
                appendln("@JvmName(\"getter$name\") operator fun CPointer<$name>.get(offset: Int): $name = ${load("this.ptr + offset * $size")}")
                appendln("@JvmName(\"setter$name\") operator fun CPointer<$name>.set(offset: Int, value: $name) = ${store("this.ptr + offset * $size", "value")}")
                appendln("@set:JvmName(\"setter_${name}_value\") @get:JvmName(\"getter_${name}_value\") var CPointer<$name>.$valueProp: $name get() = this[0]; set(value): Unit = run { this[0] = value }")
            } else {
                //appendln("@JvmName(\"inc$name\") @InlineOnly inline operator fun CPointer<$name>.inc() = (this + 1)") // @TODO: We might need @InlineOnly?
                appendln("operator fun CPointer<$name>.get(offset: Int): $name = ${load("this.ptr + offset * $size")}")
                appendln("operator fun CPointer<$name>.set(offset: Int, value: $name) = ${store("this.ptr + offset * $size", "value")}")
                appendln("var CPointer<$name>.$valueProp: $name get() = this[0]; set(value): Unit = run { this[0] = value }")
            }
            appendln("@JvmName(\"plus$name\") operator fun CPointer<$name>.plus(offset: Int) = addPtr<$name>(offset, $size)")
            appendln("@JvmName(\"minus$name\") operator fun CPointer<$name>.minus(offset: Int) = addPtr<$name>(-offset, $size)")
            appendln("@JvmName(\"minus${name}Ptr\") operator fun CPointer<$name>.minus(other: CPointer<$name>) = (this.ptr - other.ptr) / $size")
            appendln("fun fixedArrayOf$name(size: Int, vararg values: $name): CPointer<$name> = alloca_zero(size * $size).toCPointer<$name>().also { for (n in 0 until values.size) ${store("it.ptr + n * $size", "values[n]")} }")
            appendln("")
        }
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
}
