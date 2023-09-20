---
sidebar_position: 2
title: Migrate from self hosted to cloud
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';



This guide provides a step-by-step process to migrate your apps and configurations from your self-hosted deployment to DronaHQ Cloud. Before you begin, ensure that your [Cloud plan](https://www.dronahq.com/pricing/) meets your feature requirements, as Cloud plans may have different features and [billing structures](../../../org-management/billing/) compared to self-hosted plans.

## Requirements

To perform this migration, you will need:

1. A functional Cloud instance of DronaHQ. You can create a Cloud instance by signing up for an account on [DronaHQ's official website](https://www.dronahq.com/signup/).

2. A working self-hosted instance of DronaHQ.

3. Administrative permissions on both instances.

Before proceeding with the migration, it's essential to [upgrade your self-hosted instance](../../update-dronahq-to-latest/) to the latest version of DronaHQ. Self-hosted releases may lag behind Cloud releases, so updating ensures compatibility and feature parity.


## Configure DronaHQ Cloud premise for Applications

1. Recreate Resources

   - Manually migrate connector configurations such as [environmental variables](../environment-variables.md) for credentials from your self-hosted instance to your Cloud instance.

   - Recreate all resources in your Cloud instance, ensuring resource names are identical between instances for proper app and workflow functionality.

2. Migrate DronaHQ Database

   - Manually export and import each table from your self-hosted instance to the Cloud instance, exporting each table as a CSV from your self-hosted instance.

3. Copy Query Library Queries

   - Since queries in the [Query Library](../../../binding-data/data-queries/dronahq-query-language/) are not synchronized, manually recreate any shared queries used in your self-hosted instance within your Cloud instance.

4. Export Apps and Workflows

   :::caution 
   Workflow [webhook](../../../automations-webhook/) URLs may change during the migration, so ensure you update any webhooks referenced elsewhere in your stack.
   :::

   - [Export your applications](../../../building-apps-concepts/migrating-apps-between-accounts/#export-application) and workflows as JSON. Each app or workflow can be exported individually.

   - [Import](../../../building-apps-concepts/migrating-apps-between-accounts/#import-application) these JSON exports into your Cloud organization.

5. Perform Application Testing

   - Test the most critical apps and workflows in your Cloud instance to ensure they work correctly.


## Update Your Organization

After migrating apps and workflows, update your Cloud deployment to accommodate users and settings.

1. Invite Users

   - Add users to your new Cloud instance using [single-sign-on (SSO)](../../../sso/configuring-sso-with-saml) or email and password authentication. SSO is recommended for security and user management ease.

   - [Provision users](../../../user-management/adding-users-to-your-account/): If you use SSO with JIT user provisioning, configure SSO and JIT provisioning on the new instance for automatic user migration. For email and password authentication, manually migrate users by sending email invitations.

   - Migrate permission groups using role mapping or manual recreation, depending on your setup.

2. Copy Settings

   - Transfer app themes, [custom branding](../../../org-management/set-up-branding/), and org-wide JavaScript from your self-hosted instance to your Cloud instance.

   - Manually recreate themes in your Cloud instance and check the Settings page for any other necessary configurations, including Beta feature flags.

## Downgrade Plan

If you no longer need your self-hosted organization, downgrade it to the Free plan.