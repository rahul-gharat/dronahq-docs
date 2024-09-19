---
sidebar_position: 1
title: Create Dynamic Text
---

import Thumbnail from '@site/src/components/Thumbnail';

:::caution

This Action block has been deprecated. Please use the 'Set Data Queries Values' action instead. You can read the documentation [here](../set-data-queries-value).

:::

The `Create Dynamic Text` action is a versatile tool within your DronaHQ application that allows you to generate text dynamically based on specific criteria. With this action, you can create both plain and rich text content, all driven by variables and data, making your application interactions more dynamic and engaging.

<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/create-dynamic-text/create-dynamic-text.jpeg" alt="Create Dynamic Text" />
  <figcaption align='center'><i>Create Dynamic Text</i></figcaption>
</figure>

## Configuring the Create Dynamic Text Action

To configure the `Create Dynamic Text` action, follow these steps:

1. In your action flow, navigate to the `Logic` section.

2. Select the `Create Dynamic Text` action to begin the configuration.

3. `Type:` Choose between `Plain Text` and `Rich Text` based on the type of content you want to generate. `Plain Text` is suitable for simple text, while `Rich Text` allows you to create more complex content with formatting and styling.

4. `Text:` In this field, you can enter the text that serves as the foundation for your dynamic content. What makes this action powerful is the ability to include variables enclosed in double curly braces, such as `{{variableName}}`. These variables can be used to dynamically insert values into the text, making it responsive to the specific context or data.

5. Define any conditions or criteria under which the action should be executed, ensuring that dynamic text generation occurs at the right moments.

6. Assign a unique name to the action using the `Action Name` field for easy identification and management within your action flow.

7. Click `Finish` to complete the setup.

The `Create Dynamic Text` action empowers you to deliver personalized and context-aware content to your users. Whether you need to generate customized messages, tailored responses, or data-driven content, this action provides the flexibility you need.

<figure>
  <Thumbnail src="/img/reference/actionflow-blocks/create-dynamic-text/fields.jpeg" alt="Create Dynamic Text" />
</figure>

This action is a valuable addition to your toolkit, ensuring that your application's interactions are dynamic, engaging, and tailored to the unique needs of your users.
