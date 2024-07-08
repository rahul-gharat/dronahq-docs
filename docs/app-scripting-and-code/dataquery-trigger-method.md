---
sidebar_position: 1
title: Data Query Trigger - Method
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

The `DATAQUERY._data-query-name_.trigger()` method provides a straightforward way to retrieve data from a predefined
endpoint/query. This method is particularly useful in event-driven architectures where specific actions or data
retrievals need to be triggered upon certain events. It simplifies the process of fetching data and integrating it into
your application.

## How to Use It

To utilize the `DATAQUERY._data-query-name_.trigger()` method in your custom JavaScript data queries, follow these
steps:

1. Create a New Data Query:

   - Click on `+ New` to create a new data query.
   - Name your query, e.g., `triggerdetail`.

2. Set the Query Parameters:

   - Set the `Run Query` option to "Everytime variables change".

3. Define Input Parameters:

   - Add an input parameter named `Keywords`.
   - Provide a test value for `Keywords` to facilitate testing.

4. Write the JavaScript Code:

   - Use the `DATAQUERY.getComments.trigger()` method within an asynchronous function to handle the data retrieval.
   - Handle any errors that might occur during the execution.

   ```javascript

       try {
           output = await DATAQUERY.getComments.trigger();
       } catch (error) {
           output = error;
       }

   }
   ```

   <figure>
   <Thumbnail src="/img/app-scripting-and-code/trigger-data-query/trigger-data-query-js.jpeg" alt="variable" />
   </figure>

5. Test and Save Your Query:
   - Use the provided test value to run your query and verify the output.
   - Save the query to make it available for use within your application.

## How to Obtain It

To obtain the `DATAQUERY._data-query-name_.trigger()` method of a data query, follow these steps:

1. Access the Data Queries Interface:

   - Navigate to the Data Queries section of your development environment.

2. Create and Configure the Query:

   - Create a query, to which you want to trigger the method later. click `test`. On the right-hand side of Response,
     there is a `Show` button for trigger method for this dataquery from JS

3. Use the Provided Code:

   - Implement the JavaScript code provided to trigger the `getComments` query and handle the retrieved data.

   <figure>
   <Thumbnail src="/img/app-scripting-and-code/trigger-data-query/trigger-data-query-show.jpeg" alt="variable" />
   </figure>

   <figure>
   <Thumbnail src="/img/app-scripting-and-code/trigger-data-query/trigger-data-query-shown.jpeg" alt="variable" />
   </figure>
