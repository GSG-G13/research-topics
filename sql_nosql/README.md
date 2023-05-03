# SQL vs NoSQL database
- What’s SQL, NoSQL and what’s the difference between them?
- When do we use each and why?
- What’s the advantages and disadvantages.
# SQL:
- SQL (Structured Query Language) is a programming language designed for managing and manipulating data in a relational database management system (RDBMS). It is used to perform tasks such as creating tables and views, inserting, updating, and deleting records, and querying the data stored in a database.

- The key features of SQL include its ability to handle large amounts of data, its support for transactions, its use of standardized syntax, and its support for a wide variety of data types.

- The main difference between SQL and other programming languages is that SQL is specifically designed for working with databases, while other programming languages such as Python, Java, or JavaScript are designed for general-purpose programming tasks. SQL is used in combination with a variety of database management systems such as MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.

Here's an example of some basic SQL code:
```js
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(25) NOT NULL
); 
```
```js
INSERT INTO customers (name, email, phone)
VALUES ('John Smith', 'john@example.com', '555-1234');
```

```js 
SELECT * FROM customers;
```

```js
SELECT * FROM customers WHERE name = 'John Smith';
```

```js
UPDATE customers SET phone = '555-5678' WHERE id = 1;
```

``` js
DELETE FROM customers WHERE id = 2;
```
## The main differences
- Data Structure:
 SQL databases use tables with rows and columns to store data in a structured format.
- Scalability:
 SQL databases are vertically scalable, meaning that they require more powerful hardware to handle larger amounts of data and traffic.
- Schema:
 SQL databases use a rigid schema, meaning that the structure of the database must be defined before data can be inserted.
- Transactions:
 SQL databases support ACID (Atomicity, Consistency, Isolation, and Durability) transactions, which ensure that database operations are completed reliably and consistently.
- Usage:
  SQL databases are commonly used for structured data with complex relationships, such as financial data or inventory management systems.
#### Overall, SQL databases are better suited for handling structured data and complex queries, while NoSQL ----However, the choice between SQL and NoSQL ultimately depends on the specific needs and requirements of the project at hand.
