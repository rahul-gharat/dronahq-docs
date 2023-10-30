---
sidebar_position: 1
title: Zoom
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Zoom Connector allows you to seamlessly interact with Zoom's features. You can list scheduled or recorded meetings and create new meetings using the connector's actions.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window asking you to sign-in into your Zoom account. Continue with the steps and give access to DronaHQ to connect with your Zoom ID and its information.


<figure>
  <Thumbnail src="/img/reference/connectors/zoom/details.png" alt="Sign-in to your Zoom account" />
  <figcaption align = "center"><i>Sign-in to your Zoom account</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action                | Description                                                                                  |
|-----------------------|----------------------------------------------------------------------------------------------|
| GetProfile            | Retrieve user profile details from Zoom, including information like name and email.         |
| GetUpcomingMeetings   | Fetch a list of upcoming meetings for a user, providing details such as time and participants.|
| CreateMeeting         | Create a new Zoom meeting with specified settings, participants, and scheduling information.|


