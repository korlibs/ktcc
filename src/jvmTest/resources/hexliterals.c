typedef unsigned char uint8_t;

static int hdr_valid(const uint8_t *h)
{
return h[0] == 0xff &&
    ((h[1] & 0xF0) == 0xf0 || (h[1] & 0xFE) == 0xe2) &&
    ((((h[1]) >> 1) & 3) != 0) &&
    (((h[2]) >> 4) != 15) &&
    ((((h[2]) >> 2) & 3) != 3);
}