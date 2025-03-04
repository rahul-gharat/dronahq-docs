---
sidebar_position: 1
title: JSON Schema Form Control
---

import Image from '@site/src/components/Image'; import Thumbnail from '@site/src/components/Thumbnail';

The JSON Schema Form (JSF) control is a composite form control that generates dynamic forms based on JSON schemas. It
does not maintain state and utilizes React components to render and manage forms efficiently. This control is useful for
applications where dynamic form generation is required based on predefined JSON structures.


The JSON Schema Form control relies on the following libraries:  
- React for rendering components.  
- React DOM for handling UI interactions.  
- React JSONSchema Form for generating dynamic forms based on JSON Schema.  
- AJV Bundle for schema validation.  



<figure>
  <Thumbnail src="/img/reference/controls/json-schema-form-control/json-schema-form-control.png" alt="JSON Schema Form Control" />
  <figcaption align = "center"><i>JSON Schema Form Control</i></figcaption>
</figure>

## Content

The JSON Schema Form control consists of the following components:

- JSON Schema: Defines the structure, validation rules, and properties of the form.
- UI Schema: Configures input field behavior, including placeholders, widgets, and additional properties.
- Form Data: Stores user-submitted values in JSON format, which can be retrieved and processed.

Each component ensures flexibility and allows customization to fit different use cases.

<figure>
  <Thumbnail src="/img/reference/controls/json-schema-form-control/content.png" alt="JSON Schema Form Control" />
</figure>

## Binding Data Options

The JSON Schema Form control supports both static and dynamic data binding. Static data binding involves pre-defined
JSON structures, while dynamic data binding enables form updates based on real-time inputs or external data sources.

### JSON Schema

The JSON Schema defines the expected structure and validation rules for the form. It determines how the form fields behave, what input types are expected, and which fields are mandatory.
You can reffer here to  know more about structuring of [JSON Schema](https://rjsf-team.github.io/react-jsonschema-form/) 

#### Example Format:

```json
{
  "title": "User Registration",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First Name"
    },
    "lastName": {
      "type": "string",
      "title": "Last Name"
    },
    "age": {
      "type": "number",
      "title": "Age",
      "minimum": 18
    },
    "email": {
      "type": "string",
      "format": "email",
      "title": "Email"
    }
  },
  "required": ["firstName", "email"]
}
```

### UI Schema

The UI Schema defines additional functionalities such as placeholders, focus behaviors, and input field modifications.
It enhances user experience by specifying how fields should be displayed and interacted with.

You can reffer here to  know more about structuring of [UI Schema](https://react-jsonschema-form.readthedocs.io/en/v1.8.1/form-customization/)  

#### Example Format:

```json
{
  "firstName": {
    "ui:placeholder": "Enter your first name"
  },
  "lastName": {
    "ui:placeholder": "Enter your last name"
  },
  "age": {
    "ui:widget": "updown"
  },
  "email": {
    "ui:emptyValue": ""
  }
}
```

### Form Data

The Form Data represents the submitted values in JSON format. It holds the final output once the user interacts with and
completes the form.

#### Example Format:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "email": "john.doe@example.com"
}
```

### Style

Provide your own CSS stylying for the JSON Form created. This broadens the UI customization for the personalized curated form control.



### Add-ons

| Add-on      | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| Tooltip     | Displays additional information when users hover over form fields. |
| Description | Adds descriptive text beneath form fields for better clarity.      |
| Label       | Enables labels for specific fields to improve user experience.     |
|  React CDN  | Provides the React library for rendering components.|
| React DOM CDN | Required for handling UI interactions within the form. |
|React JSONSchema Form CDN | Enables dynamic form rendering based on JSON Schema. |
|AJV Bundle CDN | Handles JSON Schema validation. |


## Interaction

<figure>
  <Thumbnail src="/img/reference/controls/json-schema-form-control/interaction.png" alt="JSON Schema Form Control" />
</figure>

| Option      | Details                                                                           |
| ----------- | --------------------------------------------------------------------------------- |
| Validation  | Adds validation rules to the control.                                             |
| Read Only   | Makes the control non-editable.                                                   |
| Submit Data | Determines when form data is submitted (Options: Always, Never, Not When Hidden). |
| Input Type  | Defines whether the input should be `single` or `select`.                         |
| Events      | Supports `Submit` as the only event trigger.                                      |
| Live Validation          | Validates form inputs in real time.                      |
| Readonly Whole Form      | Makes the entire form non-editable.                      |
| Clear After Submission   | Resets the form fields after submission.                 |



### Advanced Options

| Option                   | Details                                                  |
| ------------------------ | -------------------------------------------------------- |
| Disable Whole Form       | Disables all input fields within the form.               |
| Omit Extra Data          | Ignores any additional data beyond the specified schema. |
| Disable Validation       | Disables form validation.                                |
| Disable HTML5 Validation | Prevents browser-based validation.                       |
| Focus on First Error     | Automatically moves focus to the first validation error. |

:::caution

- The omit extra data setting requires live validation to be enabled.

- The disable validation setting requires both no validation and disable HTML5 validation. 
:::

### Events

The JSON Schema Form control triggers events based on user interactions.

| Event  | Description                                             |
| ------ | ------------------------------------------------------- |
| Submit | Triggers when the form is submitted or interacted with. |

## Appearance

<figure>
  <Thumbnail src="/img/reference/controls/json-schema-form-control/adv.png" alt="JSON Schema Form Control" />
</figure>

- Visibility: Toggle visibility of the control.

## Advanced Settings

- External CSS: Add custom styles to the Address control.
- Trigger Dependents: Automatically invoke linked controls or workflows.
- Caching: Enable caching to store frequently used inputs.

## Control Outputs

The JSON Schema Form control provides various outputs that can be used to retrieve form data and schema details.



| Output                                                 | Description                                                                                                                                        |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{jsonschemaformcontrol.form_data}}`                  | Represents the complete form data after submission.                                                                                                |
| `{{jsonschemaformcontrol.form_data.PROPERTIES_NAMES}}` | Lists all property names available in the submitted form data.                                                                                     |
| `{{jsonschemaformcontrol.json_schema}}`                | Lists all properties defined in the JSON schema. JSON schema will match for the provided information given to the control.                         |
| `{{jsonschemaformcontrol.ui_schema}}`                  | Lists all properties defined in the UI schema, including display settings. UI schema will match for the provided information given to the control. |
