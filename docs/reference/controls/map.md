---
sidebar_position: 1
title: Map
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Map control is used to display a geographical map, allowing users to interact with location-based data.

<figure>
  <Thumbnail src="/img/reference/controls/map/preview.png" alt="Map Control" />
  <figcaption align="center"><i>Map Control</i></figcaption>
</figure>


The Map control allows interaction with geographical data and offers event triggers related to map interactions, giving users flexibility in working with the map control. Adjust the content as per specific use cases or property requirements.

## Binding Data Options

The Map control accepts an array of objects in JSON format to display location-based data.

### Options - Data Binding

For instance, if you want to create a Map control displaying specific locations, you can define an array of objects representing locations and their details using the Bind Data option:

```json
[
    {
        "location": "37.7749,-122.4194",
        "name": "San Francisco"
    },
    {
        "location": "34.0522,-118.2437",
        "name": "Los Angeles"
    }
]
```

:::info
Provide valid coordinates and associated location names for accurate map markers.
:::

### Selected Option - Data Binding

To set a default selected location on the Map control, you can use the Bind Data - Selected Option section:

```json

"34.0522,-118.2437"

```

## Properties

| Property          | Description                                           |
|-------------------|-------------------------------------------------------|
| Map Height        | Set the height of the map display in pixels.           |
| Allow to choose location | Enable users to select a location on the map.       |
| Show info on      | Define the action to display location information.     |

## Control Outputs

The outputs from the Map control, represented by the placeholders `{{map_location}}` and `{{map_name}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output         | Description                                    |
|----------------|------------------------------------------------|
| map_location   | Selected location on the map.                   |
| map_name       | Name associated with the selected location.     |

## Events

| Trigger         | Description                                                               |
|-----------------|---------------------------------------------------------------------------|
| Add_location    | Triggers when a new location is added to the map.                         |
| value_select    | Occurs when there is a change in the value of the respective control.     |
