---
sidebar_position: 1
title: Open File
---

import Thumbnail from '@site/src/components/Thumbnail';

The Open File action allows users to open a file on their device using the default app associated with the file type. It supports file paths and dynamic inputs, including the file path output from the Download File action.



To use the Open File action in your workflow:  

1. Navigate to `Native` in your action flow and select the `Open File` task.  

2. Specify the file path and file type.  

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/open-file/open-file.png" alt="Open File Action" />
<figcaption align='center'><i>Native Action - Open File</i></figcaption>
</figure>



### Configuration Overview  

| Configuration Field | Description                                                                                  | Example                            |
|---------------------|----------------------------------------------------------------------------------------------|------------------------------------|
| File Path       | The path of the file to open. Use static paths or dynamic inputs from another action (e.g., `{{DownloadFile.FILEPATH}}`). | `/storage/emulated/0/test.pdf`    |
| File Type       | The MIME type of the file to open. Specify a format like `application/pdf`, `text/plain`, etc. | `application/pdf`                 |

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/open-file/open-file-config.png" alt="Open File Action" />
<figcaption align='center'><i>Native Action - Open File Configuration</i></figcaption>
</figure>



After configuration, the Open File action opens the specified file using the default app on the user's device that supports the file type.  

