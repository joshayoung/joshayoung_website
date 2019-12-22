---
layout: portfolio_entry
title: Many-to-Many Association in Rails
description: This post will demonstrate a basic many-to-many association in rails as well as the through-association.
date: 2018-05-26
excerpt_separator: <!--more-->
tags: Programming Rails Ruby MVC
---

To setup a basic many-to-many associations, we need to start by declaring the needed models withing the rails console. We need three models for this purpose. Two tables with a regular ID field and one table with its ID field along with the ID fields of each of the other tables. This table serves the purpose of a joining table (a.ka. Join Table or Pivot Table). The many-to-many association is really

<!--more-->

just two one-to-many associations with a joining table in the middle as demonstrated in the table diagram below.

#### From the rails console create the needed models:
```ruby
  rails g model Product
  rails g mdoel Satisfaction
  rails g model Buyer
```

This will create three model and migration files. Open each of the migration files and added the needed fields so they can be created with a `rails db:migrate` command.

#### Product Migration
```ruby
class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.date :manufacture_date
      t.timestamps
    end
  end
end
```

#### Satisfaction Migration
```ruby
class CreateSatisfactions < ActiveRecord::Migration[5.0]
  def change
    create_table :satisfactions do |t|
      t.integer :rank
      t.references :product, foreign_key: true
      t.references :buyer, foreign_key: true
      t.timestamps
    end
  end
end
```

#### Buyer Migration
```ruby
class CreateBuyers < ActiveRecord::Migration[5.0]
  def change
    create_table :buyers do |t|
      t.string :name
      t.string :age
      t.date :buy_date
      t.timestamps
    end
  end
end
```

#### This will setup the following tables

<table>
  <thead>
    <tr>
      <th colspan='5'>products</th>
    </tr>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>manufacture_date</th>
      <th>created_at</th>
      <th>updated_at</th>
    </tr>
  </thead>
</table>

The `product_id` is a foreign key pointing to the 'products' table and the `buyer_id` is a foreign key pointing to the 'buyers' table.

<table>
  <thead>
    <tr>
      <th colspan='6'>satisfactions</th>
    </tr>
    <tr>
      <th>id</th>
      <th>rank</th>
      <th>product_id</th>
      <th>buyer_id</th>
      <th>created_at</th>
      <th>updated_at</th>
    </tr>
  </thead>
</table>

<table>
  <thead>
    <tr>
      <th colspan='6'>buyers</th>
    </tr>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>age</th>
      <th>buy_date</th>
      <th>created_at</th>
      <th>updated_at</th>
    </tr>
  </thead>
</table>

At this point, we need to setup the necessary associations within the model files. This can be accomplished by added the `belongs_to` and `has_many` lines listed int the model files below.

#### Product Model:
```ruby
class Product < ApplicationRecord
  has_many :satisfactions
end
```

#### Satisfaction Model:
```ruby
class Satisfaction < ApplicationRecord
  belongs_to :product
  belongs_to :buyer
end
```

#### Buyer Model:
```ruby
class Buyer < ApplicationRecord
  #The 'dependent: :destroy' says to destroy the satisfaction
  #ranking for that buyer when the buyer is removed:
  has_many :satisfactions, dependent: :destroy
end
```

If we open up the rails console with `rails c`, then we have the following relationships available to us:
```ruby
prod = Product.create(name: "Dell Inspiron")
buy = Buyer.create(name: "Joe", buy_date: "2017-07-04")

sat = Satisfaction.new
sat.rank = 4
sat.product = prod
sat.buyer = buy
sat.save

#Then we can also print the product's satisfaction rankings:
prod.satisfactions

#Also, we can print the buyers satisfaction rankings:
buy.satisfactions
```

With this relationship setup we can create new satisfaction ranking like this:
```ruby
  prod = Product.first
  buy = Buyer.find_by(name: "Joe")
  sat = prod.satisfactions.new(rank: 2)
  sat.buyer = buy
  sat.save
```

In addition, we could also setup the buyer and product for the new satisfaction ranking in one fell swoop:
```ruby
  prod = Product.first
  buy = Buyer.first
  prod.satisfactions.create!(rank: 5, buyer: buy)
```

Using these tables, we can find the buyers for a product like this:

```ruby
#Find the product:
prod = Product.first

#Find satisfaction rankings attached to the product we just queried:
#'sat' now holds an array list of satisfaction rank objects
sat = prod.satisfactions

#Now we can use a loop to get the 'buyer' associated with each satisfaction like this:
#This results in 1+n queries:
sat.each { |s| s.buyer.name }

#This will end up running some queries like this:
#SELECT  "buyers".* FROM "buyers" WHERE "buyers"."id" = ? LIMIT ?
#SELECT  "buyers".* FROM "buyers" WHERE "buyers"."id" = ? LIMIT ?
#SELECT  "buyers".* FROM "buyers" WHERE "buyers"."id" = ? LIMIT ?
#SELECT  "buyers".* FROM "buyers" WHERE "buyers"."id" = ? LIMIT ?
#SELECT  "buyers".* FROM "buyers" WHERE "buyers"."id" = ? LIMIT ?
```

Instead of having to get a list of the satisfaction rankings assigned to a particular product, and then loop through each one to find the user associated with each one (1+n queries), we can instead use a through association with rails. This will drastically reduce the number of queries that are necessary.

To setup a through association for our current example, we can add this to the 'Product' model:

#### Product Model:
```ruby
class Product < ApplicationRecord
  has_many :satisfactions

  #Add this line:
  has_many :buyers, through: :satisfactions
end

#This will allow this query:
p = Product.first
p.buyers

#Resultant query:
#SELECT "buyers".* FROM "buyers" INNER JOIN "satisfactions" ON "buyers"."id" = "satisfactions"."buyer_id" WHERE "satisfactions"."product_id" = ?
```

To setup the reverse of this relationship, we can add the line below to the 'Buyer' model:

#### Buyer Model:
```ruby
class Buyer < ApplicationRecord
  has_many :satisfactions, dependent: :destroy
  has_many :products, through: :satisfactions
end

#This will allow this query:
buy = Buyer.first
buy.products
```

We can even abbreviate the name of our through association relationship by adding a 'source' declaration and changing our 'Product' model as listed below:
#### Product Model:
```ruby
class Product < ApplicationRecord
  has_many :satisfactions

  #Add this line:
  has_many :purchasers, through: :satisfactions, source: :buyer
end

#Now we can do this:
p = Product.first
p.purchasers

#SQL:
#SELECT "buyers".* FROM "buyers" INNER JOIN "satisfactions" ON "buyers"."id" = "satisfactions"."buyer_id" WHERE "satisfactions"."product_id" = ?
```

We can do the same thing in the reverse as well, by modifying the 'Buyer' model file:
```ruby
class Buyer < ApplicationRecord
  has_many :satisfactions, dependent: :destroy
  has_many :things, through: :satisfactions, source: :product

  #This allows for:
  b = Buyer.first
  b.things

  #SQL:
  #SELECT "products".* FROM "products" INNER JOIN "satisfactions" ON "products"."id" = "satisfactions"."product_id" WHERE "satisfactions"."buyer_id" = ?
end
```

<p>I have included the code for this mvc application in this repo:
  <a href='https://github.com/joshayoung/many-to-many-rails'>many-to-many-rails</a>.
</p>