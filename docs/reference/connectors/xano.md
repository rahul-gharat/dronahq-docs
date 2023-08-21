---
sidebar_position: 1
title: Xano
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';



Xano is a platform that simplifies backend developmentand workflows without complex coding. It enables rapid application development and integration, streamlining the process of building scalable and efficient web and mobile applications.

## Prerequisites for Xano Integration

Obtain the required authentication credentials from Xano, such as API keys or tokens, to securely access your APIs.Ensure that the API endpoints you're using have the appropriate access permissions configured in Xano.

<figure>
  <Thumbnail src="/img/reference/connectors/xano/details.png" alt="Xano Fields" />
</figure>


## Suppoorted API endpoints

| Action               | Description                                                  |
|----------------------|--------------------------------------------------------------|
| Auth                 | Authenticate your connection to Xano using API keys or tokens.|
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

