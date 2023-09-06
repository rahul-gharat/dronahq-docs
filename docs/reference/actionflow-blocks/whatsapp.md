---
sidebar_position: 1
title: WhatsApp Messages
---
import Thumbnail from '@site/src/components/Thumbnail';

You can utilize Action Flows to send WhatsApp text messages to your contacts directly from your app. To accomplish this, you can leverage the `WhatsApp Message` action located within the `Action Flows > Utility block``.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/whatsapp/whatsapp.jpeg" alt="WhatsApp Message" />
<figcaption align='center'><i>WhatsApp Message</i></figcaption>
</figure>

## Setting up the WhatsApp Messages Action

To send a WhatsApp message, follow these steps:

1. Message Text: This is a mandatory field where you input the content of your WhatsApp message. You can also make use of Keywords to incorporate text from your app, such as messages inserted by users or notifications sent by your app.

2. Phone Number:** This is a mandatory field where you need to provide the receiver's phone number. The phone number should be entered in a valid format, including the country code and the phone number itself (e.g., +(country code)(phone number)).

   To simplify input, you can utilize keywords. This allows you to integrate input controls and other input values to complete the action of sending WhatsApp text messages.

With these details entered, clicking the Action button triggers the Action Flow, leading to the specified text message being sent via WhatsApp.

In the provided example, we will send a message that is entered in the Text control. We will also accept the phone number using the Phone Number control. To ensure the phone number is in the correct format, you can employ a Compute block that uses the `Concatenate()` function.

Upon clicking the "Send Message" button, the Action Flow is initiated.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/whatsapp/example.jpeg" alt="WhatsApp Message" />
</figure>


Next, configure the WhatsApp Message block by assigning the message text and phone number. In our example, we are using the respective keywords: the Text control and the output of the Compute block.

When you preview the app, it will open the Configure WhatsApp web on your system. After publishing the app and running it on your mobile device, clicking the "Send Message" button will open WhatsApp on your device. The message box will be populated with the message content, and you simply need to press "Send" to dispatch the message to the chosen contact.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/whatsapp/sent.jpeg" alt="WhatsApp Message" />
</figure>
