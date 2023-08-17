---
sidebar_position: 1
title: File Parser
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Welcome to the File Parser Control documentation. This guide will walk you through the features and capabilities of our versatile control, which empowers users to upload and parse data from files. The control efficiently returns the parsed data in a JSON format, opening up a plethora of use cases, from displaying data in tabular format to creating dynamic workflows for data manipulation and visualization.

<figure>
  <Thumbnail src="/img/reference/controls/file-parser/preview.png" alt="File Parser" />
  <figcaption align = "center"><i>File Parser</i></figcaption>
</figure>

In this documentation, we'll delve into various following aspects of the control.

- [Differenet properties available in the control](#properties)
- [Event provided by the control](#events)
- [Data input](#data-input)
- [Data output from control](#data-output-from-control)
- [Supported files](#supported-files)
- [Parsing and Data Transformation](#parsing-and-data-transformation)
- [How to use](#how-to-use)
- [Common issues and solutions with use cases](#common-issues-and-solutions-with-use-cases)



## Properties

| Property              | Description                                                                                                   |
|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Font Size             | Sets the size of text within the file parser control. Size can be in px, em, vh, or %.                        |
| Font Weight           | Sets the font weight (boldness) of the text.                                                                  |
| Font Color            | Sets the text colour.                                                                                         |
| Text                  | Sets the placeholder of the upload button when no file is uploaded.                                           |
| Theme                 | Helps to set the theme for the control.                                                                       |
| Layout                | File upload control offer three button ui layout options: `Dashed outline`, `Filled`, `Outlined`.             |
| Strict checking       | Allows you to add strict checking to the data, you can check more about it [here.](./file-parser.md/#parsing-and-data-transformation)                         |
| Sample File           | Allows you to provide a sample file for the control which will be available to end user for download.         |
| Headers               | If the sample file is successfully parsed, you can see the headers below the Sample File option.              |



## Events

| Trigger                  | Description                                                                             |
|--------------------------|-----------------------------------------------------------------------------------------|
| value_change             | Occurs when there is a modification in the respective control's value.                  |


## Data input

File parser control accepts data in two ways:
- **Through data binding**: A satandard way to bind data to control in DronaHQ, you can read more about it [here.](/category/binding-data/)

- **Uploading files**: Apart from binding data to file parser control, you can also provide data to this control by uploading the data supported data files to the control, and control will read data from file and convert it to JSON object so it can be used inside DronaHQ to create plethora of usecases.

## Data output from control

The outputs from the File Parser control, represented by the placeholder `{{fileparser}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name. If used in `strict mode` you can also get access to the columns of data directly anywhere in DronaHQ app builder. for example lets say your controls unique name is `fileparser` and you uploaded file which has patient data withe columns name, age, address then you can refer these columns individually by syntax like `{{fileparser.name}}` or `{{fileparser.age}}`. this same case is not possible for `Dynamic mode` beause control is not aware of structure so you can use control's uniqe name only to refer the data present in it.

| Output                   | Description                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| fileparser               | Represents the data available in the file uploaded to the File Parser control in an array of JSON object.    |
| fileparser.(column_name) | For strict mode only, you can refer columns directly.                                                        |

## Supported files

File parser control supports three file formats which are widely used for sharing data across system, the three formats are:
- **CSV**: Standard excel file format.
- **XML**: Standard file format to share data across internet.
- **JSON**: Widely used by most of the web applications now a days.

## Parsing and data transformation

File parser control has two working modes ons is `Strict Checking` and another one is `Dynamic Data`, Let's understnad how control works in each mode. 
Remember these two modes works similarly for both [Data input](./file-parser.md/#data-input) method.

- **Strict Checking**: Once you upload a sample file while configuring the control on app builder, the File Parser Control intelligently analyzes the structure of the data. It then leverages this sample file as a reference to ensure strict adherence to the data structure of subsequent uploads or Data comming out of binded data formula at runtime. This strict mode is beneficial when dealing with consistent data formats, enabling you to create powerful data flows in the DronaHQ with confidence.

:::info Info
Sample file is compulsory for strict mode.
:::

- **Dynamic Data**: For cases where your data may have varying or dynamic structures, the strict mode can be turned off from property. In this mode, the control allows for more flexibility, and you need not provide a sample file. While data flows cannot be created in the DronaHQ without a defined structure, you can still visualize and display the dynamic data in a table grid. Furthermore, the control offers the ability to transform such dynamic data using data queries and custom JavaScript, providing a meaningful and interactive representation to enhance data understanding. there are ways to use Dynamic data mode efficienly in DronaHQ you can understand better about it in [this](./file-parser.md/#common-issues-and-solutions-with-use-cases) section

## How to use

Using the File Parser Control is a straightforward process:

- **Upload Sample File (Only for strict mode)**: To get started, upload a sample file that represents the data structure you want to work with. The control will use this file as a reference for subsequent data uploads.

- **Strict Mode (Optional)**: Choose whether to enable strict mode or not. Strict mode enforces data structure checks, ensuring consistent data formats for data flows.

- **Data Visualization**: Display the parsed data in a table grid or use data querie's custom JavaScript to represent the data in desired format.

- **Data Manipulation**: If you enabled strict mode, create data flows in the DronaHQ to manipulate and update the data easily.

- **Security and Reliability**: We understand the importance of data security and reliability. Our File Parser Control ensuring that your uploaded files is processed on your system and processed data only leaves your system through the workflows that you created for updating or manipulating data.

## Common issues and solutions with use cases

In this section we will understnad about typical problems faced by users when trying to use this control in its differnet configutations. Following are typical problems encountered when utilizing this control.

- **Problem**: While using strict mode when user has fixed data structure as provided in the sample file but the files uploaded at run time has some columns missing in the data which causes control to reject the data and show error.
  - **Solution**: you can use dymamic data mode and then pass the data of the file parser control to `Data Queries -> Custom JavaScript` and you can make sure all your columns are always returned from Data Query and you can use Data Query to bind data to other conrols just as you would do with file parser.


- **Problem**: How to use the file parser control to parse data from the file URL that is hosted on internet.
  - **Solution**: If you have URL of file that you want to parse then you can use the [FX](/binding-data/fx-functions/) section of data binding and use the function [FILEPARSER](#) in the control with the url.


- **Problem**: What if you want to give both the input options of the file parser control to the end user, but when you allows both option you may encounter a problem that you don't have control over when control formula is evaluated because whenever conrol that you will refer to get url is changed it will update the data inside file parser conrol. so if you had data in file parser control through file upload it will cahnged.
    - **Solution**: To solve this you can have a button associated with a form and on click of that button you can use `COMPUTE` action block and inside that block you can use the `FILEPARSER` function to parse the data and then set the output to the file parser control. allowing you full control when your file is parsed through formula.