---
sidebar_position: 1
title: Reset Screen
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Reset Screen Action 

In multi-screen scenarios, it's often necessary to reset one or more screens after data submission. The `Reset Screen` action allows you to specify which screen or screens should be reset before proceeding to the next steps in your app's workflow. Here's how to use it:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/reset-screen/reset-screen.png" alt="Reset Screen" />
<figcaption align='center'><i>Reset Screen</i></figcaption>
</figure>

1. Select Screen(s): In the `Reset Screen` action configuration, you'll see a list of screens from your app. Here, you can choose the screen or screens that you want to reset. Resetting a screen typically means clearing any input data or returning it to its initial state.

2. Condition for Execution: Like other actions, you can define conditions under which this action should execute. This allows you to set specific criteria that must be met before the screen is reset. For example, you might want to reset a screen only if certain data conditions are met.

3. Environment: You can also specify the environment in which this action should execute, making it versatile and adaptable to different parts of your app.

4. Action Unique Name: Assigning a unique name to the action is essential for easy identification within your Action Flow.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/reset-screen/feild.png" alt="reset-screen" />
</figure>

The `Reset Screen` action is particularly useful in ensuring that your app's interface remains user-friendly and efficient. It's commonly employed after form submissions to prepare screens for new data input or other user interactions.
