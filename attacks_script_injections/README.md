In the world of cybersecurity, attacks can be broadly categorized into two main types:active attacks and passive attacks.
<table>
  <tr>
    <th>Passive Attacks</th>
    <th>Active Attacks</th>
  </tr>
  <tr>
    <td>attempts to make use of information from the system</td>
    <td>involve some modification of the data streams</td>

  </tr>
  <tr>
    <td>Does not effect system resources</td>
    <td>system resources can be changed</td>

  </tr>
   <tr>
    <td>Does not effect system resources</td>
    <td>system resources can be changed</td>

  </tr>
</table>
# Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) Attacks

## Introduction

Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) attacks are two of the most common types of web application attacks. Both of these attacks are executed by exploiting vulnerabilities in web applications and can have serious consequences, including data theft and website defacement.

## Cross-Site Scripting (XSS) Attacks

XSS attacks are a type of injection attack where an attacker injects malicious code into a web page that is viewed by other users. This can happen when a web application fails to sanitize user input properly or when it does not validate user input correctly.

XSS attacks can be either stored or reflected. In a stored XSS attack, the malicious code is stored on the server and served to every user who requests the affected page. In a reflected XSS attack, the malicious code is reflected back to the user from the server in response to a request.

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

