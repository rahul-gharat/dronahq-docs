---
description: FileUtility methods to perform actions from JS code.
title: File Utility Methods
sidebar_position: 50
---

# File Utility Methods

:::info
File Utility methods are currently available only on Self-Hosted version > 2.4.2
:::

`FILEUTILITY` contains methods which are helpful for parsing data from file formats like CSV and JSON. These methods return the parsed data in JSON format which is suitable to be used with controls on the UI builder.

## FILEPARSER()

`FILEUTILITY.FILEPARSER` method can be used to parse files of multiple different formats and get output into JSON format. This method returns a `Promise`. The accepted file formats include `csv` , `xml` and `json`.

<span style={{fontSize: 24}}>Usage</span>

```
FILEUTILITY.FILEPARSER(url);
```

<span style={{fontSize: 24}}>Example</span>

```
await FILEUTILITY.FILEPARSER("https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team19020/content/app/images/UiFhDLxjT5.csv");
```

