---
sidebar_position: 1
title: Rich Text Editor
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Rich Text Editor control is an interface for editing rich text within web browsers. It provides a "what-you-see-is-what-you-get" (WYSIWYG) editing area. The primary goal is to reduce the effort for users trying to express their formatting directly as valid HTML markup.

<figure>
  <Thumbnail src="/img/reference/controls/rich-text-editor/preview.jpeg" alt="Rich Text Editor Control" />
  <figcaption align="center"><i>Rich Text Editor Control</i></figcaption>
</figure>

## Binding Data Options

The Rich Text Editor control enables the editing of static rich text content using the Bind Data option. The Rich Text Editor control accepts string data format for binding data.

### Static Data Option

You can utilize this feature to create or modify text content directly within the control.

For instance, if you want to provide a predefined piece of rich text:

```json
"Welcome to our new platform! Express your ideas using our intuitive interface."
```

## Properties

| Property         | Description                                                |
|------------------|------------------------------------------------------------|
| ToolBar Style    | Specifies the style of the toolbar: Classic, Balloon, Inline |
| Default Text     | Sets the default text within the editor control.            |

## Control Outputs

The outputs from the Rich Text Editor control, represented by the placeholder `{{rich-text}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                      |
|--------------|--------------------------------------------------|
| rich-text    | Represents the rich text edited in the control.   |




