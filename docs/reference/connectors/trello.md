---
sidebar_position: 1
title: Trello
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


Trello is a versatile project management tool that uses boards, lists, and cards to help teams organize tasks and projects visually. 


## Prerequisite


1. API Key and Token: To connect with the Trello API, you'll need an API key and a user token. These credentials are obtained by generating a developer API key from the Trello developer website. Make sure to keep your API key and token secure.

4. Access to Trello App: If you plan to use a custom Trello app for integration, ensure you have created the app within your Trello account. This step is required for some advanced features and integrations.

5. Permissions: Make sure you have the necessary permissions to interact with the chosen board and list within Trello. This includes the ability to create, edit, and manage cards.


## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `API key` and `API Token` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

<figure>
  <Thumbnail src="/img/reference/connectors/trello/enterdetails.png" alt="Trello to be enter Sample details." />
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints


| Action                   | Description                                           |
|--------------------------|-------------------------------------------------------|
| GetMyBoards              | Retrieve a list of boards associated with your account. |
| GetBoardLists            | Retrieve the lists within a specific board.            |
| AddCard                  | Add a new card to a specified list on a board.        |
| GetCardsInList           | Retrieve the cards within a specific list on a board.  |
| GetAllOpenCardsInBoard   | Retrieve all open cards within a specific board.      |




