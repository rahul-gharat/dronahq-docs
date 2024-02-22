---
sidebar_position: 1
title: CouchDB
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

CouchDB is an open-source document-oriented NoSQL database that uses multiple formats and protocols to store, transfer,
and process its data

## Prerequisite

1. Authentication Requirements: Before establishing a connection with your CouchDB instance, ensure you have the
   required authentication credentials, including:

   - CouchDB database username.
   - Corresponding password for authentication.

2. Connection Details:

   - Obtain the hostname or IP address of your CouchDB server.
   - Identify the port number used by CouchDB for communication.

3. Firewall and Network Configuration:
   - Configure your firewall to allow communication between your application and the CouchDB server.

Having these essential prerequisites in place will ensure a smooth integration of CouchDB with your applications,
enabling efficient data management and utilization.

## Configuring Connector in DronaHQ

Configure your database category using the provided details. Validate connection with `Test connection` and `Save`
settings for secure database setup.

:::tip 
DronaHQ can Auto fill crucial connection values like host, name, password, and more from the connector's
[connection string](https://docs.couchbase.com/java-sdk/current/howtos/managing-connections.html#connection-strings).

:::

#### General

| Field    | Description                 |
| -------- | --------------------------- |
| Host     | Enter the Host Domain or IP |
| Port     | Enter the Port number       |
| Username | Enter the Username          |
| Password | Enter the Password          |

<figure>
  <Thumbnail src="/img/reference/connectors/couchdb/details.png" alt="DynamoDB with Sample details." />
</figure>

#### Admin

| Advanced Option                                                                                    | Description                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Options                                                                                 | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "/datasource-concepts/whitelisting-dronahq-ip/"> Whitelist IP </VersionedLink> | Enhance security by restricting database access to specific whitelisted IP addresses.                                                                                                         |
