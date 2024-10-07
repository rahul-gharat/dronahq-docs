---
sidebar_position: 1
title: Set Data Queries Value
---


import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Set Data Queries Value Action

The Set Data Queries Value action enables you to configure and assign values to data queries in your application. This is a powerful feature that allows you to dynamically manage and manipulate data based on your app's needs.


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-data-queries-value/set-data-queries-value.png" alt="Set Data Queries Values" />
<figcaption align='center'><i>Set Data Queries Values</i></figcaption>
</figure>


### Configuration Fields

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-data-queries-value/feild.jpeg" alt="Set Data Queries Values" />
</figure>

1.  Select Data Query: Choose the specific data query you want to work with. Data queries are essential for fetching, updating, or managing data in your app.

3. Enter Value (Use Keywords for Dynamic Values): Here, you can set the value you want to assign to the selected data query. You have the flexibility to use keywords to dynamically fetch values from form controls, variables, or other sources.

4. Add More: If you need to configure additional data queries with values, you can use the "Add More" option to repeat this process for multiple data queries.

### Usage

Once you've configured the action fields, your action flow is ready to set values to the specified data queries. When this action is triggered, it will set the values based on the dynamic content you've defined in the "Enter Value" field, ensuring that your data stays up-to-date and responsive to user interactions.

This action is particularly useful for scenarios where you need to update data, initialize variables, or maintain the state of your app based on user inputs or other triggers.
