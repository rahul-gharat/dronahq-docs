---
sidebar_position: 1
title: SMTP
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

You can now use DronaHQ’s SMTP connector to configure and send emails from all of your favorite emailing services providers like Gmail, Outlook, SendGrid, Amazon SES, etc. Right from your app.


## Prerequisite

1. SMTP Server Details:
   - Obtain the hostname or IP address of the SMTP server you will be using to send emails.
   - Identify the port number used by the SMTP server for email communication (commonly 25, 465, or 587).

2. Authentication Credentials:
   - Collect the username and corresponding password for the SMTP server. These credentials are used for authenticating and sending emails.

4. Sender Email Address:
   - Choose the sender's email address that will be used to send emails through the SMTP server.

5. Recipient Email Addresses:
   - Identify the recipient email addresses to which you intend to send emails.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the necessary details such as `Host & Port Number` and `Username and Password` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

<figure>
  <Thumbnail src="/img/reference/connectors/smtp/details.png" alt="SMTP with configuration details." />
  <figcaption align = "center"><i>SMTP with configuration details.</i></figcaption>
</figure>

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.


## Supported API endpoints

## Using SMTP Connector

### Send mail

Configure its components, such as the `sender's email, receiver's email, subject`, and more, directly from the action flow.

1. Navigate to the action flow where you wish to set up the SMTP action, specifically the `Connector > Library` action.

2. Choose the SMTP action to send mail.

4. In the subsequent step, you'll encounter various predefined input fields, allowing you to define key details for your email transmission.

   - Sender and Receiver: Specify the email addresses of the sender and receiver. You can also include BCC (Blind Carbon Copy) and CC (Carbon Copy) emails as needed.

   - Reply To: Designate the email address where replies will be directed when the recipient responds to the email.

   - Subject: Provide a subject line for system-generated emails that are intended to be sent.

   - Content Type: Choose between two content types:

     - HTML: This option enables you to incorporate formatted text, URLs, images, and styling components into the email content using HTML tags.

     - Text: This option is suitable for plain text without any additional styling or formatting.

   - Message Body: Enter the body content for the email, including the main message you wish to convey.

   - Attachments: Include images or files to be sent alongside the email. You can add files using File Upload or Text Input controls and bind their keywords to the attachments' input section. Multiple URLs and files can also be added.

    :::info 
    The user can select keywords to fill up the input fields. These input fields can contain an array of strings and objects.
    :::
    
<figure>
  <Thumbnail src="/img/reference/connectors/smtp/keywords.png" alt="Added keywords for configuration" />
  <figcaption align = "center"><i>Added keywords for configuration</i></figcaption>
</figure>

5. Finalize Configuration: Once you have defined all the required input fields, click `Continue` to proceed.

6. Complete Setup: After reviewing your configurations, click `Finish` to complete the setup process.



#### Email Sent and Received

With the SMTP connector now in action, your email has been successfully sent to the receiver's address, complete with the attached image. The email body showcases styled and formatted text, achieved by utilizing the HTML message type.

<figure>
  <Thumbnail src="/img/reference/connectors/smtp/mail.png" alt="Received mail via SMTP connector from DronaHQ app - preview." />
  <figcaption align = "center"><i>Received mail via SMTP connector from DronaHQ app - preview.</i></figcaption>
</figure>

