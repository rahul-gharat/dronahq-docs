---
sidebar_position: 2
title: Dashboard data -  Filtering & Drilling
---

import VersionedLink from '@site/src/components/VersionedLink'; 
import Basics from '@site/static/icons/features/basics.svg'; 
import ArrowRight from '@site/static/icons/arrow_right.svg'; 
import Image from '@site/src/components/Image'; 
import Thumbnail from '@site/src/components/Thumbnail';


DronaHQ's Dashboard Filters provide a way to manage data filtering. From any dashboard, you can expand the Filters sidebar to effortlessly apply multiple filters across all charts within that dashboard.

The "Value" filters allow you to specify values for any column in your dataset, offering great flexibility with various filter options. "Numerical range" filters let you easily define a range for numeric values, such as pricing or years. Additionally, Dashboard includes several time-based filters—Time Range, Time Column, and Time Grain—that enable you to filter all charts according to the time column in your dataset.

With both basic and advanced configuration settings, you can enhance your filter options and improve usability.


<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/filter-drill/add-filter.jpeg" alt="Add/Edit Filter" />
  <figcaption align="center"><i>Add/Edit Filter</i></figcaption>
</figure>


## Different Filter Types

n the Add and edit filters window, under the `Settings` tab, there are several sections. 
The first section consists of four essential fields:

1. Filter Type: Choose a filter type from the available options, which include Value, Numerical Range, Time Range, Time Column, and Time Grain (detailed descriptions provided below).

3. Filter Name: Provide a brief, descriptive name for the new filter. This name usually reflects the choice made in the following Column field.

2. Dataset: Select the dataset that will be used for the charts within the dashboard. By default, all datasets linked to the dashboard's charts are available for selection. This option appears when the Value, Numerical Range, Time Column, or Time Grain filter types are chosen.

4. Column: Choose the column to which the filter will apply. This option is available when either the Value or Numerical Range filter types are selected.

Now, let's focus into the four filter types available in the `Filter Type` field.

#### Value Type

This filter type generates a drop-down menu that displays all available values from the selected column (as specified in the Column field).

For example, if you select the Value filter type and then choose the "Department" column, a drop-down filter menu labeled "Department" will appear on the dashboard. This menu allows you to filter the data displayed in all charts by the selected department. When the filter is applied, only the data relevant to the chosen department will be visible across all charts in the dashboard.


<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/filter-drill/value-type.jpeg" alt="Filter Type - value" />
  <figcaption align="center"><i>Filter Type - value</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/filter-drill/value-type-val.jpeg" alt="Filter Type - value" />
</figure>

In this case, if you select a specific department, the dashboard will update to show data only for that department after you apply the filter.

#### Numerical Range

This filter type generates a range slider that allows you to define a start and end point based on the numerical values in the selected column.

For example, if you choose the "Numerical range" filter type and then select the "Electricity_Usage" column, a range slider will appear. This slider enables you to set a specific range of electricity usage. Once applied, all charts within the dashboard will display data corresponding only to the selected electricity usage range.

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/filter-drill/num-range.jpeg" alt="Filter Type - Numerical Range" />
  <figcaption align="center"><i>Filter Type - Numerical Range</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/filter-drill/num-range-val.jpeg" alt="Filter Type - Numerical Range" />
</figure>

In this case, if you adjust the slider to a particular range, the dashboard will update to show data only within that range after applying the filter.

#### Time Range

This filter type generates a button that, when clicked, opens the Edit Time Range functionality. This feature is the same as the Time Range option used when creating a new chart.

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/filter-drill/time-range.jpeg" alt="Filter Type - Time Range" />
  <figcaption align="center"><i>Filter Type - Time Range</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/filter-drill/time-range-val.jpeg" alt="Filter Type - time Range" />
</figure>


#### Time Column

This filter type generates a drop-down menu that allows you to select a new dashboard-level time column, which will override any existing time columns defined at the chart level.


:::tip

When should you use this filter type?
The Time Column filter is ideal when your dataset contains multiple time columns. If your dataset only has one time column (which is automatically selected), this filter type may not be necessary.

:::

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/filter-drill/time-column.jpeg" alt="Filter Type - Time Column" />
  <figcaption align="center"><i>Filter Type - Time Column</i></figcaption>
</figure>



#### Time Grain 

This filter type creates a drop-down that enables you to select a time granularity. When applied, all timestamps are grouped based on the selected time grain. 

<figure>
  <Thumbnail src="/img/dhq-dashboard/working-with-data/filter-drill/time-grain.jpeg" alt="Filter Type - Time Grain" />
  <figcaption align="center"><i>Filter Type - Time Grain</i></figcaption>
</figure>