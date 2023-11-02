---
sidebar_position: 1
title: Radio
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Radio control is designed to allow users to select a single option from a predefined list of choices. It provides a visual interface that enables users to pick from the available set of options.

<figure>
  <Thumbnail src="/img/reference/controls/radio/preview.png" alt="Radio Control" />
  <figcaption align="center"><i>Radio Control</i></figcaption>
</figure>

## Binding Data Options

The Radio control allows users to select one option from a list of choices. To populate the Radio control with data, you can use the Bind Data option, which accepts an array of string in JSON format.

### Static Data Option

For example, suppose you want to create a Radio control with a list of colors as options. Here's how you can use the Bind Data option with an array of color names:

```json
[
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Purple"
]
```


### Selected Options - Data Binding

You can set a default selected option in the Radio control using the Bind Data - Selected Option section with a string value. For example:

```json

 "Purple"
    
```

:::info
Remember to provide the exact string representing the specific selected option based on the Radio control's properties.
:::


## Properties

| Property          | Description                                                                                                            |
|-------------------|------------------------------------------------------------------------------------------------------------------------|
| Theme             | Choose the color of the Radio control from available themes or set a custom hex code.                                 |
| Placeholder       | Set a hint displayed in the Radio control when no default selected option is present.                                   |


## Control Outputs

The outputs from the Radio control, represented by the placeholder `{{radio}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| radio        | Represents the user-selected value from the Radio control.                                                     |

## Events

| Trigger     | Description                                                                                               |
|--------------|----------------------------------------------------------------------------------------------------------|
| value_select | Occurs when there is a change in the value of the control, typically triggered by selecting another option or inputting a new value. |