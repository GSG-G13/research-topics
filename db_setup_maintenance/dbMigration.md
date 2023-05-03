# Database setup and maintenance


## Database Migrations🛢️ 

 In this workshop we will talk about database migration. This allows developers to easily migrate their database schema from one version to another, without having to manually update the schema or data. The Workshop uses a migration framework to automate the process of updating the database schema and data, making it faster and less error-prone. This is especially useful for developers working with large databases or complex data structures, as it can save them a lot of time and effort.

## Migrations?🙌
* We’re talking about schema migrations, not data migrations
* This is more relevant to relational databases
> * It’s also mostly why people decide to go the NoSQL route. Schema changes are hard!

### Why Do We Migrate?🤔

* Data is state. Must be extra careful with any schema mutations.
* Used to take down web apps for maintenance. Not anymore.
* Online schema changes mean your code talks to multiple schema versions at the same time.

  ![](https://i.imgur.com/zoSbBo8.png)

## Manual Live Schema Changes
* Manual live schema changes in production is a recipe for disaster.
    * Harder to test the changes before they’re applied
    * Easy to mess up and lose data
    * No oversight, no code reviews
    * No paper trail, no auditing
    * Requires break-glass or giving engineers unlimited access to production environment

## How do Migration Frameworks Work?
* Changes are made in a new file is created with a conventional name
* Files are usually either SQL or calling the migration framework in the app language
* Migration framework is invoked (manually or at startup) to look at new files
* Framework keeps track of files it’s seen so far in some database table


## Destructive Operations
* Many operations are difficult to carry out atomically, for example:
    * Dropping columns/tables
    * Renaming columns/tables
    * Changing column types

* Instead, these changes should be done incrementally over two or more migrations

* Instead of renaming a column `old_column` to `new_column`:
    * Column called old_column in V1
    * Add new column new_column
    * Move the code to write to new_column, then read from it
    * When it’s certain old_column isn’t used, drop old_column


## Decoupling Application and Schema Changes
* In many cases, we’re changing both:
    * Schema
    * Application code using it
* Two migration approaches:
    *  Schema-first
    *  Code-first
* Whichever is migrated first (code or schema) needs to be backward-compatible

## Decoupling Application and Schema Changes
* Example: adding a new column: modified_timestamp

#### Schema First

```
ALTER TABLE person
  ADD COLUMN modified_timestamp TIMESTAMP NULL;
```

<p align="center">
  <img src="https://i.imgur.com/JByw67T.png">
</p>


---

#### Code First

```
INSERT INTO person
  (id, name, phone_number, modified_timestamp)
  VALUES
  ({}, {}, {}, now());

```
<p align="center">
  <img src="https://i.imgur.com/ArQdcpE.png">
</p>

## Rollbacks

* Most migration frameworks allow you to specify “down” or `“undo”` version of the migrations as well
* These are risky to use, and most production environments end up only moving “forward”, adding more migrations to rollback


