---
sidebar_position: 1
title: PostgreSQL
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';
 

PostgreSQL stands as an open-source object-relational database system, providing a secure environment for storing and efficiently managing diverse data workloads. 


## Pre-requisite



1. Authentication Credentials to connect to your postgres instance. You will need either of the below two credentials option:
   - PostgreSQL database username and password.
   - AWS IAM authentication (for AWS-hosted PostgreSQL databases).


2. Connection Details:
   - Hostname of the PostgreSQL database.
   - Port number for database access.
   - Database name within the PostgreSQL host.

3. Firewall Rules:
   - Configure firewall settings to allow DronaHQ (IP whitelist) access to your PostgreSQL host.

Ensuring you have these prerequisites ready will facilitate a smooth integration of PostgreSQL with DronaHQ, enabling effective data management and utilization.



## Configuring Connector in DronaHQ

Configure your database category by providing below details. Choose between `User and Password` or `AWS IAM` Authentication. Validate the connection with `Test connection` and `Save` settings for secure and efficient database setup.

:::tip
DronaHQ can Auto fill crucial connection values like host, name, password, and more from the connector's [connection string](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING) or from a AWS IAM credentials using [AWS Import](/datasource-concepts/aws_import).
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
| AWS Access Key             | Enter the AWS Access Key  of your database.      |
| AWS Secret Key | Enter the AWS Secret Key of your database.                      |
| AWS Region | Enter the AWS Region of your database.                   |
| Role to assume (ARN) | Enter the role to be used while accessing API. Example - `arn:aws:iam::123456789012:role/RoleName`|

<figure>
  <Thumbnail src="/img/reference/connectors/postgresql/details.png" alt="PostgreSQL with Sample details." />
  <figcaption align = "center"><i>PostgreSQL with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| Use Dynamic Database Host                | Dynamically determine the host for the database connection.                               |
| Use Dynamic Database Name                | Set the database name dynamically, allowing easy switching between databases.              |
| <VersionedLink to = "../../datasource-concepts/dynamic_credentials"> Use Dynamic Database Credentials        </VersionedLink> | Enable dynamic database credentials for secure and convenient management.                  |
| <VersionedLink to = "../../datasource-concepts/prepared_statements"> Enable Converting Queries to Prepared Statement </VersionedLink>| Opt for prepared statements to enhance database performance and security.          |
| <VersionedLink to = "../../datasource-concepts/ssl_configurations"> Connect using SSL  </VersionedLink> | Securely access the database using an encrypted SSL connection, ensuring data integrity and confidentiality. |
| <VersionedLink to = "../../datasource-concepts/ssh_tunneling"> Enable SSH Tunneling          </VersionedLink>           | Securely access the database through encrypted SSH tunneling.                              |
| <VersionedLink to = "../../datasource-concepts/whitelisting_dronahq_ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |


## Adding Database Queries
After configuring the connector, access it in your Connector Library. 
To add queries, click `Add query` once the connection is ready. Create simple or complex queries, view tables and fields. Input Query name, run the query, and see results in Response.

<figure>
  <Thumbnail src="/img/reference/connectors/postgresql/data-query.jpeg" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure>

:::tip
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to controls/actions and more for runtime use. 
:::

Saved queries appear under your connector in Connector Library.

<figure>
  <Thumbnail src="/img/reference/connectors/postgresql/queries.jpeg" alt="Added Queries" />
  <figcaption align = "center"><i>Added Queries</i></figcaption>
</figure>

## Supported Query Operations

| Operations   | Description    |
|--------------------|---------------------|
| Raw SQL Query | Various `select, insert, delete, update, join` operations which are supported by PostgresSQL query. e.g. - `select * from UserInfo;` |
| Stored Procedure Call | You can call store procedure similar to that we call from workbench. e.g. - `CALL getUserInfo;` |

:::caution UNSUPPORTED

Add any specific operations which are unsupported. Remove this for Postgresql.

:::

## Using PostgreSQL Connector

### Data Bind using Data Query

#### Read/Display Data Query: 

After configuring the PostgreSQL connector, locate it in Connector Library. To retrieve data from the PostgreSQL database, add a query to read the data.

Query used:

```sql
select * from industry_role
```

Query explanation:

This query selects all details from the `industry_role` schema's table, allowing you to display the data.

<figure>
  <Thumbnail src="/img/reference/connectors/postgresql/get-data.png" alt="Get Data Query" />
  <figcaption align = "center"><i>Get Data Query</i></figcaption>
</figure>


Place the Table grid control from the Controls section. Bind data by selecting the PostgreSQL connector from ` Data Bind Options -> Quick Select -> Database Queries` . Choose the relevant query for displaying data and bind the preferred columns.

<figure>
  <Thumbnail src="/img/reference/connectors/postgresql/display.png" alt="Displaying data" />
  <figcaption align = "center"><i>Displaying data</i></figcaption>
</figure>


### Using in Actionflow blocks

#### Delete Data Query: ### 

For data deletion, create a query to remove details related to selected data.

Query used:

```sql
DELETE from industry_role WHERE id = {{id}};
```

Query explanation:

This query operates a delete action on the `industry_role` table, targeting the user-selected ID (primary key) for removal.


After saving your query after successful configuration testing.

1. In the table grid's Actions, choose `delete_click`.

2. Build the action flow:
   - Confirm task for user delete confirmation.
   - Server-side action with the delete data query.
   - Bind the id connector key to capture selected row's id.

3. Access id using Use Keywords for smooth action flow.


<figure>
  <Thumbnail src="/img/reference/connectors/postgresql/delete.png" alt="Actionflow for deleting data" />
  <figcaption align = "center"><i>Actionflow for deleting data</i></figcaption>
</figure>