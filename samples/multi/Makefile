CC=../../ktcc_jvm
CFLAGS=-I.
DEPS = two.h

%.o: %.c $(DEPS)
	$(CC) -c -o $@ $< $(CFLAGS)

hellomake: one.o two.o
	$(CC) -o out one.o two.o
