---
sidebar_position: 1
title: Twilio
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


Integrate Twilio to set up communication strategies and interact with your customers. Connect Twilio to the low-code apps with ready connectors to send and receive text messages, and perform other communication functions and engage with your customers.

## Prerequisite

1. Obtain a Twilio phone number. This is necessary for sending and receiving messages and calls.

2. Generate your Twilio API credentials, which include your Account SID and Auth Token. You'll need these credentials to authenticate API requests.

3. Depending on the services you intend to use (SMS, Voice, etc.), ensure your application's environment supports the necessary libraries and tools for Twilio integration.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `Account SID` and `Auth Token` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

<figure>
  <Thumbnail src="/img/reference/connectors/twillio/details.png" alt="Twilio with configuration details." />
  <figcaption align = "center"><i>Twilio with configuration details.</i></figcaption>
</figure>

### Getting the API Key
  Account SID and Auth Token- You can find the `Account SID` and `Auth Token` under the `Twilio account dashboard > Developers > API Keys`.
  <figure>
    <Thumbnail src="/img/reference/connectors/twillio/key.jpeg" alt="SendGrid api key" />
  </figure>



After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action                   | Description                                                                                                 |
|--------------------------|-------------------------------------------------------------------------------------------------------------|
| SendMessage              | Send a text message to a specified recipient via Twilio's SMS service.                                    |
| SendWhatsappTextMessage  | Send a text message to a recipient using Twilio's WhatsApp integration.                                   |
| SendWhatsappMediaMessage | Send media (images, videos, etc.) to a recipient using Twilio's WhatsApp integration.                     |
| SendVerify               | Send a verification code to a user for account verification or authentication.                             |
| SendVerifyWithConfiguration | Send a verification code with customized configuration, such as expiration time and usage limits.       |
| VerifyCode               | Verify a provided verification code to confirm the authenticity of a user.                                 |

## Using Twilio Connector

### Send Text Message

The Twilio connector provides the `SendMessage` action to enable you to send a text message from your app using your Twilio account.

1. Send text messages to a recipient’s phone number from your app. Add the Message text using keywords to enable dynamic inputs.
    - When adding the recipient’s and sender’s `numbers` you need to make sure that you have added the `country code` as a prefix.

  <figure>
    <Thumbnail src="/img/reference/connectors/twillio/config.jpeg" alt="SendGrid api key" />
  </figure>

2. The Sender’s number would be the Twilio number that would be purchased by you. The Twilio number can be purchased from the Twilio Dashboard [here](https://www.twilio.com/console). 

Your number needs to be approved by Twilio before you can use it. Till that time you can use the Trial Number that can be purchased from Twilio for testing your app.

  <figure>
    <Thumbnail src="/img/reference/connectors/twillio/dashboard.jpeg" alt="Twilio Dashboard" />
  </figure>

Once your business number is approved by Twilio, you can then make use of the same for your further actions to send messages to your customers.

:::tip
You can then send messages to the Verified numbers. You can see and add the caller IDs at this link [here](https://www.twilio.com/login?g=%2Fconsole%2Fphone-numbers%2Fverified%3F&t=77116121c4d2030f5408db581cc8c5537e4840442bff826e0c5f6e7aa85bb694) for verified numbers.

:::


### Send WhatsApp Message

Send WhatsApp Messages or even Media messages using the Twilio integration.


:::info INFO.

Whatsapp needs to approve your account. After approval, your business number needs to receive a message from the end-user so that you can start sending them Whatsapp messages. If you are sending the Templated messages you can send them anytime. However, if dynamic messages are to be sent, they can be sent a maximum of 24 hours from receipt of the last message from the end-user.

:::


Till your number is approved you can use the Twilio sandbox to test your app. You can refer to the Twilio process by Trying out the configuration of Whatsapp as mentioned [here](https://www.twilio.com/login?g=%2Fconsole%2Fsms%2Fwhatsapp%2Flearn%3F&t=f8ac1360bcde721e2e5d56ee98dc6b802a45b3aaa9b8b32b418cb431010b9d60).

1. Add the `text control` to send Whatsapp messages. So we would add the respective keywords in the Message field. Once done click `Finish`.

2. Add `whatsapp:` before adding the sender’s and recipient’s numbers.

<figure>
    <Thumbnail src="/img/reference/connectors/twillio/keyword.jpeg" alt="Twilio Keyword config" />
</figure>

:::info 
When any user sends your business a message you can send them a freeform outbound message within the 24-hour session/ window. Beyond that, you would have to use the pre-configured templates for outbound messaging. 
:::

<figure>
    <Thumbnail src="/img/reference/connectors/twillio/message.jpeg" alt="Twilio message sent to whatsaap number" />
</figure>


---

### Using Twilio for Verification

DronaHQ  enables integration with Twilio through ready-made connectors to send WhatsApp text and media messages to your customers and prospects. The Twilio integration also supports user verification using one-time passcodes or verification codes via SMS or Email. For email verification, Twilio integrates effectively with SendGrid, allowing you to harness its power for substitution. With the Twilio Connector, you can easily set up a secure authentication system to protect user identity and site access.



##### Sending Verification Code via SMS

To send a verification code via SMS, you’ll need to set up the Twilio Connector:

1. In `Action Flow > Server Side Actions`, select Twilio Connector and click Continue.
2. Choose `SendVerify` from the Twilio Actions and click Continue.
3. Select the authenticated account. 
4. Configure the Connector fields:
   - Copy the Service ID from your Twilio Verify Service and paste it in the connector field.
   - Select SMS as the channel.
   - Add the recipient’s phone number with the correct country code.
   - Use the CONCATENATE(control.countrycode, control.mobilenumber) function for dynamic values.
5. Add the Action Unique Name and any response variables from the output values.

<figure>
    <Thumbnail src="/img/reference/connectors/twillio/sendVerify.jpeg" alt="Twilio message sent to whatsaap number" />
</figure>

##### Verifying the Code

Now to verify the code you may have a `OTP Control` where the user enters the code and sends it for verification.

1. Use the `VerifyCode` action from the Twilio Integration.
2. Select the authenticated account.
3. Configure the connector with the Service ID, recipient’s phone number, and the received code.
4. Add the Action Unique Name and any response variables. Use the `output.status` response, which returns `approved` or `pending` status.

#### Email Verification Using Twilio SendGrid

Twilio's integration with SendGrid allows you to send OTP via email. Here’s how to set it up:

1. In your Twilio Account, under Verify Service, select Email Integration.
2. Click Create Email Integration, name the service, and click Continue.
3. Configure the properties:
   - SendGrid API Key: Obtain this from your SendGrid account.
   - Default Template ID: Create a new template in SendGrid and include necessary variables like `{{twilio_code}}`.
   - Default From Email and Name: Set these as per your requirement.
4. Save the configuration.

<figure>
    <Thumbnail src="/img/reference/connectors/twillio/emailvery.jpeg" alt="Twilio message sent to whatsaap number" />
</figure>

##### Sending Verification Code via Email

1. In Action Flow > Server Side Actions, select Twilio Connector and click Continue.
2. Choose `SendVerify` from the Twilio Actions and click Continue.
3. Select the authenticated account.
4. Copy the Service ID from your Twilio Verify Service and paste it in the connector field.
5. Select `Email` as the channel and add the recipient’s email address.
6. Add the Action Unique Name and any response variables.

<figure>
    <Thumbnail src="/img/reference/connectors/twillio/email1.jpeg" alt="Twilio message sent to whatsaap number" />
</figure>

##### Sending Code via Email with Substitution

For dynamic email content:

1. Select `SendVerifyWithConfiguration` from the Twilio Actions.
2. Choose the authenticated account.
3. Copy the Service ID from your Verify Service and paste it in the connector field.
4. Under Channel, select `Email`.
5. Enter the recipient’s email address.
6. Add Channel Configuration with `JSON Key-Value pairs` for substitution.
7. Add the Action Unique Name and click `Finish`.


<figure>
    <Thumbnail src="/img/reference/connectors/twillio/subs.jpeg" alt="Twilio message sent to whatsaap number" />
</figure>

<figure>
    <Thumbnail src="/img/reference/connectors/twillio/email2.jpeg" alt="Twilio message sent to whatsaap number" />
</figure>

