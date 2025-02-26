---
sidebar_position: 96
---

# Update DronaHQ version

While updating DronaHQ, users might need downtime. Its a good practice to always notify users about downtimes and newly installed updates. Also create backup of your instance and databases regularly before update. DronaHQ provide incremental updates for database. it should be performed in sequence. If you wish to downgrade your installation, you do not need to downgrade database.

### 1. Notify users about downtime

Its always helpful to send announcements before performing any activity slightly before you start downtime.

### 2. Create a backup

Create backup of your server instance before upgrading so that you can restore them if needed.

If you are using any cloud service like AWS, GCP, Azure, the cloud provider might have a convenient way to backup and restore state of your instance.

- Backup your MySQL and Mongo database. If you have setup your databases with a managed service like AWS, they provide a managed way to take periodic backup of your databases. You can also take snapshots of your database to restore is faster in case of any failure.

- Also, take backup of your environment variables specific to your installation and store in safe place.

### 3. Choose DronaHQ version

Check [Stable Releases](https://docs.dronahq.com/selfhosted-stable/) page to see available DronaHQ updates and its changelogs. always read changelogs between your current version and the version you are upgrading to. It may also include notification and instructions for managing deprecated features.

It is highly recommended for you to frequently check updates and always be on latest version.

### 4. Download database updates for target version.

Following is a interactive shell script, which will help you download the database updates for the upgrade version you choose.

```shell
/bin/bash -c "$(curl -fsSL https://license.dronahq.com/self-hosted/master/get-database-updates.sh)"
```

Above line will download an update file with name `update.sql` in your working directory.

### 5. Apply updates on your database

##### a. Apply updates on containerized database

Run following command to get container id.

```shell
sudo docker ps -q --filter "name=dronahq-self-hosted-mysqldb"
```

Run following command to copy file inside container

```shell
sudo docker cp ./update.sql <container-id>:/update.sql
```

Run following command to log into the container

```shell
sudo docker exec -it <container-id> /bin/bash
```

Run following command to apply updates on  containerized database.

<!-- ```shell
sudo docker exec -i dronahq-self-hosted-mysqldb /usr/bin/mysql -u root --password=<% root password %> <%db name%> --comments < update.sql
``` -->

```shell
/usr/bin/mysql -u root --password=<% root password %> <%db name%> --comments < update.sql
```

##### b. Apply updates on external database

Run following command to apply updates on  external database.

```shell
mysql --host=<% host %> --port=<% port %> --user=<% username %> --password=<% password %> <%db name%> < update.sql
```

### 6. Update DronaHQ version in service file.

##### a. For Docker installation

In `docker-compose.yaml`, change the image tag to indicate the version of DronaHQ to install. The following example specifies the image tag to install version `2.2.8`.

```
services:
...
  webapp:
    image: dronahq/self-hosted:2.2.8
...
```
##### b. For Kubernetes cluster installation

In `dronahq-webapp.yaml`, change the image tag to indicate the version of DronaHQ to install. The following example specifies the image tag to install version `2.2.8`.

```
...
spec:
  template:
    spec:
      containers:
        - image: dronahq/self-hosted:2.2.8
...
```

### 7. Restart DronaHQ service

Restart is mandatory for new updates to take effect.

##### a. Restart Docker installation

Restart DronaHQ docker container with following command
```
sudo docker compose up -d webapp
```

##### b. Restart Kubernetes installation

Apply modified manifest file with following command
```
sudo kubectl apply -f dronahq-webapp.yaml
```

### 8. Clear cache from your content delivery partner

If you are using a CDN - Content Delivery Network, you should know that it also caches content (pages/ scripts/ images/ videos) in servers that are located closer to the users than the origin servers. 

This way, when a request is made on a website that is using a content delivery network, the CDN will deliver it faster, as the server storing the cached content will be situated closer to the user making the request. However, this content needs to be flushed after updating DronaHQ so that users will get the latest updated files. This cached content can be removed, by clearing/purging/flushing the CDN cache.

For **Cloudflare** : You can refer [this article](https://developers.cloudflare.com/cache/how-to/purge-cache/) on clearing cache.

Depending on your content delivery partner, you may refer to their respective configuration for clearing cache.