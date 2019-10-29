#include <stdio.h>

int main() {
    unsigned char test[] = { -1, -2, 3, 4 };

    //for (int n = 0; n < 4; n++) {
    //    printf("%d\n", *(test + n));
    //}

    //#define BSPOS         ((bs_next_ptr - bs->buf)*8 - 24 + bs_sh)

    printf("%d\n", (3 - 5)*8 - 24 + 7);

    return 0;
}