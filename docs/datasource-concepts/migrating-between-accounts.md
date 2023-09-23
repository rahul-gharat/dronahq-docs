---
sidebar_position: 10
---

import Thumbnail from '@site/src/components/Thumbnail';

# Migrating Apps between accounts 

DronaHQ allows you to transfer connector between different accounts by making use of import and export connector option. This can be extremely helpful as you do not have to reconfigure the same connector in different accounts. The export option saves the connector file on to your local system/machine in JSON format. This file can then be imported by different accounts using the `import from json` option.

## Steps to migrate a connector

### Export

Go to the connector listing page, find the connector you want to export, click on `more options indicated by three dots(...)` and then `export` option. This will save the connector json file onto your local machine.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/migrating-between-accounts/export-data-source-option.png" alt="Export connector option" />
  <figcaption align='center'><i>Export connector option</i></figcaption>
</figure>

:::info Export limitation

Only users with edit permission can export a connector.

:::

### Import

Go to the connector listing page, click on `+ Connector -> Import from JSON` option and then upload the exported connector file and continue. Connector configuration will open up, you can modify any fields required then test and save the connector.

:::info Sensitive data fields

Almost all the connector fields will be populated except for sensitive data fields like the password, that needs to manually entered by the user at the time of importing as it is not exported in the first place.

:::

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/migrating-between-accounts/import-data-source-option.png" alt="Import connector option" />
  <figcaption align='center'><i>Import connector option</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/migrating-between-accounts/upload-connector-json-file.png" alt="Upload connector json file" />
  <figcaption align='center'><i>Upload connector json file</i></figcaption>
</figure>
