---
sidebar_position: 1
title: Popup
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Popup Action

The `Popup` action is designed to display a message to the user and prompt them to take a specific action. This type of interaction is typically used to convey important information or instructions and proceed based on the user's response.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/popup/popup.png" alt="Popup" />
<figcaption align='center'><i>Popup</i></figcaption>
</figure>

Key features of the `Popup` action include:


- Message: This is where you specify the message you want to convey to the user. The message should be clear, concise, and provide the necessary information or instructions.

- Button Text: The `Popup` typically includes a single button for the user to interact with. You can customize the text on this button to guide the user on what action they should take next. For example, you might use text like `OK,` `Continue,` or `Dismiss.`

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/popup/action.png" alt="Popup" />
</figure>

The `Popup` action shifts the user's focus from the current window or screen to the alert or popup, ensuring they receive and read the message. Once the user interacts with the button by clicking it, the action can proceed to the next step in the workflow.

While the `Popup` action doesn't involve inputting values, it serves as a valuable tool for providing information and guidance to users during their interaction with your application. It's a straightforward way to communicate important messages effectively and keep your users informed.
