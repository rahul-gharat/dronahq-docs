---
sidebar_position: 1
title: Native Action - Read File
---

import Thumbnail from '@site/src/components/Thumbnail';

The Read File action allows users to retrieve the contents of a file stored on their device. This action supports both static file paths and dynamic paths using keywords, including output from the Download File action.



To use the Read File action in your workflow:  

1. Navigate to `Native` in your action flow and select the `Read File` task.  

2. Specify the file path or use keywords to dynamically define the file location.  

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/read-file/read-file.png" alt="Read File Action" />
<figcaption align='center'><i>Native Action - Read File Configuration</i></figcaption>
</figure>


#### Configuration Overview  

| Configuration Field | Description                                                                                  |
|---------------------|----------------------------------------------------------------------------------------------|
| File Path       | The path of the file to read. You can provide a static path or use a keyword from another action (e.g., `{{Writefile.output}}`). | 
| When to Execute | (Optional) A condition to determine whether the action should execute.                        | 

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/read-file/read-file-config.png" alt="Read File Action" />
<figcaption align='center'><i>Native Action - Read File</i></figcaption>
</figure>

Once configured, the Read File action retrieves the file's content. This can then be used in subsequent actions or displayed within your app.  


