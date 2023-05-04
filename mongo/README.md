# **MonogDB**

## **What is Database?**
A database is a structured collection of data stored in a computer system. It enables efficient storage, management, and retrieval of large amounts of data. It is essential for businesses, organizations, and governments to manage and analyze their data effectively.

## **Types Of Databases:**
![](https://i.imgur.com/EcJsOnp.png)
---
![](https://i.imgur.com/4Sk7Ltk.jpg)


**SQL Database (Structured Query Language):** 
* is a programming language that is used to manage data in relational databases. 
* Typically called tables to store data, for defining, query and manipulating the data which is SQL very powerful. 
* **Examples:** MySQL, SQL Server, Postgresql.
```javascript
CREATE TABLE employee(
    name varchar,
    email varchar
);

INSERT INTO employee(name, email) VALUES ("Steve Walker", "walker@gmail.com");
```

**NoSQL Database:**
* is a programming language that is used to manage data in non relational databases.
* In NoSQL database, queries are focused on collection of documents.
* **Examples:** MongoDB, CouchDB, Casssandra, Redis and etc.

```javascript
db.createCollection("employee")
db.employee.insert({
  name: "Steve Walker",
  email: "walker@gmail.com"
})  
```

## **Commen Defenitions**
![](https://i.imgur.com/DMN9tQA.png)

**Collection:** A grouping of documents inside of a database. This is the same as a table in SQL and usually each type of data (users, posts, products) will have its own 
collection.

**Document:** A record inside of a collection. This is the same as a row in SQL and usually there will be one document per object in the collection. A document is also essentially just a JSON object.

**Field:** A key value pair within a document. This is the same as a column in SQL. An important difference between SQL and MongoDB is that a field can contain values such as JSON objects, and arrays instead of just strings, number, booleans, etc.

## **Basic Commands**
**mongosh:** Open a connection to your local MongoDB instance. All other commands will be run within this mongosh connection.

**show dbs:** Show all databases in the current MongoDB instance.

**use <dbname>:** Switch to the database provided by dbname.
    
**db:** Show current database name.
    
**show collections:** Show all collections in the current database.
    
**db.dropDatabase():** Delete the current database.

---
# **Mongoose**
    
## **What is Mongoose?**
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model and interact with MongoDB data from Node.js applications. It includes built-in type casting, validation, query building, and more.

## **Mongoose Schema**
A Mongoose schema is a configuration object that defines the structure and validation rules of MongoDB documents. It specifies the properties and data types of each field in the document. It allows for easy creation and manipulation of MongoDB data from Node.js applications.
    
### **Schema Types:**
* **required:** boolean or function, if true adds a required validator for this property
* **default:** Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
* **immutable:** boolean, defines path as immutable. Mongoose prevents you from changing immutable paths unless the parent document has isNew: true.
* **unique:** boolean, whether to define a unique index on this property.
* **validate:** function, adds a validator function for this property
    
## **String**

**lowercase:** boolean, whether to always call .toLowerCase() on the value.

**uppercase:** boolean, whether to always call .toUpperCase() on the value.
    
**match:** RegExp, creates a validator that checks if the value matches the given regular expression.
    
**enum:** Array, creates a validator that checks if the value is in the given array.
    
**minLength:** Number, creates a validator that checks if the value length is not less than the given number.
    
**maxLength:** Number, creates a validator that checks if the value length is not greater than the given number.
    
    
## **Number**
    
**min:** Number, creates a validator that checks if the value is greater than or equal to the given minimum.
    
**max:** Number, creates a validator that checks if the value is less than or equal to the given maximum.
    
## **Example**
```javascript
const addressSchema = mongoose.Schema({
  street: {
    type: String,
  },
  city: {
    type: String,
  },
    country: {
    type: String,
  },
})
    
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    enum: ['Ahmed', 'Alaa', 'Khaled'],
    required: true,
  },
  password: {
    type: String,
    minLength: 6,
    maxLength: 15,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 6
  },
  age: {
    type: Number,
    min: 14,
    max: 20,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    }
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now()
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users'
  },
  hobbies: [],
  address: addressSchema
})
```
## **Sub Documents**
Subdocuments in Mongoose are nested documents within other documents in a MongoDB collection. They are defined as part of a schema, allowing you to create hierarchical structures and relationships between documents. They are useful for organizing data and avoiding repetition.
    
## **Mongoose Model**
* A wrapper around a MongoDB collection that allows you to interact with the data in that collection.
* It defines the shape of the documents in the collection using a schema, and provides an interface for CRUD operations on those documents.
* Mongoose models are created using the ```mongoose.model()``` method, which takes a name and a schema as arguments, and returns a constructor function for creating new documents that conform to the schema.
    
```javascript
mongoose.model('users', userSchema);
```

## **Mongoose Queries**
    
### **Create Queries**
**create:** Create a new document inside the specified collection.
    
```javascript
const user = new User({ name: 'Alaa' })
user.save()
```
    
```javascript
mongoose.collection.create({ name: 'Ahmed' })
```

### **Read Queries**
**find:** Get all documents.
    
```javascript
mongoose.collection.find()
```
    
**find(<filterObject>):** Find all documents that match the filter object.
    
```javascript
mongoose.collection.find({ 'address.street': '123 Main St' })
```
    
**findOne:** The same as find, but only return the first document that matches the filter object.

```javascript
mongoose.collection.findOne({ name: 'Alaa' })
```

**where:** construct queries for searching documents that match a certain criteria.
    
```javascript
mongoose.collection.where()
``` 
    
**equals:** is used to compare the value of a field in a Mongoose document with a provided value.

```javascript
mongoose.collection.where('name').equals('Ahmed')
```
    
**select:** return specifies field from a document.

```javascript
mongoose.collection.where('name').equals('Ahmed').select([ 'userName', 'age', 'createdAt'])
```

**populate:** is a method used to fill in document references by performing a join with another collection.

```javascript
mongoose.collection.where('name').equals('Ahmed').select([ 'userName', 'age', 'bestFriend']).populate('bestFriend')
```
    
### **Update Queries**
    
**updateOne:** Update the first document that matches the filter object with the data passed into the second parameter which is the update object.
    
```javascript
mongoose.collection.updateOne({ age: 20 }, { $set: { age: 21 } })
```
    
**updateMany:** Update all documents that matches the filter object with the data passed into the second parameter which is the update object.
    
```javascript
mongoose.collection.updateMany({ age: 20 }, { $set: { age: 21 } })
```
    
### **Delete Queries**
    
**deleteOne:** Delete the first document that matches the filter object.
    
```javascript
mongoose.collection.deleteOne({ age: 20 })
```
**deleteMany:** Delete all documents that matches the filter object.

```javascript
mongoose.collection.deleteMany({ age: 12 })
```
    
### **Read Modifiers**
    
**sort:** Sort the results of a find by the given fields.
    
```javascript
mongoose.collection.find().sort({ name: 1, age: -1 })

```
**limit:** Only return a set number of documents.

```javascript
mongoose.collection.find().limit(2)
```

**skip:** Skip a set number of documents from the beginning.

```javascript
mongoose.collection.find().skip(4)
```

**[See More MongoDB Commands](https://mongoosejs.com/docs/api/query.html)**