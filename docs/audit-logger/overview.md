---
sidebar_position: 1
title: Overview
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Audit Logging

## Introduction

Audit Logs is a powerful feature within the DronaHQ platform that allows you to seamlessly integrate various loggers to capture events and activities from your modules, such as RunAPI. This feature enhances your ability to monitor, analyze, and manage logs efficiently. This documentation provides step-by-step instructions on how to enable and configure Audit Logging in your DronaHQ account.

DronaHQ Support following 2 types of Audit Logging -
1. [DronaHQ Managed Audit Logging](#dronahq-managed-audit-logging) (Available only on Self-hosted version)
1. [External Audit Logging](#external-audit-logging)

## DronaHQ Managed Audit Logging
DronaHQ managed audit logging enables you to capture events and activities from your modules without any external logger setup. This can be an alternative to any external logger that one may want to set up.
:::info
DronaHQ Managed Audit Logging is supported only on self hosted version.
:::

To enable this feature you need to configure this environment variable on your self-hosted environment file

    DHQ_MANAGED_AUDIT_LOG_ENABLED=’true’

Once this is enabled, your audit logs will be saved in the `dhq_managed_audit_log` collection which will be auto-created in your configured `DHQ_MONGODB_HOST` server with database name `DHQ_MONGODB_DATABASE`.
The above variables are configured while setting up self-hosted instance.

 Once this is set up, go to `Account Settings -> General & Security -> Audit Logging` section, you will find `DronaHQ managed Audit Logging is Enabled` message and to View Audit logs you can click on `View Audit Logs` button

<figure>
  <Thumbnail src="/img/audit-logger/dhq-managed-auditLog.png" alt="DHQ managed audit logging" width='100%'/>
  <figcaption align = "center"><i>DronaHQ managed audit log setting</i></figcaption>
</figure>

Easily access and manage your audit logs with advanced filtering options, including date ranges, specific events, connectors, apps, and automation filters, and search by user email. Navigate seamlessly with pagination, ensuring efficient tracking and oversight of your logs

<figure>
  <Thumbnail src="/img/audit-logger/view-audit-log.png" alt="View audit logs" width='100%'/>
  <figcaption align = "center"><i>View audit logs</i></figcaption>
</figure>

## External Audit Logging

To enable external Audit Logging, follow these steps:

Log in to your DronaHQ account and navigate to the "Account Settings" section > "General & Security" 
Under the "Audit Logger" section, you will find the option to set up Audit Logging. Click on "Setup External Logging."

<figure>
  <Thumbnail src="/img/audit-logger/audit-logging.png" alt="External logger" width='100%'/>
  <figcaption align = "center"><i>Audit logger</i></figcaption>
</figure>

### Configuring Audit Loggers

After clicking on "Setup External Logging," you will be prompted to configure the logger. Follow these steps:

**Select Logger Configuration**: From the dropdown menu, select the logger you want to integrate. For example, you can choose MongoDB.

<figure>
  <Thumbnail src="/img/audit-logger/dropdown-logger.png" alt="Audit logger Dropdown select" width='100%'/>
  <figcaption align = "center"><i>Audit logger Dropdown select</i></figcaption>
</figure>

**Provide Connection Details**: Proceed to provide the necessary connection details for the selected logger. These details may include hostnames, ports, credentials, or any other information required to establish a connection.

**Create Integration**: Once you have entered the correct connection details, click on the "Create Integration" button. This action will initiate the integration process.

**Logger Initialization**: After successfully configuring the logger, you will receive a "Logger Initialized" message. This message indicates that the integration with the selected logger has been successfully established.

<figure>
  <Thumbnail src="/img/audit-logger/audit-logger-setup.png" alt="Logs setup Complete" width='100%'/>
  <figcaption align = "center"><i>Audit Logger Setup</i></figcaption>
</figure>

DronaHQ provides a feature that allows you to test custom logs, ensuring that the integration is functioning as expected. Here's how you can test custom logs:

**Access Custom Log Testing**: Within the Audit Logging settings, look for the "Test" button and Input will be displayed and one can enter the custom log and click on "Log" Button

**Logging Custom Details**: In this section, you can log specific details, such as event names, the user who is logged in, organization ID, and more. This information will be useful for monitoring and analyzing your system's activities.

By following these simple steps, you can seamlessly enable, configure, and test the Audit Logging feature in your DronaHQ account. This powerful tool allows you to efficiently manage and monitor event logs within your modules, enhancing your overall experience with the platform.

## Logging Schema

| Logged Key | Description |
|------|------|
| level | ``info/error based on response`` |
| msg | ``Logged Event Message`` |
| time | ``Timestamp`` |
| organization-id | ``Your Organization Id`` |
| environment | ``Source Environment`` |
| user-email | ``user's Email address`` |
| resource-id | ``Subcategory Id`` |
| resource-name | ``Subcategory Name`` |
| resource-type | ``Event Resource Type`` |
| resource-action | ``Event Resource Action`` |
| parent-id | ``MicroApp ID/Automation ID `` |
| parent-name | ``MicroApp Name/Automation Name`` |
| parent-type | ``microapp``/``automation`` |
| resource-meta | ``Payload with Muted Key`` |
| event-id | ``Event Identifier`` |
| source | ``Source of Logged Event`` |
| user-agent | ``USER-AGENT`` |
| resource-group-id | ``Category Id`` |

## Logging Example
For External Loggers:
```
{
  "level": "info",
  "msg": "DB Connector Query Execute",
  "meta":{
    "time": 1698747079624,
    "organization-id": "DRONA5_Team1809",
    "environment": "Production",
    "user-email": "test@studio.com",
    "resource-id": 20253,
    "resource-name": "getAuthor",
    "resource-type": "mysql",
    "resource-action": "runapi",
    "parent-name": "Login",
    "parent-type": "mysql",
    "resource-meta": {
      "env_id": 1,
      "env_name": "Production",
    },
    "event-id": "db_query",
    "source": "automation",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "resource-group-id": 6625,
  }
}

```
Columns For Database Loggers:

| id | level | message | meta | timestamp |
|------|------|------|------|------|

## List of events logged and Availability 
| Events | Event ID | Self Hosted | Cloud |
|------|------|----|------|
| User Invited | ``user_invited`` | ✔️ | ✔️ |
| User Activated | ``user_activated`` | ✔️ | ✔️ |
| User Deactivated | ``user_deactivated`` | ✔️ | ✔️ |
| User Password Reset | ``user_password_reset`` | ✔️ | ✔️ |
| User Password Forgot | ``user_password_forgot`` |✔️ | ✔️ |
| User Updated | ``user_updated`` |✔️ | ✔️ |
| Group Created | ``group_created`` |✔️ | ✔️ |
| Admin Logged In | ``admin_logged_in`` |✔️ | ✔️ |
| Admin Logged Out | ``admin_logged_out`` |✔️ | ✔️ |
| App Saved | ``app_saved`` | ✔️ | ✔️ |
| App Created | ``app_created`` | ✔️ | ✔️ |
| App Deleted | ``app_deleted`` | ✔️ | ✔️ |
| App Published | ``app_published`` | ✔️ | ✔️ |
| App Unpublished | ``app_unpublished`` |✔️ | ✔️ |
| App Permission Updated | ``app_permission_updated`` |✔️ | ✔️ |
| App Config Updated | ``app_config_updated`` |✔️ | ✔️ |
| Template Created | ``template_created`` |✔️ | ✔️ |
| Catalog Created | ``catalog_created`` |✔️ | ✔️ |
| Connectors Added | ``connectors_added`` |✔️ | ✔️ |
| Connectors Updated | ``connectors_updated`` |✔️ | ✔️ |
| Connectors Deleted | ``connectors_deleted`` |✔️ | ✔️ |
| Connectors API Added | ``connectors_api_added`` |✔️ | ✔️ |
| Connectors API Updated | ``connectors_api_updated`` |✔️ | ✔️ |
| Connectors API Deleted | ``connectors_api_deleted`` |✔️ | ✔️ |
| Connectors Environment Update | ``connectors_env_update`` |✔️ | ✔️ |
| Connectors Environment Delete | ``connectors_env_delete`` |✔️ | ✔️ |
| Environment Added | ``environment_added`` |✔️ | ✔️ |
| Environment Updated | ``environment_updated`` |✔️ | ✔️ |
| Environment Deleted | ``environment_deleted`` |✔️ | ✔️ |
| Db Query | ``db_query`` |✔️ | ✔️ |
| API Call | ``api_call`` |✔️ | ✔️ |
| User Password Forgot | ``user_password_forgot`` | ✔️ | ❌ |
| User Password Reset Requested | ``user_password_reset_requested`` | ✔️ | ❌ |
| Settings Updated | ``settings_updated`` | ✔️ | ❌ |
| Public Access Enabled | ``public_access_enabled`` | ✔️ | ✔️ |
| Public Access Disabled | ``public_access_disabled`` | ✔️ | ✔️ |
| Organizational Access Enabled | ``organizational_access_enabled`` | ✔️ | ✔️ |
| Organizational Access Disabled | ``organizational_access_disabled`` | ✔️ | ✔️ |
| Stripe Keys Saved | ``stripe_keys_saved`` | ✔️ | ✔️ |
| Automation Deleted | ``automation_deleted`` | ✔️ | ✔️ |
| Automation Enabled | ``automation_enabled`` | ✔️ | ✔️ |
| Automation Disabled | ``automation_disabled`` | ✔️ | ✔️ |
| Automation Rollback | ``automation_rollback`` | ✔️ | ✔️ |
| Automation Publish | ``automation_publish`` | ✔️ | ✔️ |
| Automation Updated | ``automation_updated`` | ✔️ | ✔️ |
| Automation Created | ``automation_created`` | ✔️ | ✔️ |
| Openai Account Added | ``openai_account_added`` | ✔️ | ✔️ |
| Openai Account Updated | ``openai_account_updated`` | ✔️ | ✔️ |
| Openai Account Deleted | ``openai_account_deleted`` | ✔️ | ✔️ |
| Openai Account Set Default | ``openai_account_enabled`` | ✔️ | ✔️ |
| Email Config Created | ``email_config_created`` | ✔️ | ✔️ |
| Email Config Saved | ``email_config_saved`` | ✔️ | ✔️ |
| Email Config Deleted | ``email_config_deleted`` | ✔️ | ✔️ |
| Email Template Saved | ``email_template_saved`` | ✔️ | ✔️ |
| SSH Key Added | ``ssh_key_added`` | ✔️ | ✔️ |
| SSH Key Updated | ``ssh_key_updated`` | ✔️ | ✔️ |
| SSH Key Deleted | ``ssh_key_deleted`` | ✔️ | ✔️ |
| SSO Enabled | ``sso_enabled`` | ✔️ | ✔️ |
| SSO Disabled | ``sso_disabled`` | ✔️ | ✔️ |
| SCIM User Added | ``scim_user_added`` | ✔️ | ✔️ |
| SCIM User Deactivated | ``scim_user_deactivated`` | ✔️ | ❌ |
| SCIM User Updated | ``scim_user_updated`` | ✔️ | ❌ |
| SCIM Group Added | ``scim_group_added`` | ✔️ | ❌ |
| SCIM Group Updated | ``scim_group_updated`` | ✔️ | ❌ |
| User Bulk Upload | ``user_bulk_upload`` | ✔️ | ✔️ |
| User Bulk Deactivated | ``user_bulk_deactivate`` | ✔️ | ✔️ |
| User Bulk Activate | ``user_bulk_activate`` | ✔️ | ✔️ |
| User Group Bulk Mapping | ``manage_user_groups_bulk`` | ✔️ | ✔️ |
| New Theme Created | ``new_theme_created`` | ❌ | ✔️ |
| Logger Deleted | `` logger_deleted `` | ✔️ | ✔️ |
<!-- some remaining -->
<!-- 

| Sheet Created | ``sheet_created`` | ❌ | ❌ |
| Sheet Deleted | ``sheet_deleted`` | ❌ | ❌ |
| Sheet Rename | ``sheet_rename`` | ❌ | ❌ |
| Sheet Permission Updated | ``sheet_permission_updated`` | ❌ | ❌ |
| PDF Creation | ``pdf_creation`` | ❌ | ❌ |
| Lookup | ``lookup`` | ❌ | ❌ |
| Insert Row | ``insert_row`` | ❌ | ❌ |
| Update Row | ``update_row`` | ❌ | ❌ |
| Delete Row | ``delete_row`` | ❌ | ❌ | 
| Secrets Added | ``secrets_added`` | ❌ | ❌ |
| Secrets Edited | ``secrets_edited`` | ❌ | ❌ |
| Secrets Deleted | ``secrets_deleted`` | ❌ | ❌ | 
| Automation Added | ``automation_added`` | ❌ | ❌ |
 -->

---

*Note: Ensure that you provide accurate connection details for the Audit logger to ensure smooth integration.*

## Purging older audit logs data to free up storage
If your self-hosted MongoDB database's "dhq_managed_audit_log collection" starts accumulating too much data, it's a good practice to ease the storage burden by taking backups and removing older audit logs, generally those older than 2-3 months.