---
sidebar_position: 3
---

# Deploy on Google Cloud Compute Engine

Follow the instructions in this guide to setup DronaHQ in self hosted environment on Google Cloud Compute Engine virtual machine.

### Prerequisite

To deploy DronaHQ on Google Cloud Compute Engine, you should have:
- `DronaHQ License Key`, which you can get from DronaHQ [Self Hosted Portal](https://studio.dronahq.com/selfhosted/login).
- Basic understanding of `GCP` and `Compute Engine Virtual Machine`.
- Working [Google Cloud Platform account](https://console.cloud.google.com).

Following are some references, which can help you sail through GCP Virtual Machine.
- [Create and start a VM instance](https://cloud.google.com/compute/docs/instances/create-start-instance)
- [Connect to Linux VMs](https://cloud.google.com/compute/docs/connect/standard-ssh)
- [Troubleshooting SSH errors](https://cloud.google.com/compute/docs/troubleshooting/troubleshooting-ssh-errors)

### 1. Create VM instance

1. On GCP [Compute engine dashboard](https://console.cloud.google.com/compute/instances), Click on **CREATE INSTANCE**.

2. Optionally you can add some Labels and Tags (e.g. `app = dronahq`) in `MANAGE TAGS AND LABELS` section. This makes it easier to find if you have a lot of instances.

3. Name your instance, to identify it later.

4. Select appropriate VM configuration as per your requirement. Please make sure that you follow our [minimum requirements](/self-hosted-deployment/requirements.md) guidelines.

5. In `Boot Disk` section, Modify storage size to minimum of `60 GiB`. In operating system, Select `Ubuntu` AMI with ubuntu version `20.04` or higher and `64-bit (x84)` architecture.

6. In `Firewall`, allow `http` and `https` traffic.

7. In security section, you can add manually generated SSH keys. By default, when you connect to a VM using this console or gcloud, your SSH keys are generated automatically. [Learn more](https://cloud.google.com/compute/docs/instances/ssh)

8. click on **CREATE** button to start your instance.

### 2. Connect to your Linux instance using an SSH client

Use the following procedure to connect to your Linux instance using an SSH client. If you receive an error while attempting to connect to your instance, see [Troubleshoot connecting to your instance](https://cloud.google.com/compute/docs/troubleshooting/troubleshooting-ssh-errors).

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
    The authenticity of host '34.105.89.192 (34.105.89.192)' can't be established.
    ED25519 key fingerprint is SHA256:gdEtnJ+kLJ1MzPnfCJNfdrstN5xb6s01lLlU1Xtz62g.
    This key is not known by any other names
    Are you sure you want to continue connecting (yes/no/[fingerprint])?
    ```

2. (Optional) Verify that the fingerprint in the security alert matches the fingerprint that you previously obtained while creating virtual machine. If these fingerprints don't match, someone might be attempting a man-in-the-middle attack. If they match, continue to the next step.

3. Enter `yes`.

    You see a response like the following:
    ```
    Warning: Permanently added '34.105.89.192' (ED25519) to the list of known hosts.
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

For deployment on `GCP Virtual machine`, it is mandatory to setup external databases for both MYSQL and MONGODB. 

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
BUILDER_URL='http://34.105.89.192'
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

#### iv. Other environment variables
You can also checkout other [Environment Variables](/self-hosted-deployment/environment-variables.md), which can enable advance options for you to use DronaHQ Self Hosted.

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
