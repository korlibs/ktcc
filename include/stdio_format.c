void __ensure_kotlin_format__() {
__kotlin__global__non__jvm__(`
fun toStringDecimal(res: String, decimalPlaces: Int, skipTrailingZeros: Boolean = false): String {
	val eup = res.indexOf('E')
	val elo = res.indexOf('e')
    val eIndex = if (eup >= 0) eup else elo
	val rez = if (eIndex >= 0) {
        val base = res.substring(0, eIndex)
        val exp = res.substring(eIndex + 1).toInt()
        val rbase = if (base.contains(".")) base else "$base.0"
        val zeros = "0".repeat(kotlin.math.abs(exp) + 2)
		val part = if (exp > 0) "$rbase$zeros" else "$zeros$rbase"
		val pointIndex2 = part.indexOf(".")
        val pointIndex = if (pointIndex2 < 0) part.length else pointIndex2
		val outIndex = pointIndex + exp
		val part2 = part.replace(".", "")
        buildString {
            if ((0 until outIndex).all { part2[it] == '0' }) {
                append('0')
            } else {
                append(part2, 0, outIndex)
            }
            append('.')
            append(part2, outIndex, part2.length)
        }
	} else {
		res
	}

    val pointIndex = rez.indexOf('.')
	val integral = if (pointIndex >= 0) rez.substring(0, pointIndex) else rez
    if (decimalPlaces == 0) return integral

	val decimal = if (pointIndex >= 0) rez.substring(pointIndex + 1).trimEnd('0') else ""
    return buildString(2 + integral.length + decimalPlaces) {
        append(integral)
        if (decimal.isNotEmpty() || !skipTrailingZeros) {
            append('.')
            val decimalCount = kotlin.math.min(decimal.length, decimalPlaces)
            append(decimal, 0, decimalCount)
            if (!skipTrailingZeros) repeat(decimalPlaces - decimalCount) { append('0') }
        }
    }
}

fun Double.toStringDecimal(decimalPlaces: Int, skipTrailingZeros: Boolean = false): String {
    if (this.isNaN()) return "nan"
    if (this.isInfinite()) return if (this < 0.0) "-inf" else "inf"
    return toStringDecimal(this.toString(), decimalPlaces, skipTrailingZeros)
}
fun Float.toStringDecimal(decimalPlaces: Int, skipTrailingZeros: Boolean = false): String {
    if (this.isNaN()) return "nan"
    if (this.isInfinite()) return if (this < 0.0) "-inf" else "inf"
    return toStringDecimal(this.toString(), decimalPlaces, skipTrailingZeros)
}
`);

__kotlin__global__jvm__(`
fun Double.toStringDecimal(decimalPlaces: Int, skipTrailingZeros: Boolean = false): String = "%f".format(this.toFloat())
fun Float.toStringDecimal(decimalPlaces: Int, skipTrailingZeros: Boolean = false): String = "%f".format(this.toFloat())
`);

__kotlin__global__(`
private fun _format(format: CPointer<Byte>, vararg params: Any?, appendable: Appendable = StringBuilder()): Appendable {
    return _format(format.readStringz(), *params, appendable = appendable)
}

private fun _formatF(value: Number): String = value.toDouble().toStringDecimal(6)
private fun _formatE(value: Number): String = "$value"
private fun _formatG(value: Number): String = "$value"
private fun _formatA(value: Number): String = "$value"

// http://www.cplusplus.com/reference/cstdio/printf/
fun _format(fmt: String, vararg params: Any?, appendable: Appendable = StringBuilder()): Appendable {
    var paramPos = 0
    var n = 0

    fun String.toCase(upper: Boolean): String = if (upper) this.uppercase() else this.lowercase()
    fun readParam(): Any? = params.getOrNull(paramPos++)
    fun readParamI(): Int {
        val v = readParam()
        return when (v) {
            null -> 0
            is Boolean -> v.toInt()
            is Char -> v.code
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
            is Char -> "$v"
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

`);
}

// 	fun printf(fmt: CPointer<Byte>, vararg __VA__: Any?): Unit {
void printf(char *fmt, ...) {
    __ensure_kotlin_format__();
    __kotlin__(`print(_format(fmt, *__VA__).toString());`);
}

// 	fun sprintf(out: CPointer<Byte>, fmt: CPointer<Byte>, vararg __VA__: Any?): Unit {
void sprintf(char *out, char *fmt, ...) {
    __ensure_kotlin_format__();
    __kotlin__(`out.writeStringz(_format(fmt, *__VA__).toString())`);
}
