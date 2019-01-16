package com.soywiz.ktcc

import com.soywiz.ktcc.util.*
import org.junit.*
import org.junit.Assert.*

class ParserTest {
    @Test
    fun test() {
        val expr = listOf("1", "+", "(", "2", "+", "3", "*", "4", ")").reader("").programParser().expression()
        assertEquals("Binop(l=1, op=+, r=Binop(l=2, op=+, r=Binop(l=3, op=*, r=4)))", expr.toString())
    }

    @Test
    fun program() {
        val program = listOf("int", "main", "(", ")", "{", "return", "10", ";", "}").reader("").program()
        //assertEquals("Program(decls=[FuncDecl(rettype=NamedCType(id=int), name=main, params=[], body=Stms(stms=[Return(expr=10)]))])", program.toString())
    }
}