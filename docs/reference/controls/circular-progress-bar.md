---
sidebar_position: 1
title: Circular Progress Bar
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Circular Progress Bar Control is a Display control used for indicating the percentage progress of an action or activity in the form of a circular graph.

<figure>
  <Thumbnail src="/img/reference/controls/circular-progress-bar/preview.png" alt="Circular Progress Bar Control Preview" />
  <figcaption align="center"><i>Circular Progress Bar Control Preview</i></figcaption>
</figure>

## Binding Data Options

The Circular Progress Bar Control allows tracking progress using the Bind Data option. It accepts two binding data options:

- `label`: Represents the label or text displayed at the center of the circular progress bar.
- `percentage`: Indicates the percentage value for the progress.

### Static Data Option

You can use this feature to define or modify the progress value:

```json
{
  "label": "Progress",
  "percentage": 75
}
```

## Properties

### Progress Bar Properties

| Property         | Description                                                        |
|------------------|--------------------------------------------------------------------|
| Font             | Properties for the label in the center of the circular progress bar.|
| Progress         | Customizes the look of the circular progress bar control.           |
| Alignment        | Specifies the alignment of the circular progress bar.               |
| Line Clamp       | Wraps the label inside the control to a specified number of lines.  |

