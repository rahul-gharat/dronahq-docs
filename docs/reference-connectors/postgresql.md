---
sidebar_position: 1
title: PostgreSQL
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


PostgreSQL stands as an open-source object-relational database system, providing a secure environment for storing and efficiently managing diverse data workloads. 

## Configuring Connector

### Pre-requisite

1. Authentication Credentials to connect to your postgres instance. You will need either of the below two credentials option:
   - PostgreSQL database username and password.
   - AWS IAM authentication (for AWS-hosted PostgreSQL databases).

2. Connection Details:
   - Hostname of the PostgreSQL database.
   - Port number for database access.
   - Database name within the PostgreSQL host.

3. Firewall Rules:
   - Configure firewall settings to allow DronaHQ (ip whitelist) access to your PostgreSQL host.

Ensuring you have these prerequisites ready will facilitate a smooth integration of PostgreSQL with DronaHQ, enabling effective data management and utilization.



### Configuring Connector in DronaHQ

Configure your database category by providing below details. Choose between `User and Password` or `AWS IAM` Authentication. Validate the connection with `Test connection` and `Save` settings for secure and efficient database setup.

#### General 

| Field                | Description                             |
|----------------------|-----------------------------------------|
| Host                 | Enter the Host Domain or IP             |
| Port                 | Enter the Port number                   |
| Database Name        | Enter the Database name                 |
| Authentication Type | Choose from User and Password or AWS IAM |
| Username             | Enter the Username                      |
| Password             | Enter the Password                      |
| AWS Access Key             | Enter the Password        |
| AWS Secret Key | Enter the Password                      |
| AWS Region | Enter the Password                      |
| Role to assume (ARN) | Enter the role to be used while accessing API. Example - arn:aws:iam::123456789012:role/RoleName

 |

<figure>
  <Thumbnail src="/img/reference/connectors/postgresql/details.png" alt="PostgreSQL with Sample details." />
  <figcaption align = "center"><i>PostgreSQL with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in PostgreSQL configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| Use Dynamic Database Host                | Dynamically determine the host for the database connection.                               |
| Use Dynamic Database Name                | Set the database name dynamically, allowing easy switching between databases.              |
| Use Dynamic Database Credentials         | Enable dynamic database credentials for secure and convenient management.                  |
| Enable Converting Queries to Prepared Statement | Opt for prepared statements to enhance database performance and security.          |
| Enable SSH Tunneling                     | Securely access the database through encrypted SSH tunneling.                              |
| Whitelist IP                             | Enhance security by restricting database access to specific whitelisted IP addresses.     |


:::tip
**Effortless Configuration with Connection Strings:**
Simplify your DronaHQ app's interaction with PostgreSQL databases using connection strings. A single structured line of configuration auto-fills all essential details, ensuring secure and error-free connectivity.

**Seamless PostgreSQL Setup with AWS Autofill:**
Connecting your PostgreSQL database to DronaHQ becomes a breeze with AWS. Just input your AWS region and database choice (like Amazon RDS), and DronaHQ automatically retrieves all connection details and credentials. Enjoy a seamless setup process and efficient database connectivity.

:::



## Adding Database Queries
After configuring the connector, access it in your Connector Library. 
To add queries, click `Add query` once the connection is ready. Create simple or complex queries, view tables and fields. Input Query name, run the query, and see results in Response.

<figure>
  <Thumbnail src="/img/reference/connectors/postgresql/data-query.jpeg" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure>

:::tip
Use double curly brackets for dynamic variables. Test with sample values before saving. Link variables to controls for runtime use. 
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


## Using PostgreSQL Connector

### Data Bind using Data Query

#### Read/Display Data Query: ### 

After configuring the PostgreSQL connector, locate it in Connector Library. To retrieve data from the PostgreSQL database, add a query to read the data.

**Query used:**

```sql
select * from industry_role
```

**Query explanation:**

This query selects all details from the 'industry_role' schema's table, allowing you to display the data.

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

**Query used:**

```sql
DELETE from industry_role WHERE id = {{id}};
```

**Query explanation:**

This query operates a delete action on the 'industry_role' table, targeting the user-selected ID (primary key) for removal.


After saving your query after successful configuration testing.

1. In the table grid's Actions, choose delete_click.

2. Build the action flow:
   - Confirm task for user delete confirmation.
   - Server-side action with the delete data query.
   - Bind the id connector key to capture selected row's id.

3. Access id using Use Keywords for smooth action flow.



#### Update Data Query: 

To update existing data, craft a query that selects details based on the ID and updates values.

**Query used:**

```sql
UPDATE industry_role
SET position = '{{pos}}', location = '{{loc}}' where id = {{id}}
```

**Query explanation:**

This query identifies a specific row using the ID, then updates 'position' and 'location' based on values from 'pos' and 'loc' variables respectively.

Save the query after successful testing, ensuring a configuration test successful message.

1. Create a Tray with text fields to receive user data. On button click, update selected Id's details.

2. Bind data of the chosen id from the table grid to input text fields:
   a. Go to the Bind section.
   b. Select Controls.
   c. Choose the screen where data is located.
   d. Select the tablegrid component.
   e. Pick the required field name for data binding.

3. In the button's Actions, choose `button_click` action.
   a. Add a Server-side action.
   b. Select the query for data update.
   c. Bind the necessary key connectors.

4. Ensure proper key connectors binding for accurate data handling.

5. Include an action to navigate to the Tray:
   a. Add action to table grid's edit button.
   b. Choose `Actions -> update_click`.
   c. Add a task to Navigate to the Tray.

<figure>
  <Thumbnail src="/img/reference/connectors/postgresql/update.png" alt="Updating data" />
  <figcaption align = "center"><i>Updating data</i></figcaption>
</figure>

#### Insert Data Query:

For data insertion, create a query that accepts user inputs and saves them.

**Query used:**

```sql
INSERT into industry_role (position, location)
VALUES ('{{pos}}', '{{loc}}')
```

**Query explanation:**

This query inserts values into the 'industry_role' table for 'position' and 'location' columns as provided by 'pos' and 'loc' variables.
