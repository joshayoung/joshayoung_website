---
title: Docker Run Command
description: The docker run command in more depth.
date: 2021-02-22
path: /docker-run-command
tags: ["docker"]
---

The `docker run` command is used to create a container from an image. It can be executed in a few different ways to provide images in different formats.

##### Create a Persistent Container:

- `docker container run --name my-postgres -e POSTGRES_PASSWORD=password -d postgres`
  - Here I am creating a container named 'my-postgres'. This container will exist on my local file system and can be started/stopped at will.
  - Because I have used the `-d` flag the container will be started in the background.
- You can see the container by running:
  - `docker container ls | grep my-postgres`.
  ```bash
  1234567890 postgres "/bin/sh" 57 seconds ago Exited (0) 56 seconds ago my-postgres
  ```
- We can spin up the container:
  - `docker container start my-postgres`
- Now we can attach to it with a bash shell:
  - `docker exec -it my-postgres bash`.
- Start a container with the psql shell:
  - `docker exec -it my-postgres psql -U postgres`

##### Create a Temporary Container:

Each time we execute the run command and specify a `--name` flag, we create a container by that name on our host. Therefore, if we run our docker `run` command again, we will get an error to the effect of: 'this container already exists'. We can circumvent this issue kby specifying a different value for the `--name` flag. Alternatively, we can also use the `--rm` flag.
- `docker container run --name my-postgres -it --rm -e POSTGRES_PASSWORD=password postgres bash`
  - Here I get an interactive temporary container that will not be saved to my file system upon exit.
- `docker container run --name my-postgres --rm -e POSTGRES_PASSWORD=password -d postgres`
  - Here I am starting my new container in the background. It will exist until it is stopped. At which point it will be deleted due to the `--rm` flag.

##### Interactive Session:
- As noted above, using `-it` and passing a shell to the container like: `bash` will allow me to connect to a shell instance inside my running container.
- `docker container run --name my-postgres -it --rm -e POSTGRES_PASSWORD=password postgres bash`
- If you are debugging an application like rails for instance and want to use a debugger, make sure you specify the `-it`. Otherwise you may spend a lot of time trying to determine why your server sessions is running but not hitting any of your breakpoints. I speak from experience :)
