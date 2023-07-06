---
sidebar_position: 15
title: Ready APIs
---
import Thumbnail from '@site/src/components/Thumbnail';


Ready APIs in DronaHQ are pre-built interfaces that facilitate smooth communication and data exchange between DronaHQ and external services, platforms, or APIs. These APIs serve as ready-made integrations that enhance the functionality of DronaHQ by seamlessly connecting with popular external applications and services.

DronaHQ offers a diverse range of ready APIs across various categories, including CRM systems, marketing platforms, database services, collaboration tools, and more. These APIs eliminate the need for complex coding or manual integration by providing out-of-the-box connectivity.

<figure>
  <Thumbnail src="/img/connecting-datasource/readyapis-list.jpeg" alt="oAuth client credentials"/>
  <figcaption align = "center"><i>Ready APIs</i></figcaption>
</figure>


## Configuring Ready API Connectors

The process of connecting Ready APIs may differ from one another. Typically, you can initiate the connection by clicking on the desired Ready API connector, which will prompt you to establish a connection with your account.

:::info 
This can involve various methods, such as providing an API key, logging in through a portal, or utilizing other authentication mechanisms based on the specific Ready API connector.
:::

By following these steps, you can easily establish the connection and unlock the functionality offered by the respective Ready API.

To illustrate the configuration process, let's consider the example of integrating HackerRank's Ready API with DronaHQ. Click on `HackerRank -> Connect hackerRank`. 


<figure>
  <Thumbnail src="/img/connecting-datasource/hacker-connect.jpeg" width='70%' alt="Hackerrank connect"/>
</figure>


You will notice that, this particular Ready API requires `API TOKEN KEY` to connect. Provide the key and click `Save`. This will save your account configuration.

<figure>
  <Thumbnail src="/img/connecting-datasource/hacker-key.jpeg" width='70%' alt="hackerrank key"/>
</figure>

## Utilizing the Ready API Connector

To use the configured Ready API connector, navigate to your app and select `Data Queries`

Click `New -> Connector Library`, then select connector from the dropdown.

<figure>
  <Thumbnail src="/img/connecting-datasource/readyapi-gs.png" width='100%' alt="hackerrank key"/>
</figure>


:::info
Ready API connectors offer a versatile range of functionalities, serving multiple purposes that encompass data management and collaboration tools. These connectors can be utilized not only in Data Queries but also in `Action Builder` and `Automation Builder`. This flexibility allows for seamless integration of Ready API connectors across various modules within DronaHQ, enabling users to leverage their capabilities for a wide range of activities and workflows.
:::

## Installing API connectors on Self-Hosted Version

To begin integrating external services and APIs with DronaHQ, the first step is to install the API connector.

To install third-party connectors in DronaHQ, simply navigate to `Studio -> Connectors` and click the `"+"` button to add a new connector. The On-Prem version offers a variety of options, including GraphQL, Airtable, Gmail, and more. Additionally, the REST API enables seamless integration with third-party APIs, granting access to external systems.

When installing third-party APIs, the Self-Hosted version provides robust authentication support. You can leverage major API authentication methods to ensure secure and reliable connections between DronaHQ and external services.

Let's dive into the process of installing a Ready API connector on the Self-Hosted version of DronaHQ. Start by selecting the desired connector and providing a name for it.

Next, each Ready API connector has thwir own specific requirements for configuration on the Self-Hosted version. To illustrate, let's explore the example of installing the HackerRank Ready API on the Self-Hosted version of DronaHQ.

<figure>
  <Thumbnail src="/img/connecting-datasource/hacker-onprem.jpeg" width='70%' alt="Google Sheet"/>
</figure>

There are mainly 4 major API authentication supports on the Self-Hosted version.

* OAuth V2
* Basic Authentication
* API Key Authentication
* AWS Authentication

