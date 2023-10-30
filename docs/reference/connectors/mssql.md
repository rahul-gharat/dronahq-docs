---
sidebar_position: 1
title: Microsoft SQL
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Microsoft SQL Server, often referred to as MS SQL Server is a relational database management system (RDBMS) developed by Microsoft that allows you to perform different actions like storing and retrieving data to and from the databases.


## Configuring Connector

### Prerequisites

1. Authentication Credentials: Obtain the required credentials to connect to your MS SQL instance. You will need the following credentials:
   - MS SQL database username and password.

2. Connection Details:
   - Hostname or IP address of the MS SQL server.
   - Port number for database access.
   - Database name within the MS SQL server.

3. Firewall Rules:
   - Configure firewall settings to allow DronaHQ (IP whitelist) access to your MS SQL server.

Ensuring these prerequisites are met will ensure a seamless integration of MS SQL with DronaHQ, facilitating effective data management and utilization.

### Connector Setup in DronaHQ

Configure your database category by providing the details below. Validate the connection using `Test connection` and `Save` settings for a secure and efficient database setup.

:::tip

DronaHQ can Auto fill crucial connection values like host, name, password, and more from the AWS IAM credentials using [AWS Import](/datasource-concepts/aws-import).

:::

#### General 

| Field                | Description                             |
|----------------------|-----------------------------------------|
| Host                 | Enter the Host Domain or IP             |
| Port                 | Enter the Port number                   |
| Database Name        | Enter the Database name                 |
| Username             | Enter the Username                      |
| Password             | Enter the Password                      |

<figure>
  <Thumbnail src="/img/reference/connectors/mssql/details.jpeg" alt="MS SQL with Sample details." />
  <figcaption align = "center"><i>MS SQL with Sample details.</i></figcaption>
</figure>

#### Admin

#### Microsoft SQL – TDS Version

When configuring the Microsoft SQL connector in DronaHQ Studio, users can choose the Tabular Data Stream (TDS) protocol version. TDS facilitates communication between clients and database servers. DronaHQ DronaHQ provides multiple TDS versions for compatibility, allowing users to select as needed.

#### SQL Server Proxy Host

In DronaHQ Studio's Microsoft SQL connector setup, the SQL server proxy host can be specified. This feature establishes a secure gateway between the client and the target SQL server, enabling access to external SQL resources using distinct credentials. It offers controlled execution of Windows shell commands and SQL Server Agent jobs to enhance security and operational control.

| Advanced Option   | Description    |
|----------------------|---------------------|
| Connection Options | The `key` and `value` connection options in the database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| TDS Version | Choose the Tabular Data Stream (TDS) protocol version for communication with the MS SQL server. |
| SQL Server Proxy Host | Specify the proxy host to route the MS SQL connection through a proxy server, if necessary. |
| Use Dynamic Database Host                | Dynamically determine the host for the database connection.                               |
| Use Dynamic Database Name                | Set the database name dynamically, allowing easy switching between databases.              |
| <VersionedLink to = "../../datasource-concepts/dynamic-credentials"> Use Dynamic Database Credentials        </VersionedLink> | Enable dynamic database credentials for secure and convenient management.                  |
| <VersionedLink to = "../../datasource-concepts/prepared-statements"> Enable Converting Queries to Prepared Statement </VersionedLink>| Opt for prepared statements to enhance database performance and security.          |
| <VersionedLink to = "../../datasource-concepts/ssl-configurations"> Connect using SSL  </VersionedLink> | Securely access the database using an encrypted SSL connection, ensuring data integrity and confidentiality. |
| <VersionedLink to = "../../datasource-concepts/ssh-tunneling"> Enable SSH Tunneling          </VersionedLink>           | Securely access the database through encrypted SSH tunneling.                              |
| <VersionedLink to = "../../datasource-concepts/whitelisting-dronahq-ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |


## Adding Database Queries

After configuring the connector, access it in your Connector Library.

Click `Add query` once the connection is established. Create queries, run them, and view responses.

<figure>
  <Thumbnail src="/img/reference/connectors/mssql/query.jpeg" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure>

:::tip
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to controls/actions for runtime use.
:::

Saved queries appear under your connector in Connector Library.

## Supported Query Operations

| Operations           | Description                                     |
|----------------------|-------------------------------------------------|
| Raw SQL Query        | Execute various SQL operations directly, e.g., `SELECT * FROM TableName;` |
| Stored Procedure Call| Call stored procedures, e.g., `EXEC usp_GetInfo;` to perform specific tasks or retrieve data from the database. |

## Using Microsoft SQL Connector

### Data Bind using Data Query

#### Read/Display Data Query for Microsoft SQL:

Start by constructing an SQL query to retrieve data from your Microsoft SQL database. For instance, let's consider an example where you want to retrieve all data from the `auth_permission` table. The SQL query is:

Query used:

```sql
SELECT * FROM auth_permission;
```
Query explanation:

This SQL query retrieves all rows and columns from the `auth_permission` table.

<figure>
  <Thumbnail src="/img/reference/connectors/mssql/getall.jpeg" alt="Get all data query with added pagination." />
  <figcaption align = "center"><i>Get all data query with added pagination.</i></figcaption>
</figure>

Integrate the fetched data into your application's interface.

 a. Access the Controls section and introduce the Table grid control.

 b. Navigate to `Data Bind Options -> Quick Select -> Database Queries`.

 c. Opt for the Microsoft SQL connector and choose the query that aligns with your data presentation goals.
