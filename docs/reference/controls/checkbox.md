---
sidebar_position: 1
title: Checkbox
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Checkbox control is designed to allow users to select one or more options from a predefined list of choices. It provides a visual interface that enables users to pick multiple options from the available set.

<figure>
  <Thumbnail src="/img/reference/controls/checkbox/preview.png" alt="Checkbox Control" />
  <figcaption align="center"><i>Checkbox Control</i></figcaption>
</figure>

## Binding Data Options

The Checkbox control allows users to select multiple options from a list of choices. To populate the Checkbox control with data, you can use the Bind Data option, which accepts an array of string in JSON format.

### Static Data Option

For instance, let's consider a scenario where you want to create a Checkbox control with a list of software programming languages. Here's an example of using the Bind Data option with an array of programming languages:

```json
[
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "Ruby"
]
```

### Selected Options - Data Binding

To set default selected options in the Checkbox control, let's say you want "JavaScript" and "Python" pre-selected, use the Bind Data - Selected Option section with an array of string values:

```json
[
    "JavaScript",
    "Python"
]
```

:::info
It's crucial to provide the exact strings representing the specific selected options based on the Checkbox control's properties.
:::


## Properties

| Property          | Description                                                                                                            |
|-------------------|------------------------------------------------------------------------------------------------------------------------|
| Theme             | Choose the color of the Checkbox control from available themes or set a custom hex code.                                |
| Placeholder       | Set a hint displayed in the Checkbox control when no default selected options are present.                              |


## Control Outputs

The outputs from the Checkbox control, represented by the placeholder `{{checkbox}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| checkbox     | Represents the user-selected values from the Checkbox control.                                                  |

## Events

| Trigger     | Description                                                                                               |
|--------------|----------------------------------------------------------------------------------------------------------|
| value_select | Occurs when there is a change in the values of the control, typically triggered by selecting other options or inputting new values. |
