---
sidebar_position: 2
title: Migrate from cloud to self hosted
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

This guide provides detailed steps to migrate your applications and configuration from DronaHQ Cloud to a self-hosted deployment. Before you begin, make sure to review your self-hosted plan's [features](https://www.dronahq.com/pricing/) to ensure they meet your requirements, as self-hosted plans may have different feature sets and [billing structures](../../../org-management/billing/) compared to Cloud plans.

## Requirements

To perform this migration, you will need:

1. A functional DronaHQ Cloud instance.
2. A working self-hosted instance of DronaHQ. To set up a self-hosted instance, obtain a license key from your DronaHQ account manager or use the [Self-hosted Portal](https://www.dronahq.com/self-hosted/). Refer to the [Self-Hosted deployment guides](.././readme.md) for additional instructions.
3. Administrative permissions for both the Cloud and self-hosted instances.

:::caution
To utilize DronaHQ Workflows or DronaHQ [Database](../../databases/), ensure that you [configure](../../deployment-options/local-machine) your self-hosted deployment to support features like [databases](../configure-external-databases.md) and workflows.
:::

Before proceeding, ensure that your self-hosted instance is [upgraded to the latest version](../../update-dronahq-to-latest/) of DronaHQ. 

## Configure Self-Hosted premise for Applications

1. Recreate Connectors and Resources

   - Manually migrate connector configurations such as [environmental variables](../environment-variables.md) to the self-hosted instance if Cloud connectors use them for credentials.
   - Recreate all connectors and resources in your self-hosted instance, ensuring that both instances use the same connector and resource names. Differences in names may cause issues with imported applications and workflows.

   Self-hosted instances can use environment variables or secrets managers to securely store sensitive credentials. Consider migrating credentials such as database passwords or API keys to one of these methods for enhanced security.

2. Migrate DronaHQ Database

   To migrate DronaHQ Database from your Cloud instance to self-hosted, follow these steps:

   - Manually export tables from your Cloud instance as CSV files.
   - Import these CSV files into your self-hosted database.

3. Recreate Query Library Queries

   Since queries in the [Query Library](../../../binding-data/data-queries/dronahq-query-language/) are not synchronized, manually recreate any shared queries used in your Cloud instance within your self-hosted instance.

4. Export and Import Applications and Workflows

   :::caution 
   Workflow [webhook](../../../automations-webhook/) URLs may change during the migration, so ensure you update any webhooks referenced elsewhere in your stack.
   :::

   - [Export your applications](../../../building-apps-concepts/migrating-apps-between-accounts/#export-application) and workflows as JSON files. These exports include queries and configuration options.
   - Create individual exports for each application and workflow.
   - [Import](../../../building-apps-concepts/migrating-apps-between-accounts/#import-application) these JSON exports into your self-hosted organization. To import, click Create new and select From JSON.

5. Reconfigure SSO and Other Settings

   Reconfigure Single Sign-On (SSO) and other configuration settings in your self-hosted instance to match your Cloud instance. This includes:

   - Setting up SSO authentication if used in your Cloud instance.
   - Recreating custom themes, branding, and other organization-wide settings.
   - Checking and updating any other necessary configuration settings, including feature flags.

6. Testing Applications and Workflows

   After recreating connectors, importing applications and workflows, and configuring SSO and other settings, thoroughly test the most critical applications and workflows on your self-hosted instance to ensure they function correctly in the new environment.


## Update Your Organization Settings

After migrating your applications and workflows, update your self-hosted deployment settings as follows:

1. Invite Users

   - After migrating applications and workflows, add users to the new instance using [single-sign-on (SSO)](../../../sso/configuring-sso-with-saml) or email and password authentication. DronaHQ recommends using SSO for enhanced security and user management.
   - [Provision users](../../../user-management/adding-users-to-your-account/): If you use SSO with JIT user provisioning, configure SSO and JIT provisioning on the new instance for automatic user migration. For email and password authentication, manually migrate users by sending email invitations.

2. Migrate Permission Groups

   - Migrate permission groups with role mapping or manually recreate them. Use role mapping if your identity provider supports it with an OIDC or SAML-based identity provider.

3. Copy Settings

   - Copy app themes, [custom branding](../../../org-management/set-up-branding/), and any org-wide JavaScript from your Cloud instance to your self-hosted instance. Manually recreate themes in your self-hosted instance.
   - Check the Settings page for any other necessary settings.

4. Usage Analytics

   To set up usage analytics on your self-hosted instance, contact your DronaHQ account manager to obtain an access token. Follow the provided instructions to enable usage analytics.

## Downgrade Plan

When you no longer require your Cloud organization, downgrade it to the Free plan. Access the Billing settings and click Downgrade. Ensure that you have migrated all your applications, resources, workflows, and database tables before proceeding with the downgrade.