---
sidebar_position: 1
title: Using SUBMITID and ROWID
---

import Image from '@site/src/components/Image';
import Thumbnail from '@site/src/components/Thumbnail';

This article will help you understand when to use SUBMITID and when to use ROWID in the workflow.

To enable the Workflow button on your app's page, you need to add a Submit button.

Both `SUBMITID` and `ROWID` are reserved keywords that are auto-generated when new data is added to sheets using Workflow. This data can be added to sheets either through Workflows or directly into the Sheets.

## Single Row Added

When new data is added through Workflow using the Submit button, there are two cases:

### Single Row Added

In the case of adding a single row to a sheet, both SUBMITID and ROWID will be unique in their respective columns for that particular sheet.

Let's look at an example of adding a single row:

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/submitid-rowid/app1.png" alt="Form Layout" />
  <figcaption align = "center"><i>Form Layout</i></figcaption>
</figure>

In the example above, we have a `Product Form` with fields for `Product name`, `Product Quantity`, and a `Submit button` control.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/submitid-rowid/insert-record.png" alt="Select Insert Record" />
  <figcaption align = "center"><i>Select Insert Record</i></figcaption>
</figure>


As shown in the Workflow image above, data is submitted to the `UniqueIdSubmissionId` sheet, which has four columns: `ProductName`, `ProductQuantity`, `SUBMITID`, and `ROWID`. The `product_name` is a unique name for the `Product Name` control, `singlequantity` is a unique name for the `Quantity` control, and `SUBMITID` and `ROWID` are auto-generated keywords that are created when data is submitted from the `Product Form`.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/submitid-rowid/result1.png" alt="Select Insert Record" />
</figure>

The above image shows the `UniqueIdSubmissionId` sheet where data is submitted from the Product Form, once with the product name "Computer" and another time with the product name "Mobile."

### Multiple Rows Added

In the case of adding multiple rows to a sheet, `ROWID` will be unique for each row added, whereas `SUBMITID` will be the same for a group of rows added together but unique with respect to previously added SUBMITIDs.

Let's look at an example of adding multiple rows:

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/submitid-rowid/app2.png" alt="Form Layout" />
  <figcaption align = "center"><i>Form Layout</i></figcaption>
</figure>

In the example above, we have a `Product Form` with a `Section Repeat` control that includes fields for `Product name`, `Product Quantity`, and a `Submit button` control. Users can click on the "+ More" button to add more products.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/submitid-rowid/workflow1.jpeg" alt="Toggle on the ITERATE BUTTON" />
  <figcaption align = "center"><i>Toggle on the ITERATE BUTTON</i></figcaption>
</figure>

The data is submitted to the `UniqueIdSubmissionId` sheet, which has four columns: `ProductName`, `ProductQuantity`, `SUBMITID`, and `ROWID`. The `section_repeat` is a unique name for the `Section Repeat` control, `product_name` is a unique name for the `Product Name` control, `singlequantity` is a unique name for the `Quantity` control, and `SUBMITID` and `ROWID` are auto-generated keywords that are created when data is submitted from the `Product Form`. Additionally, to add multiple rows, you need to enable the `Repeat Insert operation` toggle and add the column names of the sheet where multiple values need to be inserted in separate rows.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/submitid-rowid/resul2.png" alt="Select Insert Record" />
</figure>

Data is added by submitting from the `Product Form`. In the form image, two products are submitted from the `Product Form` in a single Submit using the `Section Repeat`. Each product is added to a different row, and `ROWID` is unique for all rows added, whereas `SUBMITID` is the same for the group of rows added together.

In summary, `ROWID` can be used to uniquely identify a row in a sheet, whereas `SUBMITID` can be used to uniquely identify a group of rows submitted or added together.
