---
sidebar_position: 1
title: GPS
---

import VideoEmbed from "@site/src/components/VideoEmbed";
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The GPS control is used to get the current location of the user’s device. You need to enable GPS Location to use this control on the app. This might be useful in apps like the Site Inspection app where the user’s location can be noted to see if they are at site location when performing the inspection.

<figure>
  <Thumbnail src="/img/reference/controls/gps/preview.png" alt="GPS" />
  <figcaption align = "center"><i>GPS</i></figcaption>
</figure>



:::note TIP


DronaHQ provides a built-in GPS control to fetch location coordinates. However, if you need more flexibility, you can also use JavaScript within a JS Code block to retrieve location data programmatically.  

<figure>
  <Thumbnail src="/img/reference/controls/gps/js.png" alt="GPS" />
  <figcaption align = "center"><i>Location JS -Code</i></figcaption>
</figure>

#### JavaScript Code to Get GPS Coordinates  

```javascript
  function getLocation() {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
            },(error) => {
           reject(error);
          }
        );
      });
  }
  output = await getLocation();
```

#### Code Explanation  

This function uses the browser's `navigator.geolocation.getCurrentPosition()` method to fetch the current location asynchronously. It returns a Promise that either resolves with the position data or rejects in case of an error.  

#### Sample Output  

```json
{
  "timestamp": 1742812489191,
  "coords": {
    "accuracy": 1529.4395985928138,
    "latitude": 22.4571189,
    "longitude": 88.411294,
    "altitude": null,
    "altitudeAccuracy": null,
    "heading": null,
    "speed": null
  }
}
```

This approach allows you to fetch real-time location data dynamically within DronaHQ.
:::


## Control Outputs

The outputs from the GPS control, represented by the placeholder `{{gps}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| gps    | Represents the longitude and latitude values as a string from  the GPS control.                        |