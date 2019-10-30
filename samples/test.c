#include <stdio.h>

int main() {
    unsigned char test[] = { -1, -2, 3, 4 };

    //for (int n = 0; n < 4; n++) {
    //    printf("%d\n", *(test + n));
    //}

    //#define BSPOS         ((bs_next_ptr - bs->buf)*8 - 24 + bs_sh)

    printf("%d\n", (3 - 5)*8 - 24 + 7);

    int i;
    int scf_count = 4;
    int scfsi = 1;
    for (i = 0; i < 4 && scf_count; i++, scfsi *= 2)
    {
        printf("%d, %d, %d\n", i, scfsi, scf_count);
    }
    printf("%d, %d, %d\n", i, scfsi, scf_count);

    static const unsigned char g_scf_partitions[3][28] = {
        { 6,5,5, 5,6,5,5,5,6,5, 7,3,11,10,0,0, 7, 7, 7,0, 6, 6,6,3, 8, 8,5,0 },
        { 8,9,6,12,6,9,9,9,6,9,12,6,15,18,0,0, 6,15,12,0, 6,12,9,6, 6,18,9,0 },
        { 9,9,6,12,9,9,9,9,9,9,12,6,18,18,0,0,12,12,12,0,12, 9,9,6,15,12,9,0 }
    };

    int n =0;
    for (int y = 0; y < 3;y++) {
        for (int x = 0; x < 24; x++) {
            printf("%d,", ((unsigned char *)g_scf_partitions)[n]);
            n++;
        }
        printf("\n");
    }


    return 0;
}