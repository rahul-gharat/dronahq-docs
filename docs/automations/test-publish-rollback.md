---
sidebar_position: 114
---

import Thumbnail from '@site/src/components/Thumbnail';

# Test, Publish, Rollback

## Testing Automation

Upon configuring your automation flow, you can comprehensively test the entire process by simply clicking the `Preview/Play` button located on the top menu.

<figure>
  <Thumbnail src="/img/automation/test-publish-rollback/test.png" alt="Preview/Play Button" width='70%'/>
  <figcaption align = "center"><i>Preview/Play Button</i></figcaption>
</figure>

Please note that testing the automation involving `webhooks` may vary, as these automations typically require sample payloads for accurate assessment. In such cases, clicking the `play` button will prompt a payload modal, allowing you to provide sample data for testing.

<figure>
  <Thumbnail src="/img/automation/webhook/test.png" alt="Test Webhook Automation" width='70%'/>
  <figcaption align = "center"><i>Test Webhook Automation</i></figcaption>
</figure>


After successful execution, you will find the `Run logs` section appearing below, providing a comprehensive overview of the automation flow's status.

### Run logs

The Logs feature enables users to analyze the entire automation process, displaying the date/time and running status of each task within the flow. For further insights on the run logs, kindly refer [here](/automations/run-logs).

<figure>
  <Thumbnail src="/img/automation/test-publish-rollback/log-panel.png" alt="Run Logs Panel" width='80%'/>
  <figcaption align = "center"><i>Run Logs Panel</i></figcaption>
</figure>

### Running Individual Task

In addition to executing the entire automation flow, you have the option to test individual tasks. Simply click on the `play icon` on the specific task to execute it independently. This will provide you with the request, response, and output for that particular task.

<figure>
  <Thumbnail src="/img/automation/test-publish-rollback/individual-task-run.png" alt="Individual Task Run" width='50%'/>
  <figcaption align = "center"><i>Individual Task Run</i></figcaption>
</figure>

:::info task dependency
If a task is dependent on the output of a previous task, running it individually without executing the prior task may result in an error. In such cases, make sure to run the previous task individually before executing the current one.
<figure>
  <Thumbnail src="/img/automation/test-publish-rollback/task-dependency.png" alt="Task Dependency" width='50%'/>
  <figcaption align = "center"><i>Task Dependency</i></figcaption>
</figure>
:::

## Publish the Automation

After meticulously configuring the automation flow and conducting thorough testing, it is time to publish the automation and set it into action. To achieve this, simply click on the `Publish` button.

- `Release Notes`<span style={{ "font-size": "20px", "font-weight": 500, "padding-left": "4px", "color": "#FF5656"}}>*</span> - Provide a concise yet informative description for the publication. This will help users understand the changes or updates made in this version.
- `Version` - Choose the version number to be assigned to the publication. It is essential to select a version that is greater than the latest one, ensuring a clear and organized versioning system.

<figure>
  <Thumbnail src="/img/automation/test-publish-rollback/publish-sidebar.png" alt="Publish sidebar" width='70%'/>
  <figcaption align = "center"><i>Publish sidebar</i></figcaption>
</figure>

:::caution Enable Automation
For the automation to function as intended and be available for seamless execution, ensure that the automation is enabled. You can simply toggle the switch to turn on or off the Automation status. If the automation is `disabled`, it will pause the live automation, and it will no longer be triggered unless enabled again.

<figure>
  <Thumbnail src="/img/automation/test-publish-rollback/enable-automation.png" alt="Enable/Disable Automation" width='70%'/>
  <figcaption align = "center"><i>Enable/Disable Automation</i></figcaption>
</figure>
:::

With the automation now published and active, it will carry out its designated tasks based on the predefined triggers, streamlining your processes and maximizing efficiency. Enjoy the seamless automation experience!

## Rollback

To explore and access previously published versions of the automation, click on the `version` dropdown located in the top menu bar. This action will gracefully unveil a comprehensive list of all the published versions of the automation.

<figure>
  <Thumbnail src="/img/automation/test-publish-rollback/version-modal.png" alt="Version Modal" width='70%'/>
  <figcaption align = "center"><i>Version list modal</i></figcaption>
</figure>

With the power of automation, you possess the flexibility to roll back to any previous version that was published earlier. This enables you to gracefully revert to a known state, ensuring smooth operation and easy recovery.

To initiate a rollback, simply direct your attention to the 'Roll Back' column and click on the `arrow` next to the desired version. 

### Version Preview

Alternatively, for a sneak peek at the structure of a specific version, click on the `eye` icon under the 'Preview' column.

<figure>
  <Thumbnail src="/img/automation/test-publish-rollback/version-preview.png" alt="Version Preview" width='80%'/>
  <figcaption align = "center"><i>Version Preview</i></figcaption>
</figure>

Once you have confidently identified the version you wish to roll back to, make your move by clicking the `Roll back` button or, if you change your mind, simply click on the `X` button to gracefully close the preview.

:::caution live automation
 After performing the rollback, the chosen version becomes a draft version, safely isolated from the live automation. This allows you to meticulously review and fine-tune the automation until you are ready to publish it once again.
:::

With this seamless and versatile rollback mechanism, you can confidently manage and maintain the evolution of your automation, ensuring a smooth and efficient workflow at all times.