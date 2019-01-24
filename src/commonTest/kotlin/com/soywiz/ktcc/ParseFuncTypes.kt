package com.soywiz.ktcc

import com.soywiz.ktcc.parser.*
import kotlin.test.*

class ParseFuncTypes {

    fun String.parseFirstDeclaration() = programParser().program().declarations.first().parsedList.first()

    @Test fun test1() = assertEquals(FunctionType("free", Type.INT.ptr()), "int *free(void);".parseFirstDeclaration().type)
    @Test fun test2() = assertEquals(Type.INT, "int hello = 10;".parseFirstDeclaration().type)
    @Test fun test3() = assertEquals(Type.INT.ptr(), "int *hello = 10;".parseFirstDeclaration().type)
    @Test fun test4() = assertEquals(FunctionType("hello", Type.INT), "int hello();".parseFirstDeclaration().type)
    @Test fun test5() = assertEquals(FunctionType("hello", Type.INT), "int (*hello)();".parseFirstDeclaration().type)
}
