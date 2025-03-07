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

The `Custom Parameters` section allows users to pass specific values dynamically when executing a `Trigger Data Query`. These parameters take precedence over the default references defined within the data query itself, ensuring greater flexibility and control over query execution.  

#### When to Use Custom Parameters  

- Use custom parameters when you need to override default variable values in a query.  
- If a variable is `not passed` in the custom parameters section, its value will be automatically picked up from the references used within the data query section.  
- This feature is useful when executing queries based on user inputs or conditional triggers.  

#### Defining Custom Parameters  

When specifying values in the `Custom Parameters` section, ensure proper formatting based on the data type:  

- `String values` should be wrapped in double quotes (`" "`)  
- `Numbers and objects` do not require quotes  

##### Example Custom Parameters:  

```json
{
  "id": "{{tablegrid.id}}",
  "name": "{{name}}",
  "emp_id": {{enter_emp_id}},
  "address": {{address_var}}
}
```  

##### Example Query:  

```sql
SELECT id, name, email, created_at  
FROM users  
WHERE id = "{{id}}";
```  

In this case, if `id` is provided in the custom parameters section, the query will use that value. Otherwise, it will fall back on the reference defined within the data query.

:::tip

#### Checking Available Custom Parameters

When using the Trigger Data Query action, you can view or check the available custom parameters directly within the `Data Query` section. All you have to do is go to your data query and check for its `Trigger Query from JS option` You can see the expected parameters, including their keys and data types, making it easier to pass the correct values dynamically. This ensures that the values being sent align with the expected query format.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/trigger-data-query/params.png" alt="Trigger Data Query" />
<figcaption align='center'><i>You can use the highlighted format to pass on in the custom params.</i></figcaption>
</figure>

:::

3. Use the dropdown to link the data query and adjust advanced settings as needed.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/trigger-data-query/feild.jpeg" alt="Trigger Data Query" />
<figcaption align='center'><i>Trigger Data Query</i></figcaption>
</figure>
