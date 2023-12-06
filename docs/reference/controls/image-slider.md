---
sidebar_position: 1
title: Image Slider
---

The Image Slider control is a dynamic feature that displays a set of images in a slider format, enabling an engaging
visual representation within a microapp.

<figure>
  <Thumbnail src="/img/reference/controls/image-slider/preview.jpeg" alt="Image Slider Control" />
  <figcaption align="center"><i>Image Slider Control</i></figcaption>
</figure>

## Binding Data Options

The Image Slider control accepts an array of image URLs as binding data. Here's an example format for binding images:

```json
[
  "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team1349/content/app/images/public/DronaHQ_Logo_K37sX.jpg",
  "https://dronamobilepublic.s3.amazonaws.com/DRONA5_Team1809/content/app/images/public/photo-150053085_6yZLc.jpeg"
]
```

### Properties

The Image Slider control offers various properties for customization:

| Property              | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| Visible Images on Web | Specifies the number of images visible in the Image Slider     |
| Select Image          | Allows the addition of images to display in the Image Slider   |
| Autoplay              | Enables or disables autoplay functionality for the slider      |
| Show Arrows           | Controls the display of navigation arrows for sliding images   |
| Image Width           | Sets the width of the image (percentage or pixels)             |
| Image Max-Width       | Specifies the maximum width of the image                       |
| Height                | Sets the height of the image (percentage or pixels)            |
| Border Radius         | Determines the radius of the image's rounded corners           |
| Fill Type             | Specifies how the image fills the container (Cover or Contain) |
| Opacity               | Defines the opacity of the images in the slider                |
