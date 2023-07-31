---
sidebar_position: 1
title: Currency
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

Currency Control facilitates the acceptance of monetary values, allowing users to specify both the payment amount and
the currency. This feature consists of two essential components: Value and Unit. The Value component enables the input
of currency values in decimal format, while the Unit component provides a selection list for choosing the desired
currency unit, such as USD, GBP, INR, and more.

<figure>
  <Thumbnail src="/img/reference/controls/currency/preview.jpeg" alt="Currency" />
  <figcaption align = "center"><i>Currency</i></figcaption>
</figure>

## Binding Data Options

The Currency controls accepts numeric format to display data. You can bind data to the Currency controls in various
ways, allowing for flexible customization and presentation of menu items.

### Static Data Option

To display static options in the Currency controls, you can use the Bind Data option. The Bind Data option must be
specified as numeric. For example:

```js
10000;
```

This will set the by default value inside the control as `10000`.

## Properties

| Property              | Description                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Theme                 | Choose the color of the Container box. Opt for a custom hex code value or select from available themes in the builder.                  |
| Unit color            | Set the color in which the unit is displayed.                                                                                           |
| Default Unit          | Define the default unit, which users can change while filling the currency field.                                                       |
| Placeholder           | A prompt that provides a hint to users regarding the expected input. It appears in the field and is overridden when users start typing. |
| Tooltip               | Display a message when the cursor hovers over the field.                                                                                |
| Format                | Choose from three formatting options: Normal, Currency, and Accounting, depending on the numeric control's function.                    |
| Max Value             | Set the maximum value that this field will accept.                                                                                      |
| Decimal Precision     | Define the number of digits to display after the decimal point. Set to 0 for no decimal points.                                         |
| Debounce Time (In ms) | Specify the delay in milliseconds between events to control the frequency of action triggers when the value changes.                    |
| Show Barcode Scanner  | Enable the option to scan a barcode to enter data when using a device with a camera to access the app.                                  |

Explore these settings to customize the Currency Control according to your specific requirements and improve user
interaction in your app.

## Control Output

The Currency control produces two distinct outputs, represented by the placeholders `{{currency.value}}` and
`{{currency.unit}}`. These outputs hold significant value and can be utilized in various aspects of your application.

| Output         | Description                                                                    |
| -------------- | ------------------------------------------------------------------------------ |
| currency.value | Refers to the numeric value input by the user into the Currency control.       |
| currency.unit  | Represents the currency unit selected by the user within the Currency control. |

## Events

| Trigger      | Description                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value_change | Occurs when there is a modification in the Currency control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. |
| focus_out    | Occuts when the control loses focus, typically when the user clicks outside the control. It allows you to perform actions or handle specific behavior when the focus is no longer on the element. |
| enter_press  | This event indicates the pressing of the Enter key when entering data into your Currency control.                                                                                                 |
