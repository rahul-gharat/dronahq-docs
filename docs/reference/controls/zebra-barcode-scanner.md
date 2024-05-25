---
sidebar_position: 1
title: Zebra Barcode Scanner
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


The Zebra Barcode Scanner control is designed to facilitate barcode scanning using Zebra devices. It integrates with data entry forms, allowing users to scan and input barcode data directly into specified fields.

<figure>
  <Thumbnail src="/img/reference/controls/zebra-barcode-scanner/preview.jpeg" alt="Zebra Barcode Scanner" />
  <figcaption align="center"><i>Zebra Barcode Scanner</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/reference/controls/zebra-barcode-scanner/test.jpg" alt="Zebra Barcode Scanner" height="400em"/>
  <figcaption align="center"><i>Zebra Barcode in use.</i></figcaption>
</figure>



## Prerequisite

For security purposes, Zebra controls access to the DataWedge Intents APIs. Zebra administrators must first create a Zebra DataWedge profile. You can create this profile on the Zebra DataWedge setup screen within the Settings menu. Open the top left menu when viewing the DronaHQ Mobile app on a Zebra device and select `Settings > Zebra DataWedge setup` to get started.

Alternatively, administrators can create a Zebra DataWedge profile with the following configuration to add the Retool Mobile app as an approved DataWedge application.

| Setting          | Value                             |
|------------------|-----------------------------------|
| Associated app   | com.dronahq5                      |
| Activity         | *                                 |
| Intent output    | Enabled                           |
| Intent action    | com.dronahq.zebra.ACTION          |
| Intent category  | Clear or leave unset              |
| Intent delivery  | Broadcast intent                  |

Once configured, the DronaHQ Mobile app is able to receive captured data and provide it to your mobile apps. Refer to the Zebra DataWedge APIs documentation for more information on approved apps and profiles.

This screen contains information for debugging your DataWedge profile, as well as a button to automatically configure a profile for Retool and an output of events.

## Binding Data Options

The Zebra Barcode Scanner control captures scanned barcode data and binds it to a designated field within your data form. It supports various barcode formats, ensuring compatibility with a wide range of scanning applications.

### BarcodeData

The BarcodeData field captures the actual data retrieved from the barcode scan. This data is processed and stored as a string.

### Type

The Type field specifies the type of barcode that was scanned. It provides information about the format or standard of the scanned barcode.


## Properties

| Property              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| Theme                 | Allows you to choose the color of the scanner input box. You can enter a custom hex code or use one of the available themes in the builder. |
| Placeholder           | A prompt that gives a hint to the user about the expected input in the Scanner field. It appears in the field and is overridden when the user scans a barcode. |
| Debounce Time (In ms) | The delay in milliseconds between events, controlling the frequency of action triggers on value changes. |
| Show Scanner Icon     | Allows you to enable or disable the display of a scanner icon within the control.           |
| Start Scan Text       | The text displayed on the button to start scanning.                                         |
| Stop Scan Text        | The text displayed on the button to stop scanning.                                          |



## Control Outputs

The outputs from the Zebra Barcode Scanner control, represented by the placeholder `{{barcode}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output           | Description                                                                                          |
|------------------|------------------------------------------------------------------------------------------------------|
| {{barcode}}      | Represents the barcode data available in the Zebra Barcode Scanner control.                          |
| {{barcode.BarcodeData}} | Contains the actual data captured from the barcode scan.                                        |
| {{barcode.Type}} | Specifies the type of barcode that was scanned.               



















## Events

| Trigger                   | Description                                                                             |
|---------------------------|-----------------------------------------------------------------------------------------|
| value_change              | Occurs when there is a modification in the Zebra Barcode Scanner control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. |