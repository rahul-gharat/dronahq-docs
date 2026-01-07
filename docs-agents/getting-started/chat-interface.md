---
sidebar_position: 103
title: "Chat Interface"
pagination_prev: null
---

# Overview

The AI Agent Chat Interface is the front-end component that allows end-users to interact with your configured AI Agent. This blueprint details the properties available for editing the interface to match your application's branding and user experience requirements.

To access these settings, navigate to your Agent configuration and select the Chat Interface tab (or equivalent section).


<!-- <figure>
    <Thumbnail src="//static/img/docs-agent/chat-interface.png" alt="Chat Interface" />
    <figcaption align="center"><i>Chat Interface</i></figcaption>
</figure> -->



## Customization Properties

The following properties are available for configuring the visual elements and default text of the chat interface:


| Property | Type | Description | Default Value/Example |
|--------|------|-------------|----------------------|
| Display name | Text | The name displayed at the top of the chat window. This typically identifies the AI Agent or bot. | DronaHQ Agent |
| Initial message | Text (Rich Text Supported) | The first message the user sees when opening a new chat session. Use this to greet the user and define the Agent's capabilities. | Hello! How may I assist you today? |
| Suggested messages | List of Text Inputs | A list of predefined prompts that send to the Agent when clicked, with optional repeat display. | Also, default value column can be inputted. |
| Message placeholder | Text | The greyed-out text shown in the user input field before they start typing. | Ask me a question... |
| Collect user feedback |  | Collect user feedback by displaying a thumbs up or down button on agent messages. |  |
| Regenerate messages |  | Display a regenerate response button on agent messages. |  |
| Allow file upload | Upload | Show file upload button on agent messages. |  |
| DronaHQ branding | Visible | Hide DronaHQ branding from the chat interface. |  |
| Dismissible notice | Text (200 characters) | The content of the notice. It appears at the top of the chat window and is automatically dismissed after the user sends their first message. |  |
| Footer | Text (Max 200 chars) | Static text displayed at the bottom of the chat interface. Commonly used for disclaimers or links to terms of use. | AI can make mistakes, please verify the information you receive. |



## Initial and Suggested Messages

You can configure the starting points for user interactions to guide them or prompt common queries.

### Initial Message

This property sets the conversation's first message, welcoming the user.

:::note
Keep the initial message concise, relevant to the Agent's scope, and include a clear call-to-action (e.g., "Ask a question about our pricing" or "Provide your order ID to start tracking.").
:::

### Suggested Messages

Suggested messages appear as clickable buttons or chips after the Initial message to help users quickly start a conversation without typing.


| Property | Type | Description |
|--------|------|-------------|
| Add suggested message | Button | Click to define a new quick-reply prompt. | 
| Suggested messages | List of Text | A list of predefined prompts (e.g., "Check status") that are sent as a user message when clicked. |
| Keep showing suggested messages | Toggle | If enabled, these prompts remain visible and clickable even after the user has sent their first message. | 

:::tip
Enabling "Keep showing suggested messages" is ideal for persistent navigation options or frequently asked questions that users might need throughout the entire conversation.
:::



## Dismissible Notice 

This feature allows you to display a temporary, dismissible banner notice to the user. This is ideal for important, time-sensitive, or introductory information.



## Footer and Legal Disclaimers

The Footer property is crucial for adding static, required text, such as legal disclaimers, terms of use, or privacy policy links.


:::warning Footer Character Limit
The Footer has a character limit (e.g., 200 characters in the blueprint). Ensure all necessary text, especially for legal compliance, fits within this limit.
:::



## Saving and Deployment

After configuring the interface properties:

- Click the Save button to apply the changes to your Agent configuration.
- The updated interface will automatically reflect in any DronaHQ Custom App where this AI Agent is deployed.

