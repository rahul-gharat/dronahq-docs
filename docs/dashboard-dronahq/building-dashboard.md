---
sidebar_position: 2
title: Creating Your First Dashboard on DronaHQ
---

import VersionedLink from '@site/src/components/VersionedLink';
import Basics from '@site/static/icons/features/basics.svg';
import ArrowRight from '@site/static/icons/arrow_right.svg';
import Image from '@site/src/components/Image'; 
import Thumbnail from '@site/src/components/Thumbnail';
 


Creating dashboards in DronaHQ allows you to visualize and manage data effectively. This guide is designed to help data analysts, business analysts, and data scientists make the most of DronaHQ's user-friendly interface for comprehensive data exploration and visualization. With this step-by-step tutorial, you'll learn to create powerful dashboards in minutes, all without needing to write any code.

This tutorial is intended for users who want to create charts and dashboards in DronaHQ. We’ll cover from connecting database for creating dataset, to building chart, and add visualizations to a dashboard. Start by navigating to DronaHQ Dashboards from your DronaHQ account.

## 1. Connecting to Database

First, we need to add a connector. It has a `+ Database` button, which allows you to add a connector for your database where the data is stored and will be further used to create datasets and charts, eventually leading to the creation of a dashboard. 

This includes minimal steps: 
- Select the database, provide configuration details, and connect it. You can configure a number of advanced options in this window. 
- There are other options to try, such as CSV upload, columnar file upload, and Excel file upload.

<figure>
  <Thumbnail src="/img/dhq-dashboard/using-dashboard/creating-dashboard/database.jpeg" alt="Dashboard Connector Configuration " />
  <figcaption align="center"><i>Dashboard Connector Configuration </i></figcaption>
</figure>

## 2. Registering Dataset

Now that you’ve configured a data source, you can select specific tables that you want to expose in DronaHQ Dashboard for querying. 

Navigate to Datasets and select the `+ Dataset` button in the top right corner. 
- Datasets can be created from database tables or SQL queries. Once the schema is loaded, select the appropriate table. 
- After the table columns are fetched, the Create Dataset and Create Chart button will be enabled. 
- Click this button to create your dataset, and a new screen with chart creation options will appear.

<figure>
  <Thumbnail src="/img/dhq-dashboard/using-dashboard/creating-dashboard/dataset.jpeg" alt="Creating Dataset " />
  <figcaption align="center"><i>Creating Dataset </i></figcaption>
</figure>

## 3. Creating a New Chart

After creating the dataset, you will be redirected to the Chart Creation section, where your newly created dataset will already be selected. Alternatively, you can manually click `+ Chart`, then choose the dataset you created.

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src="https://demo.arcade.software/hVt4zPVfJsspSIQrLn9W?embed" 
        title="Theme Creation" 
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>


DronaHQ Dashboard offers a wide variety of charts and tags for users to choose from. Select the chart type you want to use for your dataset, then click `Create New Chart`.


### Data Visualization Configuration

In the next step, you will configure the data available to you. Select different columns from the metrics, apply filters, and set the order. Customize the result data format, color, attribute names, and more. Once you have configured the settings, click `Create Chart`.

A preview of the chart with the provided data configuration will be generated. You can make further customizations; after each edit, click `Update Chart`. 

You now have a robust workflow for exploring data and refining charts. 
* The Dataset view on the left displays a list of columns and metrics specific to the selected dataset. 
* The Data preview below the chart area provides useful data context. 
* Using the Data and Customize tabs, you can change the visualization type, select the time column, choose the metric to group by, and adjust the chart's aesthetics. 

Make sure to click the Run button to see visual feedback as you customize your chart.

In the screenshot below, we create a country Map Chart to visualize birth in France by region, simply by selecting options from the drop-down menus.

<figure>
  <Thumbnail src="/img/dhq-dashboard/using-dashboard/creating-dashboard/chart.jpeg" alt="Chart Building" />
  <figcaption align="center"><i>Chart Building</i></figcaption>
</figure>


When you are satisfied with the chart, click `Save`. Provide a name for the chart and click save again.

## 4. Building the Dashboard

While saving the chart, you will find an option to `save and continue` to the dashboard. Alternatively, click the `+` icon at the top and select `Dashboard`. This will open a blank dashboard builder, which is straightforward to use.

The builder allows you to create a new chart or select from the list of available charts. 
 * Drag and drop the chart you created into the builder. 
 * There are layout elements such as tabs, rows, columns, headers, text, and dividers to enhance your dashboard.

<figure>
  <Thumbnail src="/img/dhq-dashboard/using-dashboard/creating-dashboard/dashboard.jpeg" alt="Dashboard Creation" />
  <figcaption align="center"><i>Dashboard Creation</i></figcaption>
</figure>

Once you are done, click `Save`, and your dashboard in DronaHQ will be ready.