---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# JS Code

The Logic Block provides you with tasks that are based on logical actions. You have here the `Branch task, Delay task, Compute Task, and JSCode`

<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/js-code/jscode-list.jpg" alt="JSCode" />
  <figcaption align='center'><i>JSCode</i></figcaption>
</figure>

<br/>

The JS Code task allows you to add a block of JavaScript code to perform a custom action as part of the action flow. It thus enables interaction between different Studio components and tasks. 

Let us take a simple example to generate a tax invoice for a product. The total tax needs to be computed based on a range. So in this case you need a JavaScript that checks the Taxable amount within the defined slabs and calculates the tax and the total invoice amount.

<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/js-code/generate-invoice-form.jpg" alt="Generate Invoice Form" />
  <figcaption align='center'><i>Generate Invoice Form</i></figcaption>
</figure>



So in this example, the JS Code block would contain a certain code that gets the `Taxable Amount` as the input value. `Taxable amount` is derived as `Quantity * Price`.

In this example, the tax would be calculated and the total invoice amount displayed. The Invoice would be generated based on a PDF template created. Here we have added the JS Code from the Logic block and entered the respective JavaScript code. The input parameter is defined as `taxamt` which gets the value from the numeric control `taxableamount`.  The input parameters are defined as Name, Keyword, Data type, and a Test value. You can as many input parameters as required. The `output` is the value returned as a result of the functioning of the JavaScript. The `amount of Tax is the Output`  returned in this case to the response variable `invoiceamt1`.


<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/js-code/jscode.jpg" alt="JSCode" />
  <figcaption align='center'><i>JSCode</i></figcaption>
</figure>

In this example, we have included the compute block to set values for the tax and the total invoice amount which would then be used in the PDF Creator configuration.

<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/js-code/pdfcreator.jpg" alt="PDF Creator" />
  <figcaption align='center'><i>PDF Creator</i></figcaption>
</figure>

The JS Code task will be a part of the Action flow components with values computed used in different actions.

<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/js-code/actionflow.jpg" alt="Actionflow" />
  <figcaption align='center'><i>Actionflow</i></figcaption>
</figure>


The invoice would be generated as seen in the preview below with the tax amount displayed accordingly.

<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/js-code/invoice-generated.jpg" alt="Generated Invoice" />
  <figcaption align='center'><i>Generated Invoice</i></figcaption>
</figure>
