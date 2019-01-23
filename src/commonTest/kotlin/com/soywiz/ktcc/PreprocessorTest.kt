package com.soywiz.ktcc

import kotlin.test.*

class PreprocessorTest {
    @Test
    fun test() {
        assertEquals("A", "HELLO".preprocess(PreprocessorContext(mapOf("HELLO" to "A"), includeLines = false)))
    }

    @Test
    @Ignore
    fun test2() {
        assertEquals("A", "HELLO".preprocess(PreprocessorContext(mapOf("HELLO" to "B", "B" to "A"), includeLines = false)))
    }

    @Test
    fun test3() {
        assertEquals("A", "A".preprocess(PreprocessorContext(mapOf("A" to "A"), includeLines = false)))
    }

    @Test
    fun defineVar() {
        assertEquals("\n", "#define A".preprocess(PreprocessorContext(mapOf(), includeLines = false)))
        assertEquals("\n", "#define A B".preprocess(PreprocessorContext(mapOf(), includeLines = false)))
        assertEquals("\nB", "#define A B\nA".preprocess(PreprocessorContext(mapOf(), includeLines = false)))
        assertEquals("\nB", "#  define A B\nA".preprocess(PreprocessorContext(mapOf(), includeLines = false)))
    }

    @Test
    @Ignore
    fun ifdef() {
        assertEquals("HELLO\n", "#ifdef A\nHELLO\n#endif".preprocess(PreprocessorContext(mapOf("A" to "B"))))
    }

    @Test
    @Ignore
    fun elsif1() {
        assertEquals("HELLO", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(mapOf("A" to "B"))))
        assertEquals("WORLD", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(mapOf("B" to "A"))))
    }

    @Test
    @Ignore
    fun elsifSpaces() {
        assertEquals("HELLO\n", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(mapOf("A" to "B"))))
        assertEquals("WORLD\n", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(mapOf("B" to "A"))))
    }

    @Test
    fun include() {
        assertEquals("stdio.h:GLOBAL", "#include <stdio.h>".preprocess(PreprocessorContext(mapOf("B" to "A"), includeLines = false) { file, kind -> "$file:$kind" }))
        assertEquals("stdio.h:LOCAL", "#include \"stdio.h\"".preprocess(PreprocessorContext(mapOf("B" to "A"), includeLines = false) { file, kind -> "$file:$kind" }))
        assertEquals("stdio.h:GLOBAL\ntest.h:GLOBAL", "#include <stdio.h>\n#include <test.h>\n".preprocess(PreprocessorContext(mapOf("B" to "A"), includeLines = false) { file, kind -> "$file:$kind\n\n" }))
    }

    @Test
    fun includeDef() {
        assertEquals("\n\nB", "#include <stdio.h>\nA".preprocess(PreprocessorContext(includeLines = false) { file, kind -> "#define A B" }))
        assertEquals("\n\nA", "#include <stdio.h>\n#undef A\nA".preprocess(PreprocessorContext(includeLines = false) { file, kind -> "#define A B" }))
    }

    @Test
    fun include2() {
        assertEquals("# 1 \"unknown\"\n# 1 \"stdio.h\"\nstdio.h:GLOBAL\n# 2 \"unknown\"\n# 1 \"test.h\"\ntest.h:GLOBAL\n# 4 \"unknown\"\n", "#include <stdio.h>\n#include <test.h>\n".preprocess(PreprocessorContext(mapOf("B" to "A"), includeLines = true) { file, kind -> "$file:$kind" }))
    }
}