---
title: Updating a Container
description: Updating a docker container image.
date: 2021-03-03
path: /updating-docker-container
tags: ["docker"]
---

In order to update a docker container, we need to follow a few steps _(outlined below)_. We will need to update the image to a newer version and then build a new container based off that image. It is usually best to not use the image with the ':latest' tag. Instead try to build your container off of a specific image version
([What's Wrong With The Docker :latest Tag?](https://vsupalov.com/docker-latest-tag)).

##### 1. Stop the Running Container:
* Run: `docker container stop [container id]`
  * Or: run `docker-compose down`

##### 1. Remove the Old Container:
* Run: `docker container rm id`


##### 1. Pull the New Image:
* Run: `docker pull image:tag`
  * Or: update the image `tag` in your docker-compose file.

##### 1. Start the New Container:
* Run: `docker run ...`
  * Or: `docker-compose up`

##### Note:
In order to find the current image version of your container, you can run an inspect command on your running container:
* `docker inspect [container id]`

Find the current image tag within this metadata. Then take this image tag and plug it into a search on Docker Hub to determine a reasonable image version for your new container.

##### Warning:
*When you update your image to a new version pay attention to breaking changes. Do not update your container to an image version that requires changes to your container setup without first making the needed changes.*