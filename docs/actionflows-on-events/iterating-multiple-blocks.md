---
sidebar_position: 2
---

import Thumbnail from '@site/src/components/Thumbnail';

# Iterating multiple blocks

We can use `Iterate Tasks` in action flow, to execute multiple set of repeated actions on array of data. Below are the various ways in which you can iterate multiple blocks

 
## Setting up Iterate Tasks 
 
1.	Go to the `Events` of any control/screen, and select `add action`. 
1.	Click to add an action or connector. Search for `Iterate Tasks` in `On-Screen Actions` under the `Utility` group. 
1.	Enter `Count/Array` indicating number of times the iteration will be run from `START to END`. You can select `control` or `keyword` from a `Use Keywords` dropdown list, consisting of all the in-use controls, keywords and data queries available presently in your app.
1. Click on `Finish` and then the iterate task will be added for the selected control. 

<figure>
  <Thumbnail src="/img/actionflows-on-events/iterating-multiple-blocks.png" alt="Iterate Tasks" />
  <figcaption align = "center"><i>Iterate Tasks</i></figcaption>
</figure>
  

:::caution PLEASE NOTE

MAX `100` iterations can be performed. 

:::

## OUTPUT Keywords of Iterate Tasks

The outputs from the `Iterate Tasks`, represented by the placeholder {{ITERATETASKS}}, can be referenced in other action blocks inside  `Iterate Tasks`, where `ITERATETASKS` is name of the Iterate Tasks.
    
 | Output | Description  | 
  | ----------------- |---------------------------- |
|  {{ITERATETASKS.INDEX}}            | It can be used to get the current index of the item of the data given for iteration task. It starts from `0` and goes up to `length-1` of the data. |
|  {{ITERATETASKS.VALUE}}                 | It will have the object/string of the current index of the data given for iteration task. If you have an iterated array of objects, then it will return the entire object of current index. For eg. If its an array of json objects, then you can get `product_id` for current json object using `{{ITERATETASKS.VALUE["product_id"]}}`. |


## Configuring iteration of a task 
 
After setting up the number of iterations, the next is to set up the `actions` in the iteration loop which need to be repeated. You can simply add other tasks or server-side actions as well as perform nested iterations between `ITERATE TASKS START` and `ITERATE TASKS END`. 
 

:::info PLEASE NOTE

- You will get Single value when you use `OUTPUT` variable of one action block in subsequent action block within `ITERATE TASKS`
- You will get Array of value when you use `OUTPUT` variable of one action block in subsequent action block outside `ITERATE TASKS`

:::

## Iterating Server-side actions
 
You can also add `server-side action` tasks to the iterate tasks. Each Iteration leg run `parallelly` and are mutually exclusive, so you can not use `output variables` of one task from `first iteration` into another task of `second iteration leg`.

## Nested Iteration 
 
You can even add multiple iterations in a nested form. There might be cases where data is available in a multi-dimensional array of objects, requiring iteration in each object. In that case you can nest the iterations one inside another along with distinctive actions and tasks. 

:::caution Tasks that are not supported in Iterate Tasks

1. Branch
1. End Action Flow
1. Confirm
1. Popup

:::