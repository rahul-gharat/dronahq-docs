---
sidebar_position: 1
title: Button 
---

import VideoEmbed from "@site/src/components/VideoEmbed";
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Button Control is an interactive element designed for users to initiate specific actions through a click event.

<figure>
  <Thumbnail src="/img/reference/controls/button/preview.jpeg" alt="Button control" />
  <figcaption align = "center"><i>Button control</i></figcaption>
</figure>


The Button Control is a user-interactive element primarily utilized to trigger specific actions upon user interaction. 

## Properties

|   Property       |   Description                                       |
|------------------|-----------------------------------------------------|
| Control ID       | It displays the identifier of the control           |
| Text             | It helps to display text on the button control      |
| Show Icon        | Option to display an icon on the Button.            |
| Icon Position    | Specifies the placement of the displayed icon.      |
| Select Icon      | Choose icon from list of available option.          |

### Style

| Property         | Description                                                                                                     |
|------------------|-----------------------------------------------------------------------------------------------------------------|
| Text             | Text configuration for the control.                                                                             |
| Size             | Font size of the text in pixels.                                                                                |
| Weight           | The weight or thickness of the text (e.g., Light, Normal, Bold).                                                 |
| Color            | Text color code, typically defined in hex format (e.g., #ffffff for white).                                     |
| Alignment        | Specifies how the text is aligned within the control.                                                            |
| Background Color | The color code of the control's background, generally provided in hexadecimal (e.g., #28bc6a for a specific shade).|
| Radius           | The curvature or roundedness of the control's corners, given in pixels.                                          |
| Theme            | Predefined or custom themes for the control's appearance.                                                        |

## Events

| Trigger        | Description                                                                             |
|----------------|-----------------------------------------------------------------------------------------|
| button_click   | Occurs upon clicking the button, triggering a specific action.                           |

## Using Button Control with DronaHQ

The Button control in DronaHQ is a powerful tool for triggering specific events and actions within your application. By configuring Button controls, you can initiate various actions, from simple on-screen interactions to complex server-side operations, facilitating a wide range of functionalities.

### Enhancing User Experience

Buttons in DronaHQ offer an array of capabilities to elevate the user experience. They can be customized to perform actions such as navigating between screens, updating sheets, retrieving data, and implementing custom API actions and database operations.

### Configuring Actions

By utilizing the Button control's properties, particularly the button_click event, you can configure actions like calling workflows, updating sheets, retrieving sheet data, implementing custom API actions, and performing database operations.

### Use Cases

For instance, you can integrate the SMTP connector to send emails based on user feedback or support requests. Leveraging database actions, you can seamlessly manage customer orders using the PostgreSQL database or configure on-screen actions, such as navigating to specific app screens.

### Additional Reading

For a more detailed understanding of Button control features and their functionalities, to trigger actions, both on-screen and on the server side, refer to the article  click [here](/actionflows-on-events/visual-actionflow-builder).