---
description: FileUtility methods to perform actions from JS code.
title: File Utility Methods
sidebar_position: 50
---

# File Utility Methods

`FILEUTILITY` contains methods which are helpful for parsing data from file formats like CSV and JSON. These methods return the parsed data in JSON format which is suitable to be used with controls on the UI builder.

## PARSECSV()

`FILEUTILITY.PARSECSV()` method can be used to parse csv files and get output into JSON format. This method returns a `Promise`.

<span style={{fontSize: 24}}>Usage</span>

```
FILEUTILITY.PARSECSV(url);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `url`      | string  | online csv file link in string format              |


<span style={{fontSize: 24}}>Example</span>

```
await FILEUTILITY.PARSECSV("https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team19020/content/app/images/UiFhDLxjT5.csv");
```

## PARSEJSON()

`FILEUTILITY.PARSEJSON()` method can be used to parse json files and get the json data. This method returns a `Promise`.

<span style={{fontSize: 24}}>Usage</span>

```
FILEUTILITY.PARSEJSON(url);
```

<span style={{fontSize: 24}}>Parameters</span>

| Parameter   | Accepts | Possible values                                   |
|-------------|---------|---------------------------------------------------|
| `url`      | string  | online json file link in string format             |


<span style={{fontSize: 24}}>Example</span>

```
await FILEUTILITY.PARSEJSON("https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team19020/content/app/images/9bKKOHYvD6.json");
```