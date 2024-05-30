---
sidebar_position: 1
title: Firestore
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

Firestore is a highly durable database that can scale automatically to handle your application’s load.

## Prerequisite

1. Firebase Configuration Details: To connect with Firestore, gather the necessary configuration details from the
   Firebase console using these steps:

   - Access your Project settings.
   - Navigate to the Service accounts tab.
   - Click on the Firebase Admin SDK icon to generate a new private key.
   - Download the resulting JSON file and extract the Private key. This key is crucial for configuring the Firestore
     Connector.

    <figure>
       <Thumbnail src="/img/reference/connectors/fire-userAuth/sdk.jpeg" alt="Obtaining details from Firebase Console" />
       <figcaption align = "center"><i>Obtaining details from Firebase Console</i></figcaption>
    </figure>

2. Optionally, Google Cloud Platform Account Key: If you prefer, you can create an account key through your Google Cloud
   Platform (GCP) console:
   - Choose a project in your GCP console.
   - Select `Create Service Account` and assign the `Firebase Admin` role.
   - Opt for a JSON Key type and download the resulting file. Ensure accessibility of this file for the connector's
     configuration.

## Configuring Connector in DronaHQ

Configure your database category using the provided details. Validate connection with `Test connection` and `Save`
settings for secure database setup.

#### General

| Field                 | Description                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| Firebase Database URL | Enter the URL of your Firebase Realtime Database, e.g., `https://your-project.firebaseio.com`. |
| Private Key           | Paste the contents of the Private Key obtained from the Firebase console or GCP console.       |

 <figure>
       <Thumbnail src="/img/reference/connectors/firestore/details.jpeg" alt="Firestore with Sample details." />
       <figcaption align = "center"><i>Firestore with Sample details.</i></figcaption>
 </figure>

#### Admin

| Advanced Option                                                                                    | Description                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Options                                                                                 | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "/datasource-concepts/whitelisting-dronahq-ip/"> Whitelist IP </VersionedLink> | Enhance security by restricting database access to specific whitelisted IP addresses.                                                                                                         |

## Adding Queries for Firestore

Once you've successfully configured the Firestore connector, you can efficiently manage data-related operations,
including the `Update Document` action. Follow these steps to create and execute queries:

1. Define Query Name: Provide a unique name for your data management query. This name will serve as an identifier in
   your Connector Library for easy access and management.

2. Select Action - Update Document: Within the Firestore connector options, choose the `Update Document` action. This
   action enables you to modify existing data entries within a specific document in your Firestore database.

3. Choose Collection: After selecting the `Update Document` action, you'll have the option to choose the Firestore
   collection containing the document you want to update.

4. Set Additional Parameters: Depending on your specific requirements, utilize optional parameters to refine the
   `Update Document` action. Customize the query by implementing filters, sorting criteria, or other pertinent options.

| Parameter          | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| Order By           | Specify the field for sorting the results in ascending or descending order. |
| Order Direction    | Define the sorting direction, either ascending or descending.               |
| Where              | Filter documents based on specified conditions.                             |
| Limit              | Limit the number of documents returned in the query results.                |
| Start At           | Start the query results at a specific document.                             |
| End At             | End the query results at a specific document.                               |
| Document ID        | Target a specific document by its unique identifier.                        |
| Value              | Provide a specific value for query comparisons.                             |
| Parent Document ID | Reference the parent document ID for subcollection queries.                 |

This table outlines the parameters you can utilize for performing queries and operations on your Firestore database,
including ordering, filtering, limiting, and targeting specific documents.

5. Test and Execute: Before finalizing the query, perform a test run to verify its functionality. Confirm that the
   document's data is correctly updated within your Firestore database.

<figure>
       <Thumbnail src="/img/reference/connectors/firestore/update.jpeg" alt="Firestore connector update query" />
       <figcaption align = "center"><i>Firestore connector update query</i></figcaption>
 </figure>

:::tip 
Utilize double curly brackets for incorporating dynamic variables. Prior to saving, test with sample values.
Associate dynamic variables with controls/actions for real-time utilization.

:::

Your saved queries will be visible beneath your connector within the Connector Library.

#### Supported Actions for Firestore

| Action                  | Description                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| Query Firestore         | Execute a query to retrieve documents from a Firestore collection based on specified criteria. |
| Insert Document         | Insert a new document into a Firestore collection.                                             |
| Update Document         | Update an existing document within a Firestore collection.                                     |
| Get Document by ID      | Retrieve a document from a Firestore collection by its unique identifier.                      |
| Delete Document         | Delete a document from a Firestore collection.                                                 |
| Get Collections         | Retrieve a list of collections within a Firestore database.                                    |
| Query Collection Groups | Execute a query to retrieve documents from multiple collections that share the same ID.        |

## Using Firestore Connector

### Insert Document

1. Access Data Management Section or Control Action:

   - Begin by navigating to the data management section or the control action where you want to interact with your
     Firestore database.

2. Select Firebase Firestore Connector:

   - Choose the Firebase Firestore Connector from your available options.
   - Opt for the "Insert Document" action to add new data to your Firestore collection.
   - Provide a Document ID if desired; otherwise, leave it blank for auto-generation.
   - Ensure that the data is in valid JSON format.

    <figure>
      <img src="/img/reference/connectors/firestore/fire-store-add-data.jpeg" alt="Firestore Insert Document action" />
      <figcaption align="center"><i>Firestore Insert Document action</i></figcaption>
    </figure>

3. Configuration for Data Input:

   - Configure the action by providing the necessary data in a valid JSON format.
   - This could involve collecting data from a form submission and adding it using the action.

    <figure>
      <img src="/img/reference/connectors/firestore/fire-store-form-example.jpeg" alt="Firestore Form Example" />
      <figcaption align="center"><i>Firestore Form Example</i></figcaption>
    </figure>

4. Execute the Action Flow:

   - Configure the Connector within the Action Flow or Server Side actions.
   - Link the action to a button click or relevant trigger.
   - When the form is submitted, the action flow triggers the Connector to save data to your Firestore collection.

5. Confirmation and Display:
   - After the action is executed, use popup or toast actions to display relevant information, such as the created
     document ID.
   - You can also display the added data in a table grid or any other appropriate visualization.

<figure>
      <img src="/img/reference/connectors/firestore/result.jpeg" alt="Firestore Form Example" />
</figure>
