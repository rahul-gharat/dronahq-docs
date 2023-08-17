---
sidebar_position: 3
title: "Building a basic app"
id: start-building
slug: /getting-started/start-building
description:  Learn the basics of building an app on Dronahq.
---

import Thumbnail from '@site/src/components/Thumbnail';
import Image from "@site/src/components/Image";

# Build Your First App

:::info
⭐ **Level** - Beginner <br/>
⏱️ **Time** - 15 minutes
:::

This tutorial guides you through the steps to create a simple database GUI using Dronahq. The application connects to a sample PostgreSQL database, allowing you to read and update customer information. You'll learn to:
* Create a new application.
* Connect to a database and fetch data.
* Display the data in a Tablegrid control.
* Build form to view customer details.
* Edit and update the customer detail.
* Publish the application

Here's a screenshot of the final result:

<figure>
  <Thumbnail src="/img/getting-started/customer-management-app.png" alt="Customer Managment App" />
  <figcaption align = "center"><i>Customer Managment App</i></figcaption>
</figure>

Let's get started!

## Prerequisites

* An Dronahq account. If you don’t have one, sign up on [Dronahq Cloud](https://www.dronahq.com/).

## Create a new application

1. When you login into DronaHQ, it opens `My Apps` on the homepage by default. You need to create a new empty application for this tutorial. To create a new app, click the `+` icon (which is usually the first icon on the screen). Select `Blank App -> Add App Name, Description, Logo -> CREATE APP`.

  Here, you can give App name as `Customer Management`, provide description as `App to manage customer info` and choose any logo.

<figure>
  <Thumbnail src="/img/getting-started/create-app.png" style= {{width:"100%", height:"auto"}} alt="Create new application"/>
  <figcaption align = "center"><i>Create new application</i></figcaption>
</figure>

2. Blank App will open in a new tab with default `Screen 1` added. 

## Connect to a Datasource

Here, we will connect to a `mysql` database. 

1. Go to `Connector Library -> + Connector -> MySQL`

<figure>
  <Thumbnail src="/img/getting-started/select-connector.png" style= {{width:"100%", height:"auto"}} alt="Connect to MySQL database"/>
  <figcaption align = "center"><i>Connect to MySQL database</i></figcaption>
</figure>

2. Enter `Connector Name` as `customerTutorialDB`.

3. Enter following connector string.

  ```sql
  mysql://<username>:<pwd>@db-dhq.c8jniapv05hb.us-east-1.rds.amazonaws.com:3306/dbonbording
  ```

4. Click the `Test connection` button to test the connection and ensure the database is valid.


5. Click `SAVE` to create and save the database connection. You'll see the `customerTutorialDB` database in Connectors listing.


🚩 You've successfully connected to the MySQL database that contains customer information.

## Fetch customer data

1. Select `Connector Library -> customerTutorialDB -> + New Query`.


<figure>
  <Thumbnail src="/img/getting-started/add-query.png" style= {{width:"100%", height:"auto"}} alt="Add Query"/>
  <figcaption align = "center"><i>Add Query</i></figcaption>
</figure>

2.  It loads the query editor which list all the tables of `customerTutorialDB` database. 

3. Enter query name as `getCustomers`.

4. Enter below query under `Write Your Query` to get first 10 `customers`.

```sql
select * from Customers ORDER BY id asc LiMIT 10;
```
5. Click on `Test Query` and then `Save` this query once test is successful.

🚩 You've created your first query to fetch the list of customers in the database.

## Display customer data in Table Grid

1. Click the `Controls` option in navigation menu to the left of screen.

2. Drag a `Table Grid` control and drop it to the on the canvas.

3. Select `Table Grid` control and select `Data` option in navigation menu to the right of screen.

4. Select `Quick Select -> Connector Lirary -> customerTutorialDB -> getCustomers query`. 

<figure>
  <Thumbnail src="/img/getting-started/use-getcustomers-query.png" style= {{width:"100%", height:"auto"}} alt="Bind GetCustomers Query"/>
  <figcaption align = "center"><i>Bind GetCustomers Query</i></figcaption>
</figure>


5. Under `Transform Response -> Filter Keys` you can choose the list of keys that will be displayed in Table Grid control. If no keys are selected then all the Keys will be selected. 

6. Click `Test & Save`. This will display customers list in Table Grid control. 

🚩 You've displayed the results from the `getCustomers` query in the Table Grid control.

## Build form to view customer details

1. From the `Controls` option, drag and drop a `Container` control on the canvas to the right of the Table Grid control.

2. Select `Container` control and on the `property` pane to the right of the Screen, under `Label` section, turn off the hidden toggle and rename the Text to `Customer Details` from Container.

3. Now add `Image` control in the above container. Select `Image` control, on the `data` pane to the right of the Screen, type `{{tablegrid.avatar}}` and click `Save`.

4. Now, add `Text Input` control in the above container, Select this `Text Input` control
    1. On the `property` pane to the right of the Screen, under `Label` section, rename the Text to `Full Name` from Default value.
    1. On the `data` pane to the right of the Screen, type `{{tablegrid.fullname}}` and click `Save`. 

5. Now, Let's do the same for Customer's department. Add another `Text Input` control in the above container, Select this `Text Input` control
    1. On the `property` pane to the right of the Screen, under `Label` section, rename the Text to `Department` from Default value.
    1. On the `data` pane to the right of the Screen, type `{{tablegrid.department}}` and click `Save`. 

6. Now, Let's do the same for Customer's email address. Add another `Text Input` control in the above container, Select this `Text Input` control
    1. On the `property` pane to the right of the Screen, under `Label` section, rename the Text to `Email` from Default value.
    1. On the `data` pane to the right of the Screen, type `{{tablegrid.email}}` and click `Save`.  

7. And finally, for Customer's address, Add `Textarea` control in the above container, Select this `Textarea` control
    1. On the `property` pane to the right of the Screen, under `Label` section, rename the Text to `Address` from Default value.
    1. On the `data` pane to the right of the Screen, type `{{tablegrid.address}}` and click `Save`.  

🚩 You've completed binding the data to the controls on the Form. Select the rows on the Table Grid to view the corresponding customer details on the Form.

<figure>
  <Thumbnail src="/img/getting-started/view-data-form.png" style= {{width:"100%", height:"auto"}} alt="View customer details Form"/>
  <figcaption align = "center"><i>View customer details Form</i></figcaption>
</figure>

## Update customer details

1. Select `Connector Library -> customerTutorialDB -> + New Query`.

2.  It loads the query editor which list all the tables of `customerTutorialDB` database. 

3. Enter query name as `updateCustomer`.

4. Enter below query under `Write Your Query` to update `Customers` table.


```sql
 UPDATE Customers 
  SET fullname = "{{CustomerFullName}}", 
  department = "{{CustomerDepartment}}",
  address = "{{CustomerAddress}}",
  email = "{{CustomerEmail}}"
  WHERE id = {{CustomerID}};
```

Provide Test values for `CustomerID` field as `100`. For other fields you can provide provide any test value or keep it empty.

5. Click on `Test Query` and then `Save` this query once test is successful.

6. Now, in our form, From the `Controls` option, drag and drop a `Button` control in our Container control.

7. Select this `Button` control 
    1. On the `property` pane to the right of the Screen, scroll down to the `PROPERTIES` accordion, rename the Text to `Update Customer` from Action.
    1. On the `events` pane to the right of the Screen, select `button_click` event and follow below steps.

8. Click ` + (Add) -> Server Side Actions -> customerTutorialDB -> updateCustomer`

9. Click `Continue` and provide following query parameters with that of corresponding control.
    1. For CustomerAddress, Add `{{address}}`
    1. For CustomerDepartment, Add `{{department}}`
    1. For CustomerEmail, Add `{{email}}`
    1. For CustomerFullName, Add `{{fullname}}`
    1. For CustomerID, Add `{{tablegrid.id}}`

10. Click `Continue` and then `Finish`.
11. In the success leg, we need to reload Tablegrid control's data to see the updated change. Click `+ (Add) -> Run Data Queries -> getCustomers`. Click `Continue` and then `Finish`.

:::info PLEASE NOTE

Tablegrid control is getting data from `getCustomers` data query. Thereby, triggering a change in `getCustomers` data query by re-running it, the result will be passed to Table Grid control automagically.

:::

12. Click on `Preview` button on the top right of the screen to `Test` the application and

13. Finally, click on `Publish` and  `Enter Release Notes -> Publish` to deploy your application. You can click on `Share` option to view various sharing options using `Organizational access or Public URL access`.

:::caution
  The databases used in tutorials are public and shared by all Dronahq users, so ensure that you don't input confidential information during testing. The Test databases automatically resets, so any updates made to these databases are temporary
:::

🚩 Congratulations on successfully building your first app that can display data from the database and save the updated data back into the database using Form.

In this tutorial, you explored a few different controls and created a simple database GUI to view, query, and update data on a sample MySQL database. You can use these skills to build your own app.

## Next steps

[Multiscreen Apps](/ui-builder/multiscreen-apps/)<br />