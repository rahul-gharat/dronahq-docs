---
sidebar_position: 1
title: Image Select Bar
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

The Image Select Bar Control is a type of Selection control that visually presents a list of options and retrieves the corresponding text for additional actions.

This control proves beneficial when aiming to streamline the user interface for item selection by offering a visual representation of items, commonly found on e-commerce websites.


<figure>
  <Thumbnail src="/img/reference/controls/image-bar/preview.jpeg" alt="Image Select Bar" />
  <figcaption align = "center"><i>Image Select Bar</i></figcaption>
</figure>


## Properties

| Property        | Description                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------|
| Selection Type  | Specifies if multiple images can be selected. Options are 'multi select' or 'single select'.                                   |
| Text Style      | Specifies the style of the text for each image. You can set the text size, weight (Light, Normal, Bold, Extra Bold, X Extra Bold), alignment (Left, Center, Right, Justified), and color of the label. |
| Flex Control    | Toggle used to enable or disable the control as a flex control.                                                                  |


### Selected 

| Property           | Description                                                                                                                               |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Text Style         | Specifies the style of the text for each image. You can set the text size, weight (Light, Normal, Bold, Extra Bold, X Extra Bold), alignment (Left, Center, Right, Justified), and color of the label. |
| Background Color   | The background color property sets the background color of the control. You can customize it by specifying a valid color code, for example, #EDFAF6.                                        |
| Border Color       | The border color property sets the color of the control's border. You can customize it by specifying a valid color code.                      |


### Image Data

| Property        | Description                                                                                                                                       |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Text            | The text that appears below the image in the container. This text would be returned by the control when selecting options and can be stored in the Sheet. |
| Select Image    | Allows you to choose an image from a specified source location.                                                                                    |
| Icon            | Enables you to select an icon that represents the option.                                                                                          |
| Selected        | Toggle switch to specify whether the image would be shown as selected by default when running the form.                                          |
| Show image      | Toggle switch to specify whether to display the image.                                                                                             |
| Show icon       | Toggle switch to specify whether to display the icon.                                                                                              |



## Control Outputs

The outputs from the Image Select Bar control, represented by the placeholder `{{imageselectbar}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| imageselectbar    | Represents the user-selected value from the given path/trail of the Image Select Bar control.                        |
