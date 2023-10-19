---
sidebar_position: 1
title: SFTP and FTP
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

SFTP (SSH File Transfer Protocol) and FTP (File Transfer Protocol) are connectors provided by DronaHQ. SFTP ensures secure file transfer using encryption, while FTP is a standard protocol for transferring files between a client and a server on a network.

## Prerequisite

1. Server Authentication: To use the SFTP or FTP connector provided by DronaHQ, you need valid authentication credentials. Choose either of the following options:
   - Username and password for FTP authentication.
   - SSH key pair for SFTP authentication.

2. Connection Details:
   - Server Hostname or IP address for communication.
   - Port number for connecting to the server (21 for FTP, 22 for SFTP).

3. File Locations: Familiarize yourself with the server's directory structure where you'll be performing file operations.

4. Connection Mode: Understand whether the connection requires Active or Passive mode, especially for FTP connections.


## Configuring Connector in DronaHQ

Configure your database category using the provided details.Validate connection with `Test connection` and `Save` settings for secure database setup.


:::info
Choose from SFTP and FTP, depending on it you will be asked to configure respective required fields.
:::


### Protocol Type - SFTP configuration


#### General 

| Field                | Description                             |
|----------------------|-----------------------------------------|
|Protocol Type | Select from `SFTP` and `FTP` Protocol types |
| Host                 | Enter the Host Domain or IP             |
| Port                 | Enter the Port number                   |
| Authentication       | Select authentication method between `Username and Password` and `Private key`                 |
| Username             | Enter the Username                      |
| Password             | Enter the Password                      |

:::info NOTE
`Authentication` feild is available for SFTP protocol type.
:::

<figure>
  <Thumbnail src="/img/reference/connectors/sftpftp/details.png" alt="SFTP protocol with Sample details." />
  <figcaption align = "center"><i>SFTP protocol with Sample details.</i></figcaption>
</figure>

#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
|SSH Keys | Ensure you have SSH keys available in your DronaHQ account for secure connections. The server you want to connect to must have the DronaHQ-generated public key/SSH Key saved in it. |
| <VersionedLink to = "../../datasource-concepts/whitelisting-dronahq-ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |

## Adding List Directory Queries to SFTP and FTP Connectors

After successfully configuring the SFTP and FTP connectors, you can utilize the List Directory action to manage your file directories. Here's how you can create and handle list directory queries for these protocols:

1. Query Definition: Give your query a unique name to easily identify and manage it.

3. Action Choice: Select the List Directory action from the available options. This action retrieves a list of files and directories within the specified path.

4. Set Path: Provide the path for the directory you want to list. This could be an absolute path or a relative path from the root directory of the connected server.

5. Run the Query: Once you've configured the action and parameters, you can execute the query by clicking `Test Query` The response will be displayed based on the provided parameters, allowing you to review the retrieved data or the outcome of the query.

<figure>
  <Thumbnail src="/img/reference/connectors/awsDocDB/add-query.png" alt="Add Query" />
  <figcaption align = "center"><i>Add Query</i></figcaption>
</figure>

:::tip
Utilize double curly brackets for incorporating dynamic variables. Prior to saving, test with sample values. Associate dynamic variables with controls/actions for real-time utilization.
:::

Your saved queries will be visible beneath your connector within the Connector Library. 



#### Supported Actions

| Action             | Description                                                 |
|---------------------|-------------------------------------------------------------|
| listdir             | List files and directories within a specified path.         |
| deletefile         | Delete a file from the remote directory.                      |
| changemode     | Change the permissions (mode) of a file.               |
| mkdir                 | Create a new directory in the remote location.          |
| rmdir                  | Remove an empty directory from the remote location. |
| exists                  | Check if a file or directory exists in the remote location. |
| stats                    | Retrieve file or directory stats (size, timestamps, etc.). |
| rename               | Rename a file or directory in the remote location.       |
| downloadfile    | Download a file from the remote location.                |
| uploadfile        | Upload a local file to the remote location.                |

