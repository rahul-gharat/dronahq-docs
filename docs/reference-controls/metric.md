---
sidebar_position: 1
title: Metric
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Metric control is a custom display control that is used to display a main heading along with its description.


<figure>
  <Thumbnail src="/img/reference/controls/metrics/preview.jpeg" alt="Metric" />
  <figcaption align = "center"><i>Metric</i></figcaption>
</figure>



## Binding Data Options

The Metric control has two fields, `Value` and `Description,` where data can be bound.

You can use the data option to bind data to the Metric control. There are different ways to bind data.

### Static Data Option

You can add static data as a string. Data will be a URL endpoint that will point to the data.

For example:

```
Value: 72

Description: "Information"
```

In this example, the `Value` field is bound to the static value `72,` and the `Description` field is bound to the static value `Information.`







## Properties


| Property               | Description                                                                                         |
|------------------------|-----------------------------------------------------------------------------------------------------|
| Display Info           | Used to set the position of the description, can be either top or bottom.                          |
|                        |                                                                                                     |
| Image                  | Specifies the image URL to be displayed.                                                             |
|                        |                                                                                                     |
| Space between          | Specifies the space between the Value (main text) and the description.                              |
|                        |                                                                                                     |
| Default Values         |                                                                                                     |
| Value                  | Sets the default value for the Value field.                                                         |
|                        |                                                                                                     |
| Description            | Sets the default value for the Description field.                                                   |
|                        |                                                                                                     |
| Heading                |                                                                                                     |
| Font Size              | Sets the font size of the heading.                                                                  |
|                        |                                                                                                     |
| Font Weight            | Sets the font weight (boldness) of the heading.                                                      |
|                        |                                                                                                     |
| Font Color             | Sets the font color of the heading.                                                                 |
|                        |                                                                                                     |
| Info                   |                                                                                                     |
| Font Size              | Sets the font size of the info.                                                                     |
|                        |                                                                                                     |
| Font Weight            | Sets the font weight (boldness) of the info.                                                         |
|                        |                                                                                                     |
| Font Color             | Sets the font color of the info.                                                                    |
|                        |                                                                                                     |
| Line Clamp             | Sets the number of lines to which the description will be truncated.                                |

## Control Output


| Output             | Description                                                                                   |
|--------------------|-----------------------------------------------------------------------------------------------|
| {{metric.value}}      | Represents the numeric value available in the Metric control's `Value` field.                 |
| {{metric.description}} | Represents the description available in the Metric control's `Description` field.            |

The `{{metric.value}}` is a placeholder that represents the numeric value from the `Value` field in the Metric control. Similarly, `{{metric.description}}` represents the description from the `Description` field in the Metric control. With these placeholders, you can dynamically access and utilize the specific values from the Metric control in other parts of your application.