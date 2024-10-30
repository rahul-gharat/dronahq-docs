---
sidebar_position: 1
title: Data Query Performance
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

Learn about data query performance at different stages.

:::info
You can also view the query performance in the `Logs` window in App's `Preview` to visualize and identify long query run times by simply hovering over the time field.
:::

For complex queries or those retrieving substantial data, understanding performance at each stage is crucial. DronaHQ provides detailed insights into query performance, distinguishing between backend and frontend processing times. With this, you can easily monitor data query performance to optimize your app's efficiency. 

Once data queries are complete, their total runtime is shown in the data query sidebar. Hovering over this runtime displays a popover menu with a detailed performance breakdown.

<figure>
  <Thumbnail src="/img/building-apps-concepts/query-performance/query-performance.png" alt="Data Query Performance on Save" />
  <figcaption align='center'><i>You can access query runtime statistics on hover once a query is saved.</i></figcaption>
</figure>


## Resp. Size
The total Response size of the results for the given query. Larger payloads result in longer processing times in both the DronaHQ backend and frontend.


## Total time
The total time taken for the query to execute and receive a complete set of results.

## Prepare Data Query
The time required by DronaHQ’s frontend to prepare all inputs, format the request, and forward it to the DronaHQ backend to execute the query with the connected resource.

## Backend
The time taken by DronaHQ's backend to run the query with the specified resource and transfer data to and from DronaHQ backend. This includes the following measurements:

| Measurement |	Description |
|--|--|
| Authentication | Time taken by DronaHQ's backend to retrieve the authentication details for the connected resource needed to be sent for executing query. |
| Query Execution | Time taken by DronaHQ's backend to prepare, run the query with the connected resource, and receive a response. This duration may be affected by network latency and the resource's query processing time. Larger queries or responses may experience more noticeable delays due to network quality and bandwidth needs. |
| Transfer Data | Time needed to transfer the query and its results between DronaHQ’s backend and frontend.|

## Frontend
The time DronaHQ’s frontend requires to process and render query results, with the following key metrics:

| Measurement |	Description |
|--|--|
| Transform Response | Time taken to receive the query response in the DronaHQ frontend and process the query's original data property using your Transform Response |
| Post Processing | Time taken to update all app dependencies that reference this query. For example, a Table Grid component displaying {{query1}} or a Text Input component showing {{query1.name}}. More dependencies mean longer post-processing times. |