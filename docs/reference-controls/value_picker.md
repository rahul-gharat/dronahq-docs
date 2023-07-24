---
sidebar_position: 1
title: Value Picker

---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';


The Value Picker control is an advanced element that enables you to select a value along a slider, having predetermined minimum and maximum values.


<figure>
  <Thumbnail src="/img/reference/controls/value-picker/preview.jpeg" alt="Value Picker" />
  <figcaption align = "center"><i>Value Picker</i></figcaption>
</figure>

## Binding Data Options

The Value Picker controls accepts numeric format to display data. You can bind data to the Value Picker controls in various
ways, allowing for flexible customization and presentation of menu items.

### Static Data Option

To display static options in the Value Picker controls, you can use the Bind Data option. The Bind Data option must be
specified as numeric. For example:

```js
50;
```

This will set the by default value inside the control as `50`.

## Properties

| Property           | Description                                                                                      |
|-------------------|--------------------------------------------------------------------------------------------------|
| Minimum           | This allows you to set the minimum value of the control.                                         |
| Maximum           | This allows you to set the maximum value of the control.                                         |
| Step              | This is used to set the interval in terms of the value that the slider should move with each step increase of the slider. |
| Show End Values   | If this is selected, the Max and Min values will be displayed below the slider.                |
| Font              | This lets you customize the look of the extreme values by setting the text size, weight (Light, Normal, Bold, Extra Bold, X Extra Bold), and color of the label. |
| Theme             | This lets you choose the color of the control. You can either enter a custom hex code value or use one from the available themes in the builder. |
| Display Values    | This option displays the selected value.                                                        |


## Control Outputs

The outputs from the Value Picker control, represented by the placeholder `{{valuepicker}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| valuepicker    | Represents the user-selected value from the given path/trail of the valuebpicker control.                        |


## Events


| Property     | Description                                                                                                                              |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| value_select | Occurs when there is a change in the value of the respective control, typically triggered by selecting another option or inputting a new value. |

