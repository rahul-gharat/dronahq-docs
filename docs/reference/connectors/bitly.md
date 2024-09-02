---
sidebar_position: 1
title: Bitly
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

Bitly is a well-known URL shortener and link management platform and the DronaHQ is providing users to experience and
implement the features of the Bitly platform in their micro apps with the help of Bitly Connector. You can now get
groups and create shortened URLs.

## Configuring API Connector in DronaHQ

A pop-up will display asking you to connect to your Bitly account. Authorize it and your Bitly connector will be ready

<figure>
  <Thumbnail src="/img/reference/connectors/bitly/signin.png" alt="Sign-in to your Bitly account" />
  <figcaption align = "center"><i>Sign-in to your Bitly account</i></figcaption>
</figure>

After successfully configuring and saving the connector settings, you can easily access your newly connected account by
navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section.
This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action            | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| GetGroups         | Retrieve the list of groups associated with your Bitly account. |
| GenerateShortLink | Create a shortened link using Bitly's URL shortening service.   |

## Using Bitly Connector

### Create shortened URL

The main purpose of using the Bitly connector service is to create short URLs of long URLs. To do this we have a
dedicated endpoint called GenerateShortLink.

1. We have a microapp with several controls.
<figure>
  <Thumbnail src="/img/reference/connectors/bitly/app.png" alt="App layout" />
  <figcaption align = "center"><i>App layout</i></figcaption>
</figure>
2. On the trigger event of the button, we will add a `Connector > Library` action of Bitly connector with
   `GenerateShortLink` endpoint then select the configured account.
3. Provide the necessary details like keywords for `long URLs` and `group GUID`.
<figure>
  <Thumbnail src="/img/reference/connectors/bitly/config.jpeg" alt="Config" />
</figure>
4. Test and Save, to use the response by the action's unique name.
5. Add another event to set the received output from the connector to JSON viewer.
6. Preview the app and you will get your shortened URL of a long URL.
<figure>
  <Thumbnail src="/img/reference/connectors/bitly/short.png" alt="Shortened URL" />
  <figcaption align = "center"><i>Shortened URL</i></figcaption>
</figure>

### Get group(s) details

You can view the details like – account creation date, GUID, organization name, and more - of the user account(s)
present in the ID, we have to go to the data-bind section of our control and select the Bitly connector, select
`GetGroups` endpoint, and finally select our configured account.

Do a refresh response, then bind the keys as columns for the control and click `Test & Finish`.

<figure>
  <Thumbnail src="/img/reference/connectors/bitly/getgroup.png" alt="Get group details" />
  <figcaption align = "center"><i>Get group details</i></figcaption>
</figure>

## Self-Hosted Installation

To use the Bitly Connector on the on-prem version, follow these steps:

1. Select the Connector: Choose the Bitly Connector from the list.

2. Provide the Necessary Details: Enter the required information, including Environment/Account Name, API Base URL,
   OAuth Redirect URL, Client ID, Client Secret, Scope, Authorization Request URL, Access Token Request URL, and Refresh
   Token Request URL.

### Required Fields

- Environment/Account Name: The name can contain alphanumeric characters, must start with an alphabet, and can include
  `_` as a special character, but should not contain spaces.
- API Base URL: Enter `https://api-ssl.bitly.com` as the base URL of your API endpoint.

- OAuth Redirect URL: Copy the following URL: `https://qa-selfhosted.dronahq.ai/oauth_callback`. Use this link in your
  app's API or developer settings to create a new integration or app to use with DronaHQ. If required, go to your app's
  admin console and add it to the allowed list.

### Obtaining Bitly API Credentials

1. Client ID and Client Secret: These unique credentials identify your application to Bitly's API. Obtain them by
   registering your application in the [Bitly Developer Console](https://dev.bitly.com/).

2. Scope: Define the specific functionalities your application needs access to within Bitly. Choose appropriate scopes
   from the [Bitly documentation](https://dev.bitly.com/).

3. Authorization URLs: These URLs are involved in the OAuth flow used to obtain access tokens for your application.
   Refer to the [Bitly OAuth documentation](https://dev.bitly.com/authentication.html) for details.

4. Access Token Request URL: Provide the access token request URL.

5. Refresh Token Request URL: Provide the refresh token request URL.
