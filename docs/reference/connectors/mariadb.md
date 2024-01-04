---
sidebar_position: 1
title: MariaDB
---

import Image from '@site/src/components/Image';
import Thumbnail from '@site/src/components/Thumbnail'; 
import VersionedLink from '@site/src/components/VersionedLink';



MariaDB is open-source software. It is a form of relational database and it provides an SQL interface for accessing data. MariaDB is a relational database management system. It stores data in various tables. It is a drop-in replacement for MySQL.

## Prerequisite

1. Authentication Credentials: Obtain the necessary authentication credentials for connecting to your MariaDB instance. You have two options for credentials:
   - MariaDB database username and password.
   - AWS IAM authentication (applicable for AWS-hosted MariaDB databases).

2. Connection Details:
   - Provide the hostname of your MariaDB database.
   - Specify the port number for accessing the database.

3. Database Name:
   - Identify the name of the database within your MariaDB host.

4. Firewall Rules:
   - Configure your firewall settings to permit access from DronaHQ's IP whitelist to your MariaDB host.

## Configuring Connector in DronaHQ

Configure your database category by providing below details. Choose between `User and Password` or `AWS IAM` Authentication. Validate the connection with `Test connection` and `Save` settings for secure and efficient database setup.

:::tip
DronaHQ can Auto fill crucial connection values like host, name, password, and more from the connector's [connection string](https://mariadb.com/kb/en/connecting-to-mariadb/) or from a AWS IAM credentials using [AWS Import](/datasource-concepts/aws-import).
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
  <Thumbnail src="/img/reference/connectors/mariadb/details.png" alt="MariaDB with Sample details." />
  <figcaption align = "center"><i>MariaDB with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "../../datasource-concepts/ssl-configurations"> Connect using SSL  </VersionedLink> | Securely access the database using an encrypted SSL connection, ensuring data integrity and confidentiality. |
| <VersionedLink to = "../../datasource-concepts/ssh-tunneling"> Enable SSH Tunneling          </VersionedLink>           | Securely access the database through encrypted SSH tunneling.                              |
| <VersionedLink to = "../../datasource-concepts/whitelisting-dronahq-ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |


## Adding Database Queries
After configuring the connector, access it in your Connector Library. 
To add queries, click `Add query` once the connection is ready. Create simple or complex queries, view tables and fields. Input Query name, run the query, and see results in Response.

<figure>
  <Thumbnail src="/img/reference/connectors/mariadb/data-query.png" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure>

:::tip
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to controls/actions and more for runtime use. 
:::

Saved queries appear under your connector in Connector Library.


## Using MariaDB Connector

### Data Bind using Data Query

#### Read/Display Data Query for MariaDB:

Start by crafting an SQL query to extract data from your MariaDB database. Consider a scenario where you want to retrieve all data from the `databaseproducts` table. The SQL query is:

Query used:

```sql
SELECT * FROM databaseproducts;
```

Query explanation:

This SQL query retrieves all rows and columns from the `databaseproducts` table within the MariaDB database.

<figure>
  <Thumbnail src="/img/reference/connectors/mariadb/queryexample.png" alt="Query example for retrieving data from MariaDB database." />
  <figcaption align = "center"><i>Query example for retrieving data from MariaDB database.</i></figcaption>
</figure>

Integrate the fetched data into your application's interface.

 a. Access the Controls section and introduce the Table grid control.

 b. Navigate to `Data Bind Options -> Quick Select -> Database Queries`.

 c. Opt for the MariaDB connector and choose the query that aligns with your data presentation goals.

By following these steps, you can seamlessly retrieve and display data from the `databaseproducts` table using the MariaDB Connector, enhancing your application's functionality and user experience.

