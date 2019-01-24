package com.soywiz.ktcc.types

import kotlin.test.*

class TypesTest {
    @Test fun test1() = assertEquals(Type.SHORT, Type.common(Type.CHAR, Type.SHORT))
    @Test fun test2() = assertEquals(Type.LONG, Type.common(Type.INT, Type.LONG))
    @Test fun test3() = assertEquals(Type.FLOAT, Type.common(Type.FLOAT, Type.INT))
    @Test fun test4() = assertEquals(Type.DOUBLE, Type.common(Type.FLOAT, Type.LONG))

    @Test fun test5() = assertEquals(Type.INT, Type.common(Type.UCHAR, Type.INT))
}