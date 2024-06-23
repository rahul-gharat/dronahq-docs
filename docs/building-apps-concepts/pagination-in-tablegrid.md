---
sidebar_position: 1
title: Pagination in Tablegrid Control
---

import Image from '@site/src/components/Image'; import Thumbnail from '@site/src/components/Thumbnail';

## Pagination Overview

The Tablegrid control within DronaHQ serves as an effective tool to fetch and display tabular data from sheets.
Pagination, a crucial feature for managing large datasets, requires specific configurations and API support.
Understanding the fundamentals is key to leveraging this functionality effectively.

<figure>
  <Thumbnail src="/img/building-apps-concepts/pagination-tablegrid/pagination.jpeg" alt="property pagination" />
</figure>

### Understanding Pagination

The core purpose of pagination within Tablegrid is to manage data display in a tabular format, especially when dealing
with a substantial amount of information. Enabling pagination is contingent upon toggling the "Allow Pagination" option
within the control's properties.

### Pagination Types

DronaHQ supports three primary types of pagination:

- Server Side: Manages pagination on the server, fetching data as needed.
- Client Side: Handles pagination on the client, loading data at once and paginating locally.
- Cursor-Based: Uses cursor keys for pagination, ideal for managing large and complex datasets.

### Configuration Properties

- Pagination Bar Location: Choose to place the pagination bar at the top or bottom of the table grid control.
- Pagination Type: Select the desired type: Server Side, Client Side, or Cursor-Based.
- Default Cursor and Rows per Page: Define the initial record to display, the maximum records per page, and the cursor value for cursor-based pagination.
## Pagination Feature

The pagination feature is an essential component of the Tablegrid control, allowing for efficient page-wise data
display. However, its activation comes with certain limitations, notably affecting the functioning of other features
like Search and Filter.

### Key Aspects

- Functionality: Enables the division of data into pages for better user interaction and handling of large datasets.

- Search and Filter Limitation: When pagination is active, the Search and Filter features within columns are disabled
  for better performance.

NOTE: When the pagination is enabled your Filter and the Search features do not work on the columns. However, if you
disable pagination you would note that the search provides you with the rows matching the search text. The Filter
feature would also allow you specify the filter conditions.

## Pagination on data

### MySQL Database Connectors and Pagination

Implementing pagination on database connectors. Lets see how to implement and use pagination for MySQL DB connector.

Make sure you have your connector configured. Go to the `table grid` control and from its
`bind data > quick select > connector query`.

Lets write our query here to perform pagination on data retrieval.

Query: `SELECT * FROM author LIMIT {{tablegrid.PROPERTIES.LIMIT}} OFFSET {{tablegrid.PROPERTIES.OFFSET}}`

<figure>
  <Thumbnail src="/img/building-apps-concepts/pagination-tablegrid/mysql.jpeg" alt="MySQL Query with pagination" />
  <figcaption align='center'><i>MySQL Query with pagination</i></figcaption>
</figure>

Now `Test and Save`, your table grid control will update its data as per paginated response.

### Paginating GraphQL Data

Implementing pagination for GraphQL data retrieval involves creating a GraphQL connector to use data from the SpaceX
API.

#### Creating GraphQL Connector

1. Connector Setup:

   - Create a GraphQL connector and define a query named `getData`.

   - Add a custom query with variables for Limit and Skip, such as:

   ```

   { launchesPast(limit: 10) { mission_name launch_site { site_name } rocket { rocket_name } ships { image name } } }

   ```

2. Testing and Saving:

   - Test and save the connector named `Tesla_data`.

   - Test the query using sample limit and offset values to retrieve data successfully.

3. Configuring Tablegrid with Connector:

   - Select `tablegrid > bind data > Quick Select > connector Library` and choose the `getData` API from the configured
     connector library.

   - Configure connector fields, assigning values from `tablegrid.PROPERTIES.LIMIT` to the Limit field and
     `tablegrid.PROPERTIES.OFFSET` to the Skip field.

### Paginating Data from HTTP Request - REST API

When working with data from a REST API, pagination is crucial for managing large datasets efficiently. We can add REST
API data query from `Data Queries -> REST API` and implementing pagination.

Below are the steps to enable pagination using query string parameters `_page` and `_limit` and apply it to a table grid
for viewing the end result:

#### Enabling Pagination

1. Initial Setup:

   - Begin with your HTTP request to the REST API endpoint. By default, you might receive all data without pagination.

2. Integrate Pagination Parameters:

   - Amend your API request to include the `_page` and `_limit` parameters.
   - For instance, your URL might look like this: `https://api.example.com/data?_page=1&_limit=10`. 
   - Here, `_page` represents the page number, and `_limit` indicates the number of items per page.
      <figure>
      <Thumbnail src="/img/building-apps-concepts/pagination-tablegrid/restapi.jpeg" alt="Pagination on Data from REST API." />
      <figcaption align='center'><i>Pagination on Data from REST API.</i></figcaption>
      </figure>

3. Pagination Implementation: With the parameters set, your API response will return data in paginated chunks.
4. Apply Pagination to Table Grid:

   - Once you've retrieved paginated data from the API, integrate it into a table grid for visualization.
   - Populate the table grid with the paginated data fetched from the API response.


### Using JavaScript Transformation
While the previous methods leverage built-in pagination functionalities or connector properties, DronaHQ also allows for implementing custom pagination logic using JavaScript transformation.

Here's a general idea:

- Data Access: Within your JavaScript code, you'll likely use methods or properties provided by DronaHQ to access the original (unpaginated) data from your data source.

- Pagination Logic: Implement the core pagination logic using JavaScript. This might involve:
  - Extracting the current page number and number of items per page from relevant DronaHQ properties (e.g., table grid properties).
  - Performing calculations to determine the starting index (offset) for the desired page based on the current page number and items per page.
  - Slicing or filtering the original data to extract the specific subset of items that correspond to the current

      <figure>
         <Thumbnail src="/img/building-apps-concepts/pagination-tablegrid/js.png" alt="Pagination on Data using javaScript" />
        <figcaption align='center'><i> Pagination on Data using javaScript </i></figcaption>
      </figure>

