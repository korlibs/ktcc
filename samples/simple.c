#include "hello.h"
#include <stdint.h>

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
    MyStruct c = {0};

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

typedef struct MyStruct2 {
    int value;
} MyStruct2;

void fixedSizeArrays() {
    MyStruct2 data[2][3] = {{ {1}, {2}, {3} }, {{4}}};
    for (int m = 0; m < 2; m++) {
        for (int n = 0; n < 3; n++) {
            printf("fixedSizeArrays: [%d][%d]: %d\n", m, n, data[m][n].value);
        }
    }
}

void mutateParameter(int a, int b) {
    printf("mutateParameter: %d, %d\n", a, b);
    a += b;
    printf("mutateParameter: %d, %d\n", a, b);
}

void refLocal2(int *out) {
    *out = 20;
}

void refLocal() {
    int a = 10;
    printf("refLocal: %d\n", a);
    refLocal2(&a);
    printf("refLocal: %d\n", a);
}

void ptr_set_get_sign() {
    uint8_t a[10] = {0};
    uint8_t *b = alloca(10);
    int8_t c[10] = {0};
    int8_t *d = alloca(10);

    a[0] = a[1];
    b[0] = b[1];
    c[0] = c[1];
    d[0] = d[1];
}

int main() {
    char *ptr = malloc(1024);
    char **ptrs = malloc(4 * 2);
    *ptrs++ = ptr;
    *ptrs++ = ptr;
    *--ptrs = ptr;
    //free(ptrs);
    //free(ptr);

    printf("PRINTF HELLO WORLD %d!\n", 2019);

    ptr_set_get_sign();

    refLocal();

    fixedSizeArrays();

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
