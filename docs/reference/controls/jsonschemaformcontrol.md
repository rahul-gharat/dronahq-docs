---
sidebar_position: 1
title: JSON Schema Form Control
---

import Image from '@site/src/components/Image'; import Thumbnail from '@site/src/components/Thumbnail';

The JSON Schema Form (JSF) control is a composite form control that generates dynamic forms based on JSON schemas. It
does not maintain state and utilizes React components to render and manage forms efficiently. This control is useful for applications where dynamic form generation is required based on predefined JSON structures.


DronaHQ's JSON Schema Form leverages the [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form) library, allowing users to specify input fields and their display properties using JSON and UI schemas.

Additionally, this component supports pre-filling nested input fields with default values



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
You can refer here to  know more about structuring of [JSON Schema](https://rjsf-team.github.io/react-jsonschema-form/) 

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

You can refer here to  know more about structuring of [UI Schema](https://react-jsonschema-form.readthedocs.io/en/v1.8.1/form-customization/)  

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

### Signature Pad Widget - Feature

The Signature Pad widget brings signature capture directly into your JSON Schema Forms. It allows users to draw their signature, that is then stored as an image .

<figure>
  <Thumbnail src="/img/reference/controls/json-schema-form-control/sig.png" alt="JSON Schema Form Control" />
</figure>

#### JSON Schema

```json
{
  "title": "User Registration",
  "type": "object",
  "properties": {
    "signature": {
      "type": "string",
      "title": "Signature"
    }
  }
}
```

####  UI Schema

```json
{
  "signature": {
    "ui:widget": "signature"
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

Provide your own CSS styling for the JSON Form created. This broadens the UI customization for the personalized curated form control.



### Add-ons

| Add-on      | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| Tooltip     | Displays additional information when users hover over form fields. |
| Description | Adds descriptive text beneath form fields for better clarity.      |
| Label       | Enables labels for specific fields to improve user experience.     |

### CDN Add-ons for JSON Schema Form  

These add-ons are not required but can be provided to extend the functionality of JSON Schema Form. Using CDNs in a JSON Schema Form control can be useful in specific scenarios, particularly when dealing with network restrictions, performance optimizations, or private networks. 

You can input these links manually in the respective fields:  

- React CDN – Provides core React functionalities for building UI components.  
- React DOM CDN – Enables React to interact with the DOM for rendering UI elements.  
- React JSONSchema Form CDN – Adds schema-based form handling for structured data input.  
- AJV Bundle CDN – Offers high-performance JSON schema validation for form data consistency.  

These can be used when additional React-based rendering is needed within JSON Schema Form. If client-side validation using AJV is required for better performance, or when a CDN-based integration is preferred over local package installations.  




## Interaction

<figure>
  <Thumbnail src="/img/reference/controls/json-schema-form-control/interaction.png" alt="JSON Schema Form Control" />
</figure>

| Option      | Details                                                                           |
| ----------- | --------------------------------------------------------------------------------- |
| Validation  | Adds validation  like `Required` to the control.                                             |
| Live Validation          | Validates form inputs in real time.                      |
| Clear After Submission   | Resets the form fields after submission.                 |
| Readonly Whole Form      | Makes the entire form non-editable.                      |
| Events      | Supports `Submit` as the only event trigger.                                      |
|Extra errors| Maps server-side validation errors to specific form fields, enabling consistent error display within the JSON Form Builder.|

### Extra errors

The Extra errors property allows external validation errors- when is submitted and a backend API returns validation errors, these can be passed to the form via the extra errors property. Each key in the extra errors object should correspond to a field path in the form schema. The associated value is an array of error messages to be displayed for that field. The dropdown evaluates the most recently executed data query, which is also necessary for your validation logic.

<figure>
  <Thumbnail src="/img/reference/controls/json-schema-form-control/extra-errors.png" alt="Extra error validation dropdown" />  <figcaption align="center">Extra error validation dropdown in protperties section
  </figcaption>
</figure>

#### Setting `isValid` key for error validation

```js
{ "isVaild": false,"validationObj": {}}
//The isValid key is mandatory and must be set to either true or false based on the presence of errors in the ValidationObj.
//The ValidationObj should include all field-specific errors in the following format:{"key1": ["Error message 1"]}
```

Sample code format for error validation:
```js
function getData() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
      //Error validation
        let errors = {
          "isVaild": false,"validationObj": {}}; 
        if (formData.email !== "admin@example.com) {
          errors.validationObj.email = ["This email does not exist"];
        }
        if (formData.age >=31) {
          errors.validationObj.age = ["Incorrect age"];
        }

        if (Object.keys(errors.validationObj).length > 0) {
          reject(errors);
        } else {
          errors.isValid = true;
          resolve(errors);
        }
      }, 500);
    } catch (err) {
      reject(err.message);
    }
  });
}

try {
  output = await getData();
} catch (err) {
  output = err;
}
```

<figure>
  <Thumbnail src="/img/reference/controls/json-schema-form-control/extra-error-js.png" alt="Error validation JS " />
  <figcaption align="center">Dataquery for error validation</figcaption>
</figure>

### Advanced Options

| Option                   | Details                                                  |
| ------------------------ | -------------------------------------------------------- |
| Disable Whole Form       | Disables all input fields within the form.               |
| Omit Extra Data          | Ignores any additional data beyond the specified schema. |
| Disable Validation       | Disables all the form validations.                                |
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

- External CSS: Add custom styles to the Json Schema Form control.
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
