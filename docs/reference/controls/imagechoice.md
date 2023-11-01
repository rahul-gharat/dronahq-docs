---
sidebar_position: 1
title: Image Choice
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Image Choice control serves as a selection interface providing visual representations for item selection, enabling users to choose from a list and store the respective text linked to the chosen image in the associated bound column.

<figure>
  <Thumbnail src="/img/reference/controls/image-choice/preview.png" alt="Image Choice Control" />
  <figcaption align="center"><i>Image Choice Control</i></figcaption>
</figure>

## Properties

| Property               | Description                                                                                      |
|------------------------|--------------------------------------------------------------------------------------------------|
| Magnify                | Function to zoom in on images in the Image Choice control.                                         |
| Border Color           | Sets the color of the border for images in the selection list.                                      |
| Background Color       | Defines the background color for the Image Choice control.                                          |
| Image Background Color | Configures the background color of the images displayed in the control.                             |
| Image Height           | Specifies the height of the images within the Image Choice control.                                 |
| Border Radius          | Sets the roundness of the corners of the images in the Image Choice control.                       |
| Image Fit              | Configures the fitting method for images displayed: contain, cover, fill, or none.                 |
| Selection Type         | Defines the selection type of the Image Choice control, such as Single Select.                      |
| Text                   | Configures the text size, weight, color, and alignment for the text associated with the images.    |

### Layout on device

This  pertains to the layout of the Image Choice control concerning different devices. Here, the numerical values indicate a grid or layout system that is applied to each type of device orientation, specifying the relative size or layout space that the control would occupy within the device screen.

### Image data

| Property         | Description                                                                                                     |
|------------------|-----------------------------------------------------------------------------------------------------------------|
| Text         | Refer to the display text associated with an image.      
| Select Image | Choose the image you want to put in the control from here  |
| Selected | The image option can be made selected by default if toggled ON |

## Control Outputs

The outputs from the Image Choice control, represented by the placeholder `{{imagechoice}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                  |
|--------------|----------------------------------------------------------------------------------------------|
| imagechoice  | Represents the selected value from the Image Choice control linked to the chosen image.     |


## Events


| Trigger     | Description                                                                                                                              |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| value_select | Occurs when there is a change in the value of the respective control, typically triggered by selecting another option or inputting a new value. |

