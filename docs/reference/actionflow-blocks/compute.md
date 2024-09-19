---
sidebar_position: 1
title: Compute
---

import Thumbnail from '@site/src/components/Thumbnail';


:::caution

This Action block has been deprecated. Please use the 'Set Data Queries Values' action instead. You can read the documentation [here](../set-data-queries-value).

:::

## Utilizing Compute in Your Action Flow

The `Compute` block in DronaHQ allows you to set formula variables and utilize formulas to calculate and assign values to these variables. This feature is particularly useful when you need to perform dynamic calculations based on your app's data.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/compute/compute.png" alt="Compute" />
<figcaption align='center'><i>Compute</i></figcaption>
</figure>

### Setting Formula Variables

To use the Compute block, follow these steps:

1. Under the `Logic Block` section, select `Compute` and click `Continue`.

2. In the `Configure Action Fields`, add the variables you want to define and specify the formulas to calculate their values. For example, you can calculate the maximum value from a row of data and store it in a variable.

3. Provide a clear and descriptive `Action Unique Name` to identify this compute action in your action flow.

4. Click `Finish` to complete the setup.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/compute/feild.png" alt="Compute" />
</figure>

### Practical Use Cases

In the example above, we determine the maximum value from a row of data in a form. We've defined a variable called `Max_val` and added the `Max()` formula to calculate the maximum value. When you run this action flow, the variable `Max_val` will be assigned the calculated value.

Now, if you want to send an email notification containing this calculated value, you can reference it in the email action as `[actionblock.formulavariable]`, which in this example is `MaxVariable.Max_val`.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/compute/example1.png" alt="Compute" />
<figcaption align='center'><i>Compute</i></figcaption>
</figure>

### Precision Calculations

The `Compute` block empowers you to perform precise calculations and set variables based on dynamic data. This functionality can be valuable for a wide range of scenarios, from data analysis to generating notifications with calculated values.

Whether you're calculating statistics, aggregating data, or customizing messages with dynamic content, the `Compute` block gives you the flexibility to create more intelligent and responsive apps.
