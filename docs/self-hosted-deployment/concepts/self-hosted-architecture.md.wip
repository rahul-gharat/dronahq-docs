---
title: Architecture
sidebar_position: 1
---

# Self-Hosted DronaHQ Architecture

import Thumbnail from '@site/src/components/Thumbnail';

The self-hosted Docker image of DronaHQ is composed of containers that execute tasks such as running the web
application, managing instance-specific data like user details and permissions, and handling tasks like database
migrations. These containers are defined in the docker-compose file for DronaHQ's self-hosted deployment.

DronaHQ adopts semantic versioning `(X.Y.Z)` for its self-hosted releases, which are accessible via Docker Hub. Each tag
on [Docker Hub](https://hub.docker.com/r/dronahq/self-hosted/tags) corresponds to a specific release version of the image, enabling smooth integration with Docker Compose or
Kubernetes. Notably, the image encompasses frontend, backend, and db-connector services within its structure.

## Components Overview

The self-hosted DronaHQ architecture comprises several indispensable components, each meticulously engineered to fulfill
specific functions:

<figure>
  <Thumbnail src="/img/self-hosted/architecture.png" alt="Self-Hosted Architecture" />
  <figcaption align='center'><i>Self-Hosted Architecture</i></figcaption>
</figure>


| Component             | Description                                                                                     |
|-----------------------|-------------------------------------------------------------------------------------------------|
| DronaHQ Server        | Central entity responsible for core functionalities such as user management and licensing. You must whitelist License server URL - https://license.dronahq.com.      |
| Creator Portal        | Interface empowering creators with content and application management capabilities.             |
| End User Portal       | Gateway for users to access content and applications conveniently.                               |
| Web Server            | Backbone delivering content seamlessly to end-users.                                             |
| File Storage System   | Repository for securely storing critical data and files. Supported file systems: S3, local, Azure.                                        |
| Run API System        | Efficiently manages the execution of diverse Connector queries calls from the App.                 |
| Meta API System       | Facilitates programmatic access to the DronaHQ platform, enabling seamless integration.         |
| Audit Logs System     | Provides comprehensive oversight by tracking user activities and system events.                 |
| WAF (Web Application Firewall) | Shields the architecture against cyber threats, ensuring robust security.                    |

### Data Flow 

Here's a detailed breakdown of the data flow within the DronaHQ system:

1. User Authentication: Users initiate login via the DronaHQ website, and their credentials are transmitted to the DronaHQ server for authentication.

2. User Profile Retrieval: The DronaHQ server authenticates the user and retrieves their user profile.

3. Role-based Routing: Upon successful authentication, the DronaHQ server determines the user's role. If authenticated, the user's profile is forwarded to either the Creator Portal or the End User Portal based on their role.

4. Portal Interaction: The Creator Portal or End User Portal presents relevant information and options based on the user's role.

5. User Interaction Handling: User interactions within the Creator Portal or End User Portal are captured.

6. Processing User Actions: The DronaHQ server processes user actions and interacts with various system components as required. Interactions may include accessing the file storage system, invoking the run API system, or logging activities in the audit logs system.

7. Response Handling: The DronaHQ server sends appropriate responses back to the Creator Portal or End User Portal.

8. User Interface Updates: The Creator Portal or End User Portal updates the user interface to reflect the current state of the system based on the received responses.



## Advantages of Self-Hosted DronaHQ Architecture

1. Enhanced Security: By hosting data on-premises, organizations maintain rigorous control over security protocols,
   mitigating potential vulnerabilities associated with cloud-based solutions.

2. Tailored Customization: The architecture offers extensive customization options, enabling organizations to align the
   platform precisely with their unique requirements and workflows.

3. Scalability: Seamlessly scalable to accommodate evolving business demands, ensuring optimal performance and resource
   utilization.
