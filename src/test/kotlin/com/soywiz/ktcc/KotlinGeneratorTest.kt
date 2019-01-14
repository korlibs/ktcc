package com.soywiz.ktcc

import com.soywiz.ktcc.gen.*
import org.junit.*

class KotlinGeneratorTest {
    @Test
    fun test() {
        println(KotlinGenerator().generate("""
            int main() {
                int a = 0;
                while (a < 10) {
                    a++;
                }
                return 10;
            }
        """.trimIndent().tokenize().program()))
    }
}