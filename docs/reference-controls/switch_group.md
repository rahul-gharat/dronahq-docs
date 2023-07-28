---
sidebar_position: 1
title: Switch Group
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

Switch Group is used to select one or more options from the given list of choices. It is a small interactive box that can be toggled by the user to indicate an affirmative or negative choice. A user can toggle on/off multiple values in Switch Group control.

<figure>
  <Thumbnail src="/img/reference/controls/switch-group/preview.png" alt="Switch Group" />
  <figcaption align = "center"><i>Switch Group</i></figcaption>
</figure>

## Binding Data Options

Switch Group control accepts array of String to display data. There are different ways in which you can bind data to the Switch Group control.

### Static Data Option

To display static options in the Switch Group control, you can use the Bind Data option. The Bind Data option must be specified as an array of String. 

In the context of the Switch Group control, there are two available options for data binding:

`Option`: This is used to specify the data available as options for toggling on/off in the Switch Group control.

`Selected Options`: This is used to specify the data that we want to be toggled on by default in the Switch Group control.

Suppose you have an array of options for a user to select their preferred mode of transportation: 

```js
["Car", "Bus", "Bicycle", "Walk"].
```

You want to display these options as switches and allow the user to choose one.The switches will be displayed with the labels "Car", "Bus", "Bicycle", and "Walk", and the user can select one of them by toggling the switches on or off.


## Properties

| Property          | Description                                                                                                                                                                                           |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Theme Toggle On   | This option allows the user to set the theme color of the switch when it is toggled on (in the "on" state).                                                                                            |
| Theme Toggle Off  | This option allows the user to set the theme color of the switch when it is toggled off (in the "off" state).                                                                                          |
| Bead Color        | This option allows the user to set the theme color of the beads in the switch toggle buttons. The beads are the small indicator dots or markers that show the switch's current state (on or off).      |


## Control Outputs

The outputs from the Switch Group control, represented by the placeholder `{{switchgroup}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| switchgroup    | Represents the user-selected value from the selected options of the Switch Group control.                        |


## Events


| Trigger     | Description                                                                                                                              |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| value_select | Occurs when there is a change in the value of the respective control, typically triggered by selecting another option or inputting a new value. |