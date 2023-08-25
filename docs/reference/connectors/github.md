---
sidebar_position: 1
title: Github
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The GitHub connector facilitates integration with GitHub repositories and actions, allowing seamless automation and data interaction. It enables tasks like creating issues, managing repositories, and automating workflows directly from your applications.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window askinging you to sign-in into your GitHub account. Continue with the steps and give access to DronaHQ to connect with your GitHub ID and its information.

<figure>
  <Thumbnail src="/img/reference/connectors/github/signin.png" alt="Sign-in to your GitHub account" />
  <figcaption align = "center"><i>Sign-in to your GitHub account</i></figcaption>
</figure>

After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the `connected accounts` list. You can find this option from the `Connector -> Manage Account` section. This centralized location allows you to conveniently monitor and manage your connected accounts.


## Supported API endpoints

| Action           | Description |
|------------------|-------------|
| GetProfile       | Retrieve user's profile details. |
| GetUserRepos     | Get a list of repositories owned by a user. |
| ListAllOrganizations | Fetch the list of organizations a user belongs to. |
| CreateGist       | Create a new gist (code snippet) on GitHub. |
| GetRepoUsers     | Retrieve a list of users who have access to a repository. |
| CreateIssue      | Create a new issue in a repository. |
| GetAllLabels     | Fetch all the labels available in a repository. |
| GetIssueList     | Get a list of issues from a repository. |
| UpdateIssue      | Update the details of an existing issue. |
| CreateComment    | Add a new comment to an issue or pull request. |

