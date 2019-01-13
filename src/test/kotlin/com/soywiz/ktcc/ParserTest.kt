package com.soywiz.ktcc

import com.soywiz.ktcc.util.*
import org.junit.*
import org.junit.Assert.*

class ParserTest {
    @Test
    fun test() {
        val expr = listOf("1", "+", "(", "2", "+", "3", "*", "4", ")").reader("").expression()
        assertEquals("OperatorsExpr(exprs=[1, OperatorsExpr(exprs=[2, 3, 4], ops=[+, *])], ops=[+])", expr.toString())
    }

    @Test
    fun program() {
        val program = listOf("int", "main", "(", ")", "{", "return", "10", ";", "}").reader("").program()
        assertEquals("Program(decls=[FuncDecl(type=NamedCType(id=int), name=main, params=[], body=Stms(stms=[Return(expr=10)]))])", program.toString())
    }
}