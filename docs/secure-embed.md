---
sidebar_position: 61
---

import Thumbnail from '@site/src/components/Thumbnail';

# Secure Embed

Secure Embed is a powerful feature that enables seamless integration of DronaHQ app within your application while ensuring utmost security and user access control. By leveraging a Single Sign-On (SSO) token mechanism, this functionality restricts application access to authorized users only, safeguarding sensitive data and providing a smooth, secure user experience.

To securely embed the app inside your application you need to do the following steps:

- Open the app in the DronaHQ that you want to embed.
- Make sure the application is published.
- Click on the Share button on the right top corner of the screen.
- Look for the `Public URL and Embed Apps` section in that click on `Embed configuration ->`
- It will open the embed configuration modal, in the left-hand side select the secure embed tab.

Once you do the above-mentioned steps you will be able to see the following screen, with specific steps that you need to do to securely embed the app.

<figure>
  <Thumbnail src="/img/advanced-concepts/secure-embed/embed-configuration-modal.png" alt="Embed configuration modal" />
  <figcaption align = "center"><i>Embed Configuration Modal</i></figcaption>
</figure>


## Generate SSO token

This is the first step where your server makes an API Request to get the SSO token using the CURL request provided in the secure embed 
config modal. 

:::danger Call from Backend
The SSO token should be requested from your backend each time a specific end-user of your application wants to see an embedded 
App. 

:::

<figure>
  <Thumbnail src="/img/advanced-concepts/secure-embed/curl-request-to-generate-sso.png" alt="CURL request to generate SSO token" />
  <figcaption align = "center"><i>CURL request to generate SSO token</i></figcaption>
</figure>

#### Raw data

| Key | Description |
| --------- | ----------- |
| token | Token to authenticate the user making the call, will be provided to you by default in the curl request |
| email | End users email address for which you want to generate the SSO token. |
| type | pass SSO in the value |
| properties | Stores object, with each key representing query parameters of your application, if you want to pass some extra data to handle multi-tenant applications you can pass these data by configuring `query strings` in the DronaHQ. and value for those parameters will be passed here |

The result of the API call will be the SSO token which will be used for embedding the app in the third step.

```bash
{
    "type": "sso",
    "token":"<SSO Authorization token>"
}
```
## Handle Multi-Tenant 

In case you are embedding the app for showing multi-tenant data or you want to pass more user or other parameters, you can create your keys in the query string in settings and pass the keys and their values in the properties object. 

As you can see in the `Query string configuration image` that we have configured multiple query string parameters and if you compare it with the `CURL request to generate SSO token` image the properties key of raw data contains the same keys from the query string configuration.

<figure>
  <Thumbnail src="/img/advanced-concepts/secure-embed/query-string-configuration.png" alt="Query string configuration" />
  <figcaption align = "center"><i>Query string configuration</i></figcaption>
</figure>

## Embed app

This is the last step, in this step you need to add the script tag provided to you in the config modal to your applications head section and place the custom DronaHQ microapp tag inside your application's html page where you want to embed it, set the token value that you got from step one and you are finished with the secure embed configuration. all you need to do is fire up the application and test.

<figure>
  <Thumbnail src="/img/advanced-concepts/secure-embed/embed-microapp.png" alt="Embed app" />
  <figcaption align = "center"><i>Embed app</i></figcaption>
</figure>