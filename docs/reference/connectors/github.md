---
sidebar_position: 1
title: Github
---
import Image from '@site/src/components/Image';
import VersionedLink from '@site/src/components/VersionedLink';
import Thumbnail from '@site/src/components/Thumbnail';

The GitHub connector facilitates integration with GitHub repositories and actions, allowing seamless automation and data interaction. It enables tasks like creating issues, managing repositories, and automating workflows directly from your applications.

## Configuring API Connector in DronaHQ

Add a `Account name`. Then click `Save`, it will open a pop-up window asking you to sign-in into your GitHub account. Continue with the steps and give access to DronaHQ to connect with your GitHub ID and its information.

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

## Self-Hosted Installation 

To use the GitHub Connector on the on-prem version, follow these steps:

1. Select the Connector: Choose the GitHub Connector from the list.

2. Provide the Necessary Details:

- Environment/Account Name: The name can contain alphanumeric characters, must start with an alphabet, and can include `_` as a special character, but should not contain spaces.

- API Base URL: Enter `https://api.github.com` as the base URL of your API endpoint.

- OAuth Redirect URL: Copy the following URL. Use this link in your app's API or developer settings to create a new integration or app to use with DronaHQ. If required, go to your app's admin console and add it to the allowed list.

### Obtaining GitHub API Credentials

1. Client ID and Client Secret: Obtain these unique credentials by registering your application in the [GitHub Developer Console](https://github.com/settings/developers).

2. Scope: Define the specific functionalities your application needs access to within GitHub. Choose appropriate scopes from the [GitHub documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps).

3. Authorization URLs: Refer to the [GitHub OAuth documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) for the Authorization Request URL, Access Token Request URL, and Refresh Token Request URL.