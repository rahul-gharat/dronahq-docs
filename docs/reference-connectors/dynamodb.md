---
sidebar_position: 1
title: DynamoDB
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale.

## Prerequisites

1. Authentication Credentials: Obtain the necessary authentication credentials for connecting to your DynamoDB instance. Here's how you can set it up:
   - Create a new user in your AWS account and enable "Programmatic access" for the user.
   - Configure the necessary permissions for the user to access DynamoDB resources.
    <figure>
      <Thumbnail src="/img/reference/connectors/dynamodb/users.jpeg" alt="Acoount Credentials" />
    </figure>

3. Connection Details:
   - Endpoint URL of the DynamoDB database.
   - Region where the DynamoDB instance is hosted.

4. Firewall Rules:
   - Configure your firewall settings to allow DronaHQ (IP whitelist) access to your DynamoDB host.


## Configuring Connector in DronaHQ

Configure your database category using the provided details.Validate connection with `Test connection` and `Save` settings for secure database setup.


### Obtain AWS Credentials 

To connect to DynamoDB, you'll need to acquire AWS Access and Secret Keys. Follow these steps to ensure you have the necessary credentials:

1. Create a new user in the AWS Management Console.
2. Enable "Programmatic access" for the user and configure appropriate permissions.
3. Safely store the AWS Access Key ID and AWS Secret Access Key for future reference. If you can't locate them, generate a new pair of keys through the AWS console `Access AWS Console > My Security Credentials > Access Keys > Create New Access Key`.

<figure>
  <Thumbnail src="/img/reference/connectors/dynamodb/creds.jpeg" alt="Acoount Credentials" />
  <figcaption align = "center"><i>Acoount Credentials</i></figcaption>
</figure>


#### General 

| Field                | Description                             |
|----------------------|-----------------------------------------|
| AWS Access Key             | Enter the AWS Access Key  of your database.      |
| AWS Secret Key | Enter the AWS Secret Key of your database.                      |
| AWS Region | Enter the AWS Region of your database.                   |
| Role to assume (ARN) | Enter the role to be used while accessing API. Example - `arn:aws:iam::123456789012:role/RoleName`|
| User Role            | Enter the User Role                     |

<figure>
  <Thumbnail src="/img/reference/connectors/dynamodb/creds.jpeg" alt="DynamoDB with Sample details." />
  <figcaption align = "center"><i>DynamoDB with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "../../datasource-concepts/whitelisting_dronahq_ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |


