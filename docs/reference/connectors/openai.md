---
sidebar_position: 1
title: OpenAI
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


OpenAI is a company that focuses on advanced AI research and development to provide crucial AI methods and benefits. The OpenAI API works virtually on any sort of functioning which requires understanding or generating natural commands, language, code, image, and more.



## Prerequisite for OpenAI Connector

1. OpenAI API Key: Obtain an API key from OpenAI by signing up for an account and creating a new API key. This key is required to authenticate your requests when using the OpenAI Connector.

2. Environment Setup: Ensure you have a development environment capable of making HTTP requests to external APIs. This could involve using programming languages like Python, JavaScript, or any language that supports HTTP requests.


## Configuring API Connector in DronaHQ

Add a `Account name`. Then add the `API key` for the connector account. Once all details are added, click `Save`. Your connector configuration is now done.

:::info 
You should have an account on [OpenAI](https://openai.com/) to get the API – keys. You can fetch API keys from [here](https://platform.openai.com/account/api-keys).

:::

<figure>
  <Thumbnail src="/img/reference/connectors/openai/details.png" alt="OpenAI with configuration details." />
  <figcaption align = "center"><i>OpenAI with configuration details.</i></figcaption>
</figure>


## Suppoorted API endpoints


| Action                   | Description                                                                                     |
|--------------------------|-------------------------------------------------------------------------------------------------|
| GenerateText             | Generate human-like text using the GPT-3 model by providing a prompt.                         |
| EditText                 | Edit and refine the generated text output to achieve the desired content.                     |
| GenerateImage            | Generate images based on textual descriptions and prompts using the DALL-E model.              |
| EditImage                | Edit and modify the generated images to fine-tune their visual representation.                 |
| GenerateImageVariations  | Generate multiple variations of an image by altering the input descriptions.                    |
| GenerateChatGPTResponse  | Engage in interactive conversations with the GPT-3 model to generate dynamic chat responses.    |
| GenerateCode             | Generate code snippets or programming code by providing a description or prompt.               |
| EditCode                 | Edit and refine the generated code output to match specific programming needs.                |
| TextModeration           | Utilize OpenAI's moderation API to assess and moderate text content for inappropriate content. |
| TranscribeAudioToText    | Transcribe spoken audio content into textual format using OpenAI's audio transcription.        |
| GenerateTextEmbedding    | Obtain text embeddings that capture the semantic meaning of text for various NLP applications. |



