---
sidebar_position: 1
title: Validate Screen
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Validate Screen Action

The `Validate Screen` action is a valuable tool to ensure that data from a specific screen is validated before proceeding to the next screen or executing any further actions. Here's how to use it effectively:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/validate-screen/validate-screen.png" alt="Validate Screen" />
<figcaption align='center'><i>Validate Screen</i></figcaption>
</figure>

1. Select the Screen(s): In the `Validate Screen` action configuration, you can choose one or more screens from your app that need data validation before continuing. This step is essential to specify which screens are involved in the validation process.

2. Validation Outcome: The action returns either `True` or `False` based on the validation result. You can use this outcome to determine the next steps in your workflow. For example, if validation fails (`False`), you might want to display an error message to the user or prevent navigation to the next screen until valid data is provided.

3. Condition and Environment: As with other actions, you can specify under what conditions this action should execute and in which environment. This flexibility allows you to tailor the validation process to your app's specific needs.

4. Action Unique Name: Assigning a unique name to the action is essential for identifying tasks in your Action Flow easily.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/validate-screen/feild.png" alt="validate-screen" />
</figure>

By using the `Validate Screen` action, you can enhance the data integrity of your app by ensuring that critical information is validated before proceeding. This helps deliver a more robust and user-friendly experience to your app's users.
