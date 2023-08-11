---
sidebar_position: 1
title: MySQL
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';



MySQL is a powerful open-source relational database management system known for its speed, reliability, and flexibility, making it a popular choice for various applications and data-driven projects. 

## Configuring Connector

### Prerequisites

1. Authentication Credentials: Obtain the required credentials to connect to your MySQL instance. Choose from the following options:
   - MySQL database username and password.
   - AWS IAM authentication (for AWS-hosted MySQL databases).

2. Connection Details:
   - Hostname of the MySQL database.
   - Port number for database access.
   - Database name within the MySQL host.

3. Firewall Rules:
   - Set up firewall settings to allow DronaHQ (IP whitelist) access to your MySQL host.

Ensuring these prerequisites are in place will ensure a seamless integration of MySQL with DronaHQ, facilitating effective data management and utilization.

### Connector Setup in DronaHQ

Configure your database category by providing the details below. Choose between `User and Password` or `AWS IAM` Authentication. Validate the connection using `Test connection` and `Save` settings for a secure and efficient database setup.

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
| Role to assume (ARN) | Enter the role to be used while accessing API. Example - `arn:aws:iam::123456789012:role/RoleName`

 |

<figure>
  <Thumbnail src="/img/reference/connectors/mysql/details.png" alt="MySQL with Sample details." />
  <figcaption align = "center"><i>MySQL with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in MySQL configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| Use Dynamic Database Host                | Dynamically determine the host for the database connection.                               |
| Use Dynamic Database Name                | Set the database name dynamically, allowing easy switching between databases.              |
| <VersionedLink to = "../../datasource-concepts/dynamic_credentials"> Use Dynamic Database Credentials        </VersionedLink> | Enable dynamic database credentials for secure and convenient management.                  |
| <VersionedLink to = "../../datasource-concepts/prepared_statements"> Enable Converting Queries to Prepared Statement </VersionedLink>| Opt for prepared statements to enhance database performance and security.          |
| <VersionedLink to = "../../datasource-concepts/ssl_configurations"> Connect using SSL  </VersionedLink> | Securely access the database using an encrypted SSL connection, ensuring data integrity and confidentiality. |
| <VersionedLink to = "../../datasource-concepts/ssh_tunneling"> Enable SSH Tunneling          </VersionedLink>           | Securely access the database through encrypted SSH tunneling.                              |
| <VersionedLink to = "../../datasource-concepts/whitelisting_dronahq_ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |



## Adding Database Queries

Once the connector is configured, access it in your Connector Library. Click `Add query` after connection setup. Create queries, run them, and view responses.

<figure>
  <Thumbnail src="/img/reference/connectors/mysql/data-query.jpeg" alt="Write Queries" />
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

