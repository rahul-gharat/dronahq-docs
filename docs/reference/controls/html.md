---
sidebar_position: 1
title: HTML
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The HTML control is an advanced display feature allowing users to insert custom HTML code directly into their forms.
This control is particularly useful when incorporating elements not readily available in the builder by using HTML
markup.

<figure>
  <Thumbnail src="/img/reference/controls/html/preview.jpeg" alt="HTML Control" />
  <figcaption align="center"><i>HTML Control</i></figcaption>
</figure>

## Binding Data Options

The HTML control enables users to bind data through a variety of methods, enhancing customization and dynamic content
integration within the form.

### Static Data Option

Users can provide string HTML format to display static content within the HTML control. For example:

```html
<html>
  <body>
    <p>This text is normal.</p>
    <p><b>This text is bold.</b></p>
  </body>
</html>
```

## Properties


| Property    | Description                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| Auto Height | Enables automatic height adjustment for the control.                                                        |
| HTML        | Allows users to write and execute custom HTML code within the control.                                      |
| Font        | Customizes the text within the control, offering options to modify text size, weight, alignment, and color. |

