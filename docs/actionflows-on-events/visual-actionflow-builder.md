---
sidebar_position: 1
title: Visual actionflow builder
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Visual actionflow builder

DronaHQ provides a very unique visual experience of building actionflows on any of your app events. There are times you might want to do a sequence of actions on a button click or a value change which can get complex with data queries, API calls, logic and data transformation, branching and iterating and then ending with some visual feedback like showing a toast or a popup. 

You can access control and screen events by clicking on the lightning action on either the screen or the controls. 

<figure>
  <Thumbnail src="/img/actionflows-on-events/button-click.png" alt="Accessing control events" width='100%'/>
  <figcaption align = "center"><i>Control events</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/actionflows-on-events/visual-actionflow.png" alt="Visually build actionflows" width='100%'/>
  <figcaption align = "center"><i>Visual actionflow builder</i></figcaption>
</figure>

## Types of events

DronaHQ has broadly 2 types of events and the rest are categorized inside these types:

- **Screen events**
    - **Screen_routing** - This event fires when a routing change in the URL (For public apps) is detected. This fires before the screen_open event. Read more about it in [screen routing.](/screen-routing)
    - **Screen_open** - This event fires every time the screen opens. It can happen multiple times while using the app even when navigation to this screen happens. 
    - **Screen_close** - This event is the opposite of screen_open. It fires every time you navigate away from this screen.

- **Control events**
    - **Control_click** - This events is fired on clicking the control or parts of the control.
    - **Value_select** - This events is generally associated with select type of controls like dropdowns or radios and is fired every time any option is selected. 
    - **Value_change** - This event is generally associated with input type of controls like textboxes and is fired every time a value changes. You can configure the debounce time in the properties.
    - **Focus_out** - This event is generally associated with input type of controls like textboxes and is fired every time you focus out of the control and click outside.
    - **Enter_press** - This event also is generally associated with input type of controls like searchbox and is fired every time you the user presses enter. 
    - **Custom events** - There are some custom events associated with controls like tablegrid (save_changes on table editing etc.) which let you explore the functionality of these control to the fullest. 


## Types of action blocks

- Logic and Flow Control - This segment is dedicated to actions that define the logic and flow of the application.
    - Javascript (JS Code) - For writing custom JavaScript code to manipulate data or control flow.
    - Branch - To create conditional branches, enabling the app to take different actions based on specific conditions.
    - Iterate - To perform iterative operations, such as looping through data sets.

- On-Screen Actions - These actions are executed directly on the screen without consuming any server-side resources.
    - Logic - This category includes actions where you can write logic. It contains options like Branch, Iterate, and JS Code.
    - Navigate - All actions related to navigating to different screens, apps, etc., are grouped in this category.
    - Native - This category includes actions related to mobile-specific native functionalities.
    - Dialogs - Actions related to dialogs, including toasts, confirmation pop-ups, etc., are categorized here.
    - App - All app and screen-related actions fall under this category.
    - Data and Keywords - Actions related to data and keyword manipulation are grouped here.
    - Controls - This category includes actions for control-related data manipulations and other control-specific operations.
    - Utility - All utility actions, such as downloading files, showing confetti, etc., are included in this category.

- Server-Side Actions - These actions are executed on the server-side, involving resources like API calls and database queries.

    - DronaHQ Services - This category includes all DronaHQ-specific services like PDF creation, in-built file upload, etc.
    - Connector
        - Query - Actions related to querying data from a connected source.
        - Library - Actions for managing and utilizing pre-defined libraries.

:::info Please Note

For cases where you need to insert or update into Databases or POST into an API call, you can also use the Data queries in the app builder with `only manual trigger` setting and use the Action `Run data queries` to fire that query on a particular action.

:::

<figure>
  <Thumbnail src="/img/actionflows-on-events/on-screen.png" alt="On screen actions" width='100%'/>
  <figcaption align = "center"><i>All Actions</i></figcaption>
</figure>

