---
sidebar_position: 1
title: Oracle
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


Oracle is an open-source object-relational database system that allows you to safely store and scale the different data workloads.

## Configuring Connector

### Prerequisites

1. Authentication Credentials: Gather necessary credentials for connecting to your Oracle instance.

2. Connection Details:
   - Hostname of the Oracle database.
   - Port number for database access.
   - Database name within the Oracle host.

3. Firewall Rules:
   - Set up firewall settings to permit DronaHQ (IP whitelist) access to your Oracle host.

Ensure these prerequisites are met for a smooth Oracle integration with DronaHQ, enabling efficient data management.

### Connector Setup in DronaHQ

Configure your database category using the provided details.Validate connection with `Test connection` and `Save` settings for secure database setup.

#### General 

| Field                | Description                             |
|----------------------|-----------------------------------------|
| Host                 | Enter the Host Domain or IP             |
| Port                 | Enter the Port number                   |
| Database Name        | Enter the Database name                 |
| Username             | Enter the Username                      |
| Password             | Enter the Password                      |

<figure>
  <Thumbnail src="/img/reference/connectors/oracle/details.png" alt="Oracle with Sample details." />
  <figcaption align = "center"><i>Oracle with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option   | Description    |
|----------------------|---------------------|
| Connection Options | The `key` and `value` connection options in the database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| Use Dynamic Database Host                | Dynamically determine the host for the database connection.                               |
| Use Dynamic Database Name                | Set the database name dynamically, allowing easy switching between databases.              |
| <VersionedLink to = "../../datasource-concepts/dynamic_credentials"> Use Dynamic Database Credentials        </VersionedLink> | Enable dynamic database credentials for secure and convenient management.                  |
| <VersionedLink to = "../../datasource-concepts/ssl_configurations"> Connect using SSL  </VersionedLink> | Securely access the database using an encrypted SSL connection, ensuring data integrity and confidentiality. |
| <VersionedLink to = "../../datasource-concepts/whitelisting_dronahq_ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |

## Adding Database Queries

Once the connector is configured, access it in your Connector Library. Click `Add query` after connection setup. Create queries, run them, and view responses.

<figure>
  <Thumbnail src="/img/reference/connectors/oracle/data-query.jpeg" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure>

:::tip
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to controls/actions for runtime use.
:::

Saved queries appear under your connector in Connector Library.

## Supported Query Operations

| Operations           | Description                                     |
|----------------------|-------------------------------------------------|
| Raw SQL Query        | Various `select, insert, delete, update`, join operations. |
| Stored Procedure Call| Call stored procedures e.g., `CALL getUserInfo;` |