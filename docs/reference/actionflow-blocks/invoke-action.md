---
sidebar_position: 1
title: Invoke ActionFlow
---
import Thumbnail from '@site/src/components/Thumbnail';

## Trigger Actions Across Different Controls

The Invoke ActionFlow feature in DronaHQ is a client-side action that empowers you to trigger events of different controls from within an action flow. This powerful functionality allows you to create interactive and dynamic user experiences by synchronizing actions across various parts of your app.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/invoke-action/invoke-action.png" alt="Invoke Action Window" />
<figcaption align='center'><i>Invoke Action Window</i></figcaption>
</figure>

### Understanding the Invoke ActionFlow Action

With the Invoke ActionFlow action, you can add triggers for actions associated with controls in the action flow of other controls. This means that you can initiate actions on one control based on specific conditions or events occurring in another control's action flow.

### Using the Invoke ActionFlow Action

To use the Invoke ActionFlow action:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/invoke-action/feild.jpeg" alt="Invoke Action Window" />
</figure>

1. Select the control that should trigger the action and navigate to its Action Flow.

2. Add the Invoke ActionFlow action block.

3. Specify the target control whose action flow you want to trigger.

4. Select the action you want to invoke from the target control's action flow.

5. Configure any additional parameters or conditions as needed.

6. Save your changes.

Now, when the event or condition specified in the source control's action flow occurs, it will trigger the action in the target control's action flow, creating a seamless and interactive user experience.


