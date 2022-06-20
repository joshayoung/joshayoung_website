import React from "react";

export default () => (
  <dl>
    <dt>Show containers</dt>
    <dd>
      <code>docker-compose ps</code>
    </dd>
    <dt>List all Images</dt>
    <dd>
      <code>docker image ls -a</code>
    </dd>
    <dt>List all Containers</dt>
    <dd>
      <code>docker container ls -a</code>
    </dd>
    <dt>List all Volumes</dt>
    <dd>
      <code>docker volume ls</code>
    </dd>
    <dt>Start containers in docker-compose</dt>
    <dd>
      <code>docker-compose up</code>
    </dd>
    <dt>Kill Dangling Docker Process:</dt>
    <dd>
      <code>
        <pre>
          docker-compose down docker rm -fv $(docker ps -aq) sudo lsof -i -P -n
          | grep 5432
        </pre>
      </code>
    </dd>
    <dt>Stop a container</dt>
    <dd>
      <code>docker stop [container name]</code>
    </dd>
    <dt>Stop Running Containers</dt>
    <dd>
      <code>docker container stop $(docker container list -q)</code>
    </dd>
    <dt>Stop All Running Containers</dt>
    <dd>
      <code>docker container ps -q | xargs docker container stop</code>
    </dd>
    <dt>Prune System - use caution with this</dt>
    <dd>docker system prune -a</dd>
    <dt>Delete All Images (be careful!)</dt>
    <dd>
      <code>docker image ls -q -a | xargs docker image rm -f</code>
    </dd>
    <dt>Delete All Containers (be careful!)</dt>
    <dd>
      <code>docker container ps -q -a | xargs docker container rm</code>
    </dd>
    <dt>Delete All Volumes (be careful!)</dt>
    <dd>
      <code>docker volume ls -q | xargs docker volume rm</code>
    </dd>
    <dt>Copy File from Container to Host</dt>
    <dd>
      <code>
        docker cp container_name:/path/to/file/on/container.txt /path/on/host/
      </code>
    </dd>
    <dt>Detach from a Running Container</dt>
    <dd>Ctrl+P then Ctrl+Q</dd>
    <dt>Re-attach to a Running Container</dt>
    <dd>docker attach [container id]</dd>
    <dt>Show Mounts</dt>
    <dd>
      docker inspect -f "&#123;&#123; .Mounts &#125;&#125;" [container id]
    </dd>
    <dt>Show Docker Stats</dt>
    <dd>
      <code>docker stats</code>
    </dd>
    <dt>Start a container</dt>
    <dd>
      <code>docker start [container name]</code>
    </dd>
    <dt>Docker `exec` vs `attach`</dt>
    <dd>
      `exec` creates a new instance of the container and connects to it.
      `attach` connects to the currently running instance.
    </dd>
    <dt>Connect to a running container</dt>
    <dd>
      <code>docker exec -it [image name] /bin/bash</code>
    </dd>
    <dt>Spin up and Build</dt>
    <dd>docker-compose up --build</dd>
    <dt>Boot Up Detached</dt>
    <dd>docker-compose up -d</dd>
    <dt>Run, Build, and Detach</dt>
    <dd>docker-compose up --build -d</dd>
    <dt>Run a Service and Expose the Ports</dt>
    <dd>docker-compose run --service-ports dev rails server -b 0.0.0.0</dd>
    <dt>Docker compose - bust the cache</dt>
    <dd>
      <code>docker-compose build --no-cache</code>
    </dd>
    <dt>Run a single image through compose</dt>
    <dd>
      <code>docker-compose run dev rails server -b 0.0.0.0</code>
    </dd>
    <dt>Spin up container</dt>
    <dt>Start a Single Service via Docker Compose</dt>
    <dd>
      <code>docker-compose up -d service_name</code>
    </dd>
    <dd>
      <code>docker restart $(docker ps -q)</code>
    </dd>
    <dt>Copy file from host to container</dt>
    <dd>
      <code>docker cp file.txt container_id:/file.txt</code>
    </dd>
    <dt>Copy file from container to host</dt>
    <dd>
      <code>docker cp container_id:/file.txt file.txt</code>
    </dd>
    <dt>Force the Re-creation of Container</dt>
    <dd>
      <code>docker-compose up --force-recreate</code>
    </dd>
    <dt>Restart All Containers</dt>
    <dd>
      <code>docker-compose up</code>
    </dd>
    <dt>Turn off container</dt>
    <dd>
      <code>docker-compose down</code>
    </dd>
    <dt>List running containers</dt>
    <dd>
      <code>docker-compose ps</code>
    </dd>
    <dt>Attach to running container</dt>
    <dd>
      <code>docker exec -it [container name] /bin/bash</code>
    </dd>
    <dt>Delete all Images</dt>
    <dd>
      <code>docker image ls -q -a | xargs docker image rm -f</code>
    </dd>
    <dt>Delete all Container</dt>
    <dd>
      <code>
        docker container ps -q -a | xargs docker container rm
      </code>
    </dd>
    <dt>Delete all Volumes</dt>
    <dd>
      <cod>
        docker volume ls -q | xargs docker volume rm
      </cod>
    </dd>
    <dt>Add Linux User to Docker Group (allows docker use without `sudo`)</dt>
    <dd>
      <cod>
        sudo usermod -aG docker $USER
      </cod>
    </dd>
  </dl>
);
