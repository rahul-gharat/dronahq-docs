---
sidebar_position: 1
title: Download Files
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Download File Action

In various scenarios, you might need to allow users to download files, such as generated reports or product images. You can achieve this by adding the `Download File` task to your action flow. This action enables users to download a file with a simple click event.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/download-file/download-file.png" alt="Download File" />
<figcaption align='center'><i>Download File</i></figcaption>
</figure>

1. Configure File Source: In your action flow, navigate to `Utility` and select the `Download File` task. Here, you can set up the file source by using Keywords to provide the URL or path of the file you want to download.


2.  Provide a unique name for this action to easily identify it within your action flow.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/download-file/feild.jpeg" alt="Download File" />
</figure>

3. Conditions and Environment: Define when and where this action should execute by specifying conditions and the target environment.

Once these settings are configured, your action flow is ready. When users trigger the action, the specified file will be downloaded to their default download location.

Now users can conveniently access and use the downloaded file as needed.
