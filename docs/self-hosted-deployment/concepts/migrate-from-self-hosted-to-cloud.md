---
sidebar_position: 2
title: Migrate from self hosted to cloud
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';



This guide provides a step-by-step process to migrate your apps and configurations from your self-hosted deployment to DronaHQ Cloud. Before you begin, ensure that your [Cloud plan](https://www.dronahq.com/pricing/) meets your feature requirements, as Cloud plans may have different features and [billing structures](/org-management/billing/) compared to self-hosted plans.

## Requirements

To perform this migration, you will need:

1. A functional Cloud instance of DronaHQ. You can create a Cloud instance by signing up for an account on [DronaHQ's official website](https://www.dronahq.com/signup/).

2. A working self-hosted instance of DronaHQ.

3. Administrative permissions on both instances.

Before proceeding with the migration, it's essential to [upgrade your self-hosted instance](/self-hosted-deployment/update-dronahq-to-latest/) to the latest version of DronaHQ. Self-hosted releases may lag behind Cloud releases, so updating ensures compatibility and feature parity.


## Configure DronaHQ Cloud premise for Applications

1. Recreate Connectors and Environment Resources

   - Manually configure [Environments (prod, dev,etc.)](/binding-data/data-queries/connector-library/#environments) in Cloud to use them according to your application for running efficiently.
   
   - Migrate connectors and Environment resources in your cloud instance, ensuring that both instances use the same connector and resource names. Differences in names may cause issues with imported applications.
      - [Export your connector](/datasource-concepts/migrating-between-accounts/#export) configuration as JSON files. These exports include queries and configuration options. 
      - [Import](/datasource-concepts/migrating-between-accounts/#import) these JSON exports into your cloud environment. 



2. Export and Import Applications

   - [Export your applications](/building-apps-concepts/migrating-apps-between-accounts/#export-application) as JSON. Each app can be exported individually.

   - [Import](/building-apps-concepts/migrating-apps-between-accounts/#import-application) these JSON exports into your Cloud organization.

3. Perform Application Testing

   - Test the most critical apps in your Cloud instance to ensure they work correctly.


## Update Your Organization

After migrating apps, update your Cloud deployment to accommodate users and settings.

1. Invite Users

   - Add users to your new Cloud instance using [single-sign-on (SSO)](/sso/configuring-sso-with-saml) or email and password authentication. SSO is recommended for security and user management ease.

   - [Provision users](/user-management/adding-users-to-your-account/): If you use SSO with JIT user provisioning, configure SSO and JIT provisioning on the new instance for automatic user migration. For email and password authentication, manually migrate users by sending email invitations.

   - Migrate permission groups using role mapping or manual recreation, depending on your setup.

2. Copy Settings

   - Recreate [custom branding](/org-management/set-up-branding/), and any org-wide settings from your self-hosted instance to your Cloud instance.

   - Manually check the Settings page for any other necessary configurations that needs to be updated from you self-hosted instance to cloud instance.

