---
sidebar_position: 1
title: Numeric
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Numeric Control is a versatile tool used to gather numeric data or perform calculations based on user inputs. It can handle various numeric formats, such as whole numbers and decimals, making it suitable for a wide range of applications.

<figure>
  <Thumbnail src="/img/reference/controls/numeric/preview.jpeg" alt="Textarea" />
  <figcaption align = "center"><i>Textarea</i></figcaption>
</figure>


## Properties

| Property            | Description                                                                                                                           |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Theme               | Choose the color of the Container box. You can use a custom hex code or select one from the available themes in the builder.          |
| Display Format      | Three options available: Normal - displays the number as entered, Currency - rounds off to the nearest whole number, Accounting - displays negative values in brackets. |
| Placeholder         | Provides a hint to users on what to input. It appears in the field and disappears when users start typing.                           |
| Decimal Precision   | Defines the number of digits after the decimal point to be displayed. Use 0 for no decimal points.                                   |
| Debounce Time (ms)  | Specifies the delay between events in milliseconds, controlling the action frequency on value change.                                |
| Show Barcode Scanner| Enables barcode scanning for data entry using device's camera. When scanned, the interpreted data sets as the control value. |


## Control Output

The outputs from the Numeric control, represented by the placeholder `{{numeric}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| numeric    | Represents the numeric value available in the Numeric control.                        |

## Events

| Trigger      | Description                                                                                                                                                    |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| value_change | Triggers when you change the value in the Numeric control. Initiates subsequent actions with the same flow as used for action buttons, list controls, etc.  |
| focus_out    | Triggers when focus moves to another control, initiating the action flow.                                                                                     |
| enter_press  | Triggers when the Enter key is pressed after inputting data in the Numeric control.                                                                           |