---
sidebar_position: 1
title: GraphQL
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

GraphQL is a data query language for the APIs. It helps fulfill the queries with the existing data based on a Schema, queries, and resolvers. It helps build upon the REST philosophy but helps move ahead where traditional APIs have some limitations.


## Prerequisite 

1. Authentication Requirements: Before establishing a connection with your GraphQL data source, ensure you have the necessary authentication credentials, which may include:
   - API keys.
   - OAuth tokens.
   - Other authentication mechanisms specific to your GraphQL service.

2. Connection Details:
   - Obtain the GraphQL endpoint URL where your data is hosted.

3. Data Schema Understanding:
   - Familiarize yourself with the GraphQL schema that defines the structure and available queries/mutations for your data source.

4. Query and Mutation Knowledge:
   - Gain an understanding of the GraphQL queries and mutations you'll be using to interact with your data.

Having these prerequisites in place will enable you to seamlessly configure the GraphQL Connector, facilitating effective data retrieval and manipulation within your application.

## Configuring API Connector in DronaHQ

Set up your API connector by entering the required details. Ensure Connector connection using the `Test connection` option. Once verified, click `Save` to save your configuration settings. 


#### Authentication


| Authentication Type      | Description                                                                                                   |
|--------------------------|---------------------------------------------------------------------------------------------------------------|
| None                     | No authentication required.                                                                                  |
| Multistep Authentication (Beta) | A multi-step authentication process for enhanced security. (Beta feature)                                 |
| API Key Authentication   | Authenticate using an API key provided by the data source.                                                 |
| Basic Authentication     | Authenticate with a username and password in base64-encoded format.                                      |
| AWS Authentication       | Authenticate using AWS credentials for access.                                                             |
| Digest Authentication    | Authenticate using the Digest Access Authentication protocol.                                            |
| Hawk Authentication      | Authenticate using the Hawk authentication scheme.                                                        |
| JWT Bearer               | Authenticate using a JSON Web Token (JWT) as a bearer token.                                             |
| NTLM Authentication      | Authenticate using NTLM (Windows NT LAN Manager) protocol.                                               |
| OAuth V2                 | Authenticate using OAuth version 2.0 protocol.                                                            |
| OAuth V2 - PKCE          | Authenticate using OAuth version 2.0 with Proof Key for Code Exchange (PKCE) protocol.                    |
| OAuth V2 - Client Credentials | Authenticate using OAuth version 2.0 with client credentials (client ID and secret).                   |
| OAuth V2 - JWT           | Authenticate using OAuth version 2.0 with JSON Web Token (JWT) assertion.                                 |
| OAuth 1.0a               | Authenticate using OAuth 1.0a protocol.                                                                    |
| OAuth 1.0a (3 legged)    | Authenticate using OAuth 1.0a protocol with three-legged flow for enhanced security.                     |

#### Add GraphQL Endpoint

| Field          | Description                                                                                                                                                                                                                                                |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| URL            | The main field for entering the URL of the API endpoint you wish to connect to. Typically beginning with `http://` or `https://`.                                           |
| Key            | Enter the name of the header, such as `Authorization` for authentication tokens or `Content-Type` for specifying the data format.                                                              |
| Value          | Enter the corresponding value for the header, such as the actual token for `Authorization` or the content type like `application/json`.                                                        |

<figure>
  <Thumbnail src="/img/reference/connectors/graphql/details.jpeg" alt="GraphQL with Sample details." />
  <figcaption align = "center"><i>GraphQL with Sample details.</i></figcaption>
</figure>


## Adding Queries

Once the connector is configured, access it in your Connector Library. Click `Add query` after connection setup. Create queries, run them, and view responses.

<figure>
  <Thumbnail src="/img/reference/connectors/graphql/mission.jpeg" alt="Write Queries" />
  <figcaption align = "center"><i>Write Queries</i></figcaption>
</figure>

:::tip
Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to controls/actions for runtime use.
:::

Saved queries appear under your connector in Connector Library.


## Using GraphQL Connector

### Data Bind using GraphQL Query

#### Read/Display Data Query for GraphQL Connector (SpaceX Data):

Begin by crafting a GraphQL query to retrieve data from the SpaceX API using the GraphQL Connector. For instance, consider a scenario where you want to retrieve the mission names of past launches with a specified limit. The GraphQL query is:

Query used:

```graphql
{
  launchesPast(limit: {{limit}}) {
    mission_name
  }
}
```

Query explanation:

This GraphQL query targets the `launchesPast` field with a specified `limit` parameter to retrieve mission names from past SpaceX launches.

<figure>
  <Thumbnail src="/img/reference/connectors/graphql/mission.jpeg" alt="GraphQL query example for retrieving SpaceX data using GraphQL Connector." />
  <figcaption align = "center"><i>GraphQL query example for retrieving SpaceX data using GraphQL Connector.</i></figcaption>
</figure>

Integrate the fetched data into your application's interface.

 a. Access the Controls section and introduce the appropriate control for displaying the data.

 b. Navigate to `Data Bind Options -> Quick Select -> Connector Queries`.

 c. Opt for the GraphQL connector and choose the query that aligns with your data presentation goals.

By following these steps, you can seamlessly retrieve and display mission names from past SpaceX launches using the GraphQL Connector, enhancing your application's functionality and user experience with real-time SpaceX data.