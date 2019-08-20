package com.soywiz.ktcc.eval

import com.soywiz.ktcc.gen.kotlin.*
import com.soywiz.ktcc.parser.*

class CKotlinEvaluator {
    //private val manager = ScriptEngineManager()
    //private val ktScript = manager.getEngineByName("kotlin")
    val runtime = KotlinTarget.runtime

    fun generateKotlinCodeRaw(cprogram: String): String {
        val parser = cprogram.programParser()
        return KotlinGenerator(parser.program(), parser).generate(includeErrorsInSource = true)
    }
    fun generateKotlinCodeWithRuntime(cprogram: String): String = generateKotlinCodeRaw(cprogram) + "\n$runtime"
    fun evaluateC(cprogram: String): Any? = evaluateKotlinWithRuntimeAndMain(generateKotlinCodeRaw(cprogram))
    fun evaluateKotlinWithRuntimeAndMain(ktprogram: String): Any? = evaluateKotlinRaw("$ktprogram\n$runtime")
    fun evaluateKotlinRaw(ktprogram: String): Any? {
        TODO("evaluateKotlinRaw")
        //return ktScript.eval(ktprogram)
    }
}