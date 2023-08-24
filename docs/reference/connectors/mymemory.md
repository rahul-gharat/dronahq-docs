---
sidebar_position: 1
title: MyMemory
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


MyMemory Connector empowers you to effortlessly incorporate translation capabilities into your applications. It leverages the MyMemory Translation API, enabling seamless language translation for your content and enhancing multilingual communication.


## Prerequisite 

1. MyMemory API Key: Obtain an API key from MyMemory by signing up for an account and creating a new API key. This key is required to authenticate your requests when using the MyMemory Connector.

2. Environment Setup: Ensure you have a development environment capable of making HTTP requests to external APIs. This could involve using programming languages like Python, JavaScript, or any language that supports HTTP requests.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `API key` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.


<figure>
  <Thumbnail src="/img/reference/connectors/mymemory/details.png" alt="MyMemory with configuration details." />
  <figcaption align = "center"><i>MyMemory with configuration details.</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.

## Supported API endpoints

| Action                | Description                                                                                              |
|-----------------------|----------------------------------------------------------------------------------------------------------|
| TranslateText | It  allows you to translate text from one language to another. |


