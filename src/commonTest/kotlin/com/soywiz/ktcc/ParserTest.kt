package com.soywiz.ktcc

import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.util.*
import kotlin.test.*

class ParserTest {
    @Test fun test1() = assertEquals("(1 + (2 + (3 * 4)))", "1 + (2 + 3 * 4)".programParser().expression().toString())
    @Test fun test2() = assertEquals("(1 < (1 - 1))", "1 < 1 - 1".programParser().expression().toString())
    @Test fun test3() = assertEquals("(1 && (1 < (1 - 1)))", "1 && 1 < 1 - 1".programParser().expression().toString())


    @Test
    fun program() {
        val program = listOf("int", "main", "(", ")", "{", "return", "10", ";", "}").reader("").program()
        //assertEquals("Program(decls=[FuncDecl(rettype=NamedCType(id=int), name=main, params=[], body=Stms(stms=[Return(expr=10)]))])", program.toString())
    }
}