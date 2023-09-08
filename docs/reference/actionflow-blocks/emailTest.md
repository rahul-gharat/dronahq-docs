---
sidebar_position: 1
title: Email Test
---

import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Email Test Action

The Email Test action allows you to send an email from your application using dynamic values and keywords. This can be particularly useful for sending automated emails with personalized content.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/emailTest/emailTest.png" alt="EmailTest" />
<figcaption align='center'><i>EmailTest</i></figcaption>
</figure>

### Configuration Fields

1. Subject (Use Keywords for Value): Enter the subject of the email. You can use keywords to dynamically populate this field with values from form controls, variables, or other sources.

2. Body (Use Keywords for Value): This field is for the body of the email message. Like the subject, you can use keywords to populate the email body with dynamic content.

3. Enter Recipient(s) (Use Keywords for Comma-Separated Email IDs): Specify the recipient's email address or addresses. You can use keywords to dynamically fetch email addresses, and if you want to send the email to multiple recipients, separate their email addresses with commas.

### Usage

Once you have configured these fields, your action flow is ready to send an email with the subject, body, and recipient(s) you specified. When this action is triggered, it will use the provided values or dynamically fetch them from your app's data.

This action can be valuable for sending various types of emails, such as confirmations, notifications, or reports, all while customizing the subject, body, and recipients based on your app's requirements.
