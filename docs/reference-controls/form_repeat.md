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
| {{formRepeat.[keyword]}} | Represents the value of the specified control/component/attributes inside the Form Repeat control.                     |

In this updated version, you can use `{{formRepeat.[keyword]}}` to access and utilize the values of different controls or components inside the Form Repeat control individually. Each control/component can be referenced using the appropriate name inside the square brackets.


You can have a look at this video to understand how to use the Form repeat control and understand [how you can create repeatable forms.](https://community.dronahq.com/t/creating-repeatable-forms-using-form-repeat-control)


<figure>
  <VideoEmbed host='youtube' videoId='4qhpRxy01e4' />
</figure>