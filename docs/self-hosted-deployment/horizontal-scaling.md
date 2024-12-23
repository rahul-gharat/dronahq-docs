---
sidebar_position: 95
title: Horizontal Scaling
---

## Prerequisites

1. Linux Virtual Machine
    - Ubuntu 20.04 or higher
    - 2 vCPUs
    - Minimum 8 GiB of Memory
    - Minimum 60 GiB of Storage

2. Networking Requirements for Initial Setup:
    - 80 (http): for connecting to the server from the browser
    - 443 (https): for connecting to the server from the browser
    - 22 (SSH): To allow SSH access into your instance for configuration
    - 8080 (DronaHQ): Default port for DronaHQ

## Installing Self-Hosted DronaHQ

Follow the documentation for installing DronaHQ self-hosted. [Click here](/self-hosted-deployment/deployment-options/local-machine)

The installation process initializes MySQL and MongoDB as Docker containers.

## Scaling DronaHQ Installation

To scale DronaHQ Self-Hosted, you'll need to set up a managed remote database for MySQL and MongoDB. Additionally, configure an AWS S3 bucket for storing files and other resources used by DronaHQ Self-Hosted.

1. Requirements
   - MySQL RDS
   - MongoDB RDS
   - AWS S3 bucket

2. Migrate MySQL from Docker Container to RDS

   - Login to the self-hosted server
   - Take a backup of the database using the following commands:

   ```
   cd ~/dronahq/self-hosted

   sudo docker exec -i dronahq-self-hosted-mysqldb /usr/bin/mysqldump -u root --password=<%password%> --databases <% database name %> --add-drop-database --triggers --events --routines --single-transaction > mysqldump.sql

   echo "SET GLOBAL log_bin_trust_function_creators = 1;" | cat - mysqldump.sql > /tmp/out && mv /tmp/out mysqldump.sql

   sed -i 's/DEFINER=[^ |\]//g' mysqldump.sql
   ```

   - Restore MySQL dump on RDS with the following command:
   
   ```
   sudo docker exec -i dronahq-self-hosted-mysqldb /usr/bin/mysql --host=<% remote host %> --port=<% port %> --user=<% remote %> --password=<% remote password %> < mysqldump.sql
   ```

3. Migrate MongoDB from Docker Container to RDS

   - Login to the self-hosted server
   - Take a backup of the database using the following commands:

   ```
   cd ~/dronahq/self-hosted

   sudo docker exec -i dronahq-self-hosted-mongodb /usr/bin/mongodump --username root --password <% password %> --authenticationDatabase admin --db <% database name %> --out /mongodbdump

   sudo docker cp dronahq-self-hosted-mongodb:/mongodbdump ~/mongodbdump
   ```

   - Restore MongoDB dump on RDS with the following command:

   ```
   sudo docker exec -i dronahq-self-hosted-mongodb /usr/bin/mongorestore --host=<% remote host %> --port=<% remote port %> -u <% username %> -p <% password %> --db <% database name %> /mongodbdump/<% dataabse name %> --authenticationDatabase admin
   ```

4. Create AWS S3 Bucket and Generate Credentials

   Prepare AWS S3 credentials for use with DronaHQ Self-Hosted. You'll need the following information about your AWS S3 bucket:
   - Access Key ID
   - Secret Access Key
   - Bucket Name
   - Bucket Region

5. Configure Credentials in dronahq.env File

   Update the following variables in the environment file:
   - MYSQL_HOST
   - MYSQL_USER
   - MYSQL_PASSWORD
   - MYSQL_DATABASE
   - MYSQL_PORT

   - MONGODB_HOST
   - MONGODB_USER
   - MONGODB_PASSWORD
   - MONGODB_DATABASE
   - MONGODB_PORT

   - FILE_UPLOAD_TYPE= ”aws”
 
   - AWS_REGION
   - AWS_S3_ACCESS_KEY_ID
   - AWS_ACCESS_KEY_SECRET
   - AWS_S3_BUCKET_NAME

6. Restart Docker Container

   ```
   cd ~/dronahq/self-hosted

   sudo docker compose restart webapp
   ```

7. Scaling DronaHQ Self-Hosted

   - Run multiple containers of dronahq-self-hosted-webapp with the same configuration, or multiple instances of your Ubuntu instance.
   
8. Utilize Load Balancer for Traffic Management

   Use a load balancer to manage traffic between multiple containers/instances.


