---
sidebar_position: 1
title: NFC Reader Control
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The NFC Reader Control is a Custom control that facilitates contactless data exchange for Mobile apps. It enables communication within a short range of up to 10 centimeters between two devices.

<figure>
  <Thumbnail src="/img/reference/controls/nfc-reader/preview.jpg" alt="NFC Reader" />
  <figcaption align = "center"><i>NFC Reader</i></figcaption>
</figure>


:::info

This control is compatible with the latest Android mobile devices that have NFC features integrated into their system. Please note that it is only applicable to Android and iOS devices with an App Version greater than 8.2.0. Enjoy the convenience of contactless data exchange on your supported devices.

:::



## Properties


| Property          | Description                                                                                            |
|-------------------|--------------------------------------------------------------------------------------------------------|
| Theme             | Sets the color of the outline or border of the NFC Reader control.                                     |
| Layout            | Defines the style of the border of the control. Options include Dashed line, Outlined, or Filled.     |
| Scan Text         | The text displayed to prompt the user to start reading.                                                |
| Rescan Text       | The text displayed to prompt the user to rescan.                                                       |
| Action Buttons    | Specifies the style for the action button, including text color, size, weight, and barcode icon color.|
| Title Text style  | Defines the style for the output if Display Output is enabled. Options include color, size, weight, and alignment of the output.|


## Control Output

The outputs from the NFC Reader control, represented by the placeholder `{{nfcreader}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| nfcreader    | Represents the value available after decoding the scanned NFC tag, in the NFC Reader control.                        |