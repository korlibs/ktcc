# ktcc

A C Compiler written in Multiplatform Kotlin (JVM, JS and Native).

## [Live demo online](https://soywiz.github.io/ktcc/)

It aims to generate Kotlin and potentially other targets from ANSI C code.
It allows to execute the compiled code with the `-e`

CLI usage:

```kotlin
./gradlew fatJar
java -jar build/libs/ktcc-all.jar samples/simple.c      # outputs the kotlin code
```

Compile the c compiler with kotlin-native as a executable without dependencies:

```kotlin
./gradlew linkRelease
./build/bin/macosX64/main/release/executable/ktcc.kexe samples/simple.c
```

## Ideas

### Handling structs with inline classes

While keeping the code using structures sane.

```kotlin
fun alloca(size: Int): CPointer<Unit> = CPointer<Unit>((STACK_PTR - size).also { STACK_PTR -= size })

inline fun <T> stackFrame(callback: () -> T): T {
    val oldPos = STACK_PTR
    return try { callback() } finally { STACK_PTR = oldPos }
}

inline class MyStruct2(val ptr: Int) {
    companion object {
        val SIZEOF = 4
        val OFFSET_a = 0
    }
    var a: Int get() = lw(ptr + OFFSET_a); set(value) = run { sw(ptr + OFFSET_a, value) }
}

inline class MyStruct(val ptr: Int) {
    companion object {
        val SIZEOF = 12
        val OFFSET_a = 0
        val OFFSET_b = 4
        val OFFSET_c = 8
    }
    var a: Int get() = lw(ptr + OFFSET_a); set(value) = run { sw(ptr + OFFSET_a, value) }
    var b: MyStruct2 get() = MyStruct2(lw(ptr + OFFSET_b)); set(value) = run { sw(ptr + OFFSET_b, value.ptr) } // Pointer to MyStruct2
    val c: MyStruct2 get() = MyStruct2(ptr + OFFSET_c); set(value) = run { /* memcpy */ }
}

/////////////

fun test() = stackFrame {
    val ms = MyStruct(alloca(MyStruct.SIZEOF)) 
    ms.b = MyStruct2(10)
    ms.b.a = 10
}
```