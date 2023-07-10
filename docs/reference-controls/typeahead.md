---
sidebar_position: 1
title: Typeahead
---

import Image from '@site/src/components/Image';

import Thumbnail from '@site/src/components/Thumbnail';

The Typeahead Control is useful for enhancing user experience and productivity by providing predictive suggestions or autocomplete functionality while entering text in input field. This intuitive control suggests potential matches as users type, making data entry more efficient and accurate.

<figure>
  <Thumbnail src="/img/reference/controls/typeahead/control.png" alt="typeahead control" />
  <figcaption align = "center"><i>Typeahead Control</i></figcaption>
</figure>

## Binding Data Options

Typeahead control accepts array of values to provide suggestions.
There are different ways in which you can bind data to the Typeahead control.

### Static Data Options

To display static options in a Typeahead control, you can use the Bind Data option.

The Bind Data option must be specified as an array of text values. For example:

```js
  [ "Apple", "Banana", "Cherry", "Durian", "Grapes", "Kiwi", "Avocado" ]

```


### Dynamic Data Options

You can dynamically Bind options by fetching data from `Data queries`, `Sheets` or `Custom functions` by binding the response to the Data Bind option. For example: 


Let's assume you aim to utilize a Typeahead control that enables you to select country from list of supported countries that your company cater to, from a database.

Make sure you have a data query named `getCountryNames` that is already configured to fetch country names from your database. The SQL syntax for this query could be:

```sql
SELECT country FROM countries
```

This query retrieves the country names from the `countries` table in your database.

In the Typeahead control, Bind Data Options, select the `Quick Select -> Data Queries -> getCountryNames`

```js
{{getCountryNames}}
```

By selecting the `getCountryNames` data query, the Typeahead control will fetch the country names from your database and provide them as options for the user to select. This allows users to type and select a country name dynamically from the list of available options.

## Properties



| Option                  | Description                                                                             |
|--------------------------|-----------------------------------------------------------------------------------------|
| Theme                | Allows you to select the color of the text box. You can enter a custom hex code or choose from available themes. |
| Placeholder          | Serves as a prompt or hint to guide user input. Replaced when the user starts typing.   |
| Debounce Time (In ms)| Introduces a delay in milliseconds between events to control the frequency of triggering actions on value change. |
| Suggest After (Characters) | Specifies the minimum number of characters required before suggestions start appearing. |
| Suggestion Limit     | Determines the maximum number of suggestions displayed at a time.                        |
| Suggestion Tray Max Height | Sets the height of each menu/suggestion in the suggestion tray.                       |
| Highlight Color      | Defines the color of the typed text within the suggestions.                              |
| Hover Color          | Enables you to define a color highlight when hovering over the suggestions.              |


## Control Outputs

These outputs can be referenced in other controls, data queries, or JS functions using the control's unique name. For instance, you can use `typeahead.PROPERTIES.TYPEDTEXT` to get the value of user inputted text where `typeahead` is unique name of this control.

| Output                  | Description                                                                             |
|--------------------------|-----------------------------------------------------------------------------------------|
| typeahead                | Provides user selected value from the given suggestion of typeahead control. |
| typeahead.PROPERTIES.TYPEDTEXT                | It will provide current inputted value by user. By
utilizing the `TYPEDTEXT` property, you can ensure that responses are provided in real-time, without any delay based on
the debounce time interval. |


## Events

| Option                  | Description                                                                             |
|--------------------------|-----------------------------------------------------------------------------------------|
| value_change                | Occurs when there is a modification in the Typeahead control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the
control. |


:::info PLEASE NOTE

Binding the `TYPEDTEXT` property in another control/data query will trigger the evaluation with every single
character input in the Typeahead control, ensuring real-time updates. 

:::
