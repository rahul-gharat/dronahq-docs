---
sidebar_position: 1
---

# Configure Microsoft Entra ID OIDC  

import Thumbnail from '@site/src/components/Thumbnail';

Use this guide to configure Microsoft Entra ID SSO with OpenID Connect (OIDC) on DronaHQ. Once configured, users can log in to DronaHQ with their Microsoft Entra ID credentials.

## Prerequisites

To set up Microsoft Entra ID OIDC in DronaHQ, you will need:
1. Permissions to create an Microsoft Entra ID Enterprise application.
1. Manage Users access on self-hosted DronaHQ instance or DronaHQ Cloud to configure SSO configurations.

## Setting up Microsoft Entra ID

To create an Microsoft Entra ID Enterprise application, follow the steps in [this documentation](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/add-application-portal-setup-oidc-sso).

1. In the `Microsoft Entra ID portal`, add a new `Enterprise application`.

1. DronaHQ is not listed in the Microsoft Entra ID Gallery, so select `Create your own application`.

1. Give User friendly Name for the application to identify SSO for DronaHQ.

1. Select `Register an application to integrate with Microsoft Entra ID (App you're developing)`.

1. Under `Supported account types`, select `Accounts in this organizational directory only (Default Directory Only - Single tenant)`.

1. Under `Redirect URI`, select `Web`. Enter `DronaHQ Redirect URL` under the path. This specifies the path where Microsoft Entra ID redirects users after they complete authentication. You can locate it on DronaHQ portal, Go to `Manage Users -> SSO CONFIGURATION -> + Add SSO -> OIDC OpenID Connect` and Copy DronaHQ OAuth Redirect URL and paste it in Redirect URIs path field above.
<figure>
  <Thumbnail src="/img/sso/sso-oauth-redirect.png" alt="DronaHQ OAuth Redirect URL" />
  <figcaption align = "center"><i>DronaHQ OAuth Redirect URL</i></figcaption>
</figure>


## Configure secrets

1. In the settings for the new DronaHQ enterprise application, select the `Single sign-on` menu. Select the `App registrations experience`.

1. Select the `Certifications & secrets` menu. Add a new client secret and set an expiration period. You must update your DronaHQ SSO configuration when the secret expires, so you should set the maximum allowable period to `24 months`.

1. Save this secret for use in a later step.

## Configure claims

1. In the `Azure app registration experience`, select the `Token configuration` menu.

1. Select `Add optional claim` for the `ID token`. Add the following claims:

- acct
- email
- given_name

1. When you save the claims, `turn on the Microsoft Graph email, profile permissions`.

1. Optionally, specify additional claims to include for the `Access token`.

## Configure optional group claims

You can optionally map Microsoft Entra ID groups to DronaHQ groups to automatically assign users to groups when they authenticate using SSO. This requires adding group claims to the `ID token`.

1. In the `Azure app registration experience`, select the `Token configuration` menu.

1. Select `Add optional claim` for the `ID token`.

- In the claim, include the groups you want to map to DronaHQ groups.
- Include the `Group ID` for `ID`, `Access`, and `SAML`.

## Locate connection details

1. In the `Azure app registration experience`, select the `Overview` menu and select `Endpoints`.

1. Save the following fields to use in DronaHQ:

- Application (client) ID
- OAuth 2.0 authorization endpoint (v2)
- OAuth 2.0 token endpoint (v2)

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
| Scope      | `openid profile email offline_access` |
| Authorization Request | Authorization endpoint provided by Microsoft located from above steps i.e. `https://login.microsoftonline.com/<issuer>/oauth2/v2.0/authorize` where `<issuer>` is your account id provided by Microsoft. |
| Access Token Request | Token endpoint provided by Microsoft located from above steps i.e. `https://login.microsoftonline.com/<issuer>/oauth2/v2.0/token` where `<issuer>` is your account id provided by Microsoft. |
| Refresh Token Request | Token endpoint provided by Microsoft located from above steps i.e. `https://login.microsoftonline.com/<issuer>/oauth2/v2.0/token` where `<issuer>` is your account id provided by Microsoft. This will be called, when using current access token returns `401 status code` response |
| Add Claim List | You can map your `User's ID, Name, Email and Group` with corresponding values in DronaHQ. Here, you need to provide exact path of corresponding key present in JWT Token received from Token endpoint. Add `{{idToken.email}}` to map against `DHQ User Email`, this will refer to `email` key present in `idToken` parameter. Similarly you can add `{{idToken.given_name}}` to map against `DHQ User Name`, this will refer to `given_name` key present in `idToken` parameter. Similarly you can add `{{idToken.groups}}` to map against `DHQ User Group`, this will refer to `groups` key present in `idToken` parameter. |
| Enable JIT user provisioning | Just in time (JIT) user provisioning enables DronaHQ to provision user accounts when users sign in via Microsoft Entra ID SSO for the `first time`. This means you won't have to manually invite each user to DronaHQ first. |

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

With Microsoft Entra ID Single Sign-On (SSO), users can login into DronaHQ using a single set of login credentials. It simplifies user provisioning and management. User accounts can be created, updated, and deactivated centrally, ensuring efficient administration across all connected applications.