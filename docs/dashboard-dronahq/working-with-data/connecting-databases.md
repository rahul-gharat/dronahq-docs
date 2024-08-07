---
sidebar_position: 2
title: Connecting Databases
---

import VersionedLink from '@site/src/components/VersionedLink'; 
import Basics from '@site/static/icons/features/basics.svg'; 
import ArrowRight from '@site/static/icons/arrow_right.svg'; 
import Image from '@site/src/components/Image'; 
import Thumbnail from '@site/src/components/Thumbnail';


The DronaHQ Dashboard offers support for a wide range of databases. If you have the SQLAlchemy URI connection string for a database, you can easily connect it to the DronaHQ Dashboard. Additionally, if you possess an archived database file (e.g., ZIP), you can directly import it to the dashboard.

Some databases might require additional configuration details for connection. For instance, Google Sheets requires authentication via JSON, while Trino necessitates warehouse parameters.

This document provides detailed instructions on how to connect various types of databases to the DronaHQ Dashboard.


## Database Connection Walkthrough

To connect a database, start by selecting `+ Database` on the DronaHQ Dashboard. Then, in the Connect a Database window, choose the database you want to connect to from the Supported Databases field.

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/connect-database/databaselist.jpeg" alt="List of DB" />
</figure>


### Apache Druid

| Field         | Description                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Display Name | Apache Druid. Pick a name to help you identify this database.                                        |
| SQLAlchemy URI | `engine+driver://user:password@host:port/dbname[?key=value&key=value...]` Refer to the [SQLAlchemy docs](https://docs.sqlalchemy.org/en/13/core/engines.html) for more information on structuring your URI. |

### Apache Hive

| Field         | Description                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Display Name | Apache Hive. Pick a name to help you identify this database.                                         |
| SQLAlchemy URI | `engine+driver://user:password@host:port/dbname[?key=value&key=value...]` Refer to the [SQLAlchemy docs](https://docs.sqlalchemy.org/en/13/core/engines.html) for more information on structuring your URI. |

### Apache Spark SQL

| Field         | Description                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Display Name | Apache Spark SQL. Pick a name to help you identify this database.                                    |
| SQLAlchemy URI | `engine+driver://user:password@host:port/dbname[?key=value&key=value...]` Refer to the [SQLAlchemy docs](https://docs.sqlalchemy.org/en/13/core/engines.html) for more information on structuring your URI. |

### Aurora MySQL (Data API)

| Field         | Description                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Display Name | Aurora MySQL (Data API). Pick a name to help you identify this database.                             |
| SQLAlchemy URI | `mysql+auroradataapi://{aws_access_id}:{aws_secret_access_key}@/{database_name}?aurora_cluster_arn={aurora_cluster_arn}&secret_arn={secret_arn}&region_name={region_name}` Refer to the [SQLAlchemy docs](https://docs.sqlalchemy.org/en/13/core/engines.html) for more information on structuring your URI. |

#### Using Dynamic Form

| Field               | Description             |
|---------------------|-------------------------|
| Host                | The hostname or IP address of the database server.               |
| Port                | The port number on which the database server is listening.                    |
| Database name       | The name of the database you are trying to connect to.       |
| Username            | The username for authenticating with the database.                   |
| Password            | The password for authenticating with the database.                   |
| Display Name        | Pick a nickname for how the database will display in dashboard. |
| Additional Parameters | Any additional custom parameters required for the connection. |
| SSL                 |  Toggle for SSL configuration.                     |
| SSH Tunnel          |  Toggle for SSH tunnel configuration.                       |

### Aurora PostgreSQL (Data API)

| Field         | Description                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Display Name | Aurora PostgreSQL (Data API). Pick a name to help you identify this database.                        |
| SQLAlchemy URI | `postgresql+auroradataapi://{aws_access_id}:{aws_secret_access_key}@/{database_name}?aurora_cluster_arn={aurora_cluster_arn}&secret_arn={secret_arn}&region_name={region_name}` Refer to the [SQLAlchemy docs](https://docs.sqlalchemy.org/en/13/core/engines.html) for more information on structuring your URI. |

#### Using Dynamic Form

| Field               | Description             |
|---------------------|-------------------------|
| Host                | The hostname or IP address of the database server.               |
| Port                | The port number on which the database server is listening.                    |
| Database name       | The name of the database you are trying to connect to.       |
| Username            | The username for authenticating with the database.                   |
| Password            | The password for authenticating with the database.                   |
| Display Name        | Pick a nickname for how the database will display in dashboard. |
| Additional Parameters | Any additional custom parameters required for the connection. |
| SSL                 |  Toggle for SSL configuration.                     |
| SSH Tunnel          |  Toggle for SSH tunnel configuration.                       |

### Google Sheets

| Field                  | Description                                                                                      |
|------------------------|--------------------------------------------------------------------------------------------------|
| Display Name           | Google Sheets. Pick a nickname for how the database will display in Superset.                    |
| Type of Google Sheets allowed | Connect Google Sheets as tables to this database                                         |
| Google Sheet Name and URL | Enter a name for this sheet. Paste the shareable Google Sheet URL here.                    |

### MySQL

| Field         | Description                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Display Name | MySQL. Pick a name to help you identify this database.                                               |
| SQLAlchemy URI | `dialect+driver://username:password@host:port/database` Refer to the [SQLAlchemy docs](https://docs.sqlalchemy.org/en/13/core/engines.html) for more information on structuring your URI. |

#### Using Dynamic Form

| Field               | Description             |
|---------------------|-------------------------|
| Host                | The hostname or IP address of the database server.               |
| Port                | The port number on which the database server is listening.                    |
| Database name       | The name of the database you are trying to connect to.       |
| Username            | The username for authenticating with the database.                   |
| Password            | The password for authenticating with the database.                   |
| Display Name        | Pick a nickname for how the database will display in dashboard.                   |
| Additional Parameters | Any additional custom parameters required for the connection. |
| SSL                 |  Toggle for SSL configuration.                     |
| SSH Tunnel          |  Toggle for SSH tunnel configuration.                       |

### PostgreSQL

| Field         | Description                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Display Name | PostgreSQL. Pick a name to help you identify this database.                                          |
| SQLAlchemy URI | `dialect+driver://username:password@host:port/database` Refer to the [SQLAlchemy docs](https://docs.sqlalchemy.org/en/13/core/engines.html) for more information on structuring your URI. |

#### Using Dynamic Form

| Field               | Description             |
|---------------------|-------------------------|
| Host                | The hostname or IP address of the database server.               |
| Port                | The port number on which the database server is listening.                    |
| Database name       | The name of the database you are trying to connect to.       |
| Username            | The username for authenticating with the database.                   |
| Password            | The password for authenticating with the database.                   |
| Display Name        | Pick a nickname for how the database will display in dashboard.              |
| Additional Parameters | Any additional custom parameters required for the connection. |
| SSL                 |  Toggle for SSL configuration.                     |
| SSH Tunnel          |  Toggle for SSH tunnel configuration.                       |

### Presto

| Field         | Description                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Display Name | Presto. Pick a name to help you identify this database.                                              |
| SQLAlchemy URI | `engine+driver://user:password@host:port/dbname[?key=value&key=value...]` Refer to the [SQLAlchemy docs](https://docs.sqlalchemy.org/en/13/core/engines.html) for more information on structuring your URI. |

### Shillelagh

| Field         | Description                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Display Name | Shillelagh. Pick a name to help you identify this database.                                          |
| SQLAlchemy URI | `shillelagh://` Refer to the [SQLAlchemy docs](https://docs.sqlalchemy.org/en/13/core/engines.html) for more information on structuring your URI. |

### SQLite

| Field         | Description                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Display Name | SQLite. Pick a name to help you identify this database.                                              |
| SQLAlchemy URI | `engine+driver://user:password@host:port/dbname[?key=value&key=value...]` Refer to the [SQLAlchemy docs](https://docs.sqlalchemy.org/en/13/core/engines.html) for more information on structuring your URI. |

### Trino

| Field         | Description                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Display Name | Trino. Pick a name to help you identify this database.                                               |
| SQLAlchemy URI | `engine+driver://user:password@host:port/dbname[?key=value&key=value...]` Refer to the [SQLAlchemy docs](https://docs.sqlalchemy.org/en/13/core/engines.html) for more information on structuring your URI. |


## Advanced Configuration 

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/connect-database/dbadv.jpeg" alt="List of DB" />
</figure>


### SQL Labs

SQL Labs allows you to adjust how the database interacts with SQL Lab, providing fine control over SQL operations and user interactions:

- Expose Database in SQL Lab: Enable or disable the database's visibility in SQL Lab.
- Allow CREATE TABLE AS: Permit the creation of new tables using the CREATE TABLE AS statement.
- Allow CREATE VIEW AS: Permit the creation of new views using the CREATE VIEW AS statement.
- Allow DML: Enable Data Manipulation Language (DML) operations like INSERT, UPDATE, DELETE.
- Enable Query Cost Estimation: Allow estimation of query costs before execution.
- Allow This Database to be Explored: Permit users to explore the database.
- Disable SQL Lab Data Preview Queries: Prevent data preview queries in SQL Lab to improve performance.
- Enable Row Expansion in Schemas: Allow expansion of rows in schemas for detailed views.

### Performance

Performance settings ensure optimal database interaction and response times:

- Chart Cache Timeout: Define the caching timeout duration for charts in seconds. A timeout of 0 indicates the cache never expires, while -1 bypasses the cache entirely. If undefined, it defaults to the global timeout.
- Schema Cache Timeout: Set the metadata caching timeout for schemas in seconds. Leaving it unset means the cache never expires.
- Table Cache Timeout: Define the metadata caching timeout for tables in seconds. If unset, the cache never expires.
- Asynchronous Query Execution: Enable asynchronous execution of queries to enhance performance.
- Cancel Query on Window Unload Event: Automatically cancel queries when the browser window is closed.

### Security

Security settings add extra layers of connection information and control:

- Secure Extra: Provide additional connection configuration as a JSON string. This is particularly useful for systems like Hive, Presto, and BigQuery, which do not conform to the standard username:password syntax.
- Root Certificate: Enter CA_BUNDLE contents to validate HTTPS requests. This option is available for certain database engines.
- Impersonate Logged-In User: Allow impersonation of the logged-in user for specific databases like Presto, Trino, Drill, Hive, and Google Sheets.
- Allow File Uploads to Database: Enable the ability to upload files directly to the database.

### Other

Additional settings provide further customization options:

- Metadata Parameters: Configure the `metadata_params` object, which gets unpacked into the `sqlalchemy.MetaData` call.
- Engine Parameters: Set the `engine_params` object, which is unpacked into the `sqlalchemy.create_engine` call.
- Version: Specify the database version number. This is important for databases like Presto for query cost estimation and Dremio for syntax changes.


## Import & Export a Databse


### Import a Database

If you have an archived database connection file (e.g., ZIP), then you can import it directly to DronaHQ Dashboard. The steps are similar to adding a database, just in place of selecting a database you have to select the `Import Datbase from File` option and it will open a window to upload files from your system.


<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src="https://demo.arcade.software/aXryhiWVu230agFCGAyH?embed" 
        title="Theme Creation" 
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>
<br></br>




:::caution Overwrite Warning
If you are importing a file for a database that already exists, you will be prompted to confirm the process by entering the word `overwrite` before selecting Connect.

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/connect-database/import-caution.jpeg" alt="List of DB" />
</figure>
:::

### Export a Database

Go to the list of connectors already connected in dashbaord and select the export option to export the particular database in an archived database connection file (e.g., ZIP).

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src="https://demo.arcade.software/Hth0twbIFI82Lt4YpFwt?embed" 
        title="Theme Creation" 
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>
<br></br>
