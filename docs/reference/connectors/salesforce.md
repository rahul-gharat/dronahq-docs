---
sidebar_position: 1
title: Salesforce
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


Salesforce is an extremely powerful CRM tool. DronaHQ with Salesforce not only helps you to create and search data but also helps you to operate on different pieces of information called Resources. Resources include records, query results and so on.

## Prerequisite

1. Authentication Requirements: Before establishing a connection with your Salesforce instance, ensure you have the required authentication credentials, such as:
   - Salesforce username and password.
   - Security token for two-factor authentication.

2. Connection Details:
   - Obtain the Salesforce instance URL where your data is hosted.
   - Identify the API version you intend to use for communication.

3. Security Settings:
   - Configure trusted IP ranges or network access settings within your Salesforce account to allow integration from external applications.

Having these prerequisites fulfilled will ensure a smooth integration of your application with Salesforce, facilitating seamless data management and utilization.

## Configuring API Connector in DronaHQ

Provide the Connector Name and Click `Connect to Salesforce`. Once the configuration is successful. Click `Save`. This enables you to connect with the production environment.


:::info

When you click on `Connect to Salesforce`, the login screen appears. You need to provide the `Username` and `Password`. Once successful you will be able to view the Salesforce dashboard.

:::


### Connect to Sandbox
If you have created a test environment and want to connect to it for testing purpose, this is also possible with the Salesforce Connector by switching on the Connect to Sandbox toggle. Then click on Connect to Salesforce.
The username for the sandbox follows the pattern of `user_email.sandbox_name`.


### Connect to custom apps
For the users who have built custom apps separate from the Salesforce production environment, they also can connect their app by providing app URL, consumer key, and consumer secret.

<figure>
  <Thumbnail src="/img/reference/connectors/salesforce/enterdetails.png" alt="salesforce with Sample details." />
</figure>


:::info

Either of the two toggles can be switched on at once.

:::


## Adding API Queries 

1. Query Name: Assign a unique and meaningful name to your query, making it easily identifiable.

2. Query Type: Choose the appropriate query type based on your requirements. Options include SOQL (Salesforce Object Query Language), CRUD (Create, Read, Update, Delete) Operations, and more.


| Query Type           | Description                                                                                                   |
|----------------------|---------------------------------------------------------------------------------------------------------------|
| CRUD Operation       | Perform Create, Read, Update, or Delete operations on Salesforce objects using the Connector.               |
| SOQL Query           | Utilize Salesforce Object Query Language (SOQL) to retrieve specific data from Salesforce objects.         |
| APEX REST Query      | Execute custom APEX REST queries to interact with Salesforce data through the REST API.                    |
| Bulk Load            | Efficiently load a large volume of data into Salesforce using the Bulk API via the Connector.              |
| Chatter API          | Interact with Salesforce Chatter API to post, comment, and perform various activities on Chatter feeds.    |

:::tip
Utilize double curly brackets for incorporating dynamic variables. Prior to saving, test with sample values. Associate dynamic variables with controls/actions for real-time utilization.
:::

Your saved queries will be visible beneath your connector within the Connector Library. 


## Using Salesforce Connector

### CRUD Action

The CRUD (Create, Read, Update, Delete) action allows you to perform various operations on data in your Salesforce instance. You can create, retrieve, insert, update, delete, or upsert data using this action.

For instance, you can update specific rows with specific values using the CRUD action. It provides a flexible way to manage data by allowing you to create new records, update existing ones, delete records, and more.

#### Update Row

To update records in Salesforce using the CRUD action, follow these steps:

1. Click `Add Query`

2. Provide a unique `Query Name` to identify your query.

3. Select `CRUD Operations` as the `Query Type.`

4. In the `Resource Body` section, provide the necessary values for updating the desired row.

For example, to update the `Name` field to `DronaHQ,` structure your data in the `Resource Body` like this:

```json
{
  "id": "your_row_id",
  "Name": "DronaHQ"
}
```

5. Test the query to ensure it works correctly.


<figure>
  <Thumbnail src="/img/reference/connectors/salesforce/update.png" alt="Update query for Salesforce API connector" />
  <figcaption align = "center"><i>Update query for Salesforce API connector</i></figcaption>
</figure>

### Chatter Post - Post a Feed Item


To post a feed item using the Chatter API, follow these steps:


3. Select `Chatter API` as the `Query Type.`

4. In the `Body` section, structure your data to include the content of the feed item you want to post. For example:

```json
test
```

5. Test the query to ensure it works correctly.

<figure>
  <Thumbnail src="/img/reference/connectors/salesforce/chatquery.png" alt=" Chatter Post query of Salesforce API connector" />
  <figcaption align = "center"><i> Chatter Post query of Salesforce API connector</i></figcaption>
</figure>

By following these steps, you can seamlessly post feed items using Salesforce's Chatter API, allowing you to share updates and information within your applications.

<figure>
  <Thumbnail src="/img/reference/connectors/salesforce/chatter.png" alt="Using Chatter Post query of Salesforce API connector" />
  <figcaption align = "center"><i>Using Chatter Post query of Salesforce API connector</i></figcaption>
</figure>