package com.soywiz.ktcc.eval

import com.soywiz.ktcc.gen.*
import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.preprocessor.*

class CKotlinEvaluator(val target: BaseTarget = Targets.kotlin) {
    fun generateKotlinCodeRaw(cprogram: String, info: PreprocessorInfo = PreprocessorInfo()): String {
        val parser = cprogram.programParser()
        return target.generator(parser.program(), parser, info).generate(includeErrorsInSource = true, includeRuntime = info.runtime)
    }

    fun generateKotlinCodeWithRuntime(cprogram: String, info: PreprocessorInfo = PreprocessorInfo()): String = generateKotlinCodeRaw(cprogram, info)
    fun evaluateC(cprogram: String, args: Array<String>, info: PreprocessorInfo = PreprocessorInfo()): Any? = evaluateKotlinWithRuntimeAndMain(generateKotlinCodeRaw(cprogram, info), args)
    fun evaluateKotlinWithRuntimeAndMain(ktprogram: String, args: Array<String>): Any? = evaluateKotlinRaw(ktprogram, args)
    fun evaluateKotlinRaw(ktprogram: String, args: Array<String>): Any? = evaluateKotlinRawExpect(ktprogram, args)
}

expect fun evaluateKotlinRawExpect(ktprogram: String, args: Array<String>): Any?
