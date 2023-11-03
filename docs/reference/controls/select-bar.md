---
sidebar_position: 1
title: Select Bar
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Select Bar control is a unique interface designed to facilitate selection from a list of items arranged in a bar format. It offers a visually appealing and user-friendly way to present a range of selectable items.

<figure>
  <Thumbnail src="/img/reference/controls/select-bar/preview.jpeg" alt="Select Bar Control" />
  <figcaption align="center"><i>Select Bar Control</i></figcaption>
</figure>

Colored container indicates selection and if deselected the color is set back to the default. For example, a Select bar control can be used to let the user select all the required services by a customer.


## Binding Data Options

The Select Bar control allows users to select one or more options from a list of choices. To populate the Select Bar control with data, you can use the Bind Data option, which accepts an array of strings in JSON format.

### Binding Options Example

For example, if you want to create a Select Bar control with a list of items such as "Home," "Work," "Gym," and "Park," you can use the Bind Data option with an array of string values:

```json
[
    "Home",
    "Work",
    "Gym",
    "Park"
]
```

### Selected Options - Data Binding

To set the default selected options in the Select Bar control, use the Bind Data - Selected Option section with an array of string value(s). For example:

```json
[
    "Work",
    "Gym"
]
```

:::info
Ensure the selected options match the values within the provided data to appear correctly in the Select Bar control.
:::

## Properties

The Select Bar control offers various properties to customize its appearance and functionality:

| Property         | Description                                                      |
|------------------|------------------------------------------------------------------|
| Theme            | Set the color theme for the Select Bar.                           |
| Selection Type   | Choose between single or multiple item selection.                 |
| Bar Type         | Determine how the items should be displayed.                      |
| Item Width       | Set the width of each item as a percentage.                       |
| Bottom Label     | Configure the text for the bottom label.                        |
| Left Text        | Configure the left text for the items.                            |
| Right Text       | Configure the right text for the items.                           |
| Bottom Text      | Customize the size, weight, and color for the bottom text.        |
| Color Configuration    | Define the color configuration for each options individually                     |


## Control Outputs

The outputs from the Select Bar control, represented by the placeholder `{{select_bar}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output         | Description                                                              |
|----------------|--------------------------------------------------------------------------|
| select_bar     | Represents the user-selected values from the Select Bar control.          |

## Events

| Trigger        | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| value_select   | Occurs when there is a change in the value of the control, typically triggered by selecting another option or inputting a new value. |
