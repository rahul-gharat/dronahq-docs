---
sidebar_position: 1
title: Get Address from Coordinates
---

import Thumbnail from '@site/src/components/Thumbnail';


The Get Address from Coordinates action enables users to retrieve an address based on specific latitude and longitude coordinates. This action is available for mobile apps only and is supported on self-hosted v3.4.x and above.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/get-address-from-coordinates/get-address-from-coordinates.png" alt="Get Address from Coordinates Action" />
<figcaption align='center'><i>Get Address from Coordinates Action</i></figcaption>
</figure>

### Steps to Use  

1. Navigate to `Native` in your action flow and select the `Get Address from Coordinates` task.  
2. Configure the following options in the `Action Configuration` section:  
   - `Latitude:` Enter the latitude coordinate or use keywords to dynamically provide the value.  
   - `Longitude:` Enter the longitude coordinate or use keywords to dynamically provide the value.  
   - `Max Result:` Specify the maximum number of address results to return.  
3. Save your configuration.

### Configuration Overview  

| Configuration Field | Description                                                                                  |
|---------------------|----------------------------------------------------------------------------------------------|
| Latitude        | The latitude coordinate to retrieve the address for. Supports dynamic values using keywords. |
| Longitude       | The longitude coordinate to retrieve the address for. Supports dynamic values using keywords.|
| Max Result      | Specifies the maximum number of results to return. Default is `1`.                           |

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/get-address-from-coordinates/get-address-from-coordinates-config.jpeg" alt="Get Address from Coordinates Action Configuration" />
<figcaption align='center'><i>Get Address from Coordinates Action Configuration</i></figcaption>
</figure>


