---
sidebar_position: 1
title: Start GPS Location Tracking
---

import Thumbnail from '@site/src/components/Thumbnail';

Start GPS Location Tracking allows app to continuously track the device's geographical location, even when the app is in the background or the device is in sleep mode.

:::info NOTE
Support is available only in Android and iOS apps. This action is not applicable for preview and is functional only in the published app. Additionally, Android versions 8.3.34 & above and iOS versions 8.3.27 & above are supported.
:::

### Steps to Use 

 Go to the `Action Builder`. Click `+ Add Action` > `Native > Start GPS Location Tracking`.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/start-gps-location-tracking/start-gps-location-tracking.png" alt="Start GPS Location Tracking" />
<figcaption align='center'><i>Start GPS Location Tracking</i></figcaption>
</figure>



### Parameters for Secure API Call

Here are the key components of the Start GPS Location Tracking action:

| Configuration Field         | Platform | Description                                                                                                                                       |
|----------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Endpoint Url               | Android, iOS     | Server url where to send HTTP POST with recorded locations.                                                                                      |
| Headers                    | Android, iOS     | Optional HTTP headers sent along in HTTP request. Provide Key value pairs ex: {"Content-Type": "application/json"}                              |
| Body                       | Android, iOS     | All wanted location properties have to be prefixed with @. For all available properties check [Location event](https://haylltd.github.io/cordova-background-geolocation-plugin/events#location-event). For Example: {"latitude" : "@latitude", "longitude" : "@longitude", "foo": "bar" } where, @latitude and @longitude will be replace by actual user’s location lat and long respectively while sending api call.                    |
| Desired Accuracy           | Android, iOS     | Determines how precise the location updates should be. <br />Desired Accuracy defaults to High Accuracy.<br /> `High` - GPS + WiFi/Cell `5-20m accuracy`. ex: Ride-sharing, delivery apps. <br />`Medium` - Uses WiFi/Cell towers primarily `20-100m`.<br /> `Low` - Cell towers only `100m-1km`. ex: Weather apps, city-level tracking.<br /> `Passive` - Only receives updates when others request location. Battery-saving mode, background logging.|
| Location Provider          | Android  | Used to obtain location data. Different providers offer different balances of accuracy, battery efficiency, and availability.<br /> Location Provider defaults to Android Distance Filter Provider.<br />  `Android Distance Filter Provider` - `5-50m` Medium-High Accuracy. ex: Delivery apps, ride-sharing, most tracking needs. <br /> `Android Activity Provider` - `10-100m` Variable. ex: Fitness apps, jogging.<br /> `Raw Provider` - `1-5m` Very High. ex: Surveying, specialized apps needing raw GPS. <br />`Fused Provider` - `5-20m` High. ex: Most modern location-aware apps.                  |
| Stationary Radius          | Android, iOS     | Minimum distance in meters the device must move beyond stationary location for aggressive tracking to engage.<br /> Stationary Radius defaults to 50 meters.<br /> `10–30m` - High Precision tracking (e.g., geofencing, delivery apps).<br />`30–75m` - Urban/suburban tracking.<br />`100–200m` - Fleet tracking or infrequent movement checks.                                  |
| Distance Filter            | Android, iOS     | Minimum distance in meters a device must move before an update event is generated.<br /> Distance Filter defaults to 50 meters. <br />`1–10m` - High-precision tracking (e.g., jogging, surveying). `10–30m` - Urban navigation, ride-sharing, delivery apps .<br />`30–100m` - Fleet tracking, general location updates.<br /> `100m+` - Long-distance travel, battery-saving mode.                                                               |
| Notifications (Optional)             | Android  | Enable/disable local notifications when tracking and syncing locations.                                                                          |
| Notification Title (Optional)        | Android  | Custom notification title in the drawer.                                                                                                         |
| Notification Text (Optional)         | Android  | Custom notification text in the drawer.                                                                                                          |
| Interval                   | Android  | Minimum time interval (ms) between location updates. <br /> When entering Interval defaults to 10000 ms means 10 seconds.                                                                                             |
| Fastest Interval           | Android  | Fastest rate (ms) at which your app can handle location updates. <br />When entering Fastest Interval defaults to 5000 ms means 5 seconds.                                                                                |
| Activities Interval        | Android  | Rate (ms) at which activity recognition occurs. Higher values means fewer detections, better battery. <br />When entering Activities Interval defaults to 10000 ms means 10 seconds.                                                |
| Pause Location Updates     | iOS      | Pauses location updates when app is paused.                                                                                                      |
| Save Battery On Background | iOS      | Switch to less accurate significant changes and region monitory when in background                                                     |


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/start-gps-location-tracking/start-gps-config.png" alt="Start GPS Location Tracking Configuration" />
<figcaption align='center'><i>Native Action - Start GPS Location Tracking Configuration</i></figcaption>
</figure>


### Use Cases
 * Fleet Management - Track vehicles in real-time
 * Fitness Apps - Record jogging/cycling routes
 * Safety Apps - Emergency location sharing
 * Field Service - Technician location monitoring

After configuring the Start GPS Location Tracking action, the app will start tracking the gps location even when user in background. Users can
view the tracking details using configured endpoint url.