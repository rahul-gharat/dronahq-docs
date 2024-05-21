---
sidebar_position: 1
title: Asana
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Asana is a “work management” platform that helps users or teams to collaborate and manage work together.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window asking you to sign-in into your Asana account. Continue with the steps and give access to DronaHQ to connect with your Asana ID and its information.


<figure>
  <Thumbnail src="/img/reference/connectors/asana/signin.png" alt="Sign-in to your Asana account" />
  <figcaption align = "center"><i>Sign-in to your Asana account</i></figcaption>
</figure>


After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.


## Supported API endpoints

| Action | Description |
|--------|-------------|
| GetProjectList | Retrieve a list of projects within a workspace. |
| GetWorkspaces | Fetch a list of workspaces available in your Asana account. |
| GetWorkspaceDetails | Get detailed information about a specific workspace. |
| CreateProject | Create a new project within a workspace. |
| GetUsers | Get a list of users in a workspace or organization. |
| GetSections | Retrieve sections (columns) within a project. |
| GetProjectStatus | Fetch the status of a project. |
| GetTags | Get a list of tags associated with tasks in a workspace. |
| CreateTask | Create a new task in a project. |
| AddTaskToSection | Move a task to a specific section within a project. |
| GetTasksByProjects | Retrieve tasks within a specific project. |
| GetTaskDetails | Fetch detailed information about a specific task. |
| DeleteTask | Delete a task from a project. |
| UpdateTask | Modify the details of an existing task. |


## Using Asana connector

### Get details of your Workspace

For instance, if we want to get the details of a workspace in Asana, we have to go to the data-bind section of our control and select the Asana connector, select GetWorkspaceDetails endpoint, and finally select our configured account.

Provide/select the name of the workspace configured with your registered email ID, then bind the keys as columns for the control and click Test & Finish.


<figure>
  <Thumbnail src="/img/reference/connectors/asana/key.jpeg" alt="Sign-in to your Asana account" />
</figure>

### Adding the task to a section

Now if you want to change the section of a task or add an existing task to a section of your project in a workspace you can do it by selecting the AddTaskToSection endpoint. This will add a task the specified section provided by the user.

You can trigger it through actions and data bind section of several controls.

Let’s try this out using the button control. In the events section of the button control, we will add the server-side action of the Asana connector. Select the AddTaskToSection endpoint then select the configured account.

Next, it will ask you to choose the project from your account, to where you want to add the task to a section. Select the section as well as the task you want to assign. Do Continue and then Finish.

<figure>
  <Thumbnail src="/img/reference/connectors/asana/key2.jpeg" alt="Sign-in to your Asana account" />
</figure>

## Self-Hosted Installation 

To use the Asana Connector on the on-prem version, follow these steps:

1. Select the Connector: Choose the Asana Connector from the list.

2. Provide the Necessary Details: Enter the required information, including the Environment/Account Name (alphanumeric, must start with an alphabet, and can include `_` but no spaces), API Base URL (`https://app.asana.com`), and the OAuth Redirect URL (`https://qa-selfhosted.dronahq.ai/oauth_callback`). Use this URL in your app's API or developer settings and add it to the allowed list if required.

### Obtaining Asana API Credentials

1. Register Your Application: Visit the [Asana Developer Console](https://asana.com/developers) and create a new application. This sets up your application within Asana's system.

2. Find Your Client ID and Secret: After registering your application, go to the application details section to find your Client ID and Client Secret.

3. Define Your Scope: Choose the specific functionalities your application can access within Asana. Refer to the [Asana documentation](https://developers.asana.com/docs/oauth) to select the appropriate scopes.

4. Authorization URLs: Asana uses the OAuth 2.0 authorization flow. Refer to [Asana's OAuth documentation](https://developers.asana.com/docs/oauth) for the Authorization Request URL, Access Token Request URL, and Refresh Token Request URL, depending on the chosen OAuth flow.

<figure>
  <Thumbnail src="/img/reference/connectors/asana/self.jpeg" alt="Sign-in to your Asana account" />
</figure>