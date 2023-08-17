---
sidebar_position: 1
title: Input Label
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

An Input Label control consists of a Title and a data field. The text that is stored in the data field can be fetched from other controls or a sheet and can be submitted to a sheet when the submit button is pressed.

<figure>
  <Thumbnail src="/img/reference/controls/input-label/preview.jpeg" alt="Input Label" />
  <figcaption align = "center"><i>Input Label</i></figcaption>
</figure>


## Binding Data Options

The Input Label control is a versatile element that accepts both string and number data types for input. Input Label control offers different ways to seamlessly integrate various types of data.

### Static Data Option

To provide static input label content, you can directly input a string or number value. This is particularly useful when you want to display fixed information within the label.

```js
"Product Name"
```

### Dynamic Data Option

For dynamic input label content, you can leverage the Bind Data feature. This allows you to bind the input label to a data source, enabling real-time updates based on the underlying data.

1. Set up a Data Source:
Ensure that you have a data source configured with the required string or number data. For instance, consider a data source containing product names or identification numbers.

2. Configure the Input Label:
Navigate to the Bind Data Options section of the Input Label control. Select the appropriate data source, such as a database query or an API response.

```
{{yourDataSource.productName}}
```

By linking the input label to your data source (e.g., `yourDataSource`), the content of the label will dynamically reflect the values from your data.




## Properties


| Option        | Description                                                          |
|---------------|----------------------------------------------------------------------|
| Letter Spacing| Specifies the spacing between letters in the Input Label.            |
| Line Height  | Specifies the height of the Input Label.                             |
| Text          | Allows customization of the Input Label text size, weight, alignment, and color. |
| Alignment     | Determines the alignment of the Input Label (Left, Center, Right, Justified). |

