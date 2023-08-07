---
sidebar_position: 1
title: Form Repeat
---

import VideoEmbed from "@site/src/components/VideoEmbed";
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Form Repeat control is a Container control that enables you to group multiple controls together. It is similar to the Form MultiRow control in functionality but provides a distinct output. With the Form Repeat control, you can directly assign the controls to a JSON column in a sheet as a single row, without the need for iteration.

<figure>
  <Thumbnail src="/img/reference/controls/form-repeat/preview.png" alt="Form Repeat" />
  <figcaption align = "center"><i>Form Repeat</i></figcaption>
</figure>

## Binding Data Options

The Form Repeat control is designed to handle arrays of objects as input, where each object represents a set of data to populate a form. 

####  Dynamic Form Population with Form Repeat Control

The Form Repeat control offers a dynamic way to populate multiple forms using data bindings. By leveraging the `{{formrepeat.this.property}}` syntax, you can effortlessly populate each form within the Form Repeat control with distinct data. Let's explore how to achieve this:

1. **Data Source Setup:**
   Prepare your data source, which should be an array of objects. Each object represents the data for a form, with properties like `name,` `email,` etc.

2. **Form Repeat Control Integration:**
   Integrate the Form Repeat control into your design. Configure the form fields, such as text input controls, checkboxes, etc., that you want to populate with data.

3. **Data Binding for Dynamic Population:**
   Inside the Form Repeat control, bind the data properties to the form controls using the `{{formrepeat.this.property}}` notation. For example, to populate a text input control with the `name` property:

   ```
   {{formrepeat.this.name}}
   ```

   As the Form Repeat control iterates through the data array, each form will be populated with the corresponding `name` property.

4. **Automated Form Generation:**
   If there are four `name` values in your data array, the Form Repeat control will automatically generate four forms, each populated with a unique `name` value.

Utilizing `{{formrepeat.this.property}}` within the Form Repeat control streamlines the process of creating and populating multiple forms. It enables you to bind data dynamically, ensuring that each form displays the appropriate information, making it an efficient solution for scenarios where you need to handle repetitive form structures with distinct data.


## Properties


| Property             | Description                                                                                                         |
|----------------------|---------------------------------------------------------------------------------------------------------------------|
| Show Delete Button   | When enabled, a delete button is displayed for each additional form group, allowing users to remove the group.     |
| Show Border          | When turned on, a border is added around the form groups, enhancing their visual appearance.                       |
| Delete Confirmation  | If enabled, a confirmation message will appear when a user attempts to delete a form group, preventing accidental deletions. |
| Theme                | This property allows you to select the color theme for the Form Repeat box. You can use custom hex codes or predefined themes. |
| Add More Text        | Customize the text displayed on the button that allows users to add more form groups.                              |
| Background Color     | Set the background color of the Form Repeat. You can either use a custom hex code or choose from predefined themes. |

**Add More properties**

| Property             | Description                                                                                                       |
|----------------------|-------------------------------------------------------------------------------------------------------------------|
| Show Add More        | Enables the display of the "Add More" button, allowing users to add additional form groups.                    |
| List View            | Reduces the margins between child controls in the container for a more compact layout.                          |
| Max Repetition       | Sets the maximum number of sections that can be added using the "Add More" button. Once the total number of sections reaches the specified limit, the "Add More" button will be hidden. The default value is 0 (zero). |

## Control Output

| Output                             | Description                                                                                                    |
|------------------------------------|----------------------------------------------------------------------------------------------------------------|
| {{formRepeat.THIS.JSON}}           | Represents the data in JSON format from the Form Repeat control.                                              |
| {{formRepeat.THIS.INDEX}}          | Represents the index value of the current form group in the Form Repeat control.                             |
| {{formRepeat.control_name}} | Represents the value of the specified control inside the Form Repeat control.                     |

In this updated version, you can use `{{formRepeat.control_name}}` to access and utilize the values of different controls or components inside the Form Repeat control individually. Each control/component can be referenced using the appropriate name inside the square brackets.


You can have a look at this video to understand how to use the Form repeat control and understand [how you can create repeatable forms.](https://community.dronahq.com/t/creating-repeatable-forms-using-form-repeat-control)


<figure>
  <VideoEmbed host='youtube' videoId='4qhpRxy01e4' />
</figure>