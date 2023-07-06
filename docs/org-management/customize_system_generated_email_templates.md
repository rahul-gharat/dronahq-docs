---
sidebar_position: 2
title: Customize system generated email templates
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Customize system generated email templates

This feature allows you to personalize the content of system-generated emails, such as user invite and password reset emails. By utilizing our user-friendly email templates in HTML format, you can customize the invite emails and forgot password emails. Start by navigating to `Account Settings -> Integrations -> Email Template`

<figure>
  <Thumbnail src="/img/org-management/email-templates.png" alt="Customize emails" width='100%'/>
  <figcaption align = "center"><i>Customize system generated email templates</i></figcaption>
</figure>

- **Invitation Emails**: Send a warm and engaging email to invite individuals to join your application. Craft a compelling invitation that captures their attention and encourages them to take action.

- **Forgot Password Emails**: Simplify the password recovery process for your users. When someone forgets their password, our customizable email template enables you to send them a clear and concise message with instructions on how to reset it securely.

Each email template is equipped with an intuitive editor and a preview section, offering you complete control over the template's content. Easily tailor the text, formatting, and design elements to match your branding and communication style. On the right side of the editor, a live preview enables you to see how your customized email will appear to recipients.

Take advantage of our email template feature to enhance the effectiveness and consistency of your communication with users. Personalize your messages, strengthen your brand identity, and deliver a seamless user experience.

<figure>
  <Thumbnail src="/img/org-management/email-editor.png" alt="Email editor" width='100%'/>
  <figcaption align = "center"><i>Email editor</i></figcaption>
</figure>

:::info Creating HTML templates

You can use any HTML template which has inline CSS to customize these emails. Since we don't provide an active editor for editing this HTML, you can use any editor of your choice and build this email template and copy paste it in our text area.

:::

## Available keywords

DronaHQ provides the following keywords which can be used in these templates to further contextualize your message to the user.

|  Keywords | What it means |
|  --- | --- |
| active_link | This is the link for the user to activate their account when they receive the invite email. |
| reset_link | This is the link for the user to reset their password when they receive the reset password email. |
| app_name | This is the name of the account or app name that you see on the login screen for the end-user portal. (You can change this in Account Settings -> Domain & Branding)   |
| admin_name | This is the name of the account owner   |

:::info Use of keywords

In the subject line for using keywords, you need to use them with {{keyword}} e.g. {{app_name}} while in the email HTML template you need to use it in the format %keyword% e.g. %app_name%

:::