---
sidebar_position: 112
---

import Thumbnail from '@site/src/components/Thumbnail';

# Scheduler

Automation allows you to streamline repetitive tasks and save time by automating their execution. With the Scheduler Automation feature on DronaHQ, you can achieve even more efficiency and productivity. The Scheduler Automation is divided into two main parts: Trigger and Tasks.

## Select A Trigger – Scheduler

The Scheduler trigger allows you to schedule actions at a specific date and time with recurring options. You can automate workflows using a custom schedule, making it ideal for actions that need to be performed regularly.

<figure>
  <Thumbnail src="/img/automation/scheduler/select-trigger.png" alt="Select A Trigger – Scheduler" width='70%'/>
  <figcaption align = "center"><i>Select A Trigger – Scheduler</i></figcaption>
</figure>

## Configure Scheduler

In the Scheduler configuration, you have the following options:

- `Set Time Zone`: Choose the desired time zone from the dropdown.

<figure>
  <Thumbnail src="/img/automation/scheduler/timezone.png" alt="Choose timezone" width='70%'/>
  <figcaption align = "center"><i>Choose timezone</i></figcaption>
</figure>

- `Set Frequency`: This part allows you to set up a workflow to run periodically. You can configure a schedule that triggers every n minutes, hours, days, weeks, or months.

### Configure an Interval Schedule

<figure>
  <Thumbnail src="/img/automation/scheduler/interval.png" alt="Scheduler Interval" width='70%'/>
  <figcaption align = "center"><i>Scheduler Interval</i></figcaption>
</figure>

Define when to repeat the automation-triggered action using the available prompts in the dropdown. Intervals are available in a range from a minute to a month, and you can easily set the desired interval.

<figure>
  <Thumbnail src="/img/automation/scheduler/repeat-every.png" alt="Select Interval from dropdown" width='70%'/>
  <figcaption align = "center"><i>Select Interval from dropdown</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/automation/scheduler/frequency-set.png" alt="Interval" width='70%'/>
  <figcaption align = "center"><i>Interval Every Week on Sunday</i></figcaption>
</figure>

### Configure a CRON Schedule

For more precise scheduling, you can use the CRON syntax in Studio Automation. The interface provides a human-readable representation of the CRON values you enter, and tooltips with syntax references appear when you hover over each input label.

<figure>
  <Thumbnail src="/img/automation/scheduler/cron.png" alt="Scheduler Cron" width='70%'/>
  <figcaption align = "center"><i>Construct CRON</i></figcaption>
</figure>

With CRON syntax, you can create sophisticated schedules. For example, you can set up a routine to run between `January and September at 9.30 am on Mondays, Wednesdays, and Fridays`:

<figure>
  <Thumbnail src="/img/automation/scheduler/sample-cron.png" alt="sample Cron" width='70%'/>
  <figcaption align = "center"><i>Sample CRON</i></figcaption>
</figure>

Click `Done` to save the configuration.

<figure>
  <Thumbnail src="/img/automation/scheduler/scheduler-configured.png" alt="Scheduler configured" width='100%'/>
  <figcaption align = "center"><i>Scheduler configured</i></figcaption>
</figure>


## Select a Task or Connector

Once the trigger is set up, you need to specify the tasks. Here, you can choose the App and the workflow that will be the action events.

<figure>
  <Thumbnail src="/img/automation/select-task-or-connector.png" alt="Select a task or connector" width='70%'/>
  <figcaption align = "center"><i>Select a task or connector</i></figcaption>
</figure>

You can select the tasks from the available list of Logic tasks and Custom API connections.

## Automation Builder View:

Click on the preview button to run the automation and view its logs to check for its success or errors.

<figure>
  <Thumbnail src="/img/automation/scheduler/automation-builder-view.png" alt="Automation Builder View (scheduler)" width='70%'/>
  <figcaption align = "center"><i>Automation Builder View (scheduler)</i></figcaption>
</figure>

## Test and Publish

Once you have configured your automation flow, simply click the `Preview/Play button` at the top to execute the automation and thoroughly evaluate its functionality.
For comprehensive information regarding the testing process, kindly refer [here](/automation_test_publish_rollback#testing--automation).

Upon successful testing, you may proceed with the `publishing` of the automation, thereby making it live and automatically operational in accordance with the defined triggers.
For further insights on the publishing procedure, please access [here](/automation_test_publish_rollback#publish-the-automation).

By leveraging the Scheduler Automation in DronaHQ, you can automate repetitive tasks with precision and ensure timely execution of important actions. This powerful feature enhances productivity and allows you to focus on more strategic tasks.