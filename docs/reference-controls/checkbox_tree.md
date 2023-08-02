---
sidebar_position: 1
title: CheckBox Tree
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

CheckBox Tree is a multi-level checkbox control with various elements having a parent-child relationship between them. Users can get many binary choices to make. It captures the user input from a specified list of permitted options, and these options can have child options within them. It captures multiple choices.

<figure>
  <Thumbnail src="/img/reference/controls/checkbox-tree/preview.png" alt="CheckBox Tree" />
  <figcaption align = "center"><i>CheckBox Tree</i></figcaption>
</figure>


## Bind Data Option

CheckBox Tree control accepts JSON array of objects, representing hierarchical information in a tree-like structure. There are different ways in which you can bind data to the CheckBox Tree control.

### Static Data Option

To display static options in the CheckBox Tree control, you can use the Bind Data option. The Bind Data option must be specified a JSON array of objects. For example:

```js
[
  {
    "text": "Animals",
    "id": "animals",
    "children": [
      {
        "text": "Mammals",
        "id": "mammals",
        "children": [
          {
            "text": "Dog",
            "id": "dog"
          },
          {
            "text": "Cat",
            "id": "cat"
          }
        ]
      },
      {
        "text": "Birds",
        "id": "birds",
        "children": [
          {
            "text": "Parrot",
            "id": "parrot"
          },
          {
            "text": "Eagle",
            "id": "eagle"
          }
        ]
      }
    ]
  }
]

```
This JSON array represents a tree with two main parent nodes: "Animals" and its children "Mammals" and "Birds." Each of these child nodes has their own children, such as "Dog" and "Cat" under "Mammals" and "Parrot" and "Eagle" under "Birds." The "id" property provides a unique identifier for each node in the tree structure.

## Properties

| Property      | Description                                                |
|---------------|------------------------------------------------------------|
| Size          | Specifies the font size for the checkbox label.            |
| Weight        | Sets the font weight for the checkbox label.               |
| Color         | Defines the font color for the checkbox label.             |
| Theme Color   | Sets the theme color for the checkbox label.               |
| Return Type   | The return type option enables us to select the return type of the data from the CheckBox tree Control, which can be further used in the app by other controls. We can opt from path string, path array, and selected values in the Return Type section.|
| Return Format | Defines the format of the returned values from the label.  |



## Control Outputs

The CheckBox Tree control allows users to select multiple items from a hierarchical tree structure. The selected items can be accessed through the output variable `{{checkboxtree}}`.

| Output         | Description                                                                        |
|----------------|------------------------------------------------------------------------------------|
| checkboxtree   | Represents the user-selected values from the CheckBox Tree control.                |

The values selected by the user in the CheckBox Tree control can be utilized in various ways, such as in other controls, data queries, or JavaScript functions, providing dynamic and interactive functionality within the application.