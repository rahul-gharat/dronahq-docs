---
sidebar_position: 1
title: Update Sheet
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Update Sheet Action

The `Update Sheet` task is a powerful tool in your workflows, allowing you to insert, update, and delete records from your sheets. These actions are commonly triggered by form submissions but can also be initiated through Action flows, providing you with greater flexibility in managing your sheet data.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/update-sheet/update-sheet.png" alt="Update Sheet" />
<figcaption align='center'><i>Update Sheet</i></figcaption>
</figure>

Here's how to set up the `Update Sheet` task:

1. Select Sheet: Choose the target sheet from the list where you want to perform the operation: insert, update, or delete records.

2. Select Operation: Depending on your use case, you can perform one of the following operations:

   - Insert Record: When you want to add new data to the sheet. You'll need to choose the input controls to bind to the respective columns in the sheet.

   - Update Record: To modify existing records. You can set up filters to specify which records to update. If multiple records match the filter, you can choose to update all of them, only the first, only the last, or none of them.

   - Delete Record: For removing records from the sheet. Like updating, you can apply filters to select which records to delete, and again, specify the behavior when multiple matches are found.

3. Configure Input Controls: Depending on your chosen operation (insert or update), you'll need to bind the relevant input controls to the respective columns in the sheet. This ensures that data from these controls is correctly inserted or updated in the sheet.

4. Apply Filters (Optional): If you're performing updates or deletes and need to target specific records, you can apply filters to narrow down your selection. Filters help you define conditions that must be met for the action to apply to a record.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/update-sheet/action.png" alt="update-sheet" />
</figure>

The `Update Sheet` task gives you the flexibility to interact with your sheet data seamlessly, making it an essential component of your workflows, especially when you need to manage and manipulate data within your application.
