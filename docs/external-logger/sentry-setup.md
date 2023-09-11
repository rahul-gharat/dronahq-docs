---
sidebar_position: 6
title: "Sentry Logger Setup"
description: Learn how to integrate Sentry Logger with DronaHQ.
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Sentry Logger Integration

This documentation provides step-by-step instructions on how to integrate Sentry Logger as an external logger within the DronaHQ platform.

## Introduction

Sentry Logger integration allows you to capture and manage logs efficiently in your DronaHQ modules. Follow the steps below to set up Sentry Logger as your external logger.

### Prerequisites

Before you begin, ensure that you have the following prerequisites in place:

- A DronaHQ account with an Enterprise Plan.
- Access to a Sentry account.
- Sentry connection details.

## Configuration Steps

To get started with Sentry Logger integration, follow these steps:

1. Create a new project or select an existing one to send your logs to.

2. Obtain the Sentry DSN (Data Source Name). You will need this DSN to configure the integration.

<figure>
  <Thumbnail src="/img/external-logger/dsn-sentry.png" alt="Select DSN of sentry" width='100%'/>
  <figcaption align="center"><i>Select DSN of sentry</i></figcaption>
</figure>


To configure Sentry Logger as your external logger, follow these steps:

1. Under the `External Logger` section, click on `Setup External Logging.`

2. In the "Select Logger Configuration" dropdown, choose "Sentry Logger."

<figure>
  <Thumbnail src="/img/external-logger/dropdown-logger.png" alt="External logger Dropdown select" width='100%'/>
  <figcaption align="center"><i>External logger Dropdown select</i></figcaption>
</figure>

3. Provide the Sentry DSN in the appropriate field.

4. Click the "Create Integration" button to initiate the integration process.

5. Once the integration is successful, you will see a `Logger Initialized` message.

<figure>
  <Thumbnail src="/img/external-logger/external-logger-setup.png" alt="External Logger Setup" width='100%'/>
  <figcaption align="center"><i>External Logger Setup</i></figcaption>
</figure>

## Expected log in Sentry Logger:

<figure>
  <Thumbnail src="/img/external-logger/output-sentry.png" alt="External log Output" width='100%'/>
  <figcaption align = "center"><i>External log Output</i></figcaption>
</figure>

## Testing Sentry Logger Integration

You can test the Sentry Logger integration to ensure it's functioning as expected:

1. Within the External Logging settings, look for the `Test` button and input custom log details.

2. Log specific details such as event names, user information, organization ID, and more. This data will be useful for monitoring and analysis.

By following these steps, you can seamlessly integrate Sentry Logger as an external logger in your DronaHQ account, enhancing your log management capabilities.

*Note: Ensure that you provide accurate Sentry Logger connection details for a smooth integration experience.*
