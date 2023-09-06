---
sidebar_position: 1
title: Push Notification
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Push Notifications Action 

Push notifications are a powerful way to engage with users and keep them informed about important updates or events within your app. With Action Flows, you can easily set up and send push notifications to users of your mobile app. Here's how to do it:

1. Add a Button for Trigger: Start by adding a button to one of your app's screens. This button will trigger the push notification when clicked. In the button's click event, add an Action Flow.

2. Select Push Notification Task: Within the Action Flow, under Server-Side Actions, select the `Push Notification` task and click `Continue.`

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/push-notification/push-notification.png" alt="Push Notification" />
<figcaption align='center'><i>Push Notification</i></figcaption>
</figure>

3. Configure Push Notification:
   - Microapp: Select the microapp that should open when the user clicks the notification.
   - User List: This is an array of users who will receive the notification. Even if you're sending the notification to a single user, use an array format.
   - Notification Heading and Title: These are mandatory fields for your notification. Provide a title that briefly describes the notification.
   - Notification Body: Add the main content of your notification.
   - Notification Icon URL: You can specify a URL for the notification icon if needed.
   - Notification Image URL: Similarly, provide a URL for the notification image.
   
4. Action Configuration:
   - Specify when this action should execute.
   - Choose the environment for execution.
   - Assign a unique name to the action.
   - Add any variables if necessary, which can be used in your responses.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/push-notification/action.png" alt="push-notification" />
</figure>

5. Completion Handling: You can define further actions to be taken based on the success or failure of the push notification task.

6. Publish Your App: To ensure that users receive notifications, you must publish your app first. Additionally, users must be logged into the app, and iOS users need to enable push notification permissions.

Now, when you run your app and trigger the action by clicking the button, users will receive the push notification, allowing them to stay informed and engaged with your app.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/push-notification/preview.jpeg" alt="push-notification" />
</figure>


With Action Flows and push notifications, you can effectively communicate with your app's users and enhance their experience.
