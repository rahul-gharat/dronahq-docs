---
sidebar_position: 4
---

# Deploy on Azure Virtual Machine

Follow the instructions in this guide to setup DronaHQ in self hosted environment on Microsoft Azure Virtual Machine.

### Prerequisite

To deploy DronaHQ on Azure Virtual Machine, you should have:
- `DronaHQ License Key`, which you can get from DronaHQ [Self Hosted Portal](https://studio.dronahq.com/selfhosted/login).
- Basic understanding of `Microsft Azure` and `Azure Virtual Machine`.
- Working [Microsoft Azure](https://azure.microsoft.com/en-in/get-started/azure-portal) account.

Following are some references, which can help you sail through Azure Virtual Machine.
- [Quickstart: Create a Linux virtual machine in the Azure portal](https://learn.microsoft.com/en-gb/azure/virtual-machines/linux/quick-create-portal?WT.mc_id=UI_empg&tabs=ubuntu)
- [Connect to a Linux VM](https://learn.microsoft.com/en-us/azure/virtual-machines/linux-vm-connect?tabs=Linux)
- [Troubleshoot SSH connections to an Azure Linux VM that fails, errors out, or is refused](https://learn.microsoft.com/en-us/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)

### 1. Create Virtual Machine

1. On Azure [Virtual Machine](https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2FVirtualMachines) portal, Click **Create => Azure virtual machine**.

2. Select or Create Resource group.

3. Name your virtual machine, to identify it later.

4. In `Image` section, select `Ubuntu server` with minimum version `20.04` with `x64` VM architecture.

5. In `size` section, Select appropriate VM configuration as per your requirement. Please make sure that you follow our [minimum requirements](/self-hosted-deployment/requirements.md) guidelines.

6. Select appropriate `Authentication Type`. Choose `Username` for VM and select credentials options.

7. In `Inbound port rules`, select `HTTP(80), HTTPS(443), SSH(22)` to enable use of these ports and protocols.

8. In `Disk` section, select minimum of `60 GiB` of disk space.

9. Optionally you can add some Tags (e.g. `app = dronahq`). This makes it easier to find if you have a lot of instances.

10. You  can leave other options as default.

11. Click on **Review + Create** to check summary of configuration you choose for your instance. If all looks good, click on **Create** to run the instance.

12. If you choose to create new `SSH Key` then, `Generate new key pair` popup will appear. From that you can download your new key and save on your computer at safe place.

13. In few minutes, your instance will be ready to use.

### 2. Connect to your Linux instance using an SSH client

Use the following procedure to connect to your Linux instance using an SSH client. If you receive an error while attempting to connect to your instance, see [Troubleshoot connecting to your instance](https://learn.microsoft.com/en-us/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection).

#### Connect to your instance using SSH

1. In a terminal window, use the ssh command to connect to the instance. You specify the path and file name of the private key (.pem), the user name for your instance, and the public DNS name or IPv6 address for your instance. For more information about how to find the private key, the user name for your instance, and the DNS name or IPv6 address for an instance, see Locate the private key and set permissions and Get information about your instance. To connect to your instance, use one of the following commands.

    - (Public DNS) To connect using your instance's public DNS name, enter the following command.
        ```shell
        ssh -i /path/key-pair-name.pem instance-user-name@instance-public-dns-name
        ```

    - (IPv6) Alternatively, if your instance has an IPv6 address, to connect using your instance's IPv6 address, enter the following command.
        ```shell
        ssh -i /path/key-pair-name.pem instance-user-name@instance-IPv6-address
        ```

    You see a response like the following:
    ```
    The authenticity of host '20.24.83.170 (20.24.83.170)' can't be established.
    ED25519 key fingerprint is SHA256:9adjTqXUisZXGolCYHO8SUPhb8mwmlw08i4Gom8SC7A.
    This key is not known by any other names
    Are you sure you want to continue connecting (yes/no/[fingerprint])?
    ```

2. (Optional) Verify that the fingerprint in the security alert matches the fingerprint that you previously obtained while creating virtual machine. If these fingerprints don't match, someone might be attempting a man-in-the-middle attack. If they match, continue to the next step.

3. Enter `yes`.

    You see a response like the following:
    ```
    Warning: Permanently added '20.24.83.170' (ED25519) to the list of known hosts.
    ```

### 3. Download DronaHQ Self Hosted

There are two ways, you can download DronaHQ Self Hosted.

#### a. Cloning Git repository

To clone from git repository, run following command.

```shell
git clone https://github.com/dronahq/self-hosted.git dronahq-self-hosted
```

Above command will create new folder in your present working directory with name `dronahq-self-hosted`.

#### b. Download and extract compressed package from DronaHQ

To download compressed package from DronaHQ, run following command

```shell
curl -L -fsSL -o ./master.zip "https://license.dronahq.com/self-hosted/master.zip" && unzip master.zip && mv master dronahq-self-hosted
```

### 4. Change working directory

We have to change working directory to `dronahq-self-hosted` for playing with DronaHQ.

Use following command.

```shell
cd dronahq-self-hosted
```

### 5. Update resources

This is recommended step by DronaHQ. Updating your resources periodically will help you stay aligned with DronaHQ.

Run following command

```shell
/bin/bash -c "$(curl -fsSL https://license.dronahq.com/self-hosted/master/update_resources.sh)"
```

### 6. Setup Externalize databases

For deployment on `Azure Virtual Machine`, it is mandatory to setup external databases for both MYSQL and MONGODB. 

Please follow our guide on <a href="/self-hosted-deployment/configure-external-databases/" target="_blank">Configure external databases</a>.

### 6. Setup DronaHQ Environment

:::caution Warning
Running this script will clear your existing installation if you have any. It will setup completely new environment. It will create back of your current environment and storage directory with time stamp followed by file/folder name.
:::

To setup dronahq environment, you have to run `./dronahq_setup` already present in your working directory.

```shell
./dronahq_setup
```

### 7. Update environment variables

DronaHQ writes all configurable environment variables in file `dronahq.env`. Please make sure you have all mandatory variables are in place.

#### i. `LICENSE_KEY`
`LICENSE_KEY` is one of the mandatory and essential environment variable. please verify that you have it in `dronahq.env`.
If not you can add this variable. Following is the example of how this variable should look like in environment file.

```shell
LICENSE_KEY='DRONAHQ-LICENSE-KEY'
```

If you don't have DronaHQ license key for self hosted, you can [sign up](https://www.dronahq.com/self-hosted-signup/) for DronaHQ self hosted and get your license key by logging in to [self-hosted portal](https://studio.dronahq.com/selfhosted/login).

#### ii. `BUILDER_URL`

This variable specifies how do yo want to access DronaHQ.
- Protocol [ http/ https]
- Access domain [ Localhost/ IP address/ Domain Name] 

**Example 1**. If you are using DronaHQ on local machine.

```shell
BULDER_URL='http://localhost'
```

**Example 2**. If you have configured DronaHQ on server and want to use it with server's public IP address.

```shell
# replace your ip address here
BUILDER_URL='http://20.24.83.170'
```

**Example 3**. If you have mapped your domain name to server's IP address.

```shell
# replace your domain name
BUILDER_URL='http://dronahq.example.com'
```

#### iii. Database configuration variables

Configure variables for external MYSQL credentials

`MYSQL_HOST`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_PORT`

```shell
MYSQL_HOST='mysql.example.com'
MYSQL_USER='dronahq'
MYSQL_PASSWORD='secret-password'
MYSQL_PORT='3306'
```
Configure variables for external MONGODB credentials

`MONGODB_HOST`, `MONGODB_USER`, `MONGODB_PASSWORD`, `MONGODB_PORT`

```shell
MONGODB_HOST='mongodb.example.com'
MONGODB_USER='dronahq'
MONGODB_PASSWORD='secret-password'
MONGODB_PORT='27017'
```

#### iv. Optional environment variables
You can also checkout other optional [Environment Variables](/self-hosted-deployment/environment-variables.md), which can enable advance options for you to use DronaHQ Self Hosted.

### 8. Restart DronaHQ

You can apply all new changes in configuration, and restart DronaHQ simply by running following command.

```shell
sudo docker-compose up -d
```

### 9. Verify that containers are running

You can use following command to check running docker containers.

```shell
sudo docker-compose ps
```

It should look something like this

![sudo docker-compose ps](./sudo-docker-compose-ps.png "sudo docker-compose ps")

#### Hurray !!! Now you have working self hosted DronaHQ.
