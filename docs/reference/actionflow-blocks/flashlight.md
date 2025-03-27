---
sidebar_position: 1
title: Flashlight
---

import Thumbnail from '@site/src/components/Thumbnail';


The Flashlight action allows users to control the device's flashlight within their app workflows. It provides options to turn the flashlight on or off and adjust the intensity (available only on iOS).

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/flashlight/flashlight.png" alt="Flashlight Action" />
<figcaption align='center'><i>Flashlight Action</i></figcaption>
</figure> 

1. Navigate to `Native` in your action flow and select the `Flashlight` task.  
2. Configure the following options in the Action Configuration section:  
   - Flashlight Mode: Choose between `ON` or `OFF` to control the flashlight.  
   - Flashlight Intensity (iOS only): Select the intensity level (`HIGH`, `MEDIUM`, `LOW`) for iOS devices.  
3. Save your configuration.



### Configuration Overview  

| Configuration Field       | Description                                                                                       |
|---------------------------|---------------------------------------------------------------------------------------------------|
| Flashlight Mode        | Enables or disables the flashlight (`ON` or `OFF`).                                              |
| Flashlight Intensity   | Adjusts the flashlight brightness. This option is available only on iOS devices (`HIGH`, `MEDIUM`, `LOW`). |

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/flashlight/flashlight-config.jpeg" alt="Flashlight Action Configuration" />
<figcaption align='center'><i>Flashlight Action Configuration</i></figcaption>
</figure>