<h1 align="center" style="font-size:32px">
  👾Cyberattacks and Injections 
  👾
</h1>

### Want to hack like Mr. Robot? Sorry, we're not offering a course on how to break the law today. But stick with us and we'll show you how to keep your own application secure!

<br>

<p align="center"> 
<img src="./images/mr-robot.gif" width="300px" height="200px">
</p>

### 👨‍💻 In the world of cybersecurity, attacks can be broadly categorized into two main types: active attacks and passive attacks

<br>
<br>

<table>
  <tr>
    <th>Passive Attacks</th>
    <th>Active Attacks</th>
  </tr>
  <tr>
    <td>Involves the unauthorized interception of data without any modification.</td>
    <td>Involves the modification or manipulation of data in transit.</td>

  </tr>
  <tr>
    <td>The purpose of a passive attack is to learn about the ecosystem.</td>
    <td>The purpose of an active attack is to harm the ecosystem.</td>

  </tr>
   <tr>
    <td>hard to detect</td>
    <td>hard to prevent</td>

  </tr>
</table>
<br>

### Both types of attacks can be carried out using injection techniques, which involve the insertion of malicious code or commands into a system or application.

<br>

### Malicious hackers can go about this in a variety of ways, including the ones listed below :

- Man-In-The-Middle (MITM) attacks.
- Cross-Site Scripting (XSS) Attacks.
- Cross-Site Request Forgery (CSRF) Attacks.
- SQL Injections.

<br>

# 🕵🏿‍♂️ Man-In-The-Middle (MITM) attacks

#### A man-in-the-middle (MitM) attack is a type of cyberattack in which communications between two parties is intercepted, often to steal login credentials or personal information, spy on victims, sabotage communications, or corrupt data.

<br>
MitM can be performed using ARP (Address Resolution Protocol) spoofing to intercept and control network traffic. 
the attackers aim to convince the router and user that they are each other,allawoing them to view all network traffic and potentially perform Malicious actions.

<br>

### **Defending Against Man in the middle Attacks**

- Avoid public Wi-Fi networks, which are often insecure and easily compromised.
- Keep software up-to-date to patch known vulnerabilities.
- Use strong, unique passwords for all accounts and devices.
- Use secure communication protocols (e.g. HTTPS, SSL, TLS) to encrypt data in transit.

<br>

# ⚠️ Cross-Site Scripting (XSS) Attacks

XSS attacks are a type of injection attack where an attacker injects malicious code into a web page that is viewed by other users. This can happen when a web application fails to sanitize user input properly or when it does not validate user input correctly.

XSS attacks can be either stored or reflected.

In a reflected XSS attack, the malicious code is reflected back to the user from the server in response to a request.

#

<img src="https://www.hackingloops.com/wp-content/uploads/2015/06/reflected-cross-site-scripting.jpg" />

In a stored XSS attack, the malicious code is stored on the server and served to every user who requests the affected page.

<img src="https://www.imperva.com/learn/wp-content/uploads/sites/13/2019/01/sorted-XSS.png" />

### **Defending Against XSS Attacks**

- Sanitize user input: Ensure that user input is properly sanitized before it is stored in the database or displayed on a web page.
- Validate user input: Validate user input to ensure that it conforms to expected formats.
- Use Content Security Policy (CSP): Implement a CSP to restrict the sources of content that a web page can load.

<br>

# ❌ Cross-Site Request Forgery (CSRF) Attacks

CSRF attacks are a type of attack where an attacker sends a request from a victim's browser to a web application without the victim's knowledge or consent. This can happen when a web application does not properly validate requests.

### **Defending Against CSRF Attacks**

- Use CSRF tokens: Implement CSRF tokens in web forms to ensure that the request is coming from a legitimate source.
- Use the SameSite attribute: Set the SameSite attribute on cookies to prevent them from being sent in cross-site requests.
- Use the X-Frame-Options header: Implement the X-Frame-Options header to prevent clickjacking attacks.

<br>

# 💉 Sql injection

#### SQL Injection attacks (or SQLi) alter SQL queries, injecting malicious code by exploiting application vulnerabilities. Successful SQLi attacks allow attackers to modify database information, access sensitive data, execute admin tasks on the database, and recover files from the system. In some cases attackers can issue commands to the underlying database operating system.

<br>

#### **SQLi attacks can also be classified by the method they use to inject data:**

- SQL injection based on user input.
- SQL injection based on cookies.
- SQL injection based on HTTP headers.

<br>

####  Short example of how sql injection can be implemented

Suppose there is a website that has a search page where users can search for products by name. The website uses the following SQL query to retrieve the products:
```
SELECT * FROM products WHERE name = 'search_term'
```

An attacker can use SQL injection to retrieve all products from the database by entering the following string in the search field:
```
' OR 1=1 --
```

This will result in the following SQL query being executed:
```
SELECT * FROM products WHERE name = '' OR 1=1 --'
```

The double hyphen at the end of the query is used to comment out the rest of the original query. The resulting query will return all rows from the products table because 1=1 is always true. So how to prevent this from happening?

**Defending Against SQL injections**

- Make use of parameterized Queries
- Allow-list Input Validation

<br>

# 🤝Contributors:

[Eman Alabsi](https://github.com/Emanalabsi)

[Aya Qunoo](https://github.com/AyaQunoo)

[Momen Qudaih](https://github.com/momenqudaih)

<br>

# 📄Resources:

https://brightsec.com/blog/sql-injection-attack

https://www.cisco.com/c/en/us/products/security/common-cyberattacks.html#~types-of-cyber-attacks

https://www.csoonline.com/article/3340117/man-in-the-middle-attack-definition-and-examples.html

https://www.youtube.com/@davidbombal
