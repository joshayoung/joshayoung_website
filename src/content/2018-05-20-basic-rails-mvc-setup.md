---
layout: portfolio_entry
title: Basic Rails MVC Setup
description: This serves as a reference for a basic rails MVC setup with minimal customization.
date: 2018-05-20
excerpt_separator: <!--more-->
tags: Programming Rails Ruby MVC
---

I wrote this post to describe the basic rails setup to get a simple CRUD application going. Of course this can be greatly improved upon, but I thought it would be helpful to outline the basic structure. I will outline each file with a simple explanation for each one. To initialize a project list this, you would need to have rails 5 installed and create a new project with the `rails new [project name]` command.

<!--more-->

#### Create the Database and Model
```bash
  #Creates the initial ruby project files:
  rails new notes

  #Creates the migration and model file:
  rails g model note subject:string, body:string

  #Runs the migration to create the database:
  rails db:migrate
```

#### Add validation to model file
```ruby
  #app/models/note.rb
  class Note < ApplicationRecord
    validates :subject, :body, presence: true
  end
```

#### Create the Controller
```ruby
  #Creates an empty controller file:
  rails g controller notes
```

#### Setup the route file
```ruby
  #config/routes.rb
  Rails.application.routes.draw do
    root    'notes#index'
    get     'notes'           => 'notes#index', as: 'notes'
    post    'notes'           => 'notes#create'
    get     'notes/new'       => 'notes#new',   as: 'new_note'
    get     'notes/:id/edit'  => 'notes#edit',  as: 'edit_note'
    get     'notes/:id'       => 'notes#show',  as: 'note'
    patch   'notes/:id'       => 'notes#update'
    put     'notes/:id'       => 'notes#update'
    delete  'notes/:id'       => 'notes#destroy'
  end
```

#### Populate the Controller with the needed logic
```ruby
  #app/controllers/notes_controller.rb
  class NotesController < ApplicationController

    def index
      @notes = Note.all
    end

    def create
      @note = Note.new(subject: params[:note][:subject], body: params[:note][:body])
      if @note.save
        redirect_to notes_url
      else
        render :new
      end
    end

    def new
      @note = Note.new
    end

    def edit
      @note = Note.find_by(id: params[:id])
    end

    def show
      @note = Note.find(params[:id])
    end

    def update
      note = Note.find(params[:id])
      note.update(subject: params[:note][:subject], body: params[:note][:body])
      redirect_to(notes_url)
    end

    def destroy
      Note.find(params[:id]).destroy
      redirect_to(notes_url)
    end
  end
```

#### Setup simple_form_for

https://github.com/plataformatec/simple_form

Add `gem 'simple_form'` to your `Gemfile` and then run `bundle install`, followed by `rails generate simple_form:install`. If you had already started the rails server `rails s`, you will need to stop it and then restart the server to use the new form method.

#### Setup the Views and Partials

Of course all of these files would have to be manually created in the project folders under /views and /views/shared, respectively. The files that begin with an underscore are usually stored in the shared folder. Even though they are named with an underscore, they are included in the view pages using the `render` method without the underscore, as shown below.

##### app/views/notes/index.html.erb
```html
  <h1>Notes List</h1>

  <ul>
  <% @notes.each do |note| %>
    <li><%= link_to(note.subject, note_path(note)) %></li>
  <% end %>
  </ul>
```

##### app/views/notes/new.html.erb
```html
  <h1>Add New Note</h1>

  <%= render 'shared/errors' %>
  <%= render 'shared/form' %>
```

##### app/views/notes/edit.html.erb
```html
  <h1>Edit</h1>

  <%= render 'shared/errors' %>
  <%= render 'shared/form' %>
```

##### app/views/notes/show.html.erb
```html
<h1><%= @note.subject %></h1>
<p><%= @note.body %></p>

<ul>
  <li><%= link_to('Edit Note', edit_note_path(@note)) %></li>
  <li><%= link_to 'Delete', @note, method: :delete, data: { confirm: 'Click "OK" to proceed.' } %></li>
</ul>
```

##### app/views/shared/_errors.html.erb
```html
  <% if @note.errors.any? %>
    <ul>
      <% @note.errors.full_messages.each do |error| %>
        <li><%= error %></li>
      <% end %>
    </ul>
  <% end%>
```

##### app/views/shared/_form.html.erb
```html
  <%= simple_form_for @note do |f| %>
    <%= f.input :subject, label: 'Subject' %>
    <%= f.input :body, label: 'Body' %>
    <%= f.button :submit %>
  <% end %>
```

<p>I have included the code for this mvc application in this repo: <a href='https://github.com/joshayoung/basic-rails-mvc'>basic-rails-mvc</a>.</p>