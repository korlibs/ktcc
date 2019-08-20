struct A {
    union {
        unsigned char c;
        float f;
        int i;
        long int l;
    } u;
    long int c;
};
