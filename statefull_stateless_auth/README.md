# Overview of Stateless vs Stateful Authentication:

### Authentication

**Authentication is the process of verifying the identity of a user or system before granting access to a resource. Stateless and stateful authentication are two different approaches to this process, and each approach has its own set of advantages and disadvantages**



### Authorization
***Authorization is the process of granting or denying access to a resource or system based on a user's identity, permissions, and other factors. It is typically implemented after authentication and ensures that only authorized users can access specific resources or perform specific actions. Access control lists (ACLs) and role-based access control (RBAC) are common methods of implementing authorization.***


# http protocol state

***HTTP protocol is stateless, which means that each message exchange between a client and a server is independent and self-contained. The server doesn't keep any information about previous requests or the client's state, so every request needs to contain all the necessary information. This ensures that the protocol is simple and scalable, but it also means that the server can't assume anything about the client's state or the previous requests it made.***

## Exploring Authentication Methods in HTTP: Stateless vs Stateful:

# Stateless
***Stateless authentication involves sending authentication information (usually a token) with each request, and the server doesn't store any session information. This approach is simple and scalable because it doesn't require the server to maintain session information.***

![](https://iq.opengenus.org/content/images/2020/03/token_auth.png)

## scenarios:
- Microservices architectures, where each service is responsible for handling its own authentication and doesn't rely on a centralized session store

- A social media application with a large user base across multiple regions needs to handle a high volume of traffic. By using stateless authentication, the application can simplify its architecture and scale horizontally to handle the increased traffic without worrying about session state management. This allows the application to quickly respond to requests from any geographic region without the latency and coordination overhead of a centralized session store

## code example :
```
const express = require('express');
const session = require('express-session');

const app = express();

// create a session middleware with some options
app.use(session({
  secret: 'mysecret', // change this to a long, random string for production
  resave: false,
  saveUninitialized: true,
}));

// set session variables and display them on the webpage
app.get('/', (req, res) => {
  req.session.user_id = 121;
  req.session.user_name = 'aghilanbaskar';

  res.send(`
    <html>
      <body>
        <p>Session variables are set.</p>
        <p>username: ${req.session.user_name}</p>
        <p>user ID: ${req.session.user_id}</p>
      </body>
    </html>
  `);
});

// start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

```


# StateFull:

***Stateful authentication involves creating a session for the user when they log in, and the client sends a session ID with each subsequent request. The server uses the session ID to look up the user's session and determine if they are authenticated.***

![](https://iq.opengenus.org/content/images/2020/03/session_auth.png)

## scenarios:

- Imagine a banking application that needs to maintain session state for each client. In this scenario, stateful authentication can be beneficial as it allows the application to maintain a consistent view of the client's session across multiple requests. This allows the application to implement features such as transaction history and fraud detection by analyzing the user's behavior over time.

- Consider an e-commerce application that requires users to maintain a persistent shopping cart across multiple sessions. Stateful authentication can be beneficial in this scenario as it allows the application to store the user's shopping cart information in a centralized session store, making it accessible across multiple devices and sessions. This allows the user to pick up where they left off regardless of which device they're using to access the application

```
const express = require('express');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');

const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
  const headers = {
    alg: 'HS256',
    typ: 'JWT'
  };

  const payload = {
    user_id: 121,
    user_name: 'aghilanbaskar'
  };

  const secret = '9a398ab636acf612n59d464f0e25c66ab17594b97c4d815d995a037e17bc685';

  const jwt = generateJwt(headers, payload, secret);

  res.cookie('access_token', jwt, { 
    maxAge: 86400000, // 1 day
    httpOnly: true,
    sameSite: 'strict',
    secure: true // enable for production, requires https
  });

  res.send(`JWT generated: ${jwt}. For verifying user, check the token in the further request by validating the token signature. Is valid token: ${isValidToken(jwt, secret)}.`);
});

function generateJwt(headers, payload, secret) {
  const headerEncoded = Buffer.from(JSON.stringify(headers)).toString('base64').replace(/=+$/, '');
  const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString('base64').replace(/=+$/, '');

  const signature = crypto.createHmac('sha256', secret)
    .update(`${headerEncoded}.${payloadEncoded}`)
    .digest('base64').replace(/=+$/, '');

  const jwt = `${headerEncoded}.${payloadEncoded}.${signature}`;

  return jwt;
}

function isValidToken(jwt, secret) {
  const jwtArray = jwt.split('.');
  const headerData = JSON.parse(Buffer.from(jwtArray[0], 'base64'));
  const payloadData = JSON.parse(Buffer.from(jwtArray[1], 'base64'));

  const header = JSON.stringify(headerData);
  const payload = JSON.stringify(payloadData);

  const signature = crypto.createHmac('sha256', secret)
    .update(`${jwtArray[0]}.${jwtArray[1]}`)
    .digest('base64').replace(/=+$/, '');

  return jwtArray[2] === signature;
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

```

---

# Stateful Authentication

##### Stateful authentication is a type of authentication mechanism where the server stores some information about the user's session or authentication state, such as a session ID or a token, to validate subsequent requests. Here are some advantages and disadvantages of using stateful authentication:

### How it works
Stateful session is created on the backend side, and the corespondent session reference Id is sent to the client. Each time the client makes a request to the server, the server locates the session memory using the reference Id from the client and finds the authentication information.

In this model, you can easily imagine that if the session memory is deleted on the backend side, then the session reference Id, which the client is holding, is completely meaningless.

![alt text](https://miro.medium.com/v2/resize:fit:640/format:webp/1*B6NRLiXwOn64YSnfpKuQjw.png)

## Pros:

1. **More secure:** Stateful authentication can be more secure than stateless authentication because the server maintains information about the user's session. This allows the server to revoke access if needed and track user activity more easily.

For example, if a user logs into a banking application using stateful authentication, the server can store information about the user's session and track their activity. If the user tries to access a resource they are not authorized to access or if their session becomes compromised, the server can revoke their access or take other actions to protect their account.

2. **Better control:** With stateful authentication, the server has more control over user access to resources because it can manage session states and authentication tokens. This can be useful for enforcing policies and preventing unauthorized access.


For example, a social networking site might use stateful authentication to manage user access to their profile and personal information. The server could use session states to control which users can access which profiles, and authentication tokens to ensure that only authorized users can access sensitive information.

3. **More complex operations:** Stateful authentication can allow for more complex operations, such as personalized experiences for users and storing user data, because the server has access to more information about the user's session.

For example, an e-commerce site might use stateful authentication to provide personalized recommendations to users based on their previous purchases. The server could use information from the user's session to suggest products they might be interested in, or to show them personalized discounts and promotions.

## Cons:

1. **Higher resource usage:** Stateful authentication requires the server to manage and maintain session states, which can increase resource usage and decrease scalability.

For example, if a large number of users are accessing a web application that uses stateful authentication, the server may need to maintain a lot of session state information. This can increase resource usage and make the application less scalable.

2. **Longer response times:** Because stateful authentication requires the server to look up session information for every request, it can result in longer response times compared to stateless authentication.

For example, if a user is accessing a web application that uses stateful authentication, the server may need to look up their session information for each request they make. This can result in longer response times compared to stateless authentication, where the server does not need to look up session information for each request.


3. **Increased complexity:** Stateful authentication can be more complex to implement and maintain, especially in distributed environments. This can lead to more errors and security vulnerabilities.

For example, if a web application uses stateful authentication and is distributed across multiple servers, managing session state information can become more complex. Additionally, if there are errors in the implementation of stateful authentication, this can lead to security vulnerabilities such as session hijacking or replay attacks.

##### In summary, stateful authentication can provide better security and control over user access to resources, but it comes at the cost of higher resource usage, longer response times, and increased complexity. It's important to consider the specific needs of your application and user base when deciding whether to use stateful or stateless authentication.


---
# Hybrid Approaches to Authentication: Combining the Benefits of Stateless and Stateful Authentication:

***Stateful authentication and stateless authentication have their respective strengths and weaknesses. Stateful authentication is known for its higher level of security, as it can track user sessions and prevent unauthorized access. On the other hand, stateless authentication is faster and more scalable, making it well-suited for handling individual requests. A hybrid approach that combines both techniques can deliver the best of both worlds, providing strong security while also accommodating scalability and speed.***

- Fortunately, authentication is not a zero-sum game. Developers can build a hybrid approach of stateful and stateless authentication that is both fast and secure.

- The magic comes from a simple sleight-of-hand: instead of setting stateless tokens to expire with the session, they can be set with a short expiration and refreshed periodically.

- When a token is refreshed, the database is checked to ensure the session is still active. As a result, sessions can still be revoked before they end. The potential delay before revocation completes depends on how frequently tokens must be refreshed. If a 60 second expiration is assigned to each token, then revocation will take a maximum of 60 seconds.

- Refreshing stateless tokens is a stateful process, since it requires querying the database to confirm the session is still active. But with the optimal approach, refreshes will happen asynchronously, except for the very first load after an application is closed.

- In practice
Clerk changed to a hybrid approach for session management 6 months ago. The functionality is built-in to our SDKs without any configuration, so most developers don't even recognize it's happening.

- Our stateless authentication tokens are set to expire every 60 seconds. In practice, here's how it works:

- When a user signs in, a stateless authentication token is created immediately.
An asynchronous poller is started on the frontend to refresh the stateless token every 50 seconds. The 10 second difference is to account for potential network delays and clock-skew between our token generator and the developer's backend.
While the user is active on the application, every request to the developer's backend will include an active, stateless authentication token.
But now, let's say the user closes the application for a few minutes so our poller stops. When the user revisits the application, the latest token has already expired since 60 seconds have elapsed.

- In this case, we need to update the token synchronously before requests to the backend can be processed. It's the one exception to an otherwise completely stateless authentication experience.

- In the end, Clerk's authentication solution is both stateful and stateless. Sessions can be revoked within 60 seconds, yet the vast majority of requests use stateless authentication and can be verified in under 1ms***