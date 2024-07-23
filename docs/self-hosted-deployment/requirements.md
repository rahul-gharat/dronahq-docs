---
sidebar_position: 92
---

# Minimum requirements

Learn about DronaHQ Self-hosted requirements then follow a deployment guide to get started.

### Machine specifications
- `Linux` based os or Virtual machine / `MacOS`
- `2` vCPUs
- `8 GiB` Memory
- `60 GiB` Storage
- Active internet connection for downloading resources.

### Software requirements
- linux packages - `curl`, `wget`, `git`, `unzip`
- Docker Engine
- Docker Compose
- Text editor of your choice

### Networking requirements
- Port `22`(ssh) To allow you to SSH into your instance and configure it.
- Port `80/443` For connecting to the server from the browser. (HTTP/HTTPS).
- Port `8080` (optional) for connecting to node service directly without web server.
- Enable outbound traffic to DronaHQ Licensing server(`https://license.dronahq.com` or IP `52.203.193.48`).

### Storage database

By default, all deployments include a containerized instance of `MYSQL` and `MONGODB` along with `DronaHQ` and `NGINX` (web server). But, it is recommended to externalize the database, to support a stateless deployment. Externalizing databases helps you make your installation more maintainable, scalable and reliable.

The minimum recommended version for the MYSQL database is version 8.0.36 and for MongoDB it is version 5.0.11

[Learn how to make your external databases DronaHQ ready](./configure-external-databases.md).