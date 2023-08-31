---
sidebar_position: 1
title: Set Controls Value
---

import Thumbnail from '@site/src/components/Thumbnail';

The `Set Controls Value` action provides you with the capability to dynamically assign values to selected controls within your micro-app. This feature is particularly valuable when you need to populate controls with specific data or customize their values based on user interactions or predefined conditions.


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-control-values/setcontrolvalues.png" alt="Set Controls value" />
<figcaption align='center'><i>Set Controls value</i></figcaption>
</figure>

## Utilizing the Set Controls Value Action

To effectively utilize the `Set Controls Value` action, follow these steps:

1. Within the `Action Flows` area, locate the `Set Controls Value` block.

2. Click on the `Set Controls Value` block to initiate the setup process.

3. From the list of controls available in your current app, select the control for which you wish to set the value.

4. Enter the desired `Control Value`: This value can be fetched using keywords to dynamically retrieve data from your app or assigned a custom value depending on the control's data type.

5. You can also specify conditions under which the action should be executed, as well as the specific environment in which it should take place.

6. Assigning a unique name to the action using the Action Unique Name field is essential. This helps you identify and manage tasks within the flow.

7. You also have the option to determine whether to wait for an action response before proceeding to the next step. This is useful when you need to ensure that the value assignment is complete before moving forward.


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/set-control-values/feild.png" alt="feild" />
</figure>

By using the `Set Controls Value` action, you gain the ability to create dynamic and data-driven user interfaces. This enhances user experience by customizing the values presented in controls, offering tailored interactions and facilitating efficient data entry.

