---
sidebar_position: 1
title: Multiview Container
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

# **Multi-View Container**

The **Multi-View Container** is a specialized control designed to display a single, active view from a collection of pre-configured containers. Unlike the `Tabbed Container`, its tabs are not visible to the end-user. The active view is controlled programmatically via a `default` formula or use `radio` option via manual mode, making it ideal for creating dynamic, single-page interfaces or complex, multi-step workflows.



This control is particularly useful for:

  - Building multi-step forms that guide users through a process.
  - Displaying content conditionally based on application state or user data.
  - Creating a unified user experience without the visual clutter of tabs.
  - Grouping complex functionalities within a single container, switching views based on business logic.



## Content

The Multiview Container’s configuration is comprehensive, offering various ways to define and manage its content. 

### Content Configuration

<figure>
  <Thumbnail src="/img/reference/controls/multiview-container/multiview-container.png" alt="tabbed-container" />
</figure>

#### Mode

Expected value:
```json
[
  {
    "value": "home",
    "label": "Home",
    "icon": "icon-home",
    "image": ""
  },
  {
    "value": "features",
    "label": "Features",
    "icon": "icon-organization",
    "image": ""
  },
  {
    "value": "product",
    "label": "Product",
    "icon": "icon-handbag",
    "image": ""
  },
  {
    "value": "admin",
    "label": "Admin",
    "icon": "icon-user-follow",
    "image": ""
  }
]
```

- **Manual:** Allows developers to manually configure the tabs and their corresponding content.
- **Mapped:** Dynamically generate tabs by mapping data from external sources.
- **View Data:** Preview the data being rendered in the tabs to ensure accuracy.



### Add-ons
- **Tooltip:** Add tooltips to provide contextual information about each tab.
- **Description:** Include detailed descriptions for better user understanding.
- **Label:** Customize the labels for each tab such as its size, height, color and alignment.


:::info

In the Multiview Container, If the tab value is altered, then the associated controls will be automatically removed. This is because the system maps controls based on the value key, not the label.  

It is best to:
- First set the tab value and then inject the controls accordingly to ensure they persist.
- Modify the tab label as it is safe and will not affect the controls.  


:::

## Interaction
Interaction settings provide flexibility in handling user actions and input validations.


| Property          | Description  |  
|----------------------|--------------------------------------------------------------|  
| Validation      | Defines rules for user input. `Required`: Marks specific fields or tabs as mandatory. `Read Only`: Restricts users from editing specific tabs or fields. |  
| Submit Data     | Determines when data should be submitted: `Always`: Data is submitted every time. `Never`: Data is never submitted. `Not When Hidden`: Data is submitted only when the field/tab is visible. |  


### Events
- `tab_change`: Trigger custom events or actions when a user switches between tabs.

## Appearance

| Property              | Description  |  
|--------------------------|--------------------------------------------------------------|  
| Visibility          | Controls the visibility of the entire container or specific tabs. |  
| Box Shadow          | Adds a shadow effect to enhance the container’s depth and visual appeal. |  
| Background         | Controls the container’s background such as Size, Weight, Color, Background Color, Opacity, and more. |  
| Border             | Defines the container’s border styling: Border such as Sets border visibility, Width, Style of the  border as solid, dashed, or dotted styles, Color, Radius, and  more. |  




## Advanced Settings
For power users and developers, the advanced settings offer additional control over the Tabbed Container.

- External CSS
Inject custom CSS styles for granular control over the design and behavior of the tabs.

- Trigger Dependents
Set up dependent actions or triggers based on user interactions with the tabs.

- Caching
Enable caching to store data locally and improve app performance.


## Control Outputs

The outputs from the Tabbed Container control, represented by the placeholder `{{tabbedcontainer}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.



| Output | Description |
| --- | ---|
| tabbedcontainer | Represents the user-selected value from the selected options of the Tabbed Container control. |


