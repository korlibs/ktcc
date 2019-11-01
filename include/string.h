#include <sys/_types/size_t.h>
#include <sys/_types/null.h>
size_t strlen(const char *str);
void* memset(void *s, int c, size_t n);
void* memcpy(void *destination, const void *source, size_t num);
void* memmove(void *destination, const void *source, size_t num);
int memcmp(const void * ptr1, const void * ptr2, size_t num);
