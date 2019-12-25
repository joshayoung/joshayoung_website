import React from 'react';

export default () => (
  <dl>
    <dt>Connect to Database</dt>
    <dd>`\c DATABASE_NAME`</dd>
    <dt>List Databases</dt>
    <dd>`\l`</dd>
    <dt>Tables in database:</dt>
    <dd>`\dt`</dd>
    <dt>Describe Table</dt>
    <dd>`\dt+`</dd>
    <dt>Leave SQL Server</dt>
    <dd>`\q`</dd>
    <dt>Connect to Postgres</dt>
    <dd>`psql postgres`</dd>
    <dt>Create User</dt>
    <dd>`CREATE USER myuser WITH PASSWORD 'my password';`</dd>
    <dt>Create Role</dt>
    <dd>`CREATE ROLE myuser WITH LOGIN PASSWORD 'my password';`</dd>
    <dt>Alter Role</dt>
    <dd>`ALTER USER myuser WITH CREATEDB;`</dd>
  </dl>
);