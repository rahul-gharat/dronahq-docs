---
sidebar_position: 3
title: Configure SSL for REST API Connector
---
import Thumbnail from '@site/src/components/Thumbnail';

# Configure SSL for REST API Connector
DronaHQ supports SSL/TLS connection to REST API server as per configuration of server and you have required credentials for it.

SSL/TLS protocol allows for the encryption of data communications over open networks, safeguarding against tampering and interception by malicious actors. In addition, the use of SSL certificates authenticates communicating parties, creating a trust environment. This can be achieved using DronaHQ.

To access REST API that needs Self Signed certificate you can use DronaHQ REST API connector in following way
Let’s say we want to connect to REST API 

```http
  GET https://rahulgharat.online/json
```

First obtain self signed CA certificate

<figure>
  <Thumbnail src="/img/connecting-datasource/add-ssl-restapi-connector.png" alt="Add REST API connector" width='75%' />
  <figcaption align = "center"><i>Add REST API connector</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/connecting-datasource/rest-api-ssl-test-configuration.png" alt="provide test configuration" width='75%' />
  <figcaption align = "center"><i>Provide test configuration</i></figcaption>
</figure>

Toggle ON the self signed certificate button in ADMIN section of connector
And select verification mode from 


**Full Verification** is required when two way SSL or mTLS is needed in this case 3 things you will require
 1. CA certificate 
 2. Client Key
 3. Client Certificate

 CA Certificate is a certificate signed by a trusted, third-party certificate authority (CA). The client, which is DronaHQ in this case, uses the certificate to verify that they are talking to the correct server. Client Key and Client Certificate are additional fields that identify the client to the server.

**Verify CA certificate** can be used to verify CA certificate chain at client side in this case CA certificate is required

**Skip CA certificate verification** can be used to not verify CA certificate at client side.

We are pasting CA certificate in CA certificate field in our example and click on Test connection if CA certificate is verified and correct you will success response from API

<figure>
  <Thumbnail src="/img/connecting-datasource/rest-api-ssl-ca.png" alt="provide CA configuration" width='75%' />
  <figcaption align = "center"><i>Provide CA configuration</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/connecting-datasource/test-rest-api-ssl.png" alt="provide test configuration" width='75%' />
  <figcaption align = "center"><i>Provide test configuration</i></figcaption>
</figure>

You can then Save it and will be used to subsequent request that you add and make using this connector to securely connect with your REST API.

## Connect to Two Way SSL (mTLS) REST API

Here we have used example of [Visa Developer sandbox API](https://choosealicense.com/licenses/mit/) to demonstrate Two Way SSL through DronaHQ REST API connector.
Here You need to select provide authentication specified by Visa Developer API
Here we are using basic auth mentioned by their API docs and all certificate like CA certificate, Client key, Client Certificate you can obtain from visa developer API portal once you log in and create your app.

<figure>
  <Thumbnail src="/img/connecting-datasource/create-rest-api-two-way-ssl.png" alt="create REST API connector" width='75%' />
  <figcaption align = "center"><i>Create REST API connector</i></figcaption>
</figure>

Add the Endpoint and request body details as per requirement

<figure>
  <Thumbnail src="/img/connecting-datasource/rest-api-two-way-ssl-configuration.png" alt="configure Test Endpoint details" width='75%' />
  <figcaption align = "center"><i>Configure Test Endpoint details</i></figcaption>
</figure>

Here we are selecting Verification mode as Full Verification and provide all 3 details as required and click on Test connection on successful authentication you will receive response for you test endpoint provided

<figure>
  <Thumbnail src="/img/connecting-datasource/rest-api-enable-full-verfication-mode-ssl.png" alt="select verification mode" width='75%' />
  <figcaption align = "center"><i>Select verification mode</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/connecting-datasource/test-rest-api-two-way-ssl.png" alt="Test connection" width='75%' />
  <figcaption align = "center"><i>Test connection</i></figcaption>
</figure>

Once tested successfully you can save the connector and can create multiple endpoints that will use this certificate in subsequent requests to communicate securely.
