import React from 'react';

export default () => (
  <dl>
    <dt>Connect to Database</dt>
    <dd><code>\c DATABASE_NAME</code></dd>
    <dt>List Databases</dt>
    <dd><code>\l</code></dd>
    <dt>Tables in database:</dt>
    <dd><code>\dt</code></dd>
    <dt>Describe Table</dt>
    <dd><code>\dt+</code></dd>
    <dt>Leave SQL Server</dt>
    <dd><code>\q</code></dd>
    <dt>Connect to Postgres</dt>
    <dd><code>psql postgres</code></dd>
    <dt>Create User</dt>
    <dd><code>CREATE USER myuser WITH PASSWORD 'my password';</code></dd>
    <dt>Create Role</dt>
    <dd><code>CREATE ROLE myuser WITH LOGIN PASSWORD 'my password';</code></dd>
    <dt>Alter Role</dt>
    <dd><code>ALTER USER myuser WITH CREATEDB;</code></dd>
  </dl>
);