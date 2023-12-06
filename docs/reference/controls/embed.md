---
sidebar_position: 1
title: Embed 
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Embed control is an advanced display feature used to integrate external content such as websites, videos, and PDFs directly into app forms.

<figure>
  <Thumbnail src="/img/reference/controls/embed/preview.jpeg" alt="Vertical Steps" />
  <figcaption align="center"><i>Vertical Steps</i></figcaption>
</figure>


The Embed control serves as a versatile tool, particularly valuable when incorporating external website data, including reports, dashboards, partner links, etc., from permitted URLs, into your app.

## Binding Data Option

The Embed control accepts a string URL format to embed external content into the app. There are different ways to bind data to the Embed control.

### Static Data Option

You can provide a single URL string to display static content within the Embed control. For example:

```json
"https://www.example.com/embedded_content"
```

### Properties

| Property        | Description                                                                                          |
|-----------------|------------------------------------------------------------------------------------------------------|
| Auto Height     | Enable or disable the automatic height adjustment for the Embed control.                               |
| Show Border     | Toggle to specify whether a border should be displayed around the Embed control's frame.              |
| Frame Width     | Specify the width in pixels or as a percentage, vw, or vh for the Embed control's frame.              |
| Min Height      | Set the minimum height (when Auto Height is toggled on) based on your overall app design.              |
| Document URL    | Specify the URL of the video or content to be embedded within your form.                                |

