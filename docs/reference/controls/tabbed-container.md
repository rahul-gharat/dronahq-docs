---
sidebar_position: 1
title: Tabbed Container
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Tabbed Container allows developers to organize and display content in a structured, tabbed interface, enhancing user experience by keeping the app's layout clean and intuitive. 

A Tabbed Container is a UI component designed to segregate content into multiple tabs. Each tab acts as a unique section, providing users with the ability to switch between content or functionalities seamlessly. 

<figure>
  <Thumbnail src="/img/reference/controls/tabbed-container/tabbed-container.png" alt="tabbed-container" />
  <figcaption align = "center"><i>Tabbed Container</i></figcaption>
</figure>


It is particularly useful in scenarios where you need to:
- Display grouped information under different categories.
- Build dashboards with different data views.
- Organize forms or settings into sections for better navigation.
- Create multi-step workflows with clear separation between steps.

## Content

The Tabbed Container’s configuration is comprehensive, offering various ways to define and manage its content. 

### Content Configuration

<figure>
  <Thumbnail src="/img/reference/controls/tabbed-container/content.png" alt="tabbed-container" />
</figure>


#### Mode

Expected value:
```json
[
  {"label":"Home","value":"home","icon":"icon-home","active":true,"image":""},
  {"label":"Features","value":"features","icon":"icon-organization","active":false,"image":""},
  {"label":"Product","value":"product","icon":"icon-handbag","active":false,"image":""},
  {"label":"Admin","value":"admin","icon":"icon-user-follow","active":false,"image":""},
  {"label":"string","value":"string","icon":"","active":false,"image":""}
]
```

- Manual: Allows developers to manually configure the tabs and their corresponding content.
- Mapped: Dynamically generate tabs by mapping data from external sources.
- View Data: Preview the data being rendered in the tabs to ensure accuracy.

#### Tabs
- Home: The default tab that can act as the primary landing section.
- Features: Highlight key features or functionalities.
- Product: Showcase product-related information or details.
- Admin: Include admin-specific controls or views.
- String: Utilize for displaying custom string-based content.

### Add-ons
- Tooltip: Add tooltips to provide contextual information about each tab.
- Description: Include detailed descriptions for better user understanding.
- Label: Customize the labels for each tab.

## Interaction
Interaction settings provide flexibility in handling user actions and input validations.

<figure>
  <Thumbnail src="/img/reference/controls/tabbed-container/interaction.png" alt="tabbed-container" />
</figure>

#### Validation
- Required: Mark specific fields or tabs as mandatory.
- Read Only: Restrict users from editing specific tabs or fields.

#### Submit Data
- Always: Define when data should be submitted across tabs.

#### Variant
- Pill: Rounded tab design.
- Line: Minimalist line-style tabs.

#### Alignment
- Center: Position tabs centrally for a symmetrical layout.
- Minimum Tab Width: Set a minimum width (in percentage) for each tab to maintain uniformity.

### Events
- `tab_change`: Trigger custom events or actions when a user switches between tabs.

## Appearance
Appearance settings allow you to fully customize the visual design of the Tabbed Container, ensuring it aligns with your app's branding.

#### Visibility
Control the visibility of the entire container or specific tabs.

#### Box Shadow
Add a shadow effect to enhance the container’s depth and visual appeal.

#### Tab Customization
- Size: Adjust the size of the tabs.
- Weight: Define the font weight.
- Color: Change the text color.
- Background Color: Set a background color for the tabs.
- Border: Add borders to enhance the tab edges.

#### Active Tab Customization
- Color: Highlight the active tab with a distinct color.
- Border: Emphasize the active tab’s border.
- Background Color: Differentiate the active tab with a unique background.

#### Background
- Color: Set the background color for the entire container.
- Image: Add a background image.
- Image Fit: Adjust the fit of the image (e.g., cover, contain).
- Opacity: Control the transparency of the background.

#### Border
- Border: Define the border visibility.
- Width: Customize the border thickness.
- Style: Choose between solid, dashed, or dotted styles.
- Color: Pick a border color.
- Radius: Round the corners for a softer look.

## Advanced Settings
For power users and developers, the advanced settings offer additional control over the Tabbed Container.

#### External CSS
Inject custom CSS styles for granular control over the design and behavior of the tabs.

#### Trigger Dependents
Set up dependent actions or triggers based on user interactions with the tabs.

#### Caching
Enable caching to store data locally and improve app performance.


## Control Outputs

The outputs from the Tabbed Container control, represented by the placeholder `{{tabbedcontainer}}`, can be referenced in other controls, data queries, or JavaScript functions using the control's unique name.



| Output | Description |
| --- | ---|
| tabbedcontainer | Represents the user-selected value from the selected options of the Tabbed Container control. |


