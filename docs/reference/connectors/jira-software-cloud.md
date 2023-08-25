---
sidebar_position: 1
title: Jira Software Cloud
---

import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

Jira Software Cloud is a robust project management and issue tracking tool by Atlassian. It enables teams to plan, track, and manage software development projects efficiently in a cloud-based environment.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window askinging you to sign-in into your Jira Software Cloud account. Continue with the steps and give access to DronaHQ to connect with your Jira Software Cloud ID and its information.

<figure>
  <Thumbnail src="/img/reference/connectors/jira/details.png" alt="Sign-in to your Jira Software Cloud account" />
  <figcaption align = "center"><i>Sign-in to your Jira Software Cloud account</i></figcaption>
</figure>

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.


## Supported API endpoints

| Action              | Description                                                                                   |
|---------------------|-----------------------------------------------------------------------------------------------|
| GetResources        | Retrieve various resources and metadata available in Jira Software.                          |
| GetProfile          | Fetch user profile information from Jira Software.                                          |
| GetProjects         | Retrieve a list of projects in the Jira Software instance.                                   |
| GetAllIssueTypes    | Obtain a list of all available issue types in the Jira Software instance.                     |
| GetUsers            | Fetch a list of users in the Jira Software instance.                                         |
| GetAllPriorities    | Retrieve a list of priority levels for issues in Jira Software.                              |
| CreateIssue         | Create a new issue within a project in Jira Software, specifying details and attributes.     |