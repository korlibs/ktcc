package com.soywiz.ktcc.util

fun IntArray.binarySearch(v: Int, fromIndex: Int = 0, toIndex: Int = size): BSearchResult = BSearchResult(genericBinarySearch(fromIndex, toIndex) { this[it].compareTo(v) })

fun FloatArray.binarySearch(v: Float, fromIndex: Int = 0, toIndex: Int = size): BSearchResult = BSearchResult(genericBinarySearch(fromIndex, toIndex) { this[it].compareTo(v) })
fun DoubleArray.binarySearch(v: Double, fromIndex: Int = 0, toIndex: Int = size): BSearchResult = BSearchResult(genericBinarySearch(fromIndex, toIndex) { this[it].compareTo(v) })

inline fun genericBinarySearch(
        fromIndex: Int,
        toIndex: Int,
        invalid: (from: Int, to: Int, low: Int, high: Int) -> Int = { from, to, low, high -> -low - 1 },
        check: (value: Int) -> Int
): Int {
    var low = fromIndex
    var high = toIndex - 1

    while (low <= high) {
        val mid = (low + high) / 2
        val mval = check(mid)

        when {
            mval < 0 -> low = mid + 1
            mval > 0 -> high = mid - 1
            else -> return mid
        }
    }
    return invalid(fromIndex, toIndex, low, high)
}

inline class BSearchResult(val raw: Int) {
    val found: Boolean get() = raw >= 0
    val index: Int get() = if (found) raw else -1
    val nearIndex: Int get() = if (found) raw else -raw - 1
}
