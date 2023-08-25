---
sidebar_position: 1
title: Typeform
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


Typeform simplifies data collection through interactive and engaging online forms, surveys, and quizzes, enabling seamless gathering of valuable insights from respondents.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window askinging you to sign-in into your Typeform account. Continue with the steps and give access to DronaHQ to connect with your Typeform ID and its information.


<figure>
  <Thumbnail src="/img/reference/connectors/typeform/signin.png" alt="Sign-in to your Typeform account" />
  <figcaption align = "center"><i>Sign-in to your Typeform account</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action              | Description                                                                                                                                                                     |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GetProfile          | Retrieve user profile information from Typeform. This includes user details like name, email, account status, and other relevant information.                                |
| GetForms            | Fetch a list of all forms (surveys, quizzes) associated with the user's Typeform account. You'll get details about each form such as title, ID, creation date, and more.  |
| GetFormResponse     | Retrieve responses and data collected from a specific form in Typeform. This action allows you to retrieve all the responses submitted to a particular form in a structured way. |