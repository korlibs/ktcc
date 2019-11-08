#include <sys/_types/size_t.h>
#include <sys/_types/null.h>

void *malloc(size_t size);
void *realloc(void *ptr, size_t size);
void free(void *ptr);

void exit(int status);
