---
sidebar_position: 1
title: DronaHQ Email
toc_min_heading_level: 2
toc_max_heading_level: 4
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DronaHQ Email

DronaHQ provides a powerful and easy-to-use email feature that allows you to send emails without the need to configure any external SMTP resources. This simplifies the setup process and enables quick communication through automated workflows or user-triggered actions.



### Key Features

#### No SMTP Configuration Required:
You can send emails instantly without setting up or managing SMTP credentials. DronaHQ handles the backend email delivery infrastructure for you.

#### Free Trial Email Credits:
 Free trial users receive 500 email credits per month to test and explore the email functionality. This allows you to prototype and validate use cases without upfront commitment.

#### Attachment Support for Paid Users:
 Paid users can include attachments in their emails, enabling richer communication such as sending reports, documents, or media files directly from your app.


## Prerequisites

- DronaHQ Email add-on should be activated on your account  
- This is available on Cloud platform only.



## Send email via Data Queries

You can configure trigger email functionality using send email action of DronaHQ Email in data queries. You can bind input values using control values, variables, or results from previous queries.

<figure>
  <Thumbnail src="/img/reference/connectors/dronahq-email/dronahq-email.png" alt="DronaHQ email in Data Queries" />
  <figcaption align="center"><i>DronaHQ email in Data Queries</i></figcaption>
</figure>


## Variables

Below is a reference table for configuring the send email action. Provide corresponding values to control the email content and behavior:

| Name | Value | Description|
|------|-------|------------|
|From-Name| {{fromname}}|The name that will appear as the sender in the recipient's inbox.|
|To| John Doe| Who will this email be sent to? Add a single email or an array pf email addresses.|
|Reply-To| {{replyto}}|Optional. Email address that will receive replies. Defaults to sender's email if not specified|
|Cc|{{cc@example.com}}| Optional. Email addresses to be CC'd. Supports single or multiple addresses.|
|Bcc| {{bcc@emaple.com}}|Optional. Email addresses to be BCC'd. Supports single or multiple addresses|
|Subject|Welcome Email| Optional. Subject line to email.|
|Format(required)|{{format}}|Specifies the format of the email body. Options: HTML, "Plain text", or "Markdown". The content of the email message. Format must align with the selected *Format* field.|
Attachment|{{attachement}}|Optional. Provide a direct URL to the file or bind a file upload control. Attachments are only supported for **paid users**|

:::note
If a **Reply-To** address is provided, the email is sent from
 mail-dhqemail-<your_name>@ses.dronahq.ai
 If **no Reply-To** address is specified, the email is sent from
 noreply-dhqemail-<your_name>@ses.dronahq.ai
:::

## Email body formats

Depending on the selected format, structure the Body variable content accordingly:

### PlainText
```perl
Hello {{name}}
Welcome to our service! We're excited to have you on board.
Thanks,
Team DronaHQ
```

### HTML
```html
<h1> Welcome {{name}}! </h1>
<p>We're glad to have you on our platform.</p>
<p><strong>Start exploring today.</strong></p>
```

### Markdown
```markdown
# Welcome {{name}}!
- Get started quickly
- Customize your workflow
- Stay notified

_Happy Building!_
```



## Usage Limit

|Account|Monthly Email Credits|Attachments Support|Notes|
|------|----------------------|-------------------|-------|
|Free Trial| 500|no|Email credits reset every month|
|Paid(Any Tier)|Based on Plan|yes|Attachments can be added via file input|

### Additional Notes
- **Rate Limiting**: Excessive email volume may be throttled to maintain platform stability.  
- **Maximum send rate**: 14 emails/second  
- **Abuse Monitoring**: Emails are monitored for spam and abuse prevention.

**Attachment Size Limit**: Max 5MB per email (subject to change based on plan tier).
