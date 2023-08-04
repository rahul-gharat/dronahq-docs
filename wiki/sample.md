---
sidebar_position: 202
hide_table_of_contents: false

---

import VideoEmbed from '@site/src/components/VideoEmbed';
import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionedLink from '@site/src/components/VersionedLink';
import Basics from '@site/static/icons/features/basics.svg';
import ArrowRight from '@site/static/icons/arrow_right.svg';
import Image from '@site/src/components/Image';

# Sample Usage

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

## Image Usage

### Image Clickable
<figure>
  <Thumbnail src="/img/dronahq-drag-drop-builder.png" alt="Simple Database GUI" />
  <figcaption align = "center"><i>Simple Database GUI</i></figcaption>
</figure>

### Image Clickable with Fix Width
<figure>
  <Thumbnail src="/img/dronahq-drag-drop-builder.png" alt="Simple Database GUI" width="300px" />
</figure>


### Image Default

<figure>
  <Image src="/img/dronahq-drag-drop-builder.png" alt="Simple Database GUI" width='400px'/>
  <figcaption align = "center"><i>Simple Database GUI</i></figcaption>
</figure>

<!-- <figure>
  <Image src="/img/dronahq-drag-drop-builder.png" style= {{width:"100%", height:"auto"}} alt="Simple Database GUI"/>
  <figcaption align = "center"><i>Simple Database GUI</i></figcaption>
</figure> -->



## Video Usage

<figure>
    <VideoEmbed host="youtube" videoId="Tl0Sd43dXDg"/> 
</figure>


## Info Usage
:::info This is Info

In versions `v2.0.0` and above, databases can be connected and removed dynamically without having to restart the Engine instance.

:::

:::tip This is Tip

You can connect to databases by using environment variables, the raw connection string or connection parameters.

:::

:::note This is Note

You can connect to databases by using environment variables, the raw connection string or connection parameters.

:::

:::caution This is Caution

You can connect to databases by using environment variables, the raw connection string or connection parameters.

:::

:::danger This is Danger

You can connect to databases by using environment variables, the raw connection string or connection parameters.

:::

## Tabs Usage

<Tabs  groupId="user-preference">
  <TabItem value="content" label="Content">
    This is an apple 🍎
  </TabItem>
  <TabItem value="layout" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

## Diagram Usage
Example Mermaid diagram
Refer [this link](https://mermaid.js.org/syntax/flowchart.html), for more info

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```mermaid
sequenceDiagram
	Site->>mermaid: initialize
	Site->>mermaid: content loaded
	mermaid->>mermaidAPI: init
  ```

## Cards with Link

 ### Single Link Card

<div className="gallery">
  <div className="card">
      <div className="card-header">
        <Basics />
        <h4>Basics</h4>
      </div>
      <p>You can get up and running with DronaHQ in minutes by following our Getting Started guide.</p>
      <VersionedLink to="/docs/getting-started/start-building">
        See Getting Started <ArrowRight className="arrow" />
      </VersionedLink>
    </div>
    <div className="card">
      <div className="card-header">
        <h4>GraphQL API</h4>
      </div>
      <p>We provide an instant GraphQL API by generating your GraphQL schema for you based on your data.</p>
      <VersionedLink to="/docs/getting-started/start-building">
        See GraphQL Schema <ArrowRight className="arrow" />
      </VersionedLink>
    </div>
    <div className="card">
      <div className="card-header">
        <h4>GraphQL API</h4>
      </div>
      <p>We provide an instant GraphQL API by generating your GraphQL schema for you based on your data.</p>
      <VersionedLink to="/docs/getting-started/start-building">
        See GraphQL Schema <ArrowRight className="arrow" />
      </VersionedLink>
    </div>
  </div>
  

### Multiple Links Card

<div class="containerGridSampleApp">
   <div class=" containerColumnSampleApp columnGrid column-one">
      <div class="containerCol">
      <Image class="containerImage" src="/img/widget-icon.png" alt="widgets"/>
      </div> 
      <p><strong>Reference docs</strong></p><p><a href="/reference/widgets">Widgets<br/></a><a href="/reference/datasources">Datasources</a><br/><a href="/reference/DronaHQ-framework">Framework</a></p>  
   </div>
   
   <div class="containerColumnSampleApp columnGrid column-two">
      <div class="containerCol">
      <Image class="containerImage" src="/img/framework-icon.png" alt="framework"/>
      </div> 
      <p><strong>Useful features</strong></p><p><a href="/advanced-concepts/version-control-with-git">Version control using Git</a><br/><a href="/getting-started/setup/instance-configuration/authentication">Single sign-on (SSO)</a><br/><a href="/advanced-concepts/granular-access-control">Granular access control</a></p>
   </div>

   <div class=" containerColumnSampleApp columnGrid column-three">
  <div class="containerCol">
         <Image class="containerImage" src="/img/support.png" alt="get help"/>
      </div> 
    <p><strong>Get help</strong></p><p><a href="/learning-and-resources/sample-apps">Sample apps</a><br/><a href="/learning-and-resources/integrations">Third-party integration</a><br/><a href="/help-and-support/troubleshooting-guide">Troubleshooting</a></p>
   </div>
  
</div>

## Table

  | Field | Description  | 
  | ----------------- |---------------------------- |
| Region            | The region of the datacenter where your New Relic account stores its data. [Read more about regions on New Relic docs.](https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers) |
| API Key           | API keys are unique to your organization. An API key is required by the New Relic API to submit metrics and events to New Relic. You can get the API key from [here](https://one.newrelic.com/launcher/api-keys-ui.api-keys-launcher) if you are in New Relic US region and [here](https://one.eu.newrelic.com/launcher/api-keys-ui.api-keys-launcher) if you're in New Relic EU region. |
| Host              | The name of the originating host of the log and metrics.                                                                                                                                                                                                                                                                                                                                 |
| Custom Attributes | Custom Attributes associated with your logs and metrics. A default source tag `dronahq-cloud-metrics` is added to all exported logs and metrics. Attributes `project_id` and `project_name` are added to all exported metrics.                                                                                                                                                            |
| Service Name      | The name of the application or service generating the log events.                                                                                                                                                                                                                                                                                                                        |


# API Documentation

<div class="apidocs-header">
    <div class="method get">GET</div>
    <div class="endpoint">/scim/v2/users</div>
</div>

<div class="apidocs-header">
    <div class="method post">POST</div>
    <div class="endpoint">/scim/v2/users</div>
</div>

<div class="apidocs-header">
    <div class="method put">PUT</div>
    <div class="endpoint">/scim/v2/users</div>
</div>

<div class="apidocs-header">
    <div class="method delete">DELETE</div>
    <div class="endpoint">/scim/v2/users</div>
</div>

<div class="apidocs-header">
    <div class="method patch">PATCH</div>
    <div class="endpoint">/scim/v2/users</div>
</div>

<div class="apidocs-header">
    <div class="method head">HEAD</div>
    <div class="endpoint">/scim/v2/users</div>
</div>

<div class="apidocs-header">
    <div class="method options">OPTIONS</div>
    <div class="endpoint">/scim/v2/users</div>
</div>

# Sample API Documentation

# List users

Retrieve a list of users based on the provided email filter

<div class="apidocs-header">
    <div class="method get">GET</div>
    <div class="endpoint">/api/scim/v2/users</div>
</div>

#### Headers
<table>
    <tr>
        <th>Key</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Accept</td>
        <td>application/json</td>
    </tr>
    <tr>
        <td>Authorization</td>
        <td>Bearer token</td>
    </tr>
</table>

#### Path parameters

<table>
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>filter (optional)</td>
        <td>String</td>
        <td>Filter users by email ID</td>
    </tr>
    <tr>
        <td>startIndex (optional)</td>
        <td>Integer</td>
        <td>Index of the first user to be returned</td>
    </tr>
    <tr>
        <td>count (optional)</td>
        <td>Integer</td>
        <td>Number of users to be returned</td>
    </tr>
</table>

#### Query parameters

<table>
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>filter (optional)</td>
        <td>String</td>
        <td>Filter users by email ID</td>
    </tr>
    <tr>
        <td>startIndex (optional)</td>
        <td>Integer</td>
        <td>Index of the first user to be returned</td>
    </tr>
    <tr>
        <td>count (optional)</td>
        <td>Integer</td>
        <td>Number of users to be returned</td>
    </tr>
</table>

#### Body parameters

<table>
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>filter (optional)</td>
        <td>String</td>
        <td>Filter users by email ID</td>
    </tr>
    <tr>
        <td>startIndex (optional)</td>
        <td>Integer</td>
        <td>Index of the first user to be returned</td>
    </tr>
    <tr>
        <td>count (optional)</td>
        <td>Integer</td>
        <td>Number of users to be returned</td>
    </tr>
</table>

#### Example cURL

```bash
curl --location 'http://localhost:8080/api/scim/v2/users' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer XXXXXXXXXXXXXXXX'
```

#### Responses
<table>
    <tr>
        <th>Status Code</th>
        <th>Description</th>
        <th>Respomse</th>
    </tr>
    <tr>
        <td>200</td>
        <td>Success</td>
        <td>application/json</td>
    </tr>
        <tr>
        <td>401</td>
        <td>Unauthorized</td>
        <td>empty</td>
    </tr>
</table>

#### Sample response

200 : Success

```json
{
    "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "Resources": [
        {
            "groups": [
                {
                    "display": "Default",
                    "value": 3966
                }
            ],
            "emails": [
                {
                    "value": "pronghor@bears-rosessale.ru",
                    "primary": true
                }
            ],
            "meta": {
                "location": "https://studio.dronahq.com/api/scim/v2/Users/563504",
                "created": "2023-08-04T08:38:02.3732123Z"
            },
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:User"
            ],
            "name": {
                "givenName": null,
                "familyName": null
            },
            "photos": [],
            "nickName": null,
            "userName": "pronghor@bears-rosessale.ru",
            "displayName": "Rishabh Jain",
            "externalId": null,
            "timezone": null,
            "title": null,
            "active": true,
            "profileUrl": "",
            "id": "563504"
        }
    ],
    "startIndex": 1,
    "totalResults": 50,
    "itemsPerPage": 1
}
```
