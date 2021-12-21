---
title: Docker Run Command
description: There are lots of different ways to use the docker run command. This entry outlines these steps in more depth.
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
  1234567890 postgres "docker-entrypoint.s…" 27 seconds ago Up 26 seconds 5432/tcp my-postgres
  ```
- Now we can attach to it with a bash shell:
  - `docker exec -it my-postgres bash`.
      - From inside this shell we can run a program (like `psql` in this case).
- Start a container with the psql shell:
  - `docker exec -it my-postgres psql -U postgres`
      - I should be in an interactive `psql` session within my container.

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

##### Connect to Your Running Container from your Host:
- If I expose the container's listen port to my host machine via the `-p` flag, then I can connect to the running server on my container from a program on my host.
- `docker container run --name my-postgres -p 5433:5432 -it --rm -e POSTGRES_PASSWORD=password -d postgres`
    - Here I am saying expose port 5432 to my host via port 5433.
    - I now should be able to use any postgres gui client installed on my laptop to connect to the running postgres server in my container.
