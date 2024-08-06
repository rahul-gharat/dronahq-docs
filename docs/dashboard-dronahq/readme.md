---
sidebar_position: 1
---

import VersionedLink from '@site/src/components/VersionedLink';
import Basics from '@site/static/icons/features/basics.svg';
import ArrowRight from '@site/static/icons/arrow_right.svg';
import Image from '@site/src/components/Image'; 
import Thumbnail from '@site/src/components/Thumbnail';

# Overview

DronaHQ Dashboard is a powerful and easy-to-use solution for data visualization and business intelligence. It allows users to analyze data and create insightful visualizations quickly and efficiently. With DronaHQ Dashboard, you can build dynamic dashboards that help drive your business forward with data-driven insights. The dashboard will enable users to perform data exploration, create visualizations, and generate insightful reports.

## Why Choose DronaHQ Dashboards?

1. Ease of Use: Simple and intuitive user interface for data exploration and visualization.
2. Advanced Analytics: Create complex visualizations and dashboards with advanced analytics.
3. Customization: Fully customizable dashboards to meet the specific needs of your business.
4. Collaboration: Share dashboards and visualizations with your team for collaborative analysis.
5. Data Integration: Connect to a wide range of data sources, including MySQL, PostgreSQL, and more.
6. Performance: Optimized for performance to handle large datasets efficiently.
7. Security: Robust security features to ensure your data is protected.

---

## Dashboard Visuals


<!-- 
*Embed a video overview of the DronaHQ Dashboard here.* -->



<figure>
  <Thumbnail src="/img/dhq-dashboard/dhq-dashboard-dashboard.jpeg" alt="Extraordinary Dynamic Dashboards" />
  <figcaption align="center"><i>Extraordinary Dynamic Dashboards</i></figcaption>
</figure>


<figure>
  <Thumbnail src="/img/dhq-dashboard/dhq-dashboard-charts.jpeg" alt="Wide Range of Charts" />
  <figcaption align="center"><i>Wide Range of Charts</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/dhq-dashboard/dhq-dashboard-nocode.jpeg" alt="No-Code Chart Designing" />
  <figcaption align="center"><i>No-Code Chart Designing</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/dhq-dashboard/dhq-dashboard-datasetbuilding.jpeg" alt="No-Code Chart Designing" />
  <figcaption align="center"><i>Drag and Drop / Low-Code dataset Building</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/dhq-dashboard/dhq-dashboard-nocodeeditor.jpeg" alt="Low-Code SQL Query building " />
  <figcaption align="center"><i>Low-Code SQL Query building </i></figcaption>
</figure>


---


## Dashboard Features

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src="https://demo.arcade.software/RgbpxLKt1R9hPq8cBnTW?embed" 
        title="Theme Creation" 
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>



### Home Screen Overview

The home screen features a Recents section where you can view recently edited and created items, as well as a Dashboard and Charts section with options to access favorites, your own, and all available dashboards and charts. The navigation menu allows you to locate dashboards, charts, datasets, and connectors for seamless data management and analysis.


### Dashboard Management


In the Dashboards section, you have the ability to create new dashboards tailored to your data analysis needs. You can view a comprehensive list of all your created dashboards and easily navigate through them. This section also allows you to export dashboards for external use, import dashboards created by others, and delete any dashboards that are no longer needed, ensuring that your workspace remains organized and up-to-date.


### Chart Builder


In the Charts section, you can create new charts to visualize your data effectively. You can view and navigate through your list of created charts, each accompanied by detailed information such as name, type, dataset, owners, last modified date, and available actions. This section also supports exporting charts for external use, importing charts from other sources, and deleting charts that are no longer needed, helping you maintain an organized and up-to-date collection of visual data insights.

### Dataset Exploration


In the Datasets section, you can manage all your data sources efficiently. Each dataset in your list is provided with detailed information including name, type, database, schema, owners, last modified date, and available actions. You can create new datasets, view and navigate through existing ones, and perform various actions such as exporting, importing, and deleting datasets, ensuring that your data repository is always organized and current.

### SQL Labs and Query Management


The SQL Labs section allows you to create, test, and manage your SQL queries in a dedicated environment. You can write new SQL queries, run them to retrieve results, and save queries for future use. This section provides a list of all your saved queries along with details such as query name, associated database, last modified date, and available actions. Additionally, you can export your queries for external use, import queries created by others, and delete queries that are no longer needed, making it easy to keep your query library organized and up-to-date.


---

## Supported Databases

DronaHQ Dashboard supports a wide range of databases, making it easy to connect to your existing data infrastructure. Some of the supported databases include:

1. Apache druid
2. Apache Hive
3. Apache Spark SQL
4. Aurora MySQL (Data API)
6. Aurora PostgreSQL (Data API)
7. Google Sheet
8. MySQL
9. PostgreSQL
10. Presto
11. Shillelagh
12. SQLite
13. Trino

*For a complete list of supported databases, refer to the DronaHQ documentation.*


## Dashboard Publishing and Sharing

#### Publish

A dashboard built in DronaHQ is eligible for publishing, an essential step in its deployment. Users can manage different versions of a dashboard, allowing them to set a version with each publish. This enables reverting to a previous version whenever needed. 

Publishing a dashboard is straightforward: once the setup is complete, click `Save` and then the `Publish` button at the top. You will be prompted to provide release notes before hitting `Publish` to finalize the publication.

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src="https://demo.arcade.software/GBx8qdF8oemT6x8bZul8?embed" 
        title="Theme Creation" 
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>


#### Share

After the database is ready and published, it is common to think that sharing it is a necessary next step. In DronaHQ, sharing a dashboard can be done in several ways.

:::note
Note that publishing the dashboard is mandatory before sharing it.
:::

The first method is to click the `Share` button, which provides options to enable public access and generate a public URL (after the application is published). 

For more options, go to `Options > Share,` where you can either 
- copy the permalink to the clipboard or 
- share the permalink via email.

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src="https://demo.arcade.software/NzzItfg9PWCsnSxpEt3i?embed" 
        title="Theme Creation" 
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>
