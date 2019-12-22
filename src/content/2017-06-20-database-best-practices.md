---
layout: portfolio_entry
title: Database Best Practices
description: Tips I have learned for best databases creation
date: 2017-06-20
excerpt_separator: <!--more-->
tags: Databases Standards
---

Over the years, I have come to some general conclusions regarding database structure and naming which I have listed below:

<!--more-->

<h3>Databases:</h3>
* When creating a database, use one, lowercase word for the name.

<h3>Tables:</h3>
* For tables, use a plural word such as `users`, `houses`, etc.
 - It is best to use a single word for table names instead of two words with an underscore.
* It is best to separate large tables into a series of smaller tables that represent constituent parts (normalization).

<h3>Fields:</h3>
* When naming fields use lowercase letters for consistency.
* If two words are necessary use an underscore between them to increase reading clarity.
* If a field is meant to hold a boolean value, start it with a verb or name the field with a verb (i.e. is_deleted, remove).
* For foreign keys, precede the field name with the name of the source table (i.e. `users_id`).

<h3>Permissions</h3>
* When giving users permission to a database table, only allow the minimum set of needed permissions. So if a users needs to be able to `SELECT` from a particular table in a database, give them `SELECT` permission on that table only.
* When building user interfaces that allows users to remove database entries, it is best to give the user 'soft delete' permission.
  - Soft Delete means that a user would be allowed to mark a field as true that would hide a table record. From the front-end, the entry would be removed - giving the appearance of deletion. However, the record would only be marked for removal on the back-end database.
   - This way the user would only need `UPDATE` permission on the database table instead of `DELETE` permission. Therefore, in the event of a site compromise (such as SQL Injection), the hacker would be working with a database user that had more limited permissions.