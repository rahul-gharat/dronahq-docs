---
sidebar_position: 5
---

import Thumbnail from '@site/src/components/Thumbnail';

# Migrating apps between accounts

You can migrate apps between different accounts or instances using DronaHQ's app import and export feature, this can be useful in case you wish to transfer app or create versioning of the same app across different accounts.

## Steps to migrate an app

### Export application

:::info

Make sure to publish the app before exporting. If you have made any changes to the app after exporting, those changes will not be reflected in the exported app, in that case you need to republish and export the app again.

:::

Navigate to `Config -> App Export` and click on `Export app json`.

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-export/app-export-config-options.png" alt="App Export Config Options Modal" />
  <figcaption align='center'><i>App export config screen</i></figcaption>
</figure>

A sidebar will open which will list all the Connectors, Sheets, PDFs, Custom Controls and Widgets used within the application. Click on `Export app json` to save the app's json file on to your machine.

:::info

Make sure to create all the app dependencies like Connectors, Custom Controls, Widgets, etc. listed in the app summary with the exact same name in the account you are transfering the app to.

:::

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-export/export-app-summary.png" alt="App summary before exporting" />
  <figcaption align='center'><i>App summary before exporting</i></figcaption>
</figure>


### Import application

To import an app, open the DronaHQ's home screen and navigate to `Apps -> My Apps -> + icon -> Import App`. Now you can upload the app's json file that you have exported.

<figure>
  <Thumbnail src="/img/building-apps-concepts/migrating_apps_between_accounts/import-app-screen.png" alt="App summary before exporting" />
  <figcaption align='center'><i>Create app screen</i></figcaption>
</figure>

A summary of all the dependencies used within the app will appear before DronaHQ imports/installs the app in the account. Now click on `Confirm and Install` to finish importing the app.

:::info

In case any of the connector is not present in the account, then you need to create that connector before importing the app. While importing the app, connector queries will either be added to the connector if missing or the existing queries will be overwritten by the queries present in the app.

:::

<figure>
  <Thumbnail src="/img/building-apps-concepts/migrating_apps_between_accounts/import-app-summary.png" alt="App summary before importing" />
  <figcaption align='center'><i>App summary before importing</i></figcaption>
</figure>