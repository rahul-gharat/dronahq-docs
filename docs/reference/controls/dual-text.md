---
sidebar_position: 1
title: Dual Text 
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Dual Text Control allows the display of two separate text fields, each customizable with various text properties.

<figure>
  <Thumbnail src="/img/reference/controls/dual-text/preview.jpeg" alt="Dual Text Control" />
  <figcaption align="center"><i>Dual Text Control</i></figcaption>
</figure>

## Binding Data Options

The Dual Text Control requires two data fields:

- `left_text`: Represents the text displayed on the left side of the control.
- `right_text`: Represents the text displayed on the right side of the control.


```json
{
  "left_text": "Left Text Content",
  "right_text": "Right Text Content"
}
```

## Properties

The Dual Text Control offers customization for both left and right text fields, enabling various text formatting options.

### Dual Properties

| Property       | Description                                                  |
|----------------|--------------------------------------------------------------|
| Left           | Represents the text displayed on the left side of the control.|
| Properties     | Customizes the left text by changing size, weight, and color. |
| Right          | Represents the text displayed on the right side of the control.|
| Properties     | Customizes the right text by changing size, weight, and color.|

### Left and Right Text Properties

| Property       | Description                                                 |
|----------------|-------------------------------------------------------------|
| Size           | Define the size of the text.                                 |
| Weight         | Specify the weight of the text (Light, Normal, Bold, etc.).  |
| Color          | Define the color of the text.                                |

