---
sidebar_position: 1
title: Microsoft Outlook
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


he Microsoft Outlook connector enables seamless integration with Outlook's email and calendar features, allowing users to manage emails, events, and tasks directly from their applications.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window askinging you to sign-in into your Microsoft Outlook account. Continue with the steps and give access to DronaHQ to connect with your Microsoft Outlook ID and its information.

<figure>
  <Thumbnail src="/img/reference/connectors/outlook/signin.png" alt="Sign-in to your Outlook account" />
  <figcaption align = "center"><i>Sign-in to your Outlook account</i></figcaption>
</figure>

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action          | Description                                                                                              |
|-----------------|----------------------------------------------------------------------------------------------------------|
| sendEmail | Sends an email to specified recipients including Subject, Body, CC, BCC.|

