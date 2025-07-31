---
sidebar_position: 2
title: Getting Started 
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

# Getting Started 

Veda AI is designed to help you create apps faster, smarter, and with fewer manual steps. Whether you want to generate entire screens from a sentence or tweak individual components using simple prompts, the AI Chatbot is here to make things smoother.

##  Set Up Your OpenAI API Key

To begin using the AI features, you need to make sure the platform has access to an OpenAI API key.

- Go to **DronaHQ Cloud**.
- Open your **Profile Settings**.
- Navigate to the **Integrations** tab.
- Click on **OpenAI Account Settings**.

From here, you can either:

- Use DronaHQ’s default OpenAI key — great for quick experimentation.
- Or bring your own OpenAI key — ideal if you want lower costs or higher usage limits.

To know more refer to our [Configure OpenAI keys](/building-with-ai/ai-configure-openai-keys/) documentation.

Once your key is added, you’re ready to start building with AI!

  ##  Locate the AI Chatbot
  
  <figure>
    <Thumbnail src="/img/build-with-ai/chatbot.png" alt="Chatbot" />
  </figure>

 
  Once your API key is set, you can access the AI Chatbot right inside the App Builder.

  - Open the App Builder from your DronaHQ app builder.
  - On the left sidebar, look for the 🪄 AI Chatbot icon .
  - Click it to launch the chat panel and start building with prompts.

  #### 🔑 Configure API Key (First-time setup)
  You can either configure your own OpenAi Api Key or use DronaHQ Api key.

  * **Add your own API key** (recommended for faster responses and higher credit limits)
  * **Using DronaHQ’s API key** (ideal for trying out the feature)



  - Top Bar: Shows your app name and feature label ("Veda AI").
  - Tabs: Switch between "Chat" (current session) and "History" (past interactions).
  - Main Area: 
    - Options to either type prompts or upload images to build apps.
    - Clear pointers on tasks like building UI, updating properties, or replacing controls using natural language.
  - Input Box: Describe your app idea or upload images to generate screens. There's also an Attachment button for uploading templates.
  - Credit balance - Right on the corner of the input  box, we can keep track of tokens getting used.


## Build Your Application

To start building your app, simply type a prompt like `Generate a form to collect attendance using @workshopDB-SD` and let AI generate the layout for you.

<figure>
  <Thumbnail src="/img/build-with-ai/nlp-gen.png" alt="Chatbot" />
</figure>

To know more about creating apps with AI, refer to the [Create Apps with AI](create-apps-with-ai.md).



## AI Credits Usage Overview

Depending on how you connect your AI models, your credit consumption varies:

- **DronaHQ API Key** → Higher credits usage
- **Your LLM Provider API Key** → Lower credits usage

---

### AI Chatbot Credit Usage

Below are the number of credits used when conversing with Veda Ai chatbot using either DronaHQ credentials or your credentials when conversing to LLM provider.

| Feature | DronaHQ | Your LLM Provider |
|:-----------|:------------------------|:-------------------------------------|
| Generate UI from Image | 3 | 1 |
| Generate BRD | 30 | 10 |
| Approve BRD | 75 | 25 |
| Update Control Properties | 30 | 10 |
| Single Control Action Flow | 9 | 3 |
| Replace Control | 60 | 20 |
| Add Control | 30 | 10 |
| Bind Data to Control | 30 | 10 |
| Generate Data Query | 9 | 3 |
| Generate UI from NLP | 9 | 3 |


### AI Assist Credit Usage

Below are the number of credits used when conversing with DronaHQ Ai Assist (🪄) using either DronaHQ credentials or your credentials when conversing to LLM provider.

| Feature | DronaHQ | Your LLM Provider |
|:-----------|:------------------------|:-------------------------------------|
| Bind DB Connector to control using Data Query | 9 | 3 |
| Bind Static/JavaScript to control using Data Query | 6 | 2 |
| Transform JS while Binding Data to control | 3 | 1 |
| Column Formatting | 3 | 1 |
| Raw Data Transform | 3 | 1 |
| Generate SQL Query | 9 | 3 |
| TransformJS in SQL Query | 3 | 1 |
| Custom JavaScript in Dataquery | 6 | 2 |
| Custom JavaScript in Actionflows | 6 | 2 |


:::tip
⚡ Using your own LLM Provider Api key gives you up to **3x more efficient credit usage**!
:::
