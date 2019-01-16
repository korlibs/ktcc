void loop(int count) {
    for (int n = 0; n < count; n++) {
        putc('A' + n);
    }
    putc('\n');
}

int main() {
    char *ptr = (char *)malloc(1024);
    free(ptr);

    putc('H');
    putc('I');
    putc('\n');

    loop(10);
    loop(15);

    return 0;
}
