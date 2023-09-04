---
sidebar_position: 1
title: Get Data from Sheets
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Get Data from Sheets Action

The `Get Data from Sheets` action allows you to retrieve data from spreadsheets or sheets within your application. This can be particularly useful when you need to access structured data from sheets for various purposes within your app.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/get-data-from-sheet/get-data-from-sheet.jpeg" alt="Get Data from Sheets" />
<figcaption align='center'><i>Get Data from Sheets</i></figcaption>
</figure>

Here's how to use the `Get Data from Sheets` action:

1. Access the Logic Block: Navigate to the Server-side actions > Logic block.

2. Select `Get Data from Sheets`: Click on the `Get Data from Sheets` action and then click `Continue` to configure it.

3. Add Formula Variables: In the configuration, you can add variables under the `Add Formula Variables` section. Enter a variable name and provide the formula for fetching the desired data. You have the flexibility to use functions like `AND`, `OR`, `LOOKUP`, `DLOOKUP`, and others to precisely retrieve your data.

4. Define Variables: Add variables as needed to fetch specific data. These variables will become accessible in other action flow tasks, such as on-screen actions, using the syntax `taskname.variable.`

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/get-data-from-sheet/action.jpeg" alt="get-data-from-sheet" />
</figure>

In this example, we're fetching data from a sheet using the `LOOKUP` function and then utilizing it in another action task by referencing the variable name.

Using `Get Data from Sheets` enables you to integrate spreadsheet data seamlessly into your application's logic, opening up various possibilities for data-driven functionality.
