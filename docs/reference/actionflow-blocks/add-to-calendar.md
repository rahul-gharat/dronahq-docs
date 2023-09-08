---
sidebar_position: 1
title: Add to Calendar
---
import Thumbnail from '@site/src/components/Thumbnail';

## Setting up the Add to Calendar Action

You can seamlessly add events to your device's calendar using action flows. This feature is incredibly useful for creating reminders for various scenarios, such as appointments, meetings, and more. To set up an event in your calendar, you'll need date picker controls on your forms.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/add-to-calendar/add-to-calendar.png" alt="Add to Calendar" />
<figcaption align='center'><i>Add to Calendar</i></figcaption>
</figure>

1. Configure Event Details: In your action flow, navigate to `On-screen Actions` and select the `Edit` block. Here, you can set up the event details:

   - Event Title: Specify the title or name of the event.
   - Start Date: Define the start date and time for the event. You can use keywords and control values to dynamically set this field.
   - End Date: Specify the end date and time for the event. Similar to the start date, you can use keywords and control values to set this field.


2. Action Unique Name: Provide a unique name for this action to easily identify it within your action flow.

3. Conditions and Environment: Define when and where this action should execute by specifying conditions and the target environment.

<figure>
<Thumbnail src="/img/reference/actionflow-blocks/add-to-calendar/feild.jpeg" alt="add-to-calendar" />
</figure>


With these settings configured, your action flow is ready. When you run your app, you can enter event details, select a date, and upon clicking the action button, the event will be added to your device's default calendar app.
