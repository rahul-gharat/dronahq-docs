---
sidebar_position: 13
---

import Thumbnail from '@site/src/components/Thumbnail';

# AWS Import

You can connect your Amazon RDS to DronaHQ by using the `AWS Import` feature which supports creation of data sources with major DB Engines like MySQL, PostgreSQL, Microsoft SQL Sever and MariaDB. This feature automaticaly fetches the connections details like hostname, database name, port number, and username from Amazon RDS, thus removing the need to manually fill them while setting up a new data source.

## Prerequisite

In order to use the `AWS Import` feature, you need to have IAM Credentials and ensure that RDS is steup and you have access to it. Refer the articles below on setting up IAM user and RDS.

- [How to create/manage AWS creds on AWS console](https://docs.aws.amazon.com/keyspaces/latest/devguide/access.credentials.html)
- [How to give RDS permission to existing IAM credentials user](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_id-based-policy-examples.html)

## Creating data source

You can follow one of the two approaches mentioned below.

### Using AWS import option

Go to the 'Connector' section in the DronaHQ dashboard, then click on '+ Connector -> Import from AWS'.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/aws-import/create-new-data-source.png" alt="Data source creation options" />
  <figcaption align='center'><i>Data source creation options</i></figcaption>
</figure>

If you haven't configured AWS Credentials yet, you'll be prompted to do so. Enter the `Access Key ID` and `Secret Access Key`, and then save your changes.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/aws-import/aws-credentials-configuration.png" alt="AWS Credentials Configuration" width="70%" />
  <figcaption align='center'><i>AWS Credentials Configuration</i></figcaption>
</figure>

Choose your preferred RDS and AWS region. This will populate a list of all available databases in that region in the Database dropdown. Select the specific database you wish to connect to and then click on 'Import'.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/aws-import/aws-import-configuration.png" alt="AWS Import Configuration" width="70%" />
  <figcaption align='center'><i>AWS Import Configuration</i></figcaption>
</figure>

You'll be redirected to the configuration page for the chosen RDS. Here, fields like hostname, database name, port number, and username will be automatically filled. Set the password and then proceed to test the connection.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/aws-import/mysql-rds-configuration.png" alt="MySQL AWS Import" width="70%" />
  <figcaption align='center'><i>MySQL AWS Import</i></figcaption>
</figure>


### Directly from the RDS connector

- Go to the 'Connector' section in the DronaHQ dashboard.
- Click on '+ Connector -> Connector'.
- Choose the RDS connector you want to configure.
- Select AWS from the auto-fill options.
- Enter necessary details like region and database.
- Click 'Import'.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/aws-import/supported-rds.png" alt="Supported RDS for AWS import" width="70%" />
  <figcaption align='center'><i>Supported RDS for AWS import</i></figcaption>
</figure>

In case you haven't configured AWS Credentials, you will be asked to enter your IAM Credentials.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/aws-import/rds-aws-credentials-configuration.png" alt="AWS credentials - not configured" width="70%" />
  <figcaption align='center'><i>AWS credentials - not configured</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/aws-import/mssql-rds-configuration.png" alt="AWS credentials - configured" width="70%" />
  <figcaption align='center'><i>AWS credentials - configured</i></figcaption>
</figure>

## Manage your AWS Credentials

- Go to the 'Connector' section in the DronaHQ dashboard.
- Click on '+ Connector -> Import from AWS'.
- Click on 'Change AWS Credentials' option located at the top-right corner.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/aws-import/manage-aws-credentials.png" alt="Manage AWS Credentials" width="70%" />
  <figcaption align='center'><i>Manage AWS Credentials</i></figcaption>
</figure>

