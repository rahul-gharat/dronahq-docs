---
sidebar_position: 97
---

# Configure External Databases

### Configure and migrate databases to an external ones.

In Docker based self-hosted setup, user information, apps information, documents and other resources are stored in a [MYSQL](https://hub.docker.com/layers/library/mysql/oracle/images/sha256-4c718aac52c18fc65ff75012f486957c0215247592b36a263024bf458d92d51f?context=explore) and [MONGODB](https://hub.docker.com/layers/library/mongo/5.0.11/images/sha256-bd481f6d8847e307f512bb25d8834457e29f36c0fe1987b68db73c803d292d3a?context=explore) container with mapped [persistent storage volume](https://docs.docker.com/storage/volumes/). For production use cases, you should host these databases on external managed databases services. managed databases are more maintainable, scalable and reliable.

If you are installing DronaHQ self hosted on Kubernetes platform, then you should externalize your database. DronaHQ don't provide containerized databases support by default for installation on kubernetes cluster.

:::caution User rights and permissions
Database user you will be using to import/export database files must have superuser/admin privileges to that database. These are necessary for some essential operations in database like downloading/installing updates.
:::

Use following steps to set up external databases for docker based installations.

### Prerequisite

To import data into your external database, you need to install database clients on your machine.

#### 1. MYSQL Client

<!-- check [official documentation](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html) for installing MYSQL shell. -->

1.1 Update package information for the MySQL APT repository

```shell
sudo apt-get update
```

1.2 Install [mysql client package](https://packages.ubuntu.com/focal/mysql-client-core-8.0)

```shell
sudo apt install mysql-client-core-8.0
```

1.3 check that client is properly installed

```shell
mysql --version
```

you will get output for above command as follows

```shell
mysql  Ver 8.0.33-0ubuntu0.22.04.4 for Linux on x86_64 ((Ubuntu))
```

#### 2. MongoDB client and developer tools

1.1 Download mongo shell package

```shell
wget https://downloads.mongodb.com/compass/mongodb-mongosh_1.10.1_amd64.deb
```

1.2 Install with `dpkg` and remove downloaded file

```shell
sudo dpkg -i mongodb-mongosh_1.10.1_amd64.deb && rm mongodb-mongosh_1.10.1_amd64.deb
```

1.3 Download mongo tools. Don't forget to update your linux distribution in command.

```shell
wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2204-x86_64-100.7.4.deb
```

1.4 Install with `dpkg` and remove package

```shell
sudo dpkg -i mongodb-database-tools-ubuntu2204-x86_64-100.7.4.deb \
&& rm mongodb-database-tools-ubuntu2204-x86_64-100.7.4.deb
```

1.5 Check  if mongodb and mongodb tools are installed properly

```shell
mongosh --version && mongorestore --version
```

output:
```
1.10.1
mongorestore version: 100.7.4
git version: fb74684da15f56d40231ab04ded86c71c1d8f37c
Go version: go1.19.11
   os: linux
   arch: amd64
   compiler: gc
```

## 1. Preparing data and files for migration

DronaHQ uses MYSQL and MONGODB together to store your meta information and data. Using both technology helps DronaHQ become faster and reliable.

### 1.1 Exporting MYSQL data

There are two possible ways by which you can export MYSQL data.

#### a. Export data from MYSQL container

To export data from MYSQL container, run the following command in DronaHQ installation directory. Use this option, if you want to migrate your MYSQL containerized database to external database.

```shell
sudo docker compose exec -T mysqldb sh -c 'exec mysqldump -u <%user%> --password=<%password%> \
--databases <%database_name%> --add-drop-database --routines --triggers --events --single-transaction' > mysql-init.sql && sed -i 's/ DEFINER=[^ |\*]*//g' mysql-init.sql
```
Replace variables encapsulated in `<% variable %>` with actual value. 

#### b. Download from DronaHQ repository

To download already exported data from DronaHQ repository, run the following command. Use this option if you are setting new up installation.

```shell
curl -L -O https://license.dronahq.com/self-hosted/master/init/mysql-init.sql
```

### 1.2 Exporting MONGODB data

There are two possible ways by which you can export MONGODB data.

#### a. Export data from MONGODB container

To export data from MONGODB container, run the following command in DronaHQ installation directory. Use this option, if you want to migrate your MONGODB containerized database to external database.

```shell
sudo docker compose exec -T mongodb sh -c 'mongodump -d <%database_name %> -u <%user%> -p <%password%> --authenticationDatabase admin  --archive' > mongo-init.dump
```

Replace variables encapsulated in `<%variable%>` with actual value.

#### b. Download from DronaHQ repository

To download already exported data from DronaHQ repository, run the following command. Use this option if you are setting new up installation.

```shell
curl -L -O https://license.dronahq.com/self-hosted/master/init/mongo-init.dump
```

## 2. Migrate data to external hosted database

Next step is to restore your data into external databases. You can use database client present in your running database containers or optionally you can install database client for MYSQL and MONGODB on your host machine.

:::tip
While running following shell commands for restoring data on external database, feel free to use command attributes and options as per requirement and database specification.
:::

### 2.1 Restore data on external MYSQL database.

#### a. Using running MYSQL container

Run the following command in your DronaHQ installation directory to restore data on external database.

```shell
sudo docker compose exec -T mysqldb sh -c 'mysql --host=<%host%> --user=<%user%> --password=<%password%>  <%database_name%>' < mysql-init.sql
```

Replace variables encapsulated in `<% variable %>` with actual value.

#### b. Using installed client on host machine

Run following command to restore data on external database

```shell
mysql --host=<%host%> --user=<%user%> --password=<%password%> <%database_name%> < mysql-init.sql
```

Replace variables encapsulated in `<%variable%>` with actual value.

### 2.2 Restore data on external MONGODB database.

#### a. Using running MONGODB container

Run the following command in your DronaHQ installation directory to restore data on external database.

```shell
sudo docker compose exec -T mongodb sh -c 'mongorestore --host=localhost -u <%user%> -p <%password%> --nsFrom="dronahq_internal.*"  --nsTo="<%dbname%>.*" --authenticationDatabase admin --archive' < mongo-init.dump
```

Replace variables encapsulated in `<%variable%>` with actual value.

#### b. Using installed client on host machine

Run following command to restore data on external database

```shell
mongorestore --host=<% host %> -u <%user%> -p <%password%> --nsFrom="dronahq_internal.*"  --nsTo="<%dbname%>.*" --authenticationDatabase admin --archive=mongo-init.dump
```

Replace variables encapsulated in `<% variable %>` with actual value.

*Note: value provided for --nsFrom refers to default/previous database name or name of the the database using which dump is taken.*

## 3. Create application user in external database

Considering importance of data security, privacy, and integrity, DronaHQ recommends creating and using application user with limited privileges defined for required scope.

You can create application user in external database using following commands.

### 3.1 Create application user in MYSQL external database

Replace variables encapsulated in `<%variable%>` with actual value.

#### i. Create database user 

```shell
mysql -h<%host%> -u<%user%> -p<%password%> -e "CREATE USER '<%application-user%>'@'%' IDENTIFIED BY '<%application-password%>';"
```

#### ii. Grant privileges to new user

```shell
mysql -h<%host%> -u<%user%> -p<%password%> -e "GRANT ALL PRIVILEGES ON *.* TO '<%application-user%>'@'%';"
```

#### iii. Flush privileges for newly assigned privileges to take effect immediately

```shell
mysql -h<%host%> -u<%user%> -p<%password%> -e "FLUSH PRIVILEGES;"
```

### 3.2 Create application user in MONGODB external database

To create application user in external mongodb database, run following command.

Replace variables encapsulated in `<%variable%>` with actual value.

```shell
mongosh --host <%host%> --username <%user%>  --password <%password%> <<EOF
use admin
db.createUser({
  user: '<% application-user %>',
  pwd: '<% application-password %>',
  roles: [{
    role: "userAdminAnyDatabase",
    db: "admin"
  }, {
    role: 'readWrite',
    db: '<% database name %>'
  }]
})
EOF
```

## 4. Configure DronaHQ to use external databases

The `dronahq.env` file defined few environment variables. Using these variables DronaHQ can connect to external databases.
Find following variables in `dronahq.env` and update them with external database credentials.

```shell
# MYSQL Credentials
MYSQL_HOST=<%host%>
MYSQL_PORT=3306
MYSQL_USER=<%application-user%>
MYSQL_PASSWORD=<%application-password%>

# MONGODB credentials
MONGODB_HOST=<%host%>
MONGODB_PORT=27017
MONGODB_USER=<%application-user%>
MONGODB_PASSWORD=<%application-password%>
```

Update following variables with appropriate values and save the file.

## 5. Restart DronaHQ server

After modifying any configuration, restart is must for changes to take effect.

you can restart DronaHQ using following command

```bash
sudo docker compose up -d
```