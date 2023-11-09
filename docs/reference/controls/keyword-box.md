---
sidebar_position: 1
title: Keyword Box
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Keyword Box control is a user interface element that displays a collection of keywords within a box. It allows users to add new keywords, remove existing ones, and presents a set of values that can be utilized by other controls for various purposes.

<figure>
  <Thumbnail src="/img/reference/controls/keyword-box/preview.jpeg" alt="Keyword Box Control" />
  <figcaption align="center"><i>Keyword Box Control</i></figcaption>
</figure>

## Binding Data Options

The Keyword Box control accepts an array of strings in JSON format as binding data. This allows users to input and manage a collection of keywords.

### Static Data Option

To display a static set of keywords in the Keyword Box, the Bind Data option must be specified as an array of strings. For instance:

```json
[
    "Keyword 1",
    "Keyword 2",
    "Keyword 3"
]
```

## Properties

| Property             | Description                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------|
| Size                 | Automatically adjusts the size of the box to accommodate varying amounts of keywords.        |
| Theme                | Allows you to select the border color of the control using a custom hex code or preset theme. |
| Keyword background   | Permits customization of the keyword background color using a custom hex code or preset theme.|

## Control Outputs

The Keyword Box control captures and maintains a set of keywords entered by the user. These keywords are represented by the placeholder `{{keyword_array}}`, reflecting the current collection of keywords.

| Output          | Description                                        |
|-----------------|----------------------------------------------------|
| keyword_array   | Represents the set of keywords in the Keyword Box.  |
