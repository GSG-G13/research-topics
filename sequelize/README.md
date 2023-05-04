# Sequelize
Sequelize is a Node.js object-relational mapper (ORM) that provides an easy-to-use API for relational databases such as Oracle, PostgreSQL, MySQL, MariaDB, SQLite, and more.

## ORM
--------------------
It is an abbreviation for Object-Relational Mapping, a technology that allows me as a developer to deal with databases using Object Oriented instead of using SQL directly, other than that it allows me to write clean code.

### `ORM types differ based on the programming language that you use, for example:`<br>
- Hibernate in the Java language.
- Django in the Python language.
- Sequelize in Node.js and supports a number of types of databases, including MySQL, PostgreSQL, SQL Lite, and Oracle, and this is what we will talk about today.
- Doctrine in PHP.

### `Its advantages:`<br>
**1-** When I write a query, this thing takes a lot of time, so it reduces the time that I spend while writing the query, and it speeds up the development process for me, and it also makes me avoid SQL errors, because it provides me with commands that I can use on the ready.<br>
**2-** It provides me with an easy-to-use software interface during my dealings and development of the database, and this thing through it is to connect the data.<br>
**3-** It is safe because it applies restrictions on the data stored in the data to preserve it. For example, when I deal with the database, I deal with it through the object, not directly. Other than that, ORM provides me with a layer of protection that converts the data that comes from the user into a data type that can be verified. before saving it in the database.

## Sequelize
--------------------
It is a framework that we use to manage the database in nodes that use SQL, such as: MySQL, Postgres, and SQLite.
Using it as much as I as a developer:
I deal smoothly with database and quickly
Create models for tables and define relationships between them
When I use it, this thing makes the database strong and sophisticated, and I can modify it effectively and with high performance.

### `The reason why I chose it:`<br>
**1-** It is easy to use and it is also easy to perform various operations on it.<br>
**2-** It supports a lot of database, such as MySQL, PostgreSQL, etc.<br>
**3-** It allows me to create relationships between tables easily. This thing gives it the advantage of being able to return data from one table with data related to another table.

What happens behind the scenes:
As we have explained, sequelize relies on ORM, as it converts the processes that the developer performs into a query suitable with the database. After that, sequelize sends this query to the database and returns the output based on it
If I have a node application that I would like to deal with the database and I would like to develop it in sequelize, this makes it easier for me in that it provides me with an easy interface in that I deal with the database instead of sitting down writing Query every time

### `How to make a connection with database:`
**1-** The first thing I do is download the sequelize.<br>
**2-** After that, download the driver for the type of database that you are working on.<br>
**3-** After that, I need to call the library.<br>
**4-** Create a connection to the database that I want to work on. I need information to be able to create this connection, such as: the name of the database, the user name, the password, the host, and the type of the database.<br>
**5-** After that, I need to make sure that the connection is working or not.

## Step 1: Installing
### install **sequelize with Postgres** by running the following commands:
```
npm install sequelize
```

```
npm install pg pg-hstore
```

## Step 2: Connecting to a PostgreSQL Database

```js
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_URL, {
  host: 'localhost',
  dialect: 'postgres'
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been successfully.')
  })
  .catch((err) => {
    console.error('Can not connect to the database:', err)
  })
```

## Step 3: Creating a Sequelize Model

```js
const { DataTypes } = require('sequelize')

// User Model
const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

// Post Model
const Post = sequelize.define('post', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

Post.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' })
User.hasMany(Post, { foreignKey: 'userId', targetKey: 'id' })

sequelize
  .sync() // Pass { force: true } to drop existing tables and recreate them
  .then(() => {
    console.log('Tables created successfully')
  })
  .catch((error) => {
    console.error('Error creating tables:', error)
  })
```

## Querying a PostgreSQL Database

```js
User.create({
  username: 'Mohammed',
  email: 'mohammed@gmail.com',
  password: 'm12345'
}) // INSERT Into User
```

```js
// Find all users
User.findAll()

User.findAll({
  attributes: ['id', 'username']
})

// Find one
User.findOne({ where: { email: 'mohammed@gmail.com' } })

// Where
User.findAll({
  where: {
    id: 1
  }
})
```

## Operations on query:
```js
const { Op } = require('sequelize')

// Inside Where
[Op.eq]: 3
[Op.ne]: 5
[Op.gt]: 6
[Op.gte]: 6
[Op.lt]: 10
[Op.lte]: 10
[Op.is]: null
[Op.between]: [6, 10]
[Op.in]: [1, 2]
[Op.like]: '%hat'
```

## JOIN

```js
User.findAll({
  include: {
    model: Post,
    required: true, // Perform an inner join
  },
})
```

## UPDATE

```js
emUser.update({ email: 'example@gmail.com' }, {
  where: {
    id: 1
  }
})
```

## DELETE

```js
User.destroy({
  where: {
    id: 2
  }
})
```
