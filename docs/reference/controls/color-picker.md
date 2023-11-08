---
sidebar_position: 1
title: Color Picker
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Color Picker control provides users with the ability to choose colors visually from a spectrum or predefined color palettes. This control is commonly used in applications that require users to select specific colors for various design or visualization purposes.

<figure>
  <Thumbnail src="/img/reference/controls/colorpicker/preview.jpeg" alt="Color Picker" />
  <figcaption align="center"><i>Color Picker</i></figcaption>
</figure>

## Properties

| Property        | Description                                                               |
|-----------------|---------------------------------------------------------------------------|
| Display Options |                                                                   |
| Show Palette    | Enables the display of a palette for easy color selection.                |
| Show Opacity    | Allows users to adjust the opacity of the selected color.                 |
| Show Preview    | Displays a preview of the chosen color.                                   |
| Show Hue        | Shows the hue selector for more precise color choice.                     |
| Tray Type       | The Color Picker control offers different tray types, such as Nano, to streamline the color selection process. |
| Default Color   | Defines the default color displayed when the Color Picker control loads.   |
| Palette Color   | Allows users to pick a color from a predefined palette.                    |

## Events

The Color Picker control triggers the following events:

| Trigger         | Description                                                               |
|-----------------|---------------------------------------------------------------------------|
| value_change    | Occurs when there is a change in the value of the respective control, typically triggered by selecting or changing a color. |

