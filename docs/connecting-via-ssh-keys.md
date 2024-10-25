---
sidebar_position: 61
title: Connecting via SSH Keys
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';



SSH keys are a powerful authentication method for secure access to various services, including Git repositories, databases, and remote servers. In this guide, we'll explore how to generate, edit, and use SSH keys within DronaHQ.

## Generating and Managing SSH Keys

Generating SSH keys and managing them efficiently is crucial for secure and seamless access to various services.

### On the Cloud

To generate an SSH key in the cloud version, follow these steps:

1. Go to `Account Settings > SSH Key Management`.

2. Click on `Add Key` to create a new key. Provide a name, passphrase (if needed), select the key pair type (RSA or ED25519), and click `Generate Key & Save`.

:::info
DronaHQ will use `DronaHQ` as default paraphrase if not provided from the user while generating SSH Key.
:::

:::tip

You also have the option to add an existing SSH key from your system. Simply toggle the Import Key option and choose a `.pem` file from the system.

<figure>
  <Thumbnail src="/img/advanced-concepts/connecting-via-ssh-keys/import-key.png" alt="Import SSH Key" />
  <figcaption align = "center"><i>Import SSH Key</i></figcaption>
</figure>

:::


## Editing SSH Keys

Editing SSH keys can be helpful when you need to make changes or updates.

You also have the option to edit the name of the SSH key once it's generated. Simply click on the three dots for options and select `Edit`. Make the desired changes to the Key Name and click `Save`.

<figure>
  <Thumbnail src="/img/advanced-concepts/connecting-via-ssh-keys/edit-key.png" alt="Edit SSH Key" />
  <figcaption align = "center"><i>Edit SSH Key</i></figcaption>
</figure>

## Using Generated SSH Keys

Using SSH keys for secure access to various services is a crucial part of the process. Here are some scenarios for using SSH keys:

### SSH Keys for Git Sync (Self-Hosted)


To enable Git Sync in self-hosted DronaHQ instances, you'll need to generate an SSH key and configure specific environment variables for secure and efficient version control. Follow these steps:

#### 1. Generate an SSH Key in DronaHQ
Each self-hosted instance requires an SSH key for secure connections with your Git repository:
1. Navigate to` Profile > Account Settings > Integrations > SSH Key Management`.
2. Click `+ Add Key`, provide a friendly name, and select Generate & Save Key.
3. Make a note of the friendly name and the generated public key, as these will be needed for configuring environment variables and setting up the Git repository.

#### 2. Configure Git Sync Environment Variables
You must set the following environment variable to enable Git Sync:

| Environment Variable       | Description                                                                                       |
|----------------------------|---------------------------------------------------------------------------------------------------|
| `GIT_SYNC_IS_GLOBAL`       | Specifies if the Global Git Sync feature should be enabled (default is `false`).                  |

:::caution
 Ensure that the name used in the environment variable matches the SSH key’s friendly name exactly for a successful connection.
:::

:::tip 
A single generated SSH key can be used across different repositories, Git service providers, apps, and even by different users.
:::

For further details, please refer to the [DronaHQ Git Sync Documentation](https://docs.dronahq.com/git-sync-global/).



### SSH Keys for SSH Tunneling

SSH tunneling is a secure method of transporting data over an encrypted SSH connection, making it invaluable for accessing databases hosted within private networks. 

To configure SSH tunneling in DronaHQ, you can leverage your SSH keys for secure connections. Ensure that your SSH keys are available in your DronaHQ account for this purpose. [Click here](/datasource-concepts/ssh-tunneling) to learn more about SSH tunneling.

### SSH Keys for Shell Script Connector

The Shell Script connector empowers you to execute shell commands on remote servers through SSH connections. 

To utilize SSH keys with the Shell Script Connector, make sure you have SSH keys associated with your DronaHQ account. You can then configure your Shell Script connector to use these keys for secure and authenticated connections. 

[Redirect here](/reference/connectors/shell-script) to dive deeper into the Shell Script Connector.

