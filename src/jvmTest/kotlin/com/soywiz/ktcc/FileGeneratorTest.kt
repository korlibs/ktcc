package com.soywiz.ktcc

import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.parser.parsedProgram
import com.soywiz.ktcc.parser.programParser
import com.soywiz.ktcc.preprocessor.*
import org.junit.*
import java.io.File
import kotlin.test.assertEquals

class FileGeneratorTest : FileGeneratorTestBase() {
    @Ignore @Test fun string() = testFileBased("string")
    @Ignore @Test fun string_c() = testFileBased("string", Targets.c)
    @Ignore @Test fun string2() = testFileBased("string2")
    @Ignore @Test fun cast() = testFileBased("cast")
    @Ignore @Test fun struct() = testFileBased("struct")
    @Ignore @Test fun struct2() = testFileBased("struct2")
    @Ignore @Test fun typedef2() = testFileBased("typedef2")
    @Ignore @Test fun test() = testFileBased("test")
    @Ignore @Test fun test3() = testFileBased("test3")
    @Ignore @Test fun arrayLiterals() = testFileBased("arrayLiterals")
    @Ignore @Test fun structWithArray() = testFileBased("structWithArray")
    @Ignore @Test fun nestedStruct() = testFileBased("nestedStruct")
    @Ignore @Test fun structWithUnion() = testFileBased("structWithUnion")
    @Ignore @Test fun fixedArraySize() = testFileBased("fixedArraySize")
    @Ignore @Test fun mixed() = testFileBased("mixed")
    @Ignore @Test fun hexliterals() = testFileBased("hexliterals")
    @Ignore @Test fun staticConstLiteralInFunction() = testFileBased("staticConstLiteralInFunction")
    @Ignore @Test fun bug0() = testFileBased("bug0")
    @Ignore @Test fun bug1() = testFileBased("bug1")
    @Ignore @Test fun bug2() = testFileBased("bug2")
    @Ignore @Test fun bug2a() = testFileBased("bug2a")
    @Ignore @Test fun bug3() = testFileBased("bug3")
    @Ignore @Test fun bug4() = testFileBased("bug4")
    @Ignore @Test fun bug5() = testFileBased("bug5")
    @Ignore @Test fun bug6() = testFileBased("bug6")
    @Ignore @Test fun demo() = testFileBased("demo")
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
