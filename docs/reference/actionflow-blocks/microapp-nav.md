---
sidebar_position: 1
title: Microapp Nav
---

import Thumbnail from '@site/src/components/Thumbnail';

# Microapp Nav Action

The `Microapp Nav` action is a powerful feature that allows you to create seamless navigation paths between micro-apps within your ecosystem. This enhances user experience and facilitates smooth transitions between different micro-apps, all within your DronaHQ environment.

<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/microappnav/microappnav.png" alt="Microapp Nav" />
  <figcaption align='center'><i>Microapp Nav</i></figcaption>
</figure>

## Setting up the Microapp Nav Action

To set up the `Microapp Nav` action, follow these steps:

1. Under the `Navigate` block in your action flow, select `Microapp Nav`.

2. Click `Continue` to proceed with configuring the Microapp Nav action.

3. Select App: Choose the target micro-app that you want to navigate to from the current micro-app. This selection defines the destination of the navigation.

4. Dynamic Fields - `Querystring Key` and `Querystring Value`: Here's where the real power of the `Microapp Nav` action comes into play. You can dynamically pass key-value pairs as query parameters to the target micro-app. For instance, you can send user-specific data or context information.

:::info NOTE
Make sure this Querystring key is created in the target microapp.
:::

5. You can specify conditions under which the action should be executed, as well as the specific environment in which it should take place.

6. It's essential to assign a unique name to the action using the Action Unique Name field. This helps you identify and manage tasks within your action flow.

7. Click `Finish` to complete the setup.

With the ability to pass dynamic query parameters, the `Microapp Nav` action opens up a world of possibilities for creating interactive and context-aware user experiences across your micro-apps.

<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/microappnav/feild.png" alt="Microapp Nav" />
</figure>

Whether you're guiding users through a sequence of tasks, providing context-aware content, or ensuring a consistent user journey, the `Microapp Nav` action empowers you to create rich, interconnected experiences within your DronaHQ ecosystem.
