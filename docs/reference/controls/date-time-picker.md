---
sidebar_position: 1
title: Date Time Picker
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Date & Time Picker control is used to accept date and time into a microapp by selecting them from a calendar and clock widget respectively, or by typing manually. You can set the user device’s date and time as a default or can keep the picker empty when the date and time control is displayed to the user. Date & Time picker saves the Date & Time in Unix epoch time format by default, and various other formats can also be specified. It can be used for various purposes like accepting appointments.

<figure>
  <Thumbnail src="/img/reference/controls/date-time-picker/preview.jpeg" alt="Date Time Picker" />
</figure>

## Binding Data Options

There are different ways to bind data to the Date Time Picker control. You can provide both the date and time using static data options in either UNIX timestamp format or the JavaScript `Date` object format or any other formula.

#### Examples

```jsx title="UNIX timestamps in milliseconds"
1751522067000
```
```jsx title="JavaScript Date object"
new Date('2025-07-02T11:20:51Z')
```
```jsx title="Moment object"
moment().add(2, 'days')
```

Consider a scenario where you are building an event scheduling application and you need to set specific dates and times for events, you can bind a formula of your choice or a reference, as per requirement.

## Content

- **Date format:** Enter a valid format here for the date to be displayed, e.g., 'MMM DD YYYY', 'DD/MM/YYYY', 'LL' (friendly format), 'MM-DD-YYYY' etc.
- **Time format:** Choose the format for the time to be displayed, either `12 Hours` or `24 Hours` format.
- **Manage time zone:** Enable this toggle to control the time zones for display purpose and the output value. Below properties become configurable when it is enabled.
  - **Display:** The date & time is displayed in the input field as per the time zone selected here.
  - **Value:** Output value is received as per the time zone selected here.
- **Submit format:** Choose `Local` or `UTC` time zone for date & time being displayed. It becomes configurable when *Manage time zone* is disabled.
- **First day:** Sets the first day of the calendar week in the date picker.
- **Value format:** Enter a valid format here for the output value, e.g, 'MM/DD/YYYY h:mm A', 'YYYY-MM-DD HH:mm' etc. Default value format is `Unix` to get the output in milliseconds. `Unix` *is default even if nothing is provided.*

:::info Note
When **Manage time zone** is enabled, the output of the control is received as per the selected time zone in **Value** property, else it will be considered as per the selected time zone in **Submit format** property, either `Local` or `UTC`.
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
| Min date | Sets the minimum date to be allowed in the control. Expected format is the one entered as the *Date format*. Time can also be provided. If no time is provided, start of the day is used by default. |
| Max date | Sets the maximum date to be allowed in the control. Expected format is the one entered as the *Date format*. Time can also be provided. If no time is provided, end of the day is used by default. |
| Min time | Sets the minimum time to be allowed in the control. Expected format is the one selected as the *Time format*. If not provided, defaults to start of day. Any provided date is ignored. |
| Max time | Sets the maximum time to be allowed in the control. Expected format is the one selected as the *Time format*. If not provided, defaults to end of day. Any provided date is ignored. |
| Custom | Allows us to configure any custom validation(s). |

::::note Info
- **Min date** and **Max date** can accept time also (selected *Time format* is expected), e.g., 'Jun 01 2025', 'Jun 01 2025 11:30 AM' etc.
  - If *Min date* is provided, no earlier date and time value is allowed.
  - If *Max date* is provided, no later date and time value is allowed.
  :::danger Caution
  *Min date* can't be after *Max date.* If this occurs due to some mistake or human error, no date will be allowed or selectable.
  :::
- **Min time** can be before, after or same as **Max time.**
  - If *Min time* is after *Max time*, all the time values same or after *Min time*, as well as same or before *Max time* are allowed.

:::info Note
- **Min date, Max date, Min time** & **Max time** properties can be bound dynamically as well, using the references or formulae.
- If **Manage time zone** is enabled, these fields' values are parsed using the **Value** timezone.
- These fields are available to be configured, if **self-hosted** version, on versions **3.9.0** and greater.
:::

::::

### Disable dates

| Property | Description |
| :------- | :---------- |
| Disable Days | Allows you to select the weekdays to disable. |
| Future Dates | Allows you to disable or enable future days. |
| Past Dates | Allows you to disable or enable past days. |
| Including Disabled Week Days | Includes the disabled weekdays in the number of days to be disabled or enabled. |
| Including Today | Includes today in the disabled days count. |

:::note Disable or Enable
<Tabs>
  <TabItem value="future-dates-rule" label="Future Dates">
    <ul>
      <li><strong>Disable All:</strong> When toggled OFF, all future dates will remain enabled. When toggled ON, all future dates will be disabled for selection.</li>
      <li><strong>Disable days:</strong> (Visible when <i>Disable All</i> toggle is OFF) Select the number of days you want to disable in the future, starting from the day after.</li>
      <li><strong>Enable days:</strong> (Visible when <i>Disable All</i> toggle is ON) Select the number of days you want to enable for selection in the future, starting from the day after.</li>
    </ul>
  </TabItem>
  <TabItem value="past-dates-rule" label="Past Dates">
    <ul>
      <li><strong>Disable All:</strong> When toggled OFF, all past dates will remain enabled. When toggled ON, all past dates will be disabled for selection.</li>
      <li><strong>Disable days:</strong> (Visible when <i>Disable All</i> toggle is OFF) Select the number of days you want to disable in the past, starting from the day before.</li>
      <li><strong>Enable days:</strong> (Visible when <i>Disable All</i> toggle is ON) Select the number of days you want to enable for selection in the past, starting from the day before.</li>
    </ul>
  </TabItem>
</Tabs>
:::

### Events

| Trigger | Description |
| :------ | :---------- |
| value_change | Occurs when there is a modification in the respective control's value. To control the frequency or speed of the change event, you can utilize the *Debounce Time* property associated with the control. |

## Appearance

- **Visibility:** Toggles the visibility of the control at runtime.
- **Show Clear:** Adds a clear (✕) icon inside the input field to allow users to clear the value.
- **Theme:** Sets the theme color to the calendar and clock widget.
- **Border:** Sets the border color of the control.
- **Show Arrows:** Enable arrows to set the time in the clock widget.

## Control Output

The outputs from the Date time picker control, represented by the placeholder `{{datetimepicker}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output | Description |
| :----- | :---------- |
| datetimepicker | Represents the output of selected date and time value available in the Date time picker control. |