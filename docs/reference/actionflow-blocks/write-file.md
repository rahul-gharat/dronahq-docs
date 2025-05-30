---
sidebar_position: 1
title: Write File
---

import Thumbnail from '@site/src/components/Thumbnail';

The Write File action is designed for mobile applications, enabling users to create and store files directly on Android
and iOS devices. It is commonly used for scenarios like saving logs, exporting data, or generating reports that users
can access locally on their devices.

1. Navigate to `Native` in your action flow and select the `Write File` task.

2. Configure the file properties such as name, content, and location using the available options.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/write-file/write-file.png" alt="Write File Action" />
<figcaption align='center'><i>Native Action - Write File</i></figcaption>
</figure>

#### Configuration Overview

| Configuration Field | Description                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------- |
| File Name           | The name of the file to be created. You can specify it dynamically using keywords.            |
| File Content        | The content to be written into the file. Supports both static text and dynamic inputs.        |
| Append Data         | Determines whether to append new data to an existing file (`true`) or overwrite it (`false`). |
| Content Type        | Specifies the type of file to create, such as `text/plain` or `application/json`.             |
| Path for Android    | The directory on Android where the file will be stored. Use system-defined paths.             |
| Path for iOS        | The directory on iOS where the file will be stored. Similar to Android paths.                 |

:::note

When writing a file, ensure the `file name` follows these conventions for compatibility and to avoid errors:

Use `alphanumeric characters` (A-Z, a-z, 0-9) in the file name. Avoid special characters like `?`, `*`, `<`, `>`, `|`,
`\`, `/`, `:` as they may cause issues. If you need to separate words, use underscores (`_`) or hyphens (`-`) instead of
spaces for better readability.

Examples:

- Good: `sample_2023-12-25.pdf`
- Bad: `sample/2023:12?25.pdf`

:::

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/write-file/write-file-config.png" alt="Write File Configuration" />
<figcaption align='center'><i>Native Action - Write File Configuration</i></figcaption>
</figure>

After configuring the Write File action, the app will create the specified file in the selected directory. Users can
access and use this file for various purposes, such as viewing logs or exporting data.
