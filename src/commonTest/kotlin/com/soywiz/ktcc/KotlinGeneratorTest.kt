package com.soywiz.ktcc

import com.soywiz.ktcc.gen.*
import kotlin.test.*

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
        println(generate("""
            int main() {
                unsigned int a = (unsigned int)10;
                int *b = (int *)(void *)10;
            }
        """))
    }

    @Test
    //@Ignore
    fun struct() {
        println(generate("""
            //typedef unsigned char uint8_t;
            struct Demo {
                //int a = 10;
                int a;
                char *b;
            } MyStruct_default = {.a = 3};
        """))
    }

    @Test
    //@Ignore
    fun struct2() {
        println(generate("""
            typedef struct Demo {
                int a;
                char *b;
            } Demo;
            void main() {
                Demo demo = {1};
            }
        """))
    }

    @Test
    fun typedef2() {
        println(generate("""
            typedef long long int int64_t;
            typedef int64_t int64_alias;
            typedef int64_alias int64_alias2;
            void main() {
                int64_t demo = 0, demo2 = 10;
                long long int demo3 = 3;
                int64_alias demo4 = 4;
                int64_alias2 demo5 = 5;
            }
        """))
    }

    @Test
    fun test() {
        println(generate("""
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
        """))
    }

    @Test
    fun test3() {
        println(generate("""
            int main() {
                for (;;) {
                    break;
                }
                return a + sum(1, 20);
            }
        """))
    }

    @Test
    fun arrayLiterals() {
        println(generate("""
            int *data = {1,2,3,4};
            int **data = { {1, 2}, {3, 4} };
            int ***data = { { {1}, {2} }, { {3}, {4, 5} } };
        """))
    }

    @Test
    fun structWithArray() {
        println(generate("""
            struct Demo {
                int z, *test;
                int a, b;
            } DemoDefault = { -1, {1, 2, 3, 4}, 5, 6 };
        """))
    }

    @Test
    fun nestedStruct() {
        println(generate("""
            typedef struct { int x, y, z; } A;
            typedef struct { A a1, a2; } B;

            B b = { { 10 }, { 20 } };
        """))
    }

    @Test
    fun structWithUnion() {
        println(generate("""
            struct A {
                union {
                    unsigned char c;
                    float f;
                    int i;
                    long int l;
                } u;
                long int c;
            };
        """))
    }
}
