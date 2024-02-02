---
sidebar_position: 2
title: Actionflow debugging
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Actionflow debugging

There are times that you would want to debug specific actionflows while building robust apps on DronaHQ. Consider that you have written a long detailed flow on a button click which might have multiple blocks and you want to check the request response of each block and the handoff along with the conditions that get evaluated. DronaHQ provides a comprehensive toolkit to debug the actionflows step by step in 2 modes:

- [Build time debugging](/debugging-apps/connector-logs/#build-time-debugging)
- [Preview time debugging](/debugging-apps/connector-logs/#build-time-debugging)

## Build time debugging

You can debug the while you are building and configuring the actionflows visually. Each block has a play button on it using which you can get appropriate request, response and outputs (of that specific block) which can be used to build more robust flows. 

<figure>
  <Thumbnail src="/img/debugging-apps/block-debugging.png" alt="Buildtime debugging" width='100%'/>
  <figcaption align = "center"><i>Build time debugging</i></figcaption>
</figure>

## Preview time debugging

There are times when you need more dynamic and interactive debugging with different usecases which is not possible during build time. DronaHQ provides preview time debugging which allows you to debug your apps while interacting with it and also do more realistic debugging while behaving like an end user. 

You need to follow the below steps to enable and debug at preview time:

- **Step 1**: Add a breakpoint from the top bar of `Preview` to any event you want to debug on any screen.
- **Step 2**: Whenever that event occurs, you will see a bottom panel open up
- **Step 3**: You can do the following actions:
    - **Play**: This will execute the whole actionflow and you can click on each step and check the whole footprint and details 
    - **Stepper**: This will execute single block at a time which will let you debug each step before going to the next one
    - **Fast forward**: This will execute the whole actionflow and move ahead
    - **Watchlist**: You can view the data in each control, data query or keyword reflecting live at realtime as the action blocks progress

<figure>
  <Thumbnail src="/img/debugging-apps/breakpoint.png" alt="Breakpoint" width='100%'/>
  <figcaption align = "center"><i>Adding a breakpoint</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/debugging-apps/preview-debugging.png" alt="Preview time debugger" width='100%'/>
  <figcaption align = "center"><i>Preview time debugger</i></figcaption>
</figure>

:::caution Please Note

There are times that you would not be able to debug Nesting of blocks using branches for more than 1 level, which is because your blocks might run in parallel at the exact same time and the debugger stops execution serially. It is advisable to use [Build time debugging](/debugging-apps/connector-logs/#build-time-debugging) in this case.

:::