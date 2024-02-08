---
sidebar_position: 1
title: Guide to SMTP Email Configuration with Popular Email Providers
---
import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

For sending and receiving emails, Simple Mail Transfer Protocol (SMTP) plays a crucial role. SMTP is a set of rules governing the interaction between the sender's email client and the recipient's email server. In this guide, we'll delve into SMTP email configuration with popular email providers.

:::info NOTE
 For a comprehensive step-by-step guide on SMTP configuration, please refer to [this detailed article](/org-management/configure-custom-smtp/).
:::

## Configuring Gmail SMTP with DronaHQ System-Generated Emails

First, it is needed to set up [SMTP in Gmail](#setting-up-smtp-in-gmail).

1. HOST NAME: Enter `smtp.gmail.com`.

2. PORT: Use `587` as the port number.

3. USER NAME: Provide the email address of the user who will be sending the emails.

4. PASSWORD: Use the same password that you used when creating the app on your Google Account.

5. ENABLE SSL: Ensure that this option is checked.

Proceed with the following steps:

<figure>
<Thumbnail src="/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/smtp-details.png" alt="Push Notification" />
<figcaption align='center'><i>Gmail SMTP config</i></figcaption>
</figure>

### Set-Up SMTP in Gmail

1. Navigate to your Google Account settings by going to `Manage Google Account`.

2. In the Google account dashboard, click on `Security` and then select `App Passwords`.

:::caution NOTE
 Ensure that 2-step verification is already enabled in your Google Account.
:::

3. Under the drop-down menu for `Select app`, choose `Other`.

4. Provide a name for the app (e.g., DronaHQ) and click `Generate`.

<figure>
<Thumbnail src="/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/create-app.png" alt="create app" />
</figure>

A password will be generated; make sure to copy it. You will use this password for email configuration. The user name will be the email address associated with your Google Account.



## Configuring Amazon SES SMTP with DronaHQ System Generated Emails

First, it is needed to configure [SMTP in Amazon SES](#set-up-smtp-in-amazon-ses).

1. HOST NAME: Use `email-smtp.ap-south-1.amazonaws.com`.

2. PORT: Set the port to `587`.

3. USER NAME and PASSWORD: You can find these credentials on the AWS Console under Amazon SES > Account Dashboard > Create SMTP credentials.

4. ENABLE SSL: Ensure that this option is checked.

Proceed with the following steps:

<figure>
<Thumbnail src="/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/smtp-email-config.png" alt="Amazon SES SMTP Config" />
<figcaption align='center'><i>SMTP Email Config</i></figcaption>
</figure>

### Set-up SMTP in Amazon SES

To configure Amazon Web Services SES for the SMTP server, follow these steps:

1. Create an account on AWS and log in to the AWS console.

2. There are two steps required to integrate SES on AWS: Creating Identity and Creating SMTP details.

#### Creating Identity

- Search for SES in the search bar and click on `Amazon Simple Email Service.`

- This will open the dashboard. Proceed to create an identity.

- Select `Email Address` or `Domain` based on where the email is required to be sent.

- Verify the email address if `Email Address` is selected as the identity type.

#### Creating SMTP Details

- On your Amazon SES dashboard, click on `Account Dashboard` from the sidebar.

- Details related to the SMTP endpoint and port will be provided under `Simple Mail Transfer Protocol (SMTP) settings.`

- Click on `Create SMTP credentials.`

<figure>
<Thumbnail src="/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/smtp-ses.png" alt="create app" />
</figure>

- You will be directed to a new window of IAM Management Control. Provide an IAM User Name (or you can use the default too) and click "Create."

- SMTP Username and SMTP Password will be generated, which will be used for email configuration.

<figure>
<Thumbnail src="/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/ses-details.png" alt="create app" />
</figure>


## Configuring SendGrid SMTP with DronaHQ System Generated Emails

First, it is needed to configure [SMTP in SendGrid](#set-up-smtp-in-sendgrid).

1. HOST NAME: Use `smtp.sendgrid.net`.

2. PORT: Set the port to `587`.

3. USER NAME and PASSWORD: These credentials will be the same as provided by SendGrid after creating identity and configuring SMTP relay for that identity.

4. ENABLE SSL: Ensure that this option is checked.

Proceed with the following steps:

<figure>
<Thumbnail src="/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/smtp-sendgrid-config.png" alt="SendGrid SMTP Config" />
<figcaption align='center'><i>SMTP Email Config</i></figcaption>
</figure>

### Set-up SMTP in SendGrid

To configure SendGrid for the SMTP server, follow these steps:

1. Create an account on SendGrid and log in.

2. Complete two components for this: Setting up sender identity under sender authentication and Integrating SMTP relay.

#### Sender Identity

- Create a sender identity from where the email would be sent. The sender identity details, like the email ID, need to be authenticated.

- Proceed from the sidebar of the dashboard as `Settings > Sender Authentication > Create a Sender`.

- Fill in the details, providing sender and receiver email addresses, and other necessary details.

- Click on create. Next, verify the email address provided while creating a sender identity.

#### Integrating SMTP Relay

- Click on `Email API > Integration Guide > SMTP Relay`.

- In the next step, give the API a name and click `Create Key` to generate a new API key.

<figure>
<Thumbnail src="/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/key.png" alt="SendGrid SMTP Config" />
</figure>

Details related to the server, ports, username, and password will be displayed, and these can be used for email configuration.

