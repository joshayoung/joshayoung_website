---
title: Docker Run Command
description: The docker run command in more depth.
date: 2021-02-22
path: /docker-run-command
tags: ["docker"]
---

The `docker run` command is used to create a container from an image. It can be used in a few different ways to provide images in different formats.

##### Create a Persistent Container:

- `docker container run --name my-postgres -e POSTGRES_PASSWORD=password -d postgres`
  - Here I am creating a container named 'my-postgres'. This container will exist on my local file system and can be started/stopped at will.
  - By default when you first create the container it will be stopped.
- You can see the container by running:
  - `docker container ls -a | grep my-postgres`.
  ```bash
  1234567890 postgres "/bin/sh" 57 seconds ago Exited (0) 56 seconds ago my-postgres
  ```
- We can spin up the container:
  - `docker container start my-postgres`
- Now we can attach to it with an interactive terminal:
  - `docker exec -it my-postgres bash`.
- Start a container with the psql shell:
  - `docker exec -it my-postgres4 psql -U postgres`

##### Create a Temporary Container:

Each time we execute the run command and specify a `--name` flag, we create a container by that name on our host. Therefore, if we run it again, we will get an error to the effect of: 'this container already exists'. We can circumvent this by specifying a different a different name for the `--name` flag. However, we can also just specify the `--rm` flag.

- `docker container run -it -p 5432:5432 -e POSTGRES_PASSWORD=password postgres bash`
  - Here I get an interactive temporary container that will not be saved to my file system upon exit.
