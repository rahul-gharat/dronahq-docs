---
sidebar_position: 1
title: Progress Bar
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Progress Bar Control serves as a visual indicator, showcasing the percentage progress of various actions or activities within a microapp. It's particularly useful for tracking completion progress, such as filling out forms or monitoring course registrations online.

<figure>
  <Thumbnail src="/img/reference/controls/progress-bar/preview.png" alt="Progress Bar Control Preview" />
  <figcaption align="center"><i>Progress Bar Control Preview</i></figcaption>
</figure>

## Binding Data Options

The Progress Bar Control allows the tracking of progress using the Bind Data option. It accepts two binding data options:

- `label`: Represents the label or text displayed on the left side of the progress bar.
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

| Property         | Description                                                        |
|------------------|--------------------------------------------------------------------|
| Progress         | Specifies the size, filled and empty color of the progress bar.     |
| Left Text        | Customizes the text on the left side of the progress bar.           |
| Right Text       | Customizes the text on the right side of the progress bar.          |

