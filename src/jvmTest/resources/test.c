int sum(int a, int b) {
    return a + b;
}

void demo() {
}

//int *a = {1,2,3,4,5};

int main() {
    void *test = malloc(1024);

    int a = 0;
    while (a < 10) {
        a++;
    }
    for (int b = 0; b < 10; b++) {
        sum(a, b);
    }
    for (;;) {
        break;
    }
    return a + sum(1, 20);
}