---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# Global query library

DronaHQ offers comprehensive support for numerous third-party services, which can be seamlessly integrated as data sources and utilized as resources within your app. With a broad spectrum of data source integrations, DronaHQ enables you to effortlessly connect to nearly any database or API.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/global-query-library/create-data-source-sidebar.png" alt="Create a new data source" width="70%" />
  <figcaption align='center'><i>Create a new data source</i></figcaption>
</figure>

:::info Create and use across multiple apps

To create and utilize the same data source across multiple apps, you have two options. You can either create the data source through the connector listing page on the DronaHQ dashboard or use the connectors tab inside the DronaHQ app.

:::

## Connector library

You can access all the data sources created within your account by navigating to the "Connector" option located on the left side of the DronaHQ dashboard. You can add sub queries to the data sources by clicking on the 'Add API' option. Additionally, you'll find more options represented by three dots (...) which allow you to perform various actions, including editing the configured resources, deleting and renaming data sources, setting permissions for users or groups, exporting data source, and adding resources for different data environments.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/global-query-library/connector-listing.png" alt="Data source section" />
  <figcaption align='center'><i>Data source section</i></figcaption>
</figure>

## Create new data source

To create a new data source, click on the '+ Connector' option at the top right corner and select the appropriate creation method. The available methods include 'Connector,' which opens a tray displaying various supported Databases and API data source integrations by DronaHQ. Alternatively, you can add a new data source by importing a JSON file from another DronaHQ account using the 'Import from JSON' option. Additionally, you have the option to import data sources stored in AWS by selecting the 'Import from AWS' option. 

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/global-query-library/create-new-data-source.png" alt="Create data source options" />
  <figcaption align='center'><i>Create data source options</i></figcaption>
</figure>

### Connector option

Choose the desired data source from the integration list, and proceed to configure it by adding the necessary resources/credentials. Afterward, perform a test to ensure everything is working correctly, and once verified, save the configuration.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/global-query-library/rest-api-configuration.png" alt="REST API configuration" width="70%" />
  <figcaption align='center'><i>REST API configuration</i></figcaption>
</figure>

### Import from JSON

To begin, upload a valid connector JSON file from your local machine, and then click on "Continue." Keep in mind that sensitive fields like passwords cannot be imported since they are not stored in the exported connector JSON file. Therefore, you will need to configure these sensitive fields before proceeding with testing and saving the connector.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/global-query-library/import-connector-json-file.png" alt="Import connector json file" width="70%" />
  <figcaption align='center'><i>Import connector json file</i></figcaption>
</figure>

### Import from AWS

AWS Import simplifies the process of populating credentials from Amazon RDS into the DronaHQ data source automatically. Supported DB Engines include MySQL, PostgreSQL, Microsoft SQL Server, and MariaDB. To import, just choose the desired DB Engine, AWS region, and database name. Then, click the import button, which will automatically populate essential details such as port number, hostname, username, etc. After that, you can proceed to test the connector, and upon successful connection, save it.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/global-query-library/aws-import.png" alt="Import connector json file" width="70%" />
  <figcaption align='center'><i>AWS Import</i></figcaption>
</figure>