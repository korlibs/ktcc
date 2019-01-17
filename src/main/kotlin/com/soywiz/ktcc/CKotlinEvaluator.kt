package com.soywiz.ktcc

import com.soywiz.ktcc.gen.*
import javax.script.*

class CKotlinEvaluator {
    private val manager = ScriptEngineManager()
    private val ktScript = manager.getEngineByName("kotlin")
    val runtime by lazy { CKotlinEvaluator::class.java.getResource("/ktcc/runtime.kt").readText() }

    fun generateKotlinCodeRaw(cprogram: String): String = KotlinGenerator().generate(cprogram.programParser().program())
    fun generateKotlinCodeWithRuntime(cprogram: String): String = "$runtime\n" + generateKotlinCodeRaw(cprogram) + "\nmain()"
    fun evaluateC(cprogram: String): Any? = evaluateKotlinWithRuntimeAndMain(generateKotlinCodeRaw(cprogram))
    fun evaluateKotlinRaw(ktprogram: String): Any? = ktScript.eval(ktprogram)
    fun evaluateKotlinWithRuntimeAndMain(ktprogram: String): Any? = evaluateKotlinRaw("$runtime\n$ktprogram\nmain()")
}