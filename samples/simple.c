#include <stdio.h>
#include "hello.h"

void loop(int count) {
    for (int n = 0; n < count; n++) {
        putchar('A' + n);
    }
    putchar('\n');
}

typedef struct MyStruct {
    int v;
} MyStruct;

void structCopy() {
    MyStruct a = {7};
    MyStruct b = a;
    MyStruct c;

    print("structCopy\n");
    print_int(a.v);
    print_int(b.v);
    print_int(c.v);
    b.v = 9;
    print_int(a.v);
    print_int(b.v);
    print_int(c.v);
    c = a;
    c.v = 8;
    print_int(a.v);
    print_int(b.v);
    print_int(c.v);
}

int main() {
    char *ptr = malloc(1024);
    char **ptrs = malloc(4 * 2);
    *ptrs++ = ptr;
    *ptrs++ = ptr;
    *--ptrs = ptr;
    free(ptrs);
    free(ptr);

    printf("PRINTF HELLO WORLD %d!\n", 2019);

    structCopy();

    putchar('H');
    putchar('I');
    putchar('\n');

    loop(10);
    loop(15);

    char *a = "hello";
    a++;
    putchar((int)*a);

    //a[1] = (char)'3';

    putchar((int)("hello\n"[0]));
    putchar((int)(*"hello\n"));
    print("hello\n");

    print_int(123456);
    print_int(777);
    print_int(3210);

    print("\n");

    return 0;
}
