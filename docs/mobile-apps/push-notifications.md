---
sidebar_position: 5
---

import Thumbnail from '@site/src/components/Thumbnail';

# Push notifications

Push notifications in DronaHQ offer a powerful way to engage users and deliver real-time updates, alerts, and personalized messages directly to their mobile devices. With push notifications, creators can keep users informed and engaged, enhancing user retention and overall app experience.

Push notifications are supported by DronaHQ End user portal - `Android` and `iOS` Mobile App.

## Configure Push Notification task in Actionflow

Let us see how to add a Push notification. 

1. So to one of your screen, add a `button` control and go to its `Events`. On the `button_click` event, add an Action flow.

2. Under `Server Side` Actions, select `Push Notification` task and click `Continue`.


<figure>
  <Thumbnail src="/img/mobile-apps/push-notification-configure.png" alt="Configure Push Notification" />
  <figcaption align = "center"><i>Configure Push Notification</i></figcaption>
</figure>

3. Select the `App` to be opened when the user clicks the notification received in the `Mobile App`. 

4. Enter the User List. This is the array of users. Make sure that you use an Array format for providing the list of users, even when you would be adding a single user id. These users will be those that are added in your `Manage Users` listing.

5. Enter the Notification heading, Notification Title (a mandatory field), Notification body, Notification Icon URL and Notification Image URL and click Continue. 

You can also use Action flow `keywords` to provide values to the respective fields.

6. You can specify a condition to `When to Execute` the particular action flow, Action unique name (mandatory field), and also add any output variables. These variables can then be used in your other Actionflow blocks. Click `Finish` and the Push notification task is ready.

The Push notification task returns Error or Success. So you can define further tasks to be completed on error or success of the push notification task.

<figure>
  <Thumbnail src="/img/mobile-apps/push-notification-actionflow.png" alt="Push Notification Actionflow" />
  <figcaption align = "center"><i>Push Notification Actionflow</i></figcaption>
</figure>


It is important to remember that you need to publish your app first before your notifications can be received by the respective users or group of users in the Super App. Also, it is important to note that the user who would be receiving the notification is logged in to the App so that notifications are received by the user. The iOS users also need to make sure that the Push notification permissions are enabled.

:::info NOTE

- You need to publish your app first before your notifications can be received by the respective users or group of users in the Mobile App.
- User who would be receiving the notification must be logged in to the App so that notifications are received by the user.
- The iOS users also need to make sure that the Push notification permissions are enabled.

:::

## Sending Push Notification

So now when you run this form and trigger the `button_click` event on click of the `button` control, you would be able to see the notification in your Mobile app.

<figure>
  <Thumbnail src="/img/mobile-apps/push-notification-form.png" alt="Push Notification Form" />
  <figcaption align = "center"><i>Push Notification Form</i></figcaption>
</figure>

The notification can be seen in the illustration below. When you click on any of the notifications, it will open the App specified. In the example here `TestApp_Vedavati` App would be opened when you click on the Notification. You can note the configuration done for the example.

<figure>
  <Thumbnail src="/img/mobile-apps/push-notification-sample-configure.png" alt="Push Notification Configured" />
  <figcaption align = "center"><i>Push Notification Configured</i></figcaption>
</figure>

So the notification received on click of the Push notification button is as seen below on the DHQ Life mobile app.

<figure>
  <Thumbnail src="/img/mobile-apps/push-notification-received.jpg" alt="Push Notification Received" />
  <figcaption align = "center"><i>Push Notification Received</i></figcaption>
</figure>
