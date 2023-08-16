---
sidebar_position: 1
title: Timeline
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Timeline control consists of a vertical list, to display events along with date and time. It is a custom control for displaying list data in a timeline.

It supports HTML rendering of entries, event grouping, and group sorting.

<figure>
  <Thumbnail src="/img/reference/controls/timeline/preview.png" alt="Timeline" />
  <figcaption align = "center"><i>Timeline</i></figcaption>
</figure>


## Binding Data Options

Timeline control accepts array of objects in JSON format to display data. There are different ways in which you can bind data to the Timeline control.

### Static Data Option

To display static options in the Timeline control, you can use the Bind Data option. The Bind Data option must be specified as an array of objects. The JSON array must have `date` and `event` attributes. The date provided can have date and time as well in UNIX format. For example:

```js
[
    {
        "Date":1622795662000,
        "Event":"Account Updated"
    },
    {
        "Date":1622885640003,
        "Event":"Account Updated"
    },
    {
        "Date":162278464200,
        "Event":"Account Created"
    },
    {
        "Date":1622885742000,
        "Event":"Renewal Plan Initiated"
    },
    {
        "Date":162278564200,
        "Event":"Details Updated"
    }
]
```

## Properties

| Property                | Description                                                                                           |
|-------------------------|-------------------------------------------------------------------------------------------------------|
| Grouped                 | Toggle option to group the timeline or list of events based on provided dates.                       |
| Order                   | Set the order of the timeline (ascending or descending) based on the dates.                           |
| Line color              | Set the color of the timeline's line (visual attribute).                                             |
| Columns to evaluate     | Dropdown to select data from the database for connecting with the date and data column of the timeline.|
| Title                   | Customize font size, font-weight, and font color for the timeline title.                              |
| Body                    | Customize font size, font-weight, and font color for the timeline's body content.                    |
| Date/ Time Fonts        | Customize font size, font-weight, and font color for the date and time in the timeline.              |
| Date Time Properties    | Options for date format, time format, and submit format.                                             |
| Custom format toggle    | Toggle button to provide custom formats for date and time display.                                   |



