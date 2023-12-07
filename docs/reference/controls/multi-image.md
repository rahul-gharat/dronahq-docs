---
sidebar_position: 1
title: Multi Image
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

The Multi Image control is a versatile media tool designed to present a grid of multiple images within a microapp,
enabling an organized display of visual content.

<figure>
  <Thumbnail src="/img/reference/controls/multi-image/preview.jpeg" alt="Chat Control" />
  <figcaption align="center"><i>Chat Control</i></figcaption>
</figure>

## Binding Data Options

The Multi Image control expects an array of string URLs as its binding data option, allowing you to populate the grid
with multiple images. The format for providing URLs is as follows:

```json
[
  "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team1349/content/app/images/public/DronaHQ_Logo_K37sX.jpg",
  "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team1809/content/app/images/public/photo-150053085_6yZLc.jpeg"
]
```


