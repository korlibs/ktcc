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

int adder(int a, int b) { return a + b; }
int multiplier(int a, int b) { return a * b; }

// @TODO: Unsupported
//typedef int (*ifunc2)(int a, int b);
//typedef int (*ifunc2_b)(int, int);
//int icall2(ifunc2 f1, ifunc2 f2, int a, int b, int c) { return f2(f1(a, b), c); }

int icall2(int f1(int a, int b), int f2(int a, int b), int a, int b, int c) { return f2(f1(a, b), c); }

void mutateParameter(int a, int b) {
    printf("mutateParameter: %d, %d\n", a, b);
    a += b;
    printf("mutateParameter: %d, %d\n", a, b);
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

    printf("CALLBACK %d\n", icall2(adder, multiplier, 3, 5, 7));

    mutateParameter(5, 7);

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
