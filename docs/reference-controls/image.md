---
sidebar_position: 1
title: Image
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Image control serves the purpose of showcasing images within a microapp. As a Media control, it is solely dedicated to viewing and displaying images, devoid of any involvement in submission tasks.

<figure>
  <Thumbnail src="/img/reference/controls/image/preview.jpeg" alt="Image" />
  <figcaption align = "center"><i>Image</i></figcaption>
</figure>

## Binding Data Options

The Image control offers different methods to bind data for displaying images. You can provide a URL to fetch images from various sources or use Base64 strings to directly include image data. Below are the two options:

### Using a URL

You can provide a URL to the Image control, which can be sourced from a sheet, a connector row, or provided directly as a Static URL. Ensure the URLs are accessible and correctly formatted.

Example using Static URLs:

```js
[
  {
    "url": "https://images.app.goo.gl/xTQ3rKywnaEQKmhSA"
  }
]
```

### Using Base64

The Image control supports Base64 strings. You can directly include the image data in Base64 format using the syntax `data:image/<type>;base64,` where `<type>` corresponds to the image file format (e.g., 'png', 'jpeg', 'gif', etc.).

Example using Base64:

```js
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAWUlEQVR4Xu3OMQEAAAABIP6PzgpvUZhf7A3VQYAJkEAFLw/fuhjCDAAAAAAOvdsEwAAAFDQaUOQIBAAAAAPmGpRvAAAAAElFTkSuQmCC
```

Ensure the Base64 string corresponds to the correct image format specified.

By utilizing these options, you can effectively bind data to the Image control and display images from various sources in your microapp.



## Properties

| Property       | Description                                                                                            |
|----------------|--------------------------------------------------------------------------------------------------------|
| Select Image   | Allows you to pick an image from the Gallery or upload it from a source location.                     |
| Image caching  | Enables image caching to improve loading speed by storing the image in cache for future use.          |
| Magnify        | Toggles the magnify feature, adding an eye icon to the image control for zooming in and out.         |
| Image URL      | Specifies the URL of the image to be displayed in the control.                                       |

**Border** 


| Property | Description |
|----------|-------------|
| Padding  | Specifies the space between the image and the border as a number of pixels to the top, bottom, left, and right. |
| Margin   | Specifies the space outside the padding as a number of pixels to the top, bottom, left, and right. |
| Width    | Specifies the width of the margin. |
| Style    | Specifies the style of the margin, such as none, solid, dashed, or dotted. |
| Color    | Specifies the color of the margins. |
| Radius   | Provides rounded corners to the image. You can specify the value for top-left, top-right, bottom-left, and bottom-right corners accordingly. |

**Style**


| Property          | Description                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------|
| Image Width       | Sets the width of the image in the container, either in pixels or as a percentage.                      |
| Image Max Width   | Sets the maximum width of the image in the container, either in pixels or as a percentage.              |
| Max Height (px)   | Specifies the maximum height of the image in pixels.                                                    |
| Alignment         | Allows you to choose the alignment of the image as left, right, or center.                              |
| Fill Type         | Defines how the image appears on the screen: Cover (scaled up) or Contain (scaled down).                |
| Container Height  | Allows you to set the height of the image container. If no value is entered, it adjusts to the image.   |
| Container Width   | Sets the width of the image container.                                                                   |

## Control Outputs

The outputs from the Image control, represented by the placeholder `{{image.[property_name]}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

