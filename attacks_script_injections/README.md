<h1 align="center" style="font-size:32px">
  Cyberattacks and Injections 
</h1>

### Want to hack like Mr. Robot? Sorry, we're not offering a course on how to break the law today. But stick with us and we'll show you how to keep your own application secure!

<br>

<p align="center"> 
<img src="./images/mr-robot.gif" width="300px" height="200px">
</p>

### In the world of cybersecurity, attacks can be broadly categorized into two main types:active attacks and passive attacks.

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

# Man-In-The-Middle (MITM) attacks

#### A man-in-the-middle (MitM) attack is a type of cyberattack in which communications between two parties is intercepted, often to steal login credentials or personal information, spy on victims, sabotage communications, or corrupt data.

<br>
MitM can be performed using ARP (Address Resolution Protocol) spoofing to intercept and control network traffic. 
the attackers aim to convince the router and user that they are each other,allawoing them to view all network traffic and potentially perform Malicious actions.

<br>

### Man-in-the-middle attack prevention

- Avoid public Wi-Fi networks, which are often insecure and easily compromised.
- Keep software up-to-date to patch known vulnerabilities.
- Use strong, unique passwords for all accounts and devices.
- Use secure communication protocols (e.g. HTTPS, SSL, TLS) to encrypt data in transit.

<br>

# Cross-Site Scripting (XSS) Attacks

XSS attacks are a type of injection attack where an attacker injects malicious code into a web page that is viewed by other users. This can happen when a web application fails to sanitize user input properly or when it does not validate user input correctly.

XSS attacks can be either stored or reflected.

In a reflected XSS attack, the malicious code is reflected back to the user from the server in response to a request.

#

<img src="https://sectigostore.com/blog/wp-content/uploads/2020/05/reflected-xss-attack-1536x720.png" />

In a stored XSS attack, the malicious code is stored on the server and served to every user who requests the affected page.

<img src="https://www.imperva.com/learn/wp-content/uploads/sites/13/2019/01/sorted-XSS.png" />

### Defending Against XSS Attacks

To defend against XSS attacks, you can implement the following measures:

- Sanitize user input: Ensure that user input is properly sanitized before it is stored in the database or displayed on a web page.
- Validate user input: Validate user input to ensure that it conforms to expected formats.
- Use Content Security Policy (CSP): Implement a CSP to restrict the sources of content that a web page can load.

<br>

# Cross-Site Request Forgery (CSRF) Attacks

CSRF attacks are a type of attack where an attacker sends a request from a victim's browser to a web application without the victim's knowledge or consent. This can happen when a web application does not properly validate requests.

### Defending Against CSRF Attacks

To defend against CSRF attacks, you can implement the following measures:

- Use CSRF tokens: Implement CSRF tokens in web forms to ensure that the request is coming from a legitimate source.
- Use the SameSite attribute: Set the SameSite attribute on cookies to prevent them from being sent in cross-site requests.
- Use the X-Frame-Options header: Implement the X-Frame-Options header to prevent clickjacking attacks.

## Conclusion

XSS and CSRF attacks are serious threats to web applications and can cause significant damage. By implementing the measures mentioned above, you can defend against these attacks and ensure the security of your web applications.

# Sql injection

#### SQL Injection attacks (or SQLi) alter SQL queries, injecting malicious code by exploiting application vulnerabilities.Successful SQLi attacks allow attackers to modify database information, access sensitive data, execute admin tasks on the database, and recover files from the system. In some cases attackers can issue commands to the underlying database operating system.
