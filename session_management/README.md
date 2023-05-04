# **Session Management in Node.js using ExpressJS and Express Session**


# *What Is The Session?*
A website is based on the HTTP protocol. HTTP is a stateless protocol which means at the end of every request and response cycle, the client and the server forget about each other.

This is where the session comes in. A session will contain some unique data about that client to allow the server to keep track of the user’s state. In session-based authentication, the user’s state is stored in the server’s memory or a database.

# *How sessions works?*
When the client makes a login request to the server, the server will create a session and store it on the server-side. When the server responds to the client, it sends a cookie. This cookie will contain the session’s unique id stored on the server, which will now be stored on the client. This cookie will be sent on every request to the server.

We use this session ID and look up the session saved in the database or the session store to maintain a one-to-one match between a session and a cookie. This will make HTTP protocol connections stateful.

![](https://static.javatpoint.com/difference/images/session-vs-cookies2.png)


# *What are the difference between session and cookie?*
![](https://static.javatpoint.com/difference/images/session-vs-cookies.png)

Key Differences between Session and Cookies:

* Sessions are server-side files that store the user information, whereas Cookies are client-side files that contain user information on a local computer.
* Sessions are cookies dependent, whereas Cookies are not dependent on Session.
* The session ends when the user closes the browser or logout from the application, whereas Cookies expire at the set time.
* A session can store as much data as a user want, whereas Cookies have a limited size of 4KB.

To learn more about their differences,**[Here](https://www.javatpoint.com/session-vs-cookies)**.


# *What are the different ways of managing sessions in express?*

* **Using express-session:** Express-session is a popular middleware that simplifies session management in Express. It uses cookies to store session information and provides several options for customizing session behavior, such as session expiration, cookie settings, and storage options.

* **Using cookie-session:** Cookie-session is another middleware that simplifies session management in Express. It works similarly to express-session but stores session information directly in the session cookie, rather than using a server-side storage mechanism.

* **Using a database:** Storing session data in a database can be a good option for applications that require scalability or need to share session data across multiple servers. You can use a database like MongoDB or Redis to store session data and use middleware like connect-mongo or connect-redis to manage session state.

* **Using JSON Web Tokens (JWTs):** JWTs can be used to manage sessions in stateless applications where the server does not need to store session data. JWTs contain encrypted user data and are passed between the client and server with each request, allowing the server to verify the user's identity without maintaining session state.

# *How to use Express-session?*
Install the Express-session :
```
npm install express-session
```
To set up the session, you need to set a couple of **[Express-session](https://www.npmjs.com/package/express-session#sessionoptions)** options, as shown below.
```javaScript
app.use(sessions({
  secret:"mohammedahmedabdalla12354695",
  saveUninitialized:true,
  cookie: { maxAge: 1000000000 },//option
  resave: false 
}));
```
* **secret:** a random unique string key used to authenticate a session. It is stored in an environment variable and can’t be exposed to the public. The key is usually long and randomly generated in a production environment.

* **resave:** takes a Boolean value. It enables the session to be stored back to the session store, even if the session was never modified during the request. This can result in a race situation in case a client makes two parallel requests to the server. Thus modification made on the session of the first request may be overwritten when the second request ends. The default value is true. However, this may change at some point. false is a better alternative.


* **saveUninitialized:** this allows any uninitialized session to be sent to the store. When a session is created but not modified, it is referred to as uninitialized.

* **cookie: { maxAge: 1000000000 } :** this sets the cookie expiry time. The browser will delete the cookie after the set duration elapses. The cookie will not be attached to any of the requests in the future. In this case, we’ve set the maxAge to a single day as computed by the following arithmetic.

<hr>
# Exercise

* use express-session to manage a session in express. 

* Install the necessay modules using npm: 

``` 
npm install express express-session cookie-parser
```
* Import those modules:
```
import express from ('express');
import session from ('express-session');
import cookieParser from ('cookie-parser);
```
* after setting up the express server, use the cookie-parser and express-session middlewares to manage your session. 
```
app.use(cooieParser());
app.use(session({secret: "mysecret"}));
```

* manage your session so that everytime the user make a request(reload the page), the server will return the number of times the user has viewd the page.


<hr>

# **Contributors:** 

[Abedulla Abo-Jazar](https://github.com/AbdallahAbujazar)

[Ahmed AbuMoghaseeb](https://github.com/AhmedMughessib)

[Mohammed Sbeata](https://github.com/Mohammed-Sbeata)