---
layout: portfolio_entry
title: One-to-Many Association in Rails
description: This post will step through the necessary stepst to setup a one-to-many relationship between two tables in rails.
date: 2018-05-21
excerpt_separator: <!--more-->
tags: Programming Rails Ruby MVC
---

Below I have outlined the necessary steps to get a one-to-many association going in your rails project. For each step, I tried to outline the setup steps as well as the SQL queries that are executed behind the schenes for each of these commands.

<!--more-->


#### Setup the basic rails project with two models/tables
```bash
  #Creates the initial ruby project files:
  rails new carsapp

  #Creates the migration and model file:
  rails g model car brand:string color:string

  #Create the child association:
  rails g model passenger name:string ride_length:string car:references

  #Runs the migration to create the database:
  rails db:migrate
```

These commands should create these models:

```ruby
class Car < ApplicationRecord
end

class Passenger < ApplicationRecord
  belongs_to :car
end
```

It will also create these tables:
<table>
  <thead>
    <tr>
      <th colspan='5'>cars</th>
    </tr>
    <tr>
      <th>id</th>
      <th>brand</th>
      <th>color</th>
      <th>created_at</th>
      <th>updated_at</th>
    </tr>
  </thead>
</table>

The 'car_id' field below is a foreign key that points back to the 'id' field in 'cars'.
<table>
  <thead>
    <tr>
      <th colspan='6'>passengers</th>
    </tr>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>ride_length</th>
      <th>car_id</th>
      <th>created_at</th>
      <th>updated_at</th>
    </tr>
  </thead>
</table>

#### Add parent and child data:
Open the rails console with 'rails c' and run these commands to create some data.
```ruby

c = Car.new
c.brand = "Honda"
c.color = "red"
c.save

#SQL:
#begin transaction
#INSERT INTO "cars" ("brand", "color", "created_at", "updated_at") VALUES (?, ?, ?, ?)
#commit transaction

p = Passenger.new
p.name = "Bob"
p.ride_length = "1hr"

#The 'belongs_to :car' line in our model allows for this assignment:
#This line sets the 'car_id' to the ID of the car belonging to 'c':
p.car = c

p.save

#SQL:
#begin transaction
#INSERT INTO "passengers" ("name", "ride_length", "car_id", "created_at", "updated_at") VALUES (?, ?, ?, ?, ?)
#commit transaction
```

#### Convenience methods:

This relationship allow for some handy queries outlined below:

```ruby
  p = Passenger.first

  #SQL:
  #SELECT  "passengers".* FROM "passengers" ORDER BY "passengers"."id" ASC LIMIT ?

  #Will print out an object containing the car the passenger is associated with:
  p.car

  #SQL:
  #SELECT  "cars".* FROM "cars" WHERE "cars"."id" = ? LIMIT ?
```

#### We could also create a passenger assigned to a specific car, like this as well:
```ruby
c = Car.first
#SQL: SELECT  "cars".* FROM "cars" ORDER BY "cars"."id" ASC LIMIT ?

p = Passenger.new(name: "Jane", ride_length: "1.5hrs", car: c)
p.save


#SQL:
#begin transaction
#INSERT INTO "passengers" ("name", "ride_length", "car_id", "created_at", "updated_at") VALUES (?, ?, ?, ?, ?)
#commit transaction

#From that we can also get the 'car' that the 'passenger' is in:
the_car = p.car
```

In order to get the reverse of the relationship, we have to add the string below to the parent model:
```ruby
class Car < ApplicationRecord
  has_many :passengers
end
```

By added this line, we can perform the reverse of the query:
```ruby
  c = Car.first
  c.passengers

  #SQL:
  #SELECT "passengers".* FROM "passengers" WHERE "passengers"."car_id" = ?

  #We can also save a record with the car relationship already set:
  c = Car.find_by(brand: "Honda")

  #SQL:
  #SELECT  "cars".* FROM "cars" WHERE "cars"."brand" = ? LIMIT ?

  p = c.passengers.new(name: "Jack", ride_length: "30min.").save
  #begin transaction
  #INSERT INTO "passengers" ("name", "ride_length", "car_id", "created_at", "updated_at") VALUES (?, ?, ?, ?, ?)
  #commit transaction
```

To allow child table entries to be deleted when a parent entry is deleted, we have to add the line below to the model. Otherwise, when the parent is removed the child entries will stay in the child table, but they will be linked to an non-existent record.

```ruby
class Car < ApplicationRecord
  has_many :passengers, dependent: :destroy
end
```

Example:
```ruby
c = Car.first

#SQL:
#SELECT  "cars".* FROM "cars" ORDER BY "cars"."id" ASC LIMIT ?

c.destroy

#SQL:
#begin transaction
#SELECT "passengers".* FROM "passengers" WHERE "passengers"."car_id" = ?
#DELETE FROM "passengers" WHERE "passengers"."id" = ?
#DELETE FROM "passengers" WHERE "passengers"."id" = ?
#DELETE FROM "cars" WHERE "cars"."id" = ?
#commit transaction
```

<p>I have included the code for this mvc application in this repo: <a href='https://github.com/joshayoung/one-to-many-rails'>one-to-many-rails</a>.</p>
