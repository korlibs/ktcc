export DIR="$( cd "$(dirname "$0")" ; pwd -P )"

echo $DIR/samples/mp3dec.c

gcc $DIR/samples/mp3dec.c -o $DIR/samples/mp3dec && \
  $DIR/samples/mp3dec $DIR/samples/ILL2_layer3.bit $DIR/samples/ILL2_layer3.c.pcm \\
  $DIR/samples/mp3dec $DIR/samples/mp31.mp3 $DIR/samples/mp31.c.pcm \\

./ktcc_jvm $DIR/samples/mp3dec.c -e $DIR/samples/ILL2_layer3.bit $DIR/samples/ILL2_layer3.kt.pcm
./ktcc_jvm $DIR/samples/mp3dec.c -e $DIR/samples/mp31.mp3 $DIR/samples/mp31.kt.pcm
