---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Set up Branding

DronaHQ offers a powerful custom branding feature that enables app builders to personalize their DronaHQ `end-user portal` with their unique logo and color palette. This feature ensures that your end-users enjoy a seamless and familiar experience, as the login screen reflects your company's branding. This feature can be accessed from `Account settings -> Domain & Branding`

:::info Please Note

Branding is only available on [Business plan](https://www.dronahq.com/pricing) of DronaHQ.

:::

## Branding configurations

Setting up the branding configuration in DronaHQ is pretty simple, all you need is a `logo`, `favicon` and a few `colors` in the palette and your `end-user portal` will start looking like your own.

<figure>
  <Thumbnail src="/img/org-management/brand-config.png" alt="Branding configuration" width='100%'/>
  <figcaption align = "center"><i>Branding configuration screen</i></figcaption>
</figure>


|  Property | What it does |
|  --- | --- |
| Keep DronaHQ Branding | This toggle enables you to switch OFF or ON the DronaHQ branding on the public and the embedded links of your microapps. |
| Page Title | This will be the page title of your browser tab. |
| Page Description | This will be seen in the description when you share the link.  |
| App Icon | This will be seen on the login screen as well as on the top bar of the home screen of your `end-user portal`. |
| Favicon | This will be seen on the browser tabs. It requires a 32x32 favicon compatible file. |
| Primary Color | This will be applied on the login button, hyper links. |
| Background Color | This will be seen on the background of the login screen of your `end-user portal`. |
| Button Font Color | This will be the font color on the login button of your `end-user portal` login screen. |
| App Name | This will be the main app name your `end-user portal` home screen. |
| About the App | This will be seen in the about us section of your `end-user portal`. |

Once your changes are done and the preview on the right side looks good, click the `Save` button to save your configurations and check the end user portal on your subdomain or custom domain. 
<br></br>

:::info Self-hosted exclusive

For the self-hosted instance the `Creator Portal` is also custom branded in the similar fasion as the `End-user Portal`. In the cloud version only the `End-user Portal` will be custom branded.

:::

## Sample screens

When you set up these configurations, you will see your login and home screen as below:

<figure>
  <Thumbnail src="/img/org-management/login-screen.png" alt="Login screen of DronaHQ end-user portal" width='100%'/>
  <figcaption align = "center"><i>Login screen of DronaHQ end-user portal</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/org-management/home-screen.png" alt="Home screen of DronaHQ end-user portal" width='100%'/>
  <figcaption align = "center"><i>Home screen of DronaHQ end-user portal</i></figcaption>
</figure>

:::tip Hat tip

You can also customize the email templates of all system generated emails in `Account Settings -> Integrations -> Email templates` to go one level up in customizing your branding. Also The colors that are set up will reflect in other sections of the end-user portal as well. 

:::