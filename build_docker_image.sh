#!/bin/bash
./gradlew_linux linkMainReleaseExecutableLinuxX64
docker build . -t soywiz/ktcc:latest
