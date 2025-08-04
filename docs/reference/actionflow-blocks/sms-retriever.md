---
sidebar_position: 1
title: SMS Retriever
---

import Thumbnail from '@site/src/components/Thumbnail';

SMS Retriever allows your app to automatically retrieve the entire SMS message — typically used for OTP (one-time password) verification — without requesting SMS read permissions. 

:::note
This action is supported on Android only. 
:::

1. Navigate to `Native` in your action flow and select the `SMS Retriever` task.


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/sms-retriever/sms-retriever.png" alt="SMS Retriever Action" />
<figcaption align='center'><i>Native Action - SMS Retriever</i></figcaption>
</figure>

:::

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/sms-retriever/sms-retriever-config.png" alt="SMS Retriever Configuration" />
<figcaption align='center'><i>Native Action - SMS Retriever Configuration</i></figcaption>
</figure>

Once configured, the SMS Retriever action will automatically detect the SMS or OTP.

:::note
Ensure the App Hash is generated before sending the SMS.

Send SMS with valid format : <#> Your App verification code is: 123456
FA+9qCX9VSu (App Hash)
:::
