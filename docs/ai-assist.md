---
sidebar_position: 102
---

import Thumbnail from '@site/src/components/Thumbnail';

# AI Assistant in DronaHQ

The AI Assistant feature in DronaHQ, powered by OpenAI, provides users with advanced capabilities for seamless app creation. It offers significant support in two key areas. Firstly, it assists users in composing efficient database queries, whether they are performing an `Add Query` operation to the database connector in the `Connector Library` or creating a `Database Query` in the `Data Queries` section. Secondly, it aids users in crafting `JavaScript code blocks` for effective data manipulation within the `Action Flow` section or `Custom JavaScript` section of `Data Queries` as well as the `Transform` section of the connector binding process.

:::info Info
Any data you pass to a AI Assistant is sent to and processed by OpenAI. If you do not use the AI Assistant, no data is sent to AI Assistant.
:::

:::caution Info
OpenAI imposes rate limits on its APIs to ensure fair usage and maintain system stability. Exceeding the rate limits can result in errors or temporary blocks on API access. To avoid such errors you can configure multiple OpenAI accounts and use them considering the rate-limits.
:::

## Database Query Assistance
The AI Assistant within DronaHQ provides intelligent support for generating database queries based on user input. By leveraging the power of OpenAI's natural language processing and machine learning, the AI Assistant can understand the user's intent and assist in constructing the appropriate database query.

### Using AI assistant for database query generation

AI assistance for generating queries is conveniently available within the Data Queries module of the studio. To access this feature, simply navigate to `Data Queries -> Add New` and then select the `Database Query` option from the dropdown menu on the right-hand side. Next, choose the appropriate pre-configured database connector from the second dropdown in the studio to access the required data through query writing. Within the query tab, just above the input block where you write your queries, an `Ask AI` button is provided. By clicking on this button, you can prompt the AI to assist you with query generation.

<figure>
  <Thumbnail src="/img/dronahq-ai/ai-assist-in-dronahq/ai-assistant-query-generation.png" alt="AI Assistant for query generation" width='100%'/>
  <figcaption align = "center"><i>AI Assistant for query generation</i></figcaption>
</figure>

### Query Generation Process
- **User Input**: Users can express their desired output from the database using natural language in the prompt visible after clicking on the `Ask AI` button.
- **NLP Analysis**: The AI Assistant analyzes the user's query, extracting important keywords and understanding the underlying intent.
- **Query Construction**: Based on the analysis, the AI Assistant constructs the appropriate database query, `considering the database schema and available data` as visible in the above screenshot.
- **Query Preview**: The generated query is displayed to the user, allowing them to review and make any necessary adjustments.
- **Execution**: Once the user confirms the query, it is inserted into the query input field and then the user can test the query.

<figure>
  <Thumbnail src="/img/dronahq-ai/ai-assist-in-dronahq/ai-assistant-query-generation-result.png" alt="AI Assistant query generation Result" width='100%'/>
  <figcaption align = "center"><i>AI Assistant query generation Result</i></figcaption>
</figure>

## JavaScript Code Assistance
The AI Assistant in DronaHQ also provides support for writing JavaScript code to manipulate data in various places in the studio. It assists users in generating code snippets for common data manipulation tasks, simplifying the development process, one such place is the `Custom JavaScript` section of `Data Queries`

### Using AI Assistant for JavaScript code generation

AI assistance for generating JavaScript code is conveniently available within the Data Queries module of the studio. To access this feature, simply navigate to `Data Queries -> Add New` and then select the `Custom JavaScript` option from the dropdown menu on the right-hand side. Just above the input block where you write your JS code, an `Ask AI` button is provided. By clicking on this button, you can prompt the AI to assist you with your code snippet.

<figure>
  <Thumbnail src="/img/dronahq-ai/ai-assist-in-dronahq/ai-assistant-java-script.png" alt="AI Assistant for JavaScript code generation" width='100%'/>
  <figcaption align = "center"><i>AI Assistant for JavaScript code generation</i></figcaption>
</figure>

### Code Generation Process
- **User Input**: Users describe the `data manipulation` task they want to perform using natural language.
- **NLP Analysis**: The AI Assistant analyzes the user's input, `extracting key requirements` and understanding the desired data transformation concerning `Input parameters` of the js block.
- **Code Generation**: Based on the analysis, the AI Assistant generates the corresponding JavaScript code snippet, addressing the user's requirements.
- **Code Preview**: The generated code snippet is presented to the user, who can review and modify it as needed.
- **Execution**: Once the user confirms the code snippet, it is inserted in the js code block section and the user can run and test the code.

<figure>
  <Thumbnail src="/img/dronahq-ai/ai-assist-in-dronahq/ai-assistant-javascript-result.png" alt="AI Assistant JavaScript code generation result" width='100%'/>
  <figcaption align = "center"><i>AI Assistant JavaScript code generation result</i></figcaption>
</figure>