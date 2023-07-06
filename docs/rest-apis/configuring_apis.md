---
sidebar_position: 1
title: Configuring APIs
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

Setting up a Rest API requires the specification of endpoints, methods, and parameters that facilitate interaction with the API. Additionally, authentication and security measures must be established to ensure proper functionality and safeguarding of the API.

DronaHQ simplifies the configuration of Rest APIs through its **REST API connector**, enabling an effortless and proper setup process.

This guide provides instructions on configuring a REST API connector and creating queries within DronaHQ.

:::note
The demonstrated API connector configuration exemplifies a simple authentication setup. However, if you intend to configure an API with diverse authentication requirements or multiple authentication methods, you can find detailed information by referring to the designated section [here](docs/rest-apis/api_authentication.md)

:::

## Configuring REST API connector

Let us now understand how to configure a REST API Connector:

Under `DronaHQ -> Connectors`, click `+ Connector`.

<figure>
  <Thumbnail src="/img/connecting-datasource/restapi-inlist.png" alt="REST API connector" width='70%'/>
  <figcaption align = "center"><i>REST API connector</i></figcaption>
</figure>

DronaHQ has different options including the use of the REST API that allows you to easily connect to the Third Party APIs and access to important systems.

While setting up API configurations, it is necessary to furnish the Authentication details corresponding to the specific authentication method. In this particular case, we will choose the `None` option.

<figure>
  <Thumbnail src="/img/connecting-datasource/restapi-config.png" alt="REST API configuration" />
  <figcaption align = "center"><i>REST API configuration with no authentication</i></figcaption>
</figure>

**Authentication**

Provides you with multiple authentication options, such as
API Key Authentication

- API Key Authentication
- Basic Authentication
- AWS Authentication
- Digest Authentication
- Hawk Authentication
- JWT Bearer
- NTLM Authentication
- OAuth - V2
- OAuth- PKCE
- OAuth- Client Credentials
- OAuth- JWT
- OAuth- 1.0a
- OAuth- 1.0a(3 legged)
- Multistep Authentication

**Import cURL**

Pasting a `cURL request` it auto-fills all the relevant API information, including authorization, request method, headers, parameters, and more. This streamlined process simplifies the configuration of Rest APIs and enhances efficiency.

**Method**

Specifies the REST method (such as `POST`, `GET`, `DELETE`, etc.) to be utilized for the request.

**URL**

Specifies the endpoint to be queried.

**Advance**

- **Query String Parameters**

  Sets key/value pairs to send as query parameters in the request.

- **Headers**

  Sets key/value pairs to send in the request header.

- **Content-Type:**

  The `Content-Type` header specifies the format of the request payload.

  - **RAW -**`application/json` is used for sending JSON-encoded data in the request body.

  - **Regular Form -**`application/x-www-form-urlencoded` is used for sending URL-encoded form data in the request body.
    In the `raw` format, the data is sent as a string in the specified format. In the `regular` form, the data is sent as a series of key-value pairs.

**Add Name for your Test API**

Enter a name for your test API in the provided field, and click "Save" to save the configuration.

**Body/Form Parameters**

The request body can be provided either as a string in a specified format (e.g., JSON) with key-value pairs included within the string, or as a series of key-value pairs using the `application/x-www-form-urlencoded` header.

:::tip

You can pass dynamic parameters to your REST API endpoints by creating variables under _content type_ as **`RAW`**

Wrap the variable name inside double curly braces to make it dynamic.

```js
{
    "username": "{{variablename}}"
}
```

This will create a variable with given name. you can use it to configure dynamic value and other properties.
:::
