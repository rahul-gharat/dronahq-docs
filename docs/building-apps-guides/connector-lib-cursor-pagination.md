---
sidebar_position: 1
title: Implementing Cursor-Based Pagination in Connector Library
---

import Image from '@site/src/components/Image'; 
import VersionedLink from '@site/src/components/VersionedLink'; 
import Thumbnail from '@site/src/components/Thumbnail';

When dealing with extensive data, loading everything at once can lead to performance bottlenecks. This is where pagination comes into play, and more specifically, cursor-based pagination, which ensures smooth and efficient data retrieval. In this blog, we'll explore how to implement cursor-based pagination on an Airtable connector using DronaHQ.



## Setting Up the Airtable Connector in DronaHQ

DronaHQ’s Connector Library provides integration with various data sources, including Airtable. Here’s a step-by-step guide to set up and configure cursor-based pagination for your Airtable connector.


#### Configure Airtable Connector

1. Open DronaHQ and go to the Connector Library section.
2. Choose Airtable as your data source and select the `FindRows` action to fetch rows from your Airtable table.
3. Setup Endpoint and Parameters: 

   * Endpoint: GET https://api.airtable.com/v0/{baseId}/{tableIdOrName}
   * Select Base: Choose your Airtable base (e.g., app7nHbLVx2L1ETmn).
   * Select Table: Choose your Airtable table (e.g., Emp Details or tblQw7k6RMPtIUGqP).
   * Page Size: Set to 10 (you can adjust this number as needed, must be ≤ 100).
   * Max Records: Use a variable or a fixed value to set the maximum number of records to retrieve.
   * Offset: This will be dynamically updated during pagination (initially set to 0).
   <figure>
     <Thumbnail src="/img/building-apps-guides/cursor-pagination/variable.jpeg" alt="Variable" />
     <figcaption align='center'><i>Variable</i></figcaption>
   </figure>

4. Enable Cursor-Based Pagination
   In cursor based pagination, your API response should have a key which points to the next page offset. It might also have a has more data key which denotes if there is more data to come or not. (It needs to have TRUE/FALSE or 0/1 as values) Do enable the below toggle in case your API supports cursor based pagination.
   * Offset Key: Typically, Airtable uses offset in its response to indicate the next page's starting point. Set this key accordingly.
   * Has More Key: Optionally, if your API response includes a key indicating whether more data is available, configure this key. For Airtable, the absence of the offset key in the response signifies the last page.
   <figure>
     <Thumbnail src="/img/building-apps-guides/cursor-pagination/cursor.jpeg" alt="Cursor Pagination Toggle" />
     <figcaption align='center'><i>Cursor Pagination Toggle</i></figcaption>
   </figure>



5. Click Test & Save to verify the configuration. Ensure that data is being fetched correctly with the pagination settings.


## Implement Pagination in DronaHQ UI

1. Drag and drop a Table Grid component onto your DronaHQ app screen.
2. Connect the Table Grid to the Airtable connector you configured.
3. Set Pagination Parameters:
* Page Size: Bind to the page size variable you set in the connector.
* Offset: Ensure it uses the dynamic offset value updated during pagination (e.g., tablegrid1.PROPERTIES.OFFSET).

Example API Configuration

Here's a sample configuration for your Airtable connector with cursor-based pagination enabled:

```json
{
  "endpoint": "GET https://api.airtable.com/v0/app7nHbLVx2L1ETmn/tblQw7k6RMPtIUGqP",
  "headers": {
    "Authorization": "Bearer YOUR_API_KEY"
  },
  "params": {
    "pageSize": 10,
    "maxRecords": "username",
    "offset": "tablegrid1.PROPERTIES.OFFSET",
    "view": "username",
    "sort": "username",
    "filterByFormula": "username",
    "columnToSearch": "username",
    "valueToSearchFor": "username"
  }
}
```

By implementing cursor-based pagination, you can efficiently manage and navigate through large datasets, ensuring a smooth user experience and optimized performance. DronaHQ makes it easy to set up and configure this powerful feature, allowing you to build robust applications that can handle extensive data seamlessly.

