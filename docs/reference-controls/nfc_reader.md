---
sidebar_position: 1
title: NFC Reader 
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

## Binding Data Options
The NFC control typically takes in data in the form of NFC tag information after a scan. This data can vary based on the type of NFC tag being scanned and its content. 

### Using NFC Readers

- NFC readers are valuable tools in museums for retrieving detailed exhibit information from specific NFC tags.
- Include a text control to display the output of the scanning action.
- Bind the NFC Reader control to the Text control to visualize the value returned by the NFC Reader.

**Execution Steps:**

1. Run the app on your mobile device.
2. Navigate to the NFC Reader control and click "Start reading."
3. Observe the output displayed in the text box or above the scanner.

**Note:** To utilize an NFC Reader, ensure your mobile device supports NFC and that NFC is enabled.

**Sample Output for the NFC Reader:**

```json
{
  "id": [4,-99,87,58,70,102,-128],
  "techTypes": ["android.nfc.tech.NfcA","android.nfc.tech.MifareUltralight","android.nfc.tech.Ndef"],
  "type": "NFC Forum Type 2",
  "maxSize": 492,
  "isWritable": true,
  "ndefMessage": [
    {
      "tnf": 1,
      "type": [84],
      "id": [],
      "payload": [2,101,110,66,111,117,110,100,97,114,121,32,73,110,116,101,114,110,97,108]
    }
  ],
  "canMakeReadOnly": true
}
```

- The above payload contains a byte array representing zero to (2 ** 32 - 1) bytes.
- The payload can be decoded into a string value using a decoding function.

**Sample Payload Decoding Function:**

```javascript
// Example function to decode payload
try {
    let decodePayload = function(data) {
        // Implementation details for payload decoding
        // ...
        return decodedString;
    };

    let jsonNFCOutput = JSON.parse(nfcoutput);
    let payload = jsonNFCOutput.ndefMessage[0].payload;

    output = decodePayload(payload);
} catch (e) {}
```

**Using the Decoding Function:**

- The decoding function converts the payload to a readable string format.
- In the example, the tag payload text is 'Boundary Internal.'

By running the app on your actual Android or iOS device, you can witness the decoded output of the scanned NFC tag.

<figure>
  <Thumbnail src="/img/reference/controls/nfc-reader/scan.png" alt="scanned data" />
</figure>


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