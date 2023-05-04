# HTTP vs HTTPS

- How does HTTPS work? What are TLS/SSL certificates?
- Why is this important to implement in your projects?
- Demo how to generate certificates and use them in a node project

# HTTP-VS-HTTPS

![](https://i.pinimg.com/564x/79/ff/43/79ff43ed2199dc3e436c13c7f79f5353.jpg)

## http

### defination

HTTP stands for Hyper Text Transfer Protocol, It is the main protocol for transmitting data across websites.

### Use Of http

Communication between client computers and web servers is done by sending HTTP Requests and receiving HTTP Responses.

Clients are often browsers (Chrome, Edge, Safari), but they can be any type of program or device, Servers are most often computers

## problem!

The problem is that HTTP (note: no "s" on the end) data is not encrypted, and it can be intercepted by third parties to gather data being passed between the two systems

## https

Hypertext transfer protocol secure (HTTPS) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website.

## http Vs https

HTTPS is encrypted in order to increase security of data transfer. This is particularly important when users transmit sensitive data, such as by logging into a bank account, email service, or health insurance provider

HTTPS uses an encryption protocol to encrypt communications. The protocol is called Transport Layer Security (TLS), although formerly it was known as Secure Sockets Layer (SSL)

## What are TLS/SSL certificates?

### SSL (Secure Socket Layer)

which is a protection layer that relies on encrypting the process of exchanging information through web pages on the Internet.

### TLS (Transport Layer Security):

This represents the latest and most secure version of SSL, but SSL is traded, because it is the most common between companies and website owners.

HTTPS is a secure extension of HTTP. Websites that install and configure an SSL/TLS certificate can use the HTTPS protocol to establish a secure connection with the server.

## When and Why is SSL/TLS is a MUST?

SSL/TLS is a must whenever sensitive information such as usernames and passwords or payment processing information is being transferred.
The goal of SSL/TLS is to make sure that only one person — the person or organization that the uploader intends — can access the data that’s being transferred. This is particularly important when you think of how many devices and servers the information is transferred between before it reaches its destination.

## What are TLS/SSL certificates?

![Screenshot 2023-05-04 093500](https://user-images.githubusercontent.com/87650778/236134271-e0fbdb5c-b590-406b-84b7-8b55cbffc844.png)


SSL have two-key encryption system:

<h3>Private Key:</h3>
This key is responsible for the decryption of data and this key is only present on the site's server / is hidden and is almost impossible to obtain.

<h3>Public Key:</h3>
This key is the one that is used to encrypt information or data, and it is called public because the browser obtains it by entering any website that uses https.

Thus, the data transfer process became greatly secure, as it is true that the https protocol does not mean complete security, but it is much better and provides adequate protection for most sites. If your site is a banking service, for example, then you need more protection.

You can tell whether a website is using SSL by looking for a padlock icon or a green bar at the top of your browser. You should be able to click on this icon to view the information on who holds the certificate and to manage your SSL settings.

## how to generate certificates and use them in a node project ?


**Step 1:Create or download SSL Certificate Files** 
  - create certificate
```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```

Once we ran this command it will ask a few questions as shown below:

```sh
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields, there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [XX]:IN
State or Province Name (full name) []:
Locality Name (eg, city) [Default City]:
Organization Name (eg, company) [Default Company Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (eg, your name or your server's hostname) []:
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:

```
> then enter the required information.
> 
- or you can buy SSL Certificate Files and download it --- [The Best SSL Certificate Products](https://cheapsslsecurity.com/sslproducts.html)
![Screenshot from 2020-03-02 14-09-22](https://user-images.githubusercontent.com/49004640/75678173-b2ed4c80-5c95-11ea-9a47-e96f8117a44c.png)

**Or ask the server owner to give you a certificate without entering data**

**Step 2: Create https_server.js file & upload SSL files to Server directory**

```
const app = require("express")();
const https = require("https");
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("hi");
});

https.createServer(
    { key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
      },
    app
  )
  .listen(9000, () => {
    console.log("Listening...");
  });
  
```



**Step 3: Start Node.js**

***If you do not put options here***
```
                 \\\///
https.createServer({},app).listen(9000, () => {console.log("Listening...")});
```
![site-is-not-secure-warning](https://user-images.githubusercontent.com/87650778/236135816-d23afcad-29b5-4c8f-b894-9f2638e31190.png)




