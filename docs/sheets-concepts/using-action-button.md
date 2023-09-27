---
sidebar_position: 1
title: Using Action Button
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

In this comprehensive guide, we will delve into the dynamic world of `Button`, demonstrating how they can elevate your applications by enabling on-screen and server-side actions with a simple click.

## Unlocking the Power of Action Buttons

With DronaHQ's Buttons, you gain the power to trigger specific events in your application. These buttons can be configured to perform a wide range of actions, from navigating to a different screen to sending emails and more. 

For instance, you can seamlessly set up an Action Button to initiate a phone call to a specific number or dispatch an SMS, all with a single click. The possibilities are boundless, and this guide will equip you with the knowledge to harness the full potential of this remarkable control.

## Using Action Button Control

Start by selecting `Button` from the Controls Menu. Once added, the Button will appear on your application screen within the builder interface.


With the Action Button now a part of your application, you have the freedom to configure it to suit your specific requirements.

Once the Action Button is placed on the screen, you can customize its properties to align with your application's functionality. Properties may include the button's appearance, text, size, and more.

With the Action Button added and properties configured, the next step is to define the actions it will trigger upon a user's click.


### Using for Triggering DronaHQ Services

#### Call Workflow 

In your DronaHQ applications, workflows are essential for performing specific tasks, such as processing form submissions or handling complex business logic. The `Call Workflow` action in Action Flows allows you to seamlessly integrate these workflows into your application's structure, enhancing its functionality.

For more details on `Call Workflow,` [refer here](/reference/actionflow-blocks/call-workflow/) to learn more.

#### Update Sheet

The `Update Sheet` task is a powerful tool within your workflows, enabling you to insert, update, and delete records from your sheets. These actions are commonly associated with form submissions but can also be initiated through Action Flows, providing you with greater flexibility in managing your sheet data.

Setting up the Update Sheet Action

To use the `Update Sheet` action effectively in your DronaHQ applications, follow these steps:

1. Select `Button` from Control List

2. Configure Button Click Event: In the Button control's properties, specify that the `button_click` event should trigger the action.

3. Add `Update Sheet` (DronaHQ Services) Action

For additional information on `Update Sheet,` [click here](/reference/actionflow-blocks/update-sheet/) to learn more.



### Using for Implementing Logic on Sheets

#### Get Data from Sheets
The `Get Data from Sheets` action allows you to retrieve data from spreadsheets or sheets within your application. This can be particularly useful when you need to access structured data from sheets for various purposes within your app. Read more about it [here](/reference/actionflow-blocks/get-data-from-sheet/).


### Using for Custom API Action

The power of Buttons extends beyond basic interactions. With custom API actions, you can elevate your applications to a new level of functionality and integration.

#### Custom API Action

Using the Button control's event of `button_click,` you can trigger events that perform API calls on different configured connector APIs and their subcategories. 

#### Use Case: Integrating the SMTP Connector

Imagine you have an application designed to collect user feedback or process support requests. With custom API actions, you can seamlessly integrate the SMTP (Simple Mail Transfer Protocol) connector into your application.

Here's how it works:

1. User Feedback Submission: A user submits feedback or a support request through your application by clicking a button.

2. Custom API Action: The button's `button_click` event triggers a custom API action configured to use the SMTP connector.

3. Email Notification: The API call to the SMTP connector sends an email notification to your support team, including the user's feedback or request details.


### Using for Database Action

With custom Database actions, you can take your applications to a new level of data management and integration.

Custom Database Action

Using the Button control's `button_click` event, you can trigger events that perform database operations on different configured database connector and its queries.

#### Use Case: Leveraging PostgreSQL Integration

Imagine you have an application that collects and manages customer orders for an e-commerce platform. To efficiently handle this data, you can seamlessly integrate the PostgreSQL database, a powerful open-source object-relational database system, into your application.

Here's how it works:

1. Order Management: Users place orders through your application by clicking a button.

2. Custom Database Action: The button's `button_click` event triggers a custom Database action configured to use the PostgreSQL connector.

3. Data Persistence: The API call to the PostgreSQL database performs operations like inserting, updating, or retrieving order data.

4. Order Processing: The application uses the retrieved data to process the order, update inventory, and send order confirmation to the customer.


### Using for On-Screen Actions

Action Buttons in DronaHQ offer a wide array of capabilities, including on-screen actions that can enhance the interactivity and functionality of your applications. These actions are categorized to help you efficiently manage and customize your app's behavior. You can read more about Categories of On-Screen Actions from [here](/actionflows-on-events/visual-actionflow-builder/#types-of-action-blocks).



#### Navigate To (Native)

The `Navigate To` block within Action Flows facilitates the configuration of an action that directs users to a specific form or screen within your application. This action falls under the `Native` category, making it a fundamental tool for optimizing mobile app navigation.

#### Use Case: Streamlining User Navigation

Consider an e-commerce app that features multiple product categories. Users may want to explore different product categories with ease. By incorporating the `Navigate To` action, you can create a seamless browsing experience.

Here's how it works:

1. User Interaction: When a user interacts with your app, such as clicking a button.

2. Navigate To Action: You configure the `Navigate To` action within the `Native` category.

3. Effortless Navigation: The `Navigate To` action directs the user to a specific screen or location within your app, simplifying their navigation experience.

By utilizing the `Navigate To` action within the `Native` category, you can ensure that users can effortlessly explore your app's content, enhancing their overall satisfaction and engagement.