---
sidebar_position: 4
title: AI-Powered Editing
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

# AI-Powered Editing in DronaHQ

Once your app is generated (via prompt or image upload), DronaHQ’s AI can help you enhance and evolve it — directly from within the builder. 
You can update component properties, attach actions, or even replace components using conversational prompts.

This allows for an intuitive editing experience, helping you move fast without dragging through menus or settings.

---

## Update Component Properties via Prompt

You can update properties of individual components using prompts and `{{mentions}}`.

For example:
- `{{submitBtn}} change label to Submit and background color to blue`
- `Enable pagination in {{tablegrid}}`
- `Update the label for {{jsonForm}} to Customer Details Form and make it bold`

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src= "https://demo.arcade.software/TFSPu2P83Vi1s0tfKm0J?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
        title="Create and Customize an AI-Powered App"
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>
<br></br>  

#### How to Use
1. Open the AI Chatbot from the left sidebar.
2. Type your prompt using `{{componentName}}` to refer to an existing control.
3. The AI will parse and apply updates immediately to the component.

:::caution
 Make sure your component names are unique and recognizable. When you type `{{}}`, DronaHQ will auto-suggest existing component IDs in context.
:::

This method is ideal for making quick UI tweaks — like updating button styles, label text, visibility rules, or sizing.

:::note
Currently, only a limited set of controls are supported for updating component properties. This [list](#supported-controls) will expand in future updates.
:::


---

## Add Actions to Components via Prompt

With AI-powered editing in DronaHQ, you can quickly add actions to components by typing simple prompts. These actions can trigger specific behaviors, such as validating a screen, run a query on DB connector , or showing confirmation popup.

  
  <figure>
    <Thumbnail src="/img/build-with-ai/actionai.gif" alt="Chatbot" />
  </figure>

For example:
- `On {{loginForm}} submit click, insert form details into @formFeedbackDB`
- `On {{submitBtn}} button click, validate screen-1 and navigate to screen-2`

#### How to Use
1. Open the AI Chatbot from the left sidebar.
2. Type your prompt  using `{{componentName}}` and desired action.
3. The AI will automatically create and attach the specified action to the component.

Adding actions this way eliminates the need to navigate through menus or open the Actionflow editor — just type your requirements, and the AI will handle the rest.

:::caution
Make sure the action you’re requesting is compatible with the component. Some complex actions might require manual adjustments in the Actionflow editor.
:::

:::note
Currently, only a limited set of actions are supported for generating Actionflows via prompts. 
:::


This feature is great for rapidly implementing behaviors like form submissions, redirects, and API integrations directly from your interface.

#### Supported Actions

| Action Name         | Description                                     |
|---------------------|-------------------------------------------------|
| JS Code             | Executes custom JavaScript code                 |
| Navigate To Screen  | Moves the user to another screen                |
| Confirm             | Displays a confirmation dialog                  |
| Toast               | Shows a toast notification                      |
| Validate Screens    | Triggers screen-level validations               |
| Connector Query     | Executes a backend connector or data query      |
| Set Control Value   | Programmatically updates a control’s value      |
| Trigger Data Query  | Triggers provided Data query                    |
| Branch              | Enable branching in your actionflow with different conditions |
| Exit App              | Closes the app                              |
| Open URL              | Opens a specified URL                    |
| Email                 | Sends an email using configured settings and templates.                   |
| Popup                 | Displays a custom popup with a provided message                  |
| Show screen loader    | Displays a full-screen loading indicator                                 |
| Hide screen loader    | Hides the full-screen loading indicator                                  |
| Show Controls Loader  | Shows a loading indicator on specified control                          |
| Hide Controls Loader  | Hides the loading indicator on specified control                        |
| Reset control data    | Clears or resets data in specified controls to default bind data value             |
| Set Controls' Value   | Programmatically sets the value of specified controls                    |
| Delay                 | Pauses the action flow for a specified duration                          |
| Show Controls         | Makes specified controls visible on the screen                          |
| Hide Controls         | Hides specified controls from the screen                                 |
| Close Overlay Screens | Closes any open overlay screens or modals                                |
| Reset Screens         | Resets specified screens to their initial state                          |
| Confetti              | Triggers a confetti animation for celebratory effects                    |
| Set Data Environment  | Switches to a different data environment          |
| End Action Flow       | Stops the execution of the current action flow                           |
| Invoke Action         | Triggers another predefined action flow                        |
| End Branch            | Ends the execution of a conditional branch                               |
| Logout                | Logs the user out of the application                                     |
| File Upload           | DronaHQ provided file upload service                   |
| Generate PDF          | DronaHQ provided PDF service to create a PDF from given data and PDF template                          |
| DHQ File Storage      | Stores and retrieves files using DronaHQ provided file storage service. |

---


## Replace Components via Prompt

If you need to swap one component for another in your app, you can do this quickly via conversational prompts. This saves you from the hassle of manually deleting and adding new components, helping you keep your workflow efficient.

  <figure>
    <Thumbnail src="/img/build-with-ai/replaceai.gif" alt="Chatbot" />
  </figure>


For example:
- `Replace {{dropdown}} with form for capturing customer information`
- `Replace {{inputfield}} with Button control with purple background and label as Submit`
- `Replace {{submitBtn}} with Table`

#### How to Use
1. Open the AI Chatbot from the left sidebar.
2. Type your prompt with `{{componentName}}` and specify the replacement component.
3. The AI will replace the specified component with the new one, and automatically update any relevant properties where necessary.


:::note
Currently, only a limited set of controls are supported that can be used to replace control with. This [list](#supported-controls) will expand in future updates.
:::

#### Supported Controls

| Control Name             | Description                              |
|--------------------------|------------------------------------------|
| Tablegrid                | Displays tabular data from a data source |
| Container                | Groups components for layout and styling |
| Image Box                | Displays images from URLs or uploads     |
| Button                   | Triggers actions on click                |
| Detail View              | Shows detailed data view per row/item    |
| Dashboard                | Container for charts, KPIs, metrics      |
| Tabbed Container         | Displays grouped content in tab layout   |
| JSON Schema Form Control | Renders forms based on JSON schema       |
| Grouped Menu             | Navigation menu with grouped sections    |
| Text Input            | A single-line input field for entering text. |
| Label                 | Displays static text or information. |
| Dropdown              | A selectable dropdown list of options.  |
| Text Area            | A multi-line input field for entering text content. |
| Select                | A single or multi select options displayed in Grid layout. |
| Rating                | Allows users to give a star or point-based rating.  |
| Rich Text Editor      | A WYSIWYG editor for styled or formatted content.   |
| Numeric               | An input field that accepts only numeric values.    |
| Text                  | Displays read-only text or bound values.            |
| Toggle                | A switch to toggle between two states (on/off).     |
| Quantity              | A stepper control for increasing or decreasing numeric values.                 |
| Date                  | Date picker for selecting a specific date.          |
| Heading               | Displays a heading or title within the layout.      |
| File Upload           | Allows users to upload files from their device.     |
| Date Time             | Combines date and time selection in a single picker.         |
| Terms & Conditions    | Displays terms with a required checkbox for user agreement.  |
| Custom Control        | A developer-defined control with custom logic or rendering.  |
| JSON Viewer           | Renders JSON data in a structured, readable format. |
| Icon                  | Displays an icon using predefined icon sets.        |
| Checkboxes            | A group of checkboxes for multiple selections.      |
| Charts                | Visualizes data using various chart types (bar, line, pie, etc.).              |
| Select Bar            | A horizontal segmented control for selecting from multiple options.            |
| Radio                 | A group of radio buttons for single selection.      |
| Switch Group          | A set of toggle switches grouped together.          |
| Time                  | A time picker for selecting a specific time.        |
| Date Range Picker     | Allows users to select a start and end date range.  |
| Card List Control     | Displays a list of items using a card-based layout. |
| Advance Map           | Shows a map with markers, routes, or geolocation support.    |
| Google Doc Viewer     | Embeds and displays Google Docs within the app.     |


---

## Adding Data Queries to Components via AI

At the moment, the Veda AI Chatbot does not support directly bind data to components using data queries via prompt. However, you can still leverage AI assistant to bind data to your components by using a different approach.

#### How to Use

1. Click on the component (e.g., Table Grid) where you want to bind data.
2. Click on the top Ai assist icon on the component.
3. Enter your prompt, such as "fetch all data from the @[DB Connector Name]".

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src="https://demo.arcade.software/bgKkFRh58LanOWS4Pwo5?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
        title="Configuring and Executing Data Queries"
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>
<br></br>  

This will guide the AI to generate the appropriate data query for you, helping you bind your data source to the component.

:::note
Currently, this is a workaround since direct data query binding via AI prompts is not yet supported. However, with AI Assist, you can still accomplish the task by interacting with the component individually.
::: 

