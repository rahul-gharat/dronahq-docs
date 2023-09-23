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

### On the Self-hosted Version

To generate an SSH key in the self-hosted version, follow these steps:

1. Go to `Account Settings > Integrations`.

2. Under `SSH Key Management`, click `Add Key` to create a new key. Provide a name and click `Generate Key & Save`.

You can also edit the SSH key name once it's generated.

## Editing SSH Keys

Editing SSH keys can be helpful when you need to make changes or updates.

You also have the option to edit the name of the SSH key once it's generated. Simply click on the three dots for options and select `Edit`. Make the desired changes to the Key Name and click `Save`.

<figure>
  <Thumbnail src="/img/advanced-concepts/connecting-via-ssh-keys/edit-key.png" alt="Edit SSH Key" />
  <figcaption align = "center"><i>Edit SSH Key</i></figcaption>
</figure>

## Using Generated SSH Keys

Using SSH keys for secure access to various services is a crucial part of the process. Here are some scenarios for using SSH keys:

### SSH Keys for Git Sync

Git Sync is a powerful feature that enables efficient version control for your apps on DronaHQ.

After generating your SSH key, you can add it to various Git service providers' settings to connect your app to a Git repository. Follow these steps:

1. Open your app and go to `Publish > Git Operation`.

2. In the `Configure` window, paste the SSH URL of the repository. Toggle on the `Use existing key` option and select the SSH key you generated earlier from SSH Management.

3. Click on `Test & Save Connection` to establish a successful connection.

<figure>
  <Thumbnail src="/img/git-sync/dronahq-url.png" alt="Configuration window" />
  <figcaption align = "center"><i>Configuration window</i></figcaption>
</figure>

:::tip 
A single generated SSH key can be used across different repositories, Git service providers, apps, and even by different users.
:::

You can know more about Git Sync [here](./git-sync).


### SSH Keys for SSH Tunneling

SSH tunneling is a secure method of transporting data over an encrypted SSH connection, making it invaluable for accessing databases hosted within private networks. 

To configure SSH tunneling in DronaHQ, you can leverage your SSH keys for secure connections. Ensure that your SSH keys are available in your DronaHQ account for this purpose. [Click here](../datasource-concepts/ssh-tunneling) to learn more about SSH tunneling.

### SSH Keys for Shell Script Connector

The Shell Script connector empowers you to execute shell commands on remote servers through SSH connections. 

To utilize SSH keys with the Shell Script Connector, make sure you have SSH keys associated with your DronaHQ account. You can then configure your Shell Script connector to use these keys for secure and authenticated connections. 

[Redirect here](../reference/connectors/shell-script) to dive deeper into the Shell Script Connector.

