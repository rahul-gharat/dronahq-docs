---
sidebar_position: 1
title: Advance Dropdown
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

The Advanced Dropdown control is very similar to dropdown control but with additional extensive properties like image support, color property, return value selection, and more.

The Advanced Dropdown control helps users to view much more details in the dropdown itself. You can view different columns of the data along with different colors as well as images with respect to each column. You easily assign a color, image, icon, and prefix text to each option.

<figure>
  <Thumbnail src="/img/reference/controls/adv-dropdown/preview.png" alt="Advance Dropdown" />
  <figcaption align = "center"><i>Advance Dropdown</i></figcaption>
</figure>

## Binding Data Options

Advance Dropdown control accepts array of objects in JSON format to display data. There are different ways in which you can bind data to the Advance Dropdown control.

### Static Data Option

To display static options in the Advance Dropdown control, you can use the Bind Data option. The Bind Data option must be specified as an array of objects. 

### Options- Data binding
The Bind Data- Option section contains the data with all the options which are to be displayed in the dropdown list. Since advanced dropdown control is very customizable with various available properties, we have to make sure that we pass the right keys and values in the data-bind section.

You can bind data through various options available such as controls, connectors, variables and keywords, and more.

Let us have a look at binding static JSON data to understand the right format to be used in advanced dropdown control.

```js
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
    "image": https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team108/content/app/images/public/Close_jCmgk.svg"
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

The JSON format data for the advanced dropdown control requires specific keys like "name" and "value" for proper mapping. Optional keys like "color" and "image" can be used with the corresponding property to map color and image data. Ensure correct data format to avoid errors in binding and mapping properties.

### Selected Options- Data binding

The Bind Data - Selected Option section contains data for default selected options in the advanced dropdown control. To ensure proper functionality, we must provide the correct keys and values in the data-bind section, considering the control's customizable properties. Data binding options include controls, connectors, variables, and keywords. Let's explore binding static JSON data to understand the correct format for the advanced dropdown control.

```js
[
    {
    "name": "None",
    "description": "Doe@studio.com",
    "value": "none",
    "color": "#F5AB00",
    "image": "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team108/content/app/images/public/Info_BCFfd.svg"
    }
]
```

:::info
The value and name keys are compulsory along with other keys like color and image in terms of mapping them with the advanced dropdown control properties.
:::


## Properties


| Property                | Description                                                                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Title Column            | Decides the title of every option to be shown in the dropdown menu from bounded data columns.                                                 |
| Description Column      | Helpful when you want to show data of a column from an array of object data as a description right under the title.                            |
| Value Column            | Helpful when you want to return the value of a specific column from an array of object data, from the selected dropdown option.              |
| Color Column            | Helps you select a column with color properties or the color key from an array of objects to apply color/theme to each option in the dropdown. |
| Image Column            | Helps you select a column with image details or the image key from an array of objects to show images for each option in the dropdown.        |
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