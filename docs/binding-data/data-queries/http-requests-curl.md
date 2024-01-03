---
sidebar_position: 7
title: HTTP Requests - REST API
---
import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

DronaHQ facilitates seamless interaction with external services and resources through HTTP requests, enabling integration with RESTful APIs. The combination of HTTP requests and REST API integration within DronaHQ empowers users to effectively manage data, interact with external services, and create dynamic applications that cater to specific data handling needs.

<figure>
  <Thumbnail src="/img/data-queries/restapi-dataquery.jpeg" alt="REST API"/>
  <figcaption align = "center"><i>REST API</i></figcaption>
</figure>

While secure authentication is critical in production-ready applications, during early stages, emphasis might be on swiftly establishing the functionality of API requests without intricate authentication setups. In such cases, developers might initially create and utilize these requests to understand data retrieval, modification, or deletion processes.


## Query Execution Details:

#### Configuring Query Parameters:
- Name: Specifies the query's identifier or name for easy reference within DronaHQ.
- Run Query: Choose between two options:
  - Every Time Variable Changes: Set the query to automatically execute whenever associated variables are modified, ensuring real-time updates based on dynamic changes.
  - Manual Trigger Only: Opt for manual activation, enabling control over when the query executes, ideal for specific instances or user-triggered actions.
- Proxy Call Toggle: This toggle determines whether the query will utilize a proxy call mechanism:
  - Enabled: Utilize a proxy call for handling GET requests, ensuring efficient management and seamless integration with the designated endpoint.
  - Disabled: Bypass the proxy call, directly executing the query without intermediary handling.


#### Method

Specifies the REST method (such as `POST`, `GET`, `DELETE`, etc.) to be utilized for the request.

#### URL

Specifies the endpoint to be queried.

#### Advance

- Query String Parameters

  Sets key/value pairs to send as query parameters in the request.

- Headers

  Sets key/value pairs to send in the request header.

### Handling Response/failure

While configuring Rest API/GraphQL Api/Database Query, there might be scenario where you want your connector response to execute failure flow instead of success flow on certain conditions, in such cases, you can define failure conditions. Know more about Failure conditions from [here](/datasource-concepts/configuring-failure-conditions/)



## Transforming Data

This sections is exactly same as the one in the [connector library.](../connector-library/#transform-response)

<figure>
  <Thumbnail src="/img/data-queries/restapi-transform.jpeg" alt="Transform response" />
  <figcaption align = "center"><i>Transform response section</i></figcaption>
</figure>
