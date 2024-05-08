---
sidebar_position: 1
title: Google Tag Manager Integration
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

In today's data-driven world, understanding user behavior is crucial for success. For low-code app developers using DronaHQ, integrating with Google Tag Manager (GTM) unlocks a treasure trove of user insights. This dynamic duo empowers you to track user interactions, optimize app experiences, and gain valuable data for informed decision-making.



## Creating account in Google Tag Manger

1. Visit [Google Tag Manager](https://tagmanager.google.com/) and Sign in with your Google account.
2. If you're new to GTM, you'll see a button to `Create Account.` Click that.
3. You'll need to name your account (e.g., your company name) and container (e.g., your website name) and agree to the terms of service.

<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-createacc.jpeg" alt="Create account in GTM" />
  <figcaption align = "center"><i>Create account in GTM</i></figcaption>
</figure>



That's it! Once you have your account and container set up, you can start adding tracking codes and managing your website/app's data collection.

<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-script.jpeg" alt="GTM installation scripts" />
  <figcaption align = "center"><i>GTM installation scripts</i></figcaption>
</figure>


## Integrating Google Tag Manager with DronaHQ Apps 

Adding Google Tag Manager (GTM) to your DronaHQ app is a straightforward process:

1. Open the specific DronaHQ app where you want to integrate GTM.
2. Within the app's settings, look for the option labeled `Custom Scripts`.
3. Under `Tag Scripting` or a designated section, paste the provided GTM head and body scripts.
4.  Ensure you save the script integration for the changes to take effect.

<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-scriptdq.jpeg" alt="Installing GTM scripts in a DronaHQ App" />
  <figcaption align = "center"><i>Installing GTM scripts in a DronaHQ App</i></figcaption>
</figure>

#### Tags and Triggers (GTM)

GTM presents an array of tags tailored to specific tracking needs. GTM like a toolbox for website/app tracking.
* Tags: These are the tools themselves. GTM offers various tags for different tracking needs, such as Google Analytics, Google Ads, or custom HTML tags.
* Triggers: These act like the triggers on those tools. They define when a specific tag fires (activates) to collect data. Common triggers track events like page views, app initialization, button clicks, form submissions, or video plays.


DronaHQ supports both custom and default events of GTM, enhancing its versatility for various tracking requirements.

## Triggering Default Event from the App

This example demonstrates setting up a Custom HTML tag in Google Tag Manager (GTM) to display a simple message on every page load. The tag will be triggered by the built-in All Pages trigger.

#### Tag Configuration:
From `Tags > New > Tag Configuration > Custom HTML (custom)`, add below script and save.

```html
<script>
  alert("The changes made will be in real-time affect")
</script>
```

<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-tag2.jpeg" alt="Custom HTML Tag" />
  <figcaption align = "center"><i>Custom HTML Tag</i></figcaption>
</figure>

#### All Pages Trigger:
Next, we'll establish a trigger to ensure our custom HTML tag fires on every page load. We'll leverage the built-in trigger type of All Pages.

In GTM, navigate to Triggers and click New, and under Trigger Configuration, select All Pages.
This pre-configured trigger automatically fires whenever a page loads on your website, making it ideal for tracking events that occur on all pages.


<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-trigger2.jpeg" alt="Custom Event Trigger" />
  <figcaption align = "center"><i>Custom Event Trigger</i></figcaption>
</figure>


:::info NOTE
- Make sure to Submit your GTM changes to be made effective in the app.
- Publish your DronaHQ App and Check it on Public App link or End user portal to see your changes in Action.
:::

####  Bringing It All Together:

<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-example2.png" alt="GTM tag in use." />
  <figcaption align = "center"><i>GTM tag in use.</i></figcaption>
</figure>

With the Custom HTML tag and All Pages trigger configured, whenever a dashboard page loads or updates in real-time, the tag will be triggered, and your chosen notification method will be displayed.

## Triggering a Custom Event from the App

Let's explore the process of triggering a custom GTM tag directly from the DronaHQ App. We'll set up a Custom HTML tag within GTM and configure it with a Custom Event trigger, ensuring it activates from within our application.

#### Tag Configuration:
From `Tags -> New -> Tag Configuration -> Custom HTML (custom)`, Add below script and save.

```html
<script>
  alert("Mail Sent!")
</script>
```


<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-tag1.jpeg" alt="Custom HTML Tag" />
  <figcaption align = "center"><i>Custom HTML Tag</i></figcaption>
</figure>

#### Custom Event Trigger:
Next, we'll establish a trigger to activate our custom event. We'll utilize a trigger type of Custom Events with the event name `sent_mail`, set to fire on all custom events.

<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-trigger1.jpeg" alt="Custom Event Trigger" />
  <figcaption align = "center"><i>Custom Event Trigger</i></figcaption>
</figure>

#### Practical Implementation in DronaHQ:
Now, let's apply this custom event within the DronaHQ lead generation app. Suppose we've incorporated a JavaScript code block action tied to a button click event:

```javascript
function JSCode(output) {
  if (window.dataLayer) {
    window.dataLayer.push({'event': 'sent_mail'});
  }
  return output;
}
```

<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-action1.jpeg" alt="Adding action flow" />
  <figcaption align = "center"><i>Adding action flow</i></figcaption>
</figure>

:::info NOTE
- Make sure to Submit your GTM changes to be made effective in the app.
- Publish your DronaHQ App and Check it on Public App link or End user portal to see your changes in Action.
:::

#### Bringing It All Together:

<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-example1.png" alt="GTM tag in use." />
  <figcaption align = "center"><i>GTM tag in use.</i></figcaption>
</figure>

Imagine a user interacts with the lead generation app, triggering the button click action. This event then activates the custom HTML tag configuration within GTM, prompting the "Mail Sent!" alert. 

