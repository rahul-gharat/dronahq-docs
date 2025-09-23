---
sidebar_position: 1
title: OpenRouter
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


OpenRouter is a unified API platform that provides access to multiple large language models (LLMs) through a single interface. With OpenRouter, you can interact with AI models for generating text, managing conversations, retrieving model lists, and tracking credit usage, simplifying integration with various AI providers.



## Prerequisite 
1. OpenRouter API Key: Sign up on [OpenRouter.ai](https://openrouter.ai/) and obtain your API key. This key is used to authenticate all requests to the OpenRouter API.

:::info
When using Free Models, you must Enable training and logging (chatroom and API) in [Privacy Settings](https://openrouter.ai/settings/privacy) in case you are getting this error - No endpoints found matching your data policy. Enable prompt training here: https://openrouter.ai/settings/privacy

:::

## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `API key` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.


:::info 
You should have an account on [OpenRouter](https://openrouter.ai/) to get the API – keys. You can fetch API keys from [here](https://openrouter.ai/keys).
:::

<figure>
  <Thumbnail src="/img/reference/connectors/openrouter/details.png" alt="OpenRouter with configuration details." />
  <figcaption align = "center"><i>OpenRouter with configuration details.</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.


## Supported API endpoints


| Action                   | Description                                                                                     |
|--------------------------|-------------------------------------------------------------------------------------------------|
| GetModels      | Fetch a list of available LLM models accessible through OpenRouter.          |
| Completion     | Generate text completions by sending a prompt to a selected model.           |
| ChatCompletion | Generate interactive chat responses using conversation-style input/output.   |
| GetCredits     | Retrieve the current usage and available credits on your OpenRouter account. |




