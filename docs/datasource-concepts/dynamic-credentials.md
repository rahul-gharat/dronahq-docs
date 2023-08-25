---
sidebar_position: 7
---
import Thumbnail from '@site/src/components/Thumbnail';

# Dynamic Database Configurations

DronaHQ supports connecting to Postgres, MySQL, MSSQL and MongoDB, and other databases with a dynamic database configuration. Usually, for every database, connecting string is required and we write their dedicated queries, but with dynamic database configurations users can access different hosts, databases and db users from a single connector and also write queries respected to the them.

DronaHQ allows you to configure dynamic host, dynamic database and dynamic credentials.

:::info NOTE
While using dynamic database configurations, the schema of the database should be the same.
:::

## Configure Dynamic Host
To configure dynamic host, Go to `Connectors -> + CONNECTOR -> Select Supported DB`, in this case MySQL and `enable` this toggle named `Use dymanic database host`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/dynamic-db-config/dynamic_host.png" alt="Dynamic host" width='75%' />
  <figcaption align = "center"><i>Dynamic host</i></figcaption>
</figure>

This will enable you to access to host dynamically from different action flows and data queries.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/dynamic-db-config/data_query.png" alt="Data query" width='75%' />
  <figcaption align = "center"><i>Data query</i></figcaption>
</figure>

In the above image, we have the option to set our host to fetch the database due to toggling.
Each time the data will change with respect to the different hosts provided.

## Configure Dynamic Database

To configure dynamic database name, Go to `Connectors -> + CONNECTOR -> Select Supported DB`, in this case MySQL and `enable` this toggle named `Use dymanic database name`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/dynamic-db-config/dynamic_db_name.png" alt="Dynamic DB Name" width='75%' />
  <figcaption align = "center"><i>Dynamic database</i></figcaption>
</figure>

This will enable you to access to database dynamically from different action flows and data queries.

## Configure Dynamic Credentials
To configure dynamic host, Go to `Connectors -> + CONNECTOR -> Select Supported DB`, in this case MySQL and `enable` this toggle named `Use dymanic database credentials`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/dynamic-db-config/dynamic_credentials.png" alt="Dynamic credentials" width='75%' />
  <figcaption align = "center"><i>Dynamic credentials</i></figcaption>
</figure>

This will enable you to access to user credentials dynamically from different action flows and data queries.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/dynamic-db-config/creds_query.png" alt="Creds query" width='75%' />
</figure>

In the above image, we have the option to set our user credential to fetch the database due to toggling.
Each time the data will change with respect to the different users provided.





