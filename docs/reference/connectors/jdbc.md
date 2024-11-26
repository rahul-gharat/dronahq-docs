---
sidebar_position: 1
title: JDBC
---

import Image from '@site/src/components/Image'; 
import VersionedLink from '@site/src/components/VersionedLink'; 
import Thumbnail from '@site/src/components/Thumbnail';


JDBC (Java Database Connectivity) allows you to connect a variety of databases to DronaHQ through a standardized API. This guide will help you configure the JDBC connector, set up your connection string, and manage connection settings effectively.

## Prerequisite

1. Authentication Credentials: Ensure you have the necessary credentials (username/password) or access via Secrets Manager Enterprise.
2. Connection Details: 
   - JDBC Driver (e.g., `com.facebook.presto.jdbc.PrestoDriver`).
   - Connection String (format: `jdbc:db://host:port`).



## Configuring Connector in DronaHQ

Configure your database category by providing below details. Validate the connection with `Test connection` and `Save` settings for secure and efficient database
setup.

:::tip 
DronaHQ can Auto fill crucial connection values like host, name, password, and more from a AWS IAM
credentials using [AWS Import](/datasource-concepts/aws-import). Additionally, with [Secrets Manager Enterprise](/datasource-concepts/secrets_manager/), users can select a vault, and for KV-type vaults, fields are auto-populated with key values.
:::


#### General 

| Field             | Description                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| JDBC Driver           | Select the JDBC driver from the dropdown  - `com.facebook.presto.jdbc.PrestoDriver`, `com.ibm.db2.jcc.DB2Driver`, `com.ingres.jdbc.IngresDriver`, `io.trino.jdbc.TrinoDriver`, `com.teradata.jdbc.TeraDriver`           |
| Connection String     | Enter the JDBC connection string in the format `jdbc:db://host:port`.                                 |


<figure>
  <Thumbnail src="/img/reference/connectors/jdbc/details.jpeg" alt="JDBC with Sample details." />
  <figcaption align = "center"><i>JDBC with Sample details.</i></figcaption>
</figure>

#### Admin 

| Advanced Option       | Description                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Connection Options                                                                                                                               | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "/datasource-concepts/whitelisting-dronahq-ip/"> Whitelist IP </VersionedLink>                                               | Enhance security by restricting database access to specific whitelisted IP addresses.                                                                                                         |

## Adding Database Queries

After configuring the connector, access it in your Connector Library. To add queries, click `Add query` once the
connection is ready. Create simple or complex queries, view tables and fields. Input Query name, run the query, and see
results in Response.



:::tip 
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to controls/actions and more for runtime use. 
:::


### Selecting Data 

let's see to fetch data using SQL queries 

Use the SQL editor to write your query. For example, if you want to fetch all students from a table, use:  

```sql  
     SELECT * FROM student;  
```  

   - Name your query (e.g., `GetStudents`) to make it easier to identify later.  
   - Run the query by clicking Test Query. The results will appear in the Response tab, showing you what data is returned.  
  
  <figure>
  <Thumbnail src="/img/reference/connectors/jdbc/select.jpeg" alt="Performing Query" />
  <figcaption align = "center"><i>Performing Query</i></figcaption>
</figure>


#### Use Dynamic Filters  
   - To make your query dynamic, use variables in your SQL. For example, if you want to fetch data for a specific student ID, your query can look like this:  
     ```sql  
     SELECT * FROM student WHERE STUDENT_ID = {{studentId}};  
     ```  
   - Here, `{{studentId}}` is a dynamic variable that will be replaced with an actual value at runtime.  
