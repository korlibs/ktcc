package com.soywiz.ktcc

import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.preprocessor.*
import com.soywiz.ktcc.types.*
import kotlin.test.*

class KotlinGeneratorTest {
    fun generate(cprogram: String): String {
        val parser = cprogram.programParser()
        return Targets.kotlin.generator(parser.program(), parser).generate()
    }

    @Test
    fun decl() {
        val decl = "unsigned char *a, **b;".programParser().declaration() as VarDeclaration
        for (init in decl.initDeclaratorList) {
            val finalType = decl.specifiers.toFinalType(init.declarator)
            println(finalType)
        }
    }

    @Test
    fun demo2() {
        println("#define true() false\n\ntrue\ntrue()".preprocess())
    }
}
