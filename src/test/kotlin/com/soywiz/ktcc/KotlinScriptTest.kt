package com.soywiz.ktcc

import com.soywiz.ktcc.gen.*
import javax.script.*
import kotlin.test.*

class KotlinScriptTest {
    companion object {
        val manager = ScriptEngineManager()
    }

    private fun evaluateCCode(cprogram: String): Any? {
        val ktprogram = KotlinGenerator().generate(cprogram.programParser().program())
        val ktScript = manager.getEngineByName("kotlin")
        return ktScript.eval("$ktprogram\nmain()")
    }

    @Test
    fun test() {
        assertEquals(3, evaluateCCode("""
            int main() {
                return 1 + 2;
            }
        """))
    }
}