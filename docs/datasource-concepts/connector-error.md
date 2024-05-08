---
title: Database Connection Errors
---


Error messages from databases can be cryptic, but they often contain valuable clues about the root cause of the problem. By understanding the error code and its description, you can identify the specific issue and take appropriate corrective actions.



###  Permission Denied Errors (EACCES, ER_DBACCESS_DENIED_ERROR, ER_ACCESS_DENIED_ERROR, ER_HOST_NOT_PRIVILEGED)

* Error Description:  This error indicates that the credentials you provided (username and password) are incorrect, lack the necessary privileges for the database, or there's a case-sensitivity mismatch.
* Solutions:
    * Verify you're using the correct username and password, paying close attention to case sensitivity.
    * Check if the user has the required permissions to access the specific database.

### Address Already In Use (EADDRINUSE)

* Error Description: This error occurs when the port you're trying to use for the connection is already occupied by another process on your system.
* Solutions:
    * Assign a different port for the database connection.
    * Identify and terminate the process that's currently using the desired port.

### Connection Refused (ECONNREFUSED)

* Error Description: This error signifies that the database server is unreachable or unavailable. It could be due to firewall restrictions, an inactive service, or an incorrect port being used. 
* Solutions:
    * Ensure the database server is operational and accessible.
    * Verify that your firewall settings allow connections to the database server. 
    * Check if you're using the correct port for the database connection.

### Connection Reset by Peer (ECONNRESET)

* Error Description: This error indicates that the database server abruptly closed the connection, possibly due to a server crash, timeout, or a large number of concurrent requests exceeding the limit.
* Solutions:
    * Verify the database server is functioning properly and hasn't crashed.
    * If handling a high volume of concurrent requests, adjust connection pool settings to accommodate the load.
    * Review your database configuration to prevent idle connections from being terminated prematurely.

### No Such File or Directory (ENOENT)

* Error Description: This error signifies that the database server couldn't locate the specified file or directory, often due to an incorrect socket path or bind address configuration.
* Solutions:
    * Double-check the socket path for accuracy during connection establishment.
    * Use "127.0.0.1" instead of "localhost" when connecting to a local database.
    * Ensure the bind address parameter is set to the correct value.

### DNS Lookup Failed (ENOTFOUND, ER_BAD_HOST_ERROR)

* Error Description: This error indicates a problem resolving the database hostname to an IP address. It could be due to an invalid domain name, incorrect port usage, or DNS server issues.
* Solutions:
    * Use "127.0.0.1" instead of "localhost" when connecting to a local database.
    * Verify the host's domain name is spelled correctly or use the IP address directly.
    * Ensure the correct port is being used for the connection.
    * If managing a high volume of concurrent requests, check if connection limits (max_connections and max_user_connections) have been modified from defaults.

### Broken Pipe (EPIPE)

* Error Description: This error occurs when you attempt to write data to a closed connection. It might be caused by exceeding maximum packet limitations, large queries, or writing to a closed remote stream.
* Solutions:
    * Review maximum allowed packet limitations and adjust accordingly.
    * Break down large queries into smaller ones if possible.
    * In case of HTTP layer errors, analyze the exception logs and address the specific issue.

### Operation Timed Out (ETIMEOUT)

* Error Description: This error signifies that the database server failed to respond within the designated time frame. It could be due to an inaccessible database server or firewall restrictions.
* Solutions:
    * Verify the database server is publicly accessible if required.
    * If necessary, whitelist the database server's IP address in your firewall settings.
    * For private databases, consider using [SSH Tunneling](https://docs.dronahq.com/datasource-concepts/ssh-tunneling/).


### SSL Handshake Fails (HANDSHAKE_SSL_ERROR)

* Error Description: The server and client couldn't establish a secure connection due to issues with encryption or certificates.
* Solutions:
    * Check if your SSL certificate is valid and properly configured. 
    * Ensure the server supports the required cipher suites and protocols.
    * Contact support for assistance if the issue persists.

### Handshake Fails (ER_HANDSHAKE_ERROR)

* Error Description: Authentication method mismatch between the client and the server.
* Solutions:
    * Try migrating your application to use the latest authentication mechanisms supported by DronaHQ. 
    * Contact support for assistance if the issue persists.

### Too Many Connections Made (ER_CON_COUNT_ERROR)

* Error Description: Too many connections.
* Solutions:
    * Temporary Increase: Use `set global max_connections = 200;` within MySQL to allow more connections temporarily. 
    * Permanent Increase: Edit the `my.cnf` file and add `max_connections = 500` under the `[mysqld]` section. Restart the MySQL server for changes to take effect. 
    *  Analyze and optimize slow queries to reduce execution time and free up connections. 
     *  Review data storage techniques and consider schema improvements for better efficiency. 

### Resources Are Exhausted (ER_OUT_OF_RESOURCES)

* Error Description: Out of memory.
* Solutions:
    * Allocate specific memory to the database server to prevent other processes from consuming it. 

### No Database Found (ER_NO_DB_ERROR | ER_BAD_DB_ERROR)

* Error Description: No database or unknown database selected.
* Solutions:
    * Double-check the database name for typos.
    * Verify the user has the necessary permissions to access the database. 

### Server Is Shutting Down (ER_SERVER_SHUTDOWN)

* Error Description: Server shutdown in progress.
* Solutions:
    * Perform a health check on the database server to identify any unexpected issues.

### Host Is Blocked (ER_HOST_IS_BLOCKED)


* Error Description: The host trying to connect has been blocked due to numerous failed connection attempts.
* Solutions:
    * Unblock the host by flushing the database server's cache (e.g., `mysqladmin flush-hosts` for MySQL).
    * Verify there are no issues with TCP/IP connections from the blocked host.
    * Increase the `max_connect_errors` value (refer to MySQL documentation) to reduce the chance of blocking hosts for occasional errors.

### Database Server Disappeared (CR_SERVER_GONE_ERROR)

* Error Description: The database server connection was unexpectedly terminated.
* Solutions:
    * Validate connection timeout parameter settings.
    * Check the database server's uptime to ensure it hasn't crashed.
    * Investigate the cause of any server.

