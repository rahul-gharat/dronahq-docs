---
sidebar_position: 6
---

import Thumbnail from '@site/src/components/Thumbnail';

# Apps with CSV uploads

## Overview

You can work with CSV data inside DronaHQ with the help of File Parser Control, which lets you upload CSV file from your system and converts it into the JSON format. This can be very useful in cases, you want to validate or modify CSV data before binding it to table grid control or make bulk record insertion into databases. 

By default `strict checking` is enabled for the File Parser Control which is useful to enforce schema validation (checking for certain number of columns and header names present) upon upload. You can enable/disable the `strict checking` feature from the properties section of the File Parser control.

:::info

In case `strict checking` is enabled, it is mandatory to provide sample csv file.

:::

## Building a sample app

Let's build a simple app to understand the working of the File Parser Control.

### App UI Configuration

Drag and drop a Table grid and File parser control onto the canvas. Go to the properties section of File parser control and upload the sample csv file to enforce schema validation.

<figure>
  <Thumbnail src="/img/building-apps-guides/apps-with-csv-uploads/sample-app-ui.png" alt="App UI and sample file config" />
  <figcaption align='center'><i>App UI and sample file config</i></figcaption>
</figure>

### Developing business logic

Go to the `value_change` event of File parser control and add a `JS Code` block. Add an input parameter which will reference the File parser control, in the example shown below we have named the input parameter as `csvData` and the file parser control has the name `uploadreport`.

<figure>
  <Thumbnail src="/img/building-apps-guides/apps-with-csv-uploads/transform-csv-data.png" alt="Transform CSV data using JavaScript" />
  <figcaption align='center'><i>Transform CSV data using JavaScript</i></figcaption>
</figure>

Now paste this code inside the JS Code Editor.

#### JavaScript Code

```javascript
output = [];
let dateFormat = 'Do MMM YYYY';
for(let i = 0; i < csvData.length; i++) {
    let record = csvData[i];
    record['CreationDate'] = moment.unix(record['CreationDate']).format(dateFormat);
    output.push(record);
}
```

After testing and saving the script, create a variable which will hold the JS Code's output.

<figure>
  <Thumbnail src="/img/building-apps-guides/apps-with-csv-uploads/js-code-output-variable.png" alt="JS Code block output variable" />
  <figcaption align='center'><i>JS Code block output variable</i></figcaption>
</figure>

Add a `Set Control Value` block and bind the JS Code's output variable to the table grid control.

<figure>
  <Thumbnail src="/img/building-apps-guides/apps-with-csv-uploads/set-control-value-configuration.png" alt="Binding JS Code's output to table grid" />
  <figcaption align='center'><i>Binding JS Code's output to table grid</i></figcaption>
</figure>

### App Preview

<figure>
  <Thumbnail src="/img/building-apps-guides/apps-with-csv-uploads/app-preview.png" alt="App preview" />
  <figcaption align='center'><i>App preview</i></figcaption>
</figure>