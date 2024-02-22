---
sidebar_position: 1
title: Google Cloud Pub/Sub
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

Google Cloud Pub/Sub is a messaging service that allows you to send and receive messages between independent
applications. It provides a scalable, reliable, and real-time messaging platform.

## Prerequisite

1. Authentication Requirements: Before connecting to Google Cloud Pub/Sub, make sure you have the necessary
   authentication credentials, including:

   - Google Cloud Project ID.
   - Service Account Key File: Create a Service Account on the Google Cloud Console and generate a JSON key file. This
   key file contains the credentials required for authentication.
    <figure>
          <Thumbnail src="/img/reference/connectors/clouddata/serviceacc.jpeg" alt="Service Account" />
          <figcaption align = "center"><i>Service Account</i></figcaption>
   </figure>

2. Enable Google Cloud Pub/Sub API: In the Google Cloud Console, ensure that the Google Cloud Pub/Sub API is enabled for
   your project. This API allows your application to interact with Google Cloud Pub/Sub.

3. Service Account Access: Grant the Service Account associated with your application the necessary permissions to
   access Google Cloud Pub/Sub. Assign appropriate roles, such as `Pub/Sub Publisher` or `Pub/Sub Subscriber`, to the
   Service Account.

4. Download and Secure Key: Download the JSON key file generated for the Service Account. Safeguard this key file as it
   contains essential credentials for authenticating your application's access to Google Cloud Pub/Sub.

## Configuring Connector in DronaHQ

Configure your messaging category using the provided details. Validate the connection with `Test connection` and `Save`
settings for a secure messaging setup.

#### General

| Field       | Description                                                                              |
| ----------- | ---------------------------------------------------------------------------------------- |
| Private Key | Paste the contents of the Private Key obtained from the Firebase console or GCP console. |

   <figure>
       <Thumbnail src="/img/reference/connectors/pubsub/details.jpeg" alt="Google Cloud Pub/Sub Configuration" />
       <figcaption align="center"><i>Google Cloud Pub/Sub Configuration</i></figcaption>
   </figure>

#### Admin

| Advanced Options                                                                               | Description                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Options                                                                             | The `key` and `value` connection options in the connector configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to Google Cloud Pub/Sub. |
| <VersionedLink to="/datasource-concepts/whitelisting-dronahq-ip/">Whitelist IP</VersionedLink> | Enhance security by restricting messaging access to specific whitelisted IP addresses.                                                                                                                      |

## Adding Actions

To publish a message to Google Cloud Pub/Sub or subscribe to messages, follow these steps:

1. Define Query Name: Assign a meaningful query name that represents the specific data retrieval operation you are
   performing. This name will be used as an identifier in your Connector Library.

2. Select Action - Publish or Subscribe: In the Google Cloud Pub/Sub connector options, choose from list of available
   actions. Choose the `Get Topic` action. This action allows you to fetch information about a specific topic within
   your Google Cloud Pub/Sub configuration.

3. Configure Action Inputs:

   - Specify the Topic or Subscription (for Subscribe): Select the topic or subscription you want to use for this
     action.
   - Provide the Message: Enter the content of the message you want to publish.

   | Action Inputs                | Description                                                                      |
   | ---------------------------- | -------------------------------------------------------------------------------- |
   | Project                      | The Google Cloud Project ID used in your Pub/Sub setup.                          |
   | Page Size                    | The number of results to display per page when listing topics or subscriptions.  |
   | Page Token                   | A token to continue a previous list request when dealing with paginated results. |
   | Topic                        | The name of the topic to which the message will be published.                    |
   | Subscription (for Subscribe) | The name of the subscription from which you want to receive messages.            |
   | Message                      | The content of the message to be published.                                      |
   | Attributes                   | To provide additional information and context for processing                     |
   | Ordering Key                 | Provide the key of the message you want to be delivered to subscribers.          |

4. Execute and View Response:

   - Run the configured action to publish or subscribe to messages.
   - The response will contain the outcome of the action, such as a confirmation of message publication or the received
     message content.

   <figure>
       <Thumbnail src="/img/reference/connectors/pubsub/actions.jpeg" alt="Google Cloud Pub/Sub Actions" />
       <figcaption align="center"><i>Google Cloud Pub/Sub Actions</i></figcaption>
   </figure>

:::tip 
Utilize dynamic variables to make your messaging actions more flexible. Test with sample data before saving. Link
dynamic variables to controls/actions and more for runtime use. 
:::

Saved actions appear under your connector in Connector Library.

### Supported Actions

| Action                     | Description                                                        |
| -------------------------- | ------------------------------------------------------------------ |
| Publish to a Topic         | Send a message to a specific topic in Google Cloud Pub/Sub.        |
| List Project Topics        | Retrieve a list of topics within your Google Cloud project.        |
| List Project Subscriptions | Retrieve a list of subscriptions within your Google Cloud project. |
| List Topic Subscriptions   | Get a list of subscriptions associated with a specific topic.      |
| Get Topic                  | Retrieve detailed information about a specific topic.              |
| Get Subscription           | Retrieve detailed information about a specific subscription.       |
| Publish to a Topic         | Send a message to a specific topic in Google Cloud Pub/Sub.        |

## Using Google Cloud Pub/Sub Connector

### Publishing and Subscribing to Messages

To send and receive messages using the Google Cloud Pub/Sub Connector, follow these steps:

1. Access the messaging section or control action where you intend to publish or subscribe to messages.

2. Select Google Cloud Pub/Sub Connector from `Data Options -> Quick Select -> Message Actions`:

   - Choose Google Cloud Pub/Sub Connector from the available options.
   - Select the configured query action depending on whether you want to send or receive messages.
   - Click on `Continue` to proceed.

3. Configure the action based on your requirements:

   - For publishing, specify the topic and message content.
   - For subscribing, select the subscription to receive messages from.

4. Integrate this action into your application by connecting it to controls or actions as needed. Ensure you handle
   incoming messages appropriately.
