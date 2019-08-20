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