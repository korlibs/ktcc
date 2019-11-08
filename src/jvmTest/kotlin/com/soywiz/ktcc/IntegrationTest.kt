package com.soywiz.ktcc

import com.soywiz.ktcc.compiler.*
import com.soywiz.ktcc.eval.*
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
        process1("samples", "mp3dec.c")
    }

    @Test
    fun testProgram() {
        val (stdout, result) = captureStdout {
             CKotlinEvaluator().preprocessAndEvaluateC("""
                #include <stdio.h>
                #include <stdlib.h>
                
                int main() {
                    void *ptr = malloc(1024);
                    {
                        sprintf(ptr, "HELLO WORLD %d", 2019);
                        printf("YAY! %s\n", ptr);
                    }
                    free(ptr);
                    return 0;
                }
            """.trimIndent(), arrayOf())
        }
        assertEquals("YAY! HELLO WORLD 2019", stdout.trim())
        println("stdout: $stdout, result: $result")
    }

    fun process1(path: String, ffile: String) {
        val target = Targets.kotlin
        val folder = File(path)
        val file = File(folder, ffile)
        val pout = CCompiler.preprocess(sourceFiles = listOf(file.absolutePath), includeFolders = listOf(folder.absolutePath))
        val generatedKtCode = generate(pout.code, target)

    }
}