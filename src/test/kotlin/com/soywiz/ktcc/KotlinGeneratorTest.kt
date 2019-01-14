package com.soywiz.ktcc

import com.soywiz.ktcc.gen.*
import org.junit.*

class KotlinGeneratorTest {
    @Test
    fun test() {
        println(KotlinGenerator().generate("""
            void demo() {
            }

            int sum(int a, int b) {
                return a + b;
            }

            int main() {
                int a = 0;
                while (a < 10) {
                    a++;
                }
                for (int b = 0; b < 10; b++) {
                    sum(a, b);
                }
                for (;;) {
                    break;
                }
                return a + sum(1, 20);
            }
        """.trimIndent().tokenize().program()))
    }
}