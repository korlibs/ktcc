package com.soywiz.ktcc

import org.junit.*

class ProgramTest {
    @Test
    fun test() {
        Assert.assertEquals(10, tokenize("int main() { return 10; }").program().evaluateFunc("main"))
        Assert.assertEquals(30, tokenize("int main(int a, int b) { return a + b; }").program().evaluateFunc("main", 10, 20))
    }

    @Test
    fun test2() {
        Assert.assertEquals(30, tokenize("int sum(int a, int b) { return a + b; } int main() { return sum(10, 20); }").program().evaluateFunc("main"))
        //Assert.assertEquals(30, tokenize("int main() { return sum(10, 20); }").program().evaluateFunc("main"))
    }

    @Test
    fun precedence() {
        Assert.assertEquals(5, tokenize("int main() { return 1 * 2 + 3; }").program().evaluateFunc("main"))
        Assert.assertEquals(7, tokenize("int main() { return 1 + 2 * 3; }").program().evaluateFunc("main"))
        Assert.assertEquals(9, tokenize("int main() { return (1 + 2) * 3; }").program().evaluateFunc("main"))
        Assert.assertEquals(5, tokenize("int main() { return 1 * (2 + 3); }").program().evaluateFunc("main"))
    }

    @Test
    fun loop1() {
        Assert.assertEquals(-10, tokenize("int main() { int a = 0; int b = 0; while (a < 10) { a++; b--; } return b; }").program().evaluateFunc("main"))
    }

    @Test
    fun loop2() {
        Assert.assertEquals(-9, tokenize("int main() { int a = 0; int b = 0; for (a = 1; a < 10; a++) b--; return b; }").program().evaluateFunc("main"))
    }

    @Test
    fun switch1() {
        Assert.assertEquals(-10, tokenize("""
            int main(int a) {
                int b = 0;
                switch (a) {
                    case 1:
                        b = -1;
                        return b * 3;
                    case 2:
                        b = -2;
                    case 3:
                        return b * 5;
                }
                return b * 7;
            }
        """.trimIndent()).program().evaluateFunc("main", 2))
    }
}