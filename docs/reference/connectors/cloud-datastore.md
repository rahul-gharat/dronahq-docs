---
sidebar_position: 1
title: Cloud Datastore
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

Cloud Datastore is a highly durable database that can scale automatically to handle your application’s load.

## Prerequisite

1. Authentication Requirements: Before establishing a connection with Cloud Datastore, ensure you have the necessary
   authentication credentials, including:

   - Google Cloud Project ID.
   - Service Account Key File: Create a Service Account on the Google Cloud Console and generate a JSON key file. This
   key file contains the credentials required for authentication.
    <figure>
          <Thumbnail src="/img/reference/connectors/clouddata/serviceacc.jpeg" alt="Service Account" />
          <figcaption align = "center"><i>Service Account</i></figcaption>
   </figure>

2. Enable Cloud Datastore API: In the Google Cloud Console, make sure that the Cloud Datastore API is enabled for your
   project. This API allows your application to interact with Cloud Datastore.

3. Service Account Access: Grant the Service Account associated with your application the necessary permissions to
   access Cloud Datastore. Assign the appropriate roles, such as `Cloud Datastore User` or `Cloud Datastore Viewer,` to
   the Service Account.

4. Download and Secure Key: Download the JSON key file generated for the Service Account. Safeguard this key file as it
   contains essential credentials for authenticating your application's access to Cloud Datastore.

## Configuring Connector in DronaHQ

Configure your database category using the provided details. Validate connection with `Test connection` and `Save`
settings for secure database setup.

#### General

| Field       | Description                                                                              |
| ----------- | ---------------------------------------------------------------------------------------- |
| Private Key | Paste the contents of the Private Key obtained from the Firebase console or GCP console. |

  <figure>
       <Thumbnail src="/img/reference/connectors/clouddata/details.jpeg" alt="Cloud Datastore Database with Sample details." />
       <figcaption align = "center"><i>Cloud Datastore Database with Sample details.</i></figcaption>
 </figure>

#### Admin

| Advanced Option                                                                                    | Description                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Options                                                                                 | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "/datasource-concepts/whitelisting-dronahq-ip/"> Whitelist IP </VersionedLink> | Enhance security by restricting database access to specific whitelisted IP addresses.                                                                                                         |

## Adding Queries

To retrieve an entity from Google Cloud Datastore using the `Get Entity by Key` action, follow these steps:

1. Define Query Name: Assign a meaningful query name that represents the specific data retrieval operation you are
   performing. This name will be used as an identifier in your Connector Library.

2. Select Action - Get Entity by Key: In the Google Cloud Datastore connector options, choose the `Get Entity by Key`
   action. This action allows you to fetch a single entity from your Google Cloud Datastore based on a provided key.

3. Configure Data Input:

   - Specify the Entity Kind: Select the kind of entity you want to retrieve from Google Cloud Datastore.
   - Provide the Entity Key: Enter the key associated with the entity you wish to retrieve.

   | Data Input | Description                                                                                              |
   | ---------- | -------------------------------------------------------------------------------------------------------- |
   | Namespace  | Specifies the namespace under which the entity is stored. Namespace is used to logically partition data. |
   | Key        | Unique identifier for the entity within the specified namespace and kind.                                |
   | Kind       | Represents the category or type of the entity. It helps organize and group related entities together.    |
   | Query      | Defines the conditions and criteria for retrieving specific entities from the Cloud Datastore.           |
   | Data       | Displayed data fields of the retrieved entity, including properties and their corresponding values.      |

4. Execute and View Response:
   - Run the configured query to retrieve the entity by its key.
   - The response will contain the data associated with the specified entity key.

 <figure>
       <Thumbnail src="/img/reference/connectors/clouddata/get.jpeg" alt="Cloud Datastore with Get query." />
       <figcaption align = "center"><i>Cloud Datastore with Get query.</i></figcaption>
 </figure>

:::tip 
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to
controls/actions and more for runtime use. 
:::

Saved queries appear under your connector in Connector Library.

#### Supported Actions

| Action               | Description                                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------------------- |
| Get Entity by Key    | Retrieve an entity from Cloud Datastore based on a specified key.                                          |
| Save Entity by Key   | Add or update an entity in Cloud Datastore using a specified key.                                          |
| Delete Entity by Key | Remove an entity from Cloud Datastore using a specified key.                                               |
| Query Datastore      | Retrieve data from Cloud Datastore based on specified criteria, such as filters, sorting, and projections. |

## Using Cloud Datastore Connector

### Retrieving an Entity by Key

To retrieve an entity by key from Cloud Datastore using the Cloud Datastore Connector, follow these steps:

1. Access Data Management Section or Control Action:

   - Navigate to the data management section or control action where you intend to retrieve the entity.

2. Select Cloud Datastore Connector from `Data Options -> Quick Select -> Connector Library`:

   - Choose Cloud Datastore Connector from the available options.
   - Select the `Get entity by key` action to retrieve an entity using its key.
   - Click on `Continue` to proceed.

     <figure>
         <Thumbnail src="/img/reference/connectors/clouddata/get.jpeg" alt="Cloud Datastore Get Entity by Key" />
         <figcaption align = "center"><i>Cloud Datastore Get Entity by Key</i></figcaption>
   </figure>

3. Configure Entity Key:

   - Specify the Key of the entity you want to retrieve. The Key uniquely identifies the entity within Cloud Datastore.

4. Integrate with Controls and Actions:
   - Integrate this query into your application by adding controls such as a TextInput field for entering the entity
     key.
   - Create an action flow that triggers the Cloud Datastore Connector action to retrieve the entity.
   - Configure the connector to pass the entity key from the TextInput control as input.

  <figure>
       <Thumbnail src="/img/reference/connectors/clouddata/example.jpeg" alt="Cloud Datastore Get Entity by Key" />
       <figcaption align = "center"><i>Cloud Datastore Get Entity by Key</i></figcaption>
 </figure>
