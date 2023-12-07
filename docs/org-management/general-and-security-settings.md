---
sidebar_position: 5
title: General and security settings
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# General and security settings

DronaHQ has 5 sections in `Account Settings -> General & Security` settings:
- [Device and user restrictions for mobile apps](../general-and-security-settings/#device-and-user-restrictions-on-mobile-app) - You can configure different restrictions for securing the access on the mobile apps.
- [Builder and API IP restrictions](../general-and-security-settings/#creator-portal-and-api-level-ip-restrictions) - You can whitelist IP addresses for accessing DronaHQ `creator portal` and admin level APIs.
- [Customize end user portal homescreen](../general-and-security-settings/#customizing-end-user-portal-homescreen) - You can customize the homescreen of the `end-user portal` and toggle ON/OFF different features.
- [Account settings](../general-and-security-settings/#general-account-settings) - You can configure account level settings like timezone, support URLs and emails and other privacy urls.
- [Audit logging](../audit-logs/) - You can turn ON/OFF audit logging features in DronaHQ. 

:::caution Please Note

You you need to have admin or owner level privileges to access or modify these configurations.

:::

<figure>
  <Thumbnail src="/img/org-management/general-settings.png" alt="General Settings" width='100%'/>
  <figcaption align = "center"><i>General and Security settings</i></figcaption>
</figure>

## Device and user restrictions on mobile app

In this section you can configure the following properties
- **Device Security**
    - **Allow Rooted and Jailbroken Devices** - If you toggle off this property, your end-users on jailbroken or rooted devices wont be able to login into the end-user portal mobile app.
    - **Login Session Expiry (In Days)** - The end-user will automatically log out of the mobile app after the specified days. 
    - **Enforce Passcode Policy** - You can enable mpin based passcode policy for the end-users. They will be asked to set up an mpin at the start.
        - **Passcode Timeout Interval (In Minutes)** - This allows end-users to access the app without the mpin for specified minutes in a session.
        - **Enable Biometric** - This allows end-users to access the end-user portal mobile app without a custom mpin and via a choice of biometrics.
- **Screenshot restrictions**
    - **Allow Screenshot (Android)** - This will restrict your end-users from taking a screenshot on their android mobile app.
    - **Enable Logging** - Screenshot attempts are logged at DronaHQ end (available on request)
    - **Capture Screenshot** - Screenshots taken on iOS devices can be captured at DronaHQ end (available on request)
- **User restrictions**
    - **Per User Device Limit** - Restrict the number of different unique mobile devices that a particular end-user can login from. 
    - **Display User Profile** - Enable/Disable user profile to be shown on the end-user portal. 

:::caution Please Note

Except for the user profile property, all other properties are applicable only on the DronaHQ mobile app or custom white branded mobile app flavors generated from the DronaHQ mobile app for end-users.

:::

<figure>
  <Thumbnail src="/img/org-management/mobile-restrictions.png" alt="Mobile restrictions" width='100%'/>
  <figcaption align = "center"><i>Mobile and User restrictions</i></figcaption>
</figure>

## Creator portal and API level IP restrictions

In this section you can restrict your owner, admin and creators to access the DronaHQ `creator portal` from specific whitelisted IP addresses. You can also restrict specific account level API access from different IP addresses. 

:::caution Please Note

IP restrictions will work only on DronaHQ cloud edition.

:::

<figure>
  <Thumbnail src="/img/org-management/IP-restrictions.png" alt="IP restrictions" width='100%'/>
  <figcaption align = "center"><i>Creator portal and API IP restrictions</i></figcaption>
</figure>

## Customizing end user portal homescreen

DronaHQ offers a way in which the end-user portal in some cases can be switched to a specific app. You can select the app from a list and this will enable your end-users to directly land on that particular app. The default DronaHQ home screen where you see the catalog of apps will be completely skipped. 

:::caution Please Note

All the DronaHQ features which have an effect on the homescreen of the `end-user portal` like app catalogs etc. will not be functional when you enable this feature.

:::

<figure>
  <Thumbnail src="/img/org-management/custom-home.png" alt="Custom home" width='100%'/>
  <figcaption align = "center"><i>Custom homescreen</i></figcaption>
</figure>

## General account settings

Since the end-users would be from the specific organization its important that DronaHQ provides a way in which you can customize the privacy policy, support email and support URLs to your own which will be seen at different sections in the product. 

<figure>
  <Thumbnail src="/img/org-management/account-config.png" alt="Account configuration" width='100%'/>
  <figcaption align = "center"><i>Account configuration</i></figcaption>
</figure>