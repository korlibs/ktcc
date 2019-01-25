#include <stdio.h>
#include <stdlib.h>
#include <alloca.h>

void print(char *str) {
    int n = 0;
    while (1) {
        char c = str[n];
        if ((int)c == 0) break;
        putchar((int)c);
        n++;
    }
}

void print_int(int value) {
    char *ptr = (char *)alloca(16);
    ptr[15] = 0;
    int offset = 15;
    if (value == 0) {
        offset--;
        ptr[offset] = (char)('0');
    } else {
        int v = value;
        while (v != 0) {
            int digit = v % 10;
            offset--;
            ptr[offset] = (char)('0' + digit);
            v /= 10;
        }
    }
    print(ptr + offset);
    print("\n");
}

