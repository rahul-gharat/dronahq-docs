---
sidebar_position: 1
title: Using JavaScript to Handle JWT Token Expiry
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

We're familiar with utilizing various authentication methods like OAuth 2.0 and API keys for REST API access. However,
this article focuses on implementing JWT Token Authentication.

In this scenario, we send a resource request to the Data Endpoint using a stored JWT Token. Should the token expire or
become invalid, the request fails. To address this, we refresh the token by obtaining a new one from the Login Endpoint.
Subsequently, the requested data is bound to the TableGrid Control.

This tutorial exclusively employs Xano's API endpoints. Additionally, note that the JWT Token we're utilizing has an
expiry after 60 seconds.

## REST API Connector Configuration

1. Set the Authentication to `None`
2. Copy the `/auth/login` endpoint from Xano and paste it in the connector’s url section and set the http method to
   `POST`.
3. Pass Raw JSON containing the `valid user credentials` to receive the JWT Token.

<figure>
  <Thumbnail src="/img/app-scripting-and-code/javascript-jwt-token-expiry/javascript-jwt-token-expiry-api.png" alt="Adding API details." />
  <figcaption align = "center"><i>Adding API details.</i></figcaption>
</figure>

4. Now add one more API to this connector, this will request data from Xano’s resource endpoint.
5. Add a new header `Authorization` which will take the JWT Token as input.

<figure>
  <Thumbnail src="/img/app-scripting-and-code/javascript-jwt-token-expiry/javascript-jwt-token-expiry-query.png" alt="Adding API endpoint" />
  <figcaption align = "center"><i>Adding API endpoint</i></figcaption>
</figure>

## Retrieving Data from a REST API and Displaying it in a TableGrid

For this use case, we will use the `Screen Open Action` to trigger data retrieval from the REST API. To display the data
accessed from the REST API, we are using the TableGrid Control.

1. Variable Creation: from the data query section create a new Persistent variable named `authToken` to store the JWT
   token. Leave the default value field blank. 
    <figure>
    <Thumbnail src="/img/app-scripting-and-code/javascript-jwt-token-expiry/javascript-jwt-token-expiry-variable.jpeg" alt="variable" />
    </figure>

2. REST API Connector:

   - Select the appropriate REST API Connector to retrieve data from the Xano endpoint.
   - Within the connector's Authorization field, specify the `authToken` variable.
   - Introduce a new output variable named `data` to hold the response received from the REST API.
    <figure>
    <Thumbnail src="/img/app-scripting-and-code/javascript-jwt-token-expiry/javascript-jwt-token-expiry-connector.png" alt="variable" />
    </figure>


3. Binding Data to TableGrid:

   - Upon successful retrieval by the REST API, incorporate a `Set Control Value` Action within the success branch. This
     action will bind the fetched data (`data` variable) to the TableGrid control, enabling its display.
    <figure>
    <Thumbnail src="/img/app-scripting-and-code/javascript-jwt-token-expiry/javascript-jwt-token-expiry-setctrl.png" alt="variable" />
    </figure>

4. Error Handling (Expired Token):

   - If the `authToken` variable holds an expired or invalid token, the REST API will respond with a 401 status code. To
     address this, add another REST API Connector configured to request a new JWT token from Xano's login endpoint.

5. New Token Storage:

   - Create a variable (e.g., `newAuthToken`) to store the newly acquired authentication token received in the API
     response.
   - Ensure you select `output.authToken` during variable assignment. This step destructures the response and extracts
     only the `authToken` value.
    <figure>
    <Thumbnail src="/img/app-scripting-and-code/javascript-jwt-token-expiry/javascript-jwt-token-expiry-authtoken.png" alt="variable" />
    </figure>

6. Updating Auth Token:

   - Assign the newly acquired token (stored in `newAuthToken`) to the previously created `authToken` variable.
    <figure>
    <Thumbnail src="/img/app-scripting-and-code/javascript-jwt-token-expiry/javascript-jwt-token-expiry-setauthtoken.png" alt="variable" />
    </figure>

7. Repeating Steps:
   - Repeat steps 2, 3, and 4 to utilize the updated `authToken` for subsequent data retrieval.

Verification:

- Following these steps, your App's Action Flow should resemble the provided image.
    <figure>
    <Thumbnail src="/img/app-scripting-and-code/javascript-jwt-token-expiry/javascript-jwt-token-expiry-flow.png" alt="variable" />
    </figure>
- Run the App to observe the automatic loading of API data within the TableGrid control.
