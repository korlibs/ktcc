package com.soywiz.ktcc.eval

import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.parser.*

class CKotlinEvaluator(val target: BaseTarget = Targets.kotlin) {
    //private val manager = ScriptEngineManager()
    //private val ktScript = manager.getEngineByName("kotlin")
    val runtime = target.runtime

    fun generateKotlinCodeRaw(cprogram: String): String {
        val parser = cprogram.programParser()
        return target.generator(parser.program(), parser).generate(includeErrorsInSource = true)
    }

    fun generateKotlinCodeWithRuntime(cprogram: String): String = generateKotlinCodeRaw(cprogram) + "\n$runtime"
    fun evaluateC(cprogram: String): Any? = evaluateKotlinWithRuntimeAndMain(generateKotlinCodeRaw(cprogram))
    fun evaluateKotlinWithRuntimeAndMain(ktprogram: String): Any? = evaluateKotlinRaw("$ktprogram\n$runtime")
    fun evaluateKotlinRaw(ktprogram: String): Any? {
        TODO("evaluateKotlinRaw")
        //return ktScript.eval(ktprogram)
    }
}