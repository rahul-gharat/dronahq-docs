---
sidebar_position: 2
title: Migrate from cloud to self hosted
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

This guide provides detailed steps to migrate your applications and configuration from DronaHQ Cloud to a self-hosted deployment. Before you begin, make sure to review your self-hosted plan's [features](https://www.dronahq.com/pricing/) to ensure they meet your requirements, as self-hosted plans may have different feature sets and [billing structures](/org-management/billing/) compared to Cloud plans.

:::caution
Migrating apps from Cloud to Self-Hosted may temporarily be impacted due to a critical update in how App's Data Queries are saved on the Cloud platform. This update has not yet been released on the Self-Hosted version but is scheduled for release in approximately 3-4 weeks. Once this update is available, it will streamline the migration process and ensure a smoother transition.
:::

## Requirements

To perform this migration, you will need:

1. A functional DronaHQ Cloud instance.
2. A working self-hosted instance of DronaHQ. To set up a self-hosted instance, obtain a license key from your DronaHQ account manager or use the [Self-hosted Portal](https://www.dronahq.com/self-hosted/). Refer to the [Self-Hosted deployment guides](/self-hosted-deployment/readme.md) for additional instructions.
3. Administrative permissions for both the Cloud and self-hosted instances.


Before proceeding, ensure that your self-hosted instance is [upgraded to the latest version](/self-hosted-deployment/update-dronahq-to-latest/) of DronaHQ. 

## Configure Self-Hosted premise for Applications

1. Recreate Connectors and Environment Resources

   - Manually configure [Environments (prod, dev,etc.)](/binding-data/data-queries/connector-library/#environments) in Self-Hosted to use them according to your application for running efficiently.
   
   - Migrate connectors and environment resources in your self-hosted instance, ensuring that both instances use the same connector and resource names. Differences in names may cause issues with imported applications.
      - [Export your connector](/datasource-concepts/migrating-between-accounts/#export) configuration as JSON files. These exports include queries and configuration options. 
      - [Import](/datasource-concepts/migrating-between-accounts/#import) these JSON exports into your self-hosted environment. 

   
   :::caution
   Sheets are not currently supported in the self-hosted version. If migrating from the cloud version, please consider alternative solutions for your sheet-related needs. Stay tuned for updates on sheet support in self-hosted.
   :::

   Self-hosted instances can use environment variables to securely store sensitive credentials. Consider migrating credentials such as database passwords or API keys to this method for enhanced security.


2. Export and Import Applications 

   :::caution 
   BPM Flows aren't supported in self-hosted as of yet. Please take this into consideration when planning your migration. Adjustments to your existing processes may be required. Stay tuned for updates on the availability of BPM Flows in the self-hosted environment.
   :::

   - [Export your applications](/building-apps-concepts/migrating-apps-between-accounts/#export-application) as JSON files. These exports include queries and configuration options.
   - Create individual exports for each application.
   - [Import](/building-apps-concepts/migrating-apps-between-accounts/#import-application) these JSON exports into your self-hosted instance. To import, click Create new and select From JSON.

3. Reconfigure SSO and Other Settings

   Reconfigure [single-sign-on (SSO)](/sso/configuring-sso-with-saml) and other configuration settings in your self-hosted instance to match your Cloud instance. This includes:

   - Setting up SSO authentication if used in your Cloud instance.
   - Recreating custom themes, branding, and other organization-wide settings.
   - Checking and updating any other necessary configuration settings, including feature flags.

4. Testing Applications

   After recreating connectors, importing applications, and configuring SSO and other settings, thoroughly test the most critical applications on your self-hosted instance to ensure they function correctly in the new environment.


## Update Your Organization Settings

After migrating your applications, update your self-hosted deployment settings as follows:

1. Invite Users

   - After migrating applications, add users to the new instance using [single-sign-on (SSO)](/sso/configuring-sso-with-saml) or email and password authentication. DronaHQ recommends using SSO for enhanced security and user management.
   - [Provision users](/user-management/adding-users-to-your-account/): If you use SSO with JIT user provisioning, configure SSO and JIT provisioning on the new instance for automatic user migration. For email and password authentication, manually migrate users by sending email invitations.

2. Migrate Permission Groups

   - Migrate permission groups with role mapping or manually recreate them. Use role mapping if your identity provider supports it with an OIDC or SAML-based identity provider.

3. Copy Settings

   - Copy [custom branding](/org-management/set-up-branding/), and any org-wide settings from your Cloud instance to your self-hosted instance.
   - Check the Settings page for any other necessary settings.

4. Usage Analytics

  :::info Usage Analytics
   Usage Analytics are not currently available in the self-hosted version. Stay tuned for updates on Usage Analytics support in self-hosted.
   :::