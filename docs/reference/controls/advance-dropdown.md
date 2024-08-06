---
sidebar_position: 1
title: Advance Dropdown
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Advanced Dropdown control is very similar to dropdown control but with additional extensive properties like image support, color property, return value selection, and more.

The Advanced Dropdown control helps users to view much more details in the dropdown itself. You can view different columns of the data along with different colors as well as images with respect to each column. You easily assign a color, image, icon, and prefix text to each option.

<figure>
  <Thumbnail src="/img/reference/controls/adv-dropdown/preview.png" alt="Advance Dropdown" />
  <figcaption align = "center"><i>Advance Dropdown</i></figcaption>
</figure>

## Binding Data Options

Advance Dropdown control accepts array of objects in JSON format to display data. There are different ways in which you can bind data to the Advance Dropdown control.


### Static Data Option

To display static options in the Advanced Dropdown control, use the Bind Data option, which must be specified as either an array of strings or an array of objects.

#### Options - Data Binding
The Bind Data option contains the data for all the options to be displayed in the dropdown list. The advanced dropdown control is highly customizable with various properties, so it is important to pass the correct keys and values in the data-bind section.

You can bind data through various sources such as controls, connectors, variables, keywords, and more.

##### Array of Strings Example

```json
[
    "File",
    "Folder",
    "Control"
]
```

##### Array of Objects Example

```json
[
    {
        "name": "Approve",
        "description": "John@studio.com",
        "value": "approve",
        "color": "#26bc6a",
        "image": "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team108/content/app/images/public/Tick_c5Abe.svg"
    },
    {
        "name": "Reject",
        "description": "Dave@studio.com",
        "value": "reject",
        "color": "#FF5656",
        "image": "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team108/content/app/images/public/Close_jCmgk.svg"
    },
    {
        "name": "None",
        "description": "Doe@studio.com",
        "value": "none",
        "color": "#F5AB00",
        "image": "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team108/content/app/images/public/Info_BCFfd.svg"
    }
]
```

The JSON format for the advanced dropdown control requires specific keys like "name" and "value" for proper mapping. Optional keys like "color" and "image" can be used to map color and image data. Ensure the correct data format to avoid errors in binding and mapping properties.

#### Selected Options - Data Binding
The Bind Data - Selected Option section contains data for the default selected options in the advanced dropdown control. For proper functionality, provide the correct keys and values in the data-bind section, considering the control's customizable properties.

Example of binding a static string for the selected option:

```json
"approve"
```

:::info
The value and name keys are compulsory along with other keys like color and image in terms of mapping them with the advanced dropdown control properties.
:::


## Properties


| Property                | Description                                                                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Searchable	          | Allows users to search through the options.                                                                                                     |
| Value Column            | Helpful when you want to return the value of a specific column from an array of object data, from the selected dropdown option.              |
| Label Column            | Helpful when you want to return the label of a specific column from an array of object data, from the selected dropdown option.              |
| Description Column      | Helpful when you want to show data of a column from an array of object data as a description right under the title.                            |
| Color Column            | Helps you select a column with color properties or the color key from an array of objects to apply color/theme to each option in the dropdown. |
| Image Column            | Helps you select a column with image details or the image key from an array of objects to show images for each option in the dropdown.        |
| Prefix Column            | Helps you select a column with prefix key from an array of objects for each option in the dropdown.        |
| Icon Column            | Helps you select a column with icon details or the icon key from an array of objects to show icons for each option in the dropdown.        |
| Selection Type          | Defines if the user can select just one or multiple options in the Dropdown.                                                                   |
| Placeholder             | A prompt that gives a hint to the user about what needs to be done. It appears in the Dropdown container and is overridden when an option is selected.        |
| Border Radius (Image)   | Provides border-radius to images selected in the options.                                                                                       |


## Control Outputs

The outputs from the Advance Dropdown control, represented by the placeholder `{{advanceddropdown}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| advanceddropdown    | Represents the user-selected value from the selected options of the Advance Dropdown control.                        |


## Events


| Trigger     | Description                                                                                                                              |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| value_select | Occurs when there is a change in the value of the respective control, typically triggered by selecting another option or inputting a new value. |