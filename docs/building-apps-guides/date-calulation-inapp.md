---
sidebar_position: 1
title: In-App Date Calculation
---

import Image from '@site/src/components/Image'; 
import VersionedLink from '@site/src/components/VersionedLink'; 
import Thumbnail from '@site/src/components/Thumbnail';


All dates in DronaHQ are stored in [Unix Time](https://en.wikipedia.org/wiki/Unix_time), a standard way to represent date and time. This makes date calculations straightforward and consistent across different systems. Here, we’ll explore how to calculate dates relative to today using DronaHQ's functions.

## Calculating N Days Ago with Current Time Considered

To find the date N days ago from today, including the current time, you can use the following formula and bind it to a `DateTime` control:

```plaintext
STRTOUNIX(TODAY()) - N * 24 * 60 * 60 * 1000
```

#### Where:
- `N` is the number of days before today.

This formula accounts for the current time in its result.

#### Formula Breakdown

- TODAY(): Returns the current date and time as a Date object.
- STRTOUNIX(TODAY()): Converts the Date object to Unix Time (in milliseconds).
- N * 24 * 60 * 60 * 1000: Calculates the number of milliseconds in N days (since one day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds).

#### Example

For `N=2`, compare the outputs of two DateTime controls: one with the formula `TODAY()` and the other with `STRTOUNIX(TODAY()) - 2 * 24 * 60 * 60 * 1000`.

<figure>
  <Thumbnail src="/img/building-apps-guides/in-app-date-calculation/example1.png" alt="" />
</figure>

## Calculating N Days Ago Without Current Time

To find the date N days ago from today, ignoring the current time, use this formula and bind it to a `Date` control:

```plaintext
STRTOUNIX(DATESTR(TODAY(), "DD-MM-YYYY"), "DD-MM-YYYY") - N * 24 * 60 * 60 * 1000
```

#### Where:
- `N` is the number of days before today.

This formula does not consider the current time of the day.

#### Formula Breakdown

- TODAY(): Returns the current date and time as a Date object.
- DATESTR(TODAY(), "DD-MM-YYYY"): Converts the Date object to a string in the format "DD-MM-YYYY".
- STRTOUNIX(DATESTR(TODAY(), "DD-MM-YYYY"), "DD-MM-YYYY"): Converts the date string back to Unix Time, ignoring the time of day.
- N * 24 * 60 * 60 * 1000: Subtracts the number of milliseconds in N days.

#### Example

For `N=2`, compare the outputs of a DateTime control with `TODAY()` and two Date controls: one with `TODAY()` and another with `STRTOUNIX(DATESTR(TODAY(), "DD-MM-YYYY"), "DD-MM-YYYY") - 2 * 24 * 60 * 60 * 1000`.

<figure>
  <Thumbnail src="/img/building-apps-guides/in-app-date-calculation/example2.png" alt="" />
</figure>

The third Date control shows the time set to 12:00 AM, indicating no time of day is considered. This may vary depending on your timezone, as DateTime controls display local time by default.

:::tip

For calculating N days after today, simply add the days instead of subtracting:
  ```plaintext
  STRTOUNIX(TODAY()) + N * 24 * 60 * 60 * 1000
  ```

:::

### More Information

- **DATESTR Function:** Learn more [here](https://docs.dronahq.com/reference/keywords-js-utilities/fx-formulas/#datestr).
- **STRTOUNIX Function:** Learn more [here](https://docs.dronahq.com/reference/keywords-js-utilities/fx-formulas/#strtounix).
