---
sidebar_position: 1
title: MongoDB
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

MongoDB revolutionizes data management with its innovative NoSQL approach, offering a flexible and scalable solution for
modern application development.

## Prerequisite

1. Authentication Requirements: To establish a connection with your MongoDB instance, you will require specific
   authentication credentials. You have the choice of either of the following two credential options:

   - MongoDB database username and password.
   - Alternative authentication methods (excluding AWS IAM authentication).

2. Connection Details:

   - Hostname of the MongoDB database.
   - Port number for database communication.
   - The designated database name within the MongoDB host.

3. Firewall Rules:
   - Set up your firewall settings to permit DronaHQ's IP whitelist for access to your MongoDB host.

Having these essential prerequisites in place will ensure a seamless integration of MongoDB with DronaHQ, facilitating
efficient data management and utilization without the need for AWS credentials.

## Configuring Connector in DronaHQ

Configure your database category using the provided details. Validate connection with `Test connection` and `Save`
settings for secure database setup.

:::tip DronaHQ can Auto fill crucial connection values like host, name, password, and more from the connector's
[connection string](https://www.mongodb.com/docs/manual/reference/connection-string/).

:::

#### General

| Field               | Description                              |
| ------------------- | ---------------------------------------- |
| Host                | Enter the Host Domain or IP              |
| Port                | Enter the Port number                    |
| Database Name       | Enter the Database name                  |
| Authentication Type | Choose from User and Password or AWS IAM |
| Username            | Enter the Username                       |
| Password            | Enter the Password                       |

<figure>
  <Thumbnail src="/img/reference/connectors/mongodb/details.jpeg" alt="MongoDB with Sample details." />
  <figcaption align = "center"><i>MongoDB with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option                                                                                                                                  | Description                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Options                                                                                                                               | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| Use Latest MongoDB Driver                                                                                                                        | Benefit from the latest features and improvements by using the most up-to-date MongoDB driver.                                                                                                |
| Use Dynamic Database Host                                                                                                                        | Dynamically determine the host for the database connection.                                                                                                                                   |
| Use Dynamic Database Name                                                                                                                        | Set the database name dynamically, allowing easy switching between databases.                                                                                                                 |
| <VersionedLink to = "/datasource-concepts/dynamic-credentials/#configure-dynamic-credentials"> Use Dynamic Database Credentials </VersionedLink> | Enable dynamic database credentials for secure and convenient management.                                                                                                                     |
| <VersionedLink to = "/datasource-concepts/ssl-configurations/"> Connect using SSL </VersionedLink>                                               | Securely access the database using an encrypted SSL connection, ensuring data integrity and confidentiality.                                                                                  |
| <VersionedLink to = "/datasource-concepts/ssh-tunneling/"> Enable SSH Tunneling </VersionedLink>                                                 | Securely access the database through encrypted SSH tunneling.                                                                                                                                 |
| <VersionedLink to = "/datasource-concepts/whitelisting-dronahq-ip/"> Whitelist IP </VersionedLink>                                               | Enhance security by restricting database access to specific whitelisted IP addresses.                                                                                                         |

## Adding Database Queries

After configuring the connector, access it in your Connector Library. Click `Add query` following the connection setup.
Here's how you can create and manage queries for your MongoDB database:

1. Name your Query: Provide a unique name for your query, which will be used for easy access.

2. Select a Collection: Specify the MongoDB collection on which you want to perform the action. This helps direct the
   query to the desired data set.

3. Choose an Action: MongoDB supports various actions, each with specific parameters. Select the appropriate action from
   the list provided. For example, if you select `Find` as the action, the available parameters will include Filter,
   Projection, Sort, Limit, and Skip. If you choose `InsertOne,` the parameters will change to Insert as Key: Value
   string.

4. Set Parameters: Depending on the chosen action, input the necessary parameters. For instance, if you're performing a
   `Find` action, specify the filter conditions and other relevant details. If it's an `InsertOne` action, provide the
   data you want to insert.

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

4. Run the Query: Once you've configured the action and parameters, you can execute the query by clicking `Test Query`
   The response will be displayed based on the provided parameters, allowing you to review the retrieved data or the
   outcome of the query.

<figure>
  <Thumbnail src="/img/reference/connectors/mongodb/add-query.jpeg" alt="Add query" />
  <figcaption align = "center"><i>Add query</i></figcaption>
</figure>

:::tip Utilize double curly brackets for incorporating dynamic variables. Prior to saving, test with sample values.
Associate dynamic variables with controls/actions for real-time utilization. :::

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

## Using MongoDB Connector

Follow the steps below to integrate the MongoDB Connector and execute queries:

1. Access Data Bind Section or Control Action:

   - Navigate to the data bind section of the control

2. Select MongoDB Connector from `Data Bind Options -> Quick Select -> Database Queries`
   - From the available options, choose MongoDB Connector.
   - Pick the specific connector query that will retrieve the desired data.
   - Click on "Continue" to proceed.

<figure>
  <Thumbnail src="/img/reference/connectors/mongodb/insert.png" alt="Insert one query" />
  <figcaption align = "center"><i>Insert one query</i></figcaption>
</figure>

8. Test and Finalize:

Once you complete these steps, you'll be able to observe the results based on the input values when running the
application.
