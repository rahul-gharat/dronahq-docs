---
sidebar_position: 1
title: Show Screen Loader
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Show Screen Loader Action 

In large applications, there are times when your form content is extensive, and it might take some time for the full page to load completely. To maintain user engagement during these loading periods, you can add a screen loader. The `Show Screen Loader` action block allows you to display a screen loader between two actions, creating a smoother transition for users.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/show-screen-loader/show-screen-loader.png" alt="Show Screen Loader" />
<figcaption align='center'><i>Show Screen Loader</i></figcaption>
</figure>

1. Select the `Show Screen Loader` Action: In your Action Flow, determine where you want to display the screen loader, and add the `Show Screen Loader` action at that point. This action instructs the app to show the screen loader after its execution.

2. Condition for Execution: Similar to other actions, you can define conditions that dictate when this action should execute. This flexibility enables you to decide precisely when the screen loader should be displayed based on specific criteria or user interactions.

3. Environment: Specify the environment in which this action should execute, ensuring that it aligns with your app's overall functionality.

4. Action Unique Name: Assign a unique name to the action. This helps with easy identification within your Action Flow.

The `Show Screen Loader` action is a valuable tool for enhancing the user experience in large applications. It ensures that users stay engaged and informed while your app loads content, ultimately providing a more seamless and user-friendly experience.
