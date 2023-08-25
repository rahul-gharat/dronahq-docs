---
sidebar_position: 1
title: Google Calendar
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Google Calendar connector in the DronaHQ helps you to connect with your Google-associated calendar and perform various functionalities in it. You can then further use the connector by integrating it with various controls in your microapp.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window askinging you to sign-in into your Google account. Continue with the steps and give access to DronaHQ to connect with your Google Calendar ID and its information.

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action           | Description |
|------------------|-------------|
| GetCalendarList  | Retrieve a list of calendars associated with your Google account. |
| GetPrimaryCalendar | Fetch the primary calendar associated with your Google account. |
| AddQuickEvent    | Quickly add a new event to your Google Calendar with minimal details. |
| AddDetailedEvent | Add a detailed event to your Google Calendar with comprehensive information. |

## Using Google Calendar connector

### Fetch user calendars
For instance, if we want to see all the available calendars of our account, we have to go to the data bind section of our control and select the Google Calendar connector, select `GetCalendarList` endpoint, and finally select our configured account.

Provide the `message ID or calendar ID` which same as the google login email address, then bind the keys as columns for the control and click `Test & Finish`.

<figure>
  <Thumbnail src="/img/reference/connectors/calendar/key.png" alt="Sign-in to your Asana account" />
</figure>

### Adding a quick event

Now if you want to add a quick event in your Google Calendar you can do it by selecting the `AddQuickEvent` endpoint. This will add an event with the summary/ details provided by the user.

You can trigger it through actions of several controls.

Let’s try this out using the button control. In the action of the button control, we will add the server-side action of the Google Calendar connector. Select the `AddQuickEvent` endpoint then select the configured account.

Next, it will ask you to choose the calendar from your account, to where you want to add the event. Also, you need to describe the event you want to add. This data can be fetched from other input controls using keywords as well.

<figure>
  <Thumbnail src="/img/reference/connectors/calendar/key2.png" alt="Sign-in to your Asana account" />
</figure>

Check your calendar, a quick event is added to it with the mentioned event details.

<figure>
  <Thumbnail src="/img/reference/connectors/calendar/event.png" alt="An event has been added" />
  <figcaption align = "center"><i>An event has been added</i></figcaption>
</figure>