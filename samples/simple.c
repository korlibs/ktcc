void loop(int count) {
    for (int n = 0; n < count; n++) {
        putchar('A' + n);
    }
    putchar('\n');
}

void print(char *str) {
    int n = 0;
    while (true) {
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

int main() {
    char *ptr = (char *)malloc(1024);
    free(ptr);

    putchar('H');
    putchar('I');
    putchar('\n');

    loop(10);
    loop(15);

    char *a = "hello";
    a++;
    putchar((int)*a);

    a[1] = (char)'3';

    putchar((int)("hello\n"[0]));
    putchar((int)(*"hello\n"));
    print("hello\n");

    print_int(123456);
    print_int(777);
    print_int(3210);

    print("\n");

    return 0;
}
