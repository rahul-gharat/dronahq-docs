---
sidebar_position: 1
title: Range Picker
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Range Picker control is used to define and select a range of values, providing users with a customizable range selection interface. It allows binding to two options - Min Value and Max Value in a numerical data format.

<figure>
  <Thumbnail src="/img/reference/controls/range-picker/preview.png" alt="Range Picker Control" />
  <figcaption align="center"><i>Range Picker Control</i></figcaption>
</figure>

## Binding Data Options

Range Picker control accepts number format to display data. There are two different numericdata options: Min Value and Max Value.


### Static Data Option

Utilize the Bind Data option to set predefined minimum and maximum values for the range. For instance:


#### Min_Value

```json

   50

```

#### Max_Value


```json

   500

```

## Properties

| Property               | Description                                                                                        |
|------------------------|----------------------------------------------------------------------------------------------------|
| Range                  | Specifies the minimum and maximum range values.                                                     |
| Min                    | Defines the minimum value allowed within the range.                                                |
| Max                    | Defines the maximum value allowed within the range.                                                |
| Step                   | Specifies the increment/decrement value for the range.                                              |
| Min Value              | Sets the default minimum value within the range.                                                    |
| Max Value              | Sets the default maximum value within the range.                                                    |
| Disable Handle         | Enables or disables the range handle to control selection.                                           |

### Range Properties

| Property       | Description                                                                      |
|----------------|----------------------------------------------------------------------------------|
| Min Range      | Sets font size, weight, and color for the Min range text.                        |
| Max Range      | Sets font size, weight, and color for the Max range text.                        |

### Value Properties

| Property       | Description                                                                      |
|----------------|----------------------------------------------------------------------------------|
| Min value      | Sets font size, weight, and color for the selected Min value text.                |
| Max value      | Sets font size, weight, and color for the selected Max value text.                |

### Slider Properties

| Property         | Description                                                                      |
|------------------|----------------------------------------------------------------------------------|
| Slider           | Customizes the Slider bar properties.                                            |
| Height           | Defines the height of the Slider Bar.                                           |
| Filled color     | Specifies the color of the bar indicating the range.                            |
| Border radius    | Determines the border's radius for the bar.                                     |
| Empty Color      | Sets the color filled up in the slider outside the range.                       |
| Slider Handle    | Customizes the Slider Handles: Size, Border Radius, and Color.                   |


## Control Outputs

The outputs from the Range Picker control, represented by the placeholders `{{rangepicker.Min_Value}}` and `{{rangepicker.Max_Value}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output             | Description                                                                   |
|--------------------|-------------------------------------------------------------------------------|
| Min Value          | Represents the selected minimum value in the Range Picker control.            |
| Max Value          | Represents the selected maximum value in the Range Picker control.            |

## Events

| Trigger      | Description                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value_change | Occurs when there is a modification in the Range picker control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. |