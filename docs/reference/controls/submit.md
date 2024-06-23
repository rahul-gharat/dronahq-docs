---
sidebar_position: 1
title: Submit Button
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


The Submit button control in DronaHQ is a powerful tool that allows users to update data entered in various fields to a Sheet or trigger other workflows, initiating further actions seamlessly. This control is essential for creating dynamic applications that respond to user inputs efficiently.

<figure>
  <Thumbnail src="/img/reference/controls/submit/submit.jpeg" alt="Submit Button" />
  <figcaption align="center"><i>Submit Button</i></figcaption>
</figure>

## Key Features

1. Data Binding: The Submit button supports a simple static data binding option, making it easy to link user inputs to your data sheets.
2. Workflow Trigger: It enables workflows that initiate further actions based on the user’s submission, enhancing the app's interactivity and automation capabilities.

## Properties 

| Property        | Description                                            |
|---------------------------|---------------------|------------------------------------------------------------|
| Select Workflow    |    Choose the workflow to be triggered on submission.         |

#### Style   

| Property        | Description                                            |
|---------------------------|---------------------|
| Size                | Adjust the size of the button.                             |
| Control Title       | Set the title of the button.                               |
| Weight              | Define the weight of the text (e.g., Semi Bold).           |
| Color               | Choose the text color.                                     |
| Font on Brand Bg    | Select the font for text on a brand background.            |
| Alignment           | Align the text within the button.                          |

#### Background

| Property        | Description                                            |
|---------------------------|---------------------|
|Color               | Set the background color of the button.                    |
|Brand               | Apply a brand theme to the background.                     |
|Radius              | Adjust the border radius of the button.                    |
|Border Radius       | Fine-tune the border radius.                               |
|Theme               | Choose a theme for the button (e.g., Filled).              |

#### Properties    

| Property        | Description                                            |
|---------------------------|---------------------|
| Offline Submission  | Enable or disable offline submission capability.           |
| Show Confirmation   | Display a confirmation message upon submission.            |
| Text                | Customize the text of the confirmation.                    |
| SUBMIT              | Adjust the text on the submit button.                      |
| Show Icon           | Choose to display an icon on the submit button.            |

#### Success Callback

| Property        | Description                                            |
|---------------------------|---------------------|
| Display Option      | Select how to display success messages (e.g., Popup).      |
| Popup Message       | Set the message for the popup on successful submission.    |
| Title               | Title for the success message (e.g., Thank You).           |
| Message             | Content of the success message (e.g., Data Submitted Successfully).|

#### Advance
 By default current page will be validated and reset. This default setting ensures data integrity and clear state management. 

 | Property        | Description                                            |
|---------------------------|---------------------|
 Validate Pages      | Enable validation of pages before submission.              |
 Reset Pages         | Reset pages upon successful submission.                    |


## Usage and Customization

When using the Submit button control in DronaHQ, customization is straightforward. You can define the button’s style to match your app’s branding, set properties to enhance functionality, and configure workflows to streamline processes.

Example Usage:
1. Data Submission: Use the Submit button to update user information in a customer management system.
2. Workflow Trigger: Initiate a workflow to send a confirmation email upon form submission.

