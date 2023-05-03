# Transactions in SQL Server
- What Is a Transaction? and when to use?
- Transaction State and Specifying Transaction Boundaries.
- How to code transaction? and what if it fail's



## Transactions : 

is a group of commands that change the data stored in database, is treated as a single unit ,  transactions ensures that either all commands succeed or none of them. 
- ( If one of the command transaction fails => all commands fail ).

---

✍️ 
#### Note : 

- ( BEGIN --- COMMIT) => each statment inside this block is excuted in the same transaction, cannot be commited or rollback indiviudal.

---

## Transaction processing  follows these steps : 

- Begin a transaction.
- Process database commands
- Check for errors , if errors occurred Rollback the transaction, else commit the transaction.

  <img src="https://storage.googleapis.com/algodailyrandomassets/curriculum/databases/Transactions%20in%20SQL/intro.png">


---

## when to use transaction ?

Basically anytime you have a unit of work that is either sensetive to outside changes or needs the ability to rollback every change if  error an occure .


 <img src ="https://sqlmct.com/wp-content/uploads/2019/05/Begin_Commit-766x437.png">

## Our Team :
Heleena Darwish.

Aya Aljalees

Farah Halimi.

