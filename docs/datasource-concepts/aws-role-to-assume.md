---
sidebar_position: 11
---
import Thumbnail from '@site/src/components/Thumbnail';

# AWS Role to assume

AWS Identity and Access Management (IAM) roles are entities you create and assign specific permissions to that allow trusted identities such as workforce identities and applications to perform actions in AWS. When your trusted identities assume IAM roles, they are granted only the permissions scoped by those IAM roles. Using IAM roles is a security best practice because roles provide temporary credentials that do not need to be rotated.

DronaHQ allows [role to be assumed](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) while using AWS IAM authentication for MySQL, PostgreSQL and MariaDB.

## Prerequisites
- An AWS account.
- An Amazon RDS instance created with IAM authentication [enabled](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Enabling.html).
- A user with an IAM Role that has the necessary permissions to connect to the Amazon RDS instance.

## Configure Role to assume
To configure aws role while connecting to a database instance, Go to `Connectors -> + CONNECTOR -> Select Supported DB`, in this case MySQL and scroll down to `Authentication type` dropdowm and select `AWS IAM Authentication`.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/aws_iam.png" alt="IAM auth" width='75%' />
  <figcaption align = "center"><i>AWS IAM authentication</i></figcaption>
</figure>

In `Role to assume` field, enter the role ARN  to be used.

## Get the IAM Role ARN
- Go to the AWS Management Console and navigate to the IAM service.
- Click on “Roles” in the left navigation pane and select the role you just created.
- Copy the Role ARN value from the “Summary” tab

## Conclusion
Connecting to Amazon RDS with IAM Role is a secure and convenient way to access your database. By following the steps outlined in this article, you can easily set up and connect to your Amazon RDS instance with IAM Role.