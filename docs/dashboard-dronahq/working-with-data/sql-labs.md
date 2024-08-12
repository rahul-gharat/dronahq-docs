---
sidebar_position: 2
title: SQL - Query & Analysis
---

import VersionedLink from '@site/src/components/VersionedLink'; 
import Basics from '@site/static/icons/features/basics.svg'; 
import ArrowRight from '@site/static/icons/arrow_right.svg'; 
import Image from '@site/src/components/Image'; 
import Thumbnail from '@site/src/components/Thumbnail';

DronaHQ dashboard provides a dedicated workspace for user to work with data using SQL queries. This primary usage of SQL Labs is to create virtaul datasets. This enables the combining of different schemas from different connectors avaiable in the dashbaord. User gets the freedom of populating data according to their need while using sql queries. Alomgside, there are other benifits provided like:

- Browse the metadata of the databse,
- Running mulitple queries with multi-tab feature,
- A search engine to find queries executed in the past,
- Provind parameters to the query,
- Direct access to chart building, download as CSV, and more.

While the most of the work happes in `SQL Labs` and `Saved Queries`, we can acces to all the past queries from `Query History`.

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/sql-labs/sql-labs.jpeg" alt="Expose database in SQL Lab toggle." />
</figure>

## Understanding SQL Workspace

The very start point for creating a SQL query is to select the schema. Browse to and select different schema within the datasource, provided that Expose in SQL Lab is enabled in the database.

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/sql-labs/query.jpeg" alt="SQL query editor" />
  <figcaption align="center"><i>SQL query editor</i></figcaption>
</figure>


:::caution NOTE

The database but be exposed in SQL Lab. To ensure that this setting is enabled, browse to your `connectors` and select the Edit pencil icon. Then select Advanced and expand the SQL Lab section.

The `Expose database in SQL Lab` field should be selected.
<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/sql-labs/expose.jpeg" alt="Expose database in SQL Lab toggle." />
  <figcaption align="center"><i>Expose database in SQL Lab toggle.</i></figcaption>
</figure>

:::


## Multi-tab Queries

Multiple tabs for each query enable you to easily switch between different queries within one interface.

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/sql-labs/multi.jpeg" alt="Configure mulitple queries at once" />
  <figcaption align="center"><i>Configure mulitple queries at once</i></figcaption>
</figure>

## SQL Editor

Write in the SQL Editor panel which allows different data source semantics / comments and runs one query at a time. You even get to search for content within the Editor panel, use `CTRL+F` to launch the search function and enter a keyword. To replace a term, select the plus icon and enter a word after Replace with.

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/sql-labs/editor.jpeg" alt="SQL Editor with search function" />
  <figcaption align="center"><i>SQL Editor with search function</i></figcaption>
</figure>

## Query manager tab

Right under the SQL editor there are several option which user can explore to have a profopund experience with SQL editor:

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/sql-labs/manage-query.jpeg" alt="manage your SQL query" />
  <figcaption align="center"><i>manage your SQL query</i></figcaption>
</figure>

1. Run: Click `Run` to execute the query. This action will display the query results in the data section below.
2. Limit: Set the maximum number of rows you want to retrieve or display at a time.
3. Timer: This feature displays the time taken for the query to execute, providing insight into performance.
4. Save: Click `Save` to store the query. You'll be prompted to provide a name and description. You can also save the query as a dataset from this menu.
5. Copy Link: Copy the link to the query, provided it has been saved already, for easy sharing or later use.
6. Further Options:
   - Parameters: This allows you to assign a set of parameters asJSON, and they become available in your SQL by using Jinja templating syntax.
   - Auto-completion: Toggle this feature to enable or disable SQL code auto-completion.
   - Format SQL: Automatically format your SQL code for better readability.
   - Keyboard Shortcuts: Access and utilize various keyboard shortcuts for more efficient SQL editing.

## Sql Editor Tabs

### Results tab

View the results of your queries here. There are mulitple tools provided in this tab.

- Create Chart: Once the query is ready and saved, user can directly swicth to building a chart using the query, by clicking `Create Chart`.
- Download to CSV: The SQL queries can be used to create datasets and this can be obtained in system by downloading to CSV format.
- Copy to Clipboard: Copy data to your systen's clipboard.

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/sql-labs/result-tab.jpeg" alt="Different tools in Results Tab" />
  <figcaption align="center"><i>Different tools in Results Tab</i></figcaption>
</figure>

#### Considerations When Executing Queries

When using the SQL Editor, consider the following:

- Displaying Results: Only the result of the last executed query will be shown, even if multiple queries are present in the SQL Editor.

- Query Timeout: Queries might time out if they do not return data within the set waiting period (default is 6 hours) or if the web server request times out.

- Row Limitations: The number of rows retrieved from the database is capped for several reasons:
  - Efficiency: Retrieving excessive data is unnecessary and inefficient.
  - Avoiding Long Execution Times: Row limits help prevent queries from running for extended periods.
  - Preventing Database Overload: Limits help avoid running `SELECT * FROM` on large tables, which could overwhelm the database.

#### Handling Query Failures

Query errors may arise due to inconsistencies between your query and the database structure. Common issues include:

- Invalid References: A query can fail if it references a column or table that no longer exists in the database. You can either update the query to reference existing elements or remove the outdated references.

- Incomplete Query: A query will not execute if required parameters are missing. Ensure all parameters used in the query are correctly defined in a valid JSON document.

### Query History Tab

The Query History tab, as the name suggests, displays a record of all previously executed queries. It provides essential details like whether the query was successful or failed, the start time, duration, and progress status (if the query is still running), among other relevant information.

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/sql-labs/history.jpeg" alt="View the history of the SQL query" />
  <figcaption align="center"><i>View the history of the SQL query</i></figcaption>
</figure>

Of particular note is the Actions column, which enables you to do the following:

- Edit (pencil icon): Overwrite text in the editor with a query on the selected table.
- New Tab (plus icon): Runs the query in a new tab.
- Trash Bin: Removes the query from the history log.