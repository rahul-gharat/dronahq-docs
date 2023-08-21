---
sidebar_position: 1
title: gRPC
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


gRPC is a robust open-source high performance Remote Procedure Call (RPC) framework used to develop scalable and fast APIs. The core concept in grpc is streaming where several things happen in a single request. Protocol buffers are used instead of JSON to handle request/response multiplexing.


## Prerequisite

-  Connection Parameters:
   To establish a successful connection, gather the following information:
   - Host: The host address (IP or domain) where the gRPC server is located.
   - Port: The port number on which the gRPC server is listening for incoming connections.
   - Proto Type File Details: Information about the Protocol Buffers (Proto) type file that defines the service methods and message types for communication.


## Configuring API Connector in DronaHQ

Set up your API connector by entering the required details. Ensure Connector connection using the `Test connection` option. Once verified, click `Save` to save your configuration settings. 


#### General



| Field        | Description |
|--------------|-------------|
| Host         | The host address (IP or domain) where the gRPC server is located. |
| Port         | The port number on which the gRPC server is listening for incoming connections. |
| Meta Data    | Key-value pairs that you can add as headers for each API call, if needed. |
| Proto File   | Information about the Protocol Buffers (Proto) type file that defines the service methods and message types for communication. |

<figure>
  <Thumbnail src="/img/reference/connectors/grpc/details.png" alt="gRPC with Sample details." />
  <figcaption align = "center"><i>gRPC with Sample details.</i></figcaption>
</figure>

#### Authentication


| Authentication Type      | Description                                                                                                   |
|--------------------------|---------------------------------------------------------------------------------------------------------------|
| None                     | No authentication required.                                                                                  |
| OAuth V2                 | Authenticate using OAuth version 2.0 protocol.  |



## Adding API Queries 

To incorporate API queries using gRPC, follow these steps:

1. Query Name: Assign a unique and meaningful name to your query, making it easily identifiable.

2. Service: Specify the service that you intend to interact with through your API query.

3. Method: Define the method within the chosen service that you will be utilizing for your API query.

4. Data: Provide the necessary data for your query. This may include various parameters, depending on the method's requirements. For instance, if you're invoking a method named "Welcome" and the required data is a JSON object, format it as follows:

   ```json
   {
     "name": "Welcome"
   }
   ```
<figure>
  <Thumbnail src="/img/reference/connectors/grpc/query.png" alt="Translate Query" />
  <figcaption align = "center"><i>Translate Query</i></figcaption>
</figure>


:::tip
Utilize double curly brackets for incorporating dynamic variables. Prior to saving, test with sample values. Associate dynamic variables with controls/actions for real-time utilization.
:::

Your saved queries will be visible beneath your connector within the Connector Library. 


## Using gRPC Connector

1. Access Data Bind Section or Control Action:
   - Navigate to the data bind section of the control.

2. Provided Data for Query or Interaction:
   - Depending on the selected gRPC method, input required data parameters. For instance, if you're using a method called "Welcome," structure the data as JSON:

   ```json
   {
     "name": "Welcome"
   }
   ```
   <figure>
  <Thumbnail src="/img/reference/connectors/grpc/query.png" alt="Translate Query" />
  <figcaption align = "center"><i>Translate Query</i></figcaption>
</figure>


3. Place the Table grid control from the Controls section.  Select gRPC Connector from Data Bind Options. Navigate to `Data Bind Options -> Quick Select -> Connector Queries`.

<figure>
  <Thumbnail src="/img/reference/connectors/grpc/output.png" alt="output of Query" />
</figure>