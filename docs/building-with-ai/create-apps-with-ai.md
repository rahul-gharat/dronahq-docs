---
sidebar_position: 3
title: Create App with AI
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

# Create App with AI

DronaHQ offers two simple ways to kickstart your app-building journey using AI:

### Option 1: Upload a Template (Image)
You can upload an image of a layout — like a screenshot of a form, a sketch, or a mockup. 

The AI will analyze the image and generate a matching screen with relevant components like text inputs, dropdowns, buttons, and labels.

<div style={{ position: 'relative', paddingBottom: 'calc(46.33333333333333% + 41px)', height: 0 }}> 
    <iframe 
        src="https://demo.arcade.software/mc5VGpTSNLXmiJpcy4s2?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
        title="Building a UI with AI Assistance"
        frameborder="0" 
        loading="lazy" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen 
        style= {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} >
    </iframe>
</div>
<br></br>

No need to write a prompt. It’s a visual-first way to get started fast.

### Option 2: Describe the App in a Prompt
You can type a simple prompt like:

>"Create a customer feedback form with name, rating, and comment box using @formFeedbackDB."

Here’s what happens next:
1. AI generates a BRD (Business Requirements Document) based on your prompt.
2. You can edit this BRD using markdown — rename fields, update text, add or remove items.
3. Once done, click **Approve** — and DronaHQ will instantly build the app screen using the BRD.

This is perfect for when you have the app idea along with Database schema but no design yet.

Once the app is created, you can use AI-powered prompts to:
- Edit components using @component prompts
- Add actionflows
- Replace components dynamically

To know more refer to the following docs.

### Current Limitations
- Supports only SQL based DB connector for now, also without passing @DBConnector, App can't be generated.
- Cannot Bind data to control individually with data queries using Chatbot (However, Ai Assistance for individual control can be used instead for binding data query.)
- Property updates supported on [limited controls](/building-with-ai/ai-powered-editing/#supported-controls).
- Action flow generation is limited in scope with [limited actions](/building-with-ai/ai-powered-editing/#supported-actions).

