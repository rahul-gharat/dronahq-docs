---
sidebar_position: 132
title: Public and Embed Sharing options
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Public and Embed Sharing options

While sharing the apps built on DronaHQ you have the following broad options:
- [Open public links](../public_and_embed_sharing_options/#open-public-links)
- [Secure public links (with auth)](../public_and_embed_sharing_options/#secure-public-links-for-verified-users)
- [Open public embeds](../public_and_embed_sharing_options/#open-public-embeds)
- [Secure embeds (with sso token)](../public_and_embed_sharing_options/#secure-embeds)

## Open public links

This feature is useful for usecases where you dont need the end user authentication like, delivery tracking, feedback forms, registration forms etc. You need to navigate to `Share -> Public URLs and embed apps` and Enable the public access.

:::caution Add-ons

If you are on user based plans you need to subscribe to the public and embed add-on to use this feature. You can try out this feature in a trial though in all plans.

:::

:::info Keywords

There are some keywords and actions that might not work effectively in a public app scenario. Keywords related to user details and actions related to end-user portals will not work effectively.

:::

When you enable this toggle, you can see a public URL via which your users can access the app that you have built without any authentication. You public URL will look like: 
```url
https://your_subdomain.dronahq.io/uniqueid OR https://your_custom_domain/uniqueid
```

### Friendly URLs

You can change the `uniqueid` to a friendlier URL by navigating to `Public URL configuration` and setting up the friendly URL for your users.

<figure>
  <Thumbnail src="/img/public-embed/friendly-url.png" alt="Friendly URLs" width='100%'/>
  <figcaption align = "center"><i>Friendly URLs</i></figcaption>
</figure>

### Setting up tracking using query params

You can set up your campaigns for tracking using query params by navigating to `Setup tracking` in the public apps modal. Imagine you are building a registration form which has a few utm params dependent on different sources where you are running this campaign. Generating unique links for each campaign could be the requirement in that case. You can define as many query params to generate a tracking link for these use cases. 

<figure>
  <Thumbnail src="/img/public-embed/setup-tracking.png" alt="Set up tracking" width='100%'/>
  <figcaption align = "center"><i>Set up tracking</i></figcaption>
</figure>

## Secure public links for verified users

There might be times where you don't want your users to login to a single end-user portal that DronaHQ provides and you want to generate different links for each app yet secure by letting only authenticated users to access it. Enabling this property will ensure that your users will first be redirected to an authentication screen (DronaHQ or SSO whichever is set up in the account) and only once the user is authenticated would they be allowed to access the app.

:::info Auth session

Once the users authenticate themselves, the session will persist for 18 hours and the user will be able to access the app for the whole session. Once the session expires, the user will have to re-authenticate themselves.

:::

<figure>
  <Thumbnail src="/img/public-embed/auth-public-url.png" alt="Public URL with auth" width='100%'/>
  <figcaption align = "center"><i>Secure public URL with authentication</i></figcaption>
</figure>

## Open public embeds

DronaHQ provides different ways in which public apps can be embedded in your own portals, applications or websites. These apps will work openly without any authentication and use-cases like different forms on the website, info or delivery tracking related apps on your website etc. are ideal use-cases.

You have the following options to embed:
- iframe 
- JS script 
- Embed code

<figure>
  <Thumbnail src="/img/public-embed/iframe-embed.png" alt="iframe embed" width='100%'/>
  <figcaption align = "center"><i>Embed with iframes</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/public-embed/js-embed.png" alt="JS embed" width='100%'/>
  <figcaption align = "center"><i>Embed with JS script</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/public-embed/code-embed.png" alt="Code embed" width='100%'/>
  <figcaption align = "center"><i>Embed with Code</i></figcaption>
</figure>



## Secure embeds

Due to DronaHQ's efficient app-building capabilities, it is frequently preferred over traditional code writing for faster development. As a result, embedding DronaHQ apps into existing portals, tools, and applications has become a common practice.

The following sections elucidate how to ensure a seamless and secure experience for end users without necessitating a double-login process (i.e., logging into the parent portal and then separately into the embedded DronaHQ app).

:::info Disable public access

You can securely embed the DronaHQ app without toggling on the Public Access property for obvious reasons. Since this is a secure embed, to maintain the secure nature of the app, the public access can be switched OFF.

:::

When integrating DronaHQ into your web application and ensuring both utilize the same Identity Provider (IDP), users may encounter a double Single Sign-On (SSO) process. Initially, they would SSO into the web application and then again into the embedded DronaHQ app. However, to enhance user experience and avoid this redundancy, you have the option to configure DronaHQ to automatically sign the user in with SSO. In this setup, instead of displaying a separate login screen, DronaHQ will seamlessly authenticate the user if they already have an existing, authenticated session on the IDP. This streamlines the process and eliminates the need for repeated logins, providing a more efficient and user-friendly experience.

It is a 2 step process:
- **Generate an SSO token** - Make a cURL request into DronaHQ to generate a unique access token for each user
- **Embed the app web component** - Embed the web-component in any of your login walled portal

[Detailed step by step guide to using secure embed](../secure_embed)

:::info Message passing in secure embeds

You can also the realtime message passing framework even with secure embeds. You just need to be sure of using the iframe DOM reference that gets initialized for the web component thats used.

:::

<figure>
  <Thumbnail src="/img/public-embed/step-1-token.png" alt="Token generation" width='100%'/>
  <figcaption align = "center"><i>Step 1 - Generate SSO token</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/public-embed/step-2-embed.png" alt="Code embed" width='100%'/>
  <figcaption align = "center"><i>Step 2 - Embed the App web component</i></figcaption>
</figure>

## Pass message from parent to embed app

DronaHQ provides 2 ways in which the parent app can pass data to the embedded app.

- [Auto-relay query params](../public_and_embed_sharing_options/#auto-relay-query-params-to-public-embeds) - Uses the query params and app will auto-reload
- [Real-time message passing framework](../public_and_embed_sharing_options/#real-time-message-passing-framework) - Uses the postMessage way to pass data

### Auto-relay query params to public embeds 

Though you can set up query params and pass data to the iframes using it, there might be dynamic usecases where your iframe embeds wont have static query params or values. In which case you might want to read the query params from the parent app or website and auto-relay them to the embedded iframe. You can access the website tracking code by navigating to `Sharing -> Embed configurations -> Set up tracking` and copy paste this tracking code in your parent website footer. 

:::caution Query params

Everytime this code runs, the iframe will reload. Incase you want realtime data passing between the parent and embed app, you can use the real time message passing framework. 

:::

<figure>
  <Thumbnail src="/img/public-embed/auto-relay-params.png" alt="Auto relay params" width='100%'/>
  <figcaption align = "center"><i>Auto-relay parent query params</i></figcaption>
</figure>

### Real-time message passing framework

DronaHQ also supports usecases where the parent web apps can pass data to the embed app realtime without refreshing or reloading the embedded app. DronaHQ internally leverages on the PostMessage feature available on the browsers to relay these messages realtime from the parent to the embed app. This framework has been effectively used even in POS machines where every new product scanned is passed as a message to the embedded app built on DronaHQ.

Its essentially a 3 step process to integrate this in your app:
- **Adding JS script in your parent app** - Add this script to the header of your parent app.
- **Initialize plugin** - In order to initialize the Library, you need to pass the iframe DOM reference to DronaHQ.init method after Iframe is loaded.
- **Send data** - DronaHQ.sendMessage function is used to send the Data from parent to the embedded micro app. Data is in JSON format in which each key of that object represent data variable in the embedded micro app and the values of those keys will be set to respective data variables.

<figure>
  <Thumbnail src="/img/public-embed/add-script.png" alt="add script" width='100%'/>
  <figcaption align = "center"><i>Step 1: Add script to parent page</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/public-embed/initialize-plugin.png" alt="Initialize plugin" width='100%'/>
  <figcaption align = "center"><i>Step 2: Initialize plugin with iframe DOM reference</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/public-embed/send-data.png" alt="Send data" width='100%'/>
  <figcaption align = "center"><i>Step 3: Send data in JSON</i></figcaption>
</figure>