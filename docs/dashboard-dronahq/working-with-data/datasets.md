---
sidebar_position: 1
title: Creating Datasets
---

Datasets in DronaHQ Dashboard are curated representations of data from your database. They enable the creation of charts with unified metric definitions, ensuring consistency and accuracy. Datasets are crucial as every chart in DronaHQ Dashboard is created from a dataset. They offer flexibility in modeling data, allowing you to present information tailored to specific audiences in charts or dashboards.

In this article, we will explore how DronaHQ Dashboard works with your data to create and manage datasets effectively.

A dataset in DronaHQ Dashboard is an abstraction that points to data in your database. This data is then used to create charts.

## How to Use a Dataset

The primary purpose of a dataset is to enable chart creation. You can create a chart in two ways:

1. Using the Chart Gallery:
   - Select a dataset and a chart type from the Chart Gallery screen.
   - Configure the chart accordingly.

2. Using the Explore Interface:
   - Select a dataset from the Datasets screen.
   - Use the Explore interface to configure your chart.


## Physical Datasets

Physical datasets are tables in your connected database. Adding a physical dataset is a quick way to get started with chart creation in DronaHQ Dashboard.

### Adding a Physical Dataset

1. Navigate to the Datasets screen.
2. Select + Dataset.
3. In the drop-down lists, select a database, schema, and a table.
4. Click Add.

Your dataset is now ready for chart creation.

### Accessing Physical Datasets

Physical datasets are indicated by black grid icons on the Datasets screen and are designated as "Physical" under the Type column. You can manage, explore, delete, and view these datasets just like virtual datasets.

## Virtual Datasets

Virtual datasets are views of data created within DronaHQ Dashboard using SQL Lab. This allows you to use SQL operations like JOIN to build your dataset.

### Creating a Virtual Dataset

1. Hover over SQL Lab in the Toolbar and select SQL Editor.
2. Compose your SQL query and run it.
3. In the Results tab, select Explore to view your query in the Chart Builder.
4. Save your data view as a virtual dataset.

### Accessing Virtual Datasets

Virtual datasets are indicated by blue grid icons on the Datasets screen and are designated as "Virtual" under the Type column. They can be managed, explored, deleted, and viewed just like physical datasets.

## Editing Datasets

### Customizing Your Dataset

Datasets added to DronaHQ Dashboard can be customized to align with your specific audience needs. You can define data availability, specify date formats, and change labels. 

#### Editing a Dataset

1. Hover over a dataset row and select the pencil Edit icon under the Actions column.
2. The Edit Dataset panel will appear.

#### Source Tab

- Manage the source powering your dataset.
- Specify the type (Physical or Virtual).
- Map it to a database and schema.
- For Physical Datasets, specify the table.
- For Virtual Datasets, set a title and SQL query.

### Metrics

Metrics perform operations on a set of data and are used for calculations based on aggregation or pivoting rows to columns.

#### Adding a Metric

1. Select the Metrics tab in the Edit Dataset panel.
2. Click + Add Item.
3. Define the metric details in the new row that appears.
4. Click Save.

### Columns

The Columns tab displays all column data within the dataset.

#### Editing Columns

1. Select the Columns tab in the Edit Dataset panel.
2. Edit fields like Column name, Data type, and more.


####  Sync Columns from Source

The Sync Columns from Source button fetches updated metadata from the dataset source, reflecting changes to the columns.

### Calculated Columns

Calculated columns refine raw data into a more meaningful format for end-users. They are created using SQL expressions and are not available in SQL Lab.


