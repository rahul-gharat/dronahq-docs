---
sidebar_position: 1
title: Typeahead
---

import Image from '@site/src/components/Image';

import Thumbnail from '@site/src/components/Thumbnail';

DronaHQ supports an intriguing control known as `Typeahead`, which functions similarly to a text input. Typeahead is an
input control designed to assist users while typing by providing word suggestions based on a few typed letters.

This feature allows users to work more efficiently and easily recall words based on partial input. To enable this
functionality, the Typeahead control requires data binding to retrieve word suggestions from a specified source.

<!-- <figure>
  <Image src="img/reference/controls/typeahead/control.png" alt="typeahead control" />
  <figcaption align = "center"><i>Typeahead Control</i></figcaption>
</figure> -->

## UI Properties

<!-- <figure>
  <Thumbnail src="img/reference/controls/typeahead/properties.png" alt="cotrol properties" />
</figure> -->

### Info

- Type: The Type field is automatically generated based on the type of control utilized. In this case, it is of the
  `dhq_text_suggestion` type.

- Unique Name: A Unique Name is assigned to each control in your DronaHQ App, allowing for unique identification. The
  system generates a Unique Name based on the Label assigned to the control.

- Label: The label is the text displayed above the control, providing users with an understanding of the purpose of the
  Typeahead Control.

- Hide Label: This option enables the hiding of the control's label from view.

- Tooltip: You can add a Tooltip text that provides users with hints or additional information for input. The Tooltip
  icon becomes visible when the "Show tooltip icon" toggle property is enabled.

- Description: The description allows you to provide additional information or instructions for the control. The
  Description is visible when the "Show Description" toggle property is enabled.

- External CSS: This property enables the application of custom CSS to the controls. You can customize the appearance of
  the control by selecting the appropriate class or ID. Further information can be found here. **HERE#**

- Generic:

  - Caching: When the caching option is selected and a LOOKUP formula is applied to this control, the state returned by
    the LOOKUP is cached. This allows the user to view the field's state even when accessing the microapp offline. This
    option is useful when offline accessibility is required and real-time data from the sheets is not critical.

  - Hidden: The hidden option allows you to hide the field from the user. This can be helpful when performing
    computations that should not be visible to the user or when displaying certain fields based on specific conditions.

  - Trigger dependents: Disabling Trigger Dependents reduces or optimizes the unnecessary evaluation of dependent
    control formulas. By default, Trigger dependents is enabled. However, in complex apps, disabling it can limit the
    evaluation in the dependent control, resulting in quicker response times. For more details, refer to this article.
    **HERE#**

- Grid Configuration:

  - Hide on desktop: This option hides the selected control in the desktop view.

  - Hide on Mobile: This option hides the selected control in the mobile view.

  - Dynamic Height: This option dynamically adjusts the height of the text control based on the content provided.

  - Maintain space when hidden: This option preserves the specified space between controls when a particular control is
    hidden. When a control is hidden, the space it occupied is maintained for the subsequent control.

:::note 

The properties of Dynamic height, Hide on Mobile, Hide on Desktop, and Maintain space when hidden are applicable
in the Freeflow Editor only. 

:::

### Properties

<!-- <figure>
    <Thumbnail src="/img/reference/controls/typeahead/properties-two.png" alt="properties" width="100%"/>
</figure> -->

- Theme: The theme option allows you to select the color of the text box. You have the flexibility to either enter a
  custom hex code value or choose from the available themes provided in the builder.

- Placeholder: The placeholder serves as a prompt or hint to guide the user on what needs to be done. It appears within
  the text field and is replaced when the user starts inputting information.

- Debounce Time (In ms): This setting introduces a delay in milliseconds between events. By adding a debounce time, you
  can control the frequency of triggering actions when there is a change in the value.

- Suggest After (Characters): This feature allows you to specify the number of characters required before suggestions
  start appearing.

- Suggestion Limit: You can determine the maximum number of suggestions displayed at a time.

- Suggestion Tray Max Height: This property determines the height of each menu/suggestion in the suggestion tray.

- Highlight Color: The highlight color property determines the color of the typed text within the provided suggestions.

- Hover Color: This property enables you to define a color highlight when hovering over the suggestions.

<!-- <figure>
    <Image src="/img/reference/controls/typeahead/hover-color.png" alt="properties" width="100%"/>
</figure> -->

## How to use Typahead Control

Select `Typeahead` from `Controls`.

<!-- <figure>
    <Thumbnail src="/img/reference/controls/typeahead/control-icon.jpeg" alt="properties" width="100%"/>
</figure> -->

## Bind data to Typeahead control

There are different ways in which you can bind data to the Typeahead control.

<!-- <figure>
    <Thumbnail src="/img/reference/controls/typeahead/bind-data.jpeg" alt="properties" width="100%"/>
</figure> -->

The expected data format is JSON:

```js
  [ "sugesstion_1", "suggestion_2", "suggestion_3", ....]

```

You can learn more about binding data through data queries from here#.

## Typeahead control property

For the Typeahead control, DronaHQ provides a dedicated property specifically designed for data-binding purposes. The
typeahead.PROPERTIES.TYPEDTEXT property allows you to retrieve the typed or available text within the Typeahead control.
This property is particularly helpful when you need to provide real-time data to dynamic variables used in queries. By
utilizing the TYPEDTEXT property, you can ensure that responses are provided in real-time, without any delay based on
the debounce time interval.

:::note 

Binding the TYPEDTEXT property with queries is especially beneficial as it triggers the query with every single
text input in the Typeahead control, ensuring up-to-date responses. 

:::
