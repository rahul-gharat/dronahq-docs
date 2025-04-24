---
sidebar_position: 2
title: DronaHQ Self-Hosted Migration Plan- Docker to Kubernetes
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

# DronaHQ Self-Hosted Migration Plan: Docker to Kubernetes



This technical guide outlines a complete and structured plan for migrating your **DronaHQ self-hosted deployment** from a **Docker-based environment** to a **Kubernetes-based infrastructure**. 

The goal of this migration is to enhance scalability, increase operational reliability, and align your deployment with modern DevOps best practices. 

By following this migration plan step-by-step, you can ensure a smooth transition with minimal service disruption and secure integration with all required backend resources such as databases, file storage, and license management services.



## Pre-Migration Preparation

### Notify Your Development Teams

Before initiating any technical procedures, it is critical to notify all developers and stakeholders about the scheduled migration window. This includes specifying the estimated start and end times for downtime and setting clear expectations about the impact on platform usability. 

:::caution
During this period, all activities related to app creation, editing, or publishing within the DronaHQ platform must be paused. Any ongoing changes that are not saved before the migration begins may be lost, so it is vital to ensure that developers are aware of the risks and prepare accordingly.
:::

### Backup Critical Databases

Creating secure and restorable backups is a foundational step before any infrastructure-level change. You must take complete and simultaneous backups of both the **MySQL** and **MongoDB** databases. These backups should be stored in cloud-hosted or externally managed database services that are easily accessible from your future Kubernetes environment.

 This not only protects against data loss but also ensures that the application can immediately access historical and live data post-migration.

### Move File Repositories to Cloud Storage

If your current Docker-based deployment uses a local filesystem to manage file storage, you will need to transition all user-uploaded and system-generated files to a cloud storage service. 

Supported platforms include **Amazon S3**, **Google Cloud Storage (GCS)**, and **Azure Blob Storage**, all of which are S3-compatible.

During this process, ensure that the original folder structures and file paths remain intact to avoid broken references in the application. 

:::note
Additionally, verify that the new cloud storage buckets have the appropriate public read access or are configured with proper IAM roles or ACLs to ensure the DronaHQ platform can retrieve files without permission issues.
:::

### Update File URLs in the MySQL Database

After moving the files to cloud storage, you must update the existing file URLs in your database to reflect their new locations. This requires running a set of three SQL update queries that replace all local file paths with their corresponding cloud-based URLs. These queries are not generic and should be obtained from the **DronaHQ support team**, who will provide the correct query structure based on your current schema and cloud storage configuration.

### Configure Access and Network Permissions

Once storage and database migrations are complete, confirm that your Kubernetes cluster can establish reliable and secure connections to all critical external services. 
This includes access to your **MySQL** and **MongoDB** instances, the **cloud file storage buckets**, and the **DronaHQ License Server** hosted at [https://license.dronahq.com](https://license.dronahq.com). 


Network permissions should be tested and verified from within the Kubernetes environment to ensure that the application can function properly once deployed. 


Here’s your rewritten **technical documentation section** with a clear, professional tone, SEO-optimized phrasing, appropriate paragraphing, and bullet formatting where required.

---

## Kubernetes Deployment for DronaHQ Self-Hosted Migration

This section outlines the key steps to deploy the DronaHQ Self-Hosted platform on a Kubernetes cluster. These steps assume that all prerequisite configurations (such as database migrations, file storage updates, and license setup) have been completed.

---

### Step 1: Pull the Latest DronaHQ Image

To begin your deployment, pull the latest stable version of the DronaHQ Self-Hosted Docker image. This image will be used in your Kubernetes deployment manifest.

```bash
docker pull dronahq/self-hosted:3.6.1
```

Ensure that this version is consistent with what you were using in your previous Docker-based environment or aligns with your upgrade plan.



### Step 2: Create Kubernetes Manifests

Prepare all necessary Kubernetes YAML configuration files. These manifests should define:

- `Deployment`: Contains the DronaHQ application container definition and environment variables.
- `Service`: Exposes your deployment within the cluster.
- `Ingress`: Handles HTTP(S) routing to your application.
- `ConfigMap` or `Secrets`: To securely manage environment variables such as:
  - MySQL and MongoDB connection strings
  - Cloud storage credentials (S3, Azure Blob, etc.)
  - DronaHQ license keys

Make sure all values are scoped correctly to your namespace and cluster context.



### Step 3: Deploy to a Temporary Staging Domain

Before switching production traffic, deploy the platform to a temporary staging domain. This ensures that all configurations are working as expected.

Example:
```
staging-dronahq.yourdomain.com
```

This subdomain helps isolate your testing from active production traffic while still validating real-world performance.



### Step 4: Perform Initial Verification Checks

Once the staging deployment is live, validate critical application components. Focus on verifying:

- The DronaHQ admin and builder portals load successfully without errors.
- Cloud file storage is integrated correctly (e.g., assets like images and files are served via new URLs).
- Published applications function normally, including authentication and data binding.

At this point, the environment should closely mirror production functionality.

---

## Migration Execution – Start of Downtime


### Initiate Downtime

Announce the official downtime window across your organization. Ensure all teams are aware that:

- No changes should be made to apps or environments.
- Publishing or editing must be paused until migration is complete.
- Unsaved work may be lost if not finalized before the window.

This prevents data corruption or sync conflicts between Docker and Kubernetes environments.



### Switch DNS to Kubernetes

Update your DNS configuration to redirect traffic from your old Docker environment to the new Kubernetes-based deployment.

Example:
```
dronahq.yourdomain.com → <Kubernetes Ingress IP or Load Balancer>
```

Allow time for DNS propagation. Keep monitoring both traffic and logs to confirm that traffic is reaching the new cluster.

---

## Post-Migration Validation


### Test Full Application Functionality

After DNS switch and application restart, validate the system with thorough end-to-end testing. Ensure that:

- Applications open correctly in the **DronaHQ Builder** interface.
- End-user applications are accessible and fully functional.
- Secure embed mode (if used) behaves as expected.
- All data connectors (MySQL, REST APIs, MongoDB, etc.) are operational.
- Files, images, and assets load from the configured **cloud storage**.
- Reverse proxy and content delivery settings are correctly applied.

These checks confirm that the migrated environment is stable and production-ready.



### Confirm Migration Completion

Once all tests pass and performance is satisfactory:

- Announce that the migration is complete.
- Resume normal application building, publishing, and usage.
- Notify relevant stakeholders that DronaHQ is now live on Kubernetes.

Document any post-migration changes or configurations for internal IT records.

---

## Rollback Procedure (If Required)


### Revert to Docker Setup

In the event of unexpected application failure or serious issues, perform a rollback:

- Redirect DNS back to the Docker-based environment.
- Restore any backed-up data if required.
- Address configuration or deployment issues in the Kubernetes setup.
- Retry the migration after validation.

Having a rollback plan ensures business continuity and protects against extended outages.

---

## Final Notes

A successful migration from Docker to Kubernetes requires careful coordination between your infrastructure, DevOps, and platform teams. Validate every layer of your deployment pipeline, from ingress configuration to database connectivity and asset delivery.

For assistance during the migration process, contact the DronaHQ support team or your Kubernetes administrator.
