---
sidebar_position: 4
title: Configure SMTP for system generated emails
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Configure SMTP for system emails

There are a few system generated emails that DronaHQ sends, like user invite, forgot password. By default in the cloud edition DronaHQ sends using their own email servers. But you can customize the email server from where these emails can be sent. DronaHQ provides an SMTP configuration using which you can configure your own SMTP server or the SMTP servers of any of the popular cloud services like Google, Amazon SNS, Sendgrid and others. Navigate to `Account Settings -> Integrations -> Email configuration` to set this up. 

:::info Defaults

For the DronaHQ cloud edition the emails will by default be sent from DronaHQ email servers if this configuration is not set. If you are using the self-hosted version of DronaHQ - it is mandatory to set up and configure your own SMTP servers.

:::

:::caution Please Note

You you need to have admin or owner level privileges to access or modify these configurations.

:::

<figure>
  <Thumbnail src="/img/org-management/email-config.png" alt="Email configuration" width='100%'/>
  <figcaption align = "center"><i>SMTP configuration</i></figcaption>
</figure>

You need to follow the below steps to set up your SMTP server:
- Fill in the necessary connection information of your SMTP server
    - **From name** - The name that would be seen by the receiver
    - **From email** - The email address from where these emails should go
    - **Host name** - Generally would be host.example.com 
    - **Port** - Ideally 587 should be used.
- Enter your credentials
    - **User name** - Generally would be an email like email@exmaple.com
    - **Password** - Enter your password
    - **Enable SSL** - Check this setting with your SMTP provider
- Test the connection - check if you have received the test email, You will see a detailed message if there is an error
- Save the configuration if successful

<figure>
  <Thumbnail src="/img/org-management/SMTP-config.png" alt="SMTP configuration" width='100%'/>
  <figcaption align = "center"><i>SMTP configuration</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/org-management/SMTP-error.png" alt="SMTP error" width='100%'/>
  <figcaption align = "center"><i>Detailed SMTP error message</i></figcaption>
</figure>

:::info Restoring to default

In case you decide to restore to default, on the DronaHQ cloud edition the emails will start going from DronaHQ email servers. If you are using the self-hosted version of DronaHQ - this restore will not work.

:::


:::tip NOTE
DronaHQ provides you with the flexibility to tailor your system-generated email delivery. By default, the cloud edition uses our email servers, but you can customize this to your own SMTP server or popular cloud service SMTP servers like Google, Amazon SNS, SendGrid, and more.

For step-by-step instructions on configuring SMTP for your system emails, refer to our [SMTP Email Configuration Guide](/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers). 
:::
