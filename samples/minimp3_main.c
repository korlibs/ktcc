#include <stdio.h>
//#include "minimp3.c"

int main(int argc, char **argv) {
    printf("HELLO WORLD! (%d)\n", argc);
    for (int n = 0; n < argc; n++) {
        printf("argv[%d]: '%s'\n", n, argv[n]);
    }
    if (argc >= 2) {
        FILE *f = fopen(argv[1], "rb");
        printf("FILE: %d : %s\n", (int)f, argv[1]);
        if (f) {
            const char buf[1025] = {0};
            int read = fread(buf, 1, 1024, f);
            printf("%d\n", read);
            printf("%s\n", buf);
        }
        fclose(f);
    }
    return 0;
}