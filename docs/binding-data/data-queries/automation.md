---
sidebar_position: 1
title: Automation
---
import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

DronaHQ offers a powerful Automation feature in data query that allows you to automate tasks based on trigger events such as scheduled timings or webhooks from third-party services. With Automation in data query, you can streamline repetitive processes and schedule various activities within your apps on DronaHQ's platform.

:::note
Only webhooks can be configured for Automation in Data Query.
:::

## Prerequisites
### Configuring Your Automation:

To set Automation in data query, begin by reviewing the [Automation Overview documentation.](https://docs.dronahq.com/automations/overview/ ) It provides step-by-step guidance on defining automation triggers, connecting tasks or connectors, testing flows, and publishing your automation workflows. You can access the official guide here:


## Query Execution Details:

### Configuring Query Parameters:

<figure>
  <Thumbnail src="/img/data-queries/automation.png" alt="Automation Section" />
  <figcaption align = "center"><i>Automation Section</i></figcaption>
</figure>

- `Name:` Specifies the query's identifier or name for easy reference within DronaHQ.
- `Run Query:` Choose between two options:
  - **Every Time Variable Changes:** Set the query to automatically execute whenever associated variables are modified, ensuring real-time updates based on dynamic changes.
  - **Manual Trigger Only:** Opt for manual activation, enabling control over when the query executes, ideal for specific instances or user-triggered actions.
- `Proxy Call Toggle:` This toggle determines whether the query will utilize a proxy call mechanism:
  - **Enabled:** Utilize a proxy call for handling GET requests, ensuring efficient management and seamless integration with the designated endpoint.
  - **Disabled:** Bypass the proxy call, directly executing the query without intermediary handling.

### Variables


- `Automation Value:` Select the automation you wish to use from the dropdown.   
<figure>
  <Thumbnail src="/img/data-queries/automation-variable.png" alt="Automation Variable" />
  <figcaption align = "center"><i>Automation Variable</i></figcaption>
</figure>

:::note
You can click on refresh button on the top right corner to load new automations in the dropdown.
:::



### Advanced

Fields      | Description                                |
|---------------------|------------------------------------------------------------------|
Query String Parameters | Sets key/value pairs to send as query parameters in the request. |
Headers | Sets key/value pairs to send in the request header.|
Run on App open Toggle: | This will make the dataquery to run on app open regardless of if it's referenced in any other control or dataquery. |




## Transforming Data

This sections is exactly same as the one in the [connector library.](/binding-data/data-queries/connector-library/#transform-response)

<figure>
  <Thumbnail src="/img/data-queries/automation-transform.png" alt="Automation Transform Section" />
  <figcaption align = "center"><i>Automation Transform Section</i></figcaption>
</figure>

