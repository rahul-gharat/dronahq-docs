---
sidebar_position: 1
title: Navigate To
---

import Thumbnail from '@site/src/components/Thumbnail';

The `Navigate To` block within Action Flows facilitates the configuration of an action that directs users to a specific form.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/navigate-to/navigate.jpeg" alt="Navigate To" />
<figcaption align='center'><i>Navigate To</i></figcaption>
</figure>

## Setting up the Navigate To action

- Navigate to: This field specifies the form to which the navigation should occur from the current form.

- Transition: This option allows you to define a transition effect when moving between pages. You can choose from options such as sliding to the right, sliding to the left, sliding from the top, or sliding from the bottom.

- Reset Target Screen: Here, you can specify whether the target screen should be reset. The values available are `True` or `False`.

- Validate Current Screen: This setting determines whether to proceed with navigation to the next form if the current screen's data is not valid. You can set this value to either `True` or `False`.


<figure>
<Thumbnail src="/img/reference/actionflow-blocks/navigate-to/feild.png" alt="Navigate To" />
</figure>

You can also specify conditions under which the action is to be executed, as well as the specific environment in which it should take place. Providing an Action Unique Name is crucial as it helps you identify the tasks within the flow.

In summary, the `Navigate To` block streamlines the process of defining navigation paths within your app, enhancing user experience and interactions.


Remember that the proper use of this block can significantly contribute to the overall usability and flow of your application.
