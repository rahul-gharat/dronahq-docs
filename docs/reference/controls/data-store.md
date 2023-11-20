---
sidebar_position: 1
title: Data Store
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Data Store control serves as a repository within a microapp to store data that can be utilized by other controls or components. It acts as a storage facility for various data sets.

<figure>
  <Thumbnail src="/img/reference/controls/datastore/preview.jpeg" alt="Data Store Control" />
  <figcaption align="center"><i>Data Store Control</i></figcaption>
</figure>

## Binding Data Options

The Data Store control accepts an array of objects for data storage. For example:

```json
[
    {
        "id": 1,
        "name": "Hanson Deck",
        "email": "hanson@deck.com"
    },
    {
        "id": 2,
        "name": "Josi Wheelwright",
        "email": "JosiWheelwright@example.com"
    }
]

```


## Properties

| Property                | Description                                                                                      |
|-------------------------|--------------------------------------------------------------------------------------------------|
| All Rows                | Enables or disables the selection of all rows based on the control type and specific requirements. |
| Default Selected Item Index | Specifies the selected row by setting an index value. Assigning a value of 0 sets the default selected value for the control. |
| Value                   | Defines the data to be stored within the Data Store in JSON array format.                          |



