---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';
import Image from '@site/src/components/Image';

# Repeatable forms

## Overview
DronaHQ's Form Repeat Control is a powerful feature that enables users to create repeatable forms within their applications. This functionality allows users to capture multiple sets of data by repeating a specific section of a form dynamically. It is particularly useful in scenarios where users need to enter similar data multiple times, eliminating the need for redundant form creation.

## Benefits

1. **Efficient Data Collection**: The Repeatable Forms feature streamlines the process of collecting multiple sets of data by reusing a specific form section. This saves time and effort for users who need to enter similar information multiple times.

2. **Simplified User Interaction**: Users can dynamically add or remove repetitions of the form section, providing a seamless and intuitive user experience.

3. **Data Integrity**: By using Repeatable Forms, users can ensure consistency and accuracy in data entry, as each repetition follows the same structure.

4. **Enhanced Flexibility**: The ability to repeat form sections on demand allows users to adapt the form to their specific needs, making it a versatile solution for various data collection scenarios.

## Key Features

### Repeatable Form Section
- Users can identify a specific section of the form that they want to repeat, such as a set of questions, a group of fields, or a particular data entry block.

### Add and Remove Functionality
- The Form Repeat Control provides buttons or icons to add or remove repetitions of the identified form section dynamically.

### Data Binding
- Each repetition of the form section is bound to a separate data source, ensuring that the captured data is stored and processed accurately.

### Validation and Error Handling
- Repeatable Forms support validation and error handling for each repetition, ensuring that data entered meets the required criteria.

### Responsive Design
- The Form Repeat Control is designed to be responsive, adapting to different screen sizes and orientations, ensuring a consistent user experience across devices.

## Customizations in Form repeat control

| Property | Explanation |
| ------------------ | -----------------------------------|
| Show Delete Button | This allows you to `show a delete button` for the additional form groups that you create. |
| Show Border  | This allows you to select a border that appears around the form groups. |
| Delete Confirmation |  This prompts the user with a confirmation message when the user tries to delete a form group. |
| Background color | This lets you set the color of the background of the Form Repeat. Similar to the Theme you can either enter a custom hex code value or use one from the available themes in the builder. |
| Theme |  This lets you choose the color of the Form Repeat box. You can either enter a custom hex code value or use one from the available themes in the builder.|
| Add More Text | This lets you set the `text` that you want to show on the button that adds more form groups. |
| Show Add More | If this option is selected the user is able to see the button and use it to add more form groups. |
| List View | This option reduces the margins between the child controls in the container. |
| Max Repetition | This option lets you set the `maximum number` of `repetitions` that can be added using the `Add More button`. Once that total number of sections are added, the `Add more button` will `disappear` . The default is set to 0 (zero). |

## Use Case Scenario

### Case 1

Let's consider a task management app where users can create project plans. Each project plan consists of multiple tasks, and each task requires the user to enter a name, description, and due date. Traditionally, without the Repeatable Forms feature, users would have to create a separate form entry for each task, leading to redundant data entry for the project details.

By leveraging the Repeatable Forms functionality, the app developers can implement a "Task Section" that contains fields for task name, description, and due date. Users can then dynamically add multiple task sections as needed while creating the project plan. Each task section captures the relevant details for individual tasks, and users can easily remove or add additional tasks with a simple click.

As a result, users can efficiently manage projects with various tasks by utilizing the Repeatable Forms feature. It minimizes data entry effort and ensures consistent and organized data collection, enhancing the productivity and usability of the app.

**Configurations on builder screen**
<figure>
  <Thumbnail src="/img/guides/repeatable-forms/repeatable-forms-usecase-building-screen.png" alt="Simple Database GUI" />
  <figcaption align='center'><i>using Form repeat control builder screen.</i></figcaption>
</figure>

**output on preview screen**
below output is after click of submit button the data is set to JSON VIewer controls to demonstrate how control output will look like and can be used as per our requirement.

<figure>
  <Thumbnail src="/img/guides/repeatable-forms/repeatable-forms-usecase-output-screen.png" alt="Simple Database GUI" />
  <figcaption align='center'><i>using Form repeat control builder screen.</i></figcaption>
</figure>

### Case 2

Let's consider the same task management app but now we already know that we have two tasks common for every user and want them to be rendered by default.

So this can be achieved by using the `data section` of the form repeat control. we can bind the same JSON that was generated after form feeling as data. 
```json
[
  {		
    "projectname": "abc",		
    "projectdescription": "this is first project",		
    "projectduedate": 1690675200000	
  },	
  {		
    "projectname": "xyz",		
    "projectdescription": "this is second project",		
    "projectduedate": 1693353600000	
  }
]
```
After this to bind this data to individual controls with accurate values we have to set formulas of this child controls as 
```javascript
{{formrepeat.THIS.projectname}}
```
```javascript
{{formrepeat.THIS.projectdescription}}
```
```javascript
{{formrepeat.THIS.projectduedate}}
```
To the respective controls and know this controls will load with this data and 2 repetitions of form repeat control by default.

## Conclusion

DronaHQ's Form Repeat Control empowers users to create repeatable forms within their applications, providing a seamless and efficient way to capture multiple sets of data. This feature enhances user experience, simplifies data entry, and ensures data integrity. By incorporating Repeatable Forms, app developers can create flexible and versatile solutions for data collection, benefiting various industries and use cases.

Work in progress...