---
sidebar_position: 1
title: Cassandra
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Apache Cassandra is an open-source, distributed NoSQL database management system designed to handle large amounts of data across many commodity servers while providing high availability and fault tolerance. 

## Prerequisites 

1. Cassandra Authentication: Before utilizing the Cassandra connector provided by DronaHQ, ensure you have valid authentication credentials for your Cassandra instance. You'll need:
   - Username and password associated with your Cassandra account.

2. Connection Details:
   - Identify the Datacenter: Determine the specific Cassandra datacenter you want to connect to.
   - Specify the Keyspace: Know the keyspace (similar to a database) within the Cassandra datacenter where you intend to perform operations.

3. Cluster Nodes: Understand the nodes in your Cassandra cluster that you will be connecting to. The connector requires at least one node's hostname or IP address.

## Configuring Connector in DronaHQ

Configure your database category using the provided details.Validate connection with `Test connection` and `Save` settings for secure database setup.

#### General 

| Field                | Description                             |
|----------------------|-----------------------------------------|
| Host                 | Enter the Host Domain or IP             |
| Port                 | Enter the Port number                   |
| Datacenter | The specific datacenter within your Cassandra cluster where you want to perform operations. |
| Keyspace | The keyspace (similar to a database) within the selected datacenter where you intend to perform actions.|
| Username             | Enter the Username                      |
| Password             | Enter the Password                      |

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "../../datasource-concepts/whitelisting-dronahq-ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |