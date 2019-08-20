package com.soywiz.ktcc

import com.soywiz.ktcc.gen.kotlin.*
import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.preprocessor.*
import com.soywiz.ktcc.types.*
import kotlin.test.*

class KotlinGeneratorTest {
    fun generate(cprogram: String): String {
        val parser = cprogram.programParser()
        return Targets.kotlin.generator(parser.program(), parser).generate()
    }

    @Test
    fun decl() {
        val decl = "unsigned char *a, **b;".programParser().declaration() as VarDeclaration
        for (init in decl.initDeclaratorList) {
            val finalType = decl.specifiers.toFinalType(init.declarator)
            println(finalType)
        }
    }

    @Test
    fun string() {
        println(generate("""
            int main() {
                puts("hello");
                return (int)'a';
            }
        """))
    }

    @Test
    fun string2() {
        println(generate("""
            void print(char *str) {
                int n = 0;
                while (true) {
                    char c = str[n];
                    if (c == 0) break;
                    putc(c);
                    n++;
                }
            }
        """))
    }

    @Test
    fun cast() {
        println(generate("""
            int main() {
                unsigned int a = (unsigned int)10;
                int *b = (int *)(void *)10;
            }
        """))
    }

    @Test
    //@Ignore
    fun struct() {
        println(generate("""
            //typedef unsigned char uint8_t;
            struct Demo {
                //int a = 10;
                int a;
                char *b;
            } MyStruct_default = {.a = 3};
        """))
    }

    @Test
    //@Ignore
    fun struct2() {
        println(generate("""
            typedef struct Demo {
                int a;
                char *b;
            } Demo;
            void main() {
                Demo demo = {1};
            }
        """))
    }

    @Test
    fun typedef2() {
        println(generate("""
            typedef long long int int64_t;
            typedef int64_t int64_alias;
            typedef int64_alias int64_alias2;
            void main() {
                int64_t demo = 0, demo2 = 10;
                long long int demo3 = 3;
                int64_alias demo4 = 4;
                int64_alias2 demo5 = 5;
            }
        """))
    }

    @Test
    fun test() {
        println(generate("""
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
        """))
    }

    @Test
    fun test3() {
        println(generate("""
            int main() {
                for (;;) {
                    break;
                }
                return a + sum(1, 20);
            }
        """))
    }

    @Test
    fun arrayLiterals() {
        println(generate("""
            int *data = {1,2,3,4};
            int **data = { {1, 2}, {3, 4} };
            int ***data = { { {1}, {2} }, { {3}, {4, 5} } };
        """))
    }

    @Test
    fun structWithArray() {
        println(generate("""
            struct Demo {
                int z, *test;
                int a, b;
            } DemoDefault = { -1, {1, 2, 3, 4}, 5, 6 };
        """))
    }

    @Test
    fun nestedStruct() {
        println(generate("""
            typedef struct { int x, y, z; } A;
            typedef struct { A a1, a2; } B;

            B b = { { 10 }, { 20 } };
        """))
    }

    @Test
    fun structWithUnion() {
        println(generate("""
            struct A {
                union {
                    unsigned char c;
                    float f;
                    int i;
                    long int l;
                } u;
                long int c;
            };
        """))
    }

    @Test
    fun fixedArraySize() {
        println(generate("""
            typedef struct
            {
                int frame_bytes, channels, hz, layer, bitrate_kbps;
            } mp3dec_frame_info_t;

            typedef struct
            {
                float mdct_overlap[2][9*32], qmf_state[15*2*32];
                int reserv, free_format_bytes;
                unsigned char header[4], reserv_buf[511];
            } mp3dec_t;
        """.trimIndent()))
    }

    @Test
    fun mixed() {
        println(generate("""
            typedef unsigned char uint8_t;
            typedef unsigned short uint16_t;

            typedef struct
            {
                const uint8_t *buf;
                int pos, limit;
            } bs_t;

            typedef struct
            {
                float scf[3*64];
                uint8_t total_bands, stereo_bands, bitalloc[64], scfcod[64];
            } L12_scale_info;

            typedef struct
            {
                uint8_t tab_offset, code_tab_width, band_count;
            } L12_subband_alloc_t;

            typedef struct
            {
                const uint8_t *sfbtab;
                uint16_t part_23_length, big_values, scalefac_compress;
                uint8_t global_gain, block_type, mixed_block_flag, n_long_sfb, n_short_sfb;
                uint8_t table_select[3], region_count[3], subblock_gain[3];
                uint8_t preflag, scalefac_scale, count1_table, scfsi;
            } L3_gr_info_t;

            typedef struct
            {
                bs_t bs;
                uint8_t maindata[511 + 2304];
                L3_gr_info_t gr_info[4];
                float grbuf[2][576], scf[40], syn[18 + 15][2*32];
                uint8_t ist_pos[2][39];
            } mp3dec_scratch_t;
        """.trimIndent()))
    }

    @Test
    fun hexliterals() {
        println(generate("""
            typedef unsigned char uint8_t;

            static int hdr_valid(const uint8_t *h)
        {
            return h[0] == 0xff &&
                ((h[1] & 0xF0) == 0xf0 || (h[1] & 0xFE) == 0xe2) &&
                ((((h[1]) >> 1) & 3) != 0) &&
                (((h[2]) >> 4) != 15) &&
                ((((h[2]) >> 2) & 3) != 3);
        }"""))
    }

    @Test
    fun staticConstLiteralInFunction() {
        println(generate("""
            typedef unsigned char uint8_t;

            static unsigned hdr_bitrate_kbps(const uint8_t *h)
            {
                static const uint8_t halfrate[2][3][15] = {
                    { { 0,4,8,12,16,20,24,28,32,40,48,56,64,72,80 }, { 0,4,8,12,16,20,24,28,32,40,48,56,64,72,80 }, { 0,16,24,28,32,40,48,56,64,72,80,88,96,112,128 } },
                    { { 0,16,20,24,28,32,40,48,56,64,80,96,112,128,160 }, { 0,16,24,28,32,40,48,56,64,80,96,112,128,160,192 }, { 0,16,32,48,64,80,96,112,128,144,160,176,192,208,224 } },
                };
                return 2*halfrate[!!((h[1]) & 0x8)][(((h[1]) >> 1) & 3) - 1][((h[2]) >> 4)];
            }

         """))
    }

    @Test
    fun bug0() {
        println(generate("""static const float g_deq_L12[18*3] = { 9.53674316e-07f/3 };"""))
    }

    @Test
    fun bug1() {
        println(generate("""
            typedef unsigned char uint8_t;
            typedef unsigned short uint16_t;
            typedef unsigned int uint32_t;

            typedef char int8_t;
            typedef short int16_t;
            typedef int int32_t;

            typedef struct
            {
                const uint8_t *buf;
                int pos, limit;
            } bs_t;

            typedef struct
            {
                float scf[3*64];
                uint8_t total_bands, stereo_bands, bitalloc[64], scfcod[64];
            } L12_scale_info;

            static void L12_read_scalefactors(bs_t *bs, uint8_t *pba, uint8_t *scfcod, int bands, float *scf)
            {
                static const float g_deq_L12[18*3] = {

                    9.53674316e-07f/3, 7.56931807e-07f/3, 6.00777173e-07f/3,9.53674316e-07f/7, 7.56931807e-07f/7, 6.00777173e-07f/7,9.53674316e-07f/15, 7.56931807e-07f/15, 6.00777173e-07f/15,9.53674316e-07f/31, 7.56931807e-07f/31, 6.00777173e-07f/31,9.53674316e-07f/63, 7.56931807e-07f/63, 6.00777173e-07f/63,9.53674316e-07f/127, 7.56931807e-07f/127, 6.00777173e-07f/127,9.53674316e-07f/255, 7.56931807e-07f/255, 6.00777173e-07f/255,9.53674316e-07f/511, 7.56931807e-07f/511, 6.00777173e-07f/511,9.53674316e-07f/1023, 7.56931807e-07f/1023, 6.00777173e-07f/1023,9.53674316e-07f/2047, 7.56931807e-07f/2047, 6.00777173e-07f/2047,9.53674316e-07f/4095, 7.56931807e-07f/4095, 6.00777173e-07f/4095,9.53674316e-07f/8191, 7.56931807e-07f/8191, 6.00777173e-07f/8191,9.53674316e-07f/16383, 7.56931807e-07f/16383, 6.00777173e-07f/16383,9.53674316e-07f/32767, 7.56931807e-07f/32767, 6.00777173e-07f/32767,9.53674316e-07f/65535, 7.56931807e-07f/65535, 6.00777173e-07f/65535,9.53674316e-07f/3, 7.56931807e-07f/3, 6.00777173e-07f/3,9.53674316e-07f/5, 7.56931807e-07f/5, 6.00777173e-07f/5,9.53674316e-07f/9, 7.56931807e-07f/9, 6.00777173e-07f/9
                };
                int i, m;
                for (i = 0; i < bands; i++)
                {
                    float s = 0;
                    int ba = *pba++;
                    int mask = ba ? 4 + ((19 >> scfcod[i]) & 3) : 0;
                    for (m = 4; m; m >>= 1)
                    {
                        if (mask & m)
                        {
                            int b = get_bits(bs, 6);
                            s = g_deq_L12[ba*3 - 6 + b % 3]*(1 << 21 >> b/3);
                        }
                        *scf++ = s;
                    }
                }
            }

            static void L12_read_scale_info(const uint8_t *hdr, bs_t *bs, L12_scale_info *sci) {
            }
        """.trimIndent()))
    }

    @Test
    fun bug2() {
        println(generate("""
                        typedef unsigned char uint8_t;
            typedef unsigned short uint16_t;
            typedef unsigned int uint32_t;

            typedef char int8_t;
            typedef short int16_t;
            typedef int int32_t;

            typedef struct
            {
                const uint8_t *buf;
                int pos, limit;
            } bs_t;

            typedef struct
            {
                float scf[3*64];
                uint8_t total_bands, stereo_bands, bitalloc[64], scfcod[64];
            } L12_scale_info;

            static void L12_read_scale_info(const uint8_t *hdr, bs_t *bs, L12_scale_info *sci)
            {
                static const uint8_t g_bitalloc_code_tab[] = {
                    0,17, 3, 4, 5,6,7, 8,9,10,11,12,13,14,15,16,
                    0,17,18, 3,19,4,5, 6,7, 8, 9,10,11,12,13,16,
                    0,17,18, 3,19,4,5,16,
                    0,17,18,16,
                    0,17,18,19, 4,5,6, 7,8, 9,10,11,12,13,14,15,
                    0,17,18, 3,19,4,5, 6,7, 8, 9,10,11,12,13,14,
                    0, 2, 3, 4, 5,6,7, 8,9,10,11,12,13,14,15,16
                };
                const L12_subband_alloc_t *subband_alloc = L12_subband_alloc_table(hdr, sci);

                int i, k = 0, ba_bits = 0;
                const uint8_t *ba_code_tab = g_bitalloc_code_tab;

                for (i = 0; i < sci->total_bands; i++)
                {
                    uint8_t ba;
                    if (i == k)
                    {
                        k += subband_alloc->band_count;
                        ba_bits = subband_alloc->code_tab_width;
                        ba_code_tab = g_bitalloc_code_tab + subband_alloc->tab_offset;
                        subband_alloc++;
                    }
                    ba = ba_code_tab[get_bits(bs, ba_bits)];
                    sci->bitalloc[2*i] = ba;
                    if (i < sci->stereo_bands)
                    {
                        ba = ba_code_tab[get_bits(bs, ba_bits)];
                    }
                    sci->bitalloc[2*i + 1] = sci->stereo_bands ? ba : 0;
                }

                for (i = 0; i < 2*sci->total_bands; i++)
                {
                    sci->scfcod[i] = sci->bitalloc[i] ? ((hdr[1] & 6) == 6) ? 2 : get_bits(bs, 2) : 6;
                }

                L12_read_scalefactors(bs, sci->bitalloc, sci->scfcod, sci->total_bands*2, sci->scf);

                for (i = sci->stereo_bands; i < sci->total_bands; i++)
                {
                    sci->bitalloc[2*i + 1] = 0;
                }
            }
        """.trimIndent()))
    }

    @Test
    fun bug2a() {
        println(generate("""
            void main() {
                for (k = 0; k < group_size; k++, code /= mod) {
                }
            }

        """.trimIndent()))
    }

    @Test
    fun bug3() {
        println(generate("""
         typedef unsigned char uint8_t;
            typedef unsigned short uint16_t;
            typedef unsigned int uint32_t;

            typedef char int8_t;
            typedef short int16_t;
            typedef int int32_t;

            typedef struct
            {
                const uint8_t *buf;
                int pos, limit;
            } bs_t;

            typedef struct
            {
                float scf[3*64];
                uint8_t total_bands, stereo_bands, bitalloc[64], scfcod[64];
            } L12_scale_info;

        static int L12_dequantize_granule(float *grbuf, bs_t *bs, L12_scale_info *sci, int group_size)
        {
            int i, j, k, choff = 576;
            for (j = 0; j < 4; j++)
            {
                float *dst = grbuf + group_size*j;
                for (i = 0; i < 2*sci->total_bands; i++)
                {
                    int ba = sci->bitalloc[i];
                    if (ba != 0)
                    {
                        if (ba < 17)
                        {
                            int half = (1 << (ba - 1)) - 1;
                            for (k = 0; k < group_size; k++)
                            {
                                dst[k] = (float)((int)get_bits(bs, ba) - half);
                            }
                        } else
                        {
                            unsigned mod = (2 << (ba - 17)) + 1;
                            unsigned code = get_bits(bs, mod + 2 - (mod >> 3));
                            for (k = 0; k < group_size; k++, code /= mod)
                            {
                                dst[k] = (float)((int)(code % mod - mod/2));
                            }
                        }
                    }
                    dst += choff;
                    choff = 18 - choff;
                }
            }
            return group_size*4;
        }

        """))
    }

    @Test
    fun bug4() {
        println(generate("""
            static void L3_imdct_short(float *grbuf, float *overlap, int nbands)
            {
                for (;nbands > 0; nbands--, overlap += 9, grbuf += 18)
                {
                    float tmp[18];
                    __builtin___memcpy_chk (tmp, grbuf, sizeof(tmp), __builtin_object_size (tmp, 0));
                    __builtin___memcpy_chk (grbuf, overlap, 6*sizeof(float), __builtin_object_size (grbuf, 0));
                    L3_imdct12(tmp, grbuf + 6, overlap + 6);
                    L3_imdct12(tmp + 1, grbuf + 12, overlap + 6);
                    L3_imdct12(tmp + 2, overlap, overlap + 6);
                }
            }
        """.trimIndent()))
    }

    @Test
    fun demo() {
        println(generate("""void *malloc(int c);"""))
    }

    @Test
    fun demo2() {
        println("#define true() false\n\ntrue\ntrue()".preprocess())
    }
}
