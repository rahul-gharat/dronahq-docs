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
</figure>

## Binding Data Option

CheckBox Tree control accepts JSON array of objects, representing hierarchical information in a tree-like structure. There are different ways in which you can bind data to the CheckBox Tree control.

To display options in the CheckBox Tree control, you can use the Binding Data option. The Binding Data option must be specified a JSON array of objects. The options that you may want to show preselected should be specified in the Default value as an array of strings (array of ids of the nodes), as "id" property acts like a unique identifier for each node in the tree structure. For example:

```jsx title="Data"
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
```jsx title="Default Value"
["mammals", "eagle"]
```
*This JSON array represents a tree with two main parent nodes: "Animals" and its children "Mammals" and "Birds." Each of these child nodes has their own children, such as "Dog" and "Cat" under "Mammals" and "Parrot" and "Eagle" under "Birds."*

## Content

### Add-ons

| Property | Description |
| :------- | :---------- |
| Label | Displays labels for specific options or sections. Configurable with size, weight, and color. |
| Tooltip | Provides helpful hints or extra information on hover. |
| Description | Adds descriptive text beneath options or sections. |

## Interaction

- **Read Only:** Makes the control non-editable. The user can view the content but cannot modify it.
- **Persist selected values:** Toggle ON this property to persist the already selected values upon setting or refreshing the control.
- **Submit Data:** Determines if the output value should be included in form submission. Options include `Always`, `Never`, and `Not When hidden`.
- **Return Type:** This option enables us to select the return type of the data from the CheckBox tree Control, which can be further used in the app by other controls. We can opt for either `Path String`, `Path Array` or `Selected Values` in the Return Type section.
- **Return Format:** This indicates the format of output value to be returned by the control.

### Validation

| Property | Description |
| :------- | :---------- |
| Required | Ensures the field is not empty. |
| Min items | Sets the minimum number of selections to be allowed in the control. |
| Max items | Sets the minimum number of selections to be allowed in the control. |
| Custom | Allows us to configure any custom validation(s). |

### Events

| Trigger | Description |
| :------- | :---------- |
| value_select | Occurs when there is a change in the values of the control, typically triggered by selecting an option(s) or inputting new values. |

## Appearance

- **Visibility:** Toggles the visibility of the control at runtime.
- **Theme Color:** Sets the theme color to the checkbox.
- **Checkbox label:** Enables you to se the size, weight and color of the checkbox label.
- **Expand Level:** Specifies the expansion *(or collapse)* state of the checkbox tree. Use **'1'** for a fully collapsed tree, and any number beyond the maximum expected tree depth for a fully expanded tree.

## Control Output

The CheckBox Tree control allows users to select multiple items from a hierarchical tree structure. The selected items can be accessed through the output variable `{{checkboxtree}}`.

| Output | Description |
| :----- | :---------- |
| checkboxtree | Represents the user-selected values from the CheckBox Tree control as per the *Return Type* selected.|

The values selected by the user in the CheckBox Tree control can be utilized in various ways, such as in other controls, data queries, or JavaScript functions, providing dynamic and interactive functionality within the application.