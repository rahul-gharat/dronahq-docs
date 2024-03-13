---
sidebar_position: 6
title: "Datadog Setup"
description: Learn the basics of building an app on DronaHQ.
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Datadog Integration

This documentation provides step-by-step instructions on how to integrate Datadog for logging within the DronaHQ platform.

## Introduction

Datadog integration allows you to capture and analyze logs efficiently in your DronaHQ modules. Follow the steps below to set up Datadog as your logging solution.

### Prerequisites

Before you begin, ensure that you have the following prerequisites in place:

- A DronaHQ account with an Enterprise Plan.
- Access to a Datadog account.
- Datadog API key.

## Configuration Steps

To get started with Datadog integration, follow these steps:

1. Open your Datadog account and obtain the API key.

2. In DronaHQ, under the `Log Settings` section, click on `Setup External Logging.`

3. In the "Select Logger Configuration" dropdown, choose "Datadog."

<figure>
  <Thumbnail src="/img/audit-logger/dropdown-logger.png" alt="Audit logger Dropdown select" width='100%'/>
  <figcaption align = "center"><i>Audit logger Dropdown select</i></figcaption>
</figure>

4. Provide the necessary connection details for Datadog, including the API key and Service Name.

5. Go to Datadog > Logs > Choose Cloud , and wait for logs which is about to be sent from DronaHQ.

<figure>
  <Thumbnail src="/img/audit-logger/datadog-logger-setup.png" alt="Audit logger Dropdown select" width='100%'/>
  <figcaption align = "center"><i>Datadog Choose Log Source</i></figcaption>
</figure>

5. In DronaHQ, Click the "Create Integration" button to initiate the integration process.

6. Once the integration is successful, you will see a `Logger Initialized` message.

<figure>
  <Thumbnail src="/img/audit-logger/datadog-setup.png" alt="Datadog Setup" width='100%'/>
  <Thumbnail src="/img/audit-logger/audit-logger-setup.png" alt="Audit Logger Setup" width='100%'/>
  <figcaption align = "center"><i>Audit Logger Setup</i></figcaption>
</figure>

## Expected log in Datadog:

<figure>
  <Thumbnail src="/img/audit-logger/output-datadog.png" alt="External log Output" width='100%'/>
  <figcaption align = "center"><i>External log Output</i></figcaption>
</figure>

## Testing Datadog Integration

You can test the Datadog integration to ensure it's functioning as expected:

1. Within the External Logging settings, look for the `Test` button and input custom log details.

2. Log specific details such as event names, user information, organization ID, and more. This data will be useful for monitoring and analysis.

By following these steps, you can seamlessly integrate Datadog as a logger in your DronaHQ account, enhancing your log management capabilities.

*Note: Ensure that you provide accurate Datadog API key and connection details for a smooth integration experience.*
