---
sidebar_position: 111
---

import Thumbnail from '@site/src/components/Thumbnail';

# Overview

DronaHQ offers a powerful Automation feature that allows you to automate tasks based on trigger events such as scheduled timings or webhooks from third-party services. With Automation, you can streamline repetitive processes and schedule various activities within your apps on DronaHQ's platform.

## Accessing Automations

To access the Automation section, navigate to the left-side navigation bar on your DronaHQ Studio homepage and click on `DronaHQ > Automations`.

<figure>
  <Thumbnail src="/img/automation/automation-dashboard.png" alt="Automation Dashboard" width='70%'/>
  <figcaption align = "center"><i>Automation Dashboard</i></figcaption>
</figure>

## Creating a New Automation

To create a new Automation, click on the `+ Automation` button. A pop-up will appear where you can provide a name for your automation.

<figure>
  <Thumbnail src="/img/automation/provide-automation-name.png" alt="Provide Automation name" width='70%'/>
  <figcaption align = "center"><i>Provide Automation name</i></figcaption>
</figure>

A new window will open to configure the automation. The configuration process involves two steps: selecting a trigger and selecting the task or connector.

<figure>
  <Thumbnail src="/img/automation/automation-window.png" alt="Automation tab" width='70%'/>
  <figcaption align = "center"><i>Automation tab</i></figcaption>
</figure>

### Step 1: Select A Trigger

In this step, you need to choose a trigger for your automation. There are two types of automation triggers available:

1. **Scheduler**: This trigger enables you to schedule action flows or workflows to be repeated at specific times, such as daily at a particular time, on specific days of every week, monthly, or yearly.

2. **Webhook**: This trigger is useful for receiving notifications whenever an event occurs in a third-party service. DronaHQ provides a webhooks REST API that can be registered with an external service to get notified of changes, allowing you to trigger specific actions accordingly.

<figure>
  <Thumbnail src="/img/automation/select-trigger.png" alt="Select a trigger" width='70%'/>
  <figcaption align = "center"><i>Select A Trigger</i></figcaption>
</figure>

### Step 2: Select Task or Connector

After selecting a trigger for your automation, you will need to add tasks or connectors. To do this, click the `+` sign to add a task or connector from the available list. Depending on the type of trigger you have chosen, you will define and configure the tasks or connectors accordingly.

<figure>
  <Thumbnail src="/img/automation/select-task-or-connector.png" alt="Select a task or connector" width='70%'/>
  <figcaption align = "center"><i>Select a task or connector</i></figcaption>
</figure>

:::info Automation keywords
Learn about the automation keywords that offer enhanced feasibility within automation. Explore them [here](/reference_keywords#automation-keywords).
:::

## Test and Publish

Once you have configured your automation flow, you can click on the `Preview/Play button` at the top to execute the automation and test its functionality.

Upon successful testing, you can proceed to `publish` the automation, making it live and ready to run automatically based on the defined triggers.

By leveraging the Automation feature in DronaHQ, you can enhance productivity, eliminate manual repetitive tasks, and ensure timely execution of actions within your apps.