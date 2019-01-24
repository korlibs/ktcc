package com.soywiz.ktcc.eval

import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.runtime.RuntimeCode

class CKotlinEvaluator {
    //private val manager = ScriptEngineManager()
    //private val ktScript = manager.getEngineByName("kotlin")
    val runtime = RuntimeCode

    fun generateKotlinCodeRaw(cprogram: String): String = KotlinGenerator().generate(cprogram.programParser().program(), includeErrorsInSource = true)
    fun generateKotlinCodeWithRuntime(cprogram: String): String = generateKotlinCodeRaw(cprogram) + "\n$runtime"
    fun evaluateC(cprogram: String): Any? = evaluateKotlinWithRuntimeAndMain(generateKotlinCodeRaw(cprogram))
    fun evaluateKotlinWithRuntimeAndMain(ktprogram: String): Any? = evaluateKotlinRaw("$ktprogram\n$runtime")
    fun evaluateKotlinRaw(ktprogram: String): Any? {
        TODO()
        //return ktScript.eval(ktprogram)
    }
}