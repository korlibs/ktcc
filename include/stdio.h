#include <sys/_types/size_t.h>
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

#include <stdio_format.h>

void clearerr(FILE *stream);

extern FILE *__stdinp;
extern FILE *__stdoutp;
extern FILE *__stderrp;

#define stdin   __stdinp
#define stdout  __stdoutp
#define stderr  __stderrp
