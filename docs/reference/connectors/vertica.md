---
sidebar_position: 1
title: Vertica
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


Vertica gives a top-tier, unified analytics platform that will always be free of the hidden framework. Connecting DronaHQ to Vertica lets you construct UIs rapidly on top of your Vertica information. For instance, you could fabricate an instrument to adjust metadata tables. You can peruse information from Vertica and afterward compose information back to it either straightforwardly, or through a different API.


## Prerequisite

1. Authentication Requirements: To establish a connection with your Vertica instance, you will require specific authentication credentials. You have the choice of either of the following two credential options:
   - Vertica database username and password.
   - Alternative authentication methods (excluding AWS IAM authentication).

2. Connection Details:
   - Hostname of the Vertica database.
   - Port number for database communication.
   - The designated database name within the Vertica host.

3. Firewall Rules:
   - Set up your firewall settings to permit DronaHQ's IP whitelist for access to your Vertica host.


## Configuring Connector in DronaHQ

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
  <Thumbnail src="/img/reference/connectors/vertica/details.png" alt="Vertica with Sample details." />
  <figcaption align = "center"><i>Vertica with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| Use Dynamic Database Host                | Dynamically determine the host for the database connection.                               |
| Use Dynamic Database Name                | Set the database name dynamically, allowing easy switching between databases.              |
| <VersionedLink to = "../../datasource-concepts/dynamic_credentials"> Use Dynamic Database Credentials        </VersionedLink> | Enable dynamic database credentials for secure and convenient management.                  |
| <VersionedLink to = "../../datasource-concepts/whitelisting_dronahq_ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |

## Adding Database Queries

After configuring the connector, access it in your Connector Library.

Click `Add query` once the connection is established. Create queries, run them, and view responses.

<figure>
  <Thumbnail src="/img/reference/connectors/vertica/query.png" alt="Write Queries" />
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


## Using Vertica Connector

### Data Bind using Data Query

#### Read/Display Data Query for Vertica:

Begin by constructing an SQL query to extract data from your Vertica database. For example, let's consider a scenario where you want to retrieve all data from the `Persons` table. The SQL query is:

Query used:

```sql
SELECT * FROM Persons;
```

Query explanation:

This SQL query retrieves all rows and columns from the `Persons` table within the Vertica database.

<figure>
  <Thumbnail src="/img/reference/connectors/vertica/queryexample.png" alt="Query example for retrieving data from Vertica database." />
  <figcaption align = "center"><i>Query example for retrieving data from Vertica database.</i></figcaption>
</figure>

Integrate the fetched data into your application's interface.

 a. Access the Controls section and introduce the Table grid control.

 b. Navigate to `Data Bind Options -> Quick Select -> Database Queries`.

 c. Opt for the Vertica connector and choose the query that aligns with your data presentation goals.
