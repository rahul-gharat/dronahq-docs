---
sidebar_position: 1
title: Secure API Call
---
import Thumbnail from '@site/src/components/Thumbnail';


The Secure API Call in DronaHQ enables developers to transmit sensitive data securely through API requests. It is ideal for scenarios like authentication, data fetching, and third-party integrations. This action supports flexible configuration, ensuring secure and efficient communication.

### Steps to Use 

 Go to the `Action Builder`. Click `+ Add Action` > `Utility > Secure API Call`.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/secure-api-call/secure-api-call.png" alt="Secure API Call" />
<figcaption align='center'><i>Secure API Call</i></figcaption>
</figure>

### Parameters for Secure API Call

Here are the key components of the Secure API Call action:

| Parameter      |  Description |
|----------------|-------------|
| Endpoint URL | The API URL to which the request is sent (e.g., `https://api.example.com`). |
| HTTP Method |  The request method, such as GET, POST, PUT, or DELETE. |
| Headers     |  Key-value pairs for headers (e.g., `{ "Authorization": "Bearer token" }`). |
| Data        |  Key-value pairs for request body (e.g., `{ "key": "value" }`). |
| Trust Mode  |  Select trust mode for secure communication. |
| Timeout     |  Timeout duration in milliseconds. |

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/secure-api-call/secure-api-call-config.png" alt="Secure API Call" />
</figure>

### Use Cases
- Authentication: Secure login processes.
- Data Fetching: Retrieve sensitive or private data.
- Third-party Integrations: Interact with external APIs like payment gateways or CRMs.

The Secure API Call in DronaHQ ensures secure and efficient API interactions. Follow these steps to integrate secure requests into your apps effortlessly!

