---
sidebar_position: 1
title: Label 
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Label control serves as a display-only control that showcases titles, subtitles, and actionable icons, facilitating quick actions directly from the displayed information.

<figure>
  <Thumbnail src="/img/reference/controls/label/preview.png" alt="Label Preview" />
  <figcaption align="center"><i>Label Preview</i></figcaption>
</figure>

## Binding Data Options

The Label control accepts the following bindings:

- `title`: Represents the text to be displayed in the title field.
- `subtitle`: Specifies the text to be shown in the subtitle field.
- `action_value`: Assigns the value for the intended action, such as a phone number for a call or an email for emailing.

## Properties


| Property           | Description                                                                                          |
|--------------------|------------------------------------------------------------------------------------------------------|
| Title              | Accepts the text to be displayed in the title field.                                                  |
| Title Properties   | Customize the Title text by adjusting its size, weight, alignment, and color.                         |
| Subtitle           | Specifies the text to be shown in the subtitle field.                                                  |
| Subtitle Properties| Customize the Subtitle text by adjusting its size, weight, alignment, and color.                      |
| Theme              | Sets the color theme for the control.                                                                  |
| Action Value       | Assign a value for the specific action, such as a phone number or an email.                            |
| Action             | Select the desired action for the control, automatically updating the icon based on the chosen action.|


