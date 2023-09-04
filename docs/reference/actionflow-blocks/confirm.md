---
sidebar_position: 1
title: Confirm
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Confirm Action

The Confirm action allows you to display a confirmation popup on the form, typically used in scenarios like deleting records or confirming critical actions. This confirmation dialog provides a way to ensure that users intend to proceed with an action before it's executed.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/confirm/confirm.png" alt="Confirm" />
<figcaption align='center'><i>Confirm</i></figcaption>
</figure>

Here are the key components of the `Confirm` action:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/confirm/action.png" alt="Confirm" />
</figure>

- Title: Set the title of the confirmation dialog box, which can help convey the purpose of the confirmation to the user.

- Message: Specify a message that informs the user about what the confirmation is for. This message should be clear and concise.

- Confirm Button Text: Define the text that appears on the confirmation button. You can customize it based on your user interface requirements. Common options include "Confirm," "Yes," "Save," or any other relevant text.

- Cancel Button Text: Set the text for the cancel button, which allows users to opt-out of the action. Clicking this button typically cancels or dismisses the action.


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/confirm/preview.png" alt="Confirm" />
</figure>

By using the `Confirm` action, you enhance the user experience by providing a clear and intuitive way for users to confirm their intentions before proceeding with potentially irreversible actions. Additionally, you can specify conditions for when the action should be executed and define an Action Unique name to help identify this task within your action flow.
