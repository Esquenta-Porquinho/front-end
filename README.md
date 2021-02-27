<h1 align="center">Welcome to Front-End from Porquinho Project 👋</h1>

<div align="center">
    <img src=".github\pig.png" alt="This is an image of a pig under a book with <> symbols in front of it">
</div> 

***

## The front-end repository

> The complete history of this project you will find at the [documentation repository](https://github.com/Esquenta-Porquinho/documentation)

- On this repository you will find:

    - A Single Page Application with Vue.js
    - The most common mapping REST requests using axios, as DELETE, GET, POST, PUT and PATCH
    - A bilingue texts with i18n plugin
    - A system design using Vuetify plugin
    - Authentication with JWT Token
    - Authorization with the Roles pattern

***


## Useful links
- [Front-end Repository](https://github.com/Esquenta-Porquinho/front-end)
- [Documentation Repository](https://github.com/Esquenta-Porquinho/documentation)

***

## Running using cli

> First you'll need to install the external requirements

### External Requirements

1. We are using [Nodejs 12](https://www.oracle.com/br/java/technologies/javase-jdk11-downloads.html).

### Install Project
```git clone https://github.com/Esquenta-Porquinho/frond-end.git```

```cd front-end```

```npm install```

```npm run serve```


## Running with docker

> First you'll need to install the [docker](https://docs.docker.com/engine/install/) +19.03 and docker-compose](https://docs.docker.com/compose/install/) +1.17

### Install Project
```git clone https://github.com/Esquenta-Porquinho/frond-end.git```

```docker build --pull --rm -f "front-end/Dockerfile" -t front-end:latest "front-end"```

```docker run --rm -d  -p 80:80/tcp front-end:latest```

> To stop the container use the hash that's appear after the last command

```docker stop {hash}```

## :link: Useful links
- [Back-End Repository](https://github.com/Esquenta-Porquinho/back-end)
- [Documentation Repository](https://github.com/Esquenta-Porquinho/documentation)
***

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Esquenta-Porquinho/front-end/issues). 
***

## Show your support ⭐️

Give a ⭐️ if this project helped you!
***
