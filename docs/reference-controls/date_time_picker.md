---
sidebar_position: 1
title: Date Time Picker
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

Date & Time Picker control is used to accept date and time into a microapp by selecting them from a calendar and clock widget respectively. You can set the user device’s date and time as a default or can keep the picker empty when the date and time control is displayed to the user. Date & Time picker saves the Date & Time in Unix epoch time format. It can be used for various purposes like accepting appointments.

<figure>
  <Thumbnail src="/img/reference/controls/date-time-picker/preview.jpeg" alt="Date Time Picker" />
  <figcaption align = "center"><i>Date Time Picker</i></figcaption>
</figure>

## Binding Data Options

There are different ways to bind data to the Date Time Picker control. You can provide both the date and time using static data options in either UNIX timestamp format or the JavaScript `Date` object format.

### Static Data Options

Example using UNIX timestamp format:

```
UNIX timestamps in milliseconds.

Date and Time: 1627868341000
```

Example using JavaScript `Date` object format:

```
JavaScript Date object.

Date and Time: new Date("2023-08-02T09:39:01")
```

Consider a scenario where you are building an event scheduling application, and you need to set specific dates and times for events. You can use either the UNIX timestamp format or the JavaScript `Date` object format for the binding.

To provide the date and time dynamically, go to Bind Data Option, `Date Time -> Quick Select -> Custom JS`, and write a JavaScript function to retrieve the desired date and time. Below is an example code that utilizes the Moment.js library for UNIX timestamp format:

```js
function JSCode(output) {
  var dateTime = moment().add(2, 'days').set({ hour: 9, minute: 39, second: 1 }).format('x');
  output = dateTime;
  return output;
}
```

To provide the date and time using JavaScript `Date` object format:

```js
function JSCode(output) {
  var dateTime = new Date("2023-08-02T09:39:01");
  output = dateTime;
  return output;
}
```


:::info

When binding data to the Date Time Picker control, consider the format of the data: UNIX timestamp or JavaScript `Date` object. Choose the appropriate `Submit format` in the `Input Properties` of the control: `UTC` for UNIX timestamp format and `LOCAL` for JavaScript `Date` object format. This ensures accurate handling of dates and times based on the data format.

:::


## Properties

| Property       | Description                                                                                                           |
|----------------|-----------------------------------------------------------------------------------------------------------------------|
| Left Text      | Customize the appearance of the Date panel. Options include Font Size, Font Weight (Light, Medium, Bold, Extra Bold, X Extra Bold), Color, and Label. |
| Right Text     | Customize the appearance of the Time panel. Options include Font Size, Font Weight (Light, Medium, Bold, Extra Bold, X Extra Bold), Color, and Label. |
| Theme          | Choose the color of the Container box. You can use a custom hex code value or select from available themes.         |
| Date Format    | Choose the format for date selection. Options: Friendly format (Month DD YYYY), European format (DD/MM/YYYY), US format (MM/DD/YYYY). |
| Time Format    | Choose the format for time selection. Options: 12 hours format, 24 hours format.                                     |
| Submit Format  | Choose between Local time zone and UTC for displaying Date & Time.                                                   |
| Show Arrows    | Enable arrows to set the time in the clock widget.                                                                   |


**Disable dates**




| Future Dates                 |                                                                                                                                      |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Property                     | Description                                                                                                                          |
| Disable All                  | When toggled OFF, all future dates will remain enabled. When toggled ON, all future dates will be disabled for selection.           |
| Disable days                 | (Visible when Disable All toggle is OFF) Select the number of days you want to disable in the future, starting from the day after.  |
| Enable days                  | (Visible when Disable All toggle is ON) Select the number of days you want to enable for selection in the future, starting from the day after.|



| Past Dates                   |                                                                                                                                      |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Property                     | Description                                                                                                                          |
| Disable All                  | When toggled OFF, all past dates will remain enabled. When toggled ON, all past dates will be disabled for selection.               |
| Disable days                 | (Visible when Disable All toggle is OFF) Select the number of days in the past you want to disable, starting from the day before.   |
| Enable days                  | (Visible when Disable All toggle is ON) Select the number of days you want to enable for selection in the past, starting from the day before.|
| Including Disabled Week Days | Toggle ON to include disabled week days in the date selection options.                                                               |
| Including Today              | When toggled ON, the date functionalities for enabling and disabling dates will include the present date in the count of dates.     |


## Control Output

The outputs from the Date time picker control, represented by the placeholder `{{datetimepicker}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| datetimepicker    | Represents the selected date and time value available in the Date time picker control.                        |


## Events

| Trigger      | Description                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value_change | Occurs when there is a modification in the respective control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. |