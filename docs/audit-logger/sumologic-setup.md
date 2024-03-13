---
sidebar_position: 6
title: "Sumologic Setup"
description: Learn how to integrate Sumologic Logger with DronaHQ.
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Sumologic Logger Integration

This documentation provides step-by-step instructions on how to integrate Sumologic Logger as an audit logger within the DronaHQ platform.

## Introduction

Sumologic Logger integration allows you to capture and manage logs efficiently in your DronaHQ modules. Follow the steps below to set up Sumologic Logger as your audit logger.

### Prerequisites

Before you begin, ensure that you have the following prerequisites in place:

- A DronaHQ account with an Enterprise Plan.
- Access to a Sumologic account.
- Sumologic connection details.

## Configuration Steps

To get started with Sumologic Logger integration, follow these steps:

1. Create a new collector or select an existing one to send your logs to.
2. To create new collector : In `Manage Data > Collection 
Add Collector > Hosted Collector > Select HTTP Logs & Metrics` for data source

3. Obtain the Sumologic HTTP Source URL. You will need this URL to configure the integration.

<figure>
  <Thumbnail src="/img/audit-logger/sourceurl-sumologic.png" alt="Source URL of Collector" width='100%'/>
  <figcaption align="center"><i>Source URL of Collector</i></figcaption>
</figure>


To configure Sumologic Logger as your audit logger, follow these steps:

1. Under the `Audit Logger` section, click on `Setup External Logging.`

2. In the "Select Logger Configuration" dropdown, choose "Sumologic Logger."

<figure>
  <Thumbnail src="/img/audit-logger/dropdown-logger.png" alt="Audit logger Dropdown select" width='100%'/>
  <figcaption align="center"><i>Audit logger Dropdown select</i></figcaption>
</figure>

3. Provide the Sumologic HTTP Source URL in the appropriate field.

4. Click the "Create Integration" button to initiate the integration process.

5. Once the integration is successful, you will see a `Logger Initialized` message.

<figure>
  <Thumbnail src="/img/audit-logger/sumologic-setup.png" alt="Sumologic Setup" width='100%'/>
  <Thumbnail src="/img/audit-logger/audit-logger-setup.png" alt="Audit Logger Setup" width='100%'/>
  <figcaption align="center"><i>Audit Logger Setup</i></figcaption>
</figure>

## Expected log in Sumologic Logger:

<figure>
  <Thumbnail src="/img/audit-logger/output-sumologic.png" alt="External log Output" width='100%'/>
  <figcaption align = "center"><i>External log Output</i></figcaption>
</figure>

## Testing Sumologic Logger Integration

You can test the Sumologic Logger integration to ensure it's functioning as expected:

1. Within the External Logging settings, look for the `Test` button and input custom log details.

2. Log specific details such as event names, user information, organization ID, and more. This data will be useful for monitoring and analysis.

By following these steps, you can seamlessly integrate Sumologic Logger as an audit logger in your DronaHQ account, enhancing your log management capabilities.

*Note: Ensure that you provide accurate Sumologic Logger connection details for a smooth integration experience.*