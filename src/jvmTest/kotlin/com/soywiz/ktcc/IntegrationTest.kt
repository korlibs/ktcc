package com.soywiz.ktcc

import com.soywiz.ktcc.cli.*
import com.soywiz.ktcc.compiler.*
import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.util.*
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
            compareCAndKotlinExecution("samples/mp3dec_trace.c", "samples/mp31.mp3", "samples/mp31.c.pcm")
        //}
    }

    @Test
    fun testProgram() {
        compareCAndKotlinExecution("samples/helloworld.c")
    }

    @Test
    fun testProgram2() {
        compareCAndKotlinExecution("samples/helloworld.c")
    }

    @Test
    fun testSimple() {
        compareCAndKotlinExecution("samples/simple.c")
    }

    fun compareCAndKotlinExecution(cFile: String, vararg args: String) {
        val resultGccCompilation = Runtime.getRuntime().exec(arrayOf("gcc", cFile, "-o", "temp.exe")).inputStream.reader().readText()
        val resultC = Runtime.getRuntime().exec(arrayOf("./temp.exe", *args)).inputStream.reader().readText()
        val resultKt = captureStdout { CLI.main(arrayOf(cFile, "--subtarget=jvm", "-e", *args)) }.first
        org.junit.Assert.assertArrayEquals(resultC.lines().toTypedArray(), resultKt.lines().toTypedArray())
        //assertEquals(resultC.lines(), resultKt.lines())
    }

    fun process1(path: String, ffile: String) {
        val target = Targets.kotlin
        val folder = File(path)
        val file = File(folder, ffile)
        val pout = CCompiler.preprocess(sourceFiles = listOf(file.absolutePath), includeFolders = listOf(folder.absolutePath))
        val generatedKtCode = generate(pout.code, target)
    }
}