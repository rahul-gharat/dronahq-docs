---
sidebar_position: 1
title: JSON Viewer
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The JSON viewer control allows you to visualize JSON text or files sourced from a specified location.

The JSON viewer is particularly valuable when you need to inspect JSON data from files, such as in applications designed for online courses. It enables users to examine predefined sample code or code they are experimenting with independently.

<figure>
  <Thumbnail src="/img/reference/controls/json-viewer/preview.jpg" alt="JSON viewer" />
  <figcaption align = "center"><i>JSON viewer</i></figcaption>
</figure>


## Binding Data Options

JSON Viewer control accepts JSON data to display in a structured format. There are different ways in which you can bind data to the JSON Viewer control.

### Static Data Option

To display static JSON data in the JSON Viewer control, you can use the Bind Data option. The Bind Data option must be specified as valid JSON data.

```js
[
  {
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com"
  },
  {
    "name": "Jane Smith",
    "age": 25,
    "email": "jane.smith@example.com"
  },
  {
    "name": "Michael Johnson",
    "age": 40,
    "email": "michael.johnson@example.com"
  }
]
```

### Dynamic Data Option

In this example, we have a JSON Viewer Control that displays information about different products in an online store. The data is fetched from a database in JSON format and includes details such as product name, category, price, and availability.

1. Set up a Data Query:
First, make sure you have a data query configured to fetch the product information from your database. The query might look like this:

```
SELECT product_name, category, price, availability FROM products
```

2. Configure the JSON Viewer Control:
In the JSON Viewer control, navigate to the Bind Data Options section and select `Quick Select -> Data Queries -> yourDataQueryName.`

```
{{yourDataQueryName}}
```

By selecting the data query you've set up (e.g., `yourDataQueryName`), the JSON Viewer control will automatically fetch the product information from your database and display it in a structured format. Users can view the product names, categories, prices, and availability in an organized manner.

With this JSON Viewer Control, online store administrators and customers can easily view and analyze real-time product information, making informed decisions about purchases and product management.

## Properties


| Property      | Description                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------|
| Line number   | Toggle this switch ON to display line numbers in the JSON viewer.                                          |
| Error gutter  | Toggle this switch ON to display the error gutter for easy error identification in the JSON viewer.      |
| Line wrap     | Toggle this switch ON to enable wrapping of lines within the JSON viewer's size.                         |
| Fold option   | Set how the data appears for the object, either expanded or collapsed. By default, it is set to Expand.   |
| Font          | Customize the JSON data or text by adjusting text size, weight (Light, Normal, Bold, Extra Bold, X Extra Bold), alignment (Left, Center, Right, Justified), and color of the label. |


**Theme**

You can set the colors for the JSON Viewer to beautify the text area. You can set the color of the Background, Default text color, Key, String type data, Numeric data, Boolean data, Brackets, Gutter area and the Line Number. You can customize the appearance by setting these color for the respective options.

