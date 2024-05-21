---
sidebar_position: 3
title: "New Relic Setup"
description: Learn the basics of building an app on DronaHQ.
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# New Relic Integration

This documentation provides step-by-step instructions on how to integrate New Relic as an audit logger within the DronaHQ platform.

## Introduction

New Relic integration allows you to capture and manage logs efficiently in your DronaHQ modules. Follow the steps below to set up New Relic as your audit logger.

### Prerequisites

Before you begin, ensure that you have the following prerequisites in place:

- A DronaHQ account with an Enterprise Plan.
- Access to a New Relic account.

## Configuration Steps

To get started with New Relic integration, follow these steps:

1. Open your New Relic account and navigate to the Add Data section, under logging section select `Logs API`. Generate a new API key if you don't already have one.

2. Copy the New Relic API key.

3. To make HTTPS call copy https endpoint ex. https://log-api.newrelic.com/log/v1

:::info PLEASE NOTE

   Keep your API key secure and do not share it publicly.

:::

To configure New Relic as your audit logger, follow these steps:

1. Under the `Audit Logger` section, click on `Setup External Logging.`

2. In the "Select Logger Configuration" dropdown, choose "New Relic."

<figure>
  <Thumbnail src="/img/audit-logger/dropdown-logger2.png" alt="Audit logger Dropdown select" width='100%'/>
  <figcaption align = "center"><i>Audit logger Dropdown select</i></figcaption>
</figure>

3. Provide the necessary connection details for New Relic, including the API key and any other required information.

4. Click the "Create Integration" button to initiate the integration process.

5. Once the integration is successful, you will see a `Logger Initialized` message.

<figure>
  <Thumbnail src="/img/audit-logger/newrelic-setup.png" alt="New Relic Setup" width='100%'/>
  <Thumbnail src="/img/audit-logger/audit-logger-setup.png" alt="Audit Logger Setup" width='100%'/>
  <figcaption align = "center"><i>Audit Logger Setup</i></figcaption>
</figure>

## Expected log in New Relic:

<figure>
  <Thumbnail src="/img/audit-logger/output-newrelic.png" alt="External log Output" width='100%'/>
  <figcaption align = "center"><i>External log Output</i></figcaption>
</figure>

## Testing New Relic Integration

You can test the New Relic integration to ensure it's functioning as expected:

1. Within the External Logging settings, look for the `Test` button and input custom log details.

2. Log specific details such as event names, user information, organization ID, and more. This data will be useful for monitoring and analysis.

By following these steps, you can seamlessly integrate New Relic as an audit logger in your DronaHQ account, enhancing your log management capabilities.

*Note: Ensure that you provide accurate New Relic connection details for a smooth integration experience.*
