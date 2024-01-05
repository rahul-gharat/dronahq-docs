---
sidebar_position: 1
title: Pagination in Tablegrid Control 
---

import Image from '@site/src/components/Image';
import Thumbnail from '@site/src/components/Thumbnail'; 



## Pagination Overview 

The Tablegrid control within DronaHQ serves as an effective tool to fetch and display tabular data from sheets. Pagination, a crucial feature for managing large datasets, requires specific configurations and API support. Understanding the fundamentals is key to leveraging this functionality effectively. 


<figure>
  <Thumbnail src="/img/building-apps-concepts/pagination-tablegrid/pagination.jpeg" alt="property pagination" />
</figure>

### Understanding Pagination 

The core purpose of pagination within Tablegrid is to manage data display in a tabular format, especially when dealing with a substantial amount of information. Enabling pagination is contingent upon toggling the "Allow Pagination" option within the control's properties. 


#### Pagination Types 

DronaHQ supports two primary types of pagination:  

- Limit Offset: Suitable for simpler pagination needs, displaying data based on defined limits and offsets. 

- Cursor-Based: Utilizes cursor keys for pagination, often necessary when handling more complex datasets. 


#### Configuration Properties 


- Pagination Bar Location: Choose between placing the pagination bar at the top or bottom of the table grid control. 

- Pagination Type: Select the appropriate type, either Limit Offset or Cursor-Based. 

- Default Cursor and Rows per Page: Define the initial record to display and the maximum records per page, respectively and cursor value in case of cursor based pagination.  




## Pagination Feature 


The pagination feature is an essential component of the Tablegrid control, allowing for efficient page-wise data display. However, its activation comes with certain limitations, notably affecting the functioning of other features like Search and Filter. 


### Key Aspects 

- Functionality: Enables the division of data into pages for better user interaction and handling of large datasets. 

- Search and Filter Limitation: When pagination is active, the Search and Filter features within columns are disabled for better performance. 

 

NOTE: When the pagination is enabled your Filter and the Search features do not work on the columns. However, if you disable pagination you would note that the search provides you with the rows matching the search text. The Filter feature would also allow you specify the filter conditions. 

 

 

## Pagination on data 

### MySQL Database Connectors and Pagination 

  
Implementing pagination on database connectors. Lets see how to implement and use pagination for MySQL DB connector. 

Make sure you have your connector configured. Go to the `table grid` control and from its `bind data > quick select > connector query`. 

Lets write our query here to perform pagination on data retriveal.


Query:
`SELECT * FROM author LIMIT {{limit}} OFFSET {{offset}}`


<figure>
  <Thumbnail src="/img/building-apps-concepts/pagination-tablegrid/mysql.jpeg" alt="MySQL Query with pagination" />
  <figcaption align='center'><i>MySQL Query with pagination</i></figcaption>
</figure>


Now `Test and Save`, your table grid control will update its data as per paginated response.

### Paginating GraphQL Data 

Implementing pagination for GraphQL data retrieval involves creating a GraphQL connector to use data from the SpaceX API. 

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

   - Select `tablegrid > bind data > Quick Select > connector Library` and choose the `getData` API from the configured connector library. 

   - Configure connector fields, assigning values from `tablegrid.PROPERTIES.LIMIT` to the Limit field and `tablegrid.PROPERTIES.OFFSET` to the Skip field. 

  

 

   

### Paginating Sheets Data Using LOOKUP Formula 

  

To retrieve data from the `CityMaster_docs` sheet and display it in a table grid, the LOOKUP formula is utilized. Initially, the table grid displays all rows from the sheet on a single page. Enabling pagination enhances data presentation by dividing it into manageable chunks. 

  

#### Enabling Pagination 

  

1. Initial Configuration: 

   - The default LOOKUP formula: `LOOKUP([Citymaster_docs.City,Citymaster_docs.State,Citymaster_docs.Postal_code,Citymaster_docs.Abbreviation])` 

   - Toggle "Allow Pagination" on and set Visible Rows and Page Limit according to your requirements. For instance, setting Visible Rows as 6 and Page Limit as 10 for this example. 

  

2. Adjusting LOOKUP Formula: 

   - Modify the LOOKUP formula to incorporate pagination values: 

     ``` 

     LOOKUP([Citymaster_docs.City,Citymaster_docs.State,Citymaster_docs.Postal_code,Citymaster_docs.Abbreviation], "", tablegrid7.PROPERTIES.LIMIT, tablegrid7.PROPERTIES.OFFSET) 

     ``` 

     - `tablegrid7`: Unique name of the table grid. 

     - `PROPERTIES.LIMIT`: Represents the Page Limit property. 

     - `PROPERTIES.OFFSET`: Represents the OFFSET property set in table grid properties. 

  

3. Pagination Implementation: 

   - With this setup, the table grid displays 6 rows at a time starting from the 6th record due to OFFSET set at 5 (indexing starts from 0). While 10 records are scrolled vertically, only 6 rows are visible due to the Visible Rows set as 6. 

  


  
