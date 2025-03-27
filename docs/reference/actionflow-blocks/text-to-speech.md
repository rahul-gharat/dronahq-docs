---
sidebar_position: 1
title: Text to Speech
---

import Thumbnail from '@site/src/components/Thumbnail';

The Text to Speech action allows you to convert text into spoken audio in your application. This is particularly useful for creating accessible interfaces or adding audio feedback to your applications.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/text-to-speech/text-to-speech.png" alt="Show Screen Loader" />
<figcaption align='center'><i>Text to Speech</i></figcaption>
</figure>

### Setting up the Text to Speech Action

To configure this action, follow these steps:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/text-to-speech/config.png" alt="" />
</figure>

1. Action Configuration Fields:
   - Text to Speak: Input the text you want to convert into speech. You can also use dynamic data by selecting the "Use Keywords" option.
   - Rate: Define the speed of speech. Acceptable values range from `0.0` (slowest) to `10.0` (fastest). Default is `1` for a normal speaking rate.
   - Locale: Choose the language and voice setting for the speech output (e.g., English, Spanish, etc.).

2. Advanced Settings:
   Expand the Advanced section for additional configuration options to fine-tune the audio output based on your application needs.

3. Save Configuration:
   Click Save to apply the settings and integrate the action into your workflow.

### Key Benefits
- Accessibility: Enhance user inclusivity by adding audio options for those who prefer or require spoken feedback.
- Dynamic Integration: Adapt speech outputs dynamically based on user inputs or app interactions.
- Localization: Support multiple languages and regional accents by selecting the appropriate locale.

