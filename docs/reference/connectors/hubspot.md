---
sidebar_position: 1
title: HubSpot
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Effortlessly integrate HubSpot capabilities into your applications using the HubSpot connector, enabling seamless management of customer interactions, marketing campaigns, and more.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window askinging you to sign-in into your HubSpot account. Continue with the steps and give access to DronaHQ to connect with your HubSpot ID and its information.


<figure>
  <Thumbnail src="/img/reference/connectors/hubspot/signin.png" alt="Sign-in to your HubSpot account" />
  <figcaption align = "center"><i>Sign-in to your HubSpot account</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.


## Supported API endpoints

| Action          | Description                                                                                              |
|-----------------|----------------------------------------------------------------------------------------------------------|
| GetContacts     | Retrieve a list of contacts from HubSpot, providing insights into customer interactions and details.    |
| CreateContact   | Add new contacts to HubSpot, allowing you to manage customer relationships and engagement.            |
| GetOwners       | Fetch a list of owners associated with HubSpot contacts, aiding in assigning ownership and tracking.  |
| SearchContacts  | Utilize search functionality to find specific contacts based on criteria, enhancing targeted marketing.|
| GetDeals        | Retrieve information about deals from HubSpot, facilitating effective management of sales processes.  |