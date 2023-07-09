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

<figure>
  <Image src="/img/reference/controls/typeahead/control.png" alt="typeahead control" />
  <figcaption align = "center"><i>Typeahead Control</i></figcaption>
</figure>

## Properties

<figure>
    <Thumbnail src="/img/reference/controls/typeahead/properties-two.png" alt="properties"/>
</figure>

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

 <figure>
    <Image src="/img/reference/controls/typeahead/hover-color.png" alt="properties"/>
</figure> 

## How to use Typeahead Control

Select `Typeahead` from `Controls`.

 <figure>
    <Thumbnail src="/img/reference/controls/typeahead/control-icon.jpeg" alt="properties"/>
</figure> 

## Bind data to Typeahead control

There are different ways in which you can bind data to the Typeahead control.

 <figure>
    <Thumbnail src="/img/reference/controls/typeahead/bind-data.jpeg" alt="properties"/>
</figure> 

The expected data format is JSON:

```js
  [ "sugesstion_1", "suggestion_2", "suggestion_3", ....]

```

You can learn more about binding data through data queries from here#.

## Typeahead control property

For the Typeahead control, DronaHQ provides a dedicated property specifically designed for data-binding purposes. The
`typeahead.PROPERTIES.TYPEDTEXT` property allows you to retrieve the typed or available text within the Typeahead control.
This property is particularly helpful when you need to provide real-time data to dynamic variables used in queries. By
utilizing the `TYPEDTEXT` property, you can ensure that responses are provided in real-time, without any delay based on
the debounce time interval.

:::info 

Binding the `TYPEDTEXT` property with queries is especially beneficial as it triggers the query with every single
text input in the Typeahead control, ensuring up-to-date responses. 

:::
