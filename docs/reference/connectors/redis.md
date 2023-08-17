---
sidebar_position: 1
title: Redis
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Redis is used as a distributed, in-memory key-value database. Redis uses abstract data structures, such as strings, lists, maps, etc. It is best suited for developers who need quick responses.

## Prerequisites 

1. Authentication Credentials: Before establishing a connection with your Redis instance, ensure you have the required authentication credentials, which typically include:
   - Redis server hostname or IP address.
   - Port number for Redis communication.
   - Authentication password.

2. Connection Security:
   - Configure secure communication protocols (e.g., SSL/TLS) if required by your Redis setup.

3. Firewall and Network Configuration:
   - Adjust your firewall settings to allow communication between your application and the Redis server.

Having these essential prerequisites in place will ensure a secure and seamless integration of Redis with your applications, facilitating efficient data management and utilization.

## Configuring Connector in DronaHQ

Configure your database category using the provided details.Validate connection with `Test connection` and `Save` settings for secure database setup.

:::tip
DronaHQ can Auto fill crucial connection values like host, name, password, and more from the connector's [connection string](https://stackexchange.github.io/StackExchange.Redis/Configuration).

:::

#### General 

| Field                | Description                             |
|----------------------|-----------------------------------------|
| Host                 | Enter the Host Domain or IP             |
| Port                 | Enter the Port number                   |
| Password             | Enter the Password                      |
| Database Number | Enter the database number to connect.        |


<figure>
  <Thumbnail src="/img/reference/connectors/redis/details.png" alt="Redis with Sample details." />
  <figcaption align = "center"><i>Redis with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| Use Dynamic Database Host                | Dynamically determine the host for the database connection.                               |
| <VersionedLink to = "../../datasource-concepts/whitelisting_dronahq_ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |


## Adding Data Queries 



1. Query Name: Assign a unique name to your data retrieval query. This name will help you easily identify and access the query within your Connector Library.

2. Select Action - Get Value by Key: Choose the `Get Value by Key` action from the available options in the Redis connector. This action allows you to retrieve the value associated with a specific key in the Redis key-value store.

3. Configure Parameters:


| Parameter   | Description                                                  |
|-------------|--------------------------------------------------------------|
| Key         | Specify the key for which you want to retrieve the value.    |
| Field       | Specify the field name within a Redis hash to retrieve the value. |
| Index Name  | Specify the name of the index for querying Redis Sorted Sets. |
| Member      | Specify the member within a Redis Sorted Set to retrieve the value. |


4. Execute the Query: After configuring the parameters, execute the query by clicking the `Run` button. The value associated with the specified key will be fetched from the Redis database.

<figure>
      <Thumbnail src="/img/reference/connectors/redis/get.jpeg" alt="Redis Get Value by Key action." />
      <figcaption align = "center"><i>Redis Get Value by Key action.</i></figcaption>
</figure>

:::tip
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to controls/actions and more for runtime use. 
:::

Saved queries appear under your connector in Connector Library.

#### Supported Actions


| Action         | Description                                                                                     |
|----------------|-------------------------------------------------------------------------------------------------|
| GET            | Retrieve the value of a specified key.                                                        |
| SET            | Set the value of a key.                                                                        |
| DEL            | Delete a key.                                                                                   |
| KEYS           | Retrieve all keys matching a specified pattern.                                               |
| MGET           | Retrieve the values of multiple keys.                                                         |
| HGET           | Retrieve the value of a field in a hash.                                                      |
| HMGET          | Retrieve the values of multiple fields in a hash.                                             |
| HGETALL        | Retrieve all fields and values from a hash.                                                   |
| HSET           | Set the value of a field in a hash.                                                           |
| HSETNX         | Set the value of a field in a hash, only if the field does not exist.                         |
| HLEN           | Get the number of fields in a hash.                                                           |
| HDEL           | Delete one or more fields from a hash.                                                        |
| HKEYS          | Retrieve all field names from a hash.                                                         |
| HVALS          | Retrieve all values from a hash.                                                              |
| LINDEX         | Retrieve an element from a list by its index.                                                 |
| LLEN           | Get the length of a list.                                                                      |
| LPUSH          | Prepend one or more values to a list.                                                         |
| LREM           | Remove elements from a list.                                                                   |
| RPOPLPUSH      | Remove the last element in a list and prepend it to another list.                             |
| LRANGE         | Retrieve elements from a list within a specified range.                                       |
| SADD           | Add one or more members to a set.                                                              |
| SCARD          | Get the number of members in a set.                                                            |
| SMEMBERS       | Retrieve all members of a set.                                                                 |
| SISMEMBER      | Check if a member exists in a set.                                                             |
| SRANDMEMBER    | Get one or more random members from a set.                                                    |
| SREM           | Remove one or more members from a set.                                                         |
| ZADD           | Add one or more members to a sorted set.                                                       |
| ZCARD          | Get the number of members in a sorted set.                                                     |
| ZCOUNT         | Count the number of members in a sorted set within a specified score range.                    |
| ZRANGE         | Retrieve members from a sorted set within a specified range.                                  |
| ZRANGEBYSCORE  | Retrieve members from a sorted set within a specified score range.                             |
| ZRANK          | Determine the rank of a member in a sorted set.                                               |
| ZREM           | Remove one or more members from a sorted set.                                                 |
| ZSCORE         | Retrieve the score of a member in a sorted set.                                               |


## Using Redis Connector for Data Retrieval

### Get All Keys

To retrieve all keys from your Redis database using the Redis connector, follow these steps:

1. Choose the `Keys` Action: Begin by selecting the action type as `Keys` within the Redis connector options. This will allow you to interact with the keys stored in your Redis database.

2. Configure the Action for All Keys: In order to retrieve all keys, set the key pattern as `*` (an asterisk), which serves as a special character to match all keys in your Redis database.

<figure>
      <Thumbnail src="/img/reference/connectors/redis/getkey.jpeg" alt="Redis Keys Action to get all keys." />
      <figcaption align = "center"><i>Redis Keys Action to get all keys.</i></figcaption>
</figure>

3. Data Display Configuration: Configure the query to display the retrieved keys in a control, such as a dropdown. To do this, navigate to Bind Data > Connectors and set up the query accordingly.

4. Test and Implement: After providing the necessary parameters and configuring the query, perform a test run to ensure the query functions as intended. Once validated, finalize the configuration and implement the connector.

5. Access Data for Dropdown Control: To fetch the retrieved keys for the dropdown control, use the `result.rows` parameter to access the data returned by the query.



