package com.soywiz.ktcc.eval

import org.jetbrains.kotlin.cli.common.arguments.*
import org.jetbrains.kotlin.cli.common.messages.*
import org.jetbrains.kotlin.cli.jvm.*
import org.jetbrains.kotlin.config.*
import java.io.*
import java.net.*
import java.nio.file.*
import javax.script.*
import kotlin.reflect.full.*

private val manager by lazy { ScriptEngineManager() }
private val ktScript by lazy {
    //org.jetbrains.kotlin.script.jsr223.KotlinJsr223JvmLocalScriptEngineFactory().scriptEngine
    manager.getEngineByName("kotlin")
}

actual fun evaluateKotlinRawExpect(ktprogram: String, args: Array<String>): Any? {
    if (ktScript == null) {
        return evaluateKotlinRawExpectJar(ktprogram, args)
    } else {
        return evaluateKotlinRawExpectScript(ktprogram, args)
    }
}

fun evaluateKotlinRawExpectScript(ktprogram: String, args: Array<String>): Any? {
    //val compiler = K2JVMCompiler()
    //compiler.exec(System.err, "")
    //println(ktprogram)

    //return null

    return (ktScript ?: error("Can't find ktScript engine: ${manager.engineFactories.map { it }}")).eval(
        "$ktprogram\nmain((bindings[\"args\"] as Array<String>))".replace("inline/*!*/ class", "data class"),
        SimpleBindings(mutableMapOf<String, Any?>("args" to args))
    )
}

fun evaluateKotlinRawExpectJar(ktprogram: String, args: Array<String>): Any? {
    val inputFolder = Files.createTempDirectory("ktsc").toFile().getAbsolutePath()
    val inputFile = File(inputFolder, "RunJarProgramMain.kt")
    val outputFile = File.createTempFile("ktsc", ".jar")
    val packageResult = Regex("package\\s+([\\w+\\.]+)").find(ktprogram)
    val packageFqname = packageResult?.groupValues?.get(1)?.plus(".") ?: ""
    System.err.println("packageFqname: $packageFqname")
    outputFile.delete()
    //inputFile.writeText(ktprogram)
    //inputFile.writeText("$ktprogram\nfun main() { TODO() }")
    inputFile.writeText(ktprogram)
    JvmCompile.exe(inputFile, outputFile)
    if (!outputFile.exists()) error("Error creating $outputFile")
    System.err.println("inputFile: $inputFile")
    System.err.println("inputSize: ${inputFile.length()}")
    System.err.println("outputFile: $outputFile")
    System.err.println("outputSize: ${outputFile.length()}")
    val initializer = Initializer(outputFile)
    System.err.println("initializer: $initializer")
    val runProgramClass = initializer.loader.loadClass("${packageFqname}RunJarProgramMainKt")
    System.err.println("runProgramClass: $runProgramClass")
    val mainMethods = runProgramClass.methods.filter { it.name == "main" }
    System.err.println("mainMethods=$mainMethods")
    val mainMethod = runProgramClass.getMethod("main", Array<String>::class.java)
    System.err.println("mainMethod=$mainMethod")
    return mainMethod.invoke(null, args)
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
            //skipRuntimeVersionCheck = true
            reportPerf = true
            useIR = true
        }
        //output.deleteOnExit()
        execImpl(
            PrintingMessageCollector(
                System.err,
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
