---
sidebar_position: 1
title: Generate PDF
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Generate PDF Action

In your application, there might be scenarios where you need to generate PDF documents as a part of your workflow. With the `Generate PDF` action in Action Flows, you can create PDFs based on predefined templates. Here's how you can set it up:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/generate-pdf/generate-pdf.png" alt="Generate PDF" />
<figcaption align='center'><i>Generate PDF</i></figcaption>
</figure>

1. PDF Name: Specify a name for the generated PDF. You can also use Keywords to dynamically fetch the name.

2. Password (Optional): If you want to encrypt your PDF with a password, you can provide it here. This field is optional.

3. Template ID: Select the PDF template you want to use from the list of available templates. You can also specify the template using Keywords. If your PDF template includes dynamic variables, the corresponding variables will be fetched during this process.

4. Continue: Click the `Continue` button to proceed.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/generate-pdf/action.jpeg" alt="generate-pdf" />
</figure>

You can also define conditions for when this action should execute and specify the execution environment. Assigning a unique name to this action is helpful for identifying and managing tasks within your Action Flow.

The `Generate PDF` action empowers you to seamlessly create PDF documents as part of your application's workflow, enhancing its functionality and usability.
