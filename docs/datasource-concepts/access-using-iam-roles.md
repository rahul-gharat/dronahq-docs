---
sidebar_position: 8
---
import Thumbnail from '@site/src/components/Thumbnail';

# Database authentication using IAM

DronaHQ allows you to authenticate aws rds instance using AWS Identity and Access Management (IAM) database authentication. IAM database authentication works with MariaDB, MySQL, and PostgreSQL.

## Prerequisites
- Target databse should have IAM database authentication enabled, if not please [Modify Amazon RDS DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html).
- An IAM policy should exist which allows database access. Please refer [here](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html).

## Configure IAM authentication

To use IAM authentication, Go to `Connectors -> + CONNECTOR -> Select Supported DB`, in this case MySQL and scroll down to `Authentication type` dropdowm and select `AWS IAM Authentication`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/aws_iam.png" alt="IAM auth" width='75%' />
  <figcaption align = "center"><i>AWS IAM authentication</i></figcaption>
</figure>

Once selection is done, user will be prompted with additional fields which will be required to establish the connection.

| Field  | Description                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| Username  | username of the [database account](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.DBAccounts.html) for which IAM authentication is enabled. 
| AWS Access Key & AWS Secret Key | [IAM credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/security-creds.html#access-keys-and-secret-access-keys) which must be used together to authenticate requests.
| AWS Region | Region where your database instance exists.
| Role to assume (ARN) | [IAM role](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) to be assumed while accessing the database. |


