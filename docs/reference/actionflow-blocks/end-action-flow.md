---
sidebar_position: 1
title: End Action Flow
---

import Thumbnail from '@site/src/components/Thumbnail';


The End Action Flow is a native block within the Studio's on-screen action category. It serves the critical role of terminating an entire action flow when certain conditions are met.

### Setting up the End Action Flow Action

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/end-action-flow/end-action-flow.png" alt="End Action Flow" />
<figcaption align='center'><i>End Action Flow</i></figcaption>
</figure>


1. Conditions for Termination: In a typical use case, End Action Flow is employed within an action flow with specific conditions. When these conditions are satisfied or evaluate as true, the entire subsequent action flow is terminated immediately.


2. Enhancing Control Flow: End Action Flow significantly enhances control flow within your app's action flow logic. It allows you to build dynamic and conditional workflows, ensuring that actions proceed or halt based on specific criteria.

:::info NOTE

It's essential to note that after using the BRANCH logic in an on-screen action, you won't find the End Action Flow native block within any branch leg. This is because End Action Flow is intended to terminate the primary action flow, and branching creates separate logical paths.

:::
