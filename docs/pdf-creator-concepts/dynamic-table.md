---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# Dynamic Table

Standard tables do not exhibit the property to add more rows dynamically as per the data selected. Hence, DronaHQ provides the dynamic table component that enables the addition of multiple rows at run time. The Dynamic tables are easily customizable and allow you to add multi-select data using the `List variables`. The `List variables` can be of type text or image.

## Building a sample app

### Creating PDF Template

Create a new pdf template, inside the template editor add a `dynamic table` component and add some columns. For each column you add, create a corresponding list variable for it. Now add those variables to the `dynamic table` accordingly. Save and publish the template.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/dynamic-table/pdf-editor-dynamic-table-list-variables.png" alt="Creation of dynamic table and list variables" />
  <figcaption align='center'><i>Creation of dynamic table and list variables</i></figcaption>
</figure>

### App UI Configuration

Drag and drop a form repeat control and add the required fields to it. For demonstration we have taken book name(text input), author name(text input), categories(dropdown), book format(checkboxes) and a button `Generate Books Report` which will generate the pdf. 

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/dynamic-table/app-setup-books-form.png" alt="Form UI - Book Details" />
  <figcaption align='center'><i>Form UI - Book Details</i></figcaption>
</figure>

### Developing business logic

Upon `button_click` event of the `Generate Books Report`, add a `Generate PDF` action and select the pdf template we created earlier. Appropriately configure variable fields with input controls as shown below.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/dynamic-table/generate-pdf-action-configuration.png" alt="Generate PDF Action Configuration" />
  <figcaption align='center'><i>Generate PDF Action Configuration</i></figcaption>
</figure>

Continue and add a variable which will hold the generated pdf's link

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/dynamic-table/generate-pdf-link-variable.png" alt="Generate PDF Action Configuration" />
  <figcaption align='center'><i>Generate PDF Action Configuration</i></figcaption>
</figure>

Now add `Open URL` action on to the succes branch of `Generate PDF` action, and in the URL field give reference to the link variable we created inside the `Generate PDF` action.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/dynamic-table/open-url-action-configuration.png" alt="Open PDF Link using Open URL action" />
  <figcaption align='center'><i>Open PDF link using Open URL action</i></figcaption>
</figure>

### App Preview

Enter the book details and click on `Generate Books Report`, this will open the generated pdf in a new broswer tab.

<figure>
  <Thumbnail src="/img/pdf-creator-concepts/dynamic-table/generated-pdf-report.png" alt="Generated pdf" />
  <figcaption align='center'><i>Generated pdf having book details</i></figcaption>
</figure>