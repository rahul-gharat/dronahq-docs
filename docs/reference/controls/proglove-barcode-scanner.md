---
sidebar_position: 1
title: ProGlove Barcode Scanner
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


A ProGlove barcode scanner is a device that reads and decodes information from barcodes printed on products, packages, or labels. It captures the data encoded in the barcode and transmits it to a connected system, such as a mobile app, computer, or database.

:::note
This control is supported only on Android devices.
:::

<figure>
  <Thumbnail src="/img/reference/controls/proglove-barcode-scanner/preview.jpeg" alt="ProGlove Barcode Scanner" />
  <figcaption align="center"><i>ProGlove Barcode Scanner</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/reference/controls/proglove-barcode-scanner/test.jpg" alt="ProGlove Barcode Scanner" height="400em"/>
  <figcaption align="left"><i>ProGlove Barcode in use</i></figcaption>
</figure>

## Prerequisite


1. ProGlove Scanner Must Be Paired and Connected
- The scanner must be successfully paired via Bluetooth and connected to the Android device using the Insight Mobile app.

2. Insight Mobile App or SDK Must Be Installed and Running
- If using Insight Mobile for Android, ensure it is installed and running in the background.

3. Register a BroadcastReceiver in Your App
- You must register a BroadcastReceiver in your Android app to receive scan data.

| Setting          | Value                             |
|------------------|-----------------------------------|
| Associated app   | com.drona5                      |
| Activity         | *                                 |
| Intent output    | Enabled                           |
| Intent action    | com.proglove.api.BARCODE          |
| Intent category  | Clear or leave unset              |
| Intent delivery  | Broadcast intent                  |


:::caution
Note: Before scanning any barcode, ensure that the MARK (barcode scanner) is paired through the ProGlove Connect App.
:::

## Binding Data Options

The ProGlove Barcode Scanner control captures scanned barcode data and binds it to a designated field within your data form. It supports various barcode formats, ensuring compatibility with a wide range of scanning applications.

### BarcodeData

The BarcodeData field captures the actual data retrieved from the barcode scan. This data is processed and stored as a string. You can use this option to initialize the scanner with default value.

### BarcodeSymbology

The BarcodeSymbology field specifies the symbology of barcode that was scanned. It provides information about the format or standard of the scanned barcode. You can use this option to initialize the scanner with default value.


## Properties

| Property              | Description     |
|-----------------------|-----------------|
| Theme                 | Allows you to choose the color of the scanner input box. You can enter a custom hex code or use one of the available themes in the builder. |
| Placeholder           | A prompt that gives a hint to the user about the expected input in the Scanner field. It appears in the field and is overridden when the user scans a barcode. |
| Debounce Time (In ms) | The delay in milliseconds between events, controlling the frequency of action triggers on value changes. |
| Show Scanner Icon     | Allows you to enable or disable the display of a scanner icon within the control.           |
| Start Scan Text       | The text displayed on the button to start scanning.                                         |
| Stop Scan Text        | The text displayed on the button to stop scanning.                                          |



## Control Outputs

The outputs from the ProGlove Barcode Scanner control, represented by the placeholder `{{barcode}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output           | Description       |
|------------------|------------------------|
| {{proglovebarcode.BarcodeData}} | Contains the barcode data captured from the barcode scan.                                        |
| {{proglovebarcode.BarcodeSymbology}} | Specifies the symbology of barcode that was scanned.              |


## Events

| Trigger    | Description  |
|---------------------------|------------------|
| value_change              | Occurs when this control detects scanning a barcode by ProGlove device. This will get called whenever there is a change/update in the value of this control. |