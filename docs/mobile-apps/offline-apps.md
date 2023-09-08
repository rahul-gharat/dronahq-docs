---
sidebar_position: 6
---

import Thumbnail from '@site/src/components/Thumbnail';

# Offline apps

Offline apps in DronaHQ provide the ability for users to access and interact with the application even when they are not connected to the internet. This feature ensures uninterrupted usability and enhances user experience in scenarios where internet connectivity is limited or unreliable. Offline apps are supported by DronaHQ End user portal - `Android` and `iOS` Mobile App.

## Caching Data
 
When you are binding remote data to a control, you have an option to Cache that data at control level. To enable caching, `Select Control -> Property -> Under Generic, Enable Caching`. This toggle will ensure that when remote data is fecthed to a control, it will get cached in local device's `KV Storage` which leverages Native Mobile device's capability. It is important that atleast once, the data should be return when online. So, when device is offline next time, the control will load data from previously stored local data thereby improving performance of the app.

## Offline support in Actionflow blocks

You can run actionflow blocks even when device in offline. DronaHQ provides configurations for offline scenarios, so that you can build your app logic accordingly.


### Allow Offline

All server side actionflow blocks has `Allow Offline` toggle. If you `enable` this toggle than `Don't wait for response` toggle gets activated. When this `Don't wait for response` toggle is enabled, the next actionblock gets executed without waiting for output of the current actionblock causing it to run parallely.
`Allow Offline` toggle when enabled, at a time of executing this task, DronaHQ will cache the server-side call locally when device is `offline` and will execute it next time when device is Online and App is launched.

:::info PLEASE NOTE

When `Allow Offline` toggle is enabled:
1. Output of the current block shouldn't be used in subsequent tasks.
2. On-Screen actions will be skipped if actionflow gets executed when device is in offline mode.
3. File upload using `upload file` action or `AWS S3` connector isn't supported in offline mode.

:::


### Keyword - MODE

DronaHQ provide `MODE` keyword that has value either `online` when device is connected to internet or `offline` when device is not connected to internet.

### Sample Usage

The ideal case to build the action flow for offline submission is to maintain two branches for – `ONLINE` and `OFFLINE` mode.



- Online Branch - This branch will be in action when the device is online. Below is the condition of this `ONLINE` branch:


   ```js
    {{MODE=='online'}}
   ```

<figure>
  <Thumbnail src="/img/mobile-apps/offline-apps-branch-online.png" alt="Online Branch" />
  <figcaption align = "center"><i>Online Branch</i></figcaption>
</figure>

- Offline Branch - This branch will be in action when the device is offline and device type isn't `web` i.e. either `Android` or `iOS`. Below is the condition of this `OFFLINE` branch:


   ```js
     {{MODE=='offline' && DEVICETYPE !== 'web'}} 
   ```

<figure>
  <Thumbnail src="/img/mobile-apps/offline-apps-branch-offline.png" alt="Offline Branch" />
  <figcaption align = "center"><i>Offline Branch</i></figcaption>
</figure>


The purpose of this branching is to define different execution flow when device is online and when device is offline. This is done so, since when you enable offline submission under the OFFLINE branch, the on-screen actions will be skipped.

You can add the desired server-side action under the ONLINE branch followed by on-screen actions. The alert responses (of error and success leg) you are seeing in the below image, are generally the response we get from any API call. Similarly, add the desired server-side action under the OFFLINE branch with no on-screen actions. While adding the server-side action for block inside offline branch leg, enable the toggle button of `Allow Offline`.

<figure>
  <Thumbnail src="/img/mobile-apps/offline-apps-branch.png" alt="Offline Branch Usecase" />
  <figcaption align = "center"><i>Offline Branch Usecase</i></figcaption>
</figure>

:::info PLEASE NOTE

This feature is specifically designed for mobile apps.

:::


## Variable - Persistent

You can add `Data Query` of type `Variable` which are `persistent`. To add Persistent Variable, Go to `DronaHQ -> App -> Data Queries -> + New -> Variable -> Enable Persistent Toggle`.
`Persistent Variable` will retain their values across multiple App launches. So if you exit any App and reopen it later, the persistent variables would get the last saved value. These are useful in scenarios where you want to design your app to support offline access.

For example, you can add Persistent Variable to maintain the session id across multiple app launches, its value would not be reset, and they would get the last saved values.

## Conclusion

Offline apps in DronaHQ empower businesses and organizations to create robust and reliable applications that work seamlessly even when disconnected from the internet. By ensuring data synchronization and providing uninterrupted access to critical features, offline apps enhance productivity and user satisfaction. Whether it's field service management, sales and order processing, data collection, or logistics, offline apps offer a valuable solution for users who require continuous access to the app's functionalities, regardless of their location or internet connectivity.




