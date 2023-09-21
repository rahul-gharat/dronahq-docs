---
sidebar_position: 1
title: Overview
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# External Logging

## Introduction

External Logs is a powerful feature within the DronaHQ platform that allows you to seamlessly integrate various loggers to capture events and activities from your modules, such as RunAPI. This feature enhances your ability to monitor, analyze, and manage logs efficiently. This documentation provides step-by-step instructions on how to enable and configure External Logging in your DronaHQ account.


## Enabling External Logging

To enable External Logging, follow these steps:

Log in to your DronaHQ account and navigate to the "Account Settings" section > "General & Security" 
Under the "External Logger" section, you will find the option to set up External Logging. Click on "Setup External Logging."

<figure>
  <Thumbnail src="/img/external-logger/external-logging.png" alt="External logger" width='100%'/>
  <figcaption align = "center"><i>External logger</i></figcaption>
</figure>

## Configuring External Loggers

After clicking on "Setup External Logging," you will be prompted to configure the external logger. Follow these steps:

**Select Logger Configuration**: From the dropdown menu, select the external logger you want to integrate. For example, you can choose MongoDB.

<figure>
  <Thumbnail src="/img/external-logger/dropdown-logger.png" alt="External logger Dropdown select" width='100%'/>
  <figcaption align = "center"><i>External logger Dropdown select</i></figcaption>
</figure>

**Provide Connection Details**: Proceed to provide the necessary connection details for the selected logger. These details may include hostnames, ports, credentials, or any other information required to establish a connection.

**Create Integration**: Once you have entered the correct connection details, click on the "Create Integration" button. This action will initiate the integration process.

**Logger Initialization**: After successfully configuring the external logger, you will receive a "Logger Initialized" message. This message indicates that the integration with the selected logger has been successfully established.

<figure>
  <Thumbnail src="/img/external-logger/external-logger-setup.png" alt="Logs setup Complete" width='100%'/>
  <figcaption align = "center"><i>External Logger Setup</i></figcaption>
</figure>

DronaHQ provides a feature that allows you to test custom logs, ensuring that the integration is functioning as expected. Here's how you can test custom logs:

**Access Custom Log Testing**: Within the External Logging settings, look for the "Test" button and Input will be displayed and one can enter the custom log and click on "Log" Button

**Logging Custom Details**: In this section, you can log specific details, such as event names, the user who is logged in, organization ID, and more. This information will be useful for monitoring and analyzing your system's activities.

By following these simple steps, you can seamlessly enable, configure, and test the External Logging feature in your DronaHQ account. This powerful tool allows you to efficiently manage and monitor event logs within your modules, enhancing your overall experience with the platform.

---

*Note: Ensure that you provide accurate connection details for the external logger to ensure smooth integration.*