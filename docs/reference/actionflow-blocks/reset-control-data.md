---
sidebar_position: 1
title: Reset Control Data
---

import Thumbnail from '@site/src/components/Thumbnail';

The `Reset Control Data` action offers a convenient method to reset the data of specified controls within your micro-app back to their default values or initial states. This functionality is especially useful when you want to provide users with the ability to revert inputs or selections to their original settings.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/reset-control-data/resetcontroldata.png" alt="Reset Control Data" />
<figcaption align='center'><i>Reset Control Data</i></figcaption>
</figure>

## Setting up the Reset Control Data Action

To effectively utilize the `Reset Control Data` action, follow these steps:

1. Within the `Action Flows` area, locate the `Reset Control Data` block.

2. Click on the `Reset Control Data` block to initiate the setup process.

3. From the list of controls available in your current app, select the controls for which you intend to reset the data.

4. Click `Continue` to proceed with the setup.

5. Under the Configure Connector’s Field, you will need to select the controls that you want to reset the values for. This step ensures that only the specified controls will be affected.


    - Trigger Dependent Data Query: When activated, this toggle ensures that resetting the selected control with values triggers the execution of a data query associated with that control. In scenarios involving nested data queries, forming a chain-like structure, the process commences from the final dependent data query and systematically executes each one in reverse order.

    - Maintain Pagination (Table Grid Control Only): Enabling this toggle is a straightforward yet impactful action. Upon resetting the data in a Table Grid, it preserves the existing pagination state. For instance, if the user is on the second page, the Table Grid will maintain this position post-reset. This functionality significantly reduces the necessity for users to frequently navigate through pages while observing or implementing changes within the Table Grid.


6. You can also specify conditions under which the action should be executed, as well as the specific environment in which it should take place.

7. Assigning a unique name to the action using the Action Unique Name field is essential for effective identification and management of tasks within the flow.

8. Click `Finish` to complete the setup.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/reset-control-data/feild.jpeg" alt="feild" />
</figure>

By using the `Reset Control Data` action, you empower users with the ability to easily restore controls to their default values or initial states. This enhances user experience by offering a safety net for data modifications and simplifying the process of reverting changes.

The `Reset Control Data` action is a valuable tool for creating user-friendly micro-apps that prioritize user control and usability, allowing users to confidently explore and interact with your app's features.
