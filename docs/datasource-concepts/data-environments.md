---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# Data Environments

DronaHQ provides the ability to configure multiple data environments for your connector, which can be beneficial to separate workspaces for different teams and enforce access management.

DronaHQ comes pre-configured with three data environments: Production, Staging, and Development, where Production is the default environment. These environments cannot be removed or modified.

## Create a new environment

You can create and manage data environments from `Manage Environments`. To create a new environment click on `+ Add Environment` and give a unique name and select the `Sheet Environment` where your data would be mapped for the newly created environment.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/data-environments/add-new-environment.png" alt="Adding a new environment" width="80%" />
  <figcaption align='center'><i>Adding a new environment</i></figcaption>
</figure>

:::info Environment Naming Convention

The environment name should not start with a number and special characters cannot be used.

:::

You can also edit or delete the environment by clicking on more options indicated by the three dots (…)

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/data-environments/configure-manage-environments.png" alt="Manage data environment" width="80%" />
  <figcaption align='center'><i>Manage data environment</i></figcaption>
</figure>

## Configure environment credentials

You can configure multiple environments for your data sources (e.g., database or API) by adding environment-specific credentials. Click on more options indicated by the three dots (…) against your data source and select `Manage Environment` option. Also, add the appropriate credentials for the environment you want to setup.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/data-environments/manage-environments-connector-option.png" alt="Manage environment option for connector" width="80%" />
  <figcaption align='center'><i>Manage environment option for connector</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/data-environments/list-of-configurable-environment.png" alt="List of configurable environments" width="80%"/>
  <figcaption align='center'><i>List of configurable environments</i></figcaption>
</figure>

## Testing data source queries

You can test the configured credentials for the data environments inside the data source queries by toggling the environment dropdown as shown below.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/data-environments/environment-option-queries.png" alt="Testing data environments within queries" width="80%" />
  <figcaption align='center'><i>Testing data environments within queries</i></figcaption>
</figure>

## Switch environment in app preview

You can switch between data environments while previewing the app by toggling the environment dropdown as shown below.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/data-environments/app-preview-data-environment.png" alt="Preview app with different credentials" />
  <figcaption align='center'><i>Preview app with different credentials</i></figcaption>
</figure>

## Setting environment using on-screen action

You can set the data environment for an app using the Action flow's `Set Data Environment` action. Navigate to `Action Flow -> (+) Add action -> On-Screen Actions -> Set Data Environment`. Now select the environment from dropdown and continue.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/data-environments/set-data-environment-action.png" alt="Set data environment action" width="70%" />
  <figcaption align='center'><i>Set data environment action</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/data-environments/set-data-environment-action-options.png" alt="Data environment dropdown" width="70%" />
  <figcaption align='center'><i>Data environment dropdown</i></figcaption>
</figure>