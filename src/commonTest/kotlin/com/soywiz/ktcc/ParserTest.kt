package com.soywiz.ktcc

import com.soywiz.ktcc.util.*
import kotlin.test.*

class ParserTest {
    @Test
    fun test() {
        val expr = "1 + (2 + 3 * 4)".programParser().expression()
        assertEquals("Binop(l=1, op=+, r=Binop(l=2, op=+, r=Binop(l=3, op=*, r=4)))", expr.toString())
    }

    @Test
    fun program() {
        val program = listOf("int", "main", "(", ")", "{", "return", "10", ";", "}").reader("").program()
        //assertEquals("Program(decls=[FuncDecl(rettype=NamedCType(id=int), name=main, params=[], body=Stms(stms=[Return(expr=10)]))])", program.toString())
    }
}