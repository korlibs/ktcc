package com.soywiz.ktcc.runtime

import com.soywiz.ktcc.util.*

class CIncludes {
    val map = LinkedHashMap<String, String>()
    fun FILE(file: String, /* language=c */ header: String, /* language=c */ implementation: String = "") {
        val once = ("__" + file.replace(DOT, "_").replace("/", "_") + "_").toUpperCase()
        map[file] = "#pragma once\n#ifndef $once\n#define $once\n${header.trimIndent()}\n#endif"
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
        #include <sys/_types/size_t.h>
        typedef size_t FILE;
        int putchar(int c);
        void printf(char *fmt, ...);
    """)

    FILE("stdarg.h", """
    """)

    FILE("stddef.h", """
    """)

    FILE("limits.h", """
    """)

    FILE("stdlib.h", """
        #include <sys/_types/size_t.h>
        #include <sys/_types/null.h>
        void free(void *ptr), *malloc(size_t size), *realloc(void *ptr, size_t size);
    """)

    FILE("assert.h", """
        #define assert(ignore)((void) 0)
    """)

    FILE("ctype.h", """
        int isalnum(int c), isalpha(int c), isblank(int c), iscntrl(int c), isdigit(int c), isgraph(int c), islower(int c);
        int isprint(int c), ispunct(int c), isspace(int c), isupper(int c), isxdigit(int c), tolower(int c), toupper(int c);
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
        void *memset(void *s, int c, size_t n), *memcpy(void *destination, const void *source, size_t num), *memmove(void *destination, const void *source, size_t num);
    """)

    FILE("intrin.h", """
    """)

    FILE("math.h", """
    """)
}.map.toMap()
