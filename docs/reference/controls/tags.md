---
sidebar_position: 1
title: Tags
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Tags Control is used to display a set of tags within a specified height. Users can presedifine tags or insert them in various color options.

<figure>
  <Thumbnail src="/img/reference/controls/tag/preview.jpeg" alt="Tags Control Preview" />
  <figcaption align="center"><i>Tags Control Preview</i></figcaption>
</figure>

## Binding Data Options

The Tags Control accepts an array of strings through the Bind Data option to display tag content.

### Static Data Option

You can use this option to define or modify the tag content:

```json
["Technology", "Science", "Art", "Design"]
```


## Properties

| Property      | Description                           |
|---------------|---------------------------------------|
| Font      | Font settings for the tags' text. Sets the size of the font.  Adjusts the thickness of the font.   |
| Block     | Styling properties for the tags' block. Sets the curvature of the tag corners.|
| Theme         | Theme preference for the tag style.    |
| Color     | Color configuration for the tags.     |
| Pick Color    | Allows selection of the tag color.    |
| Max Height    | Sets the maximum height for the tags. |
