---
sidebar_position: 1
title: Cassandra
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

Apache Cassandra is an open-source, distributed NoSQL database management system designed to handle large amounts of
data across many commodity servers while providing high availability and fault tolerance.

## Prerequisites

1. Cassandra Authentication: Before utilizing the Cassandra connector provided by DronaHQ, ensure you have valid
   authentication credentials for your Cassandra instance. You'll need:

   - Username and password associated with your Cassandra account.

2. Connection Details:

   - Identify the Datacenter: Determine the specific Cassandra datacenter you want to connect to.
   - Specify the Keyspace: Know the keyspace (similar to a database) within the Cassandra datacenter where you intend to
     perform operations.

3. Cluster Nodes: Understand the nodes in your Cassandra cluster that you will be connecting to. The connector requires
   at least one node's hostname or IP address.

## Configuring Connector in DronaHQ

Configure your database category using the provided details. Validate connection with `Test connection` and `Save`
settings for secure database setup.

#### General

| Field      | Description                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| Host       | Enter the Host Domain or IP                                                                              |
| Port       | Enter the Port number                                                                                    |
| Datacenter | The specific datacenter within your Cassandra cluster where you want to perform operations.              |
| Keyspace   | The keyspace (similar to a database) within the selected datacenter where you intend to perform actions. |
| Username   | Enter the Username                                                                                       |
| Password   | Enter the Password                                                                                       |

<figure>
  <Thumbnail src="/img/reference/connectors/cassandra/details.png" alt="Cassandra with Sample details." />
  <figcaption align = "center"><i>Cassandra with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option                                                                                    | Description                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Options                                                                                 | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "/datasource-concepts/whitelisting-dronahq-ip/"> Whitelist IP </VersionedLink> | Enhance security by restricting database access to specific whitelisted IP addresses.                                                                                                         |

## Adding Database Queries

After configuring the connector, access it in your Connector Library.

Click `Add query` once the connection is established. Create queries, run them, and view responses.

<figure>
  <Thumbnail src="/img/reference/connectors/cassandra/query.png" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure>

:::tip 
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to
controls/actions for runtime use. 
:::

Saved queries appear under your connector in Connector Library.

## Supported Query Operations

| Operations            | Description                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| Raw SQL Query         | Execute various SQL operations directly, e.g., `SELECT * FROM TableName;`                                       |
| Stored Procedure Call | Call stored procedures, e.g., `EXEC usp_GetInfo;` to perform specific tasks or retrieve data from the database. |

## Using Cassandra Connector

### Read/Display Data Query

Start by constructing a CQL query to extract data from your Cassandra database using the Cassandra Connector. Consider a
scenario where you want to retrieve all data from the `student` table. The CQL query is:

Query used:

```cql
SELECT * FROM student;
```

Query explanation:

This CQL query retrieves all rows and columns from the `student` table within the Cassandra database.

Integrate the fetched data into your application's interface.

a. Access the Controls section and introduce the Table grid control.

b. Navigate to `Data Bind Options ->  Quick Select -> Connector Library`.

c. Opt for the Cassandra connector and choose the query that aligns with your data presentation goals.

 <figure>
  <Thumbnail src="/img/reference/connectors/cassandra/queryexample.png" alt="Query example for retrieving data from Cassandra database using Cassandra Connector." />
  <figcaption align = "center"><i>Query example for retrieving data from Cassandra database using Cassandra Connector.</i></figcaption>
</figure>

By following these steps, you can seamlessly retrieve and display data from the `student` table using the Cassandra
Connector, enhancing your application's functionality and user experience with Cassandra data.
