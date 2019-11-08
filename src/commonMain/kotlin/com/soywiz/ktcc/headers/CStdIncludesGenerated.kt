// GENERATED. Do not modify
package com.soywiz.ktcc.headers
val CStdIncludes = CIncludes().apply {
FILE("alloca.h", """#include <sys/_types/size_t.h>
extern void *alloca(size_t size);
""")
FILE("assert.h", """#define assert(ignore)((void) 0)
""")
FILE("ctype.h", """int isalnum(int c), isalpha(int c), isblank(int c), iscntrl(int c), isdigit(int c), isgraph(int c), islower(int c);
int isprint(int c), ispunct(int c), isspace(int c), isupper(int c), isxdigit(int c), tolower(int c), toupper(int c);
""", cImpl = """int isupper(int c) { return (c >= 'A') && (c <= 'Z'); }
int islower(int c) { return (c >= 'a') && (c <= 'z'); }
int isalpha(int c) { return islower(c) || isupper(c); }
int isdigit(int c) { return (c >= '0' && c <= '9'); }
int isxdigit(int c) { return isdigit(c) || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F'); }
int isalnum(int c) { return isalpha(c) || isdigit(c); }
int isblank(int c) { return (c == 0x09) || (c == 0x20); }
int iscntrl(int c) { return ((c >= 0x00) && (c <= 0x1F)) || (c == 0x7F); }
int isgraph(int c) { return (c >= 0x21) || (c <= 0x7E); }
int isprint(int c) { return c >= 0x20 && c <= 0x7E; }
int isspace(int c) { return c == ' ' || c == '\t'; }
int ispunct(int c) { return (c >= 0x09 && c <= 0x0D) || c == ' '; }
int tolower(int c) { return isupper(c) ? (c - 'A' + 'a') : c; }
int toupper(int c) { return islower(c) ? (c - 'a' + 'A') : c; }
""")
FILE("intrin.h", """""")
FILE("inttypes.h", """""")
FILE("limits.h", """""")
FILE("math.h", """""")
FILE("memory.h", """#include <string.h>
""")
FILE("setjmp.h", """typedef int jmp_buf[64];

extern int setjmp(jmp_buf);
extern void longjmp(jmp_buf, int) __dead2;
""")
FILE("stdarg.h", """""")
FILE("stddef.h", """""")
FILE("stdint.h", """typedef unsigned char uint8_t;
typedef unsigned short uint16_t;
typedef unsigned int uint32_t;
typedef unsigned long int uint64_t;
typedef char int8_t;
typedef short int16_t;
typedef int int32_t;
typedef long int int64_t;
""")
FILE("stdio.h", """#include <sys/_types/size_t.h>
#include <sys/_types/null.h>
typedef void *FILE;
typedef long int fpos_t;

#define BUFSIZ 8192
#define EOF (-1)
#define SEEK_SET 0
#define SEEK_CUR 1
#define SEEK_END 2

FILE *fopen(const char * restrict filename, const char * restrict mode);
int fclose(FILE *stream);
size_t fread(void * restrict ptr, size_t size, size_t nmemb, FILE * restrict stream);
size_t fwrite(const void * restrict ptr, size_t size, size_t nmemb, FILE * restrict stream);

int feof(FILE *stream);
int fflush(FILE *stream);

int fgetpos(FILE * restrict stream, fpos_t * restrict pos);
int fsetpos(FILE *stream, const fpos_t *pos);
int fseek(FILE *stream, fpos_t offset, int whence);

fpos_t ftell(FILE *stream);

void rewind(FILE *stream);

int putchar(int c);
void printf(char *fmt, ...);
void sprintf(char *out, char *fmt, ...);

void clearerr(FILE *stream);

extern FILE *__stdinp;
extern FILE *__stdoutp;
extern FILE *__stderrp;

#define stdin   __stdinp
#define stdout  __stdoutp
#define stderr  __stderrp
""")
FILE("stdlib.h", """#include <sys/_types/size_t.h>
#include <sys/_types/null.h>

void *malloc(size_t size);
void *realloc(void *ptr, size_t size);
void free(void *ptr);

void exit(int status);
""")
FILE("string.h", """#include <sys/_types/size_t.h>
#include <sys/_types/null.h>
size_t strlen(const char *str);
void* memset(void *s, int c, size_t n);
void* memcpy(void *destination, const void *source, size_t num);
void* memmove(void *destination, const void *source, size_t num);
int memcmp(const void * ptr1, const void * ptr2, size_t num);
""", cImpl = """size_t strlen(const char *str) {
    size_t out = 0;
    while (*str++ != 0) out++;
    return out;
}

int memcmp(const void * ptr1, const void * ptr2, size_t num) {
    char *a = (char *)ptr1, *b = (char *)ptr2;
    for (int n = 0; n < num; n++) {
        int res = (int)a[n] - (int)b[n];
        if (res < 0) return -1;
        if (res > 0) return +1;
    }
    return 0;
}
""")
FILE("sys/_types/null.h", """#define NULL ((void *)(0))
""")
FILE("sys/_types/size_t.h", """typedef int size_t;
""")
}.map.toMap()
