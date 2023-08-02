---
sidebar_position: 1
title: Text Input
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Text Input Control enables users to input or modify text data within a Text column. It is utilized to gather a single line of text, such as a person's name, city, or job title in the case of an employee.

<figure>
  <Thumbnail src="/img/reference/controls/textinput/preview.jpeg" alt="Text Input" />
  <figcaption align = "center"><i>Text Input</i></figcaption>
</figure>


## Properties 

| Property             | Description                                                                                                                                                                                                                                                                                                           |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Theme                | The theme option allows you to choose the color of the text box. You can either enter a custom hex code value or select one from the available themes in the builder.                                                                                                                                                   |
| Placeholder          | It is a prompt that provides a hint to the user about what needs to be entered. It appears in the text field and gets replaced when the user inputs data.                                                                                                                                                             |
| Input Type           | The input type defines the type of data the text field will accept. There are four input types for a Text Input Control: Text (accepts text data), Email (accepts valid email formats with built-in validation), URL (Link) (used for storing links or URIs), and Password (accepts encrypted input for password fields). |
| Min Character        | The character limit sets the minimum number of characters allowed in the text field.                                                                                                                                                                                                                                |
| Max Character        | The character limit sets the maximum number of characters allowed in the text field.                                                                                                                                                                                                                                |
| Debounce Time (In ms)| This is the delay in milliseconds between events. You can use the debounce time to control the frequency of action triggers when there is a change in value.                                                                                                                                                       |
| Show Raw Data        | This option allows you to display JSON data directly in a textbox without any formatting. By default, the Show Raw Data is set to ON.                                                                                                                                                                                |
| Show Barcode Scanner | When selected, this option enables a barcode scanner for entering data into the text field using a mobile device's camera. A QR code scanner opens up, and the scanned data is set as the control value.                                                                                                            |


## Control Output

The outputs from the Text Input control, represented by the placeholder `{{textinput}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| textinput    | Represents the text value available in the Text Input control.                        |

## Events

| Trigger      | Description                                                                                                                                                    |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| value_change | Triggers when you change the value in the Numeric control. Initiates subsequent actions with the same flow as used for action buttons, list controls, etc.  |
| focus_out    | Triggers when focus moves to another control, initiating the action flow.                                                                                     |
| enter_press  | Triggers when the Enter key is pressed after inputting data in the Numeric control.                                                                           |