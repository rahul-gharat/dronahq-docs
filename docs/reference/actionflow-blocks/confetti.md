---
sidebar_position: 1
title: Confetti
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Confetti Action

The Confetti action in DronaHQ can be a delightful addition to your app when you want to celebrate achievements or positive interactions. Whether it's receiving high ratings, successfully completing a form, or any other milestone, you can trigger a confetti celebration within your action flow.

To use the Confetti action, follow these steps:

1. Accessing Confetti Action: Navigate to your Action Flow and go to the `Utility Block > Confetti` action.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/confetti/confetti.png" alt="Confetti" />
<figcaption align='center'><i>Confetti</i></figcaption>
</figure>

2. Configuring Confetti: Customize the confetti effect by configuring the following fields:
   - Particle: Set the number of confetti particles you want to display.
   - Spread: Specify the angle (in degrees) at which the confetti particles should spread from the center.
   - X Origin: Define the X-axis coordinates for the confetti origin (between 0 and 1). For example, 0.5 represents the center of the X-axis.
   - Y Origin: Set the Y-axis coordinates for the confetti origin (between 0 and 1). For example, 0.5 represents the center of the Y-axis.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/confetti/feild.png" alt="confetti" />
</figure>

3. Completing the Configuration: After configuring the confetti effect, click `Continue` and provide a unique task name for reference. You can also set conditions for when the confetti should execute and specify the execution environment.

Now, let's consider an example: You want to celebrate when users rate a restaurant with a score of 4 or higher. In this case, you can add a rating control and an action button to your form. Within the action flow, create a branch to check the rating and add a popup task for ratings below 4, and a popup task combined with a confetti task for ratings equal to or above 4. Optionally, you can specify conditions in the Confetti action to execute it when the rating is greater than or equal to 4.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/confetti/example1.jpeg" alt="confetti" />
</figure>

When you run the form, the confetti will spread across the screen as a celebration when the rating meets the specified criteria. The appearance of the confetti can be customized based on the values you set for X origin, Spread, and other parameters.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/confetti/example2.jpeg" alt="confetti" />
</figure>

Here's a preview of the confetti appearing from the left corner:

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/confetti/example3.jpeg" alt="confetti" />
</figure>

The Confetti action adds a fun and engaging element to your app to celebrate user achievements or interactions.
