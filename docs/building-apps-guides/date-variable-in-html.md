---
sidebar_position: 1
title: Dynamic Formulas in HTML
---


In modern web development, it's often necessary to dynamically insert data into your HTML, especially when dealing with dates and times. One way to achieve this is by using variables in your HTML code. Let's explore how you can accomplish this by using simple syntax and formulas.

## Syntax for Adding Variables in HTML

To add a variable in your HTML code, you can use the following syntax:

```html
{{VariableName}}
```

This syntax allows you to insert the value of the `VariableName` variable into your HTML. You can then assign a value to this variable using a formula.

## Setting Date with Formulas

To set the date dynamically, you can use formulas that generate the current date and time. There are two approaches you can take:

1. **Server Time (UTC TimeZone):**

   Use the formula `DATESTR(TODAY(),"DD-MM-YYYY HH:mm")` to get the current date and time based on the server's time zone, which is typically UTC.

2. **End User's Local Time:**

   If you need the date and time based on the end user's local time, use the formula `DATESTR(STRTOUNIX(TODAY())-TIMEOFFSET(),"DD-MM-YYYY HH:mm")`. This formula calculates the date and time based on the device's timezone offset.

   Alternatively, if your DateTime is referenced from a DateTime control, you can use its reference like this:

   ```
   DATESTR(datetimepicker-TIMEOFFSET(),"DD-MM-YYYY HH:mm")
   ```

   Here, `datetimepicker` is the unique name of the DateTime control.

## Usage in Email Tasks

Once you have the dynamic date and time in a Text control, you can use it in your Email tasks' formula field. This allows you to include the current date and time in your email content, making it more personalized and relevant.

## Additional Notes

- `DateTime` control outputs Unix Time.
- `TODAY()` returns a Date object.
- `DATESTR()` accepts a Date object or Unix time as input and converts it to a string with the specified output format.
- `TIMEOFFSET()` provides the device's timezone offset.
- `STRTOUNIX()` accepts a Date object or a String Date and converts it to Unix time output.

By using these simple techniques, you can easily add dynamic variables with date formulas to your HTML, making your web content more interactive and user-friendly.