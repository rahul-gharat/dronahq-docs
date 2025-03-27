---
sidebar_position: 1
title: Write NFC Tag
---

import Thumbnail from '@site/src/components/Thumbnail';

The `Write NFC Tag` action provides an easy and simple no-code way to build code logic within the Action flow. In the DronaHQ, you have the ability to program/write NFC tags. This dedicated action enables you to create NFC tags for passive NFC devices.

This action can be triggered to reprogram NFC tags from devices. By using this action on button controls, you can transform your microapp into an NFC writer.

:::info NOTE
Support is available only in Android and iOS apps. This action is not applicable for preview and is functional only in the published app. Additionally, Android and iOS versions 8.3.0 and above are supported.
:::

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/write-nfc-tag/nfc.png" alt="Write NFC Tag" />
<figcaption align='center'><i>Write NFC Tag</i></figcaption>
</figure>


## Setting up the Write NFC Tag

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/write-nfc-tag/feild.jpeg" alt="Write NFC Tag" />
</figure>

1. Navigate to the Actions of any control and select an action.

2. This will open up the action flow area. Click to add an action or connector. Search for `Write NFC Tag` in the `On-Screen Actions` section under the `Utility` group.

3. You'll be prompted to select the Record Type from the dropdown. You have three options:

   - Text Record: Used to store or write plain text on an NFC chip. Typically used for small amounts of text data.
   - URL Record: Used to store or write URLs on an NFC chip. When scanned, it opens the link from the native NFC app.
   - Android App Record: Used to store packages of Android and iOS apps. When scanned, it opens the app on your device matching the app package stored in the NFC chip.

4. Specify the data input to be written as an NFC tag under the `Data` section. Select or bind variables and keywords to select the data to be written as tags.

5. Click `Finish` to save and add it to the action flow of the control.

