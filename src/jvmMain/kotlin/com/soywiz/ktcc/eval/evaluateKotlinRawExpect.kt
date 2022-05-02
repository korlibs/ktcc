package com.soywiz.ktcc.eval

import org.jetbrains.kotlin.cli.common.arguments.*
import org.jetbrains.kotlin.cli.common.messages.*
import org.jetbrains.kotlin.cli.jvm.*
import org.jetbrains.kotlin.config.*
import org.jetbrains.kotlin.utils.addToStdlib.*
import java.io.*
import java.net.*
import java.nio.file.*
import javax.script.*
import kotlin.reflect.full.*
import kotlin.system.*
import kotlin.time.*

private val manager by lazy { ScriptEngineManager() }
private val ktScript by lazy {
    //org.jetbrains.kotlin.script.jsr223.KotlinJsr223JvmLocalScriptEngineFactory().scriptEngine
    manager.getEngineByName("kotlin")
}

actual fun evaluateKotlinRawExpect(ktprogram: String, args: Array<String>, tempName: String?): Any? {
    if (ktScript == null) {
        return evaluateKotlinRawExpectJar(ktprogram, args, tempName)
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
        "$ktprogram\nmain((bindings[\"args\"] as Array<String>))".replace("@kotlin.jvm.JvmInline value/*!*/ class", "data class"),
        SimpleBindings(mutableMapOf<String, Any?>("args" to args))
    )
}

fun evaluateKotlinRawExpectJar(ktprogram: String, args: Array<String>, tempName: String?): Any? {
    val tmpDir = System.getProperty("java.io.tmpdir")
    val inputFolder = File(File(tmpDir, "ktcc"), tempName ?: "${System.currentTimeMillis()}.${Thread.currentThread().id}").also { it.mkdirs() }

    val inputFile = File(inputFolder, "RunJarProgramMain.kt")
    val outputFile = File(inputFolder, "Program.jar")
    val packageResult = Regex("package\\s+([\\w+\\.]+)").find(ktprogram)
    val packageFqname = packageResult?.groupValues?.get(1)?.plus(".") ?: ""
    System.err.println("packageFqname: $packageFqname")
    outputFile.delete()
    //inputFile.writeText(ktprogram)
    //inputFile.writeText("$ktprogram\nfun main() { TODO() }")
    inputFile.writeText(ktprogram)
    val timeMillis = measureTimeMillis {
        JvmCompile.exe(inputFile, outputFile)
    }
    if (!outputFile.exists()) error("Error creating $outputFile")
    System.err.println("Compiled in: ${timeMillis}ms")
    System.err.println("inputSize: ${inputFile.length()}, inputFile: $inputFile")
    System.err.println("outputSize: ${outputFile.length()}, outputFile: $outputFile")
    val initializer = Initializer(outputFile)
    //System.err.println("initializer: $initializer")
    val runProgramClass = initializer.loader.loadClass("${packageFqname}RunJarProgramMainKt")
    System.err.println("runProgramClass: $runProgramClass")
    val mainMethods = runProgramClass.methods.filter { it.name == "main" }
    System.err.println("mainMethods=$mainMethods")
    val mainMethod = runProgramClass.getMethod("main", Array<String>::class.java)
    System.err.println("mainMethod=$mainMethod")
    val (runTimeMillis, result) = measureTimeMillisWithResult {
        mainMethod.invoke(null, args)
    }
    System.err.println("Run in: ${runTimeMillis}ms")
    return result
}

object JvmCompile {

    fun exe(input: File, output: File): Boolean = K2JVMCompiler().run {
        val args = K2JVMCompilerArguments().apply {
            freeArgs = listOf(input.absolutePath)
            optIn = arrayOf("kotlin.RequiresOptIn")
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
