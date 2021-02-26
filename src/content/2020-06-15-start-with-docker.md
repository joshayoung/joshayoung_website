---
title: Start with Docker
description: Here I describe some of the basic building blocks of Docker and how to get started using it.
date: 2020-06-15
path: /start-with-docker
tags: ["docker"]
---

Before I embark on the road to explain docker, I want to define a few concepts. In the docker world, we have two structures: _images_ and _containers_. At the base level, you can download (pull) an image from the [hub.docker.com](https://hub.docker.com), and use it to build a container.

#### Pull a Image:

- `docker pull postgres`
- You will see something like this on your command line:

```bash
Using default tag: latest
latest: Pulling from library/postgres
Digest: sha256:ce0f6c28b5869ff166714d5ff9702e38b00f81ad348c6
```

- This will provide an image on your local machine for use with building a container.

#### Build a Container:

- From here we can create a container with the `docker run` command:
- `docker run --name postgres_cont -e POSTGRES_PASSWORD=password -d postgres`
  - `--name` will name my container.
  - `-e` will pass environmental values to my container.
  - `-d` tells the run command which image to use.
- Now, I have a container named 'postgres_cont' on my local machine.
- I can spin this container up by running the 'start' command:
  - `docker container start postgres_cont`

#### Connect to a Running Container:

- I can connect to a running container by running the `exec` command:
- `docker exec -it postgres_cont bash`
  - `-it` says to create an interactive session.
  - `postgres_cont` is my container name.
  - `bash` is the process I want to use when I attach to my container.
  - This will give me an interactive terminal session within the container where I can run postgres commands.

#### Connect to the Container from the Host:

If I want to connect to my container from my host machine, I will need to expose the container's port to my host.

- `docker run --name postgres_cont -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres`
- Now instead of having to connect to my running container via the command line, I can use any postgres gui to connect to my database from my host machine on port 5432.
