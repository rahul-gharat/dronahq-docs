---
sidebar_position: 1
title: Get Coordinates from Address
---


import Thumbnail from '@site/src/components/Thumbnail';

The Get Coordinates from Address action allows users to retrieve geographical coordinates (latitude and longitude) based on a given address. This action is available for mobile apps only and is supported on self-hosted v3.4.x and above.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/get-coordinates-from-address/get-coordinates-from-address.png" alt="Get Coordinates from Address Action" />
<figcaption align='center'><i>Get Coordinates from Address Action</i></figcaption>
</figure>

### Steps to Use  

1. Navigate to `Native` in your action flow and select the `Get Coordinates from Address` task.  
2. Configure the following options in the `Action Configuration` section:  
   - `Address:` Enter the address or use keywords to dynamically provide the value.  
   - `Max Result:` Specify the maximum number of coordinate results to return.  
3. Save your configuration.

### Configuration Overview  

| Configuration Field | Description                                                                                 |
|---------------------|---------------------------------------------------------------------------------------------|
| Address         | The address to retrieve the coordinates for. Supports dynamic values using keywords.        |
| Max Result      | Specifies the maximum number of results to return. Default is `1`.                          |

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/get-coordinates-from-address/get-coordinates-from-address-config.jpeg" alt="Get Coordinates from Address Action Configuration" />
<figcaption align='center'><i>Get Coordinates from Address Action Configuration</i></figcaption>
</figure>

