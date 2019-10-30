#!/usr/bin/env bash

trap killgroup SIGINT

killgroup(){
  echo killing...
  kill 0
}

hs docs -c-1 &
./gradlew jsWebDce -t &
wait