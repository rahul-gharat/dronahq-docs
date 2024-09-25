---
sidebar_position: 1
title:  REST API Security with JWT Token Authentication
---

import Image from '@site/src/components/Image'; 
import VersionedLink from '@site/src/components/VersionedLink'; 
import Thumbnail from '@site/src/components/Thumbnail';

We are already aware of using the REST API with different authentication methods like OAuth 2.0, API keys, and so on. In this article, we are going to discuss JWT Token Authentication, wherein we will create a JWT Token inside the DronaHQ using JS Code Block, and using this generated token, access resources from a REST API.

## Quick Setup for the REST API Connector

Add a REST Api connector which will get the JWT token.
* Authentication: Set it to None.
* Authorization Header: Add a new header named Authorization that will hold your JWT Token.

## App Building with Table Grid Control

In this example, we'll be using the Screen Open Action to kick things off and grab data from a REST API. To show the information we pull in, we'll be using a handy tool called the Table Grid Control. 

First up, we'll need to create a JS Code Block. This is where we'll write the magic code to create a JWT token.

#### Code

    function base64url(source) 
    {
        encodedSource = CryptoJS.enc.Base64.stringify(source);
        encodedSource = encodedSource.replace(/=+$/, '');
        encodedSource = encodedSource.replace(/\+/g, '-');
        encodedSource = encodedSource.replace(/\//g, '_');
        return encodedSource;
    }
    function createJWT(header, data, secret = undefined) {
        let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
        let encodedHeader = base64url(stringifiedHeader);
        let stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
        let encodedData = base64url(stringifiedData);
        let token = encodedHeader + "." + encodedData;
        if (!secret) return token;
        let signature = CryptoJS.HmacSHA256(token, secret);
        signature = base64url(signature);
        return encodedHeader + "." + encodedData + "." + signature;
    }

    const header = {
    "alg": "HS256",
    "typ": "JWT"
    };
    const data = {
        "email": "john@example.com",
        "password": "@johncarter"
    };
    const secret = "john@99";

    const token = createJWT(header, data, secret);
    output = `Bearer ${token}`;


#### Code Explanation

Let's break down the process:

- Base64 Encoding Function: The `base64url` function encodes a source string into a URL-safe Base64 format. It replaces specific characters to ensure compatibility with URLs.

- JWT Token Creation Function: The `createJWT` function generates a JWT token. It first converts the header and data objects into UTF-8 encoded strings, then encodes them into URL-safe Base64 format. The token is formed by concatenating the encoded header and data strings with a period. If a secret key is provided, the token is signed using HMAC SHA-256, and the signature is appended to the token.

- Header and Data Objects: The `header` object specifies the algorithm (HS256) and token type (JWT). The `data` object contains user-specific information such as email and password.

- Secret Key: The `secret` variable holds the secret key used for signing the JWT token, providing an additional layer of security.

- Final Output: The generated JWT token is stored in the `token` variable. It is prefixed with 'Bearer' to form the final output, which can be used for authentication purposes.

<figure>
<Thumbnail src="/img/building-apps-guides/rest-api-jwt/rest-api-jwt-code.png" alt="JS Code" />
<figcaption align='center'><i>JS Code</i></figcaption>
</figure>

Capture the output of the JS Code Block by saving the task, to pass it to the REST API Connector.


Now add the REST API Connector we created earlier, and in the field of Authorization select the JS Code Block output.

<figure>
<Thumbnail src="/img/building-apps-guides/rest-api-jwt/rest-api-jwt.png" alt="JS Code" />
</figure>

Save the query, this will hold the response sent by the REST API, in our case the query name is `GetUsersData`.

The final step involves integrating the response data from the REST API with the TableGrid Control. 

Add the `Set Control Value Action` to the success branch of the REST API connector. This action will handle the assignment of data to the TableGrid Control.

<figure>
<Thumbnail src="/img/building-apps-guides/rest-api-jwt/rest-api-jwt-flow.png" alt="Set Control Value Action" />
<figcaption align='center'><i>Set Control Value Action</i></figcaption>
</figure>

After configuring the action, execute the application.

Upon running the application, you'll observe that the data retrieved from the API is populated onto the TableGrid Control.