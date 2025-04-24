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

No need to write a prompt. It’s a visual-first way to get started fast.

### Option 2: Describe the App in a Prompt
You can type a simple prompt like:

>"Create a customer feedback form with name, rating, and comment box using @formFeedback."

Here’s what happens next:
1. AI generates a BRD (Business Requirements Document) based on your prompt.
2. You can edit this BRD using markdown — rename fields, update text, add or remove items.
3. Once done, click **Accept** — and DronaHQ will instantly build the app screen using the BRD.

This is perfect for when you have the app idea but no design yet.

Once the app is created, you can use AI-powered prompts to:
- Edit components using @component prompts
- Add actionflows
- Replace components dynamically

To know more refer to the following docs.

### Current Limitations
- Supports only SQL connector for now, also without data-query UI can't be generated.
- Cannot generate or bind full custom data queries
- Property updates supported on [limited controls](/building-with-ai/ai-powered-editing/#supported-controls).
- Action flow generation is limited in scope with [limited actions](/building-with-ai/ai-powered-editing/#supported-actions).

