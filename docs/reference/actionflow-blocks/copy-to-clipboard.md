---
sidebar_position: 1
title: Copy to Clipboard
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Copy to Clipboard Action

There are situations when you need to copy data from your app's screen and paste it at a later stage. This is where the `Copy to Clipboard` action comes in handy within your Action Flow.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/copy-to-clipboard/copy-to-clipboard.png" alt="Copy to Clipboard" />
<figcaption align='center'><i>Copy to Clipboard</i></figcaption>
</figure>

1. Copy Text or Keywords: To initiate the copy action, navigate to the `Action Flow` section, specifically `On-screen Actions,` and select the `Edit` block. Here, you can specify the text you want to copy or choose from a list of Keywords. Keywords allow you to copy dynamic content from form controls, variables, and action outputs.

2. Action Unique Name: Provide a unique name for this action. This helps you identify this task within your action flow.

3. Conditions and Environment: Define under what conditions this action should execute and in which environment. This allows for precise control over when and where the copy action occurs.


With these settings in place, your action flow is configured. Now, whenever this action is triggered, the specified text or data will be copied to the clipboard. You can then navigate to the desired location to paste it. On a mobile app, you can usually long-press and use the paste option. In the example provided, we are pasting the copied text into a text control located below the action button.
