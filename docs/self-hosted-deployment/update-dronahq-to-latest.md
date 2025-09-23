---
sidebar_position: 96
---

# Updating DronaHQ Version

:::important
It is strongly recommended to have separate **development** and **production** servers set up from the beginning. Always upgrade your **development instance first**, perform all necessary validations and checks, and ensure everything works as expected. Once verified, follow the same steps to safely upgrade your **production instance**.
:::

Keeping your **DronaHQ Self-Hosted** instance up-to-date ensures you have the latest features, performance improvements, and security patches. This guide outlines the steps to safely update your installation with minimal downtime.

:::caution
Updating DronaHQ might require temporary downtime. Always notify users in advance and create backups before proceeding.
:::

## 1. Notify Users About Downtime

Communication is key when performing an update. Before starting, inform your users about potential downtime and any new features or changes they should expect.

## 2. Backup Your Instance and Databases

Creating backups is essential to prevent data loss in case of a failed update. Follow these steps:

- **Instance Backup:** If using a cloud provider (AWS, GCP, Azure, etc.), leverage snapshot or backup features for your instance.
- **Database Backup:**
  - **Managed Services:** If using a cloud-managed database (e.g., AWS RDS, Azure Database), enable automated backups or take a manual snapshot.
  - **Self-Hosted MySQL Database:** Run the following command to create a backup:
    ```sh
    mysqldump --host=<host> --port=<port> --user=<username> --password=<password> --all-databases > backup.sql
    ```
  - **Self-Hosted MongoDB Database:** Run the following command to create a backup:
    ```sh
    mongodump --host=<host> --port=<port> --username=<username> --password=<password> --db=<database-name> --authenticationDatabase=admin --archive=backup.archive
    ```
- **Environment Variables:** Backup any custom configuration stored as environment variables.

## 3. Choose the DronaHQ Version

Visit the [Stable Releases](https://docs.dronahq.com/selfhosted-stable/) page to check for the latest version and its changelog. Reviewing changelogs is important to understand new features, bug fixes, and deprecated functionalities.

## 4. Download Database Updates for Target Version

DronaHQ provides incremental database updates. Run the following command to download update scripts for the target version:
```sh
/bin/bash -c "$(curl -fsSL https://license.dronahq.com/self-hosted/master/get-database-updates.sh)"
```
This will generate an `update.sql` file in your working directory.

## 5. Apply Database Updates

### a. Updating a Containerized Database

1. Identify the database container ID:
    ```sh
    sudo docker ps -q --filter "name=dronahq-self-hosted-mysqldb"
    ```
2. Copy the update script inside the container:
    ```sh
    sudo docker cp ./update.sql <container-id>:/update.sql
    ```
3. Access the container shell:
    ```sh
    sudo docker exec -it <container-id> /bin/bash
    ```
4. Apply the update:
    ```sh
    /usr/bin/mysql -u root --password=<root-password> <database-name> --comments < update.sql
    ```

### b. Updating an External Database

Run the following command to apply updates on an external MySQL database:
```sh
mysql --host=<host> --port=<port> --user=<username> --password=<password> <database-name> < update.sql
```

## 6. Update DronaHQ Version in Service File

### a. For Docker Installation

Modify the `docker-compose.yaml` file to use the latest DronaHQ image:
```yaml
services:
  webapp:
    image: dronahq/self-hosted:<latest-version>
```

### b. For Kubernetes Installation

Modify the `dronahq-webapp.yaml` file to update the image tag:
```yaml
spec:
  template:
    spec:
      containers:
        - image: dronahq/self-hosted:<latest-version>
```

## 7. Restart DronaHQ Services

### a. Restart Docker Installation
Restart the DronaHQ container with:
```sh
sudo docker compose up -d webapp
```

### b. Restart Kubernetes Installation
Apply the updated manifest:
```sh
kubectl apply -f dronahq-webapp.yaml
```

## 8. Clear CDN Cache (If Applicable)

If you are using a **Content Delivery Network (CDN)**, cached files must be cleared so users receive the updated version.

- **Cloudflare Users:** Follow [this guide](https://developers.cloudflare.com/cache/how-to/purge-cache/) to purge cache.
- **Other CDNs:** Refer to your provider’s documentation for cache invalidation.

## Summary

| Step | Action |
|------|--------|
| **1** | Notify users about downtime |
| **2** | Create backups of instance and databases |
| **3** | Choose the correct DronaHQ version |
| **4** | Download database updates |
| **5** | Apply database updates |
| **6** | Update service files (Docker/Kubernetes) |
| **7** | Restart DronaHQ services |
| **8** | Clear CDN cache |

By following this guide, you ensure a smooth upgrade process while minimizing downtime and risks. Keeping DronaHQ updated improves performance, security, and access to new features.

