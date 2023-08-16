---
sidebar_position: 1
title: Detail View
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Detail View control serves the purpose of retrieving data from a sheet and presenting it in an elaborate format, showcasing all selected fields for each entry in the sheet.

<figure>
  <Thumbnail src="/img/reference/controls/detail-view/preview.jpg" alt="Detail View" />
  <figcaption align = "center"><i>Detail View</i></figcaption>
</figure>

## Binding Data Options

The Detail View control accepts an array of objects in JSON format to display data. You can bind data to the control using the following methods:

### Static Data Option

To display static data in the Detail View control, you can use the Bind Data option and specify the data as an array of objects. Each object represents an entry with its properties and values. For example:

```js
[
  {
    "id": 1,
    "name": "Carlyn Bartle",
    "email": "Carlyn.Bartle@example.com"
  },
  {
    "id": 2,
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": 3,
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
]
```

By using the Bind Data option, you can dynamically display the data from the array of objects in a detailed manner in the Detail View control.

## Properties


| Property           | Description                                                                                                     |
|--------------------|-----------------------------------------------------------------------------------------------------------------|
| Show Key Value Map | Toggle switch to enable or disable the Key Value Map view for JSON type data.  |
| Default View       | You can set the default view for JSON type data when the Key Value Map is disabled. The default view can be set as Table or JSON. |