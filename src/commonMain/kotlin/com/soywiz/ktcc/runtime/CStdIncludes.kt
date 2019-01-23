package com.soywiz.ktcc.runtime
class CIncludes {
    val map = LinkedHashMap<String, String>()
    fun FILE(file: String, /* language=c */ include: String, /* language=c */ implementation: String = "") {
        map[file] = include
    }
}

val CStdIncludes = CIncludes().apply {
    FILE("stdint.h",
            """
            """.trimIndent()
    )
    FILE("stdio.h",
            """
                int putchar(int c);
                void printf(char *fmt, ...);
            """.trimIndent()
    )
    FILE("stdlib.h",
            """
            """.trimIndent()
    )
    FILE("string.h",
            """
            """.trimIndent()
    )
    FILE("assert.h",
            """
                #define assert(ignore)((void) 0)
            """.trimIndent()
    )
    FILE("ctype.h",
            include = """
                int isalnum(int c);
                int isalpha(int c);
                int isblank(int c);
                int iscntrl(int c);
                int isdigit(int c);
                int isgraph(int c);
                int islower(int c);
                int isprint(int c);
                int ispunct(int c);
                int isspace(int c);
                int isupper(int c);
                int isxdigit(int c);
                int tolower(int c);
                int toupper(int c);
            """.trimIndent(),
            implementation = """
                fun isalpha(c: Int) { return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'); }
            """.trimIndent()
    )
    FILE("sys/_types/size_t.h",
            """
                typedef int size_t;
            """.trimIndent()
    )
    FILE("string.h",
            """
                #include <sys/_types/size_t.h>
                #define NULL ((void *)(0))
                void *memset(void *s, int c, size_t n);
            """.trimIndent()
    )
}.map.toMap()
