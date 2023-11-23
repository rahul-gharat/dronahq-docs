---
sidebar_position: 1
title: Alert Control
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Alert Control provides a mechanism to display important messages or notifications to users. It allows for customization of the alert type, title, description, action text, and more, enabling versatile use cases for various notifications.

<figure>
  <Thumbnail src="/img/reference/controls/alert/preview.jpeg" alt="Alert Control" />
  <figcaption align = "center"><i>Alert Control</i></figcaption>
</figure>

## Binding Data Options

The Alert Control facilitates the display of dynamic content using the Bind Data option. It accepts several data inputs.


### Static Data Option

- `Title`: Represents the title of the alert.
- `Description`: Specifies the detailed description or message to be conveyed.
- `Action Text`: Defines the text label for the action button.
- `Alert Type`: Indicates the type of alert (e.g., Info, Note, Alert).


```json
{
  "Title": "This is a Sample Alert",
  "Description": "This is the sample alert text.",
  "Action Text": "Action",
  "Alert Type": "Info"
}
```

## Properties


| Property       | Description                                               |
|----------------|-----------------------------------------------------------|
| Alert Type     | Specifies the type of alert (Info, Note, Alert).           |
| Title          | Sets the title of the alert.                               |
| Note           | Represents additional notes or descriptive text.           |
| Description    | Defines the detailed description or message content.        |
| Action Text    | Specifies the text label for the action button.            |

## Control Outputs

The outputs from the Alert Control, represented by the placeholder `{{alert}}`, can be utilized in other controls, data queries, or JavaScript functions using the control's unique name.

| Output | Description                                               |
|--------|-----------------------------------------------------------|
| alert  | Represents the data of the selected alert in the control.  |

## Events

| Property       | Description                                                                                   |
|----------------|-----------------------------------------------------------------------------------------------|
| Action_Click   | Occurs when the action button in the alert control is clicked, typically triggering an action.|
