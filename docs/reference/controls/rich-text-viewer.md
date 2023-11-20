---
sidebar_position: 1
title: Rich Text Viewer
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Rich Text Viewer control allows users to view rich text content within the microapp without editing capabilities. It renders the provided HTML content as formatted text.

<figure>
  <Thumbnail src="/img/reference/controls/rich-text-viewer/preview.jpeg" alt="Rich Text Viewer Control" />
  <figcaption align="center"><i>Rich Text Viewer Control</i></figcaption>
</figure>

## Binding Data Options

The Rich Text Viewer control accepts HTML-formatted text using the Bind Data option. Here's an example of the expected format:

```html
<html>
  <body>
    <p>This text is normal.</p>
    <p><b>This text is bold.</b></p>
  </body>
</html>
```

## Properties

| Property         | Description                                                |
|------------------|------------------------------------------------------------|
| ToolBar Style    | Specifies the style of the toolbar: Classic, Balloon, Inline |
| Default Text     | Sets the default text within the editor control.            |

