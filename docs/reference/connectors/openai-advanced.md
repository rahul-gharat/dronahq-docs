---
sidebar_position: 1
title: OpenAI Advanced
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';


The OpenAI Advanced Connector empowers you to seamlessly integrate OpenAI's advanced AI capabilities into your applications. With this connector, you can harness the power of language models like GPT-3 and image models like DALL-E to generate text, images, code, and more.


## Prerequisite for OpenAI Connector

1. OpenAI API Key: Obtain an API key from OpenAI by signing up for an account and creating a new API key. This key is required to authenticate your requests when using the OpenAI Connector.

2. Environment Setup: Ensure you have a development environment capable of making HTTP requests to external APIs. This could involve using programming languages like Python, JavaScript, or any language that supports HTTP requests.

## Configuring API Connector in DronaHQ

Add a `Connector name`. Then add the `API key` for the connector account. Once all details are added, click `Finish`. Your connector configuration is now done.


## Supported API endpoints

| Action                   | Description                                                                                     |
|--------------------------|-------------------------------------------------------------------------------------------------|
| GetModels                | Retrieve a list of available models and their details for text and language tasks.             |
| CreateCompletion         | Generate text completions using the OpenAI API.                                                |
| CreateChatCompletion     | Engage in interactive conversations with the ChatGPT model to generate dynamic chat responses. |
| CreateEdit               | Create an edit on a text prompt to improve or refine the generated content.                    |
| CreateImage              | Generate images based on textual descriptions using the DALL-E model.                           |
| CreateImageEdit          | Edit and refine the generated images to achieve the desired visual content.                     |
| CreateImageVariation     | Generate multiple variations of an image by altering the input descriptions.                    |
| CreateEmbeddings         | Obtain text embeddings that capture the semantic meaning of text for various NLP applications. |
| CreateTranscription      | Transcribe spoken audio content into textual format using OpenAI's audio transcription.        |
| CreateTranslation        | Translate text content from one language to another using the OpenAI translation model.         |
| ListFiles                | List all uploaded files in your OpenAI account.                                                |
| UploadFile               | Upload a file to your OpenAI account for processing or storage.                                 |
| DeleteFile               | Delete a specific file from your OpenAI account.                                               |
| RetrieveFile             | Retrieve metadata for a specific file stored in your OpenAI account.                            |
| RetrieveFileContent      | Retrieve the content of a specific file stored in your OpenAI account.                          |
| CreateFineTune           | Create a fine-tuned model from a base model for specific tasks.                                 |
| ListFineTunes            | List all fine-tuned models available in your OpenAI account.                                    |
| RetrieveFineTune         | Retrieve details of a specific fine-tuned model.                                                |
| CancelFineTune           | Cancel a fine-tuning process that is in progress.                                              |
| ListFineTuneEvents       | List events related to a fine-tuned model in your OpenAI account.                               |
| DeleteFineTunedModel     | Delete a specific fine-tuned model from your OpenAI account.                                    |
| CreateModeration         | Create a moderation request for text content to assess for inappropriate material.              |
| ListEngines              | Retrieve a list of available engines for various AI tasks.                                     |
| RetrieveEngine           | Retrieve details about a specific engine available in your OpenAI account.                       |


## Using OpenAI Advanced Connector

### Creating an Image file

The sub-API of CreateImage which generates images for us with the help of some user inputs on the desired image.

After selecting your account for using the OpenAI connector. We need to provide details regarding what type of image we want OpenAI to retrieve.

- Prompt: A text description of the desired image is required as user input.

- Size: Specify the dimension of the desired image. Choose from the following size options: 256x256, 512x512, or 1024x1024. This determines the dimensions of the generated images.

- User: Provide a unique identifier that represents your end-user. This identifier helps OpenAI to monitor and detect any potential misuse or abuse.

- Response Format: The image retrieved from the request can be obtained in one of two formats: URL or B64_JSON. Choose the format that best suits your application's needs.

- N: Indicate the number of images you require as output. This parameter allows you to generate multiple images based on the provided input description.


<figure>
  <Thumbnail src="/img/reference/connectors/openaiadv/image.png" alt="Receiving response from OpenAI to generate image" />
  <figcaption align = "center"><i>Receiving response from OpenAI to generate image</i></figcaption>
</figure>

You can see that we are getting two URLs as responses from our OpenAI connector `CreateImage` endpoint.


### Creating Chat Completion

This subcategory of the OpenAI connector enables you to create a chat completion sentence for a given conversation.

Let’s see how to use `CreateChatCompletion` endpoint and fetch the results.

Details are required for the endpoint request body. There are several attributes, some of them are required to make a successful request with no error in the response and some of them are optional to make AI come up with a better and more effective response.

- Model: ID of the model to use. Ensure model compatibility with Chat API.
- Message: Messages for chat completions in array format (e.g., [{“role”: “user”, “content”: “Hello!”}]).
- Max Tokens: Maximum tokens for chat completion respecting model context length.
- Temperature: Sampling temperature (0 to 2). Higher: more randomness; Lower: more focus.
- N: Number of chat choices per input message.
- Stream: If set, send partial message deltas as server-sent events.
- Top P: Nucleus sampling. Consider tokens with top_p probability mass.
- Presence Penalty: Penalize new tokens based on appearance.
- Frequency Penalty: Penalize tokens based on existing frequency.


<figure>
  <Thumbnail src="/img/reference/connectors/openaiadv/res.jpeg"  />
</figure>