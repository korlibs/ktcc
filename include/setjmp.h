typedef int jmp_buf[64];

extern int setjmp(jmp_buf);
extern void longjmp(jmp_buf, int) __dead2;
