package com.soywiz.ktcc

import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.parser.parsedProgram
import com.soywiz.ktcc.parser.programParser
import com.soywiz.ktcc.preprocessor.*
import org.junit.Test
import java.io.File
import kotlin.test.assertEquals

class FileGeneratorTest : FileGeneratorTestBase() {
    @Test fun string() = testFileBased("string")
    @Test fun string_c() = testFileBased("string", Targets.c)
    @Test fun string2() = testFileBased("string2")
    @Test fun cast() = testFileBased("cast")
    @Test fun struct() = testFileBased("struct")
    @Test fun struct2() = testFileBased("struct2")
    @Test fun typedef2() = testFileBased("typedef2")
    @Test fun test() = testFileBased("test")
    @Test fun test3() = testFileBased("test3")
    @Test fun arrayLiterals() = testFileBased("arrayLiterals")
    @Test fun structWithArray() = testFileBased("structWithArray")
    @Test fun nestedStruct() = testFileBased("nestedStruct")
    @Test fun structWithUnion() = testFileBased("structWithUnion")
    @Test fun fixedArraySize() = testFileBased("fixedArraySize")
    @Test fun mixed() = testFileBased("mixed")
    @Test fun hexliterals() = testFileBased("hexliterals")
    @Test fun staticConstLiteralInFunction() = testFileBased("staticConstLiteralInFunction")
    @Test fun bug0() = testFileBased("bug0")
    @Test fun bug1() = testFileBased("bug1")
    @Test fun bug2() = testFileBased("bug2")
    @Test fun bug2a() = testFileBased("bug2a")
    @Test fun bug3() = testFileBased("bug3")
    @Test fun bug4() = testFileBased("bug4")
    @Test fun bug5() = testFileBased("bug5")
    @Test fun bug6() = testFileBased("bug6")
    @Test fun demo() = testFileBased("demo")
}

abstract class FileGeneratorTestBase {
    fun generate(cprogram: String, target: BaseTarget, info: PreprocessorInfo = PreprocessorInfo()): String {
        val parser = cprogram.programParser()
        return target.generator(parser.parsedProgram(info)).generate()
    }

    fun resourceFile(name: String) = File("src/jvmTest/resources/$name")

    fun readTextResource(name: String): String {
        return FileGeneratorTest::class.java.getResource(name)?.readText()
            ?: resourceFile(name).takeIf { it.exists() }?.readText()
            ?: ""
            //?: error("Can't find resource '$name'")
    }

    fun String.normalizeFileString() = this.trim().replace("\t", "    ").lines().map { it.trimEnd() }.joinToString("\n")

    fun testFileBased(name: String, target: BaseTarget = Targets.kotlin) {
        val sourceName = "$name.c"
        val expectName = "$name.c.${target.ext}.expect"

        val ccode = readTextResource(sourceName)
        val generatedKtCode = generate(ccode, target)

        val expectedKtCode = readTextResource(expectName)
        if (UPDATE) {
            resourceFile(expectName).writeText(generatedKtCode)
        }

        assertEquals(
            expectedKtCode.normalizeFileString(),
            generatedKtCode.normalizeFileString(),
            "Not matching generated kotlin code for $name.c :: \n$ccode"
        )
    }

    var UPDATE = false // @NOTE: Execute UpdateFileGeneratorTest.main to set this to true
}
