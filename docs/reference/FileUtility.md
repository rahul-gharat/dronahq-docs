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

## FILEPARSER

`FILEUTILITY.FILEPARSER` method can be used to parse files of multiple different formats and get output into JSON format. This method returns a `Promise`. The accepted file formats include `csv` , `xml` and `json`.

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `url` | String | any valid url for csv, json or xml file             |

<span style={{fontSize: 24}}>Usage</span>

```
FILEUTILITY.FILEPARSER(url);
```

<span style={{fontSize: 24}}>Example</span>

```
await FILEUTILITY.FILEPARSER("https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team19020/content/app/images/UiFhDLxjT5.csv");
```
## PARSEXLSX

`FILEUTILITY.PARSEXLSX` method can be used to parse excel sheets and get output into JSON format. This method returns a `Promise`. The accepted file format is `xlsx`. The second parameter `sheetNumber` is optional. If your excel file has multiple sheets, you can specify the sheet number which you want to parse. By default the utility will parse the first sheet.

<span style={{fontSize: 24}}>Usage</span>

```
FILEUTILITY.PARSEXLSX(url,sheetNumber);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `url` | String | any valid url for xlsx file             |
| `sheetNumber` (Optional) | Number  | any numerical value             |


<span style={{fontSize: 24}}>Example</span>

```
await FILEUTILITY.PARSEXLSX('https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team19020/content/app/images/WKEa5OPsEw.xlsx');
```

## DOWNLOADFILEAS

`FILEUTILITY.DOWNLOADFILEAS` method can be used to download json data into different file formats. The supported file formats are `json`, `csv` and `xml`.

<span style={{fontSize: 24}}>Usage</span>

```
FILEUTILITY.DOWNLOADFILEAS(data,format);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `data` | Json array | array of json objects             |
| `format` | String  | 'json','csv','xml'             |


<span style={{fontSize: 24}}>Example</span>

```
FILEUTILITY.DOWNLOADFILEAS(data,'csv');
```

<!-- ## DOWNLOADPDF

`FILEUTILITY.DOWNLOADPDF` method can be used to download a snapshot of the current view in pdf format. Optionally, you can also include or exclude controls from the snapshot of the current view.

<span style={{fontSize: 24}}>Usage</span>

```
FILEUTILITY.DOWNLOADPDF(config);
```

<span style={{fontSize: 24}}>Config Object Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `action` | string | 'exclude', 'include'   |
| `controls` | array |  array of strings containing control unique names  |

<span style={{fontSize: 24}}>Example (Without Config)</span>

```
FILEUTILITY.DOWNLOADPDF();
```

<span style={{fontSize: 24}}>Example (With Config)</span>

```
FILEUTILITY.DOWNLOADPDF(
    {
        action: 'exclude',
        controls: ['button1','textinput1']
    }
);
``` -->
