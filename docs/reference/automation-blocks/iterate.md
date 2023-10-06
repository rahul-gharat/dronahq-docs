---
sidebar_position: 1
title: Iterate
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The Automation Block known as `Iterate` is a powerful tool designed to simplify repetitive task execution. Unlock its potential to iterate through lists, collections, or data sets, making it an invaluable asset for automating tasks that require repetitive actions.

<figure>
<Thumbnail src="/img/reference/automation-blocks/iterate/iterate.jpeg" alt="Iterate" />
</figure>

### Streamlining Repetitive Tasks

Imagine scenarios where you need to perform the same action on multiple items in a list, or process data records one by one. This is where the Iterate automation block shines.

<figure>
<Thumbnail src="/img/reference/automation-blocks/iterate/iterate-visual.jpeg" alt="Iterate" />
<figcaption align='center'><i>Iterate</i></figcaption>
</figure>

### Configurable Iteration

With Iterate, you can configure the block to iterate through a list, collection, or data set, specifying the actions to be performed on each item. For example, you can automate the process of sending personalized emails to a list of recipients.

<figure>
<Thumbnail src="/img/reference/automation-blocks/iterate/iterate-config.png" alt="Iterate" />
<figcaption align='center'><i>Iterate Configuration</i></figcaption>
</figure>

### Precision in Repetition

Iterate ensures precision in repetitive tasks by executing the specified actions on each item systematically. It minimizes manual effort and reduces the chances of errors when dealing with repetitive processes.

<figure>
<Thumbnail src="/img/reference/automation-blocks/iterate/iterate-example.jpeg" alt="Iterate" />
<figcaption align='center'><i>Iterate</i></figcaption>
</figure>


- `ITERATION_NAME.INDEX`: Represents the current index of the iteration. For example, during the first iteration, `ITERATION_NAME.INDEX` will be 1.

- `ITERATION_NAME.VALUE`: Represents the value of the current item in the iteration. 

Example 1: (Array of Values)
- Consider an array of names: `['John', 'Rose', 'Max']`.
- On the first iteration, `ITERATION_NAME.INDEX` will be 1, and `ITERATION_NAME.VALUE` will be 'John'.

Example 2: (Array of Objects)
- Consider this array of objects:
  ```javascript
  [{ 
      name: 'John',
      age: 32
  }, {
      name: 'Rose',
      age: 30
  }, {
      name: 'Max',
      age: 28
  }]
  ```
- On the first iteration, `ITERATION_NAME.INDEX` will be 1.
- You can access specific property values from each object:
  - `ITERATION_NAME.VALUE["name"]` will be 'John'.
  - `ITERATION_NAME.VALUE["age"]` will be 32.

- On the second iteration, `ITERATION_NAME.INDEX` will be 2.
- For the second object in the array:
  - `ITERATION_NAME.VALUE["name"]` will be 'Rose'.
  - `ITERATION_NAME.VALUE["age"]` will be 30.

In essence, the "Iterate" automation block simplifies and accelerates repetitive task execution, allowing you to efficiently handle large sets of data or lists with ease.


## Nested Iteration

For cases involving multi-dimensional arrays of objects, where iteration is required within each object, you can nest iterations with distinctive actions and tasks.

   <figure>
    <Thumbnail src="/img/reference/actionflow-blocks/iterate-task/nest.jpeg" alt="Nested Iteration" />
    <figcaption align='center'><i>Nested Iteration</i></figcaption>
    </figure>

