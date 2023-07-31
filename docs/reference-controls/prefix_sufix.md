---
sidebar_position: 1
title: Prefix and Suffix
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';



The Prefix and Suffix control allows users to add either a prefix or a suffix to the input value. A prefix is an affix that appears at the beginning of a word, while suffixes are letters or groups of letters added to the end of words. By utilizing this control, users can modify input values with desired prefixes or suffixes to suit their needs.

<figure>
  <Thumbnail src="/img/reference/controls/prefix-suffix/preview.jpeg" alt="Prefix and Suffix" />
  <figcaption align = "center"><i>Prefix and Suffix</i></figcaption>
</figure>

## Binding Data Options

Prefix and Suffix control accepts array of string in JSON format to display data. There are different ways in which you can bind data to the Prefix and Suffix control.

### Static Data Option

To display static options in the Prefix and Suffix control, you can use the Bind Data option. The Bind Data option must be specified as an array of string. 

Let's consider an application that allows users to input historical figures' names. Now, we can compile a list of prefixes and suffixes that have been commonly used to address and identify notable individuals from historical events.


```js
Prefix:
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

Suffix:
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

## Properties

### Prefix

| Setting           | Description                                                                                                  |
|-------------------|--------------------------------------------------------------------------------------------------------------|
| Default Prefix    | Enter the default text for the Prefix.                                                                       |
| Prefix Color      | Set the color of the Prefix.                                                                                 |
| Static Value      | Enable this option to display static text in the Prefix section.                                            |


## Suffix

| Setting           | Description                                                                                                  |
|-------------------|--------------------------------------------------------------------------------------------------------------|
| Default Suffix    | Enter the default text for the Suffix.                                                                       |
| Suffix Color      | Set the color of the Suffix.                                                                                 |
| Static Value      | Enable this option to display static text in the Suffix section.                                            |

## Control Outputs

The Prefix and Suffix control allows users to customize input values with additional text elements. It generates three outputs: `{{prefixandsuffix.Prefix_Option}}` captures the chosen prefix, `{{prefixandsuffix.value}}` holds the original input value, and `{{prefixandsuffix.Suffix_Option}}` represents the selected suffix. Developers can utilize these outputs in controls, data queries, or JavaScript functions for personalized and dynamic interactions, enhancing the overall usability of the application.

| Output                  | Description                                                                                                 |
|-------------------------|-------------------------------------------------------------------------------------------------------------|
| {{prefixandsuffix.Prefix_Option}}   | Represents the prefix text chosen by the user, added before the input value.                                |
| {{prefixandsuffix.value}}         | Holds the original input value provided by the user without any modifications.                             |
| {{prefixandsuffix.Suffix_Option}}  | Represents the suffix text chosen by the user, added after the input value.                                 |


## Events


| Trigger                   | Description                                                                             |
|--------------------------|-----------------------------------------------------------------------------------------|
| value_change                | Occurs when there is a modification in the respective control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. |
| focus_out       | Occuts when the control loses focus, typically when the user clicks outside the control. It allows you to perform actions or handle specific behavior when the focus is no longer on the element. |
|enter_press	|This event indicates the pressing of the Enter key when entering data into your Currency control.|