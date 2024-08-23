---
sidebar_position: 91
---

import VersionedLink from '@site/src/components/VersionedLink';
import Basics from '@site/static/icons/features/basics.svg';
import ArrowRight from '@site/static/icons/arrow_right.svg';
import Image from '@site/src/components/Image'; 
import Thumbnail from '@site/src/components/Thumbnail';

# Overview

Self Hosted DronaHQ solution ensures that, all access to your data is managed within your own cloud environment. It
also provides the flexibility to control how DronaHQ is setup within your infrastructure, the ability to configure logging, scaling, and access to enable custom SAML SSO using providers like Okta and Active Directory.

### Learn about deploying DronaHQ on your own infrastructure.

Deploying Self-hosted DronaHQ on your own infrastructure lets you build applications with data in your virtual private cloud (VPC) or behind your virtual private network (VPN). Companies having stringent data compliance policies often deploy self-hosted DronaHQ to remain compliant.

You can deploy DronaHQ locally as well as on several cloud infrastructure providers such as [AWS](https://aws.amazon.com/), [GCP](https://cloud.google.com/), [Azure](https://azure.microsoft.com/) and also on [Kubernetes (K8s)](https://kubernetes.io/) cluster. See the deployment options overview for a full list of options and installation instructions.

:::info
If you’re evaluating a large production use case or need any of our Enterprise plan features, please [schedule a demo](https://www.dronahq.com/self-hosted-demo-call).
:::


## DronaHQ Self-Hosted Quickstart


### TL;DR: DronaHQ Self-Hosted Installation Steps

1. Create an Account: Visit the [Self-hosted DronaHQ](https://www.dronahq.com/self-hosted/) portal and sign up.
2. Get the Bash Command: After logging in, you'll receive a bash command.
3. Run the Command: Copy and paste the command into your terminal.
4. Download and Extract: The command will download and extract the necessary files and libraries.
5. Launch DronaHQ: Your self-hosted version will start running on `localhost:8080`.
6. Activate: Complete the activation process to start using DronaHQ.

### Prerequisites

Ensure that the minimum requirements listed [here](/self-hosted-deployment/requirements) are satisfied.

### DronaHQ Self-Hosted Portal

1. Visit the Portal: Go to [Self-hosted DronaHQ](https://www.dronahq.com/self-hosted/) and click Get Started.
2. Follow Instructions: Complete the sign-up and verification process.
3. Login: Access your self-hosted portal and locate your license key and instructions.

<figure>
  <Thumbnail src="/img/self-hosted-deployment/overview/portal.png" alt="DronaHQ self hosted key" />
</figure>

### Setting Up on your local Ubuntu instance

1. Run the Command: Copy the provided bash command from the portal, paste it into your terminal, and hit enter.
2. Enable Communication: Ensure your server can communicate with `license.dronahq.com` by whitelisting this endpoint if necessary.
3. Launch DronaHQ: The command will download files, install dependencies, and start DronaHQ on `localhost:8080`.

<figure>
  <Thumbnail src="/img/self-hosted-deployment/overview/ubuntu.jpeg" alt="DronaHQ self hosted key" />
</figure>

:::caution 
It may take 3-5 minutes to fully initialize. If there’s a delay, navigate to `localhost:8080` manually.
:::

4. Activate: An activation window will open where you need to give your details like user name, email ID, and password, to activate the self-hosted installation. Ensure the email matches your sign-up email.

<figure>
  <Thumbnail src="/img/self-hosted-deployment/overview/activation.png" alt="Activate DronaHQ Self-hosted" />
</figure>

Click on Activate now and you will be redirected to the homepage of your self-hosted DronaHQ on-prem version in your system’s localhost.

:::tip NOTE
Since you are accessing the DronaHQ using an IP address, you will have to update the IP address in your .env file.

Open `dronahq.env` file in your Installation directory -

- Locate this - `BUILDER_URL= http://localhost:8080`
- Update it to - `BUILDER_URL= http://your-ip-address:8080`

Save and close the above file and finally restart the web app using the below command-
sudo docker-compose restart webapp
:::

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
- [Releases](https://docs.dronahq.com/self-changelog/)