# **#What is a build Script ?**

A build script is a file that is started by a build plan. The build script prepares output from generated files.

# **Why do we need a script build ?**

*  The purpose of a database build is simple: prove that what you have in version control can successfully create a working database.
* a build provides a regular health-check for the database.  It is a reliable and tested database build process that can speed up deployments and prevent the delivery of new functionality.

# **Scopes of build Scripts :**

### * Single script builds

 
### * Schema-level builds
 These scripts can be hand-cut, and this is customary at the later stages in development.
 
### * Object-level builds
An object-level build script is useful in development for telling us about all the changes, who made them and when.

# The mechanics of a database build

The database build mechanism will need to pull from the version control system the correct version of all necessary components. This will most often include the scripts to build all schema-scoped objects such as tables, stored procedures, functions...

# **Achieving repeatable builds **
### 
### * The brute force script.
The simplest build script to create the database objects will assume an empty database. It creates each object in a ‘dependency’ order that prevents references to objects that haven’t yet been built.

### *  The kill and fill script.

* A slightly more complicated one is the ‘kill and fill’. Before executing the DDL script to create an object such as a table, function, procedure, view or whatever, it will check whether it already exists, and if it does it removes it. 

### *  The transactional script.

With an idempotent script, you will be unable to do any harm from running it more than once. If it finds a version of the database already there, it will check the version of the database, and refuse to run if it isn’t the same version that the script builds. If it is the same version, it will merely build any missing objects. It does not attempt anything resembling a change to an object.

### *  The idempotent script.

The transactional script will attempt the process of building part or all of a database, and if it hits an error, it rolls all the successful operations back to leave the database in the state it was in before the script was executed