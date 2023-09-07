---
sidebar_position: 1
title: Email Action
---


import Thumbnail from '@site/src/components/Thumbnail';

The Email action in Studio empowers your app to send emails directly. This feature is particularly useful when you need to confirm activities or communicate information via email.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/email/email.png" alt="Email" />
<figcaption align='center'><i>Email</i></figcaption>
</figure>

### Setting up the Email Action

1. Subject: Start by specifying the subject line for your email message. You can use keywords to dynamically generate the subject line based on form controls or other inputs.

2. Body: Enter the actual content or message you want to send in the email body. Like the subject, you can also use keywords to personalize the email's content.

3. Recipients (Mandatory Field): Enter the recipient's email address to whom you want to send the email. You can provide a single email address or multiple addresses separated by commas. Alternatively, you can dynamically fetch recipient emails using keywords or variables.

   > Example: `john@example.com` or `john@example.com, jane@example.com`

4. Execution Conditions: Define the conditions under which this action should execute. This allows you to control when the email action is triggered.

5. Environment: Specify the environment in which the email action should take place, ensuring compatibility with your app's workflow.

6. Action Unique Name: Assign a unique name to this action. This helps in identifying and managing tasks within your app's action flow effectively.

By incorporating the Email action in your app, you can seamlessly integrate email functionality, enhancing user communication and engagement.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/email/feild.png" alt="Email" />
</figure>

