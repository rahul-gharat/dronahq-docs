---
sidebar_position: 1
title: SurrealDB
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

SurrealDB is a cutting-edge distributed NoSQL database system designed for optimal scalability, high availability, and fault tolerance in handling diverse data workloads.

## Configuring SurrealDB Connector

### Prerequisites

1. Authentication Credentials:
   Gather required credentials for seamless connection to your SurrealDB instance.

2. Connection Details:
   - Hostname of the SurrealDB database.
   - Port number for database access.
   - Database name within the SurrealDB host.

3. Firewall Rules:
   Set up necessary firewall configurations to allow DronaHQ (IP whitelist) access to your SurrealDB host.

Ensure these prerequisites are met to enable a smooth integration of SurrealDB with DronaHQ, ensuring efficient data management.

### Connector Setup in DronaHQ

Configure your SurrealDB database category using the provided connection details. Validate connection with `Test connection` and `Save` settings for secure database setup.

#### General 

| Field                | Description                             |
|----------------------|-----------------------------------------|
| Host                 | Enter the Host Domain or IP             |
| Port                 | Enter the Port number                   |
| Database Name        | Enter the Database name                 |
| Namespace            | Enter the Namespace (if applicable)     |
| Username             | Enter the Username                      |
| Password             | Enter the Password                      |

<!-- <figure>
  <Thumbnail src="/img/reference/connectors/surrealdb/details.png" alt="SurrealDB with Sample details." />
  <figcaption align = "center"><i>SurrealDB with Sample details.</i></figcaption>
</figure> -->

#### Advanced Settings

| Advanced Option   | Description    |
|----------------------|---------------------|
| Whitelisting DronaHQ IP | Restrict database access to specific whitelisted IP addresses for enhanced security. |

## Managing Database Queries

Once the SurrealDB connector is configured, access it in your Connector Library. Add queries, execute them, and view responses.

<!-- <figure>
  <Thumbnail src="/img/reference/connectors/surrealdb/data-query.jpeg" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure> -->

:::tip
Use dynamic variables enclosed in double curly brackets. Test with sample values before saving. Link dynamic variables to controls/actions for runtime use.
:::

Saved queries will be listed under your connector in the Connector Library.

## Supported Query Operations

| Operations           | Description                                     |
|----------------------|-------------------------------------------------|
| Raw SQL Query        | Perform various operations like `select, insert, delete, update`, and join operations. |
| Stored Procedure Call| Execute stored procedures, e.g., `CALL getCustomerDetails;` |

## Utilizing SurrealDB Connector

### Data Binding via Data Query

#### Reading/Displaying Data Query for SurrealDB:

Craft an SQL query to extract data from your SurrealDB database. For example, retrieve all records from a `Customers` table:

Query used:

```sql
SELECT * FROM Customers;
```

Query explanation:

This SQL query retrieves all rows and columns from the `Customers` table within the SurrealDB database.

<!-- <figure>
  <Thumbnail src="/img/reference/connectors/surrealdb/getall.jpeg" alt="Get all data query." />
  <figcaption align = "center"><i>Get all data query.</i></figcaption>
</figure> -->

Integrate the fetched data into your application's interface for enhanced functionality and user experience.
