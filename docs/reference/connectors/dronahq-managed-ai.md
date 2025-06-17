---
sidebar_position: 1
title: DronaHQ Managed AI
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

DronaHQ's Managed AI resource allows you to write natural language queries that guide AI models to perform various tasks, such as generating content, processing data, or interacting with external systems.

## Configuring Provider in DronaHQ

Go to `DronaHQ AI` in Connectors. Then select any of the provider and add the `API key` for the connector account. Once all details are added, click `Enable`. Your connector configuration is now done. You can set up multiple providers.

<figure>
  <Thumbnail src="/img/reference/connectors/dronahq-managed-ai/configuration.png" alt="DronaHQ AI with configuration details." />
  <figcaption align = "center"><i>DronaHQ AI with configuration details.</i></figcaption>
</figure>

## Supported Endpoints

With the DronaHQ AI resource, you can craft queries that instruct AI models to execute specific tasks, as detailed in the following sections.


### Summarize Text
This action condenses input text into a concise summary. For example, let us take an excerpt from DronaHQ Blog:

|  Input                                       | Output                                              |
|----------------------------------------------|-----------------------------------------------------|
| DronaHQ empowers you to rapidly develop custom applications and internal tools faster than ever. Seamlessly connect and query databases and APIs, design web or mobile apps with intuitive and feature-rich user interfaces, automate complex tasks, and create Approval flows within seconds. Unlock the full potential of your teams by enabling them to accomplish specific tasks efficiently and effectively etc.[...]      | DronaHQ is a low-code platform that lets you quickly build custom web and mobile apps and internal tools. It offers seamless database/API integration, intuitive UI design, task automation and instant approval workflows



### Generate Text
This action creates text content based on provided instructions, ideal for generating sample data or initial drafts. For example :

|System Message   |  Input                | Output                                                                   |
|---------------|-------------------------|--------------------------------------------------------------------------|
| You are a Tour guide    | Top 3 Destinations to travel in 2025 | Top 3 Destinations to Put on a 2025 Travel Short-List: 1. Japan’s Hokuriku Region  Why 2025?  In March 2024 the Hokuriku Shinkansen line was extended from Kanazawa to Tsuruga, slashing travel times from Tokyo and Kyoto. 2. Coastal Uruguay (Montevideo, José Ignacio & Rocha)Why 2025?  American, European and Brazilian carriers are adding seasonal non-stops to Montevideo and Punta del Este for the first time, and Uruguay will host the opening match of the expanded Centenario Copa Mundial de la FIFA 2030. 3. Northern Kenya (Laikipia & Samburu Counties) Why 2025?  Several community-owned conservancies—Loisaba, Segera, Sera—have doubled or tripled their protected acreage since 2021. Brand-new eco-lodges (Lewa House rebuild, Lodo Springs’ second phase) and reopened Air Kenya routes via Nanyuki make 2025 the first year the area can absorb increased safari demand while directly funding local initiatives.       |




### Generate Chat Response

The Generate chat response action can respond to conversations based on previous messages. The Message history requires a JSON array of objects with the following properties:

|  Property      | Description                                             |
|----------------|---------------------------------------------------------|
| Role           | The "role" property in a conversation message indicates the participant: "user" for the individual initiating the conversation or "assistant" for the AI responding..                  |

Let us take an example:

```json
[
  {
    "role": "user",
    "content": "Let's talk about India"
  },
  {
    "role": "assistant",
    "content": "hello"
  }
]

```

|  Input                                       | Output                                              |
|----------------------------------------------|-----------------------------------------------------|
| What is the capital?                         | The capital of India is New Delhi.                  |






### Generate Image
The Generate image action produces images based on the input prompt, then returns a base64-encoded PNG image. This can be used as the value for an Image component or downloaded using utils.DownloadFile(). 


## Using DronaHQ Managed AI

Simply navigate to `Data Queries > New > DronaHQ AI` section and select an endpoint from library. Provide the required details such as Input and Model.

We have selected `GenerateImage` endpoint and `DALL·E 3` as the model. We have taken Input as `birds`

<figure>
  <Thumbnail src="/img/reference/connectors/dronahq-managed-ai/generateimage2.png" alt="DronaHQ AI with GenerateImage endpoint." />
  <figcaption align = "center"><i>DronaHQ AI with GenerateImage endpoint.</i></figcaption>
</figure>

In this way, you can summarize or generate content through various endpoints.

## Supported Providers
 
|  Providers    | Description                                                                              |
|---------------|------------------------------------------------------------------------------------------|
| Open AI       | Offers models like GPT-4o-mini, GPT-o3 for text and DALL·E 3, DALL·E 2  image generation.|
| Cohere        | 	Provides models such as Command R for chat and text generation.                        |

