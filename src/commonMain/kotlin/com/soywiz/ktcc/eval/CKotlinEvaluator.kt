package com.soywiz.ktcc.eval

import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.preprocessor.*

class CKotlinEvaluator(val target: BaseTarget = Targets.kotlin) {
    //private val manager = ScriptEngineManager()
    //private val ktScript = manager.getEngineByName("kotlin")

    fun generateKotlinCodeRaw(cprogram: String, info: PreprocessorInfo = PreprocessorInfo()): String {
        val parser = cprogram.programParser()
        return target.generator(parser.program(), parser, info).generate(includeErrorsInSource = true)
    }

    fun generateKotlinCodeWithRuntime(cprogram: String, info: PreprocessorInfo = PreprocessorInfo()): String = generateKotlinCodeRaw(cprogram, info) + "\n${target.runtime}"
    fun evaluateC(cprogram: String, info: PreprocessorInfo = PreprocessorInfo()): Any? = evaluateKotlinWithRuntimeAndMain(generateKotlinCodeRaw(cprogram, info))
    fun evaluateKotlinWithRuntimeAndMain(ktprogram: String): Any? = evaluateKotlinRaw("$ktprogram\n${target.runtime}")
    fun evaluateKotlinRaw(ktprogram: String): Any? {
        TODO("evaluateKotlinRaw")
        //return ktScript.eval(ktprogram)
    }
}