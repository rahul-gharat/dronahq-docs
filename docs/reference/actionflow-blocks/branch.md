---
sidebar_position: 1
title: Branch
---

import Thumbnail from '@site/src/components/Thumbnail';

## Conditional Task Execution with Branch

The `Branch` feature in DronaHQ empowers you to create conditional tasks effortlessly, without the need to write a single line of code. This powerful capability allows you to define rules or conditions for different tasks and then execute actions based on whether those conditions are met.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/branch/branch.png" alt="Branch" />
<figcaption align='center'><i>Branch</i></figcaption>
</figure>

### Visualizing Conditional Logic

Think of a scenario where your app needs to make decisions based on user input. For example, you might want to show a confirmation message if a user rates your app with 5 stars but display a different message for lower ratings. This is where the Branch feature comes into play.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/branch/visual.png" alt="Branch" />
<figcaption align='center'><i>Branch</i></figcaption>
</figure>

### Defining Multiple Branches

Typically, you'll have at least two branches to define. However, you can create more branches if your application logic requires it. These branches often follow other tasks like approval steps, user input, or data retrieval actions.

In each branch, you specify a condition that evaluates to either TRUE or FALSE. Let's take the 5-star rating example mentioned earlier. In this case, the condition might be something like "If the rating given is 5 stars."

### Conditions and Execution

When any of these conditions are met, the respective branch's actions are executed accordingly. This allows you to tailor the app's behavior based on specific criteria, creating a more dynamic and personalized user experience.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/branch/example.png" alt="Branch" />
<figcaption align='center'><i>Branch</i></figcaption>
</figure>

In essence, the `Branch` feature empowers you to incorporate conditional logic seamlessly into your app's flow, providing flexibility and precision in how your app responds to user interactions.
