---
sidebar_position: 1
title: Amazon Athena
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Amazon Athena: Query data in Amazon S3 using SQL. Serverless and cost-effective, it delivers quick insights from diverse datasets without data transformations, ideal for ad-hoc analysis and business intelligence.

## Prerequisite

1. Authentication Requirements: To establish a connection with your Amazon Athena instance, you will need specific authentication credentials. You have the option to use either of the following authentication methods:
   - AWS Identity and Access Management (IAM) user credentials.
   - AWS access key and secret key.

2. Connection Details:
   - Amazon Athena query execution endpoint (usually `athena.{region}.amazonaws.com`).
   - The designated AWS region where your Amazon Athena instance is located.

3. Permissions and Access Control:
   - Ensure that the IAM user or role being used for authentication has appropriate permissions to access Amazon Athena and the required data sources.

4. Setting Permissions: Before using Amazon Athena, the administrator needs to configure permissions and access settings:

   - Amazon S3 Locations: Set permissions for Amazon S3 locations where the underlying data for queries is stored. More information on setting up IAM permissions for Amazon S3 can be found in the [Amazon Simple Storage Service Developer Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html).

   - AWS Glue Data Catalog: Configure permissions for metadata and resources stored in the AWS Glue Data Catalog. This includes databases and tables, as well as additional actions for encrypted metadata. For detailed steps, refer to the articles on [Setting Up IAM Permissions for AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/create-an-iam-role-s3-crawler-cli.html) and [Setting Up Encryption in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html) in the AWS Glue Developer Guide.

## Configuring Connector in DronaHQ

Configure your database category using the provided details.Validate connection with `Test connection` and `Save` settings for secure database setup.


### Get AWS Credentials


To connect to Amazon Athena, you'll need AWS Access and Secret Keys. If you have existing keys, you can use them. Otherwise, follow these steps to create new keys:

1. Log in to AWS Management Console.
2. Click your account name and select `My Security Credentials.`

In the `Access Keys` section, click `Create New Access Key` and provide a name (e.g., `athena`). You can attach the recommended `AthenaFullAccess` policy.

Remember to securely store the provided AWS Access Key ID and AWS Secret Access Key and avoid sharing them openly. These keys are essential for authorized access to Amazon Athena.

<figure>
  <Thumbnail src="/img/reference/connectors/amazon-athena/account-creds.jpeg" alt="Acoount Credentials" />
  <figcaption align = "center"><i>Acoount Credentials</i></figcaption>
</figure>


#### General 

| Field             | Description                      |
|-------------------|----------------------------------|
| AWS Region        |Please enter the AWS region where your resources are     |
|                   | located, such as 'us-east-1' or 'eu-west-2'.              |
| S3 Output Location |  Enter the S3 output location in the format: s3://bucket/folder               |
| Data Source       | Please enter the data source.    |
| AWS Access Key    | Please enter the AWS access key. |
| AWS Secret Key    | Please enter the AWS secret key. |

<figure>
  <Thumbnail src="/img/reference/connectors/amazon-athena/details.jpeg" alt="Amazon Athena with Sample details." />
  <figcaption align = "center"><i>Amazon Athena with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "../../datasource-concepts/whitelisting_dronahq_ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |

## Adding Database Queries

After configuring the connector, access it in your Connector Library.

Click `Add query` once the connection is established. Create queries, run them, and view responses.

<figure>
  <Thumbnail src="/img/reference/connectors/amazon-athena/query.png" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure>

:::tip
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to controls/actions for runtime use.
:::

Saved queries appear under your connector in Connector Library.

## Supported Query Operations

| Operations           | Description                                     |
|----------------------|-------------------------------------------------|
| Raw SQL Query        | Execute various SQL operations directly, e.g., `SELECT * FROM TableName;` |
| Stored Procedure Call| Call stored procedures, e.g., `EXEC usp_GetInfo;` to perform specific tasks or retrieve data from the database. |

## Using Amazon Athena Connector

### Data Bind using Data Query

#### Read/Display Data Query for Amazon Athena:

Begin by constructing an SQL query to extract data from your Amazon Athena database. For example, let's consider a scenario where you want to retrieve all data from the `AwsCatalog.logs` table. The SQL query is:

Query used:

```sql
SELECT * FROM AwsCatalog.logs;
```

Query explanation:

This SQL query retrieves all rows and columns from the `AwsCatalog.logs` table within the Amazon Athena database.

<figure>
  <Thumbnail src="/img/reference/connectors/amazon-athena/query.png" alt="Query example for retrieving data from Amazon Athena." />
  <figcaption align = "center"><i>Query example for retrieving data from Amazon Athena.</i></figcaption>
</figure>



Integrate the fetched data into your application's interface.

 a. Access the Controls section and introduce the Table grid control.

 b. Navigate to `Data Bind Options -> Quick Select -> Database Queries`.

 c. Opt for the Amazon Athena connector and choose the query that aligns with your data presentation goals.
