---
sidebar_position: 1
title: Elastic Search
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Elasticsearch is a distributed, open-source search and analytics engine. You can store, search, and analyze huge volumes of data quickly. You can query Elasticsearch and in near real-time get back responses in a matter of a few milliseconds.

## Prerequisites for Elasticsearch Integration

1. Authentication Credentials: Obtain the necessary credentials to connect to your Elasticsearch instance. You will need the following credentials:
   - Elasticsearch username and password.

2. Connection Details:
   - Hostname or IP address of the Elasticsearch server.
   - Port number for Elasticsearch access.

3. Firewall and Network Configuration:
   - Configure your firewall to allow communication between your application and the Elasticsearch server.

Having these essential prerequisites in place will ensure a smooth integration of Elasticsearch with your applications, facilitating efficient data management and utilization.

## Configuring Connector in DronaHQ

Configure your database category using the provided details.Validate connection with `Test connection` and `Save` settings for secure database setup.

:::tip
DronaHQ can Auto fill crucial connection values like host, name, password, and more from the connector's [connection string](https://www.elastic.co/guide/en/elasticsearch/reference/current/sql-odbc-setup.html#sql-odbc-setup).

:::

#### General 

| Field                | Description                             |
|----------------------|-----------------------------------------|
| Host                 | Enter the Host Domain or IP             |
| Port                 | Enter the Port number                   |
| Database Name        | Enter the Database name                 |
| Username             | Enter the Username                      |
| Password             | Enter the Password                      |

<figure>
  <Thumbnail src="/img/reference/connectors/elasticsearch/details.png" alt="Elastic Search with Sample details." />
</figure>

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| Use Dynamic Database Host                | Dynamically determine the host for the database connection.                               |
| <VersionedLink to = "../../datasource-concepts/dynamic_credentials"> Use Dynamic Database Credentials        </VersionedLink> | Enable dynamic database credentials for secure and convenient management.                  |
| <VersionedLink to = "../../datasource-concepts/whitelisting_dronahq_ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |

## Adding Queries 

Once you have successfully configured the Elasticsearch connector, you can efficiently manage user-related operations. Follow these steps to create and manage user management queries for the `Search` action:

1. Query Name: Assign a unique name to your user management query. This name will serve as an identifier within your Connector Library for easy access.

2. Action - Search: Within the Elasticsearch connector options, select the `Search` action. This action empowers you to perform customized search queries on your Elasticsearch index, allowing you to retrieve user-related data.

3. Body Configuration: Customize the search query by configuring the body parameter. Define the search terms, filters, sorting criteria, and aggregation options within the body to tailor the query according to your user management requirements.

By following these steps, you can effectively create and manage user management queries using the Elasticsearch connector's `Search` action. This enables you to seamlessly retrieve and work with user-related data, enhancing your application's user management capabilities.

<figure>
  <Thumbnail src="/img/reference/connectors/elasticsearch/search.jpeg" alt="Add query" />
  <figcaption align = "center"><i>Add query</i></figcaption>
</figure>


:::tip
Utilize double curly brackets for incorporating dynamic variables. Prior to saving, test with sample values. Associate dynamic variables with controls/actions for real-time utilization.
:::

Your saved queries will be visible beneath your connector within the Connector Library.

#### Supported Actions

| Action                      | Description                                                                                   |
|-----------------------------|-----------------------------------------------------------------------------------------------|
| search                      | Execute a search query.                                                                       |
| index                       | Index a document.                                                                             |
| create                      | Create a document.                                                                            |
| update                      | Update a document.                                                                            |
| delete                      | Delete a document.                                                                            |
| bulk                        | Perform bulk operations.                                                                      |
| clearScroll                 | Clear a scroll search context.                                                                |
| count                       | Count documents matching a query.                                                             |
| deleteByQuery               | Delete documents matching a query.                                                           |
| deleteByQueryRethrottle     | Rethrottle a delete-by-query request.                                                        |
| deleteScript                | Delete a stored script.                                                                       |
| exists                      | Check if a document exists.                                                                   |
| existsSource                | Check if a document with source exists.                                                      |
| explain                     | Explain a query's score.                                                                      |
| fieldCaps                   | Retrieve field capabilities.                                                                  |
| get                         | Get a document by ID.                                                                         |
| getScript                   | Get a stored script.                                                                          |
| getSource                   | Get the source of a document.                                                                 |
| info                        | Get cluster information.                                                                      |
| mget                        | Retrieve multiple documents by ID.                                                           |
| msearch                     | Execute multiple searches.                                                                    |
| msearchTemplate             | Execute multiple template searches.                                                          |
| mtermvectors                | Retrieve multiple term vectors.                                                               |
| ping                        | Ping the Elasticsearch cluster.                                                               |
| putScript                   | Create or update a stored script.                                                            |
| rankEval                    | Execute the ranking evaluation API.                                                           |
| reindex                     | Reindex documents.                                                                            |
| reindexRethrottle           | Rethrottle a reindex request.                                                                 |
| renderSearchTemplate        | Render a search template.                                                                     |
| scriptsPainlessExecute      | Execute a Painless script.                                                                    |
| scroll                      | Scroll through search results.                                                                |
| searchShards                | Retrieve search shard information.                                                           |
| searchTemplate              | Execute a search template.                                                                    |
| termvectors                 | Retrieve term vectors.                                                                        |
| updateByQuery               | Update documents matching a query.                                                           |
| updateByQueryRethrottle     | Rethrottle an update-by-query request.                                                       |
| cat.aliases                 | Show index alias information.                                                                 |
| cat.allocation              | Show shard allocation information.                                                           |
| cat.count                   | Show count of indexed documents.                                                              |
| cat.fielddata               | Show field data statistics.                                                                   |
| cat.health                  | Show cluster health information.                                                              |
| cat.help                    | Show help for the Cat APIs.                                                                   |
| cat.indices                 | Show index information.                                                                       |
| cat.master                  | Show master node information.                                                                 |
| cat.nodeattrs               | Show node attributes.                                                                         |
| cat.nodes                   | Show node information.                                                                        |
| cat.pendingTasks            | Show pending cluster tasks.                                                                   |
| cat.plugins                 | Show installed plugins.                                                                       |
| cat.recovery                | Show shard recovery information.                                                              |
| cat.repositories            | Show snapshot repository information.                                                        |
| cat.segments                | Show segment information.                                                                     |
| cat.shards                  | Show shard information.                                                                       |
| cat.snapshots               | Show snapshot information.                                                                    |
| cat.tasks                   | Show currently executing cluster tasks.                                                       |
| cat.templates               | Show index templates.                                                                         |
| cat.threadPool              | Show thread pool information.                                                                 |
| cluster.allocationExplain   | Explain shard allocation.                                                                     |
| cluster.getSettings         | Get cluster settings.                                                                         |
| cluster.health              | Get cluster health.                                                                            |
| cluster.pendingTasks        | Show pending cluster tasks.                                                                   |
| cluster.putSettings         | Update cluster settings.                                                                      |
| cluster.remoteInfo          | Show remote cluster information.                                                              |
| cluster.reroute             | Reroute cluster.                                                                              |
| cluster.state               | Get cluster state.                                                                             |
| cluster.stats               | Get cluster statistics.                                                                       |
| indices.analyze             | Analyze text.                                                                                  |
| indices.clearCache          | Clear cache.                                                                                   |
| indices.clone               | Clone index.                                                                                   |
| indices.close               | Close index.                                                                                   |
| indices.create              | Create index.                                                                                  |
| indices.delete              | Delete index.                                                                                  |
| indices.deleteAlias         | Delete index alias.                                                                            |
| indices.deleteTemplate      | Delete index template.                                                                         |
| indices.exists              | Check if index exists.                                                                         |
| indices.existsAlias         | Check if index alias exists.                                                                   |
| indices.existsTemplate      | Check if index template exists.                                                                |
| indices.existsType          | Check if index type exists.                                                                    |
| indices.flush               | Flush index.                                                                                   |
| indices.flushSynced         | Flush sync.                                                                                    |
| indices.forcemerge          | Force merge.                                                                                   |
| indices.get                 | Get index.                                                                                     |
| indices.getAlias            | Get index alias.                                                                               |

## Using Elastic Search Connector

### Search and Retrieve Data

1. Access Data Management Section or Control Action:
   - Navigate to the data management section or the control action where you want to retrieve data using the Elastic Search Connector.

2. Select Elastic Search Connector:
   - Choose the Elastic Search Connector from your available options.
   - Opt for the "Search" action to query and retrieve data from your Elasticsearch index.

    <figure>
      <img src="/img/reference/connectors/elasticsearch/search.jpeg" alt="Elastic Search Search action" />
      <figcaption align="center"><i>Elastic Search Search action</i></figcaption>
    </figure>

3. Configure Search Query:
   - Define your search query using the Elasticsearch Query DSL (Domain Specific Language).
   - Customize filters, sorting, aggregations, and other query parameters as needed.

4. Execute the Action Flow:
   - Configure the Connector within the Action Flow or Server Side actions.
   - Trigger the search action based on user interaction or automation triggers.

5. Process and Display Results:
   - Upon receiving the search results, process the data using scripting or transformations if required.
   - Display the retrieved data in a table, list, or other visualizations as per your application's design.

