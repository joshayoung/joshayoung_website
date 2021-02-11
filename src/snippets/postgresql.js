import React from 'react';

export default () => (
  <dl>
    <dt>Connect to Database</dt>
    <dd><code>\c DATABASE_NAME</code></dd>
    <dt>List Databases</dt>
    <dd><code>\l</code></dd>
    <dt>Tables in database:</dt>
    <dd><code>\dt</code></dd>
    <dt>Connect with admin user:</dt>
    <dd>psql -U postgres</dd>
    <dt>Connect with user to a specific database</dt>
    <dd>psql -U username database_name</dd>
    <dt>Show Users</dt>
    <dd>\du</dd>
    <dt>Create User, Database, Grant Privileges</dt>
    <dd>
      CREATE USER my_user_name WITH PASSWORD 'MY_PASSWORD';
      CREATE DATABASE my_user_db;
      GRANT ALL PRIVILEGES ON DATABASE my_user_db to my_user_name;
    </dd>
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