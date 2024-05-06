---
sidebar_position: 1
title: Data Insights with DronaHQ and Google Tag Manager Integration
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';

In today's data-driven world, understanding user behavior is crucial for success. For low-code app developers using DronaHQ, integrating with Google Tag Manager (GTM) unlocks a treasure trove of user insights. This dynamic duo empowers you to track user interactions, optimize app experiences, and gain valuable data for informed decision-making.

## Getting Started

### Creating account in Google Tag Manger

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


### Integrating Google Tag Manager with DronaHQ Apps 

Adding Google Tag Manager (GTM) to your DronaHQ app is a straightforward process:

1. Open the specific DronaHQ app where you want to integrate GTM.
2. Within the app's settings, look for the option labeled `Custom Scripts`.
3. Under `Tag Scripting` or a designated section, paste the provided GTM head and body scripts.
4.  Ensure you save the script integration for the changes to take effect.

<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-scriptdq.jpeg" alt="Installing GTM scripts in a DronaHQ App" />
  <figcaption align = "center"><i>Installing GTM scripts in a DronaHQ App</i></figcaption>
</figure>

## Understanding Tags and Triggers Google Tag Manager

GTM presents an array of tags tailored to specific tracking needs. GTM like a toolbox for website/app tracking.
* Tags: These are the tools themselves. GTM offers various tags for different tracking needs, such as Google Analytics, Google Ads, or custom HTML tags.
* Triggers: These act like the triggers on those tools. They define when a specific tag fires (activates) to collect data. Common triggers track events like page views, app initialization, button clicks, form submissions, or video plays.

### Triggering a Custom HTML tag from the App

#### Custom HTML Tag Configuration:
To initiate this custom event, we'll start by crafting a tag configuration with a custom HTML snippet in Google Tag Manager.
From `Tags > New > Tag Configuration > Custom HTML (custom)`:

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
Next, we'll establish a trigger to activate our custom event. We'll utilize a trigger type of Custom Events with the event name `btn_click`, set to fire on all custom events.

<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-trigger1.jpeg" alt="Custom Event Trigger" />
  <figcaption align = "center"><i>Custom Event Trigger</i></figcaption>
</figure>

#### Practical Implementation in DronaHQ:
Now, let's apply this custom event within the DronaHQ lead generation app. Suppose we've incorporated a JavaScript code block action tied to a button click event:

```javascript
function JSCode(output) {
  if (window.dataLayer) {
    window.dataLayer.push({'event': 'btn_click'});
  }
  return output;
}
```

<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-action1.jpeg" alt="Adding action flow" />
  <figcaption align = "center"><i>Adding action flow</i></figcaption>
</figure>

#### Bringing It All Together:
Imagine a user interacts with the lead generation app, triggering the button click action. This event then activates the custom HTML tag configuration within GTM, prompting the "Mail Sent!" alert. Simultaneously, the custom event trigger is fired, capturing the event data and allowing for further analysis of user interactions.


### Data Insights from the app to Google Analytics

Now that you've integrated GTM with your DronaHQ app, let's explore how to track specific user interactions using custom events. This allows you to analyze valuable data about how users engage with your app.

#### Google Analytics GA4 Event: Tag Configuration


To create the required tag, we'll start by crafting a tag configuration of Google Analytics GA4 Event in Google Tag Manager.
From `Tags > New > Tag Configuration > Google Analytics GA4 Event`:

Configure the Tag:
   - Measurement ID: Enter your GA4 property's Measurement ID (found in your GA4 settings).
   - Event Name: Give your custom event a clear and descriptive name (e.g., `button_click`). This helps you understand what the event represents in your reports.
   - Event Parameters (Optional): Add additional details to enrich your data. For instance, if the event tracks a button click, you could include a parameter like `button_text` with the actual button text.


<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-ga4.jpeg" alt="Adding Google Analytics GA4 Event" />
  <figcaption align = "center"><i>Adding Google Analytics GA4 Event</i></figcaption>
</figure>


:::caution IMPORTANT

Ensure that you've established a data stream from Google Analytics via its administrative section. During the setup process for the data stream, you'll be prompted to furnish the website link corresponding to your DronaHQ app.

To procure this link, first, `Publish` your app, and then retrieve its public URL. Navigate to the console of your app where you'll discover an `iframe` tag containing a URL similar to: `https://microapp.dronahq.com/prod/your_app_name/index.html`



<figure>
  <Thumbnail src="/img/building-apps-guides/google-tag-manager/google-tag-manager-analyticsDetails.jpeg" alt="Google Analytics Data Stream Details" />
  <figcaption align = "center"><i>Google Analytics Data Stream Details</i></figcaption>
</figure>

Simply copy this URL and designate it as the `Stream URL` for your Google Analytics data stream.
:::

#### Custom Event Trigger:

Next, we'll establish a trigger to activate our custom event. We'll utilize a trigger type of Custom Events with the event name `send_info`, set to fire on all custom events.


#### Practical Implementation in DronaHQ:
Now, let's apply this custom event within the DronaHQ lead generation app. Suppose we've incorporated a JavaScript code block action tied to a button click event:

```javascript
function JSCode(output) {
  if (window.dataLayer) {
    window.dataLayer.push({'event': 'send_info'});
  }
  return output;
}
```

#### Bringing It All Together:

Imagine a scenario where a user engages with a travel website, specifically interacting with a form labeled "send_info." Upon completing and submitting this form, the website processes the provided information, potentially sending an email confirmation to the user. Concurrently, a custom event is triggered, capturing the user's interaction with the "send_info" form. This captured event data serves as valuable insight, enabling analysis of user engagement patterns and preferences on the travel website.