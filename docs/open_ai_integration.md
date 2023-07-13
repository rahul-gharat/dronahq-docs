---
sidebar_position: 103
---

import Thumbnail from '@site/src/components/Thumbnail';

# OpenAI Integration

DronaHQ Studio offers preconfigured `OpenAI API` connectors that enable users to seamlessly incorporate OpenAI's advanced artificial intelligence capabilities into their applications. These connectors are designed to simplify the integration process and are available in two versions:

- <a href="#openai-connector">OpenAI</a>
- <a href="#openai-advance-connector">OpenAI Advanced</a>

This guide will walk you through the setup and configuration process of these preconfigured OpenAI API connectors in DronaHQ Studio. By following the instructions provided, you'll be able to quickly add an account for the connectors and start leveraging OpenAI's powerful AI capabilities within your applications.

<figure>
  <Thumbnail src="/img/dronahq-ai/open-ai-integration/integrated-connector.png" alt="Integrated OpenAI Connetors" width='100%'/>
  <figcaption align = "center"><i>Integrated OpenAI Connectors</i></figcaption>
</figure>

## OpenAI Connector

 This connector is ideal for users who want a hassle-free integration experience. It requires minimal configuration, and the parameters are conveniently renamed to user-friendly names. All the commonly used APIs are readily available in this connector for easy access.
### API list of OpenAI connector

- GenerateText
- EditText
- GenerateImage
- EditImage
- GenerateImageVariation
- GenerateChatGPTResponse
- GenerateCode
- EditCode
- TextModeration
- TranscribeAudioText
- GenerateTextEmbeding


## OpenAI Advance Connector

The advanced connector is suited for users who require more extensive customization and want to utilize the full range of APIs provided by OpenAI. It offers complete configuration parameters for all available APIs, allowing for fine-tuning and advanced usage scenarios.

### API list of OpenAI Advance connector

- GetModels
- CreateCompletion
- CreateChatCompletion
- CreateEdit
- CreateImage
- CreateImageEdit
- CreateImageVariation
- CreateEmbeddings
- CreateTranscription
- CreateTranslation
- ListFiles
- UploadFile
- DeleteFile
- RetrieveFile
- RetrieveFileContent
- CreateFineTune
- ListFineTunes
- RetrieveFineTune
- CancelFineTune
- ListFineTuneEvents
- DeleteFineTunedModel
- CreateModeration
- ListEngines


## Configuring connector

To use an integrated OpenAI connector you need to configure OpenAI Account which you will use later on while using these connectors, to configure account you need to follow the steps mentioned below

- Click on the `Manage Account` button as visible in the image above.
- Once you click it will open the sidebar then click on the `Connect OpenAI` button in the centre.
- It will ask you for an account name and `OpenAI's API key`, paste the necessary information in the fields.
- Click on the `Save` Button, it will verify your data and if correct it will save your account information with the connector.

You can add multiple accounts for the same connectors. You can follow the above steps to configure accounts for both `OpenAI Connector` and `OpenAI Advance Connector`

## Using connector

There are numerous opportunities to leverage these connectors with a wide range of use cases, empowering you to develop sophisticated applications with minimal effort. These connectors can be employed in two main areas: `Data Queries and Action Flow`.

In the Data Queries section, you can utilize the connectors by using the Connector Library option. This enables you to connect various data sources, retrieve information, and perform data manipulations seamlessly.

Alternatively, you can incorporate the connectors within the Action Flow of your application using the Server Side Action block. This grants you the ability to leverage the connectors' capabilities and functionalities more dynamically and interactively. You can utilize these connectors to process data and orchestrate complex workflows that can be triggered on any user actions.

To delve deeper into the possibilities and benefits of employing AI-powered connectors, I recommend reading the comprehensive [Use cases using AI](./ai_usecases.md) article. This resource will provide you with valuable insights and real-world examples of how these connectors can be effectively harnessed to enhance your application's capabilities and deliver a superior user experience.

:::caution Info
OpenAI imposes rate limits on its APIs to ensure fair usage and maintain system stability. The specific rate limits may vary depending on the API or model you are using. OpenAI provides detailed documentation and guidelines on rate limits for each specific API or model, which you should refer to for accurate and up-to-date information. Exceeding the rate limits can result in errors or temporary blocks on API access.
:::