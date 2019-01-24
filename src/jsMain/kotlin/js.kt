fun jsObject(vararg pairs: Pair<dynamic, dynamic>): dynamic {
    val obj = js("({})")
    for ((k, v) in pairs) obj[k] = v
    return obj
}
