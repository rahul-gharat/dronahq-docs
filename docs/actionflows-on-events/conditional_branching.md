---
sidebar_position: 3
title: Conditional branching
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Conditional branching

DronaHQ provides a way to use `If` statements or `Switch` statements using branching logic in actionflows. For a lot of cases you would want to build a completely different workflow or set of actions depending on the actions the user has taken or the data the user has entered or even the data received from a query in any of the above actions. Branching lets your define a condition for each branch and if its `true` that particular sequence gets executed. You can also next multiple branches inside each other. 

<figure>
  <Thumbnail src="/img/actionflows-on-events/branching.png" alt="branching" width='100%'/>
  <figcaption align = "center"><i>Branching in actionflows</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/actionflows-on-events/condition.png" alt="Condition" width='100%'/>
  <figcaption align = "center"><i>Branch condition</i></figcaption>
</figure>