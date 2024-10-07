---
sidebar_position: 1
title: SMS Action
---

import Thumbnail from '@site/src/components/Thumbnail';


The SMS action in DronaHQ empowers your app to send text messages directly. This feature is particularly useful when you need to enable users to send SMS to a configured phone number, which can either be a default number or dynamically fetched from an input control or sheet column.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/sms/sms.png" alt="SMS" />
<figcaption align='center'><i>SMS</i></figcaption>
</figure>

### Setting up the SMS Action

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/sms/feild.jpeg" alt="SMS" />
</figure>

1. Phone Number (Mandatory Field): Start by specifying the phone number in a valid format to which you want to send the SMS. You can enter a single number, multiple numbers separated by commas, or even fetch the number dynamically using keywords or variables.

   > Example: `123-456-7890` or `123-456-7890, 987-654-3210`

2. Message (Mandatory Field): Enter the message you want to deliver to the specified phone number(s). This is the content of the SMS that will be sent.

3. Execution Conditions: Define the conditions under which this action should execute. This allows you to control when the SMS action is triggered.

4. Environment: Specify the environment in which the SMS action should take place, ensuring compatibility with your app's workflow.

5. Action Unique Name: Assign a unique name to this action. This helps in identifying and managing tasks within your app's action flow effectively.

By incorporating the SMS action in your app, you can seamlessly integrate SMS functionality, enhancing user communication and engagement.

Integrate the SMS action into your app today, enabling users to send text messages effortlessly.
