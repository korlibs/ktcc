package com.soywiz.ktcc

import com.soywiz.ktcc.cli.*
import com.soywiz.ktcc.compiler.*
import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.util.*
import org.jetbrains.kotlin.utils.addToStdlib.*
import java.io.*
import kotlin.test.*

class IntegrationTest : FileGeneratorTestBase() {
    @Test
    @Ignore
    fun testStbVorbis() {
        process1("samples/stb_vorbis", "stb_vorbis.c")
    }

    @Test
    fun testStbImage() {
        process1("samples/stb_image", "stb_image.h")
    }

    @Test
    fun testMiniMp3() {
        //process1("samples", "mp3dec.c")
        //while (true) {
            compareCAndKotlinExecution("samples/mp3dec_trace.c", "samples/mp31.mp3", "samples/mp31.c.pcm", tempname = "minimp3")
        //}
    }

    @Test
    fun testProgram() {
        compareCAndKotlinExecution("samples/helloworld.c", tempname = "program")
    }

    @Test
    fun testProgram2() {
        compareCAndKotlinExecution("samples/helloworld.c", tempname = "program2")
    }

    @Test
    fun testSimple() {
        compareCAndKotlinExecution("samples/simple.c", tempname = "simple")
    }

    fun compareCAndKotlinExecution(cFile: String, vararg args: String, tempname: String = "") {
        val exeFile = File("temp.exe")
        exeFile.delete()
        //val result = captureStdoutStderr {
        val (gccTimeMillis, gccResult) = measureTimeMillisWithResult {
            runProcess("gcc", cFile, "-o", exeFile.absolutePath)
        }
        if (gccResult.result != 0) {
            error("Error compiling generated C file: ${gccResult.stdoutStderr}")
        }
        System.err.println("GCC: ${gccTimeMillis}ms")

        //val resultC = Runtime.getRuntime().exec(arrayOf("./temp.exe", *args)).inputStream.reader().readText()
        val (cTimeMillis, resultC) = measureTimeMillisWithResult {
            runProcess(exeFile.absolutePath, *args).stdout
        }
        System.err.println("Run C in: ${cTimeMillis}ms")
        val resultKt = captureStdout { CLI.main(arrayOf(cFile, "--tempname=${tempname}", "--subtarget=jvm", "-e", *args)) }.first
        org.junit.Assert.assertArrayEquals(resultC.lines().toTypedArray(), resultKt.lines().toTypedArray())
        //assertEquals(resultC.lines().joinToString("\n"), resultKt.lines().joinToString("\n"))
    }

    fun process1(path: String, ffile: String) {
        val target = Targets.kotlin
        val folder = File(path)
        val file = File(folder, ffile)
        val pout = CCompiler.preprocess(sourceFiles = listOf(file.absolutePath), includeFolders = listOf(folder.absolutePath))
        val generatedKtCode = generate(pout.code, target)
    }
}