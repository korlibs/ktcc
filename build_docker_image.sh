#!/bin/bash
./gradlew_linux linkReleaseExecutableLinuxX64
docker build . -t soywiz/ktcc:latest
