---
sidebar_position: 1
title: Data binding framework
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Data binding framework

DronaHQ has a very unique data binding framework which lets you as a creator to quickly start building data apps without worrying about the lifecycle of the data and its changes. Primarily you can bind data into controls using the following ways:

- [Data queries to controls](../data_binding_framework/#data-queries-to-controls)
- [Controls or keywords to controls](../data_binding_framework/#controls-or-keywords-to-controls)
- [Actionflows to controls](../data_binding_framework/#actionflows-to-controls)

## Data queries to controls

This is the most basic way of connecting data to your controls. You can get data into your data queries using the following methods:

- [Connector library](../data-queries/connector_library) - All the database queries or API calls that are configured at the account level as a library.
- [Connector queries](../data-queries/connector_queries) - Raw database queries or API calls that are configured in the apps.
- [HTTP requests](../data-queries/http_requests_curl) - Recommended only for non authenticated API calls.
- [Custom Javascript](../data-queries/custom_js) - Configure input params and write custom javascript to build your data.
- [Variable](../data-queries/variable) - Static data which might be required.
- [Query JSON using SQL](../data-queries/query_json_using_sql) - Write your SQL queries to query any JSON object.
- [DQL](../data-queries/dronahq_query_language) - Write your own DronaHQ Query Language to query any JSON object and build your data.

:::info Please Note

If you are using any dynamic referencing to any control, keyword or another data query and it changes, DronaHQ auto evaluates the Data Query again. Incase you dont want it to happen, you should set the 'run query' dropdown to `only on manual trigger`. 

:::

```mermaid
sequenceDiagram
	Data-sources->>Data-Queries: Initializing data
    Note over Data-sources,Data-Queries: Get data into your Data Queries.
	Data-Queries->>Controls: Binding data
    Note over Data-Queries,Controls: Bind using {{dataquery}}
  ```

<figure>
  <Thumbnail src="/img/binding-data/dataqueries.png" alt="dataqueries" width='100%'/>
  <figcaption align = "center"><i>Data queries</i></figcaption>
</figure>

## Controls or keywords to controls

There are times when one control is dependant on another control or keyword, you can reference the same using `{{control_unique_name}}` or `{{keyword}}` in the JS section of the control data binding. You can use any of the output variables that the specific control provides. For e.g. `{{tablegrid.column}}`

:::info Please Note

At any point of time in the apps lifecycle if the referenced control or keywords value changes, this data binding is auto evaluated and the data will be updated. 

:::

:::caution Trigger dependents

Incase you are referencing a control across multiple screens and its adding a substantial lag in auto evaluating each time a value changes, you can switch `OFF` the property `trigger dependents` on that particular control.

:::

<figure>
  <Thumbnail src="/img/binding-data/control-binding.png" alt="Bind to controls" width='100%'/>
  <figcaption align = "center"><i>Bind data to controls</i></figcaption>
</figure>

## Actionflows to controls

DronaHQ also provides a way in which you can bind data to controls using actionflows, only at particular events like a button click. You can use the `Set control value` action to bind data to a control at runtime. 

<figure>
  <Thumbnail src="/img/binding-data/actionflow.png" alt="Bind using actionflow" width='100%'/>
  <figcaption align = "center"><i>Bind using actionflow</i></figcaption>
</figure>