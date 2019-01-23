package com.soywiz.ktcc.runtime

import com.soywiz.ktcc.util.*

class CIncludes {
    val map = LinkedHashMap<String, String>()
    fun FILE(file: String, /* language=c */ header: String, /* language=c */ implementation: String = "") {
        val once = ("__" + file.replace(DOT, "_") + "_").toUpperCase()
        map[file] = "#ifndef $once\n#define $once\n${header.trimIndent()}\n#endif"
    }
}

val CStdIncludes = CIncludes().apply {
    FILE("stdint.h", """
        typedef unsigned char uint8_t;
        typedef unsigned short uint16_t;
        typedef unsigned int uint32_t;
        typedef unsigned long int uint64_t;
        typedef char int8_t;
        typedef short int16_t;
        typedef int int32_t;
        typedef long int int64_t;
    """)
    FILE("stdio.h", """
        int putchar(int c);
        void printf(char *fmt, ...);
    """)
    FILE("stdlib.h", """
    """)
    FILE("assert.h", """
        #define assert(ignore)((void) 0)
    """)
    FILE("ctype.h", """
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
    """, """
        fun isalpha(c: Int) { return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'); }
    """)
    FILE("sys/_types/size_t.h", """
        typedef int size_t;
    """)
    FILE("sys/_types/null.h", """
        #define NULL ((void *)(0))
    """)
    FILE("string.h", """
        #include <sys/_types/size_t.h>
        #include <sys/_types/null.h>
        void *memset(void *s, int c, size_t n);
        void *memcpy(void *destination, const void *source, size_t num);
        void *memmove(void *destination, const void *source, size_t num);
    """)
    FILE("intrin.h", """
    """)
}.map.toMap()
