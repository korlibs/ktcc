# ktcc

A C Compiler written in Multiplatform Kotlin (JVM, JS and Native).

[![Actions Status](https://github.com/soywiz/ktcc/workflows/Java%20CI/badge.svg)](https://github.com/soywiz/ktcc/actions)


## [Online live editor](https://soywiz.github.io/ktcc/) ([Video](https://youtu.be/r-yeEjJ0Ld0))

It aims to generate Kotlin and potentially other targets from ANSI C code.

Use cases:

* Compile C libraries into multiplatform Kotlin projects (that works on the JVM, JS and Native)
* Convert C libraries into logical Kotlin code that can be modified

Using:

* Provided as JVM library and CLI tool.
* Provided as native executable (linux, mac and windows).
* Provided as [docker image](https://cloud.docker.com/repository/docker/soywiz/ktcc/) with the compiler native executable. Just run latest uploaded version with: `docker run --rm "-v$PWD:/data" soywiz/ktcc $*`
* Provided as JavaScript library and [pure client-side online service](https://soywiz.github.io/ktcc/). It autocompletes and generates Kotlin code on the fly on your browser.

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

Cross-compile the compiler native executable for windows or linux in a mac machine (requires docker):

```kotlin
./gradlew_linux linkReleaseExecutableLinuxX64 # linux
./gradlew_win linkReleaseExecutableMingwX64   # windows
```

Compile the docker image:

```kotlin
./build_docker_image.sh
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
