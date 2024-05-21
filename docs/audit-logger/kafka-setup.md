---
sidebar_position: 4
title: "Kafka Setup"
description: Learn the basics of building an app on DronaHQ.
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Kafka Integration

This documentation provides step-by-step instructions on how to integrate Kafka as an audit logger within the DronaHQ platform.

## Introduction

Kafka integration allows you to capture and manage logs efficiently in your DronaHQ modules. Follow the steps below to set up Kafka as your audit logger.

### Prerequisites

Before you begin, ensure that you have the following prerequisites in place:

- A DronaHQ account with an Enterprise Plan.
- Access to a Kafka cluster.
- Kafka connection details including client ID, brokers, topic, mechanism, username, and password.

## Configuration Steps

To get started with Kafka integration, follow these steps:

1. Set up your Kafka cluster and ensure it is running.
2. Obtain the necessary connection details: client ID, brokers, topic, mechanism, username, and password.

To configure Kafka as your audit logger, follow these steps:

1. Under the `Audit Logger` section, click on `Setup External Logging.`

2. In the "Select Logger Configuration" dropdown, choose "Kafka."

<figure>
  <Thumbnail src="/img/audit-logger/dropdown-logger2.png" alt="Audit logger Dropdown select" width='100%'/>
  <figcaption align = "center"><i>Audit logger Dropdown select</i></figcaption>
</figure>

3. Provide the necessary connection details for Kafka.

4. Click the "Create Integration" button to initiate the integration process.

5. Once the integration is successful, you will see a `Logger Initialized` message.

<figure>
  <Thumbnail src="/img/audit-logger/kafka-setup.png" alt="Kafka Setup" width='100%'/>
  <Thumbnail src="/img/audit-logger/audit-logger-setup.png" alt="Audit Logger Setup" width='100%'/>
  <figcaption align = "center"><i>Audit Logger Setup</i></figcaption>
</figure>

## Testing Kafka Integration

You can test the Kafka integration to ensure it's functioning as expected:

1. Within the External Logging settings, look for the `Test` button and input custom log details.

2. Log specific details such as event names, user information, organization ID, and more. This data will be useful for monitoring and analysis.

By following these steps, you can seamlessly integrate Kafka as an audit logger in your DronaHQ account, enhancing your log management capabilities.

*Note: Ensure that you provide accurate Kafka connection details for a smooth integration experience.*
