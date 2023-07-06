---
sidebar_position: 2
title: API Authentication
---
import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';


DronaHQ offers support for various types of authorization. When configuring a Rest API connector, you can choose the appropriate authorization type from the `Authentication` dropdown list.

This page provides instructions on how to establish a connection between your application and an authenticated API.

## Authentication Types -

<figure>
  <Thumbnail src="/img/connecting-datasource/restapi-auth-types.png" style= {{width:"70%", height:"auto"}} alt="Authetication methods"/>
  <figcaption align = "center"><i>You can select from different Authentication tyes for REST API configuration</i></figcaption>
</figure>


### No Authentication (None)

DronaHQ will not include authorization details in a request unless you specify an authentication type. If your request does not require authorization, you can choose `No Auth` from the dropdown list.

### API Key Authentication
`API key authentication` stands out for its inherent simplicity. By utilizing a single key, authentication becomes straightforward as you only need to include the key. This type of authentication, commonly employed with connectors, is often utilized for read-only data access.

<figure>
  <Thumbnail src="/img/connecting-datasource/apikey-auth.jpeg" width='600px' alt="Basic Auth"/>
</figure>

To configure account-specific fields required by the API for authentication, you must provide the necessary parameters. For API Key Authentication, the input parameter would be `API_key`.

It is crucial to select the appropriate Target where your API Key will be placed, such as `Header`, `Querystring`, `Body`, or `None`. 

If you choose None, you will need to explicitly add this key in your API request using the syntax `{{key_name}}`.

### Basic Authentication

One of the configuration options available is utilizing `Basic Authentication`, which is commonly employed when an API relies on HTTP Basic authentication standards. 

<figure>
  <Thumbnail src="/img/connecting-datasource/basic-auth.jpeg" width='600px' alt="Basic Auth"/>
</figure>

During the setup process for a new service, DronaHQ will prompt you to provide a `username` and `password`. Subsequently, the platform will add the necessary encoded authorization headers to the API request.


### AWS Authentication

DronaHQ ensures secure communication and access control to their REST API using `AWS authentication` mechanisms. Use the AWS Authentication scheme if you plan on using an Amazon WebServices API.

DronaHQ supports authenticating requests to their API using AWS Signature. This method involves signing the requests with AWS access keys and generating a signature to verify their authenticity and integrity.


<figure>
  <Thumbnail src="/img/connecting-datasource/aws-auth.jpeg" width='600px' alt="AWS Auth"/>
</figure>


When configuring the respective APIs, you can include the required AWS Authentication input parameters:

- **Access Key:** Retrieve and copy the Access key provided within your account.
- **Secret Key:** Obtain and copy the secret key provided within your account.
- **Service Name:** Specify the desired service name to associate with the API, such as ` S3 `.
- **AWS Region:** Select the appropriate AWS account region for utilizing the service.
- **Role to Assume (ARN):** Indicate the specific role to assume when accessing the API, using the format `"arn:aws:iam::123456789012:role/RoleName"`.

### Digest Authentication

DronaHQ empowers users with the robust security of `Digest Authentication` for REST API configuration.The Digest Authentication method bears resemblance to Basic Auth in its utilization of usernames and passwords.

<figure>
  <Thumbnail src="/img/connecting-datasource/digest-auth.jpeg" width='600px' alt="digest Auth"/>
</figure>


Digest Auth is primarily employed when an API relies on the `HTTP "Digest" Authentication standard`. This method serves as a standard approach used by Internet servers to authenticate client credentials. 

Prior to transmission, credentials undergo hashing to ensure they are never transmitted in plain text.This approach ensures the avoidance of transmitting passwords directly, bolstering the overall security of REST API requests.

### Hawk Authentication

DronaHQ offers Hawk Authentication for REST API configuration, ensuring efficient and secure communication between clients and their API services. 

The `Hawk Authentication` technology and approach aims to streamline the authentication process by introducing a simplified authentication scheme. Specifically designed for HTTP, it revolves around the utilization of HMAC digests for requests and responses. 

<figure>
  <Thumbnail src="/img/connecting-datasource/hawk-auth.jpeg" width='600px' alt="digest Auth"/>
</figure>

To ensure authentication and detect any potential data tampering, the Hawk authentication type is recommended for APIs utilizing a *Message Authentication Code (MAC)*. 

This method involves copying the **`Hawk Auth ID`** and **`Hawk Auth Key`** from your application.

Additionally, you need to select the appropriate algorithm supported by your API Service Provider, such as **`SHA-256`** or **`SHA1`**. 

The client must obtain a `token ID` and **`token key`** from the server, typically provided in a special Hawk-Session-Token header, to sign subsequent requests. Extracting the Hawk ID and Hawk Key from this token is essential for signing the requests securely.

### JWT Bearer Authentication

With DronaHQ you can take experience of JWT (JSON Web Token) Authentication is a widely used authentication method for REST API configuration.

This feature allows clients to securely authenticate and authorize their requests by leveraging JSON Web Tokens (JWT). 

<figure>
  <Thumbnail src="/img/connecting-datasource/jwt-auth.jpeg" width='600px' alt="JWT Auth"/>
</figure>

You can use the JWT Bearer authentication type if your API uses a JWT Signature to authenticate and detect any kind of tampering with the data.

When configuring JWT authentication, you will encounter the following options:

1. `Algorithm`: Choose the algorithm to be used for the JWT token.
2. `Secret`: Provide the secret key associated with the selected algorithm.
3. `Payload`: Enter the payload data for the JWT token in JSON format.
4. `JWT Header Prefix`: Optionally, specify a prefix to be used at the start of the headers. This prefix is part of the request and not a component of the JWT.
5. `JWT Headers`: Include any custom headers to be included in the JWT token. Headers relevant to the chosen algorithm are automatically added.
6.`Add JWT Token to`: Select whether the JWT token should be added to the request header or query parameter.


These options allow you to configure JWT authentication in a flexible manner, customizing the algorithm, payload, headers, and the method by which the JWT token is added to the request.

### NTLM Authentication

NTLM (Windows NT LAN Manager) authentication is a widely used authentication protocol for Windows-based systems. It is a challenge-response-based mechanism where the client and server exchange messages to establish authentication.

When configuring REST API authentication in DronaHQ, you have the option to choose the NTLM authentication method. With NTLM authentication, DronaHQ facilitates the integration and authentication of REST APIs within Windows environments.

<figure>
  <Thumbnail src="/img/connecting-datasource/ntlm-auth.jpeg" width='600px' alt="ntlm Auth"/>
</figure>

 Ensure you have the necessary NTLM credentials required for authentication. These typically include a `username` and `password`.

 NTLM authentication offers advanced parameters for customization. The `Domain` parameter specifies the authentication domain or host, while the `Workstation` parameter identifies the PC's hostname involved in the authentication. These parameters provide greater control and customization options for NTLM authentication configuration.


 ### OAuth - V2 

OAuth 2.0 primarily focuses on authorization. Upon implementation, it provides an access token for use in authorizing requests within the DronaHQ integration. 

This protocol enables users to grant third-party websites or applications access to their protected resources while keeping their identity concealed. OAuth 2.0 is an established open standard adopted by numerous prominent third-party services.

<figure>
  <Thumbnail src="/img/connecting-datasource/oauthv2-auth.jpeg" width='600px' alt="OAuth V2 Auth"/>
</figure>
 
When configuring the APIs with OAuth 2.0 authentication, you need to provide the authentication details for the respective authentication method, such as  

- `client credentials` (client ID and client secret), 
- `authorization endpoint`, 
- `scope`, and 
- `token endpoint`. 

These details are essential for establishing the secure authorization flow and obtaining access tokens to authenticate and authorize API requests.

### OAuth - PKCE

OAuth 2.0 with the PKCE method is an advanced security approach that DronaHQ provides for REST API configuration. 


It enhances the security of OAuth 2.0 by mitigating Cross-Site Request Forgery (CSRF) and authorization code injection attacks. The PKCE method enables applications to leverage OAuth 2.0 flows even in scenarios involving open or untrusted clients, ensuring the most reliable and secure authentication mechanism.


<figure>
  <Thumbnail src="/img/connecting-datasource/oauthpkce-auth.jpeg" width='600px' alt="oAuth pkce Auth"/>
</figure>


### OAuth - Client Credentials 

DronaHQ offers OAuth client credentials authentication for REST API configuration. With OAuth V2 Client Credentials, applications can request an access token specifically for accessing their own resources, without requiring user involvement. 

This grant type allows clients to obtain an access token using their client credentials, enabling them to authenticate themselves and make requests independently, separate from any user context. It provides a secure method for clients to authenticate and access resources within the API.

<figure>
  <Thumbnail src="/img/connecting-datasource/oauthclient-auth.jpeg" width='600px' alt="oAuth client credentials"/>
</figure>


### OAuth - JWT

OAuth JWT (JSON Web Token) is a secure authentication mechanism provided by DronaHQ for configuring REST APIs. 

With OAuth JWT authentication, tokens are issued in the form of JSON web tokens, which contain claims about the identity and privileges of the authenticated user. These tokens are digitally signed and can be validated by the API server using the corresponding public key. 

OAuth JWT offers a stateless and scalable approach to authentication, allowing clients to authenticate and access protected resources using self-contained tokens. It provides a robust and secure method for authorizing API requests within the DronaHQ platform.


<figure>
  <Thumbnail src="/img/connecting-datasource/oauthjwt-auth.jpeg" width='600px' alt="oAuth client credentials"/>
</figure>


### OAuth - 1.0

DronaHQ offers OAuth 1.0a authentication as a method for configuring REST APIs. 

OAuth 1.0a is a legacy authentication protocol that enables websites or applications (Consumers) to securely access Protected Resources from a web service (Service Provider) through an API. It ensures that Users do not have to disclose their Service Provider credentials to the Consumers.

Accessing user data using OAuth 1.0 requires a series of requests between the client application, user, and service provider. OAuth 1.0 is commonly known as "two-legged" authentication since it involves the authentication process solely between the client and server, without the involvement of additional parties. 

OAuth 1.0a provides a standardized and versatile approach to API authentication, allowing for secure and generic authentication implementation.


<figure>
  <Thumbnail src="/img/connecting-datasource/oauth1.0-auth.jpeg" width='600px' alt="oAuth client credentials"/>
</figure>


### OAuth - 1.0a(3 legged)

DronaHQ offers OAuth 1.0a (3 legged) authentication for configuring REST APIs, providing a robust and secure authentication method. This approach involves four key components: the user, API, application, and login service. 

OAuth 1.0 is commonly referred to as "three-legged" authentication because, in this scenario, a client requests data on behalf of a user from a third-party service. 

This involves three parties: the client application, the user, and the third-party service provider. The authentication process allows the client to access and interact with the user's data with their consent.

<figure>
  <Thumbnail src="/img/connecting-datasource/oauth1.0a-auth.jpeg" width='600px' alt="oAuth client credentials"/>
</figure>

In each step of the authentication process, a digital signature is created and passed on to the subsequent step, ensuring the integrity and authenticity of the communication. This method guarantees a reliable and protected authentication flow for accessing REST APIs within the DronaHQ platform.

### Multistep Authentication  

DronaHQ provides multistep authentication for configuring REST APIs. This feature allows users to set up connectors that involve additional authentication steps beyond the initial authentication process.

This feature allows users to set up connectors that involve additional authentication steps beyond the initial authentication process.

<figure>
  <Thumbnail src="/img/connecting-datasource/mutlistep-auth.jpeg" width='600px' alt="oAuth client credentials"/>
</figure>

When you click on the `+ Add Step` button, you will be presented with a range of authentication step options to choose from. These options include:

- FORM: Enables authentication through form-based input.
- API REQUEST: Allows authentication by making an API request.
- OAUTH V2: Provides OAuth 2.0 authentication for securing API access.
- Basic Auth: Supports authentication using Basic Authentication credentials.
- OAUTH V2 - PKCE: Offers OAuth 2.0 authentication with the Proof Key for Code Exchange (PKCE) method.
- OAUTH V2 - CLIENT CREDENTIALS: Facilitates OAuth 2.0 authentication using client credentials.
- SSO TOKEN: Allows authentication using a Single Sign-On (SSO) token.

These authentication steps offer flexibility and cover a variety of authentication scenarios to suit your REST API configuration needs.