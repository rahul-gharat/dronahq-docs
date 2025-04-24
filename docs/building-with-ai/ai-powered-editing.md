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

You can update properties of individual components using prompts and `@mentions`.

For example:
- `@submitBtn make it primary`
- `@inputEmail placeholder should be 'Enter your email'`
- `@headerText align center and change text to Welcome!`

#### How to Use
1. Open the AI Chatbot from the left sidebar.
2. Type your prompt using `@componentName` to refer to an existing control.
3. The AI will parse and apply updates immediately to the component.

:::caution
 Make sure your component names are unique and recognizable. When you type `@`, DronaHQ will auto-suggest existing component IDs in context.
:::

This method is ideal for making quick UI tweaks — like updating button styles, label text, visibility rules, or sizing.



---

## Add Actions to Components via Prompt

With AI-powered editing in DronaHQ, you can quickly add actions to components by typing simple prompts. These actions can trigger specific behaviors, such as submitting a form, sending an email, or performing an API call.

For example:
- `@submitBtn add action to submit form data to SQL`
- `@loginForm add action to redirect to dashboard on success`
- `@inputField add action to validate email format`

#### How to Use
1. Open the AI Chatbot from the left sidebar.
2. Type your prompt  using `@componentName` and desired action.
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
| confirm             | Displays a confirmation dialog                  |
| Toast               | Shows a toast notification                      |
| Validate Screens    | Triggers screen-level validations               |
| Connector Query     | Executes a backend connector or data query      |
| Set Control Value   | Programmatically updates a control’s value      |



---


## Replace Components via Prompt

If you need to swap one component for another in your app, you can do this quickly via conversational prompts. This saves you from the hassle of manually deleting and adding new components, helping you keep your workflow efficient.

For example:
- `@dropdown replace with radiogroup for single selection`
- `@submitBtn replace with custom button with icon`
- `@inputField replace with rich text editor`

#### How to Use
1. Open the AI Chatbot from the left sidebar.
2. Type your prompt with `@componentName` and specify the replacement component.
3. The AI will replace the specified component with the new one, and automatically update any relevant properties where necessary.


:::caution
Currently, replacement is supported for 9 control types. This list will expand in future updates.
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



---

## Adding Data Queries to Components via AI

At the moment, the AI Chatbot in DronaHQ does not support directly adding data queries to components via prompt. However, you can still leverage AI assistance to bind data to your components by using a different approach.

#### How to Use

1. Click on the component (e.g., Table Grid) where you want to bind data.
2. Click on the top Ai assist icon on the component.
3. Enter your prompt, such as "For this Table Grid, fetch all data from the [Data Query Name]".

This will guide the AI to generate the appropriate connections for you, helping you bind your data source to the component.

:::note
Currently, this is a workaround since direct data query binding via AI prompts is not yet supported. However, with AI Assist, you can still accomplish the task by interacting with the component individually.
::: 

