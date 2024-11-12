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



To generate an SSH key in the cloud version, follow these steps:

1. Go to `Account Settings > SSH Key Management`.

2. Click on `Add Key` to create a new key. Provide a name, passphrase (if needed), select the key pair type (RSA or ED25519), and click `Generate Key & Save`.


:::tip

You also have the option to add an existing SSH key from your system. Simply toggle the Import Key option and choose a `.pem` file from the system.

<figure>
  <Thumbnail src="/img/advanced-concepts/connecting-via-ssh-keys/import-key.png" alt="Import SSH Key" />
  <figcaption align = "center"><i>Import SSH Key</i></figcaption>
</figure>

:::

## Setting Up SSH Key Access on Host Server

To successfully establish a connection between DronaHQ and your host server, a user named `dronahq` needs to be created on the server. Additionally, the `public SSH key` should be added to the host server's `authorized_keys` file. The process differs slightly for Ubuntu and Windows Server. Below are the steps for Ubuntu.

### 1. Create `dronahq` User on Ubuntu

Run the following command to add a new user named `dronahq` without a password:

```bash
sudo adduser dronahq --disabled-password
```

Output:

```
Adding user `dronahq` ...
Adding new group `dronahq` (1003) ...
Adding new user `dronahq` (1002) with group `dronahq` ...
Creating home directory `/home/dronahq` ...
Copying files from `/etc/skel` ...
Changing the user information for `dronahq`
Enter the new value, or press ENTER for the default
Full Name :
Room Number :
Work Phone :
Home Phone :
Other :
Is the information correct? [Y/n] y
```
### 2. Add Public Key to `authorized_keys`

To enable SSH key-based authentication for the `dronahq` user, follow the steps below:

#### Step 2.1: Switch to Root User

```bash
sudo su
```

#### Step 2.2: Create the `.ssh` Directory for `dronahq` User

```bash
mkdir -p /home/dronahq/.ssh
```

#### Step 2.3: Add DronaHQ Public Key to `authorized_keys`

1. Open the `authorized_keys` file using a text editor (e.g., `vi` or `nano`):

   ```bash
   vi /home/dronahq/.ssh/authorized_keys
   ```

2. Copy the public key from the `Manage SSH Key` section in your DronaHQ account.
<figure>
  <Thumbnail src="/img/advanced-concepts/connecting-via-ssh-keys/public.png" alt="Copy the public key." />
  <figcaption align = "center"><i>Copy the public key.</i></figcaption>
</figure>

3. Paste the copied key into the `authorized_keys` file and save the changes.

#### Step 2.4: Set Appropriate File Permissions

```bash
chmod 644 /home/dronahq/.ssh/authorized_keys
```

#### Step 2.5: Change Ownership of the `authorized_keys` File

```bash
chown dronahq:dronahq /home/dronahq/.ssh/authorized_keys
```

This completes the setup of the SSH key for the `dronahq` user, allowing secure, key-based access to the server.


## Using Generated SSH Keys

Using SSH keys for secure access to various services is a crucial part of the process. Here are some scenarios for using SSH keys:

### SSH Keys for Git Sync (Self-Hosted) - Depricated


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

