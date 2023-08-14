---
sidebar_position: 3
---

# Deploy on Google Cloud Compute Engine

Follow the instaructions in this guide to setup DronaHQ in self hosted environment on Google Cloud Compute Engine virtual machine.

### Prerequisite

To deploy DronaHQ on Amazon EC2, you shoul have:
- `DronaHQ License Key`, which you can get from DronaHQ [Self Hosted Portal](https://studio.dronahq.com/selfhosted/login).
- Basic understanding of `GCP` and `Compute Engine Virtual Machine`.
- Working [Google Cloud Platform account](https://console.cloud.google.com).

### 1. Create VM instance





---

1. On GCP Dashboard, Click the Compute Engine Resource and select VM Instances
1. select ‘Create Instance’ from the top menu
1. Create a new VM to these Specs
    - Ubuntu Operating System Version 20.04 LTS or higher
    - Storage Size 60 GB or higher
    - Ram 4 GB or Higher (e2-medium)
    - Optionally add Labels (eg app = dronahq)
1. Create Instance
1. Navigate via search to the VPC Network Firewall settings and be sure to add the following ports set to`0.0.0.0/0` and `::/0`
    - `80` (HTTP)
    - `443` (HTTPS)
    - `22` (SSH)
    - `8080` (DronaHQ access in browser)
1. If you're connecting to an internal database, be sure to whitelist the VPC’s ip address in your DB
1. SSH into your instance, or use the Google SSH Button to open a VM Terminal in a browser window.
1. Run Command `git clone https://github.com/dronahq/self-hosted.git`
1. Run Command `cd self-hosted`
1. Edit the Docker-Compose file using VIM (or other text editor) to specify your desired version number of DronaHQ. To do this, replace `X.Y.Z` in `image:dronahq/self-hosted:X.Y.Z` with your desired version. See [Select a DronaHQ version number](#select-a-dronahq-version-number) to help you choose a version.
1. Run the command `git clone https://github.com/dronahq/self-hosted.git`.
1. Run the command `cd self-hosted` to enter the cloned repository's directory.
1. Edit the `docker-compose.yml` file using VIM (or other text editor) to set the version of DronaHQ you want to install. To do this, replace `X.Y.Z` in `image:dronahq/self-hosted:X.Y.Z` with your desired version. See [Select a DronaHQ version number](#select-a-dronahq-version-number) to help you choose a version.
1. Run `./install_sh.sh` to install  Docker and Docker Compose.
1. In your `.env` (this file is only created after running `./install_sh.sh`) add the following:

   ```docker
   # License key granted to you by DronaHQ
   LICENSE_KEY=YOUR_LICENSE_KEYs
   ```

1. Run `sudo docker-compose up -d` to start the DronaHQ server.
1. Run `sudo docker-compose ps` to make sure all the containers are up and running.
1. Navigate to your server's IP address in a web browser. DronaHQ should now be running on port `8080`.
1. Click Activate, since we're starting from a clean slate. The first user to create an account on an instance becomes the administrator.

---

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
/bin/bash -c "$(curl -fsSL https://license.dronahq.com/self-hosted/update_resources.sh)"
```

### 6. Setup Externalize databases

For deployment on `AWS EC2`, it is mandatory to setup external databases for both MYSQL and MONGODB. 

Please follow our guide on [Configure external databases](./../configure_external_databases.md){:target="_blank"}.

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

If you dont have DronaHQ license key for self hosted, you can [sign up](https://www.dronahq.com/self-hosted-signup/) for DrobaHQ self hosted and get your license key by logging in to [self-hosted portal](https://studio.dronahq.com/selfhosted/login).

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
BUILDER_URL='http://10.100.3.21'
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
You can also checkout other optional [Environment Variables](./../environment_variables.md), which can enable advance options for you to use DronaHQ Self Hosted.

### 8. Restart DronaHQ

You can apply all new changes in configuration, and restart DronaHQ simply by running following command.

```shell
sudo docker-compose up -d
```

### 9. Verify that containers are running

You can use following comand to check running docker containers.

```shell
sudo docker-compose ps
```

It should look something like this

![sudo docker-compose ps](./sudo-docker-compose-ps.png "sudo docker-compose ps")

#### Hurray !!! Now you have working self hosted DronaHQ.
