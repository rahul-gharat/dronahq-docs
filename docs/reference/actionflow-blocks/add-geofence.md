---
sidebar_position: 1
title: Add Geofence
---

import Thumbnail from '@site/src/components/Thumbnail';


The Add Geofence action allows users to monitor circular geofences using Android/iOS mobile app. The purpose is to notify user if crossing the boundary of the monitored geofence in native Android/iOS mobile app.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/add-geofence/add-geofence.png" alt="Add Geofence Action" />
<figcaption align='center'><i>Add Geofence Action</i></figcaption>
</figure> 

1. Navigate to `Native` in your action flow and select the `Add Geofence` task.  
2. Configure the following options in the Action Configuration section:  
   - Id : Enter unique identifier for geofence.  
   - Latitude : Enter geo latitude of geofence.  
   - Longitude : Enter geo longitude of geofence.
   - Radius : Enter radius of geofence in meters.  
   - Transition Type : Choose transition type `Enter` or `Exit` or `Both`.
   - Notification Id : Enter id of notification.  
   - Notification Title : Enter title of notification.  
   - Notification Text : Enter text of notification.  
   - Small Icon : Enter small icon showed in notification area, only res URI.  
   - Icon : Enter icon showed in notification drawer.  
   - Open App On Click : Select `true` or `false` to open app after clicking on notification.  
   - Data : Enter custom object associated with notification.  
3. Save your configuration.



### Configuration Overview  

| Configuration Field       | Platform       | Description                                                                                       |
|---------------------------|---------------|---------------------------------------------------------------------------------------------------|
| id                        | Android, iOS          | A unique identifier of geofence. |
| latitude                  | Android, iOS          | Latitude of geofence. |
| longitude                 | Android, iOS          | Longitude of geofence. |
| radius                    | Android, iOS          | Radius of geofence in meters. |
| transition type           | Android, iOS          | Select `Enter` or `Exit` or `Both` to determines when your app should be notified about geofence boundary crossings  |
| notification id           | Android only          | optional should be integer, id of notification |
| notification title        | Android only          | Title of notification |
| notification text         | Android only          | Text of notification |
| Small Icon                | Android only          | Small icon showed in notification area, only res URI |
| icon                      | Android only          | Icon showed in notification drawer |
| open app on click         | Android only          | Is main app activity should be opened after clicking on notification |
| data                      | Android, iOS          | Custom object associated with notification eg. {building: "Building 43",floor: "2"}. |

:::info NOTE
### Geofence Limit

There are certain limits of geofences that you can set in your application depends on the platform of use.

iOS - 20 geofences <br />
Android - 100 geofences
:::

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/add-geofence/add-geofence-config.png" alt="Add Geofence Action Configuration" />
<figcaption align='center'><i>Add Geofence Action Configuration</i></figcaption>
</figure>