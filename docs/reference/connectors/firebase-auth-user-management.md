---
sidebar_position: 1
title: Firebase Auth (User Management)
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
       <Thumbnail src="/img/reference/connectors/fire-userAuth/details.png" alt="Firebase Auth (User Management) with Sample details." />
       <figcaption align = "center"><i>Firebase Auth (User Management) with Sample details.</i></figcaption>
 </figure>

    
#### Admin

| Advanced Option   | Description    |
|--------------------|---------------------|
| Connection Options | The `key` and `value` connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database |
| <VersionedLink to = "../../datasource-concepts/whitelisting-dronahq-ip"> Whitelist IP                 </VersionedLink>            | Enhance security by restricting database access to specific whitelisted IP addresses.     |


## Adding User Management Queries for Firebase Auth

Upon successful configuration of the Firebase Auth (User Management) connector, you gain the ability to handle user-related operations. Follow these steps to proficiently create and manage user management queries, focusing on utilizing the `List Users` action:

1. Name your Operation: Give your user management operation a unique name that facilitates easy identification and access within your Connector Library.

2. Select Action - List Users: Navigate to the Firebase Auth (User Management) connector options and choose the `List Users` action. This action empowers you to retrieve a comprehensive list of users from your Firebase Authentication system.

3. Set Additional Parameters: Depending on your specific requirements, utilize optional parameters to refine the `List Users` action. Customize the query by implementing filters, sorting criteria, or other pertinent options.


| Parameter             | Description                                                                                                        |
|--------------------|--------------------------------------------------------------------------------------------------------------------|
| Limit              | Retrieve a limited number of documents based on specified criteria.                                               |
| Page Token         | Retrieve results starting from a specified page token. Useful for pagination.                                    |
| User UID           | Target a specific user account for user-related operations.                                                      |
| User Phone Number  | Identify or filter users based on their associated phone numbers.                                                |
| User Email Address | Identify or filter users based on their associated email addresses.                                              |
| User Provider UID  | Precisely target users using unique identifiers assigned by authentication providers.                            |
| User Properties    | Filter or update user data based on specific user properties or attributes.                                      |

4. Run the Query: Once you've configured the action and parameters, you can execute the query by clicking `Test Query` The response will be displayed based on the provided parameters, allowing you to review the retrieved data or the outcome of the query.

<figure>
  <Thumbnail src="/img/reference/connectors/fire-userAuth/list-users.png" alt="List Users- Query" />
  <figcaption align = "center"><i>List Users- Query</i></figcaption>
</figure>


:::tip
Utilize double curly brackets for incorporating dynamic variables. Prior to saving, test with sample values. Associate dynamic variables with controls/actions for real-time utilization.
:::

Your saved queries will be visible beneath your connector within the Connector Library. 



#### Supported Actions

| Action              | Description                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------|
| List Users          | Retrieve a list of users from the Firebase Authentication system.                            |
| Get User by UID     | Retrieve a user by their unique identifier (UID).                                             |
| Get User by Phone Number | Retrieve a user by their associated phone number.                                           |
| Get User by Email   | Retrieve a user by their associated email address.                                            |
| Get User by Provider UID | Retrieve a user by their unique identifier assigned by an authentication provider.       |
| Create a User       | Create a new user account in the Firebase Authentication system.                             |
| Update a User       | Update an existing user's attributes or properties.                                          |
| Delete a User       | Delete a user account from the Firebase Authentication system.                                |

## Using Firebase Auth (User Management) Connector 

### Get User By Provider UID

1. Access Data Bind Section or Control Action:
   - Navigate to the data bind section of the control.

2. Select Firebase Auth (User Management) Connector from `Data Bind Options -> Quick Select -> User Queries`:
   - Choose Firebase Auth (User Management) Connector from the available options.
   - Opt for the "Get User By Provider UID" query to retrieve user details using the provider UID.
   - Click on "Continue" to proceed.

<figure>
  <Thumbnail src="/img/reference/connectors/fire-userAuth/get-user-provider-uid.png" alt="Get User By Provider UID query" />
  <figcaption align="center"><i>Get User By Provider UID query</i></figcaption>
</figure>

3. Test and Finalize:
   - Execute the query by testing it with dynamic values for the provider UID.
   - Upon successful testing, finalize the configuration.

By adhering to these steps, you can seamlessly harness the capabilities of the Firebase Auth (User Management) Connector to retrieve user details based on the provider UID. This enhances your ability to work with user data effectively within your application, providing an optimized user management experience.

### Update a User 

The `Update a User` action provides a method to modify attributes of an established Firebase Authentication user. This action requires the user's UID (unique identifier) along with an object containing the desired profile information or user properties to update within the user account's data.

When updating user details by referencing their UID, you can dynamically provide all values, enabling users to conveniently pass the necessary details as parameters to the connector.

In the example below, we demonstrate updating the email address of a user through their UID.

<figure>
  <Thumbnail src="/img/reference/connectors/fire-userAuth/update-email.png" alt="Updating a user's email address" />
  <figcaption align="center"><i>Updating a user's email address</i></figcaption>
</figure>

To provide details to make the call, you can use various input controls and actions. Later with controls you can showcase the end result of data after changes.

We'll be using input field to get the UID and emails to pass it as keyword parameters and display the final response in JSON viewer.

<figure>
  <Thumbnail src="/img/reference/connectors/fire-userAuth/usecase.png" alt="Updating a user's email address" />
</figure>





