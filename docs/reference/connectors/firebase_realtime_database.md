---
sidebar_position: 1
title: Firebase Realtime Database
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


Firebase is a highly durable database that can scale automatically to handle your application’s load.

## Prerequisite


1. Firebase Configuration Details:
   Obtain the necessary configuration details from the Firebase console. Navigate to your Project settings and select the Service accounts tab. Click on the Firebase Admin SDK icon, and generate a new private key. This action will result in the download of a JSON file. Extract the Private key from the downloaded JSON file, as you will need it for configuring the Firebase Connector.

    <figure>
       <Thumbnail src="/img/reference/connectors/fire-userAuth/sdk.jpeg" alt="Obtaining details from Firebase Console" />
       <figcaption align = "center"><i>Obtaining details from Firebase Console</i></figcaption>
    </figure>

2. Optionally, Google Cloud Platform Account Key:
   If preferred, you can create an account key from your Google Cloud Platform (GCP) console. Follow these steps:
   1. Select a project in your GCP console.
   2. Click on "Create Service Account" and assign the role of "Firebase Admin."
   3. Opt for a JSON Key type and proceed to download the generated file. Ensure to keep this file accessible, as it will be required for configuring the connector.


   ## Configuring Connector in DronaHQ

Configure your database category using the provided details.Validate connection with `Test connection` and `Save` settings for secure database setup.

#### General

| Field               | Description                                                                                   |
|---------------------|-----------------------------------------------------------------------------------------------|
| Firebase Database URL | Enter the URL of your Firebase Realtime Database, e.g., `https://your-project.firebaseio.com`. |
| Private Key         | Paste the contents of the Private Key obtained from the Firebase console or GCP console.    |

  <figure>
       <Thumbnail src="/img/reference/connectors/firebase/details.jpeg" alt="Firebase Realtime Database with Sample details." />
       <figcaption align = "center"><i>Firebase Realtime Database with Sample details.</i></figcaption>
 </figure>


#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "../../datasource-concepts/whitelisting_dronahq_ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |

## Adding Data Management Queries for Firebase Realtime Database

After successfully configuring the Firebase Realtime Database connector, you can adeptly manage data-related operations. Focus on adding queries that involve the "Append data to the list" action:

1. Define Query Name: Assign a distinctive name to your data management query. This name will serve as an identifier within your Connector Library, simplifying access and management.

2. Select Action - Append data to the list: Navigate to the Firebase Realtime Database connector options and choose the `Append data to the list` action. This action empowers you to seamlessly add new data entries to an existing list in your Firebase Realtime Database.

3. Configure Data Input: Define the data you want to append to the list. Input the necessary values, ensuring they align with the structure of the list you intend to update.



| Parameter             | Description                                                                                                        |
|-----------------------|--------------------------------------------------------------------------------------------------------------------|
| Database Ref          | Reference a specific path within the Firebase Realtime Database for data retrieval or manipulation.              |
| Ordering              | Define the order in which data is retrieved or displayed (e.g., ascending or descending).                        |
| Value                 | Specify the data value to be appended or updated within the Firebase Realtime Database.                          |



4. Test and Execute: Prior to finalizing, conduct a test run to verify the query's functionality. Ensure that the appended data appears correctly within the designated list in your Firebase Realtime Database.


 <figure>
       <Thumbnail src="/img/reference/connectors/firebase/append.jpeg" alt="Firebase Realtime Database with append query." />
       <figcaption align = "center"><i>Firebase Realtime Database with append query.</i></figcaption>
 </figure>


#### Supported Actions 

| Action                     | Description                                                                                      |
|----------------------------|--------------------------------------------------------------------------------------------------|
| Query Firebase data        | Retrieve data from the Firebase Realtime Database based on specified criteria.                  |
| Set Data                   | Add or update data at a specific path within the Firebase Realtime Database.                     |
| Update Data                | Modify existing data at a specific path within the Firebase Realtime Database.                    |
| Append data to the list    | Add new data to an existing list at a specific path within the Firebase Realtime Database.        |
| Delete data                | Remove data from a specific path within the Firebase Realtime Database.                            |


## Using Firebase Realtime Database Connector

### Appending Data to a List

To append data to a list within the Firebase Realtime Database using the Firebase Realtime Database Connector, follow these steps:

1. Access Data Bind Section or Control Action:
   - Navigate to the data bind section of the control.

2. Select Firebase Realtime Database Connector from `Data Bind Options -> Quick Select -> Data Queries`:
   - Choose Firebase Realtime Database Connector from the available options.
   - Select the "Append data to a list" action to add new data to an existing list.
   - Click on "Continue" to proceed.

 <figure>
       <Thumbnail src="/img/reference/connectors/firebase/append.jpeg" alt="Firebase Realtime Database with append query." />
       <figcaption align = "center"><i>Firebase Realtime Database with append query.</i></figcaption>
 </figure>

3. Configure Data Input:
   - Specify the Database Ref, which is the reference to the existing list where you want to append data.
   - Provide the values to append as dynamic values. This can include any type of data, arrays, or objects.

4. Integrate with Controls and Actions:
   - Integrate this query into your workflow by adding controls like a TextInput field for user input.
   - Create an action flow that triggers the Connector action to append data.
   - Configure the connector to pass the value from the TextInput control as input.

<figure>
  <img src="/img/reference/connectors/firebase/append-data-workflow.jpeg" alt="Append data workflow" />
  <figcaption align="center"><i>Append data workflow</i></figcaption>
</figure>
