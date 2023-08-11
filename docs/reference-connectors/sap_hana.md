---
sidebar_position: 1
title: SAP HANA
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

SAP HANA stands as a memory-based, column-focused, relational database management solution created and promoted by SAP SE. DronaHQ offers the SAP HANA connector, facilitating the essential task of storing and fetching data as demanded by various applications.


## Prerequisite

### Authentication Requirements

To establish a connection with your SAP HANA instance, you will require specific authentication credentials. You have the choice of either of the following two credential options:
   - SAP HANA database username and password.
   - Alternative authentication methods (excluding AWS IAM authentication).

### Connection Information

   - Hostname of the SAP HANA database.
   - Port number for database communication.
   - The designated database name within the SAP HANA host.

### Enabling DronaHQ Access to SAP HANA

   - Set up your firewall settings to permit DronaHQ's IP whitelist for access to your SAP HANA host.

Having these essential prerequisites in place will ensure a seamless integration of SAP HANA with DronaHQ, facilitating efficient data management and utilization without the need for AWS credentials.


## Configuring Connector in DronaHQ

Configure your database category using the provided details.Validate connection with `Test connection` and `Save` settings for secure database setup.

:::tip
DronaHQ can Auto fill crucial connection values like host, name, password, and more from the connector's [connection string](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING).

:::

#### General 

| Field                | Description                             |
|----------------------|-----------------------------------------|
| Host                 | Enter the Host Domain or IP             |
| Port                 | Enter the Port number                   |
| Database Name        | Enter the Database name                 |
| Authentication Type | Choose from User and Password or AWS IAM |
| Username             | Enter the Username                      |
| Password             | Enter the Password                      |

<figure>
  <Thumbnail src="/img/reference/connectors/saphana/details.jpeg" alt="SAP HANA with Sample details." />
  <figcaption align = "center"><i>SAP HANA with Sample details.</i></figcaption>
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
  <Thumbnail src="/img/reference/connectors/saphana/data-query.png" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure>

:::tip
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to controls/actions for runtime use.
:::

Saved queries appear under your connector in Connector Library.

## Supported Query Operations

| Operations            | Description                                              |
|-----------------------|----------------------------------------------------------|
| Raw SQL Query         | Perform various SQL operations such as `SELECT`, `INSERT`, `DELETE`, `UPDATE`, and `JOIN` operations. |
| Stored Procedure Call| Execute stored procedures using syntax like `CALL procedureName;`, allowing for organized and efficient database interactions. |

## Using SAP HANA Connector

### Data Bind using Data Query

#### Read/Display Data Query for SAP HANA:

Begin by crafting a SQL query to extract data from your SAP HANA database. For instance, consider the following query that retrieves data from the `auth_permission` table:

Query used:

```sql
SELECT * FROM auth_permission;
```

Query explanation:

This SQL query targets the `auth_permission` table within the SAP HANA database. By utilizing `SELECT *`, you're retrieving all available data. This forms the foundation for displaying valuable information.

<figure>
  <Thumbnail src="/img/reference/connectors/postgresql/get-data.png" alt="Get Data Query" />
  <figcaption align = "center"><i>Get Data Query</i></figcaption>
</figure>


Integrate the fetched data into your application's interface.

   a. Access the Controls section and introduce the Table grid control.
   b. Navigate to `Data Bind Options -> Quick Select -> Database Queries`.
   c. Opt for the SAP HANA connector and choose the query that aligns with your data presentation goals.


