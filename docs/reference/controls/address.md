---
sidebar_position: 1
title: Address
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Address control is designed to accept addresses in a composite manner, allowing the user to input address details using multiple fields. It segments the address into 6 different components.

<figure>
  <Thumbnail src="/img/reference/controls/address/preview.jpeg" alt="Address Control" />
  <figcaption align="center"><i>Address Control</i></figcaption>
</figure>

## Binding Data Options

The Address control accepts data in string format for address-related fields, enabling the user to input and store detailed address information in distinct fields.

### Static Data Option

Utilizing the Bind Data option to display static options in the Address control involves specifying strings.

For instance, consider an application where users input addresses. The following example demonstrates the binding of static data:

```json
address_Line_1: ["123 Main Street"]

address_Line_2: ["Apt 5B"]

city: ["New York"]

state: ["New York"]

zip: ["10001"]

country: ["United States"]
```

## Properties

| Property               | Description                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| Theme                  | Allows selection of the address box's color, using a hex code or choosing from available themes. |
| Address Line 1 Placeholder | Provides a prompt for users, guiding what needs to be entered in the Address Line 1 field.       |
| Address Line 2 Placeholder | Provides a prompt for users, guiding what needs to be entered in the Address Line 2 field.       |
| City Placeholder       | Provides a prompt for users, guiding what needs to be entered in the City field.                 |
| State Placeholder      | Provides a prompt for users, guiding what needs to be entered in the State field.                |
| Zip Code Type          | Specifies the type of the Zip Code field, in this case, numeric.                                 |
| Zip Code Placeholder   | Provides a prompt for users, guiding what needs to be entered in the Zip Code field.             |
| Default Country        | Sets the default country for the Address control.                                                |
| Country Placeholder    | Provides a prompt for users, guiding what needs to be entered in the Country field.              |
| Debounce Time (In ms) | Sets the time interval, in milliseconds, for the Address control's debounce time.                 |
| Country Selectable     | Allows users to select a country from a list of available countries in the Address control.       |

## Control Outputs

The Address control captures address details as entered by the user. The following placeholders are available to represent distinct components of the address:

| Output               | Description                                       |
|----------------------|---------------------------------------------------|
| {{address_Line_1}}  | Represents the first line of the address.         |
| {{address_Line_2}}  | Represents the second line of the address.        |
| {{city}}             | Represents the city name in the address.          |
| {{state}}            | Represents the state in the address.             |
| {{zip}}              | Represents the zip code or postal code.           |
| {{country}}          | Represents the country in the address.           |

## Events

The Address control may trigger events when there is a modification in the value of the respective control.

| Trigger      | Description                                                                                      |
|--------------|----------------------------------------------------------------------------------------------|
| value_change | Occurs upon modification in the value of the respective control.                              |
| focus_out    | Triggers when the control loses focus, typically when the user clicks outside the control.   |
| enter_press  | Activates upon pressing the Enter key while interacting with the Address control.          |
