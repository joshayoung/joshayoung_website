import React from "react";

export default () => (
  <dl>
    <dt>Show containers</dt>
    <dd>
      <code>docker-compose ps</code>
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
    <dt>Start a container</dt>
    <dd>
      <code>docker start [container name]</code>
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
  </dl>
);
