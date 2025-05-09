---
sidebar_position: 123
---

import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Generate PDF

You can generate both Regular and Fillable PDF templates from the App’s Data Query, Action Flow, and Automation. While configuring, you can choose the desired format for the PDF file response — either as a Base64 string or a public URL to the generated file.

<figure>
  <Thumbnail src="/img/pdf_creator/generate-pdf/generate-pdf-action-from-actionflow.png" alt="Generate PDF block in App's Action Flow"/>
  <figcaption align = "center"><i>Generate PDF block in App's Action Flow</i></figcaption>
</figure>

To generate a pdf from the template you need to configure the fields as follows:

<Tabs groupId="configuration">

  <TabItem value="regular-template-configuration" label="Regular Template">
<br/>

| Field                        | Description                                                                                                                               |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| PDF Name                     | Name for the generated PDF file.                                                                                                          |
| Password                     | Is the password to encrypt your PDF. It is an optional field.                                                                             |
| Template ID                  | The pdf template you want to generate. Click on the down arrow to the extreme right and all the published templates will be listed        |
| Dynamically generated fields | This section is only visible if variables are created within the pdf template. You can bind the variable value to any control or keyword. |

<figure>
  <Thumbnail src="/img/pdf_creator/generate-pdf/generate-pdf-data-query-regular.png" alt="Generate PDF from Data Query - Regular Template"/>
  <figcaption align = "center"><i>Generate PDF from Data Query - Regular Template</i></figcaption>
</figure>

  </TabItem>

  <TabItem value="fillable-template-configuration" label="Fillable Template">
<br/>

| Field                        | Description                                                                                                                               |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| PDF Name                     | Name for the generated PDF file.                                                                                                          |
| Password                     | Is the password to encrypt your PDF. It is an optional field.                                                                             |
| Template ID                  | The pdf template you want to generate. Click on the down arrow to the extreme right and all the published templates will be listed        |
| Form JSON Data | Provide the Generate PDF JSON to populate the fillable fields. |
| Flatten Form | Set to "yes" to make the final PDF non-editable after generation. Set to "no" or leave blank to keep the PDF editable. |

<figure>
  <Thumbnail src="/img/pdf_creator/generate-pdf/generate-pdf-data-query-fillable.png" alt="Generate PDF from Data Query - Fillable Template"/>
  <figcaption align = "center"><i>Generate PDF from Data Query - Fillable Template</i></figcaption>
</figure>

  </TabItem>
</Tabs>

:::note

Regular PDF templates must be published before they can be used for generation. Fillable templates, however, do not require publishing and can be used immediately after upload.

:::