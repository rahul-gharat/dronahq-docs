---
sidebar_position: 1
title: Xano
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';



Xano is a platform that simplifies backend development and workflows without complex coding. It enables rapid application development and integration, streamlining the process of building scalable and efficient web and mobile applications.

## Prerequisites 

Obtain the required authentication credentials from Xano, such as API keys or tokens, to securely access your APIs. Ensure that the API endpoints you're using have the appropriate access permissions configured in Xano.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `Meta Api Access Token` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

<figure>
  <Thumbnail src="/img/reference/connectors/xano/details.png" alt="Xano Fields" />
</figure>

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.



## Supported API endpoints

| Action               | Description                                                  |
|----------------------|--------------------------------------------------------------|
| GetAllInstances      | Retrieve a list of all instances within your Xano workspace.|
| GetAllWorkspaces     | Fetch a list of all workspaces associated with your account. |
| GetAllTables         | Obtain a list of all tables available within your project.  |
| GetTableContent      | Retrieve content from a specific table using a given filter. |
| SearchTableContent   | Search for specific content within a table based on criteria.|
| GetTableSchema       | Fetch the schema of a particular table in your Xano project.|
| CreateTableContent   | Create new content in a specific table using provided data.  |
| UpdateTableContent   | Update existing content in a table using specified changes.  |
| DeleteTableContent   | Delete specific content from a table based on provided data. |
| TruncateTable        | Remove all content from a table, resetting it to empty state.|

