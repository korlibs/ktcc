export DIR="$( cd "$(dirname "$0")" ; pwd -P )"

echo $DIR/samples/mp3dec.c

gcc $DIR/samples/mp3dec.c -o $DIR/samples/mp3dec
$DIR/samples/mp3dec $DIR/samples/mp31.mp3 $DIR/samples/mp31.c.pcm > mp31.c.txt
./ktcc_jvm $DIR/samples/mp3dec.c > mp31.kt
./ktcc_jvm $DIR/samples/mp3dec.c -e $DIR/samples/mp31.mp3 $DIR/samples/mp31.kt.pcm > mp31.kt.txt
