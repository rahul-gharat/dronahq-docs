---
sidebar_position: 1
title: Advance Map
---

import Image from '@site/src/components/Image'; import VersionedLink from '@site/src/components/VersionedLink'; import
Thumbnail from '@site/src/components/Thumbnail';


The Advanced Map Control in DronaHQ allows users to search for and navigate to specific locations, as well as mark and store coordinates. It provides an interactive map interface for enhanced location-based functionality in your applications.

<figure>
  <Thumbnail src="/img/reference/controls/adv-map/preview.jpg" alt="Advance Map" />
  <figcaption align = "center"><i>Advance Map</i></figcaption>
</figure>

This advance map is useful to mark multiple coordinates using various available tools. This control also can handle an array of objects as data in the bind data section.

## Binding Data Options

There are different ways to bind data to the Advance Map control. There are different ways in which you can bind data to the control.

:::info

To bind data in the Advance Map control, the array of objects should include at least two keys: "type" and "coordinates". The "type" key should correspond to one of the available tools in the control, such as polyline, polygon, rectangle, circle, marker, or circlemarker. This ensures that the data is properly recognized and rendered in the control.

:::

### Static Data Option

To display static options in the Advance Map control, you can use the Bind Data option. The Bind Data option must be specified as an array of objects. For example:

```js

[
    {
        "type_columns": "polygon",
        "coords_colms": [
            [37.027806488554226, -109.07024512949624],
            [26.3609046933067, -108.45509635025923],
            [26.518303305297817, -97.90968870619635],
            [36.746614738361394, -100.19452702907665]
        ]
    }
]

```


## Properties


| Property       | Description                                                                                                                           |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Type           | Select the column that defines the type of tool to be used when binding data to the control.                                          |
| Coordinates    | Select the column that defines the coordinates for the map to be used when binding data to the control.                                |
| Radius         | Select the column that defines the radius of the circle for circle type marking tools on the map when binding data to the control.    |
| Allow Editing  | Enable or disable the option for users to edit points and coordinates on the map.                                                      |
| Edit Options   | Select from a list of tools including polyline, polygon, rectangle, circle, marker, and circlemarker to mark coordinates/areas on the map. |


:::tip
If you switch to the Advance editor option, you will have an additional property for your advance map control.

| Property       | Description                                                                                                                           |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Map Height |This option lets you set the height of the map in pixels.|

:::

## Available control tools


| Tool             | Description                                                                                                                                                                    |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Draw a polyline  | Draw lines on the map by selecting different points. Returns an array of objects with the type as polyline and coordinates as latitude and longitude of each point.               |
| Draw a polygon   | Draw polygon shapes on the map by selecting different points. Returns an array of objects with the type as polygon and coordinates as latitude and longitude of each point/side. |
| Draw a rectangle | Draw rectangle shapes on the map by dragging a rectangle of the desired size. Returns an array of objects with the type as rectangle and coordinates as latitude and longitude.      |
| Draw a circle    | Draw circle shapes on the map by dragging a circle of the desired size. Returns an array of objects with the type as circle, coordinates as latitude and longitude, and radius.    |
| Draw a marker    | Place markers on the map at desired locations. Returns an array of objects with the type as marker and coordinates as latitude and longitude.                                    |
| Draw a circlemarker | Draw circle shapes on the map of a fixed size. Returns an array of objects with the type as circle, coordinates as latitude and longitude, and a fixed radius.                  |
| Edit Layers      | Edit existing coordinates and markers on the map.                                                                                                                              |
| Delete Layers    | Delete features (markers, coordinates, or marked areas) from the map.                                                                                                          |


## Control Outputs

The outputs from the Advance Map control, represented by the placeholder `{{map}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.

| Output  | Description                                                                                          |
|---------|------------------------------------------------------------------------------------------------------|
| map   | Represents the selected value from the Advance Map control, indicating the user's chosen area using various tools.      |

:::info
The output data type from the Advance Map control includes the tool name and all the coordinates of the points marked on the map using various tools. It provides comprehensive information about the marked points.
:::

## Events

| Trigger                   | Description                                                                             |
|--------------------------|-----------------------------------------------------------------------------------------|
| value_change                | Occurs when there is a modification in the Advance Map control's value. To control the frequency or speed of the change event, you can utilize the `debounce` property associated with the control. |
| focus_out       | Occuts when the control loses focus, typically when the user clicks outside the control. It allows you to perform actions or handle specific behavior when the focus is no longer on the element. |