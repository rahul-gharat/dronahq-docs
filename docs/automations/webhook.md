---
sidebar_position: 113
---

import Thumbnail from '@site/src/components/Thumbnail';

# Webhook

Automation allows you to automate repetitive tasks, saving time and effort. With the Webhook Automation feature on DronaHQ, you can achieve even greater efficiency and productivity. The Webhook Automation is divided into two main parts: Trigger and Tasks.

## Select A Trigger – Webhook

The Webhook trigger is activated when an event is received on its URL endpoint. You can automate workflows to start whenever a webhook event occurs, such as a service monitoring alert or when a payment is received. The workflow can utilize JSON payload data from events as references to other blocks' data. If needed, you can also set up a workflow to reply to webhook events by sending information back to the webhook origin using the Response block.

<figure>
  <Thumbnail src="/img/automation/webhook/select-trigger.png" alt="Select A Trigger – Webhook" width='70%'/>
  <figcaption align = "center"><i>Select A Trigger – Webhook</i></figcaption>
</figure>

Each webhook automation workflow is assigned a unique webhook URL. In the DronaHQ, the Webhook trigger URL supports both the GET and POST methods.

<figure>
  <Thumbnail src="/img/automation/webhook/configure-webhook.png" alt="Configure webhook" width='50%'/>
  <figcaption align = "center"><i>Configure Webhook</i></figcaption>
</figure>

:::info
Copy the endpoint URL and use it as the webhook event destination that will trigger webhook events.
:::

### Webhook URL – cURL Request

To utilize data within an automation task, you can send sample data through a cURL request. You can access the body, query string, and headers from the webhook using keywords like `webhook.body`, `webhook.query`, `webhook.headers`. Additionally, you can specify a particular key in the webhook body, such as `webhook.name` instead of `webhook.body.name`.

<figure>
  <Thumbnail src="/img/automation/webhook/crul-request.png" alt="cURL Request" width='70%'/>
  <figcaption align = "center"><i>cURL Request</i></figcaption>
</figure>

`Send an event to the webhook manually via curl`: The current cURL request is designed solely for capturing sample data and visualizing its data type in the editor below, without triggering the entire automation flow.

### Webhook URL – Manual

To utilize data within an automation task, you can enter sample data in the JSON editor below. You can access the body, query string, and headers from the webhook using keywords like `webhook.body`, `webhook.query`, `webhook.headers`. Additionally, you can specify a particular key in the webhook body, such as `webhook.name` instead of `webhook.body.name`.

<figure>
  <Thumbnail src="/img/automation/webhook/manual.png" alt="Manual" width='60%'/>
  <figcaption align = "center"><i>Manual</i></figcaption>
</figure>

#### Enter Sample data Manually for Testing

You can optionally provide sample data input used as a sample event payload for testing when running the automation from within the automation editor.

<figure>
  <Thumbnail src="/img/automation/webhook/enter-sample-data-manually.png" alt="Enter Sample Data Manually" width='70%'/>
  <figcaption align = "center"><i>Enter Sample Data Manually</i></figcaption>
</figure>

Click `Done` to save the configuration.

<figure>
  <Thumbnail src="/img/automation/webhook/webhook-configured.png" alt="Webhook Configured" width='100%'/>
  <figcaption align = "center"><i>Webhook Configured</i></figcaption>
</figure>

## Select a Task or Connector

Once the trigger is set up, you need to specify the tasks. Here, you can choose the App and the workflow that will be the action events.

<figure>
  <Thumbnail src="/img/automation/webhook/select-task-or-connector.png" alt="Select a task or connector" width='70%'/>
  <figcaption align = "center"><i>Select a task or connector</i></figcaption>
</figure>

You can select tasks from the available list of Logic tasks and Custom API connections.

## Automation Preview:

Click on the preview button to run the automation.

:::info
 The webhook will require a payload as an example data at the time of running the workflow in preview to test the webhook.
:::

<figure>
  <Thumbnail src="/img/automation/webhook/test.png" alt="Test Webhook Automation" width='70%'/>
  <figcaption align = "center"><i>Test Webhook Automation</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/automation/webhook/automation-builder-view.png" alt="Automation Builder View (Webhook)" width='70%'/>
  <figcaption align = "center"><i>Automation Builder View (Webhook)</i></figcaption>
</figure>

## Test and Publish

Once you have configured your automation flow, simply click the `Preview/Play button` at the top to execute the automation and thoroughly evaluate its functionality.
For comprehensive information regarding the testing process, kindly refer [here](/automation-test-publish-rollback#testing-automation).

Upon successful testing, you may proceed with the `publishing` of the automation, thereby making it live and automatically operational in accordance with the defined triggers.
For further insights on the publishing procedure, please access [here](/automation-test-publish-rollback#publish-the-automation).

By leveraging the Webhook Automation in DronaHQ, you can seamlessly integrate external services and automate workflows based on incoming events, empowering your applications with real-time data and actions. This versatile feature opens up endless possibilities for process automation and data exchange between different systems.