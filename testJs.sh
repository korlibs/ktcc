#!/usr/bin/env bash

trap killgroup SIGINT

killgroup(){
  echo killing...
  kill 0
}

hs docs &
./gradlew jsWebDce -t &
wait