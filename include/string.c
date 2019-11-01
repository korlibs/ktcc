size_t strlen(const char *str) {
    size_t out = 0;
    while (*str++ != 0) out++;
    return out;
}

int memcmp(const void * ptr1, const void * ptr2, size_t num) {
    char *a = (char *)ptr1, *b = (char *)ptr2;
    for (int n = 0; n < num; n++) {
        int res = (int)a[n] - (int)b[n];
        if (res < 0) return -1;
        if (res > 0) return +1;
    }
    return 0;
}
