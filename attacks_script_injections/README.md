# Attacks
- What are the following types of attack?
  - Man In The Middle (MITM)
  - Cross Site Scripting (XSS)
  - Cross Site Request Forgery (CSRF)
- How can you defend against each of them?

## Script injections / safety issues
- What is a script injection and how do these happen?
- How would you prevent script injections?
- What is the Parameterized query?
- Prepare a short demonstration of good (and bad?) practices, including some sample code

# Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) Attacks

## Introduction

Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) attacks are two of the most common types of web application attacks. Both of these attacks are executed by exploiting vulnerabilities in web applications and can have serious consequences, including data theft and website defacement.

## Cross-Site Scripting (XSS) Attacks

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

## Cross-Site Request Forgery (CSRF) Attacks

CSRF attacks are a type of attack where an attacker sends a request from a victim's browser to a web application without the victim's knowledge or consent. This can happen when a web application does not properly validate requests.

### Defending Against CSRF Attacks

To defend against CSRF attacks, you can implement the following measures:

- Use CSRF tokens: Implement CSRF tokens in web forms to ensure that the request is coming from a legitimate source.
- Use the SameSite attribute: Set the SameSite attribute on cookies to prevent them from being sent in cross-site requests.
- Use the X-Frame-Options header: Implement the X-Frame-Options header to prevent clickjacking attacks.

## Conclusion

XSS and CSRF attacks are serious threats to web applications and can cause significant damage. By implementing the measures mentioned above, you can defend against these attacks and ensure the security of your web applications.
