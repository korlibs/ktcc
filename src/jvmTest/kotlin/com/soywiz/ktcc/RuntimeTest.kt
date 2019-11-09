package com.soywiz.ktcc

import CPointer
import Runtime
import kotlin.test.*

class RuntimeTest {
    @Test
    fun test() {
        Runtime().apply {
            assertEquals("0.000000", numberToStringDecimal("0", 6))
            assertEquals("0.000000", numberToStringDecimal("0e0", 6))
            assertEquals("0.000000", numberToStringDecimal("0e-1", 6))
            assertEquals("1", numberToStringDecimal("1", 0))
            assertEquals("1", numberToStringDecimal("1e0", 0))
            assertEquals("10", numberToStringDecimal("1e1", 0))
            assertEquals("11.234567", numberToStringDecimal("1.123456789e1", 6))
            assertEquals("1.123456", numberToStringDecimal("1.123456789e0", 6))
            assertEquals("0.112345", numberToStringDecimal("1.123456789e-1", 6))
            //assertEquals("0.000001", numberToStringDecimal("0.0000009", 6))
            //assertEquals("0.000001", numberToStringDecimal("9e-7", 6))
        }
    }

    @Test
    fun testSprintf() {
        Runtime().apply {
            assertEquals("0.000000 00000123", _format("%f %08d", 1e-10, 123).toString())
        }
    }
}
