---
sidebar_position: 1
title: AlloyDB
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

AlloyDB is a fully managed, PostgreSQL-compatible database by Google Cloud, optimized for high performance, scalability, and AI integration.

## Configuring Connector

### Prerequisites

1. Authentication Credentials: Obtain the required credentials to connect to your AlloyDB instance. Choose from the
   following options:

   - AlloyDB database username and password.
   - AlloyDB IAM authentication (for Google Cloud-hosted AlloyDB databases).

2. Connection Details:

   - Hostname of the AlloyDB database.
   - Port number for database access.
   - Database name within the AlloyDB host.

3. Firewall Rules:
   - Set up firewall settings to allow DronaHQ (IP whitelist) access to your AlloyDB host.

Ensuring these prerequisites are in place will ensure a seamless integration of AlloyDB with DronaHQ, facilitating
effective data management and utilization.

### Connector Setup in DronaHQ

Configure your database category by providing the details below. Choose between `User and Password` Authentication. Validate the connection using `Test connection` and `Save` settings for a secure and efficient database
setup.


#### General

| Field                | Description                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| Host                 | Enter the Host Domain or IP                                                                        |
| Port                 | Enter the Port number                                                                              |
| Database Name        | Enter the Database name                                                                            |
| Authentication Type  | Choose from User and Password or IAM                           |
| Username             | Enter the Username                                                                                 |
| Password             | Enter the Password                                                                                 |




<figure>
  <Thumbnail src="/img/reference/connectors/alloydb/details.png" alt="AlloyDB with Sample details." />
  <figcaption align = "center"><i>AlloyDB with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option                                                                                                                                  | Description                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Options                                                                                                                               | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| Use Dynamic Database Host                                                                                                                        | Dynamically determine the host for the database connection.                                                                                                                                   |
| Use Dynamic Database Name                                                                                                                        | Set the database name dynamically, allowing easy switching between databases.                                                                                                                 |
| <VersionedLink to = "/datasource-concepts/dynamic-credentials/#configure-dynamic-credentials"> Use Dynamic Database Credentials </VersionedLink> | Enable dynamic database credentials for secure and convenient management.                                                                                                                     |
| <VersionedLink to = "/datasource-concepts/prepared-statements/"> Enable Converting Queries to Prepared Statement </VersionedLink>                | Opt for prepared statements to enhance database performance and security.                                                                                                                     |
| <VersionedLink to = "/datasource-concepts/ssl-configurations/"> Connect using SSL </VersionedLink>                                               | Securely access the database using an encrypted SSL connection, ensuring data integrity and confidentiality.                                                                                  |
| <VersionedLink to = "/datasource-concepts/ssh-tunneling/"> Enable SSH Tunneling </VersionedLink>                                                 | Securely access the database through encrypted SSH tunneling.                                                                                                                                 |
| <VersionedLink to = "/datasource-concepts/whitelisting-dronahq-ip/"> Whitelist IP </VersionedLink>                                               | Enhance security by restricting database access to specific whitelisted IP addresses.                                                                                                         |


## Adding Database Queries

Once the connector is configured, access it in your Connector Library. Click `Add query` after connection setup. Create
queries, run them, and view responses.

<figure>
  <Thumbnail src="/img/reference/connectors/alloydb/data-query.png" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure>

:::tip 
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to
controls/actions for runtime use. 
:::

Saved queries appear under your connector in Connector Library.

<figure>
  <Thumbnail src="/img/reference/connectors/alloydb/queries.png" alt="Added Queries" />
  <figcaption align = "center"><i>Added Queries</i></figcaption>
</figure>

## Supported Query Operations

| Operations            | Description                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Raw SQL Query         | Various `select, insert, delete, update, join` operations which are supported by AlloyDB query. e.g. - `select * from UserInfo;` |
| Stored Procedure Call | You can call store procedure similar to that we call from workbench. e.g. - `CALL getUserInfo;

## Using AlloyDB Connector

### Data Bind using Data Query

#### Read/Display Data Query for AlloyDB:

After configuring the AlloyDB connector, locate it in Connector Library. To retrieve data from the AlloyDB
database, add a query to read the data.

Query used:

```sql
select * from employees
```

Query explanation:

This query selects all details from the `employees` schema's table, allowing you to display the data.

 <figure>
  <Thumbnail src="/img/reference/connectors/alloydb/get-data.png" alt="Get Data Query" />
  <figcaption align = "center"><i>Get Data Query</i></figcaption>
</figure>

Place the Table grid control from the Controls section. Bind data by selecting the AlloyDB connector from
` Data Bind Options -> Quick Select -> Connector Library.` . Choose the relevant query for displaying data and bind the
preferred columns.

<figure>
  <Thumbnail src="/img/reference/connectors/alloydb/display.png" alt="Displaying data" />
  <figcaption align = "center"><i>Displaying data</i></figcaption>
</figure>

### Using in Actionflow blocks

#### Delete Data Query:

For data deletion, create a query to remove details related to selected data.

Query used:

```sql
DELETE FROM employees WHERE id = {{id}};
```

Query explanation:

This query operates a delete action on the `employees` table, targeting the user-selected ID (primary key) for
removal.

After saving your query after successful configuration testing.

1. In the table grid's Actions, choose `delete_click`.

2. Build the action flow:

   - Confirm task for user delete confirmation.
   - Server-side action with the delete data query.
   - Bind the id connector key to capture selected row's id.

3. Access id using Use Keywords for smooth action flow.

<!-- <figure>
  <Thumbnail src="/img/reference/connectors/postgresql/delete.png" alt="Actionflow for deleting data" />
  <figcaption align = "center"><i>Actionflow for deleting data</i></figcaption>
</figure>  -->
