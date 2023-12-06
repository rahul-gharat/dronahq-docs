---
sidebar_position: 13
title: Databases
---

import Thumbnail from '@site/src/components/Thumbnail'; import Image from "@site/src/components/Image";

# Databases

Databases play a crucial role in numerous applications, serving as the backbone for storing and managing data. With
DronaHQ, you have the capability to execute queries for data retrieval and modification directly from its intuitive
editor.

## Connecting a Database

Here you will learn how to connect to a database on DronaHQ.

1. Click on `Connectors` from the sidebar.
2. You will see, on top right there is a `+ Connector` button, click on it.
3. From the list, select the database you need to connect to. This opens the page where you can configure the parameters
   to connect to your database.

<figure>
  <Image
    src='/img/connecting-datasource/databases-list.png'
    style={{ width: "60%", height: "auto" }}
    alt='List of available databases connectors.'
  />
  <figcaption align='center'>
    <i>List of Databases</i>
  </figcaption>
</figure>

4. Give a name to the configuring database, to identify it later on.

5. Fill up the required details and parameters to configure your database on DronaHQ successfully. DronaHQ encrypts all
   your data and store them securely.

6. Click the `Test` button and test the connection. Ensure that the database is valid.

7. Click `Save` to create and save the database connection.

:::tip

We offer AI-powered suggestions in the test connection phase for all database connectors.  
This support is helpful when encountering errors during configuration and testing, aiding in understanding errors and presenting common troubleshooting causes for easier resolution.

<figure>
  <Thumbnail src="/img/connecting-datasource/ai-suggestion.png" alt="AI providing error information and cause while configuring MySQL databse connector." />
  <figcaption align="center"><i>AI providing information and cause on the error faced during MySQL databse connector configuration.</i></figcaption>
</figure>

:::

## Writing Queries

The information you want to present in any application is spread across multiple tables in a database. Queries play a
vital role in collecting data from different tables and consolidating it for display.

With queries, you can perform various operations such as data insertion, updating, or removal from the database.
Furthermore, queries enable data binding to widgets and offer additional functionalities that enhance the overall
performance and user experience of the application.

This section talks about the steps to create a database query in the query editor:

1. Once you are done with configuring database connector. It will show in the connectors' list. Click on the `Add Query`
   button.

<figure>
  <Thumbnail src="/img/connecting-datasource/write-query.png" alt="Add Query" />
  <figcaption align = "center"><i>Click on <code>ADD QUERY</code> to open query editor.</i></figcaption>
</figure>

2. The query editor will open. You need to provide a name for the query and then write MySQL queries (Since here MySQL
   database is taken as an example.) under`Write Your Query`.

<figure>
  <Thumbnail src="/img/connecting-datasource/query-builder.jpeg" alt="Query Builder" />
  <figcaption align = "center"><i>MySQL Query builder with schemas on display.</i></figcaption>
</figure>

:::info DronaHQ provides specialized query editors for different databases, such as MySQL and MongoDB. These
database-dependent query editors enable users to write queries that are optimized for specific database systems,
ensuring efficient and precise data manipulation. :::

:::tip DronaHQ offers an impressive feature called Ask AI, which enables you to create database queries swiftly and
effortlessly using natural language prompts. This exceptional functionality allows users to generate database queries
with ease, making the process much faster and more user-friendly. :::

3. Write a query, let's say to fetch all the details from a table in the databsase. After that, click `Test Quey`.

<figure>
  <Thumbnail src="/img/connecting-datasource/query-res.jpeg" alt="Query Response" />
  <figcaption align = "center"><i>Query response.</i></figcaption>
</figure>

4. Click `Save` and your query will be added to the databse connector.

<figure>
  <Thumbnail src="/img/connecting-datasource/query-added.jpeg" alt="Query added to the database connector." />
  <figcaption align = "center"><i>Query added to the database connector.</i></figcaption>
</figure>

## Making Queries Dynamic

In the realm of database connections, the key factor lies in the manner in which we execute queries.

In certain situations, such as when retrieving order details for products in a shop, there may be a need to obtain
specific details for different products each time. To achieve this, dynamic inputs can be utilized. By incorporating
dynamic parameters into the query, it becomes possible to fetch data from the data source based on the specific product
details desired. This approach allows for flexibility and enables the retrieval of product details by passing dynamic
parameters whenever required.

In DronaHQ's Query Builder, it is possible to accomplish this by creating variables using `{{ }}` notation when adding a
query to a configured datasource connector, (It can be database or API connector). These variables can then be utilized
to pass dynamic parameters to queries through various methods, such as forms, data, user-input, and more, within the
App.

Let's see how to pass parameters to database query:

For Example, suppose we need to retrieve data from a table based on a particular order ID. However, we want this order
ID to be dynamic and passed as a parameter to the query of the database connector.

<figure>
  <Thumbnail
    src='/img/connecting-datasource/datasource-passParam.gif'
    style={{ width: "100%", height: "auto" }}
    alt='List of available databases connectors.'
  />
  <figcaption align='center'>
    <i>The keyword of `text input control` is used to provide user input as query parameters.</i>
  </figcaption>
</figure>

As shown in the image above, the `orderid` has been transformed into a dynamic variable. Consequently, you can
conveniently provide parameter values from the app by utilizing keywords.

<figure>
  <Thumbnail
    src='/img/connecting-datasource/database-pass-query.png'
    style={{ width: "100%", height: "auto" }}
    alt='List of available databases connectors.'
  />
  <figcaption align='center'>
    <i>The keyword of `text input control` is used to provide user input as query parameters.</i>
  </figcaption>
</figure>
