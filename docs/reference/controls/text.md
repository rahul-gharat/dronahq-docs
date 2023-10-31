---
sidebar_position: 1
title: Text
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Text control is used to display a block of text separated from adjacent controls using indentation or Spacers. It has additional properties such as dynamic height, Show/Hide on mobile, Show/Hide on Desktop, and Maintain space when hidden property in Freeflow editor.

<figure>
  <Thumbnail src="/img/reference/controls/text/preview.jpeg" alt="Text Control" />
  <figcaption align = "center"><i>Text Control</i></figcaption>
</figure>

## Binding Data Options

To populate the Text control with data, you can use the Bind Data option, which accepts an string data format.

### Static Data Option

The Text control enables the display of static content through the Bind Data option. You can utilize this feature to present fixed text content directly within the control.

For instance, if you wish to exhibit a predefined piece of text within the Text control, you can simply input the desired content into the Bind Data option. 

Consider an example where you want to display an introductory paragraph:

```json

"Welcome to our new app! We aim to provide you with an unparalleled user experience."

```


## Properties

| Property                  | Description                                                                                   |
|---------------------------|-----------------------------------------------------------------------------------------------|
| Paragraph                 | Provide static text to be displayed in the Text control using this property. |
| Properties                | Specifies properties like text font-size, weight and allignment.                                    |
| Letter Spacing            | Configures the space between characters.                                                     |
| Line Height               | Sets the height of each line of text.                                                       |

## Control Outputs

The outputs from the Text control, represented by the placeholder `{{text}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                    |
|--------------|----------------------------------------------------------------|
| text         | Represents the block of text displayed by the Text control.    |
