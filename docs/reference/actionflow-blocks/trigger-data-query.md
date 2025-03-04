---
sidebar_position: 1
title: Trigger Data Queries 
---


import Thumbnail from '@site/src/components/Thumbnail';


The Trigger Data Query feature in DronaHQ allows you to initiate actions that connect various data sources or controls within your app, enabling a more dynamic and interactive experience.



<figure>
<Thumbnail src="/img/reference/actionflow-blocks/trigger-data-query/trigger-data-query.jpg" alt="Trigger Data Query" />
<figcaption align='center'><i>Trigger Data Query</i></figcaption>
</figure>


### Understanding the TriggerDataQuery Action
With this action, you can pass specific parameters and trigger queries based on user interactions or other control actions. This feature is essential for creating responsive workflows, where user input or certain conditions initiate real-time data queries.

### Using the TriggerDataQuery Action
1. Choose the relevant query that you wish to trigger from your data source.
2. Define any specific parameters that should be passed to the query based on user inputs or predefined conditions.

### Custom Parameters  

This section allows users to pass custom parameters, which can be useful for executing queries within a trigger. By including custom parameters, users can dynamically control query execution based on specific conditions.  

For example, suppose we need to trigger a data query to fetch data based on a given **ID**:  

```json
{
    "id": {{tablegrid.id}}
}
```  

When the data query is triggered, it will automatically include this parameter, ensuring the query retrieves relevant data.  

Example query:  

```sql
SELECT id, name, email, created_at  
FROM users  
WHERE id = "{{id}}";
```  

3. Use the dropdown to link the data query and adjust advanced settings as needed.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/trigger-data-query/feild.jpeg" alt="Trigger Data Query" />
<figcaption align='center'><i>Trigger Data Query</i></figcaption>
</figure>
