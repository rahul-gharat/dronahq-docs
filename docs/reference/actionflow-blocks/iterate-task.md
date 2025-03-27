---
sidebar_position: 1
title: Iterate Tasks
---

import Thumbnail from '@site/src/components/Thumbnail';


The `Iterate Tasks` action empowers you to efficiently repeat actions based on specific data or inputs. Common development tasks often require repetition under certain conditions. To streamline this process, DronaHQ introduces the `Iterate Task`Action. With the Iterate task, you can group tasks together to be executed iteratively under defined conditions.

## Setting up the Iterate Tasks Action

1. Access the Actions section of any control.

2. Search for `Iterate` in the `On-Screen Actions` section under the `Utility` group.
    <figure>
    <Thumbnail src="/img/reference/actionflow-blocks/iterate-task/iteratetask.png" alt="Iterate Tasks" />
    <figcaption align='center'><i>Iterate Tasks</i></figcaption>
    </figure>

3. Choose a control or keyword from the dropdown list, containing all currently used controls and keywords in your app. The iteration will operate on select controls and keywords such as datastore, multi-select, and others that return responses in list format.
    <figure>
    <Thumbnail src="/img/reference/actionflow-blocks/iterate-task/feild.jpeg" alt="Iterate Tasks" />
    </figure>

   Iterate Tasks supports the following items for iteration:

   - Static Count/Number
   - Array
   - Variable
   - Controls


4. Click `Finish` to add the Iterate task for the selected control.

   :::info NOTE
    You can perform up to 100 iterations only.
   ::: 

## Configuring Task Iteration

1. After setting up the iteration loop for desired controls or keywords, proceed to configure actions or tasks under the loop to be iterated. You can add tasks, server-side actions, and even nest iterations between `ITERATE TASKS START` and `ITERATE TASKS END`.

2. Let's assume you're using a datastore control containing an object with multiple keys and values.

   Data in Datastore:

    <figure>
    <Thumbnail src="/img/reference/actionflow-blocks/iterate-task/datastore.jpeg" alt="Datastore" />
    <figcaption align='center'><i>Datastore</i></figcaption>
    </figure>

3. Set up an iterate task by selecting the datastore in the action of a button.

4. Between the task start and end, add desired tasks under on-screen actions and server-side actions that you want to iterate. For instance, use the `Toast` action under `Dialogs` in on-screen actions.

5. Select keywords from the datastore selected in the loop for the toast. These keywords serve as parameters for the required number of iterations.

    <figure>
    <Thumbnail src="/img/reference/actionflow-blocks/iterate-task/config.png" alt="Keyword" />
    <figcaption align='center'><i>Keyword</i></figcaption>
    </figure>

6. The toast will display data as many times as the title and message data are available in the datastore.

7. You can select any attribute of the object exclusively using keywords. Two default Iterate Task keywords are available:

   - `<Iterate Task Name>.INDEX`: Provides the index of the item from the data, ranging from 0 to length-1 of the data. The number of iterations and iterated data are determined by selecting their index.

   - `<Iterate Task Name>.VALUE`: Provides the whole object/string of that index if you're iterating over an array of objects.

8. Click `Continue` and then `Finish`.

## Iteration in Server-Side Actions

You can include server-side action tasks in iterate tasks, but it requires a variable to store data from the server. Due to differences in request times, the order of received data might not be in sequence. To ensure sequential correctness, custom JavaScript code can be used.

## Nested Iteration

For cases involving multi-dimensional arrays of objects, where iteration is required within each object, you can nest iterations with distinctive actions and tasks.

   <figure>
    <Thumbnail src="/img/reference/actionflow-blocks/iterate-task/nest.jpeg" alt="Nested Iteration" />
    <figcaption align='center'><i>Nested Iteration</i></figcaption>
    </figure>

## Putting Iteration into Action

With the click of a button, the iterative toast action takes place. The number of iterations matches the number of indexes and values available in the datastore.

:::tip
 When binding a list-type (array of JSON objects) keyword, accessing `Keyword.KeyName` in any other task within the iterate scope will provide that index's specific key value, rather than the entire array value.
:::

   <figure>
    <Thumbnail src="/img/reference/actionflow-blocks/iterate-task/key.jpeg" alt="Nested Iteration" />
    </figure>

In the image above, choosing a specific key like name or email will iterate through that particular key-value only.

