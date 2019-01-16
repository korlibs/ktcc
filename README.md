# ktcc

A C Compiler written in Kotlin.

It aims to generate Kotlin and potentially other targets from ANSI C code.
It allows to execute the compiled code with the `-e`

CLI usage:

```kotlin
./gradlew fatJar
java -jar build/libs/ktcc-all.jar samples/simple.c      # outputs the kotlin code
java -jar build/libs/ktcc-all.jar -e samples/simple.c   # compiles C into kotlin and executes the kotlin generated code using kotlin-script
```