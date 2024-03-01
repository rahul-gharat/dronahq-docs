---
sidebar_position: 98
---

import Thumbnail from '@site/src/components/Thumbnail';

# Environment Variables

Environment variables for Self-hosted DronaHQ deployments.

Environment variables control or override certain functions and characteristics of [Self-hosted DronaHQ](https://github.com/dronahq/self-hosted) instances. Some DronaHQ features require you to set environment variables.

You should only configure environment variables when needed. You must restart your instance after setting any variables for them to take effect.

## General
General environment variables available for use with Self-hosted DronaHQ deployments.

#### `BUILDER_URL` (deprecated)

The full URL of your DronaHQ deployment for accessing creators portal, End-user portal, user invitations and password resets. This also needs to be set if you dynamically set callback URLs on protected resources.

    BUILDER_URL='https://dronahq.example.com'

If unset, DronaHQ determine the base domain automatically from your local machine with port number.

    BUILDER_URL='http://localhost:8080'

You can use `DOMAIN` & `SECURE_HTTP` variable pair instead of `BUILDER_URL`

#### `DOMAIN`
This is your domain name or DNS owned by you, which you can set to your self hosted installations.

    DOMAIN='dronahq.example.com'

#### `SECURE_HTTP`

This variable specifies you want to use your self hosted installation over SSL. 
If set `true`, system will access above `DOMAIN` with `https` protocol
If not set, system will access above `DOMAIN` with `http` protocol. with this, you may not be able to access resources with `SSL` enabled.

    SECURE_HTTP='false'

#### `PATHNAME`

If you are deploying DronaHQ with custom webserver on `sub-path`, then this option will be useful.

Example.
```
https://dronahq.example.com/studio
```

In this variable you only have to provide sub-path name following forward slash (`/`)

```
PATHNAME='/studio'
```

#### `LICENSE_KEY`
This is a unique key assigned to you by DronaHQ. you can get by logging in to [Self-Hosted Portal](https://studio.dronahq.com/selfhosted/login).

#### `DRONAHQ_LICENSE_URL` (optional)

For activation and licensing of your self hosted installation, DronaHQ needs to communicate with its in house licensing server hosted on `license.dronahq.com` with public IP as `52.203.193.48`. If you are working in closed intranet environment then you need to whitelist this domain for `outbound traffic`. Optionally you can set-up a proxy to DronaHQ's licensing system and update your proxy url here.

    DRONAHQ_LICENSE_URL='https://license.dronahq.com'

## Connectivity to MySQL (for DronaHQ)

Provide your database credentials for DronaHQ self hosted. Your installation will access this database and read/write into it. to store information about resources used for building apps and some meta information.

#### `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`

If you are using Docker container for mysql, then you should set these variables as follows

    MYSQL_HOST='dronahq-self-hosted-mysqldb'
    MYSQL_USER='<application user>'
    MYSQL_PASSWORD='<password>'
    MYSQL_PORT='3306'

if you are using RDS or any other managed MySQL service then you can set variables accordingly.

### Connectivity to MySQL (for Audit Logs - optional)
#### `AUDIT_LOG_MYSQL_HOST`, `AUDIT_LOG_MYSQL_PORT`, `AUDIT_LOG_MYSQL_USER`, `AUDIT_LOG_MYSQL_PASSWORD`

This are optional variables. If not set, DronaHQ will use same credentials you provided in above variables.

If you are using Docker container for mysql, then you should set these variables as follows

    AUDIT_LOG_MYSQL_HOST='dronahq-self-hosted-mysqldb'
    AUDIT_LOG_MYSQL_USER='<application user>'
    AUDIT_LOG_MYSQL_PASSWORD='<password>'
    AUDIT_LOG_MYSQL_PORT='3306'

if you are using RDS or any other managed MySQL service then you can set variables accordingly.

## Connectivity to MongoDB
#### `MONGODB_HOST`, `MONGODB_PORT`, `MONGODB_USER`, `MONGODB_PASSWORD`

If you are using Docker container for MongoDB, then you should set these variables as follows

    MONGODB_HOST='dronahq-self-hosted-mongodb'
    MONGODB_USER='<application user>'
    MONGODB_PASSWORD='<password>'
    MONGODB_PORT='27017'

if you are using DocumentDB or any other managed MongoDB service then you can set variables accordingly.

#### `MONGODB_PROTOCOL`

You can use mongodb with `mongodb` or `mongodb+srv` protocol. In normal installations we use `mongodb` as a protocol which is default value for this option. `mongo+srv` is useful we want to connect mongodb in cluster or replicaset configuration.

```
MONGODB_PROTOCOL='mongodb'
```

#### `MONGODB_PARAMS`

Mongodb parameters are extra options or settings we use with mongodb for advanced functionality. We write params as `url search params` format.

Example.
```
MONGODB_PARAMS='ssl=true&retryWrites=false'
```

#### `MONGODB_TLS`

Specifies whether TLS is required for connections to the server.

```
MONGODB_TLS='true'
```

#### `MONGODB_CA_CERT_DIR`

Specifies the path to a file with either a single or bundle of certificate authorities to trust when making a TLS connection.

```
MONGODB_CA_CERT_DIR='/private/global.bundle.pem'
```

#### `MONGODB_CONNECTION_STRING`

This is alternate way for providing mongodb credentials. Instead of providing credentials separately, you can provide it in single connection string
```
MONGODB_CONNECTION_STRING='mongodb://username:password@prod.mongodb.domain.com?ssl=true&retryWrites=false'
```


## File Repository

DronaHQ needs file storage to store files uploaded from apps and resources used in application. Also, when you publish your application, DronaHQ upload compressed files for your application version and serve it from same repository.

#### `FILE_UPLOAD_TYPE`

DronaHQ supports following options for storing your files.

- `repository`: Use in-built 'Local file repository'
- `aws`: Use AWS S3 as a file storage
- `azure`: Use Azure Storage Container as a file storage
- `gcloud`: Use Google Cloud Storage as a file storage

if unset, 'Local file repository' will be used.

    FILE_UPLOAD_TYPE='repository'

### Local file repository configurations
To use DronaHQ managed file repository, you  need to set `FILE_UPLOAD_TYPE` as `repository` in environment variables.

    FILE_UPLOAD_TYPE='repository'

#### `FILEREPOSITORY_STORAGE_LOCATION`
By default this is working directory for your installation. You can configure this location.

    FILEREPOSITORY_STORAGE_LOCATION=process.cwd()

#### `FILEREPOSITORY_STORAGE_PREFIX`
Prefix is like a folder name. This will create a folder inside `FILEREPOSITORY_STORAGE_LOCATION`

    FILEREPOSITORY_STORAGE_PREFIX='files'

### Amazon Simple Storage Service (S3) configuration
You can use Amazon S3 as a File storage with DronaHQ. DronaHQ will upload your uploaded files and other resources. Also your published applications will get served from AWS S3.

To use Amazon Simple Storage Service, you need to set following variables.

    FILE_UPLOAD_TYPE='aws'

#### `AWS_S3_BUCKET_NAME`
This is your Bucket, in which you want to store you files.

#### `AWS_S3_REGION`
This is your AWS region in which bucked it hosted/created.

#### `AWS_S3_ACCESS_KEY_ID`, `AWS_S3_ACCESS_KEY_SECRET`
`AccessKeyId` and `AccessKeySecret` is required to access your bucket and objects inside bucket.
It is recommended that you provide complete read/write access of your bucket to this key pair.

### Azure Storage Container configuration (Beta)

You can use Azure storage container as a File storage with DronaHQ. DronaHQ will upload your uploaded files and other resources. Also your published applications will get served from Azure storage container.

To use Azure Storage Container, you need to set following variables.

    FILE_UPLOAD_TYPE='azure'

#### `AZURE_STORAGE_ACCOUNT_NAME`
This is your Azure storage account name under which you have created your storage container.

#### `AZURE_STORAGE_ACCOUNT_KEY`
This is a secret key for your storage account. This key should have required permissions to read and write inside your storage container.

#### `AZURE_STORAGE_CONTAINER_NAME`
This is a container inside which DronaHQ will be uploading some resources and files uploaded by your application. Also this container will server some resources for your application.

### Google Cloud Storage configuration (Beta)

You can use Google Cloud Storage as a File storage with DronaHQ. DronaHQ will upload your uploaded files and other resources. Also your published applications will get served from Google Cloud Storage.

To use Azure Storage Container, you need to set following variables.

    FILE_UPLOAD_TYPE='gcloud'

#### `GCLOUD_STORAGE_PROJECT_ID`
This is id of your Google cloud project under which you have created your storage bucket.

#### `GCLOUD_STORAGE_SERVICE_ACCOUNT_KEY_FILE_PATH`
This is a your Google cloud service account's key file path inside your container or mapped volume. This key should have required permissions to read and write inside your storage container.

#### `GCLOUD_STORAGE_BUCKET_NAME`
This is a storage bucket inside which DronaHQ will be uploading some resources and files uploaded by your application. Also this container will server some resources for your application.

## Automation

To streamline automation tasks on AWS, you'll be leveraging two core AWS services: [`Lambda`](https://docs.aws.amazon.com/lambda/) and [`EventBridge`](https://docs.aws.amazon.com/eventbridge/). Before initiating any automation procedures, ensure the correct configuration of the following environment variables:
```shell
    RUN_AUTOMATION_ON_AWS='true'
```
To interact with Lambda and EventBridge seamlessly, you need to set up the appropriate credentials:

#### `AWS_ACCESS_KEY_ID`, `AWS_ACCESS_KEY_SECRET`
These are essential for accessing your Lambda functions and EventBridge scheduler. It's advisable to grant complete read/write access to the scheduler using these credentials..

#### `AWS_REGION`
Specify the AWS region where your Lambda functions and EventBridge scheduler are hosted or deployed.

### AWS Lambda Configuration
Configure the following variables related to AWS Lambda:

#### `AUTOMATION_AWS_LAMBDA_ACCESS_KEY_ID` (optional)
You have the option to provide a specific **AccessKeyId** for Lambda, If not provided, the [`AWS_ACCESS_KEY_ID`](#aws_access_key_id-aws_access_key_secret) will be utilized.

#### `AUTOMATION_AWS_LAMBDA_SECRET_ACCESS_KEY` (optional)
You have the option to provide a specific **SecretAccessKey** for Lambda, If not provided, the [`AWS_ACCESS_KEY_SECRET`](#aws_access_key_id-aws_access_key_secret) will be utilized.

#### `AUTOMATION_AWS_LAMBDA_REGION` (optional)
You have the option to provide a specific **Region** for Lambda, If not provided, the [`AWS_REGION`](#aws_region) will be utilized.


#### `AUTOMATION_AWS_LAMBDA_FUNCTION_NAME`
This denotes the name of your Lambda function.

#### `AUTOMATION_AWS_LAMBDA_FUNCTION_ARN`
This represents the Amazon Resource Name (ARN) of your Lambda function, which is crucial for triggering automation tasks within Lambda.

#### `AUTOMATION_API_KEY`
This API key facilitates communication between AWS Lambda and DronaHQ Automation. You can assign a custom secret to this variable. Ensure the same secret is provided in the AWS Lambda environment variables. To configure, navigate to `AWS Lambda` > `Functions` > `<function_name>` > `Configuration` > `Environment variables`. For detailed instructions, refer to the screenshot below (Figure: AWS Lambda Environment variable settings).
#### `BUILDER_URL`
This URL points to your DronaHQ Instances, facilitating communication between AWS Lambda and DronaHQ Automation. It should be added to the AWS Lambda environment variables. For setup guidance, refer to the screenshot below (Figure: AWS Lambda Environment variable settings).

<figure>
  <Thumbnail src="/img/self-hosted-deployment/lambda-env-variables-settings.png" alt="AWS Lambda Environment variable settings" width='80%'/>
  <figcaption align = "center"><i>AWS Lambda Environment variable settings</i></figcaption>
</figure>

### AWS EventBridge (Scheduler) Configuration
Configure the following variable related to AWS EventBridge:

#### `AUTOMATION_AWS_SCHEDULER_ACCESS_KEY_ID` (optional)
You have the option to provide a specific **AccessKeyId** for EventBridge, If not provided, the [`AWS_ACCESS_KEY_ID`](#aws_access_key_id-aws_access_key_secret) will be utilized.

#### `AUTOMATION_AWS_SCHEDULER_SECRET_ACCESS_KEY` (optional) 
You have the option to provide a specific **SecretAccessKey** for EventBridge, If not provided, the [`AWS_ACCESS_KEY_SECRET`](#aws_access_key_id-aws_access_key_secret) will be utilized.

#### `AUTOMATION_AWS_SCHEDULER_REGION` (optional)
You have the option to provide a specific **Region** for EventBridge, If not provided, the [`AWS_REGION`](#aws_region) will be utilized.

#### `AUTOMATION_AWS_SCHEDULER_LAMBDA_EXECUTE_ROLE_ARN`
This denotes the Role ARN of your Lambda function, utilized by EventBridge to trigger automation tasks. Ensure appropriate permissions are granted to this role for seamless execution.

## [MYSQL Container](https://hub.docker.com/_/mysql)

When you start the mysql image, you can adjust the configuration of the MySQL instance by passing one or more environment variables on the docker run command line. Do note that none of the variables below will have any effect if you start the container with a data directory that already contains a database: any pre-existing database will always be left untouched on container startup.

See also https://dev.mysql.com/doc/refman/5.7/en/environment-variables.html for documentation of environment variables which MySQL itself respects (especially variables like MYSQL_HOST, which is known to cause issues when used with this image).

#### `MYSQL_ROOT_PASSWORD`
This variable is mandatory and specifies the password that will be set for the MySQL root superuser account. In the above example, it was set to my-secret-pw.

#### `MYSQL_DATABASE`
This variable is optional and allows you to specify the name of a database to be created on image startup. If a user/password was supplied (see below) then that user will be granted superuser access (corresponding to GRANT ALL) to this database.

#### `MYSQL_USER`, `MYSQL_PASSWORD`
These variables are optional, used in conjunction to create a new user and to set that user's password. This user will be granted superuser permissions (see above) for the database specified by the MYSQL_DATABASE variable. Both variables are required for a user to be created.

Do note that there is no need to use this mechanism to create the root superuser, that user gets created by default with the password specified by the MYSQL_ROOT_PASSWORD variable.

#### `MYSQL_ALLOW_EMPTY_PASSWORD`
This is an optional variable. Set to a non-empty value, like yes, to allow the container to be started with a blank password for the root user. NOTE: Setting this variable to yes is not recommended unless you really know what you are doing, since this will leave your MySQL instance completely unprotected, allowing anyone to gain complete superuser access.

#### `MYSQL_RANDOM_ROOT_PASSWORD`
This is an optional variable. Set to a non-empty value, like yes, to generate a random initial password for the root user (using pwgen). The generated root password will be printed to stdout (GENERATED ROOT PASSWORD: .....).

#### `MYSQL_ONETIME_PASSWORD`
Sets root (not the user specified in MYSQL_USER!) user as expired once init is complete, forcing a password change on first login. Any non-empty value will activate this setting. NOTE: This feature is supported on MySQL 5.6+ only. Using this option on MySQL 5.5 will throw an appropriate error during initialization.

#### `MYSQL_INITDB_SKIP_TZINFO`
By default, the entrypoint script automatically loads the timezone data needed for the CONVERT_TZ() function. If it is not needed, any non-empty value disables timezone loading.


## [MongoDB Container](https://hub.docker.com/_/mongo)
When you start the `mongo` image, you can adjust the initialization of the MongoDB instance by passing one or more environment variables on the `docker run` command line. Do note that none of the variables below will have any effect if you start the container with a data directory that already contains a database: any pre-existing database will always be left untouched on container startup.

#### `MONGO_INITDB_ROOT_USERNAME`, `MONGO_INITDB_ROOT_PASSWORD`
These variables, used in conjunction, create a new user and set that user's password. This user is created in the admin authentication database and given the role of root, which is a "superuser" role.

The following is an example of using these two variables to create a MongoDB instance and then using the mongosh cli (use mongo with 4.x versions) to connect against the admin authentication database.

```shell
    $ docker run -d --network some-network --name some-mongo \
        -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
        -e MONGO_INITDB_ROOT_PASSWORD=secret \
        mongo

    $ docker run -it --rm --network some-network mongo \
        mongosh --host some-mongo \
            -u mongoadmin \
            -p secret \
            --authenticationDatabase admin \
            some-db
    > db.getName();
    some-db
```

Both variables are required for a user to be created. If both are present then MongoDB will start with authentication enabled (mongod --auth).

Authentication in MongoDB is fairly complex, so more complex user setup is explicitly left to the user via /docker-entrypoint-initdb.d/ (see the Initializing a fresh instance and Authentication sections below for more details).

#### `MONGO_INITDB_DATABASE`
This variable allows you to specify the name of a database to be used for creation scripts in /docker-entrypoint-initdb.d/*.js (see Initializing a fresh instance below). MongoDB is fundamentally designed for "create on first use", so if you do not insert data with your JavaScript files, then no database is created.

#### `MONGO_INITDB_USER`, `MONGO_INITDB_PWD`
These are custom variables added by DronaHQ. This will create application user in your database while initializing MongoDB container.
DronaHQ runs following script while initializing container to create application users and and assign read/write access to them.

    db.createUser({
        user: '$MONGO_INITDB_USER',
        pwd: '$MONGO_INITDB_PWD',
        roles: [{
            role: "userAdminAnyDatabase",
            db: "admin"
        }, {
            role: 'readWrite',
            db: 'db5x_studio'
        }]
    })

## Other optional variables

#### `SECRET_API_TOKEN_KEY`
By default, DronaHQ uses its own secret token for authentication of internal APIs. You can add your custom token instead.

```
SECRET_API_TOKEN_KEY='some-random-secret-token'
```

#### `ENCRYPTION_KEY`
By default, DronaHQ user its own encryption key to encrypt credentials and secret information flows in system. You can configure your own encryption key for added security. Also make sure to keep backup of your key at secure location.
```
ENCRYPTION_KEY='some-random-secret-key'
```

#### `SESSION_KEY_NAME`, `SESSION_KEY_SECRET`
By default, DronaHQ user its own session key and secret key. You can configure your own if you want to customize.
```
SESSION_KEY_NAME='cookie-name'
SESSION_KEY_SECRET='secret-key-to-sign-cookie'
```

#### `SENDGRID_API_KEY`
DronaHQ uses sendgrid as a mailing client. Configure your sendgrid key for activating activity mails.
```
SENDGRID_API_KEY='sendgrid api key'
```

#### `MAILER_EMAIL`, `MAILER_NAME`
This is sender mailer name and email id for all the mails shoot from dronahq. You can configure your own mailer options as per your sendgrid account.
```
MAILER_EMAIL='no-reply@dronahq.com'
MAILER_NAME='DronaHQ'
```

<!-- #### `SSH_TUNNEL_USER` -->
<!-- #### `LD_LIBRARY_PATH` -->
