---
sidebar_position: 1
title: Live Interaction
toc_min_heading_level: 2
toc_max_heading_level: 4
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


The **Live Interaction** feature provides an interactive, in-builder experience for developers. Instead of constantly switching to preview mode to see how actions and data updates affect the user interface, you can now toggle a setting to see real-time changes as you build. This significantly speeds up the development and debugging process.

### How it works

When Live Interaction is enabled, the DronaHQ builder behaves like the preview. Actions you've configured, such as setting control properties, navigating between pages, or triggering other actions, will execute immediately in the builder.




### Enabling and Disabling Live Interaction

You can easily toggle this feature on or off. The control is typically represented by a **pencil icon** or a similar symbol in the builder's toolbar.

#### Interaction States

The feature has three main states, indicated by the icon:

<figure>
  <Thumbnail src="/img/ui-builder/live-interaction/states.png" alt="Live Interaction States." width="400px"/>
  <figcaption align = "center"><i>Live Interaction States</i></figcaption>
</figure>


| State                | Description                                                                                      |
|---------------------|--------------------------------------------------------------------------------------------------|
| **Live Interaction on** | The feature is active. The builder environment will respond to actions and data changes in real-time. |
| **Button Click off**| Button clicks are inactive, but controls like `textinput`, etc., still work.
| **Live Interaction off**   | Live interaction is disabled for that specific control only.                                     |

:::note
 Live Interaction will be deployed in a staggered manner. If you wish to use this feature for a specific control that is not yet enabled, please raise a support request.
:::

### Supported Actions and Limitations

While Live Interaction offers powerful in-builder testing, certain actions are either **not supported** or behave differently to ensure a stable and consistent builder experience.

#### Actions that will not work

The following actions are designed for the **deployed app** and will **not execute in the builder environment**. A small toast message will be displayed to inform you that the action cannot be performed:

- `microAppNav`
- `exitApp`
- `logout`
- `closeOverlayScreens`
- `redirectParentWindow`
- `setRoutingUrl`
- `nativeActions` (e.g., `flashlight`, `writeNFCtag`, `openFile`, `readFile`, `writeFile`, `call`, `sms`, `whatsapp` related, `startGps`, `stopGps`, `addGeofence`, `getGeofence`, `removeGeofence`)
- `mpinVerify`
- `changeLanguage` *(Localization is not supported in the builder)*
- `detectEnterPress`
