+++
title = "Develop locally with Firebase"
date = 2022-03-03
description = "If ever you have to work with Firebase - authentication especially - I will show you how to work with this set of tools locally."
+++

## Firebase Emulator
## Use it with Docker
### Persist data

Example docker-compose

```yml
services:
  firebase:
    image: andreysenov/firebase-tools
    command: firebase emulators:start --project demo-culturegreen --import=./export --export-on-exit
    volumes:
      - ./firebase/:/home/node
    ports:
      - 4000:4000 # Emulator Suite UI
      - 5000:5000 # Firebase Hosting
      - 5001:5001 # Clound Functions
      - 9000:9000 # Realtime Database
      - 9199:9199
      - 9099:9099 # Firebase Authentication
      - 8080:8080 # Cloud Firestore
      - 8085:8085 # Cloud Pub/Sub"
```
