#include <stdio.h>

int main() {
    #ifdef TEST
    #define DEMO
    #endif

    #ifdef DEMO
    printf("[A]\n");
    #else
    printf("[B]\n");
    #endif
    return 0;
}
