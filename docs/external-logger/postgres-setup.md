---
sidebar_position: 3
title: "PostgreSQL Setup"
description: Learn the basics of building an app on DronaHQ.
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# PostgreSQL Integration

This documentation provides step-by-step instructions on how to integrate PostgreSQL as an external logger within the DronaHQ platform.

## Introduction

PostgreSQL integration allows you to capture and manage logs efficiently in your DronaHQ modules. Follow the steps below to set up PostgreSQL as your external logger.

### Prerequisites

Before you begin, ensure that you have the following prerequisites in place:

- A DronaHQ account with an Enterprise Plan.
- Access to a PostgreSQL database.
- PostgreSQL connection details.

## Configuration Steps

To get started with PostgreSQL integration, follow these steps:

1. Open your PostgreSQL account and create a new Database and Table. You can also use an existing Database and Table.

2. Go to your PostgreSQL Cluster and click on "Connect", then choose the connection method and copy the connection string.

Example connection string: `postgresql://username:password@host:port/database`

To configure PostgreSQL as your external logger, follow these steps:

1. Under the `External Logger` section, click on `Setup External Logging.`

2. In the "Select Logger Configuration" dropdown, choose "PostgreSQL."

<figure>
  <Thumbnail src="/img/external-logger/dropdown-logger.png" alt="External logger Dropdown select" width='100%'/>
  <figcaption align="center"><i>External logger Dropdown select</i></figcaption>
</figure>

3. Provide the necessary connection details for PostgreSQL, including hostname, port, username, password, and database name.

4. Click the "Create Integration" button to initiate the integration process.

5. Once the integration is successful, you will see a `Logger Initialized` message.

<figure>
  <Thumbnail src="/img/external-logger/external-logger-setup.png" alt="External Logger Setup" width='100%'/>
  <figcaption align="center"><i>External Logger Setup</i></figcaption>
</figure>

## Expected log in PostgresSQL:

<figure>
  <Thumbnail src="/img/external-logger/output-postgres.png" alt="External log Output" width='100%'/>
  <figcaption align = "center"><i>External log Output</i></figcaption>
</figure>

## Testing PostgreSQL Integration

You can test the PostgreSQL integration to ensure it's functioning as expected:

1. Within the External Logging settings, look for the `Test` button and input custom log details.

2. Log specific details such as event names, user information, organization ID, and more. This data will be useful for monitoring and analysis.

By following these steps, you can seamlessly integrate PostgreSQL as an external logger in your DronaHQ account, enhancing your log management capabilities.

*Note: Ensure that you provide accurate PostgreSQL connection details for a smooth integration experience.*
