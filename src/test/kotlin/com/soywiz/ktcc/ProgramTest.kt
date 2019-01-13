package com.soywiz.ktcc

import org.junit.*

class ProgramTest {
    @Test
    fun test() {
        Assert.assertEquals(10, tokenize("int main() { return 10; }").program().getFunction("main").evaluate())
        Assert.assertEquals(30, tokenize("int main(int a, int b) { return a + b; }").program().getFunction("main").evaluate(10, 20))
    }
}