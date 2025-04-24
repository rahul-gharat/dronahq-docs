---
sidebar_position: 92
---

# Minimum Requirements

Before deploying **DronaHQ Self-Hosted**, ensure your environment meets the following system, software, and networking requirements.

## Machine Specifications

- **Operating System**: `Linux` (VM, cloud instance, or on-prem) / `MacOS`
- **CPU**: `2 vCPUs`
- **Memory**: `8 GiB`
- **Storage**: `60 GiB`
- **Network**: Active internet connection for downloading dependencies and updates

## Software Requirements

- **Essential Linux Packages**: `curl`, `wget`, `git`, `unzip`
- **Containerization**:
  - Docker Engine
  - Docker Compose
- **Text Editor**: Any editor of your choice (e.g., `vim`, `nano`, `VS Code`)

## Networking Requirements

Ensure the following ports are open for proper communication:

- **Port `22` (SSH)** – Allows secure access to your instance for configuration.
- **Port `80/443` (HTTP/HTTPS)** – Enables access to the platform via a web browser.
- **Port `8080` (Optional)** – Used for direct access to the Node.js service (bypassing the web server).
- **Outbound Access** – Required for DronaHQ licensing verification:
  - URL: `https://license.dronahq.com`
  - IP: `52.203.193.48`

## Database Storage

By default, deployments include containerized instances of **MySQL**, **MongoDB**, **DronaHQ**, and **NGINX** (web server). However, we strongly recommend externalizing the databases for **stateless deployments** to improve maintainability, scalability, and reliability.

### Recommended External Database Versions

- **MySQL**: `8.0.36` or later
- **MongoDB**: `5.0.11` or later

For a step-by-step guide on configuring external databases, refer to:  
[Configure External Databases](./configure-external-databases.md)
