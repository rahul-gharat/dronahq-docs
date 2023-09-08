---
sidebar_position: 1
title: Call Workflow from Another App
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Call Workflow from Another App Action

In your application ecosystem, you might need to initiate workflows that reside in different apps within your organization. The `Call Workflow from Another App` action in Action Flows enables you to trigger workflows from other apps seamlessly. Here's how you can set it up:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/call-workflow-from-another/call-workflow-from-another.png" alt="Call Workflow from Another App" />
<figcaption align='center'><i>Call Workflow from Another App</i></figcaption>
</figure>

1. Select Apps: Choose the target app from your existing apps in the channel where you want to trigger the workflow.

2. Select Workflow: After selecting the app, you'll see a list of workflows available within the chosen app. Pick the workflow you wish to execute.

3. Select Data Environment: Specify the environment from which data will be fetched for your workflow. This is essential if your workflow relies on specific data.

4. Select Workflow Environment: Choose the environment in which the selected workflow should be executed.

Depending on your workflow, there may be dynamically generated fields that need to be filled. You can bind these fields to controls in your app using Keywords. These controls can be variables, user inputs, or default keywords.

5. Continue: Click the `Continue` button to proceed.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/call-workflow-from-another/action.png" alt="call-workflow-from-another" />
</figure>

You can further define conditions for when this action should execute and specify the execution environment. Giving a unique name to this action is crucial for easy identification and management within your Action Flow.

With the `Call Workflow from Another App` action, you can streamline your business processes across various apps, making your organization's workflow management more efficient and integrated.
