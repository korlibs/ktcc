package com.soywiz.ktcc

import kotlin.test.*

class PreprocessorTest {
    @Test
    fun test() {
        assertEquals("A", "HELLO".preprocess(PreprocessorContext(mapOf("HELLO" to "A"))))
    }

    @Test
    fun test2() {
        assertEquals("A", "HELLO".preprocess(PreprocessorContext(mapOf("HELLO" to "B", "B" to "A"))))
    }

    @Test
    fun test3() {
        assertEquals("A", "A".preprocess(PreprocessorContext(mapOf("A" to "A"))))
    }

    @Test
    fun defineVar() {
        assertEquals("", "#define A".preprocess(PreprocessorContext(mapOf())).trim())
        assertEquals("", "#define A B".preprocess(PreprocessorContext(mapOf())).trim())
        assertEquals("B", "#define A B\nA".preprocess(PreprocessorContext(mapOf())).trim())
    }

    @Test
    fun ifdef() {
        assertEquals("HELLO\n", "#ifdef A\nHELLO\n#endif".preprocess(PreprocessorContext(mapOf("A" to "B"))))
    }

    @Test
    fun elsif1() {
        assertEquals("HELLO", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(mapOf("A" to "B"))).trim())
        assertEquals("WORLD", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(mapOf("B" to "A"))).trim())
    }

    @Test
    @Ignore
    fun elsifSpaces() {
        assertEquals("HELLO\n", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(mapOf("A" to "B"))))
        assertEquals("WORLD\n", "#ifdef A\nHELLO\n#elsif\nWORLD\n#endif".preprocess(PreprocessorContext(mapOf("B" to "A"))))
    }

    @Test
    fun include() {
        assertEquals("stdio.h:GLOBAL", "#include <stdio.h>".preprocess(PreprocessorContext(mapOf("B" to "A")) { file, kind -> "$file:$kind" }))
        assertEquals("stdio.h:LOCAL", "#include \"stdio.h\"".preprocess(PreprocessorContext(mapOf("B" to "A")) { file, kind -> "$file:$kind" }))
    }

    @Test
    fun includeDef() {
        assertEquals("B", "#include <stdio.h>\nA".preprocess(PreprocessorContext { file, kind -> "#define A B" }).trim())
        assertEquals("A", "#include <stdio.h>\n#undef A\nA".preprocess(PreprocessorContext { file, kind -> "#define A B" }).trim())
    }
}
