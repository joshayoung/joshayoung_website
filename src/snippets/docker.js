import React from 'react';

export default () => (
  <dl>
    <dt>Show containers</dt>
    <dd>`docker-compose ps`</dd>
    <dt>Start containers in docker-compose</dt>
    <dd>`docker-compose up`</dd>
    <dt>Stop a container</dt>
    <dd>`docker stop [container name]`</dd>
    <dt>Start a container</dt>
    <dd>`docker start [container name]`</dd>
    <dt>Connect to a running container</dt>
    <dd>`docker exec -it [container name] /bin/bash`</dd>
    <dt>Docker compose - bust the cache</dt>
    <dd>`docker-compose build --no-cache`</dd>
    <dt>Spin up container</dt>
    <dd>`docker-compose up`</dd>
    <dt>Turn off container</dt>
    <dd>`docker-compose down`</dd>
    <dt>List running containers</dt>
    <dd>`docker-compose ps`</dd>
    <dt>Attach to running container</dt>
    <dd>`docker exec -it [container name] /bin/bash`</dd>
  </dl>
);