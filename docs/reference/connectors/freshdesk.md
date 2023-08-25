---
sidebar_position: 1
title: Freshdesk
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Freshdesk is a customer support and helpdesk platform that enables businesses to efficiently manage customer inquiries and tickets. With the Freshdesk connector, you can integrate its features into your applications for seamless customer support automation.

## Prerequisites for Freshdesk Connector

1. Freshdesk Account: Ensure you have an active Freshdesk account with the necessary permissions to access and manage customer support data.

2. API Key: Generate an API key from your Freshdesk account settings. This key will be used for authentication when connecting the Freshdesk connector to your application.

3. Subdomain: Obtain your Freshdesk account's domain URL (e.g., `yourcompany.freshdesk.com`). This will be needed to configure the connector's base URL.

4. Permissions: Make sure the API key has appropriate permissions to access the features and data you intend to integrate, such as ticket retrieval or customer details.


## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `API key`, and `Subdomain` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.


<figure>
  <Thumbnail src="/img/reference/connectors/freshdesk/details.png" alt="To be filled Freshdesk configuration details." />
  <figcaption align = "center"><i>To be filled Freshdesk configuration details.</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action                | Description                                                                                                                                                            |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CreateTicket            | Create a new support ticket in Freshdesk with relevant details.                                                                                                       |
| ViewTicketById          | Retrieve detailed information about a specific ticket using its unique ID.                                                                                            |
| ListConversationOfATicket | Fetch all the conversations associated with a particular ticket.                                                                                                      |
| AddNotesToATicket       | Attach notes to a ticket to provide additional context or updates.                                                                                                    |
| UpdateTicket            | Modify existing ticket details such as status, priority, or assignee.                                                                                                 |
| ViewAllContacts         | Get a list of all the contacts stored in Freshdesk for customer support purposes.                                                                                    |
| ViewContactById         | Retrieve detailed information about a specific contact using their ID.                                                                                                |
| CreateReply             | Add a reply to a ticket's conversation thread to provide customer support.                                                                                             |
| SearchTickets           | Search and retrieve a list of tickets based on specified search parameters.                                                                                          |
| ViewAllTickets          | Fetch a list of all the tickets stored in Freshdesk for comprehensive ticket management and analysis.    |
