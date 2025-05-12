---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# Using Summary Variable

Let us consider a scenario, where you want to embed summarized report inside a pdf. To make a summarized report within DronaHQ app, summary control can be used, which holds input field data from different pages. 

Inside the pdf template, a `summary` variable and a `summary` component needs to be added. The `summary` variable will pass the `summary` control's data to the `summary` component. The `summary` component can then render that data in a tabular format.

## Building a sample app

### Creating PDF Template

Create a new pdf template, inside the template editor add a `summary` component and create a new `summary` variable `candidate_exp`, as shown below.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/using-summary-variables/pdf-editor-summary-variable.png" alt="Creation of summary component and variable" />
  <figcaption align='center'><i>Creation of summary component and variable</i></figcaption>
</figure>

Go the the properties of `summary` component, and from the variable dropdown select the `summary` variable we just created i.e. `candidate_exp`. Save and publish the template.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/using-summary-variables/pdf-editor-summary-configuration.png" alt="Adding summary variable to summary component" />
  <figcaption align='center'><i>Adding summary variable to summary component</i></figcaption>
</figure>

### App UI Configuration

For this use case, we need to create two screens, first screen will have the Form UI named as `Candidate Details` and second screen will have the summary control named as `Candidate Info`.

Create a Form UI of your choice. For demonstration, we have taken name(text input), qualification(dropdown), organization name(text input), experience (numeric field) and a button which navigates to the second screen. The organization name and experience fields are contained inside the Form Repeat control, so multiple work experiences can be added for a single candidate.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/using-summary-variables/app-setup-candidate-form.png" alt="Form UI" />
  <figcaption align='center'><i>Form UI (first screen)</i></figcaption>
</figure>

Create the second screen, drag and drop a summary control and a button which will generate the pdf. Go to Summary control properties and set the `pages` setting value to the previous screen which has the Form UI.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/using-summary-variables/app-setup-summary-control.png" alt="Summary Control" />
  <figcaption align='center'><i>Summary Control (second screen)</i></figcaption>
</figure>

### Developing business logic

Add navigate action to the `button_click` event of `Submit` button placed on the Form UI. In the `Navigate To` field select the `Candidate Info` (second screen).

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/using-summary-variables/navigate-action-configuration.png" alt="Navigate to summary control screen" />
  <figcaption align='center'><i>Navigate to summary control screen</i></figcaption>
</figure>

Go to the `button_click` event of the `Generate Report` button placed on the second screen, add a `Generate PDF` action and select the pdf template we created earlier. Give reference of the summary control in the `candidate_exp`(summary variable) field and name of the PDF file. Setting a password is optional. 

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/using-summary-variables/generate-pdf-action-configuration.png" alt="Generate PDF Action Configuration" />
  <figcaption align='center'><i>Generate PDF Action Configuration</i></figcaption>
</figure>

Now add `Open URL` action on to the success branch of `Generate PDF` action, and in the URL field give reference to the `Generate PDF` action block output `pdfFile` as shown below.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/using-summary-variables/open-url-action-configuration.png" alt="Open PDF Link using Open URL action" />
  <figcaption align='center'><i>Open PDF link using Open URL action</i></figcaption>
</figure>

### App Preview

Enter the candidate details and click on the `Submit` button. Now click on the `Generate Report` button, this will open the generated pdf in a new browser tab.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/using-summary-variables/app-preview.png" alt="Summary control shows candidate details" />
  <figcaption align='center'><i>Summary control shows candidate details</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/using-summary-variables/generated-pdf-report.png" alt="Generated pdf" />
  <figcaption align='center'><i>Generated pdf having candidate details</i></figcaption>
</figure>

