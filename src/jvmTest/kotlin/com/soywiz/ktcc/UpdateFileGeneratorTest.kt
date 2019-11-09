package com.soywiz.ktcc

import kotlin.test.*

object UpdateFileGeneratorTest {
    @JvmStatic
    fun main(args: Array<String>) {
        val fgt = FileGeneratorTest()
        fgt.UPDATE = true

        for (member in FileGeneratorTest::class.java.methods) {
            if (member.isAnnotationPresent(Test::class.java)) {
                val success = try {
                    member.invoke(fgt)
                    true
                } catch (e: Throwable) {
                    false
                }
                println("member: $member :: success=$success")
            }
        }
    }
}
