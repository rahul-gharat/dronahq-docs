---
sidebar_position: 1
title: Connection Pooling for enhanced performance
---
import Thumbnail from '@site/src/components/Thumbnail';


Connection pooling is a way to reduce the cost of opening and closing connections by maintaining a “pool” of open connections that can be passed from database operation to database operation as needed.

DronaHQ uses connection pooling to improve application performance.

## How DronaHQ uses connection pooling
DronaHQ achieves concurrency with the usage of connection pooling. Whenever a database query is triggered, DronaHQ opens a connection, sends the query, fetches data and closes the connection.

Let's consider a case where connection pooling doesn't exist and only single connection is being used by DronaHQ to serve requests.
Now, assume Case where multiple requests comes concurrently to same connector. DronaHQ will pick one request and serves it but rest of the requests will fail since there is no other connection are available. That's why DronaHQ keeps a minimal size pool so that when a query is triggered it can serve the concurrent request for the same connector and kills the pool and frees the connections once done.

## Configure connection pooling
DronaHQ allows you to configure pool settings according to the requests that your database receives. For example, pool size can be increased, wait time can be configured etc.

To achieve this you can make use of connection options, while adding connector. Go to `Connectors -> + CONNECTOR -> Select Supported DB`, in this case MySQL and go to `Connection Options` and add required fields and their values.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/connection_pooling.png" alt="Connection pooling" width='75%' />
  <figcaption align = "center"><i>Connection pooling</i></figcaption>
</figure>


Pools accept all the same options as a [connection](https://github.com/mysqljs/mysql#connection-options). When creating a new connection, the options are simply passed to the connection constructor. In addition to those options pools accept a few extras:

| Field  | Description                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| acquireTimeout  | The milliseconds before a timeout occurs during the connection acquisition. This is slightly different from connectTimeout, because acquiring a pool connection does not always involve making a connection. If a connection request is queued, the time the request spends in the queue does not count towards this timeout. (Default: 10000) 
| waitForConnections | Determines the pool's action when no connections are available and the limit has been reached. If true, the pool will queue the connection request and call it when one becomes available. If false, the pool will immediately call back with an error. (Default: true)
| connectionLimit | The maximum number of connections to create at once. (Default: 10)
| queueLimit | The maximum number of connection requests the pool will queue before returning an error from getConnection. If set to 0, there is no limit to the number of queued connection requests. (Default: 0)|

