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

The Detail View control accepts an object in JSON format to display data. You can bind data to the control using the following methods:

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
| Choose Fields that will be Editable	| Select the fields in the data that will be available for editing.|
| Edited Field Indicator Color |	The color used to indicate fields that have been edited.|
|Header Font Options |	Options to customize the font for the header section.|
|Value Font Options	| Options to customize the font for the values or data content.|



## Control Outputs

The outputs from the Detail View control can be accessed using the control's unique name and the following keywords:

| Output       | Description                                                                                           |
|--------------|-------------------------------------------------------------------------------------------------------|
| EDITEDDATA   | Returns all the data, including the edited columns, from the control.                                  |
| EDITEDFIELDS | Returns only the edited data from the control.                                                         |

These properties can be referenced using the control's unique name and the keyword as follows:
- `{{detailview.PROPERTIES.EDITEDDATA}}`
- `{{detailview.PROPERTIES.EDITEDFIELDS}}`


## Events


| Trigger       | Description                                                                                       |
|---------------|---------------------------------------------------------------------------------------------------|
| save_changes  | Occurs when the save button for saving changes is clicked, typically after editing or updating.|


## Use Case for `EDITEDFIELDS` 


In scenarios where you want to track only the modifications made by a user in a `Detail View` control, the `EDITEDFIELDS` property becomes essential. This property returns only the fields that have been edited, ensuring that the system captures and processes just the relevant changes rather than handling all the data. This can significantly improve performance and accuracy, especially when dealing with large datasets.

For example, in a customer management system, when a user updates specific details (like phone number or address) within the customer profile, `EDITEDFIELDS` ensures that only these updates are submitted for review or database entry. This prevents unnecessary overwriting of unmodified fields, preserving data integrity and reducing processing overhead.

 By binding this property to other controls, it becomes possible to dynamically adjust interfaces or action flows based on what has changed in real time.

Example:
``` 
{{detailview.PROPERTIES.EDITEDFIELDS}} 
```


The editable field can be modified by clicking on the pencil icon or directly on the field's value. A textbox will appear, allowing users to input new data.

<figure>
  <Thumbnail src="/img/reference/controls/detail-view/edit.png" alt="Detail View" />
  <figcaption align = "center"><i>Detail View - editable field</i></figcaption>
</figure>

Users can also use keyboard shortcuts to save or exit the editable field: pressing the `ESC` key closes the editor, while pressing `Enter` saves the new value (this works only for basic input fields). A small dot will appear next to the edited field, indicating that it has been modified. Additionally, the `Save Changes` and `Cancel` buttons are enabled once an edit is made.

Users can define an action flow for the Save button. A new event, `save_changes,` is available within the Detail View control.


Control outputs can be accessed and bound to other controls or used in action flows.

<figure>
  <Thumbnail src="/img/reference/controls/detail-view/output.png" alt="Detail View" />
</figure>
