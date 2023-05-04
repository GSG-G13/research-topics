# HTTP vs HTTPS

- How does HTTPS work? What are TLS/SSL certificates?
- Why is this important to implement in your projects?
- Demo how to generate certificates and use them in a node project

# HTTP-VS-HTTPS

![](./vedio/VID_31150419_021811_262.mp4)

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
