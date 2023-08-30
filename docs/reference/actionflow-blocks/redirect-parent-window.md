---
sidebar_position: 1
title: Redirect Parent Window
---

import Thumbnail from '@site/src/components/Thumbnail';

The `Redirect Parent Window` action provides you with the capability to redirect the parent of the iframe to a specific URL. This action is particularly useful when your micro-app is embedded within a parent website, allowing you to seamlessly guide users to an external destination.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/redirectparent/redirectparent.png" alt="Redirect Parent Window" />
<figcaption align='center'><i>Redirect Parent Window</i></figcaption>
</figure>

## Setting up the Redirect Parent Window Action

To utilize the `Redirect Parent Window` action, follow these steps:

1. Under the `Navigate` block, select `Redirect Parent Window`.

2. Click `Continue` to proceed with setting up the redirection.

3. In the `Redirection URL` section, you have two options:
   - You can use a keyword to dynamically retrieve the URL.
   - Alternatively, you can enter a specific URL that points to a page on your parent website. Ensure that the URL starts with "https://" for a secure connection to your parent page.

4. Click `Continue` to proceed.

5. You can also specify conditions under which the action should be executed, as well as the specific environment in which it should take place.

6. Assigning a unique name to the action using the Action Unique Name field is essential. This helps you to identify and manage tasks within the flow.

7. Click `Finish` to complete the setup.

By using the `Redirect Parent Window` action, you can seamlessly guide users from your micro-app to a specific page within the parent website. This feature enhances the integration between your micro-app and the parent website, providing users with a cohesive experience.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/redirectparent/feild.png" alt="Redirect Parent Window" />
</figure>

Whether you're aiming to direct users to additional resources, facilitate external interactions, or ensure a consistent user journey, the `Redirect Parent Window` action is a valuable tool for enhancing the functionality of your embedded micro-app.
