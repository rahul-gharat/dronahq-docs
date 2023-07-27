---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# Using Summary Variable

You may come across a situation where summary report needs to be populated inside the pdf template. In such cases, `Summary` component can be used with summary variable as its input. You can make use of summary control and pass its data to the variable while generating the pdf template.


You may come across a situation where summary report from the DronaHQ summary needs to be displayed

In pdf template, a summary component can be used to 

## Building a sample app

### Creating PDF Template

Add a summary control

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/pdf-editor-summary-variable.png" alt="Form UI" />
  <figcaption align='center'><i>Form UI</i></figcaption>
</figure>

### App UI Configuration

Create a Form UI of your choice. For demonstration, we have taken name(text input), qualification(dropdown), organization name(text input), experience (numeric field) and a button which navigates to the second screen. The organization name and experience fields are contained inside the Form Repeat control, so multiple work experiences can be added for a single candidate.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/app-setup-candidate-form.png" alt="Form UI" />
  <figcaption align='center'><i>Form UI</i></figcaption>
</figure>

Create a second screen, drag and drop a summary control and a button which will generate the pdf. Go to Summary control properties and set the `pages` setting value to the previous screen which has the Form UI.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/app-setup-summary-control.png" alt="Summary Control" />
  <figcaption align='center'><i>Summary Control</i></figcaption>
</figure>