---
sidebar_position: 1
title: JSON Editor
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


The JSON Editor control allows you to visualize and manipulate JSON text or files from a specified source.

The JSON Editor is particularly useful when you need to inspect and modify JSON data from files, such as in applications designed for online courses. It enables users to examine predefined sample code or code they are experimenting with independently.

<figure>
  <Thumbnail src="/img/reference/controls/json-editor/preview.jpeg" alt="JSON viewer" />
  <figcaption align = "center"><i>JSON viewer</i></figcaption>
</figure>

## Binding Data Options

The JSON Editor control accepts JSON data to display in a structured format. There are different ways in which you can bind data to the JSON Editor control.

### Static Data Option

To display static JSON data in the JSON Editor control, you can use the Bind Data option. The Bind Data option must be specified as valid JSON data.

```json
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

In this example, we have a JSON Editor Control that displays information about different products in an online store. The data is fetched from a database in JSON format and includes details such as product name, category, price, and availability.

1. Set up a Data Query:
First, make sure you have a data query configured to fetch the product information from your database. The query might look like this:

```sql
SELECT product_name, category, price, availability FROM products
```

2. Configure the JSON Editor Control:
In the JSON Editor control, navigate to the Bind Data Options section and select `Quick Select -> Data Queries -> yourDataQueryName`.

```
{{yourDataQueryName}}
```

By selecting the data query you've set up (e.g., `yourDataQueryName`), the JSON Editor control will automatically fetch the product information from your database and display it in a structured format. Users can view the product names, categories, prices, and availability in an organized manner.

With this JSON Editor Control, online store administrators and customers can easily view and modify real-time product information, making informed decisions about purchases and product management.

## Properties


| Property          | Description                                                                                                  |
|-------------------|--------------------------------------------------------------------------------------------------------------|
| Line number       | Toggle this switch ON to display line numbers in the JSON editor.                                           |
| Error gutter      | Toggle this switch ON to display the error gutter for easy error identification in the JSON editor.       |
| Line wrap         | Toggle this switch ON to enable wrapping of lines within the JSON editor's size.                          |
| Fold option       | Set how the data appears for the object, either expanded or collapsed. By default, it is set to Expand.    |
| Font              | Customize the JSON data or text by adjusting text size, weight (Light, Normal, Bold, Extra Bold, X Extra Bold), alignment (Left, Center, Right, Justified), and color of the label. |
| Debounce Time (In ms) | This is the delay in milliseconds between events. You can add the debounce time to control the frequency when the action triggers on a change in value. |
| Height (Auto)     | This is used to specify whether the height of the JSON Editor would be automatically set as per the data. You can toggle to switch on or off to specify the Auto Height setting. |
| Height            | In case you toggle the switch off the Auto property, then the Height property would be enabled where you can provide the height accordingly in pixels or as a percentage of vw or vh (viewport width or viewport height). |

**Theme**

You can set the colors for the JSON Editor to beautify the text area. You can customize the appearance by setting colors for the Background, Default text, Key, String type data, Numeric data, Boolean data, Brackets, Gutter area, and Line Numbers.

## Control Outputs

The outputs from the JSON Editor control, represented by the placeholder `{{jsoneditor}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| jsoneditor    | Represents the JSON data entered or edited by the user using the JSON Editor control.                        |