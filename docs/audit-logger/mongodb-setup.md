---
sidebar_position: 2
title: "MongoDB Setup"
description: Learn the basics of building an app on DronaHQ.
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# MongoDB Integration

This documentation provides step-by-step instructions on how to integrate MongoDB as an audit logger within the DronaHQ platform.

## Introduction

MongoDB integration allows you to capture and manage logs efficiently in your DronaHQ modules. Follow the steps below to set up MongoDB as your audit logger.

### Prerequisites

Before you begin, ensure that you have the following prerequisites in place:

- A DronaHQ account with an Enterprise Plan.
- Access to a MongoDB database.
- MongoDB connection details.

## Configuration Steps

To get started with MongoDB integration, follow these steps:

1. Open your MongoDB account and create a new Database and Collection. You can also use an existing Database and Collection.

2. Go to your Cluster and click on "Connect", then choose the connection method and copy the connection string.

:::info PLEASE NOTE

   The connection string may not contain the database in the connection string. Make sure the database is added in the connection string.

:::

   Example connection string: `mongodb://username:password@host:port/database`

To configure MongoDB as your audit logger, follow these steps:

1. Under the `Audit Logger` section, click on `Setup External Logging.`

2. In the "Select Logger Configuration" dropdown, choose "MongoDB."

<figure>
  <Thumbnail src="/img/audit-logger/dropdown-logger.png" alt="Audit logger Dropdown select" width='100%'/>
  <figcaption align = "center"><i>Audit logger Dropdown select</i></figcaption>
</figure>


3. Provide the necessary connection details for MongoDB, including hostname, port, credentials, and any other required information.

4. Click the "Create Integration" button to initiate the integration process.

5. Once the integration is successful, you will see a `Logger Initialized` message.

<figure>
  <Thumbnail src="/img/audit-logger/mongo-setup.png" alt="MongoDB Setup" width='100%'/>
  <Thumbnail src="/img/audit-logger/audit-logger-setup.png" alt="Audit Logger Setup" width='100%'/>
  <figcaption align = "center"><i>Audit Logger Setup</i></figcaption>
</figure>

## Expected log in MongoDB:

<figure>
  <Thumbnail src="/img/audit-logger/output-mongodb.png" alt="External log Output" width='100%'/>
  <figcaption align = "center"><i>External log Output</i></figcaption>
</figure>

## Testing MongoDB Integration

You can test the MongoDB integration to ensure it's functioning as expected:

1. Within the External Logging settings, look for the `Test` button and input custom log details.

2. Log specific details such as event names, user information, organization ID, and more. This data will be useful for monitoring and analysis.

By following these steps, you can seamlessly integrate MongoDB as an audit logger in your DronaHQ account, enhancing your log management capabilities.

*Note: Ensure that you provide accurate MongoDB connection details for a smooth integration experience.*