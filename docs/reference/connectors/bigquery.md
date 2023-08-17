---
sidebar_position: 1
title: BigQuery
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

BigQuery is a fully managed data warehouse by Google Cloud that allows you to analyze massive datasets using SQL-like queries. It's designed for speed and scalability, enabling organizations to process and gain insights from large volumes of data quickly and efficiently.


## Prerequisite

To establish a connection with Google BigQuery as a connector, follow these steps:

1. Google Cloud Account: Ensure you have a valid Google Cloud Platform (GCP) account with the necessary permissions for BigQuery access.

2. Google Cloud Credentials: Obtain Google Cloud Credentials for authentication. For Service Account Authentication and the private key, refer to this detailed article [here](https://cloud.google.com/docs/authentication/client-libraries#creating_a_service_account).

3. Service Account Creation: Create a Service Account within `Google Cloud Storage > APIs and Services > Credentials`. If not created, select `Service Account` and provide account details, description, and access permissions to projects and users.

    <figure>
       <Thumbnail src="/img/reference/connectors/bigquery/serviceacc.jpeg" alt="Service Account" />
       <figcaption align = "center"><i>Service Account</i></figcaption>
    </figure>
   
4. Generate JSON Key: From the created Service Account, generate a JSON Key. Provide necessary details and permissions, and download the JSON file. Keep it accessible for configuring the connector.

    <figure>
       <Thumbnail src="/img/reference/connectors/bigquery/json.jpeg" alt="JSON Key" />
       <figcaption align = "center"><i>JSON Key</i></figcaption>
    </figure>

5. Connector Configuration: Configure the BigQuery connector using the obtained Google Cloud Credentials. Set the necessary authentication method and use the downloaded JSON Key for private key authentication.

## Configuring Connector in DronaHQ

Configure your database category using the provided details.Validate connection with `Test connection` and `Save` settings for secure database setup.


#### General

| Field          | Description                                          |
|----------------|------------------------------------------------------|
| Authentication | Choose the authentication method. For example, select `Service Account` for Google Cloud Service Account key authentication. |
| Private Key    | If using a Service Account key, provide the JSON key file obtained during Service Account creation. |

<figure>
  <Thumbnail src="/img/reference/connectors/bigquery/details.jpeg" alt="BigQuery with Sample details." />
  <figcaption align = "center"><i>BigQuery with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "../../datasource-concepts/whitelisting-dronahq-ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |

## Adding Database Queries

After configuring the connector, access it in your Connector Library.

Click `Add query` once the connection is established. Create queries, run them, and view responses.

<figure>
  <Thumbnail src="/img/reference/connectors/bigquery/query.png" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure>

:::tip
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to controls/actions for runtime use.
:::

Saved queries appear under your connector in Connector Library.

## Using BigQuery Connector

### Data Bind using Data Query

#### Read/Display Data Query for BigQuery:

Start by crafting an SQL query to extract data from your Google BigQuery database. Consider a scenario where you want to retrieve names from the `bigquery-public-data.usa_names.usa_1910_2013` table for the state 'TX', limiting the results to 100 rows. The SQL query is:

Query used:

```sql
SELECT name FROM bigquery-public-data.usa_names.usa_1910_2013 WHERE state = 'TX' LIMIT 100;
```

Query explanation:

This SQL query retrieves names from the `bigquery-public-data.usa_names.usa_1910_2013` table where the state is 'TX'. The results are limited to 100 rows.

<figure>
  <Thumbnail src="/img/reference/connectors/bigquery/query.png" alt="Query example for retrieving data from Google BigQuery." />
  <figcaption align = "center"><i>Query example for retrieving data from Google BigQuery.</i></figcaption>
</figure>

Integrate the fetched data into your application's interface.

 a. Access the Controls section and introduce the Table grid control.

 b. Navigate to `Data Bind Options -> Quick Select -> Database Queries`.

 c. Opt for the BigQuery connector and choose the query that aligns with your data presentation goals.

By following these steps, you can seamlessly retrieve and display data from the `bigquery-public-data.usa_names.usa_1910_2013` table using the BigQuery Connector. The data is filtered and limited based on your specified criteria, enhancing your application's functionality and user experience.