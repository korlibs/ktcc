package com.soywiz.ktcc.eval

import org.jetbrains.kotlin.cli.common.arguments.*
import org.jetbrains.kotlin.cli.common.messages.*
import org.jetbrains.kotlin.cli.jvm.*
import org.jetbrains.kotlin.config.*
import java.io.*
import java.net.*
import javax.script.*
import kotlin.reflect.full.*

private val manager by lazy { ScriptEngineManager() }
private val ktScript by lazy { manager.getEngineByName("kotlin") }

actual fun evaluateKotlinRawExpect(ktprogram: String, args: Array<String>): Any? {
    return evaluateKotlinRawExpectScript(ktprogram, args)
    //return evaluateKotlinRawExpectJar(ktprogram, args)
}

fun evaluateKotlinRawExpectScript(ktprogram: String, args: Array<String>): Any? {
    //val compiler = K2JVMCompiler()
    //compiler.exec(System.err, "")
    //println(ktprogram)

    //return null
    return ktScript.eval(
        "$ktprogram\nmain((bindings[\"args\"] as Array<String>))".replace("inline/*!*/ class", "data class"),
        SimpleBindings(mutableMapOf<String, Any?>("args" to args))
    )
}

fun evaluateKotlinRawExpectJar(ktprogram: String, args: Array<String>): Any? {
    val inputFile = File.createTempFile("ktsc", ".kt")
    val outputFile = File.createTempFile("ktsc", ".jar")
    outputFile.delete()
    //inputFile.writeText(ktprogram)
    inputFile.writeText("$ktprogram\nobject RunProgram { @JmvStatic fun main(args: Array<String>) { TODO() } }")
    JvmCompile.exe(inputFile, outputFile)
    println("outputFile: $outputFile")
    val initializer = Initializer(outputFile)
    println("initializer: $initializer")
    val runProgramClass = initializer.loader.loadClass("RunProgram")
    println("runProgramClass: $runProgramClass")
    TODO()
}

object JvmCompile {

    fun exe(input: File, output: File): Boolean = K2JVMCompiler().run {
        val args = K2JVMCompilerArguments().apply {
            freeArgs = listOf(input.absolutePath)
            //loadBuiltInsFromDependencies = true
            destination = output.absolutePath
            classpath = System.getProperty("java.class.path")
                .split(System.getProperty("path.separator"))
                .filter {
                    File(it).exists() && File(it).canRead()
                }.joinToString(":")
            noStdlib = true
            noReflect = true
            skipRuntimeVersionCheck = true
            reportPerf = true
        }
        output.deleteOnExit()
        execImpl(
            PrintingMessageCollector(
                System.out,
                MessageRenderer.WITHOUT_PATHS, true
            ),
            Services.EMPTY,
            args
        )
    }.code == 0
}

class Initializer(private val root: File) {

    val loader = URLClassLoader(
        listOf(root.toURI().toURL()).toTypedArray(),
        this::class.java.classLoader
    )

    @Suppress("UNCHECKED_CAST")
    inline fun <reified T> loadCompiledObject(clazzName: String): T? = loader.loadClass(clazzName).kotlin.objectInstance as T

    @Suppress("UNCHECKED_CAST")
    inline fun <reified T> createInstance(clazzName: String): T? = loader.loadClass(clazzName).kotlin.createInstance() as T
}
