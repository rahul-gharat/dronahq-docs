---
sidebar_position: 2
title: API Authentication
---
import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';


DronaHQ offers support for various types of authorization. When configuring a Rest API connector, you can choose the appropriate authorization type from the **Authentication** dropdown list.

This page provides instructions on how to establish a connection between your application and an authenticated API.

## Authentication Types -

<figure>
  <Thumbnail src="/img/restapi-auth-types.png" style= {{width:"70%", height:"auto"}} alt="Authetication methods"/>
  <figcaption align = "center"><i>You can select from different Authentication tyes for REST API configuration</i></figcaption>
</figure>


### No Authentication (None)

DronaHQ will not include authorization details in a request unless you specify an authentication type. If your request does not require authorization, you can choose ***No Auth*** from the dropdown list.

### API Key Authentication
***API key authentication*** stands out for its inherent simplicity. By utilizing a single key, authentication becomes straightforward as you only need to include the key. This type of authentication, commonly employed with connectors, is often utilized for read-only data access.

<figure>
  <Thumbnail src="/img/apikey-auth.jpeg" style= {{width:"100%", height:"auto"}} alt="Basic Auth"/>
</figure>

To configure account-specific fields required by the API for authentication, you must provide the necessary parameters. For API Key Authentication, the input parameter would be `API_key`.

It is crucial to select the appropriate Target where your API Key will be placed, such as `Header`, `Querystring`, `Body`, or `None`. 

If you choose None, you will need to explicitly add this key in your API request using the syntax `{{key_name}}`.

### Basic Authentication

One of the configuration options available is utilizing ***Basic Authentication***, which is commonly employed when an API relies on HTTP Basic authentication standards. 

<figure>
  <Thumbnail src="/img/basic-auth.jpeg" style= {{width:"100%", height:"auto"}} alt="Basic Auth"/>
</figure>

During the setup process for a new service, DronaHQ will prompt you to provide a `username` and `password`. Subsequently, the platform will add the necessary encoded authorization headers to the API request.


### AWS Authentication

DronaHQ ensures secure communication and access control to their REST API using ***AWS authentication*** mechanisms. Use the AWS Authentication scheme if you plan on using an Amazon WebServices API.

DronaHQ supports authenticating requests to their API using AWS Signature. This method involves signing the requests with AWS access keys and generating a signature to verify their authenticity and integrity.


<figure>
  <Thumbnail src="/img/aws-auth.jpeg" style= {{width:"100%", height:"auto"}} alt="AWS Auth"/>
</figure>


When configuring the respective APIs, you can include the required AWS Authentication input parameters:

- **Access Key:** Retrieve and copy the Access key provided within your account.
- **Secret Key:** Obtain and copy the secret key provided within your account.
- **Service Name:** Specify the desired service name to associate with the API, such as ` S3 `.
- **AWS Region:** Select the appropriate AWS account region for utilizing the service.
- **Role to Assume (ARN):** Indicate the specific role to assume when accessing the API, using the format `"arn:aws:iam::123456789012:role/RoleName"`.

### Digest Authentication

DronaHQ empowers users with the robust security of ***Digest Authentication*** for REST API configuration.The Digest Authentication method bears resemblance to Basic Auth in its utilization of usernames and passwords.

<figure>
  <Thumbnail src="/img/digest-auth.jpeg" style= {{width:"100%", height:"auto"}} alt="digest Auth"/>
</figure>


Digest Auth is primarily employed when an API relies on the ***HTTP "Digest" Authentication standard***. This method serves as a standard approach used by Internet servers to authenticate client credentials. 

Prior to transmission, credentials undergo hashing to ensure they are never transmitted in plain text.This approach ensures the avoidance of transmitting passwords directly, bolstering the overall security of REST API requests.

### Hawk Authentication

DronaHQ offers Hawk Authentication for REST API configuration, ensuring efficient and secure communication between clients and their API services. 

The ***Hawk Authentication*** technology and approach aims to streamline the authentication process by introducing a simplified authentication scheme. Specifically designed for HTTP, it revolves around the utilization of HMAC digests for requests and responses. 

<figure>
  <Thumbnail src="/img/hawk-auth.jpeg" style= {{width:"100%", height:"auto"}} alt="digest Auth"/>
</figure>

To ensure authentication and detect any potential data tampering, the Hawk authentication type is recommended for APIs utilizing a *Message Authentication Code (MAC)*. 

This method involves copying the **`Hawk Auth ID`** and **`Hawk Auth Key`** from your application.

Additionally, you need to select the appropriate algorithm supported by your API Service Provider, such as **`SHA-256`** or **`SHA1`**. 

The client must obtain a **`token ID`** and **`token key`** from the server, typically provided in a special Hawk-Session-Token header, to sign subsequent requests. Extracting the Hawk ID and Hawk Key from this token is essential for signing the requests securely.

### JWT Authentication

With DronaHQ you can take experience of JWT (JSON Web Token) Authentication is a widely used authentication method for REST API configuration.