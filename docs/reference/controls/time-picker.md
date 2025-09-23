---
sidebar_position: 1
title: Time Picker
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Time Picker control allows users to input the desired time in a microapp by selecting it from a clock widget, or by typing manually. You have the flexibility to either set the user's device time as the default time or leave the Time Picker empty when presenting it to the user. Time picker saves the time in Unix epoch time format by default, and various other formats can also be specified. This versatile control can serve multiple purposes, such as setting meeting times or making reservations.

<figure>
  <Thumbnail src="/img/reference/controls/time-picker/preview.png" alt="Time Picker" />
</figure>

## Binding Data Options

To populate data in the Time Picker control, you have several options for binding the time. You can provide the time using static data options in either the UNIX timestamp format or the JavaScript `Date` object format or any other formula.

#### Examples

```jsx title="UNIX timestamps in milliseconds"
1753800808000
```
```jsx title="JavaScript Date object"
new Date('2025-07-29T15:55:51.000Z')
```
```jsx title="Moment object"
moment().add(30, 'minutes')
```

For instance, consider a scenario where you are building an appointment scheduling application and you need to set specific times for appointments, you can bind a formula of your choice or a reference, as per requirement.

## Content

- **Time format:** Choose the format for the time to be displayed, either `12 Hours` or `24 Hours` format.
- **Manage time zone:** Enable this toggle to control the time zones for display purpose and the output value. Below properties become configurable when it is enabled.
  - **Display:** The time is displayed in the input field as per the time zone selected here.
  - **Value:** Output value is received as per the time zone selected here.
- **Submit Format:** Choose `Local` or `UTC` time zone for the time being displayed. It becomes configurable when *Manage time zone* is disabled.
- **Value format:** Enter a valid format here for the output value, e.g, 'h:mm A', 'HH:mm' etc. Default value format is `Unix` to get the output in milliseconds. `Unix` *is default even if nothing is provided.*

:::info Note
When **Manage time zone** is enabled, the output of the control is received as per the selected time zone in **Value** property, else it will be considered as per the selected time zone in **Submit Format** property, either `Local` or `UTC`.
:::

### Add-ons

| Property | Description |
| :------- | :---------- |
| Tooltip | Provides helpful hints or extra information on hover. |
| Description | Adds descriptive text beneath options or sections. |
| Label | Displays labels for specific options or sections. Configurable with size, weight, and color. |
| Prefix | Enables you to add configurable prefix text and prefix icon on the control. |
| Suffix | Enables you to add configurable suffix text and suffix icon on the control. |

## Interaction

- **Read Only:** Makes the control non-editable. The user can view the content but cannot modify it.
- **Manual Edit:** Allows users to manually type into the input field.
- **Debounce Time:** Delay in milliseconds used to control frequency between action triggers on change in value, when edited manually.
- **Submit Data:** Determines if the output value should be included in form submission. Options include `Always`, `Never`, and `Not When hidden`.

### Validation

| Property | Description |
| :------- | :---------- |
| Required | Ensures the field is not empty. |
| Min time | Sets the minimum time to be allowed in the control. Expected format is the one selected as the *Time format*. If not provided, defaults to start of day. Any provided date is ignored. |
| Max time | Sets the maximum time to be allowed in the control. Expected format is the one selected as the *Time format*. If not provided, defaults to end of day. Any provided date is ignored. |
| Custom | Allows us to configure any custom validation(s). |

:::info Note
- **Min time** & **Max time** fields can be bound dynamically as well, using the references or formulae.
- If **Manage time zone** is enabled, these fields' values are parsed using the **Value** timezone.
- These fields are available to be configured, if **self-hosted** version, on versions **3.9.0** and greater.
:::

:::tip
**Min time** can be before, after or same as **Max time.** If **Min time** is before or same as **Max time**, all the time values lying in this range only are allowed or selectable. Whereas if **Min time** lies after the **Max time**, all the time values lying in between them can be made unselectable or **not** allowed.
:::

### Events

| Trigger | Description |
| :------ | :---------- |
| value_change | Occurs when there is a modification in the respective control's value. To control the frequency or speed of the change event, you can utilize the *Debounce Time* property associated with the control. |

## Appearance

- **Visibility:** Toggles the visibility of the control at runtime.
- **Show Clear:** Adds a clear (✕) icon inside the input field to allow users to clear the value.
- **Theme:** Sets the theme color to the clock widget.
- **Border:** Sets the border color of the control.
- **Show Arrows:** Enables arrows to set the time in the clock widget.

## Control Output

The outputs from the Time picker control, represented by the placeholder `{{timepicker}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output | Description |
| :----- | :---------- |
| timepicker | Represents the output of the selected time value available in the time picker control. |

:::danger Caution
The output from one time picker control should **not** be used as an input to another, when the *Value format* is set to `Unix`. In this format, the control’s output represents the number of milliseconds elapsed since midnight in the GMT time zone. However, for compatibility, the milliseconds provided as the input should follow the *Unix epoch* standard—measured from midnight UTC on *1970-01-01.*
:::