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
  <Thumbnail src="/img/beginner-tutorial-output.png" alt="Simple Database GUI" />
  <figcaption align = "center"><i>Simple Database GUI</i></figcaption>
</figure>

### Image Default
  
<figure>
  <img src="/img/beginner-tutorial-output.png" style= {{width:"100%", height:"auto"}} alt="Simple Database GUI"/>
  <figcaption align = "center"><i>Simple Database GUI</i></figcaption>
</figure>



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
  <TabItem value="apple" label="Apple">
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
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

## Card with Link
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
        <GraphQL />
        <h4>GraphQL API</h4>
      </div>
      <p>We provide an instant GraphQL API by generating your GraphQL schema for you based on your data.</p>
      <VersionedLink to="/docs/getting-started/start-building">
        See GraphQL Schema <ArrowRight className="arrow" />
      </VersionedLink>
    </div>
    <div className="card">
      <div className="card-header">
        <GraphQL />
        <h4>GraphQL API</h4>
      </div>
      <p>We provide an instant GraphQL API by generating your GraphQL schema for you based on your data.</p>
      <VersionedLink to="/docs/getting-started/start-building">
        See GraphQL Schema <ArrowRight className="arrow" />
      </VersionedLink>
    </div>
  </div>