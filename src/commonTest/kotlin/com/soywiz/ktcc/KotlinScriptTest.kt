package com.soywiz.ktcc

import com.soywiz.ktcc.eval.*
import kotlin.test.*

class KotlinScriptTest {
    companion object {
        val kotlinEval = CKotlinEvaluator()
    }

    private fun evaluateCCode(cprogram: String): Any? = kotlinEval.evaluateC(cprogram)

    @Test
    @Ignore
    fun test() {
        assertEquals(3, evaluateCCode("""
            int main() {
                return 1 + 2;
            }
        """))
    }
}