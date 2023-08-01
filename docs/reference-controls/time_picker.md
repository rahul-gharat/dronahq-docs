---
sidebar_position: 1
title: Time Picker
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Time Picker control allows users to input the desired time in a microapp by selecting it from a clock widget. You have the flexibility to either set the user's device time as the default time or leave the Time Picker empty when presenting it to the user. This versatile control can serve multiple purposes, such as setting meeting times or making reservations.

<figure>
  <Thumbnail src="/img/reference/controls/time-picker/preview.png" alt="Time Picker" />
  <figcaption align = "center"><i>Time Picker</i></figcaption>
</figure>

## Binding Data Options

To populate data in the Time Picker control, you have several options for binding the time. You can provide the time using static data options in either the UNIX timestamp format or the JavaScript `Date` object format.

### Static Data Options

Example using UNIX timestamp format:

```
UNIX timestamp in milliseconds.

Time: 1627868341000
```

Example using JavaScript `Date` object format:

```
JavaScript Date object.

Time: new Date("2023-08-02T09:39:01")
```

For instance, consider a scenario where you are building an appointment scheduling application, and you need to set specific times for appointments. You can use either the UNIX timestamp format or the JavaScript `Date` object format for data binding.

If you want to provide the time dynamically, you can use the `Bind Data Option`, then select `Time Picker -> Quick Select -> Custom JS`, and write a JavaScript function to retrieve the desired time. Below is an example code that utilizes the Moment.js library for the UNIX timestamp format:

```js
function JSCode(output) {
  var time = moment().set({ hour: 9, minute: 39, second: 1 }).format('x');
  output = time;
  return output;
}
```

For providing the time using the JavaScript `Date` object format:

```js
function JSCode(output) {
  var time = new Date("2023-08-02T09:39:01");
  output = time;
  return output;
}
```

:::info

When binding data to the Time Picker control, consider the format of the data: UNIX timestamp or JavaScript `Date` object. Choose the appropriate `Submit format` in the `Input Properties` of the control: `UTC` for UNIX timestamp format and `LOCAL` for JavaScript `Date` object format. This ensures accurate handling of times based on the data format.

:::

## Properties



| Setting           | Description                                                                                               |
|-------------------|-----------------------------------------------------------------------------------------------------------|
| Theme             | Allows you to choose the color of the Container box. You can either enter a custom hex code value or use one from the available themes in the builder.                    |
| Timepicker Theme  | Lets you set the color of the Timepicker widget.                                                          |
| Time Format       | Choose the format you want the time to be selected in. There are 2 formats available: UTC or Local time. |
| Display Format    | Set the format to display time as 12-hour format or 24-hour format.                                       |
| Show Arrows       | When this option is selected, the clock widget has arrows to set the time.                                |




## Control Output

The outputs from the Time picker control, represented by the placeholder `{{timepicker}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| timepicker    | Represents the selected time value available in the Time picker control.                        |


## Events

| Trigger      | Description                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value_change | Occurs when there is a modification in the respective control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. |