---
sidebar_position: 1
title: Metadata Feature - Data Query
---

import Thumbnail from '@site/src/components/Thumbnail';



In application building, when working with data queries, it is often necessary to access additional information beyond the direct query response. This is where the `Metadata feature` comes into play, allowing users to extract valuable details such as response status, timing metrics, and more using the `{{query_name.META}}` keyword.

## Why use Metadata?

- Enhanced Debugging: Easily access response codes and error messages.
- Performance Monitoring: Track query execution duration and response size.
- Dynamic Behavior: Use metadata values in your UI or logic workflows for conditional actions.

## META - Keyword Implementation

To leverage metadata, you simply use the `{{query_name.META.<Properties>}}` format within a fucntion of logic, or data-bind section of a control and more. Here’s a basic example:

#### Displaying Response Code

```javascript
{{Query_name.META.RESPONSE_CODE}}
```
This expression retrieves the HTTP response code of the executed query, which you can display or use in your app’s logic.

<figure>
  <Thumbnail src="/img/building-apps-concepts/meta-keyword/meta-keyword-use.png" alt="Putting META - Keyword" width='100%'/>
  <figcaption align = "center"><i>Putting META - Keyword</i></figcaption>
</figure>

## META - supported properties

This metadata that we recieve after making a query request or an API call, often offers valuable insights into the context, performance, and status of the call. Below, we’ll explore some of these common metadata properties and how they can be put to use.

<figure>
  <Thumbnail src="/img/building-apps-concepts/meta-keyword/meta-keyword-properties.png" alt="Common properties of META - Keyword" width='100%'/>
  <figcaption align = "center"><i>Common properties of META - Keyword</i></figcaption>
</figure>


| Meta Properties        | Description                                            |
|------------------------|------------------------------------------------------------|
| HEADERS            | Retrieves all HTTP headers from the response.              | 
| RESPONSE_CODE      | Returns the HTTP status code (e.g., `200`, `404`).         | 
| RESPONSE_MESSAGE   | Provides the status message (e.g., `OK`, `Not Found`).     | 
| FAILURE_CODE       | Error code if the query fails (e.g., `500`, `401`).        | 
| FAILURE_MESSAGE    | Describes the error if the query fails.                    | 
| TIMESTAMP          | The timestamp when the query was executed.                 | 
| DURATION           | The total time taken to execute the query (in milliseconds).| 
| RESPONSE_SIZE      | The size of the response payload (in bytes).               | 



### Using META - Properties

Let’s look at some practical scenarios where these metadata options can be useful:

- Scenario 1: Conditional Logic Based on Response Code
  ```javascript
  IF({{Query_name.META.RESPONSE_CODE}} === 200, "Success", "Failed")
  ```
  This condition checks if the response code is `200` (OK) and displays "Success", otherwise it shows "Failed".

- Scenario 2: Logging Query Execution Time
  ```javascript
  "Query executed in " + {{Query_name.META.DURATION}} + " milliseconds."
  ```
  This expression provides feedback on the execution time of the query, which can be helpful for performance monitoring.

- Scenario 3: Error Handling with Meta Options
  ```javascript
  IF({{Query_name.META.FAILURE_CODE}} !== null, "Error: " + {{Query_name.META.FAILURE_MESSAGE}}, "Query Successful")
  ```
  This example checks for any failure codes and logs the associated error message if present.


---



The META - keyword feature in DronaHQ provides a powerful way to access additional information about your queries, making your apps more dynamic and resilient. By using `{{query_name.META.<properties>}}` effectively, you can enhance error handling, monitor query performance, and make data-driven decisions within your app.

