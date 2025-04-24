---
sidebar_position: 91
---

import VersionedLink from '@site/src/components/VersionedLink';
import Basics from '@site/static/icons/features/basics.svg';
import ArrowRight from '@site/static/icons/arrow_right.svg';
import Image from '@site/src/components/Image'; 
import Thumbnail from '@site/src/components/Thumbnail';

# Overview

The self-hosted DronaHQ solution ensures that all access to your data remains within your own cloud environment, giving you complete control over security and compliance. It offers the flexibility to configure DronaHQ according to your infrastructure needs, including logging, scaling, and access management. Additionally, it supports custom SAML SSO integration with providers such as Okta and Active Directory, enhancing authentication and security.

### Learn about deploying DronaHQ on your own infrastructure.

Deploying the self-hosted DronaHQ on your infrastructure enables you to build applications while keeping your data within your virtual private cloud (VPC) or behind your virtual private network (VPN). Organizations with strict data compliance requirements often choose self-hosted DronaHQ to maintain regulatory adherence and full control over their data.  

DronaHQ can be deployed locally or on various cloud platforms, including [AWS](https://aws.amazon.com/), [GCP](https://cloud.google.com/), [Azure](https://azure.microsoft.com/), and [Kubernetes (K8s)](https://kubernetes.io/) clusters. Explore the [deployment options overview](#) for a comprehensive list of installation methods and setup instructions.

:::info  
### Looking for an Enterprise Solution?  

If you're considering DronaHQ for a large-scale production deployment or require features from our Enterprise plan, we’d love to help. [Schedule a demo](https://www.dronahq.com/self-hosted-demo-call) to explore how DronaHQ can meet your needs.  
:::

## DronaHQ Self-Hosted Quickstart

### Prerequisites

Before proceeding, ensure that your system meets the minimum requirements listed [here](/self-hosted-deployment/requirements).

### TL;DR: DronaHQ Self-Hosted Installation Steps

1. **Sign up for DronaHQ Self-Hosted**  
   Register for a self-hosted version of DronaHQ [here](https://www.dronahq.com/self-hosted-signup/).

2. **Retrieve Your License Key**  
   Log in to the [Self-Hosted Portal](https://studio.dronahq.com/selfhosted) and locate your license key.

   <figure>
     <Thumbnail src="/img/self-hosted-deployment/overview/portal.png" alt="DronaHQ self-hosted license key" />
   </figure>

3. **Install DronaHQ on Your System**  
   Follow the installation guide for [Linux or macOS](https://docs.dronahq.com/self-hosted-deployment/deployment-options/local-machine).

4. **Allow Communication with License Server**  
   Ensure that your server can communicate with `license.dronahq.com`. If required, whitelist this endpoint.

5. **Start Your Self-Hosted Instance**  
   Once installed, your self-hosted DronaHQ instance will be accessible at `http://localhost:8080`.

   <figure>
     <Thumbnail src="/img/self-hosted-deployment/overview/ubuntu.jpeg" alt="DronaHQ self-hosted installation" />
   </figure>

   :::caution  
   It may take **3-5 minutes** for the initialization to complete. If the UI doesn’t load automatically, manually navigate to `http://localhost:8080`.
   :::

6. **Activate Your Installation**  
   When prompted, enter your **username, email, and password** to activate your DronaHQ instance. Ensure that the email matches your signup email.

   <figure>
     <Thumbnail src="/img/self-hosted-deployment/overview/activation.png" alt="Activate DronaHQ Self-hosted" />
   </figure>

   Click **Activate Now** to complete the setup. You will be redirected to the DronaHQ homepage running on your local system.

### Updating the IP Address (If Needed)

If you are accessing DronaHQ via an IP address instead of `localhost`, update your `.env` file:

1. Open the `dronahq.env` file in your installation directory.
2. Locate the following line:

   ```env
   BUILDER_URL= http://localhost:8080
   ```

3. Update it with your server’s IP address:

   ```env
   BUILDER_URL= http://your-ip-address:8080
   ```

4. Save the file and restart the web application:

   ```sh
   sudo docker compose restart webapp
   ```


## Related Topics

- [Minimum requirements](/self-hosted-deployment/requirements)
- [Deployment Options](/self-hosted-deployment/deployment-options/local-machine)
- [Configure SSL and CA certificates](/self-hosted-deployment/configure-ssl-and-ca-certificates)
- [Configure External Databases](/self-hosted-deployment/configure-external-databases)
- [Environment Variables](/self-hosted-deployment/environment-variables)
- [Horizontal Scaling](/self-hosted-deployment/horizontal-scaling)
- [Update DronaHQ to Latest version](/self-hosted-deployment/update-dronahq-to-latest)
- [Concepts](/self-hosted-deployment/concepts/migrate-from-cloud-to-self-hosted)

## Useful Links

- [Github](https://github.com/dronahq/self-hosted)
- [Sign Up](https://www.dronahq.com/self-hosted-signup/)
- [Self-Hosted Portal](https://studio.dronahq.com/selfhosted/login)
- [Pricing and Plans](https://www.dronahq.com/pricing/)
- [Schedule a demo](https://www.dronahq.com/self-hosted-demo-call)
- [Stable Releases](https://docs.dronahq.com/selfhosted-stable/)
- [Edge Releases](https://docs.dronahq.com/selfhosted-edge/)