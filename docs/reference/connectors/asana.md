---
sidebar_position: 1
title: Asana
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Asana is a “work management” platform that helps users or teams to collaborate and manage work together.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window askinging you to sign-in into your Asana account. Continue with the steps and give access to DronaHQ to connect with your Asana ID and its information.


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