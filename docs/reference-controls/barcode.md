---
sidebar_position: 1
title: Barcode
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

The Barcode Control is an advanced control that enables barcode scanning for mobile apps. Using the device's camera, the control scans barcodes and fetches the related code text.

<figure>
  <Thumbnail src="/img/reference/controls/barcode/preview.png" alt="Barcode" />
  <figcaption align = "center"><i>Barcode</i></figcaption>
</figure>

## Binding Data Options

 There are different ways in which you can bind data to the Barcode control.

### Example: Static Data 

Let's explore a practical example to demonstrate that the Barcode Control can be utilized to submit product data, including its barcode, and visualize the scanning action. Additionally, integrate a text control to display the scanned barcode value. 

- You can add an automation to your app that will handle the data submission process. For example, when the barcode is scanned and the value is obtained, the automation will be triggered to submit this data to a designated sheet.

- When they reach the Barcode scan field and tap on "Scan," the mobile phone's camera will act as a barcode scanner.

- The scanned barcode value will be displayed in the text box that is linked to the Barcode Control, making it visible to users.

<figure>
  <Thumbnail src="/img/reference/controls/barcode/example.jpeg" alt="Getting data from scan." />
  <figcaption align = "center"><i>Getting data from scan.</i></figcaption>
</figure>

For instance, if you are running a retail store, this functionality can help you efficiently manage your inventory. As products are scanned, their barcode values are saved to a sheet, providing you with a centralized and organized product database.


## Properties


| Property       | Description                                                                                           |
|----------------|-------------------------------------------------------------------------------------------------------|
| Theme          | The color of the outline or border of the barcode scan control.                                      |
| Layout         | The style of the border of the control. It can be Dashed, Outlined (single line), or Filled.       |
| Scan Text      | The text to prompt the user to start scanning.                                                       |
| Rescan Text    | The text to prompt the user to rescan.                                                               |
| Action Buttons | The style of the action button, including the color, size, and weight of the text and barcode icon. |
| Title Text style | The style of the title text, including the color, size, weight, and alignment.                      |

## Control Outputs

The outputs from the Barcode control, represented by the placeholder `{{barcode}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| barcode    | Represents the scanned details from a bar code, it can contain whatever the data is retrieved after scanning a bar code.                        |


## Events

| Trigger                   | Description                                                                             |
|--------------------------|-----------------------------------------------------------------------------------------|
| value_change                | Occurs when there is a modification in the Typeahead control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. |