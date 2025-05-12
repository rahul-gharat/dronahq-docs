---
sidebar_position: 102
---

import Thumbnail from '@site/src/components/Thumbnail';

# AI Assistant in DronaHQ

The **AI Assistant** feature in **DronaHQ**, powered by **OpenAI**, empowers users in multiple ways across the app-building journey. From simplifying complex tasks to enhancing developer productivity, it plays a crucial role in many scenarios. Some of the key ways users leverage this feature include:

* **Control Data Binding using AI Assist**: Seamlessly bind controls to SQL database results or Static Data using AI prompts—no manual setup required.
* **Tablegrid Format Assistance**: Format and visualize data specifically for Tablegrid components, with AI automatically structuring your dataset.
* **Query Support**: Whether you're creating a fresh query via the `Add Query` operation in the **Connector Library**, or working in the `Data Queries` section, AI Assist helps generate and even **modify** existing SQL queries to suit your needs.
* **JavaScript Code Blocks**: In areas like `Action Flow`, `Data Queries`, or the `Transform` section during connector bindings, AI Assist helps craft efficient JS blocks—and even lets you **refine or update existing JavaScript code**.


These examples just scratch the surface—AI Assist in DronaHQ is deeply integrated to support tasks both small and large, making app creation smoother, faster, and more intelligent.



:::info Info
Any data you pass to a AI Assistant is sent to and processed by OpenAI. If you do not use the AI Assistant, no data is sent to AI Assistant.
:::

:::caution Info
OpenAI imposes rate limits on its APIs to ensure fair usage and maintain system stability. Exceeding the rate limits can result in errors or temporary blocks on API access. To avoid such errors you can configure multiple OpenAI accounts and use them considering the rate-limits.
:::

## AI assistant in Query support
The AI Assistant within DronaHQ provides intelligent support for generating database queries based on user input. By leveraging the power of OpenAI's natural language processing and machine learning, the AI Assistant can understand the user's intent and assist in constructing the appropriate database query.

### Database query generation

AI assistance for generating queries is conveniently available within the Data Queries module of the DronaHQ. To access this feature, simply navigate to `Data Queries -> Add New` and then select the `Database Query` option from the dropdown menu on the right-hand side. Next, choose the appropriate pre-configured database connector from the second dropdown in the DronaHQ to access the required data through query writing. Within the query tab, just above the input block where you write your queries, an `Ask AI` button is provided. By clicking on this button, you can prompt the AI to assist you with query generation.

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

### Using AI assistant for database query modification

<figure>
  <Thumbnail src="/img/dronahq-ai/ai-assist-in-dronahq/modify.png" alt="AI Assistant for query generation" width='100%'/>
</figure>


DronaHQ’s **AI Assistant** simplifies how users interact with databases by enabling natural language-based query generation and modification. In the example above, the **MySQL Query Builder** interface demonstrates how users can request the AI to adjust a query by simply typing what they need—in this case:
`"modify the current query to get list with status approve"`

The AI processes this request and rewrites the SQL statement accordingly:

```sql
SELECT * FROM bus_puc_indrashish WHERE status = 'approve' LIMIT 10;
```



## AI assistant in JavaScript Code Assistance

The `AI Assistant` in DronaHQ also offers powerful support for writing `JavaScript code` to manipulate data across various parts of the platform. It helps users quickly generate code snippets for common data operations, streamlining the overall development process.

There are multiple areas where AI Assist can be used to insert or modify custom JavaScript:

* In the Custom JS section of Data Queries
* Within the JavaScript Code Block inside an Action Flow
* During data transformation.


### JavaScript code generation in Data Query

AI assistance for generating JavaScript code is conveniently available within the Data Queries module of the DronaHQ. To access this feature, simply navigate to `Data Queries -> Add New` and then select the `Custom JavaScript` option from the dropdown menu on the right-hand side. Just above the input block where you write your JS code, an `Ask AI` button is provided. By clicking on this button, you can prompt the AI to assist you with your code snippet.

<figure>
  <Thumbnail src="/img/dronahq-ai/ai-assist-in-dronahq/ai-assistant-java-script.png" alt="AI Assistant for JavaScript code generation" width='100%'/>
  <figcaption align = "center"><i>AI Assistant for JavaScript code generation</i></figcaption>
</figure>

##### Code Generation Process
- **User Input**: Users describe the `data manipulation` task they want to perform using natural language.
- **NLP Analysis**: The AI Assistant analyzes the user's input, `extracting key requirements` and understanding the desired data transformation concerning `Input parameters` of the js block.
- **Code Generation**: Based on the analysis, the AI Assistant generates the corresponding JavaScript code snippet, addressing the user's requirements.
- **Code Preview**: The generated code snippet is presented to the user, who can review and modify it as needed.
- **Execution**: Once the user confirms the code snippet, it is inserted in the js code block section and the user can run and test the code.

<figure>
  <Thumbnail src="/img/dronahq-ai/ai-assist-in-dronahq/ai-assistant-javascript-result.png" alt="AI Assistant JavaScript code generation result" width='100%'/>
  <figcaption align = "center"><i>AI Assistant JavaScript code generation result</i></figcaption>
</figure>

### JavaScript code generation in Action Flow

<figure>
  <Thumbnail src="/img/dronahq-ai/ai-assist-in-dronahq/action.png" alt="AI Assistant for query generation" width='100%'/>
</figure>


AI assistance for generating JavaScript code is conveniently available within the Custom JavaScript action block in DronaHQ’s Action Flow module. Similar to the Data Queries module, an “Ask AI” button is provided just above the input block, allowing users to quickly generate or refine JavaScript code snippets directly within the action flow.



### JavaScript code transformation

<figure>
  <Thumbnail src="/img/dronahq-ai/ai-assist-in-dronahq/transform.png" alt="AI Assistant for query generation" width='100%'/>
</figure>

Once you get the response data from your query in DronaHQ, you might want to refine or transform it before using it in your app. For example, say you only want to display movies with a rating above 9, a high box office collection, and directed by a specific person. Instead of manually writing the transformation logic, you can simply click on the **"Ask AI"** button under the **Transform** tab.

DronaHQ's AI will generate a ready-to-use JavaScript snippet for you, like the one shown here. You can either use it as-is or tweak it to fit your exact logic—such as modifying certain fields or changing filter conditions. This makes it super easy to clean, filter, and reshape your API or database response right inside the platform.






## AI Assist for Smart Formatting & Data Binding


### Data Binding Using AI Assist

<figure>
  <Thumbnail src="/img/dronahq-ai/ai-assist-in-dronahq/bind.png" alt="AI Assistant for query generation" width='100%'/>
</figure>


You can bind data to components like **TableGrid** using a guided approach powered by AI Assist to bind configured connector or static data.

**How to Use:**

1. Select the component (e.g., TableGrid) on your screen.
2. Click the AI Assist icon  on the component.
3. Enter a natural language prompt like:
   *“Fetch all data from the @EmployeeDB”*
   (Make sure your connector is already configured/or provide static data.)

AI Assist will:

* Understand the prompt
* Use your existing connector
* Auto-bind the data response to your component



###  Smart Data Formatting (Auto Detection)

<figure>
  <Thumbnail src="/img/dronahq-ai/ai-assist-in-dronahq/data.png" alt="AI Assistant for query generation" width='100%'/>
</figure>

Unlike data binding, **data formatting doesn’t need a prompt**. As soon as data is bound, AI Assist automatically analyzes the structure and values to assign appropriate formats and visual types to each column.

**Auto-formatting highlights:**

* Detects field types like **text**, **numeric**, **email**, **tags**, **booleans** (toggles), and more
* Applies conditional row coloring, e.g., different colors for departments like HR, Sales

This smart detection ensures your data appears clean, categorized, and user-friendly—without needing any manual formatting rules.






