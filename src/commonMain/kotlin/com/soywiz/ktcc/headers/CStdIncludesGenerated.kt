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
""", """fun isalpha(c: Int) { return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'); }
""")
FILE("intrin.h", """""")
FILE("inttypes.h", """""")
FILE("limits.h", """""")
FILE("math.h", """""")
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
int fseek(FILE *stream, long int offset, int whence);

long int ftell(FILE *stream);

void rewind(FILE *stream);

int putchar(int c);
void printf(char *fmt, ...);

void clearerr(FILE *stream);""")
FILE("stdlib.h", """#include <sys/_types/size_t.h>
#include <sys/_types/null.h>
void free(void *ptr), *malloc(size_t size), *realloc(void *ptr, size_t size);
""")
FILE("string.h", """#include <sys/_types/size_t.h>
#include <sys/_types/null.h>
void *memset(void *s, int c, size_t n), *memcpy(void *destination, const void *source, size_t num), *memmove(void *destination, const void *source, size_t num);
""")
FILE("sys/_types/null.h", """#define NULL ((void *)(0))
""")
FILE("sys/_types/size_t.h", """typedef int size_t;
""")
}.map.toMap()
