#include <stdio.h>
#include <stdlib.h>

int main() {
    char c = 65;
    char c2 = 'B';
    void *ptr = malloc(1024);
    {
        sprintf(ptr, "HELLO WORLD %d", 2019);
        printf("YAY! %s %c %c\n", ptr, c, c2);
    }
    free(ptr);
    return 0;
}