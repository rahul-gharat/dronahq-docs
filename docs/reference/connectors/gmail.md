---
sidebar_position: 1
title: Gmail
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Gmail Connector facilitates seamless integration with your Gmail account, enabling actions like sending emails, retrieving messages, and managing labels, streamlining your communication tasks.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window asking you to sign-in into your Google account. Continue with the steps and give access to DronaHQ to connect with your Google ID and its information.

<figure>
  <Thumbnail src="/img/reference/connectors/gmail/signin.png" alt="Sign-in to your Google account" />
  <figcaption align = "center"><i>Sign-in to your Google account</i></figcaption>
</figure>

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action          | Description                                                                                              |
|-----------------|----------------------------------------------------------------------------------------------------------|
| sendEmail | Sends an email to specified recipients including Subject, Body, CC, BCC.|

