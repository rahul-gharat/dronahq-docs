---
sidebar_position: 1
title: Creating Your First Dashboard on DronaHQ
---

import VersionedLink from '@site/src/components/VersionedLink';
import Basics from '@site/static/icons/features/basics.svg';
import ArrowRight from '@site/static/icons/arrow_right.svg';
import Image from '@site/src/components/Image'; 
import Thumbnail from '@site/src/components/Thumbnail';
 


Creating dashboards in DronaHQ allows you to visualize and manage data effectively. This guide is designed to help data analysts, business analysts, and data scientists make the most of DronaHQ's user-friendly interface for comprehensive data exploration and visualization. With this step-by-step tutorial, you'll learn to create powerful dashboards in minutes, all without needing to write any code.

This tutorial is intended for users who want to create charts and dashboards in DronaHQ. We’ll cover how to create a new dataset, configure a table for analysis, explore the data, and add visualizations to a dashboard. Start by navigating to DronaHQ Dashboards from your DronaHQ account.

### Connecting to Datasets

On the Dashboard Home screen, click the `+` button at the top, then select `Data > Create Dataset`. This will allow you to connect to databases and create datasets. Choose your database from the dropdown menu.

Datasets can be created from database tables or SQL queries. To proceed, select a database table or create a dataset from an SQL query by opening SQL Lab. From there, you can save the query as a dataset. Once the schema is loaded, select the appropriate table. After the table columns are fetched, the `Create Dataset and Create Chart` button will be enabled. Click this button to create your dataset, and a new screen with chart creation options will appear.

### Creating a New Chart

After creating the dataset, you will be redirected to the Chart Creation section, where your newly created dataset will already be selected. Alternatively, you can manually click `+` and select Chart, then choose the dataset you created.

DronaHQ Dashboard offers a wide variety of charts and tags for users to choose from. Select the chart type you want to use for your dataset, then click `Create New Chart`.

### Data Visualization Configuration

In the next step, you will configure the data available to you. Select different columns from the metrics, apply filters, and set the order. Customize the result data format, color, attribute names, and more. Once you have configured the settings, click `Create Chart`.

A preview of the chart with the provided data configuration will be generated. You can make further customizations; after each edit, click `Update Chart`. 

When you are satisfied with the chart, click `Save`. Provide a name for the chart and click save again.

### Building the Dashboard

While saving the chart, you will find an option to save and continue to the dashboard. Alternatively, click the `+` icon at the top and select `Dashboard`. This will open a blank dashboard builder, which is straightforward to use.

The builder allows you to create a new chart or select from the list of available charts. Drag and drop the chart you created into the builder. There are layout elements such as tabs, rows, columns, headers, text, and dividers to enhance your dashboard.

Once you are done, click `Save`, and your dashboard in DronaHQ will be ready.