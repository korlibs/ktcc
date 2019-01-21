package com.soywiz.ktcc

import kotlin.test.*

class RecoveryTest {
    @Test
    fun test() {
        "int main() { ret }".parseMessages()
    }

    @Test
    fun test2() {
        "int main() { return }".parseMessages()
    }

    @Test
    fun test3() {
        "int main() { return - }".parseMessages()
    }

    @Test
    fun test4() {
        "int main() { return -1 }".parseMessages()
    }

    @Test
    fun test5() {
        "int main() { return -1; }".parseMessages()
    }
}
