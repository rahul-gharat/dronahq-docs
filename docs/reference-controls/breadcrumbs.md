---
sidebar_position: 1
title: Breadcrumbs
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';


Breadcrumbs serve as a navigational aid that visually represents the categorization or path a user has taken to reach the current page. You can keep track of the page from the provided graphical element on the user interface.

<figure>
  <Thumbnail src="/img/reference/controls/breadcrumbs/preview.jpeg" alt="Breadcrumbs" />
  <figcaption align = "center"><i>Breadcrumbs</i></figcaption>
</figure>

## Binding Data Options

Breadcrumbs control accepts array of objects in JSON format to display data. There are different ways in which you can bind data to the Breadcrumbs control.

### Static Data Option

To display static options in the Breadcrumbs control, you can use the Bind Data option. The Bind Data option must be specified as an array of objects. For example:

```js
[
  {
    "label": "Home",
    "value": "/"
  },
  {
    "label": "Products",
    "value": "/products"
  },
  {
    "label": "Category",
    "value": "/products/category"
  }
]

```


## Properties

| Property                  | Description                                                                                                                         |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Hover Color               | Sets the color of the past trail or states of the control when hovered over, providing a visual indication to the user.               |
| Label Properties          | Enables the user to apply different styling attributes to the breadcrumb labels, excluding the current state, for enhanced customization. |
| Icon Properties           | Allows the user to apply a distinct set of styling to the icon present within the breadcrumb trail, providing visual customization.     |
| Selected Item Properties  | Enables the user to apply a distinct set of styling to the active, selected, or current trail of the navigation page for emphasis.     |
| Separator Properties      | Enables the user to apply styling to the separator icons between each navigation state, allowing customization of the visual appearance. |

### Data Mapping
To bind data to the breadcrumbs control, you can map the distinctive properties of the data to their respective columns. The breadcrumbs control expects data in a specific format, so mapping the properties accordingly ensures a proper connection between the data and the control.

| Property     | Description                                                      |
|--------------|------------------------------------------------------------------|
| label        | Represents the label or title associated with the breadcrumb step.|
| value        | Holds a specific value or identifier associated with the step.     |
| image        | URL or path to an image associated with the breadcrumb step.       |
| icon         | URL or path to an icon associated with the breadcrumb step.        |


## Control Outputs

The outputs from the Breadcrumbs control, represented by the placeholder `{{breadcrumbs}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| breadcrumbs    | Represents the user-selected value from the given path/trail of the breadcrumbs control.                        |


## Events


| Property     | Description                                                                                                                              |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| value_select | Occurs when there is a change in the value of the respective control, typically triggered by selecting another option or inputting a new value. |
