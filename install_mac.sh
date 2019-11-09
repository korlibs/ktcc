#!/usr/bin/env bash
./gradlew --no-daemon linkReleaseExecutableMacosX64
cp ./build/bin/macosX64/releaseExecutable/ktcc.kexe /usr/local/bin/ktcc