package com.soywiz.ktcc

import com.soywiz.ktcc.preprocessor.*
import kotlin.test.*

class PreprocessorTest {
    @Test
    fun test() {
        assertEquals("A", "HELLO".preprocess(PreprocessorContext(listOf(Macro("HELLO", "A")), includeLines = false)))
    }

    @Test
    @Ignore
    fun test2() {
        assertEquals("A", "HELLO".preprocess(PreprocessorContext(listOf(Macro("HELLO", "B"), Macro("B", "A")), includeLines = false)))
    }

    @Test
    fun test3() {
        assertEquals("A", "A".preprocess(PreprocessorContext(listOf(Macro("A" to "A")), includeLines = false)))
    }

    @Test
    fun defineVar() {
        assertEquals("\n", "#define A".preprocess(PreprocessorContext(listOf(), includeLines = false)))
        assertEquals("\n", "#define A B".preprocess(PreprocessorContext(listOf(), includeLines = false)))
        assertEquals("\nB", "#define A B\nA".preprocess(PreprocessorContext(listOf(), includeLines = false)))
        assertEquals("\nB", "#  define A B\nA".preprocess(PreprocessorContext(listOf(), includeLines = false)))
    }

    @Test
    @Ignore
    fun ifdef() {
        assertEquals("HELLO\n", "#ifdef A\nHELLO\n#endif".preprocess(PreprocessorContext(listOf(Macro("A" to "B")))))
    }

    @Test
    @Ignore
    fun elsif1() {
        assertEquals("HELLO", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(listOf(Macro("A" to "B")))))
        assertEquals("WORLD", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(listOf(Macro("B" to "A")))))
    }

    @Test
    @Ignore
    fun elsifSpaces() {
        assertEquals("HELLO\n", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(listOf(Macro("A" to "B")))))
        assertEquals("WORLD\n", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(listOf(Macro("B" to "A")))))
    }

    @Test
    fun include() {
        assertEquals("stdio.h:GLOBAL\n", "#include <stdio.h>".preprocess(PreprocessorContext(listOf(Macro("B" to "A")), includeLines = false) { file, kind -> "$file:$kind" }))
        assertEquals("stdio.h:LOCAL\n", "#include \"stdio.h\"".preprocess(PreprocessorContext(listOf(Macro("B" to "A")), includeLines = false) { file, kind -> "$file:$kind" }))
        assertEquals("stdio.h:GLOBAL\ntest.h:GLOBAL\n", "#include <stdio.h>\n#include <test.h>\n".preprocess(PreprocessorContext(listOf(Macro("B" to "A")), includeLines = false) { file, kind -> "$file:$kind\n\n" }))
    }

    @Test
    fun includeDef() {
        assertEquals("\n\nB", "#include <stdio.h>\nA".preprocess(PreprocessorContext(includeLines = false) { file, kind -> "#define A B" }))
        assertEquals("\n\nA", "#include <stdio.h>\n#undef A\nA".preprocess(PreprocessorContext(includeLines = false) { file, kind -> "#define A B" }))
    }

    @Test
    fun include2() {
        assertEquals("# 1 \"unknown\"\n# 1 \"stdio.h\"\nstdio.h:GLOBAL\n# 2 \"unknown\"\n# 1 \"test.h\"\ntest.h:GLOBAL\n# 3 \"unknown\"\n", "#include <stdio.h>\n#include <test.h>\n".preprocess(PreprocessorContext(listOf(Macro("B" to "A")), includeLines = true) { file, kind -> "$file:$kind" }))
    }

    @Test
    fun pragmaModulePackageName() {
        val ctx = PreprocessorContext()
        val result = "#pragma module_name Test2\n#pragma package_name com.soywiz.test\n".preprocess(ctx)
        assertEquals("Test2", ctx.global.moduleName)
        assertEquals("com.soywiz.test", ctx.global.packageName)
    }

    @Test
    fun defineConstants() {
        val ctx = PreprocessorContext()
        val result = "#define HELLO 1\n#define WORLD (HELLO + 1)".preprocess(ctx)
        assertEquals(1, ctx.global.constantDecls["HELLO"])
        assertEquals(2, ctx.global.constantDecls["WORLD"])
    }

    @Test
    fun check() {
        """
            #ifdef HELLO
            #else
            #endif
        """.trimIndent().preprocess()
    }
}