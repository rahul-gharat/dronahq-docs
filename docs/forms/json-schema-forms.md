---
sidebar_position: 2
title: JSON Schema Forms
---


import Thumbnail from '@site/src/components/Thumbnail';

# The JSON Schema Form Control for DronaHQ

<!-- . -->

[DronaHQ's JSON Schema Form](/reference/controls/jsonschemaformcontrol.md) is built on the [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form) library, enabling users to define input fields and their layout using JSON and UI schemas. It follows a single-column structure and does not support adding other components within the form.  

Unlike the [Standalone Form Component](/docs/forms/forms.md), JSON Schema Form offers greater programmatic flexibility, allowing dynamic updates to the JSON schema instead of manual modifications. Additionally, its property can auto-fill input fields with external data, such as values from a selected table row.

<!--     We recommends using the Form component as it's more versatile for most use cases. Use the JSON Schema Form component only if your use case requires it. Refer to the comparison of form components for more details.
 -->

<!-- Control Embed -->

### Key Features of JSON Schema Form  

The `JSON Schema Form` in DronaHQ offers a structured way to define and manage form inputs dynamically. Some of its core capabilities include:  

<!-- - Automated Form Generation – The form structure can be automatically generated based on a database schema, reducing the need for manual configuration.   -->
- Programmatic Schema Modifications – Instead of manually adjusting form fields, users can dynamically update the JSON schema to modify the form structure as needed.  
- Predefined Default Data – Users can configure default form data, allowing input fields to be pre-filled with relevant values when the form loads.  
- Input Validation and Event Handling – The form includes built-in mechanisms for validating user input and triggering specific actions based on user interactions.  
- Customizable UI Elements – Users can personalize key form attributes such as the title, description, and text displayed on the submission button.  

:::info 
JSON Schema Form does not support Markdown formatting for labels and captions, which means rich text elements such as bold, italics, or hyperlinks cannot be embedded within field labels.  
:::

### Configuring the Form’s Content  

To control how the form behaves and is displayed, users can configure various settings in the `Content` section:  

- **JSON Schema** – Defines the overall structure of the form using the [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form) framework. This schema specifies which fields should be included and how data should be structured.  
- **UI Schema** – The [UI Schema](https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema/) determines the presentation and layout of the form. It provides additional information on how the input fields should be displayed, offering flexibility in styling and arrangement.  
- **Form Data** – Specifies initial values that are automatically populated in input fields when the form is rendered. This is particularly useful when working with dynamic data, such as pre-filling fields based on a selected row from a table or another external data source. This also helps to store user-submitted values in JSON format, which can be retrieved and processed. 


<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
   <iframe 
      src="https://demo.arcade.software/pzShpGAeXDLMMPC9M4Lk?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" 
      title="Manage and Validate JSON Schema Form in Application" 
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      webkitallowfullscreen
      mozallowfullscreen >
   </iframe>
</div>

## Generating and Configuring Input Fields in JSON Schema Form  

You can create a JSON schema from scratch to specify the structure, validation rules, and required fields for user input.  

### Defining the Form Structure with JSON Schema  

You can define the form fields using a JSON schema, specifying field types, labels, and validation rules. Below is an example of a simple user registration form:  

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
 

In JSON Schema, various attributes help define the components used within the form control. The `properties` section specifies the fields that will be displayed in the form, while the `required` array ensures certain fields must be completed before submission. The `minimum` constraint sets a lower limit for numerical values, such as enforcing a minimum age of 18. Additionally, the `format` key validates specific input types, such as ensuring an email address follows the correct format.

### Defining Form Data  

To enhance usability, you can use the `Form Data` setting to pre-fill input fields with predefined values. This can be manually set or dynamically assigned, such as using data from a selected table row.  

Example of setting values:  

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "email": "john.doe@example.com"
}
```
If a row is selected, the form can automatically populate fields with its values; otherwise, the default values will be displayed.  


### Customizing the Form Title  

Updating the form title helps users understand whether they are creating a new record or updating an existing one. You can set or dynamically modify the title inside the `JSON Schema` configuration to reflect the form's purpose, such as:  

```json
{
  "title": "Edit User Information"
}
```

---

### Configuring the UI Schema  

Once the form structure is ready, you can customize its layout and appearance using UI Schema settings. This allows you to control the arrangement and display of fields.
Customize the appearance of your form using the UI schema setting. Explore the [uiSchema object documentation](https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema/) for more information about the customizations available.

Example of UI Schema customization:  

```json
{
  "ui:order": ["firstName", "lastName", "email", "age"],
  "firstName": {
    "ui:autofocus": true
  },
  "email": {
    "ui:widget": "email"
  }
}
```
- The **`ui:order`** property defines the order in which fields appear.  
- The **`ui:autofocus`** property ensures that the first name field is focused when the form loads.  
- The **`ui:widget`** setting allows customization of input types, such as an email input field.  

### Styling Form

 Additionally, you can style the form with CSS for a more polished look.  For additional styling, use CSS and ensure you select the correct component identifiers when applying custom styles.


## Configuring User Interaction  

DronaHQ allows you to manage user interactions through input validation, event handlers, and submission behavior in the Interaction section of the Inspector.  
Additional validation options are provided like Live Validatio, Clear After Submission, Read-Only Mode and more.  
You can trigger custom events upon user actions such as form submission, input changes, or field focus. Event handlers can be used to:  
 


You can know more about the interaction and add-ons which can be implement from the [JSON Schema Form Control](https://docs.dronahq.com/reference/controls/jsonschemaformcontrol/) document.


## Add an entry to the database



