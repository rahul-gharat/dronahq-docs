---
sidebar_position: 1
title: Data binding framework
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Data binding framework

DronaHQ has a very unique data binding framework which lets you as a creator to quickly start building data apps without worrying about the lifecycle of the data and its changes. Primarily you can bind data into controls using the following ways:

- [Data queries to controls](../data-binding-framework/#data-queries-to-controls)
- [Controls or keywords to controls](../data-binding-framework/#controls-or-keywords-to-controls)
- [Actionflows to controls](../data-binding-framework/#actionflows-to-controls)

## Data queries to controls

DronaHQ enables your controls to interact with various data sources by using data queries. With DronaHQ, you can seamlessly query most databases and APIs.

Lets say you can set your Tablegrid's data to be ``{{data_query1.data}}`` where your data query is selecting data from an SQL, and the Tablegrid will then display data from data_query1. Also you can run a data query on click of a Button to trigger a specific action, such as {{update_data}}, which can initiate an API POST request.

### Basics
Queries that do not alter data like SELECT SQL statements or GET API requests, automatically run when the screen on which the Tablegrid exists opens. In case this data query is not used or referenced anywhere, the server call will not happen. Subsequently, if the dynamic variables in these read-only queries change (e.g., select * from products where id = {{dropdown}}), they will automatically re-run to fetch updated information if the `run query on` property is set to `automatically run when variables change`.

If there are queries that modify data like INSERT SQL statements or POST API requests they should only run when explicitly triggered. Lets say you have a table of products and an UPDATE statement that updates the products quantity, if you set the `run query on` property `manually trigger`, you will have to configure an actionflow with the `Run data query` block typically on click of a Button. This approach prevents accidental data overwriting.

### When are queries triggered
Queries that only read data SELECT SQL statements or GET API requests will automatically refresh whenever their parameters change. For example, the following query will update automatically every time dropdown value changes: 
```sql
SELECT * FROM products WHERE id = {{dropdown}}
```

:::caution Auto evaluating Data queries on variable change

Running data queries has 2 options namely: `Every time variables change` and `Manual trigger`.
Queries that write data ideally should not run automatically when their parameters change and the `Manual trigger` needs to be set.

Imagine your query pulls in the value from a TextInput, every time you entered a keystroke in the TextInput, the query would get called once. So you would find multiple rows inserted in your database. The best way is to add a button that triggers the INSERTS or POST.
If you are using any dynamic referencing to any control, keyword or another data query and it changes, DronaHQ auto evaluates the Data Query again if the run query value is set to `Every time variables change`.

:::

This is the most basic way of connecting data to your controls. You can get data into your data queries using the following methods:

- [Connector library](../data-queries/connector-library) - All the database queries or API calls that are configured at the account level as a library.
- [Connector queries](../data-queries/connector-queries) - Raw database queries or API calls that are configured in the apps.
- [HTTP requests](../data-queries/http-requests-curl) - Recommended only for non authenticated API calls.
- [Custom Javascript](../data-queries/custom-js) - Configure input params and write custom javascript to build your data.
- [Variable](../data-queries/variable) - Static data which might be required.
- [Query JSON using SQL](../data-queries/query-json-using-sql) - Write your SQL queries to query any JSON object.
- [DQL](../data-queries/dronahq-query-language) - Write your own DronaHQ Query Language to query any JSON object and build your data.



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

There are times when one control is dependent on another control or keyword, you can reference the same using `{{control_unique_name}}` or `{{keyword}}` in the JS section of the control data binding. You can use any of the output variables that the specific control provides. For e.g. `{{tablegrid.column}}`

:::info Please Note

At any point of time in the apps lifecycle if the referenced control or keywords value changes, this data binding is auto evaluated and the data will be updated. 

:::

:::caution Trigger dependents

In case you are referencing a control across multiple screens and its adding a substantial lag in auto evaluating each time a value changes, you can switch `OFF` the property `trigger dependents` on that particular control.

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