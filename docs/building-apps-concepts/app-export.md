---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# App export

The `App Export` feature allows you to export the entire app in JSON format, which can be useful when migrating app from one account to another, or in case you wish to duplicate the app in the same account.

:::info

The prerequisite for exporting for an app, is that it should be published. Whenever you make any changes to the app, you need to publish it as any unpublished changes will not be exported with the app.

:::

To export an app, navigate to `Config -> App Export` and click on `Export app json`.

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-export/app-export-config-options.png" alt="App Export Config Options Modal" />
  <figcaption align='center'><i>App export config screen</i></figcaption>
</figure>

If the application is not published, you may see a prompt like this, which will ask you to publish your app before exporting.

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-export/export-app-not-published-modal.png" alt="App Export Not Published Modal" />
  <figcaption align='center'><i>App export draft mode popup</i></figcaption>
</figure>


In case your application is published, a sidebar will open which will list all the Connectors, Sheets, PDFs, Custom Controls and Widgets used within the application. Click on `Export app json` to save the app's json file on to your machine.

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-export/export-app-summary.png" alt="App summary before exporting" />
  <figcaption align='center'><i>App summary before exporting</i></figcaption>
</figure>