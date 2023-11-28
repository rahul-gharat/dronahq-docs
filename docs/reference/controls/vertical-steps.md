---
sidebar_position: 1
title: Vertical Steps
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Vertical Steps control is an advanced display element designed to facilitate vertical, multi-step navigation within forms, providing a visual representation of the form's status. It's particularly useful when indicating progress or stages within a form.

<figure>
  <Thumbnail src="/img/reference/controls/vertical-steps/preview.jpeg" alt="Vertical Steps" />
  <figcaption align="center"><i>Vertical Steps</i></figcaption>
</figure>

The Vertical Steps control serves as a valuable addition to various form types, including registrations for online shopping, hotel reservations, travel bookings, and more, allowing users to comprehend their progress through a series of steps.

### Properties

| Property           | Description                                                           |
|--------------------|-----------------------------------------------------------------------|
| Text               | Label or input text for the control                                    |
| Text Config        | Font properties for the input text                                     |
| States Configuration | Specifies the button configuration for different states                |
| States             | State numbers (State-1, State-2, State-3, Default)                     |
| Button Color       | Color of the button for each state                                     |
| Icon Color         | Color of the icon used for each state                                  |
| Choose Icon        | Icon selection for each state                                          |



## Events


| Event          | Description                                           |
|----------------|-------------------------------------------------------|
| button_click   | Triggered upon clicking the button within the control  |
