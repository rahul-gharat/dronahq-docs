---
sidebar_position: 1
title: Phone
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Phone control is designed to receive phone numbers in a composite format, divided into two distinct fields. These fields can be stored in separate columns of a sheet, treating them as individual entities. The Phone control comprises two components - Country Code or Prefix and Phone number, providing unique accessibility for each part of the phone number.

<figure>
  <Thumbnail src="/img/reference/controls/phone/preview.png" alt="Phone " />
  <figcaption align = "center"><i>Phone </i></figcaption>
</figure>


## Binding Data Options

The Phone control consists of two parts: the country code and the phone number. It accepts single inputs for both the country code and the phone number.

### Country Code

The Country Code field allows users to input their country code as a string, e.g., `+1` for the United States, `+44` for the United Kingdom, etc.

### Phone Number

The Phone Number field allows users to input their phone number as a number, e.g., `1234567890`.

Users can directly enter the country code and phone number in their respective fields without using an array. 

## Properties

| Property              | Description                                                                                    |
|-----------------------|------------------------------------------------------------------------------------------------|
| Theme                 | Allows you to choose the color of the text box. You can enter a custom hex code or use one of the available themes in the builder. |
| Phone Placeholder     | A prompt that gives a hint to the user about the expected input in the Phone field. It appears in the field and is overridden when the user types something into it. |
| Country Placeholder   | Provides a hint to the user about the intended input for the Country field.                    |
| Default Country       | Lets you set a default country for the Country code field, which can be changed by the user later. |
| Debounce Time (In ms) | The delay in milliseconds between events, controlling the frequency of action triggers on value changes. |
| Show Barcode Scanner  | Allows you to enable or disable barcode scanning using the phone control.                       |

## Control Outputs

The outputs from the Phone control, represented by the placeholder `{{phone}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| phone    | Represents the phone number available in the Phone control.                        | 

## Events

| Trigger                   | Description                                                                             |
|--------------------------|-----------------------------------------------------------------------------------------|
| value_change                | Occurs when there is a modification in the Advance Map control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. |
| focus_out       | Occuts when the control loses focus, typically when the user clicks outside the control. It allows you to perform actions or handle specific behavior when the focus is no longer on the element. |
| enter_press  | This event indicates the pressing of the Enter key when entering data into your Currency control.                                                                                                 |
