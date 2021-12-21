---
title: Start with Docker
description: Here I describe some of the basic building blocks of Docker and how to get started using it. This post outlines tips for using images and building containers. In addition, it displays other docker-related tips.
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

#### View Local Image:
* You can run the `docker image` command to see this image on your local system:
* `docker image ls | grep postgre`

#### Build a Container:

- From here we can create a container with the `docker run` command:
- `docker run --name postgres_cont --rm -e POSTGRES_PASSWORD=password -d postgres`
  - `--name` will name my container.
  - `--rm` tells my container to delete the container when it stops running.
      - Otherwise, my system will potentially build up a whole bunch of containers that use the same image.
  - `-e` will pass environmental values to my container.
      - In this case, Docker Hub's explanation for the postgres container says that the `POSTGRES_PASSWORD` is required for this image.
  - `-d` tells the container to run in the background.
  - `postgres` tells my container which image to use.
- Now, I have a container named 'postgres_cont' on my local machine.

#### Start and Connect to a Container:
- I can start the container with a run command and then connect to a shell session by running a command similar to this:
- `docker run --name postgres_cont --rm -it -e POSTGRES_PASSWORD=password postgres bash`
  - `-it` says to start an interactive terminal that stays open.
  - `bash` tells my container to run the bash shell.
      - In some cases, the image will not be based off of an image that includes bash, so you would have to use `/bin/sh` instead.
    - From inside this shell we could then interact with or database via `psql`.
- We could also start an interactive shell session inside the container directly with the postgres terminal:
- `docker run --name postgres_cont --rm -it -e POSTGRES_PASSWORD=password postgres psql -U postgres`
  - `postgres psql -U postgres` is saying when you attach to this container run `psql` and connect with the `postgres` user.

#### Connect to a Running Container:

- I can connect to a running container by running the `exec` command.
    - This container could have been started by using `run` with the `-d` flag or it could have been started by running `docker-compose up`.
- `docker exec -it postgres_cont bash`
  - `-it` says to start an interactive terminal that stays open.
  - `postgres_cont` is my container name.
  - `bash` is the process I want to use when I attach to my container.
  - This will give me an interactive terminal session within the container where I can run postgres commands.

#### Connect to the Container from the Host:
- If I want to connect to my container from my host machine, I will need to expose the container's port to my host.
- `docker run --name postgres_cont -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres`
- Now instead of having to connect to my running container via the command line, I can use any postgres GUI and connect to my database from my host machine on port 5432.
