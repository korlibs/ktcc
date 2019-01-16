val HEAP = ByteArray(16 * 1024) // 16KB

var HEAP_PTR = 4 * 1024
var STACK_PTR = 4 * 1024 // 4 KB

// @TODO: Kotlin-Script: Exception in thread "main" javax.script.ScriptException: error: inline classes are only allowed on top level
//inline class CPointer<T>(val ptr: Int)

class CPointer<T>(val ptr: Int)

fun putc(c: Int) = System.out.print(c.toChar())
fun malloc(size: Int): CPointer<Unit> = CPointer<Unit>(HEAP_PTR.also { HEAP_PTR += size })
fun alloca(size: Int): CPointer<Unit> = CPointer<Unit>((STACK_PTR - size).also { STACK_PTR -= size })

inline fun <T> stackFrame(callback: () -> T): T {
    val oldPos = STACK_PTR
    return try { callback() } finally { STACK_PTR = oldPos }
}

