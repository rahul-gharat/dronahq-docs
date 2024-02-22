---
sidebar_position: 1
title: Amazon DocumentDB
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

Amazon Document DB is a document-based database. Amazon DocumentDB is a scalable, highly durable, and fully managed
database service for operating mission-critical MongoDB workloads. You can use the connector to carry out various
operations including querying and inserting and updating details.

## Prerequisite

1. Authentication Credentials: You will need specific authentication credentials to establish a connection with your
   Amazon DocumentDB instance.

2. Connection Details:

   - Endpoint of your Amazon DocumentDB instance.
   - Port number for database communication.
   - The designated database name within the Amazon DocumentDB instance.

3. Network Configuration:

   - Configure your network settings to allow access from the necessary sources to your Amazon DocumentDB host.

4. AWS Credentials: If your use case requires AWS services in conjunction with the Amazon DocumentDB connector, ensure
   you have valid AWS credentials with appropriate permissions.

## Configuring Connector in DronaHQ

Configure your database category using the provided details. Validate connection with `Test connection` and `Save`
settings for secure database setup.

:::tip 

DronaHQ can Auto fill crucial connection values like host, name, password, and more from the connector's
[connection string](https://docs.aws.amazon.com/documentdb/latest/developerguide/endpoints-connecting.html#endpoints-connecting-mongodb).

:::

#### General

| Field         | Description                 |
| ------------- | --------------------------- |
| Host          | Enter the Host Domain or IP |
| Port          | Enter the Port number       |
| Database Name | Enter the Database name     |
| Username      | Enter the Username          |
| Password      | Enter the Password          |

<figure>
  <Thumbnail src="/img/reference/connectors/awsDocDB/details.png" alt="Amazon DocumentDB with Sample details." />
  <figcaption align = "center"><i>Amazon DocumentDB with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option                                                                                    | Description                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Options                                                                                 | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "/datasource-concepts/ssl-configurations/"> Connect using SSL </VersionedLink> | Securely access the database using an encrypted SSL connection, ensuring data integrity and confidentiality.                                                                                  |     | Use a Self-Signed Certificate | Implement secure authentication and encryption using a self-signed certificate along with the CA, client key, and client certificate options. |
| <VersionedLink to = "/datasource-concepts/ssh-tunneling/"> Enable SSH Tunneling </VersionedLink>   | Securely access the database through encrypted SSH tunneling.                                                                                                                                 |
| <VersionedLink to = "/datasource-concepts/whitelisting-dronahq-ip/"> Whitelist IP </VersionedLink> | Enhance security by restricting database access to specific whitelisted IP addresses.                                                                                                         |

## Adding Database Queries

Once you have successfully configured the Amazon DocumentDB connector, you can manage your database queries through the
Connector Library. Follow these steps to create and manage queries for your Amazon DocumentDB:

1. Name your Query: Assign a unique name to your query for easy identification and access.

2. Select a Collection: Choose the specific collection within your Amazon DocumentDB instance on which you intend to
   execute the query. This ensures that your query is targeted to the correct dataset.

3. Choose an Action: Amazon DocumentDB supports a range of actions, each with distinct parameters. Select the
   appropriate action from the available options. For instance, if you opt for the `Find` action, you'll have parameters
   such as Filter, Projection, Sort, Limit, and Skip at your disposal. If you go with `InsertOne,` the parameters will
   transform into a Key: Value string for insertion.

4. Set Parameters: Based on the chosen action, provide the required parameters. For example, if you're executing a
   `Find` action, define the filter criteria and other pertinent details. In the case of an `InsertOne` action, input
   the data you wish to insert.

| Parameter   | Description                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Filter      | Criteria to match documents. Specify conditions to filter and retrieve specific data from the collection.                           |
| Projection  | Fields to include/exclude from results. Define which fields should be included or excluded in the query results.                    |
| Sort        | Sorting order for results. Specify how the query results should be sorted based on one or more fields.                              |
| Skip        | Number of documents to skip. Set the offset for the query results, skipping a certain number of documents.                          |
| Limit       | Maximum number of documents to retrieve. Set a limit on the number of documents returned by the query.                              |
| Update      | Modifications to apply. Define the changes you want to make to the selected documents in the collection.                            |
| Document    | Data to be inserted. Provide the document or data that you want to insert into the collection.                                      |
| Stages      | Array of stages for aggregation pipeline. Define a series of processing stages to transform and analyze data in the collection.     |
| Field       | Field for which distinct values are sought. Specify the field from which you want to find distinct values.                          |
| Aggregation | Stages for aggregation pipeline. Define various stages such as grouping, filtering, and transformation to perform data aggregation. |

5. Run the Query: Once you've configured the action and parameters, you can execute the query by clicking `Test Query`
   The response will be displayed based on the provided parameters, allowing you to review the retrieved data or the
   outcome of the query.

<figure>
  <Thumbnail src="/img/reference/connectors/awsDocDB/add-query.png" alt="Add Query" />
  <figcaption align = "center"><i>Add Query</i></figcaption>
</figure>

:::tip 
Utilize double curly brackets for incorporating dynamic variables. Prior to saving, test with sample values.
Associate dynamic variables with controls/actions for real-time utilization. 
:::

Your saved queries will be visible beneath your connector within the Connector Library.

#### Supported Actions

| Action     | Description                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| Find       | Retrieve documents from a collection based on specified criteria.                                    |
| FindOne    | Retrieve a single document from a collection that matches a specified filter.                        |
| InsertOne  | Insert a single document into a collection.                                                          |
| InsertMany | Insert multiple documents into a collection.                                                         |
| UpdateOne  | Update a single document in a collection that matches a specified filter.                            |
| UpdateMany | Update multiple documents in a collection that match a specified filter.                             |
| DeleteOne  | Delete a single document from a collection that matches a specified filter.                          |
| Distinct   | Find distinct values for a specified field in a collection.                                          |
| Aggregate  | Perform aggregation operations on a collection, such as grouping, sorting, and computing aggregates. |
| Count      | Count the number of documents in a collection that match a specified filter.                         |

## Using Amazon DocumentDB Connector

1. Access Data Bind Section or Control Action:

   - Navigate to the data bind section of the control.

2. Select Amazon DocumentDB Connector from `Data Bind Options -> Quick Select -> Database Queries`:
   - Choose Amazon DocumentDB Connector from the available options.
   - Select the specific connector query that will retrieve the desired data.
   - Click on "Continue" to proceed.

<figure>
  <Thumbnail src="/img/reference/connectors/awsDocDB/find.png" alt="Find query" />
  <figcaption align = "center"><i>Find query</i></figcaption>
</figure>
3. Test and Finalize

By following these steps, you'll seamlessly integrate the Amazon DocumentDB Connector into your application and
efficiently execute queries to retrieve the desired data.
