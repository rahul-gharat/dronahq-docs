---
sidebar_position: 1
title: SendGrid
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

SendGrid makes sending emails possible without the use of email servers. 

## Prerequisite 

1. SendGrid API Key: Obtain an API key from SendGrid by signing up for an account and creating a new API key. This key is required to authenticate your requests when using the SendGrid Connector.

2. Environment Setup: Ensure you have a development environment capable of making HTTP requests to external APIs. This could involve using programming languages like Python, JavaScript, or any language that supports HTTP requests.


## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `API key` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

<figure>
  <Thumbnail src="/img/reference/connectors/sendgrid/details.png" alt="SendGrid with configuration details." />
  <figcaption align = "center"><i>SendGrid with configuration details.</i></figcaption>
</figure>


### Getting the API Key

1. Getting the API Key:
   - Log in to your SendGrid account.
   - Navigate to the `Settings` section and select `API Keys.`
   - You will find a list of your existing SendGrid API keys here. If you need to create a new API key, click on `Create API Key` and proceed.

2. Provide Access:
   - To send emails using the API key, it's recommended to provide `Full Access` permissions.
   - After creating the API key, locate it in the list and click `Edit API Key.`
   - In the `API Key permissions` section, choose `Full Access` and click `Update.`


3. Copying the API Key:
   - Once you've configured the permissions, your API key will be generated.
   - Copy the generated API key and store it securely, as you will need it for authentication in the future.

 <figure>
  <Thumbnail src="/img/reference/connectors/sendgrid/apikey.jpeg" alt="SendGrid api key" />
</figure>



After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action                       | Description                                                                                    |
|------------------------------|------------------------------------------------------------------------------------------------|
| GetMessages                  | Retrieve a list of sent email messages from your SendGrid account.                             |
| Get All Templates            | Retrieve a list of all available email templates in your SendGrid account.                      |
| Send Mail                    | Send an email using a SendGrid template or by providing custom content.                         |
| Send Mail With Legacy Templates | Send an email using legacy templates from your SendGrid account.                                 |
| Get Template By ID           | Retrieve a specific email template by its unique ID from your SendGrid account.                 |

## Using SendGrid Connector

### Send Mail without using template

To create your email campaign list and wish to send an email to the selected recipients you can make use of the `Send Mail` action.

You need to provide the list of recipients, add the email subject, email message body, and you are done. You would not select any template here.

<figure>
  <Thumbnail src="/img/reference/connectors/sendgrid/sendmail.jpeg" alt="SendGrid send mail" />
</figure>

So now whenever you run the form, select the recipients from the dropdown and click to trigger the email.

<figure>
  <Thumbnail src="/img/reference/connectors/sendgrid/mail.jpeg" alt="SendGrid send mail" />
</figure>

### Send email using Dynamic Templates

Create a template for your campaigns in your Sendgrid account [here](https://mc.sendgrid.com/dynamic-templates). Use this template that you have created in SendGrid and can also add the dynamic fields within the templates.

Sendgrid is easing out the legacy templates and allows you to migrate existing legacy templates to dynamic / marketing ones instead if you want to do it.

1. Create a template in SendGrid under Dynamic templates. Add the Subject and the Message content and Save. 

2. Configure the Connector, you should make sure that you add the Mandatory fields for From EMail, From Name and To Email.

<figure>
  <Thumbnail src="/img/reference/connectors/sendgrid/template.jpeg" alt="SendGrid send mail" />
</figure>

3. Run the app you can see that the email would be sent from the email to the recipient’s email id. You would be able to view the email as per the template if you have chosen the template.

<figure>
  <Thumbnail src="/img/reference/connectors/sendgrid/mail2.jpeg" alt="SendGrid send mail" />
</figure>

:::info NOTE

- If you are adding a template, the subject and message from the Template would override the Subject and Message from the Configuration.
- In case you do not select a template then make sure that you add the Subject and Message Body else it would appear blank in the Recipients email.
- When using the template, make sure the template is Active.

:::