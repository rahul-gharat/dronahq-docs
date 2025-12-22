---
sidebar_position: 1
title: Prefix and Suffix
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Prefix and Suffix control allows users to add either a prefix or a suffix to the input value. A prefix is an affix that appears at the beginning of a word, while suffixes are letters or groups of letters added to the end of words. By utilizing this control, users can modify input values with desired prefixes or suffixes to suit their needs.

<figure>
  <Thumbnail src="/img/reference/controls/prefix-suffix/preview.jpeg" alt="Prefix and Suffix" />
</figure>

## Binding Data Options

*Prefix and Suffix* control accepts array of string in JSON format to display data for prefix & suffix options. There are different ways in which you can bind data to the **Prefix and Suffix* control.

### Static Data Option

To display static options in the Prefix and Suffix control, you can use the Bind Data option. The Bind Data option must be specified as an array of string. 

Let's consider an application that allows users to input historical figures' names. Now, we can compile a list of prefixes and suffixes that have been commonly used to address and identify notable individuals from historical events.


```jsx title="Prefix"
 [
    "Sir",
    "Queen",
    "King",
    "Emperor",
    "Empress",
    "Pharaoh",
    "President",
    "Sheikh",
    "Sultan",
    "Caesar"
  ]
```
```jsx title="Suffix"
  [
    "the Great",
    "of Macedon",
    "the Conqueror",
    "the Wise",
    "the Magnificent",
    "the Brave",
    "the Pious",
    "the Liberator",
    "the First"
  ]
```

To implement this in code, you can bind the data under the `prefix_option` and `suffix_option` bind data option respectively.

## Content

- **Placeholder:** Provide a placeholder text to guide the user.

### Add-ons

| Property | Description |
| :------- | :---------- |
| Label | Displays labels for specific options or sections. Configurable with size, weight, and color. |
| Tooltip | Provides helpful hints or extra information on hover. |
| Description | Adds descriptive text beneath options or sections. |
| Prefix | Enables you to configure the prefix. |
| Suffix | Enables you to configure the suffix. |

## Interaction

- **Dropdown Icons:** Enables dropdown arrows on prefix and suffix elements to visually indicate the presence of menu options.
- **Read Only:** Makes the control non-editable. The user can view the content but cannot modify it.
- **Submit Data:** Determines if the output value should be included in form submission. Options include `Always`, `Never`, and `Not When hidden`.
- **Numeric:** Toggle ON to make the input field of numeric type.
- **Allow change on Mouse Wheel:** When enabled, the value can be modified using the mouse wheel while the control has focus, if *Numeric* property is toggled ON.
- **Debounce Time:** Delay in milliseconds used to control frequency between action triggers on change in value.

### Validation

| Property | Description |
| :------- | :---------- |
| Required | Ensures the field is not empty. |
| Custom | Allows us to configure any custom validation(s). |

### Events

| Trigger | Description |
| :------ | :---------- |
| value_change | Occurs when there is a modification in the respective control's value. To control the frequency or speed of the change event, you can utilize the *Debounce* property associated with the control. |
| focus_out | Occurs when the control loses focus, typically when the user clicks outside the control. It allows you to perform actions or handle specific behavior when the focus is no longer on the element. |
| enter_press |This event indicates the pressing of the Enter key when entering data into your Currency control.|

## Appearance

- **Visibility:** Toggles the visibility of the control at runtime.
- **Theme:** Choose the color of the Container box. You can use a custom hex code or select one from the available themes in the builder.  

## Control Outputs

The *Prefix and Suffix* control allows users to customize input values with additional text elements. It generates three outputs: `{{prefixsuffix.Prefix_Option}}` captures the chosen prefix, `{{prefixsuffix.value}}` holds the original input value, and `{{prefixsuffix.Suffix_Option}}` represents the selected suffix. Developers can utilize these outputs in controls, data queries, or JavaScript functions for personalized and dynamic interactions, enhancing the overall usability of the application.

| Output                  | Description |
| :---------------------- | :---------- |
| {{prefixsuffix.Prefix_Option}}   | Represents the prefix text chosen by the user, added before the input value. |
| {{prefixsuffix.value}}         | Holds the original input value provided by the user without any modifications. |
| {{prefixsuffix.Suffix_Option}}  | Represents the suffix text chosen by the user, added after the input value. |