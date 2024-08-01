---
sidebar_position: 1
title: Exploring Data on DronaHQ Dashboard
---

import VersionedLink from '@site/src/components/VersionedLink'; 
import Basics from '@site/static/icons/features/basics.svg'; 
import ArrowRight from '@site/static/icons/arrow_right.svg'; 
import Image from '@site/src/components/Image'; 
import Thumbnail from '@site/src/components/Thumbnail';


In this tutorial, we will explore what can be done with data in DronaHQ dashboards. We will cover every aspect, from loading data to building visualizations on the dataset. We will introduce key concepts in DronaHQ Dashboard by exploring a comprehensive dataset containing COVID-19 vaccination data from around the world. This tutorial aims to familiarize you with the process of creating and analyzing data, building informative dashboards, and utilizing various visualization tools offered by DronaHQ.

The dataset we will use includes detailed information about COVID-19 vaccine development and distribution on a global
scale. Specifically, the dataset provides insights into the following areas:

- Details of FDA-approved indications.
- Codes representing different countries.
- Information about clinical trials for diseases other than COVID-19.
- Names of countries involved in the dataset.
- Detailed information about clinical trials.

## Creating and Managing Datasets

The first step in building our dashboard is to create and manage datasets. To do this, navigate to the dashboards
section, click the `+ Dataset` button. 
This will allow you to import and organize the COVID-19 vaccination data. Once the data is available as a dataset, you can easily apply various analyses and create
feature-rich charts. After saving the dataset, all relevant metrics will be fetched and ready for use in different categorized tables and charts.

<figure>
  <Thumbnail src="/img/dhq-dashboard/using-dashboard/exploring-data/dataset.jpeg" alt="Creating dataset for covid data" />
  <figcaption align="center"><i>Creating dataset for covid data</i></figcaption>
</figure>

### Availing Data

To create a dataset, you must first connect a database using a connector. Follow the steps to configure a connector for your database. Additionally, there are other methods to avail data:

- Uploading CSV: You can upload a CSV file directly. Simply provide a table name and select the appropriate schema to structure the data.
- Columnar to Database Configuration: This method involves configuring a columnar data format to fit into your database schema, optimizing for storage and query performance.
- Excel to Database Configuration: Similar to CSV upload, this method allows you to upload Excel files. You will need to specify the table name and schema to ensure the data is correctly integrated into your database.

## Building the Dashboard

Once your dataset is ready, you can proceed to build the dashboard. Start by creating a new dashboard through
`+ > Dashboard`. Initially, your dashboard will be blank, but don't worry—we'll guide you through the process of
populating it with meaningful visualizations.

<figure>
  <Thumbnail src="/img/dhq-dashboard/using-dashboard/exploring-data/dashboard.jpeg" alt="dashboard Builder" />
  <figcaption align="center"><i>Dashboard Builder</i></figcaption>
</figure>

On the dashboard screen, you will find a button labeled `Create a New Chart`. This feature enables you to generate new
charts and tables using the dataset. 

<figure>
  <Thumbnail src="/img/dhq-dashboard/using-dashboard/exploring-data/chart.jpeg" alt="Chart selection with respective to dataset." />
  <figcaption align="center"><i>Chart selection with respective to dataset.</i></figcaption>
</figure>

By leveraging DronaHQ's powerful visualization tools, you can create a variety of
charts, such as bar graphs, line charts, pie charts, and more, to effectively present your data.

### Using Layout Elements : Text

To make your dashboard more attractive and improve the user experience, consider incorporating layout elements such as
Tabs, Rows, Columns, Headers, and more.


These elements help organize your dashboard content, making it easier to
navigate and understand.

Follow these steps to use elements:

- Navigate to `Layout Elements`.
- Within elements, drag and drop `Header` and `Text` elemets onto the dashboard. Look for the blue lines indicating where the box will go.
- Select the element to edit the text. Use Markdown format (see this Markdown Cheatsheet for more information).
- Toggle between Edit and Preview using the menu on top of the box.
- To exit editing mode, select any other part of the dashboard. Remember to save your changes using Save changes.


<figure>
  <Thumbnail src="/img/dhq-dashboard/using-dashboard/exploring-data/layout.jpeg" alt="Layout Elements." />
  <figcaption align="center"><i>Layout Elements.</i></figcaption>
</figure>


## Creating Charts for Dashboard
### Pie Chart

To visualize vaccine candidates per phase, start by creating a pie chart using the `covid_vaccine` dataset. Begin by selecting the Pie Chart option in the chart creation section. In the Query section, you can define dimensions by choosing from saved dimensions, simple dimensions, or by writing custom SQL queries. For metrics, count the clinical stages to represent the data accurately.

Now put these into as feilds

Here's the table based on the new query:



Dimension : Custom SQL 

```sql
    CASE 
    WHEN stage_of_development = 'Pre-clinical' THEN '0. Pre-clinical'
    WHEN stage_of_development = 'Phase I' THEN '1. Phase I' 
    WHEN stage_of_development = 'Phase I/II' or stage_of_development = 'Phase II' THEN '2. Phase II or Combined I/II'
    WHEN stage_of_development = 'Phase III' THEN '3. Phase III'
    WHEN stage_of_development = 'Authorized' THEN '4. Authorized'
    END
```

| Column                | Value                  |
|-----------------------|------------------------|
| DIMENSIONS            | Custom SQL            |
| METRIC                | COUNT(clinic_stage)                  |
| SORT BY METRIC        | Toggle On           |

In the Customize section, you can configure various options to enhance your chart. Adjust the color scheme, set the percentage threshold, and decide whether to show the legend. 

Finally, you can modify the pie shape by adjusting the outer radius or converting it into a donut chart by setting the inner radius. These customizations will help you create a visually appealing and informative pie chart that clearly illustrates the distribution of vaccine candidates across different phases.

Click `Create Chart`. Then click `Add to dashboard`. This chart will be added top dashboard. We are going to repeat this for every chart or table we create.

### World Map Chart

Let's create a World Map chart to visualize vaccine distribution across countries using the `covid_vaccine` dataset. Begin by selecting the World Map chart option in the chart creation section. In the Query section, specify the `country_name` column as the Country Column and set the Country Field Type to Full name. For the metric, use `COUNT(*)` to count the number of vaccine candidates per country.

In the Customize section, you can configure various options to enhance your chart. Enable the Show Bubbles option to display bubbles on the map, and set the Bubble Size based on the `COUNT(country_name)` metric. You can also adjust the color scheme and other visual settings to improve the chart's appearance.

Hit `Create Chart` and, you'll create a World Map chart that clearly illustrates the distribution of vaccine candidates across different countries. This chart will provide a visual overview, making it easier to identify regions with significant vaccine development activity.

### Sunburst Chart

To create a Sunburst chart that visually represents the hierarchy of vaccine candidates based on product category and clinical stage using the `covid_vaccine` dataset, begin by navigating to the chart creation section where you can select the `Sunburst Chart` option. 
Next, define the query structure: 
set the hierarchy levels with `product_category` as the primary level and `clinical_stage` as the secondary level. 

Use `COUNT(*)` as the primary metric to quantify the number of entries within each level.

Customize the chart in the next step by adjusting visual settings to enhance clarity and impact. Optimize color schemes and other display options to improve the chart's intuitiveness and informativeness.

Apply relevant filters to focus on specific subsets of data, and adjust row limits and other chart settings as needed. Finally, click on `Create Chart` to generate the Sunburst chart and review the results for accuracy and clarity. 


## Publishing Stage Essentials

Once you've finished building your dashboard, click "Save" at the top. Your dashboard will resemble something like this:

Great job on creating your dashboard! Before publishing, let's review some essential steps. Click on `Edit` and then `---`, and select "Edit Properties".



| Section                 | Details                                                                 |
|-------------------------|-------------------------------------------------------------------------|
| Basic Information   |                                                                       |
| Name                    | Provide Name for your dashboard.                                                   |
| URL Slug                | A readable URL for your dashboard                                       |
| Access              |                                                                       |
| Owners                  | Owners are users who can modify the dashboard. Searchable by name or username. |
| Colors              |                                                                       |
| Color Scheme            | Select a scheme                                                         |
| Certification       |                                                                       |
| Certified By            | Person or group that has certified this dashboard                       |
| Certification Details   | Any additional details to display in the certification tooltip           |


#### ADVANCED

JSON Metadata

This JSON object is generated dynamically when you click "Save" or "Overwrite" in the dashboard view. It's provided here for reference and for power users who may wish to modify specific parameters. Please DO NOT overwrite the "filter_scopes" key; use the "Set Filter Mapping" menu instead.


Hit `Appy`, now your Dashboard is ready to be published. Click `Save` and then `Publish` with provided release note and versioning.