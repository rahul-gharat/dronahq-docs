---
sidebar_position: 6
---

import Thumbnail from '@site/src/components/Thumbnail';

# App export

The `App Export` feature allows you to export the entire app in JSON format, which can be useful when migrating app from one account to another, or in case you wish to duplicate the app in the same account. The only prerequisite for exporting, is that the app should be `published` and should not be in draft state.

To export an app, navigate to `Config -> App Export` and click on `Export app json`.

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-export/app-export-config-options.png" alt="App Export Config Options Modal" />
  <figcaption align='center'><i>App export config screen</i></figcaption>
</figure>

If the application is published, a sidebar will open which will list all the Connectors, Sheets, PDFs and Custom Controls used within the application. Click on `Export app json` to save the app's json file on to your machine.

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-export/export-app-summary.png" alt="App summary before exporting" />
  <figcaption align='center'><i>App summary before exporting</i></figcaption>
</figure>