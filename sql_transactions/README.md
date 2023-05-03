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


 ## Transaction State :
Transaction states refer to the different stages or phases that a transaction goes through during its lifetime in a DBMS. Each state represents a different stage of the transaction and is determined by the outcome of the previous stage.

The common transaction states in a DBMS are:

- Active State: This is the initial state of a transaction when it starts execution. In this state, the transaction is actively processing its operations and can modify the database.

- Partially Committed State: When all the operations of a transaction have been executed and the transaction is about to be committed, it enters the partially committed state. In this state, the transaction has made all the changes to the database but the changes are not yet permanent.

- Committed State: In this state, the transaction has successfully completed its execution and all the changes made to the database have been permanently saved. This means that the transaction is now complete and all its changes are reflected in the database.

- Failed State: If a transaction encounters an error during its execution, it enters the failed state. In this state, the transaction cannot proceed further and has to be rolled back to its previous state.

- Aborted State: When a transaction is rolled back, it enters the aborted state. In this state, all the changes made by the transaction are undone, and the database is restored to its previous state.

- Terminated State: This is the final state of a transaction. It occurs when a transaction is either committed or aborted and all the resources used by the transaction are released.

<img src ="https://scaler.com/topics/images/Transaction-State-of-Acid-properties-in-DBMS-1024x583.jpeg">


#### Note :
 not all DBMSs use the same terminology for transaction states and some may have additional or different states. 

## Transaction boundaries :
 To specify the boundaries of a transaction, you can use the BEGIN TRANSACTION, COMMIT TRANSACTION, and ROLLBACK TRANSACTION statements.
 
 * The BEGIN TRANSACTION: statement marks the beginning of a transaction in Transact-SQL.

     -All subsequent database operations within that transaction will be treated as a single unit of   work that can be committed or rolled back as a whole.
 
     -The modifications made during the transaction are held in a temporary state until the transaction is committed or rolled back.

 * The COMMIT TRANSACTION: statement is used to commit the transaction and make the changes permanent. 

 * The ROLLBACK TRANSACTION: statement is used to cancel the changes made during the transaction.

#### Note:
 - Transactions should be used carefully and with consideration, as they can impact database performance and concurrency.

 - Transactions should be properly scoped and committed or rolled back in a timely manner to avoid holding locks on database resources for extended periods of time.

***what happens if an ATM machine malfunctions or the power goes out during a withdrawal, deposit, or transfer transaction?🤔***

If an error occurs, the ATM will stop and issue a message to the user indicating that an error has occurred. In some cases, the received funds may be returned to the customer upon reboot.

If the ATM is unable to complete the transaction correctly, the transaction will be in an uncommitted state, and the database system will automatically cancel the transaction and return the account to its previous state before the transaction began. Therefore, no invalid or incomplete changes will be added to the database.

In general, ATM errors are handled similarly to any banking system error, and necessary measures are taken to ensure that the customer is not harmed and their funds are not lost.


## Our Team :
Heleena Darwish.

Aya Aljalees

Farah Halimi.

