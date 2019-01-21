package com.soywiz.ktcc

import kotlin.test.*

class AnalyzerTest {
    @Test
    fun test() {
        assertEquals("Return must return Int", "int main() { return; }".parseMessages())
        assertEquals("", "int main() { return 10; }".parseMessages())
        assertEquals("", "void main() { return; }".parseMessages())
        assertEquals("Returned Int but must return Unit", "void main() { return 10; }".parseMessages())
        assertEquals("Returned CPointer<Byte> but must return Int", "int main() { return \"demo\"; }".parseMessages())
    }
}