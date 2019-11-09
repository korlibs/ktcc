#include <sys/_types/null.h>
#include <sys/_types/size_t.h>

typedef long clock_t;
#define CLOCKS_PER_SEC ((clock_t)1000)

clock_t clock (void);
