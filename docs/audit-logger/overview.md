---
sidebar_position: 1
title: Overview
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Audit Logging

## Introduction

Audit Logs is a powerful feature within the DronaHQ platform that allows you to seamlessly integrate various loggers to capture events and activities from your modules, such as RunAPI. This feature enhances your ability to monitor, analyze, and manage logs efficiently. This documentation provides step-by-step instructions on how to enable and configure Audit Logging in your DronaHQ account.


## Enabling Audit Logging

To enable Audit Logging, follow these steps:

Log in to your DronaHQ account and navigate to the "Account Settings" section > "General & Security" 
Under the "Audit Logger" section, you will find the option to set up Audit Logging. Click on "Setup External Logging."

<figure>
  <Thumbnail src="/img/audit-logger/audit-logging.png" alt="External logger" width='100%'/>
  <figcaption align = "center"><i>Audit logger</i></figcaption>
</figure>

## Configuring Audit Loggers

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

## List of events logged
| Events | Event ID |
|------|------|
| User Invited | ``user_invited`` |
| User Activated | ``user_activated`` |
| User Deactivated | ``user_deactivated`` |
| User Password Reset | ``user_password_reset`` |
| User Password Forgot | ``user_password_forgot`` |
| User Updated | ``user_updated`` |
| Group Created | ``group_created`` |
| Admin Logged In | ``admin_logged_in`` |
| Admin Logged Out | ``admin_logged_out`` |
| Sheet Created | ``sheet_created`` |
| Sheet Deleted | ``sheet_deleted`` |
| Sheet Rename | ``sheet_rename`` |
| Sheet Permission Updated | ``sheet_permission_updated`` |
| App Opened | ``app_opened`` |
| App Saved | ``app_saved`` |
| App Created | ``app_created`` |
| App Deleted | ``app_deleted`` |
| App Published | ``app_published`` |
| App Unpublished | ``app_unpublished`` |
| App Permission Updated | ``app_permission_updated`` |
| App Config Updated | ``app_config_updated`` |
| Template Created | ``template_created`` |
| Catalog Created | ``catalog_created`` |
| Connectors Added | ``connectors_added`` |
| Connectors Updated | ``connectors_updated`` |
| Connectors Deleted | ``connectors_deleted`` |
| Connectors API Added | ``connectors_api_added`` |
| Connectors API Updated | ``connectors_api_updated`` |
| Connectors API Deleted | ``connectors_api_deleted`` |
| Connectors Environment Update | ``connectors_env_update`` |
| Connectors Environment Delete | ``connectors_env_delete`` |
| Environment Added | ``environment_added`` |
| Environment Updated | ``environment_updated`` |
| Environment Deleted | ``environment_deleted`` |
| Db Query | ``db_query`` |
| API Call | ``api_call`` |
| PDF Creation | ``pdf_creation`` |
| Lookup | ``lookup`` |
| Insert Row | ``insert_row`` |
| Update Row | ``update_row`` |
| Delete Row | ``delete_row`` |
| User Logged In | ``user_logged_in`` |
| User Logged Out | ``user_logged_out`` |
| User Password Forgot | ``user_password_forgot`` |
| User Password Reset Requested | ``user_password_reset_requested`` |
| Settings Updated | ``settings_updated`` |
| Public Access Enabled | ``public_access_enabled`` |
| Public Access Disabled | ``public_access_disabled`` |
| Organizational Access Enabled | ``organizational_access_enabled`` |
| Organizational Access Disabled | ``organizational_access_disabled`` |
| Secrets Added | ``secrets_added`` |
| Secrets Edited | ``secrets_edited`` |
| Secrets Deleted | ``secrets_deleted`` |
| Stripe Keys Saved | ``stripe_keys_saved`` |
| Automation Added | ``automation_added`` |
| Automation Deleted | ``automation_deleted`` |
| Automation Enabled | ``automation_enabled`` |
| Automation Disabled | ``automation_disabled`` |
| Automation Rollback | ``automation_rollback`` |
| Automation Publish | ``automation_publish`` |
| Automation Updated | ``automation_updated`` |

---

*Note: Ensure that you provide accurate connection details for the Audit logger to ensure smooth integration.*