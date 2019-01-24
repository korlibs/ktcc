package com.soywiz.ktcc

import com.soywiz.ktcc.parser.*
import kotlin.test.*

class ParseFuncTypes {

    fun String.parseFirstDeclaration() = programParser().program().declarations.first().parsedList.first()

    @Test fun test1() = assertEquals(FunctionFType("free", FType.INT.ptr()), "int *free(void);".parseFirstDeclaration().type)
    @Test fun test2() = assertEquals(FType.INT, "int hello = 10;".parseFirstDeclaration().type)
    @Test fun test3() = assertEquals(FType.INT.ptr(), "int *hello = 10;".parseFirstDeclaration().type)
    @Test fun test4() = assertEquals(FunctionFType("hello", FType.INT), "int hello();".parseFirstDeclaration().type)
    @Test fun test5() = assertEquals(FunctionFType("hello", FType.INT), "int (*hello)();".parseFirstDeclaration().type)
}
