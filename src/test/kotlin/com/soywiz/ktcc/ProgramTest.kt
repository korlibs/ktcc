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
}