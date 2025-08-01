---
sidebar_position: 1
title: Remove Geofence
---

import Thumbnail from '@site/src/components/Thumbnail';


The Remove Geofence action allows users to remove the geofences added in native Android/iOS mobile app.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/remove-geofence/remove-geofence.png" alt="Remove Geofence Action" />
<figcaption align='center'><i>Remove Geofence Action</i></figcaption>
</figure> 

1. Navigate to `Native` in your action flow and select the `Geofence` task.  
2. Configure the following options in the Action Configuration section:  
   - Type : Choose type `Remove All` or `Remove by Id`.
   - Remove by Id : Enter id of geofence to be removed.  
3. Save your configuration.



### Configuration Overview  


| Configuration Field | Description                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------- |
| Type           | `Remove All` or `Remove by Id`            |
| Remove by Id        | Id of geofence to be removed.        |

:::info NOTE
### Geofence Limit

`Type`
`Remove All`   - Removes all the geofence id created in the current micro app <br />
`Remove by Id` - Removes the existing geofence by its id in the current micro app

In type, RemoveAll is selected then remove by id parameter is ignored.

:::

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/remove-geofence/remove-geofence-config.png" alt="Remove Geofence Action Configuration" />
<figcaption align='center'><i>Remove Geofence Action Configuration</i></figcaption>
</figure>