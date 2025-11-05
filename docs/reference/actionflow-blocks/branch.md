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

:::note
When configuring a branch action flow, a **converge node** must be included to serve as the convergence point for all branches within the flow. This node is mandatory and cannot remain empty.
If no specific action or display behavior is required at this point, a false condition node may be used as a placeholder.
:::

  <div style={{ position: 'relative', paddingBottom: 'calc(45.729166666666664% + 41px)', height: '0', width: '100%' }}>
      <iframe
        src="https://demo.arcade.software/qilD1EDIh61lfbrRkqx7?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
        title="Create and Customize a Toast Notification Workflow"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
      />
    </div>

### Conditions and Execution

When any of these conditions are met, the respective branch's actions are executed accordingly. This allows you to tailor the app's behavior based on specific criteria, creating a more dynamic and personalized user experience.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/branch/example.png" alt="Branch" />
<figcaption align='center'><i>Branch</i></figcaption>
</figure>

In essence, the `Branch` feature empowers you to incorporate conditional logic seamlessly into your app's flow, providing flexibility and precision in how your app responds to user interactions.
