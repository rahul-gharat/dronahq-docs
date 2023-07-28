---
sidebar_position: 1
title: File Parser
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

The File Parser control is a logic control used to parse XML, CSV, or JSON files. It provides functionalities to select and upload files with support for file type restrictions, multiple file or directory selection, and validation of required, minimum or maximum size, and custom rules.

<figure>
  <Thumbnail src="/img/reference/controls/file-parser/preview.png" alt="File Parser" />
  <figcaption align = "center"><i>File Parser</i></figcaption>
</figure>

## Properties

| Property       | Description                                                                                                    |
|----------------|----------------------------------------------------------------------------------------------------------------|
| Size           | Sets the size of text within the file parser control. Size can be in px, em, vh, or %.                       |
| Weight         | Sets the font weight (boldness) of the text.                                                                   |
| Color          | Sets the text colour.                                                                                         |
| Text           | Helps to set the text within the control.                                                                      |
| Theme          | Helps to set the color of the border around text.                                                              |
| Layout         | Helps to set the style of the border around text.                                                              |
| Filled         | Fills the text box with the theme color.                                                                      |
| Outlined       | Sets lined border with the theme color.                                                                       |
| Dashed Outline | Sets dash lined border with the theme color.                                                                  |
| Sample File    | Helps to set the default file to be used. You can provide a sample file or a link to a sample file.           |
| Headers        | If the sample file is successfully parsed, you can see the headers below the Sample File option.             |



## Control Outputs

The outputs from the File Parser control, represented by the placeholder `{{fileparser}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| fileparser    | Represents the data available in the file uploaded to the File Parser control in an array.                        |


## Events

| Trigger                   | Description                                                                             |
|--------------------------|-----------------------------------------------------------------------------------------|
| value_change                | Occurs when there is a modification in the respective control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. |