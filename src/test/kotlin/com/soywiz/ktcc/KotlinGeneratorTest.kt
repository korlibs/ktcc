package com.soywiz.ktcc

import com.soywiz.ktcc.gen.*
import org.junit.*

class KotlinGeneratorTest {
    fun generate(cprogram: String): String = KotlinGenerator().generate(cprogram.trimIndent().tokenize().program())

    @Test
    fun decl() {
        val decl = "unsigned char *a, **b;".programParser().declaration() as Declaration
        for (init in decl.initDeclaratorList) {
            val finalType = decl.specs.toFinalType(init.decl)
            println(finalType)
        }
    }

    @Test
    fun string() {
        println(generate("""
            int main() {
                puts("hello");
                return (int)'a';
            }
        """))
    }

    @Test
    fun string2() {
        println(generate("""
            void print(char *str) {
                int n = 0;
                while (true) {
                    char c = str[n];
                    if (c == 0) break;
                    putc(c);
                    n++;
                }
            }
        """))
    }

    @Test
    fun cast() {
        println(KotlinGenerator().generate("""
            int main() {
                unsigned int a = (unsigned int)10;
                int *b = (int *)(void *)10;
            }
        """.trimIndent().tokenize().program()))
    }

    @Test
    //@Ignore
    fun struct() {
        println(KotlinGenerator().generate("""
            //typedef unsigned char uint8_t;
            struct Demo {
                //int a = 10;
                int a;
                char *b;
            } MyStruct_default = {.a = 3};
        """.trimIndent().tokenize().program()))
    }

    @Test
    //@Ignore
    fun struct2() {
        println(KotlinGenerator().generate("""
            typedef struct Demo {
                int a;
                char *b;
            } Demo;
            void main() {
                Demo demo = {1};
            }
        """.trimIndent().tokenize().program()))
    }

    @Test
    fun test() {
        println(KotlinGenerator().generate("""
            int sum(int a, int b) {
                return a + b;
            }

            void demo() {
            }

            //int *a = {1,2,3,4,5};

            int main() {
                void *test = malloc(1024);

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

    @Test
    fun test3() {
        println(KotlinGenerator().generate("""
            int main() {
                for (;;) {
                    break;
                }
                return a + sum(1, 20);
            }
        """.trimIndent().tokenize().program()))
    }
}