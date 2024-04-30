---
sidebar_position: 1
title: Call REST API
---
import Thumbnail from '@site/src/components/Thumbnail';

The Call REST API Action can be used to make HTTP calls to API servers and retrieve responses. It supports various HTTP methods, including GET, POST, PUT, PATCH, and DELETE. This action also allows users to specify HTTP headers, send request data, use a proxy server, and set a timeout for the request.
The response of this action can captured using `{{CALLRESTAPI.output}}`

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/callrestapi/callrestapi.png" alt="Confirm" />
<figcaption align='center'><i>Call REST API</i></figcaption>
</figure>

Here are the key components of the `Call REST API` action:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/callrestapi/action.png" alt="Confirm" />
</figure>

- Endpoint Url: The URL of the API server that needs to be called.

- HTTP Method: The HTTP method to use for the request (GET, POST, PUT, PATCH, DELETE).

- Headers: Optional custom headers to include with the request.

- Data : Optional data to send in the request body.

- Proxy : Enable or disable the use of a proxy when making the API call.

- Timeout :  Set a custom timeout for the request in milliseconds.


The `Call REST API` action provides a robust and flexible approach to integrating HTTP-based communication into your workflows. By using this action, you can effortlessly make API calls to interact with external services, whether to retrieve data, update records, or trigger specific events. This action supports various HTTP methods such as GET, POST, PUT, PATCH, and DELETE, offering a range of capabilities to meet your requirements.
