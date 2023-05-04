# OAuth

## Authentication vs Authorization

The process of confirming a user's or system's identification is known as authentication. In other words, it involves figuring out if a person is who they say they are. Usernames and passwords, biometric elements (such fingerprints or face recognition), smart cards, or other authentication techniques are typically used to achieve authentication.
<p align="center">
  <img src="https://user-images.githubusercontent.com/56529633/236176470-584dccb6-76ae-4824-9bb5-7aa396bb865d.gif" />
</p>


After a user has been authenticated, authorization is the process of deciding what actions are permitted of them. To find out if a person is authorized to utilize a specific resource or carry out a specific operation, this often entails verifying their permissions, roles, or access control lists.

<p align="center">
  <img src="https://user-images.githubusercontent.com/56529633/236177007-54715c16-a912-4317-ae61-809874b1824d.gif" />
</p>

### Authentication vs Authorization

<p align="center">
  <img src="https://user-images.githubusercontent.com/56529633/236175682-598759e9-e691-4c3d-811d-3b254a1f914b.png" />
</p>





## 1. What Is OAuth and Why to use?
OAuth (Open Authorization) is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords. This mechanism is used by companies such as Amazon, Google, Facebook, Microsoft, and Twitter to permit users to share information about their accounts with third-party applications or websites. 
<hr/>

[OAuth in detail](https://youtu.be/Lxg7NERDLD8)



- OAuth and APIs, How OAuth Is Used to Access APIs?

## OAuth 1.0 vs. OAuth 2.0

### Here are the main key differences between OAuth 1.0 and OAuth 2.0:

| Feature             | OAuth 1.0                                                                                                                         | OAuth 2.0                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Security            | Less secure, because it uses digital signatures for authentication and message integrity, which can be more complex to implement. | More secure than OAuth 1.0, because it uses SSL/TLS encryption to protect communication between the client and server. |
| Simplicity          | More complex to implement due to the use of one-time-use tokens and more complex authentication.                                  | Simpler to implement and use, with separate specifications for authentication, authorization, and token handling.      |
| Token format        | Uses one-time-use tokens, which can be more secure but also more complex to implement.                                            | Uses longer-lived access tokens, which can simplify implementation but may be less secure if not properly managed.     |
| Resource protection | Fewer options for resource protection.                                                                                            | Provides more options for protecting resources and APIs, including the use of scopes and resource owners.              |
| Client registration | Does not have a formal client registration process.                                                                               | Requires clients to register with the authorization server, which can help with security and management.               |

### Here how they actually work:

#### OAuth 1.0:

<img src = "https://camo.githubusercontent.com/5188c068edbeb4117fbfde67f3ceb4bff4f6303775a317223d2c3232ff6f27a0/68747470733a2f2f692e696d6775722e636f6d2f4f7a754e7556732e706e67" alt = "OAuth 1.0">

#### OAuth 2.0:

<img src = "https://camo.githubusercontent.com/2363737e1d54584c4161af42fb7c7ff6362fa14324c01372d6ab014a799e1308/68747470733a2f2f692e696d6775722e636f6d2f48365776626d632e706e67" alt = "OAuth 2.0">
