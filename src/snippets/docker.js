import React from 'react';

export default () => (
  <dl>
    <dt>Show containers</dt>
    <dd><code>docker-compose ps</code></dd>
    <dt>Start containers in docker-compose</dt>
    <dd><code>docker-compose up</code></dd>
    <dt>Stop a container</dt>
    <dd><code>docker stop [container name]</code></dd>
    <dt>Start a container</dt>
    <dd><code>docker start [container name]</code></dd>
    <dt>Connect to a running container</dt>
    <dd><code>docker exec -it [container name] /bin/bash</code></dd>
    <dt>Docker compose - bust the cache</dt>
    <dd><code>docker-compose build --no-cache</code></dd>
    <dt>Spin up container</dt>
    <dd><code>docker-compose up</code></dd>
    <dt>Turn off container</dt>
    <dd><code>docker-compose down</code></dd>
    <dt>List running containers</dt>
    <dd><code>docker-compose ps</code></dd>
    <dt>Attach to running container</dt>
    <dd><code>docker exec -it [container name] /bin/bash</code></dd>
  </dl>
);