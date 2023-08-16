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



## Control Outputs

The outputs from the GPS control, represented by the placeholder `{{gps}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output       | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| gps    | Represents the longitude and latitude values as a string from  the GPS control.                        |