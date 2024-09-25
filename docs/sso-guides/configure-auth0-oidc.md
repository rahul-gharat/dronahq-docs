---
sidebar_position: 1
---

# Configure Auth0 OIDC SSO

import Thumbnail from '@site/src/components/Thumbnail';

Use this guide to configure Auth0 SSO with OpenID Connect (OIDC) on DronaHQ. Once configured, users can log in to DronaHQ with their Auth0 credentials.

## Prerequisites

To set up Auth0 OIDC SSO in DronaHQ, you will need:

1. Permissions to create an OIDC application in Auth0.
1. Manage Users access on self-hosted DronaHQ instance or DronaHQ Cloud to configure SSO configurations.

## Setting up Auth0

1. Create a new Auth0 application
In Auth0, create a new application for DronaHQ. Go to your application Settings and save the `Client ID` and `Client secret`.

Next, save the `OAuth Authorization URL` and `OAuth Token URL`. In Auth0, this is found in `Settings -> Advanced Settings -> Endpoints`.

Go to `Manage Users -> SSO CONFIGURATION -> + Add SSO -> OIDC OpenID Connect` and Copy DronaHQ OAuth Redirect URL and paste it in callback URL field. In Auth0, the callback URL is set in `Settings -> Application URIs`.

<figure>
  <Thumbnail src="/img/sso/sso-oauth-redirect.png" alt="DronaHQ OAuth Redirect URL" />
  <figcaption align = "center"><i>DronaHQ OAuth Redirect URL</i></figcaption>
</figure>

## Configure in DronaHQ

For setting up OIDC SSO in DronaHQ, Go to `Manage Users -> SSO CONFIGURATION -> + Add SSO -> OIDC OpenID Connect`

Enter form with below fields -

 | Field | Description  | 
| ----------------- |---------------- |
| Name            | Provide Friendly Name of this SSO configuration  |
| Restricted Domain           | Enter domain name for which you want your users to login with for this SSO Configuration. You can add multiple domain names as well. eg - `domain1.com , domain2.com`. DronaHQ will automatically redirect to SSO url when we encounter any user’s sign in request with an email id belonging to the given restricted domain.
 |
| Client ID              | Client ID from your OAuth app created above. |
| Client Secret | Client Secret from your OAuth app created above. |
| Scope      | `openid email profile offline_access` |
| Authorization Request | Authorization endpoint provided by Auth0. Locate it at `Settings -> Advanced Settings -> Endpoints` |
| Access Token Request | Token endpoint provided by Auth0. Locate it at `Settings -> Advanced Settings -> Endpoints` |
| Refresh Token Request | Token endpoint provided by Auth0. Locate it at `Settings -> Advanced Settings -> Endpoints`. This will be called, when using current access token returns `401 status code` response |
| Add Claim List | You can map your `User's ID, Name, Email and Group` with corresponding values in DronaHQ. Here, you need to provide exact path of corresponding key present in JWT Token received from Token endpoint. Add `{{idToken.email}}` to map against `DHQ User Email`, this will refer to `email` key present in `idToken` parameter. Similarly you can add `{{idToken.given_name}}` to map against `DHQ User Name`, this will refer to `given_name` key present in `idToken` parameter. |
| Enable JIT user provisioning | Just in time (JIT) user provisioning enables DronaHQ to provision user accounts when users sign in via Auth0 SSO for the `first time`. This means you won't have to manually invite each user to DronaHQ first. |

:::tip TIP

- Enable JIT user provisioning toggle to automatically add new users provisioned by SSO into DronaHQ
- Map group name to provide restricted access of the App to the specific group of end users. For Example, you may want to restrict the Finance related Apps to your Finance team members in your organization and HR specific apps to your HR Team in your organization and so on. By default all users will be mapped to the Default group in DronaHQ.
- If user's group is mapped with DronaHQ Group, and at time of user login, if its group name doesn't exists then DronaHQ will create a new group with same name and map it with this user.

:::

### Steps
1. Fill above form.
1. Once, above form is filled, click on `Save to draft` option to save your SSO Configuration.
1. You will be able to view your recently saved SSO configuration in the list. You can click on `Test SSO` button and it will open SSO Login url in a popup. Once you login successfully and if everything is set up correctly, then finally you will see a success message at the bottom.
1. Now, that testing is successful, you can click on the `more option` for above SSO configuration and click on `Activate` to make it live.

<figure>
  <Thumbnail src="/img/sso/sso-oauth-login-activate.png" alt="Activate SSO" />
  <figcaption align = "center"><i>Activate SSO</i></figcaption>
</figure>

Once live, all your users belonging to above given domain will be redirected to your SSO login from both the `End User Portal` and `Creator Portal`.

With Auth0 Single Sign-On (SSO), users can login into DronaHQ using a single set of login credentials. It simplifies user provisioning and management. User accounts can be created, updated, and deactivated centrally, ensuring efficient administration across all connected applications.