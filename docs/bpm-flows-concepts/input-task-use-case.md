---
sidebar_position: 1
title: Input Task Use case
---

import Image from '@site/src/components/Image';
import Thumbnail from '@site/src/components/Thumbnail';

In various business process scenarios, you may encounter situations where users need to take actions on a form. In such cases, you can create an `Input Task` within your Workflow and assign a screen as an Input Task to the desired user. When the task is triggered, the user receives a push notification and can then open the task to take the necessary action.

## Adding an Input Task

To add an Input Task to your Workflow, follow these steps:

1. Under the `Select Task` section, choose `Input Task`.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/input-task/input-task.jpeg" alt="Input task" />
  <figcaption align = "center"><i>Input task</i></figcaption>
</figure>

2. Provide a `TASK NAME` and an optional description (recommended). The task name should be meaningful as it will be visible to the user in the `Status App` when the task is executed.

3. You can set a condition/criteria in `WHEN TO EXECUTE`, which will be evaluated by the workflow engine to determine whether to execute the current tasks or not. The condition/criteria need to be evaluated to TRUE (boolean TRUE) to execute the task. If you leave the criteria blank, the task will always execute.

4. You can use dynamic data when workflows are executed. For example, to display the email address of the user who initiated the workflow, use [Workflow Keyword](../reference/keywords/#app-builder-keywords) `INITIATED.INPUTBYEMAIL` which has to be put within double curly braces {{}}. This will display the user’s email address in the Status App when the workflow is executed.

5. The Input Task workflow will trigger a different screen you created for input from the specific user. So click `Next`, and `Select screen` to be used for the input task, and then select the `Submit button from the screen`/form that would represent the input action.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/input-task/task-configuration.png" alt="Input task" />
</figure>

6. The next important thing to do is to `link the Query string parameters` to the `Input task`. You can also set the `Permission` for the fields to be displayed using `Set Permissions for Field Display.`


7. Once done, you need to configure the setting to `Assign the task` to a specific user or a group of users.

## Assigning a Task

After selecting the desired screen to open, you need to assign users for the current task under the `ASSIGN TASK` section. You can assign tasks directly to an individual user or a group of users based on the User Hierarchy.

If you want to assign any time limit to the task, then you can do so by putting the number of hours in the `DEADLINE` box under the `Configuration Section`. You can also enable the `Reassign Task` option if you want to reassign the current task to another user.

Once all the settings are done, click `Done` to save the task settings. The newly created tasks will be displayed as shown in the below image. You can add a new task before or after the current by clicking on the corresponding `‘+’ sign`.


Note that you can create as many `INPUT FORM tasks` in the workflow as per your requirements.

Now whenever you run the form for entering the details and then initiating the form for input from the specific person, and click `Submit`, the input task would be triggered and assigned to the defined person. The manager would be sent a notification about the task.

The input task then derives the input from the previous form and processes it further depending upon the specified actions.

After your complete application is ready `you need to Publish it before you can receive the notifications to your mobile or web app.` So make sure you publish it and then run it.



On submission of the form with the `Input task`, the Manager or specific user gets the following approval form. You can also view the details by clicking the icon on the right-hand side of the screen.

<figure>
  <Thumbnail src="/img/bpm-flows-concepts/input-task/task.png" alt="Input task" />
</figure>

Thus we have seen how the Input Task works. The Initiator triggers the action to assign the task that awaits input from the concerned approver.

