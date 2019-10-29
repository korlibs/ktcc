#pragma module_name MiniMp3
#pragma package_name com.soywiz.korau.formats.mp3

#define MINIMP3_IMPLEMENTATION 1
#define MINIMP3_NO_SIMD 1

#include <stdio.h>
#include "minimp3.c"

/*typedef struct
{
    int frame_bytes;
    int channels;
    int hz;
    int layer;
    int bitrate_kbps;
} mp3dec_frame_info_t;*/

long int flen(FILE *file) {
    long int oldPos = ftell(file);
    fseek(file, 0L, SEEK_END);
    long int endPos = ftell(file);
    fseek(file, oldPos, SEEK_SET);
    return endPos;
}

void decode_mp3(FILE *fin, FILE *fout) {
    static mp3dec_t mp3d;
    mp3dec_init(&mp3d);

    mp3dec_frame_info_t info;
    short pcm[MINIMP3_MAX_SAMPLES_PER_FRAME];
    long int fileSize = flen(fin);
    char *input_data = malloc(fileSize);
    if (input_data) {
        int input_read = fread(input_data, 1, fileSize, fin);
        if (input_read > 0) {
            char *input_buf = input_data;
            char *input_end = input_data + input_read;

            while (1) {
                int input_available = input_end - input_buf;
                int samples = mp3dec_decode_frame(&mp3d, input_buf, input_available, pcm, &info);
                printf("FRAME: %d -> %d\n", info.frame_bytes, samples);
                input_buf += info.frame_bytes;
                fwrite(pcm, 2, samples, fout);
                if (info.frame_bytes <= 0) break;
            }
        }
        free(input_data);
    }

    /*
    char input_data[16 * 1024], *input_buf, *input_end;
    while (1) {
        int input_read = fread(input_data, 1, sizeof(input_data), fin);
        if (input_read <= 0) break;
        input_end = input_data + input_read;
        input_buf = input_data;

        int input_available = input_end - input_buf;
        int samples = mp3dec_decode_frame(&mp3d, input_buf, input_available, pcm, &info);
        input_buf += info.frame_bytes;
        fwrite(pcm, 2, samples, fout);
        break;
    }
    */
}

int main(int argc, char **argv) {
    if (argc < 3) {
        //fprintf(stderr, "mp3dec file.mp3 out.raw\n");
        printf("mp3dec file.mp3 out.raw\n");
        return -1;
    }

    printf("%s -> %s\n", argv[1], argv[2]);

    FILE *fin = fopen(argv[1], "rb");
    if (fin) {
        FILE *fout = fopen(argv[2], "wb");
        if (fout) {
            decode_mp3(fin, fout);
            fclose(fout);
        }
        fclose(fin);
    }

    printf("DONE\n");

    return 0;
}

/*
int main(int argc, char **argv) {
    printf("HELLO WORLD! (%d)\n", argc);
    for (int n = 0; n < argc; n++) {
        printf("argv[%d]: '%s'\n", n, argv[n]);
    }
    if (argc >= 2) {
        FILE *f = fopen(argv[1], "rb");
        printf("FILE: %d : %s\n", (int)f, argv[1]);
        if (f) {
            const char buf[1025] = {0};
            int read = fread(buf, 1, 1024, f);
            printf("%d\n", read);
            printf("%s\n", buf);
            printf("FTELL: %d\n", (int)ftell(f));
        }
        fclose(f);
    }
    return 0;
}
*/