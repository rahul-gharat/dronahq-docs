---
sidebar_position: 1
title: Heading 
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Heading Control is used to display prominent text or titles with customizable text properties, allowing for varied styling and formatting options.

<figure>
  <Thumbnail src="/img/reference/controls/heading/preview.png" alt="Heading Control" />
  <figcaption align = "center"><i>Heading Control</i></figcaption>
</figure>

## Binding Data Options

The Heading Control accepts binding data in a string format, allowing direct input of the text content to be displayed.

### Expected Format

```json
"Hello there! How are you?"
```

## Properties

The Heading Control offers several properties for customizing text appearance:

| Property       | Description                                               |
|----------------|-----------------------------------------------------------|
| Text           | Represents the content to be displayed in the heading.      |
| Size           | Defines the size of the text in the heading.                |
| Properties     | Customizes the heading text by changing size, weight, alignment, and color. |
| Letter Spacing | Allows spacing adjustment between the letters in the text.  |
| Line Height    | Specifies the line height for the text in the heading.       |

