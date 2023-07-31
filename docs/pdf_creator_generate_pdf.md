---
sidebar_position: 123
---

import Thumbnail from '@site/src/components/Thumbnail';

# Generate PDF

You can generate the pdf template from the Action flow and Workflow by using the `Generate PDF` action. Before generating the pdf, make sure you create and publish that template.

<figure>
  <Thumbnail src="/img/pdf_creator/generate-pdf/generate-pdf-action-block.png" alt="Generate PDF Action"/>
  <figcaption align = "center"><i>Generate PDF action</i></figcaption>
</figure>

To generate a pdf from the template you need to configure the fields as follows:

| Field                        | Description                                                                                                                               |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| PDF Name                     | Name for the generated PDF file.                                                                                                          |
| Password                     | Is the password to encrypt your PDF. It is an optional field.                                                                             |
| Template ID                  | The pdf template you want to generate. Click on the down arrow to the extreme right and all the published templates will be listed        |
| Dynamically generated fields | This section is only visible if variables are created within the pdf template. You can bind the variable value to any control or keyword. |

<figure>
  <Thumbnail src="/img/pdf_creator/generate-pdf/generate-pdf-action-config.png" alt="Generate PDF configuration"/>
  <figcaption align = "center"><i>Generate PDF configuration</i></figcaption>
</figure>

A publicly accessible link for the generated pdf is returned from this action.

<figure>
  <Thumbnail src="/img/pdf_creator/generate-pdf/generated-pdf-link-output.png" alt="Storing Generated PDF Link"/>
  <figcaption align = "center"><i>Storing generated pdf link</i></figcaption>
</figure>
