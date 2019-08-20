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