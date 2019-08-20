void print(char *str) {
    int n = 0;
    while (true) {
        char c = str[n];
        if (c == 0) break;
        putc(c);
        n++;
    }
}
