---
sidebar_position: 1
title: Native Action - Download File
---

import Thumbnail from '@site/src/components/Thumbnail';




The Download File action allows users to download files directly to their devices, supporting Desktop, Android, and iOS platforms. This action is commonly used for scenarios like downloading reports, images, or any other files necessary for user workflows.  


1. Configure File Source: In your action flow, navigate to `Native` and select the `Download File` task.


2.  Provide a unique name for this action to easily identify it within your action flow.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/download-files/download-files.png" alt="Download File" />
<figcaption align='center'><i>Native Action - Download File</i></figcaption>
</figure>


#### Configuration Overview  

| Configuration Step        | Description                                                                                                         |
|---------------------------|---------------------------------------------------------------------------------------------------------------------|
| URL to Download       | The source URL or path of the file to be downloaded. Supports dynamic inputs using keywords.                        |
| Headers               | (Optional) Provide HTTP headers for the file request. Use a JSON object to specify headers like content type, tokens, etc. |
| Download Path (Android) | Define the directory where the file will be stored on Android devices. Common directories include `document_directory` and `download_directory`. |
| Download Path (iOS)   | Set the directory for file storage on iOS devices, similar to Android.                                              |
| Dynamic Query Fields  | Add query parameters to the file URL. Specify the key and value for each parameter.                                 |


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/download-files/download-files-config.png" alt="Download File" />
<figcaption align='center'><i>Native Action - Download File Configuration</i></figcaption>
</figure>


Once these settings are configured, your action flow is ready. When users trigger the action, the specified file will be downloaded.

