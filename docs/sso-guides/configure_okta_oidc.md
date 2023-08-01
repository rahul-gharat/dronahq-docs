---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# Configure Okta OIDC  

### Prerequisites

To set up Okta OIDC SSO in DronaHQ, you will need:

1. An Okta account with permissions to create an OIDC integration Application.
1. Manage Users access on self-hosted DronaHQ instance or DronaHQ Cloud to configure SSO configurations.

### Configure in OKTA

1. Navigate to the OKTA dashboard. From the left side menu, go to `Applications -> Applications`.

<figure>
  <Thumbnail src="/img/sso/guides/sso-okta-menu-application.png" alt="Navigate to Application" />
  <figcaption align = "center"><i>Navigate to Application</i></figcaption>
</figure>


1. Select `Create App Integration` and configure the app with below field options -

| Field | Description  | 
  | ----------------- |---------------- |
| Sign-on method            | OIDC - OpenID Connect  |
| Application type          | Web Application  |
| App Integration Name              | Give a suitable name to your application. Eg - `DronaHQ OKTA SSO`. |
| Logo | (optional) you can provide a logo for your app.|
| Grant type      | Under Client acting on behalf of a user, select `Refresh token`.|
| Sign-in redirect URIs | https://YOUR_DRONAHQ_DOMAIN/callback/oauth . Go to `Manage Users -> SSO CONFIGURATION -> + Add SSO -> OIDC OpenID Connect`, locate
DronaHQ `OAuth Redirect URL` and use that in OKTA Sign-in redirect URIs section.|
| Controlled access | Select the access option accordingly. For instance, if you want a specific group of people to access apps, you can get that done using the `Limit access to selected group` option. |

<figure>
  <Thumbnail src="/img/sso/guides/sso-okta-create-application-full.png" alt="Create Application" />
  <figcaption align = "center"><i>Create Application</i></figcaption>
</figure>

1. Click `Save`.
1. After the app gets created, you can see `Client Credentials` having `Client ID` and `Client Secret`. Below this, you can see Okta domain. These will be useful in configuring OKTA OIDC in DronaHQ.

### Configure in DronaHQ

Go to `Manage Users -> SSO Configuration -> + ADD SSO -> OIDC - OpenID Connect`

Enter form with below fields -

 | Field | Description  | 
  | ----------------- |---------------- |
| Name            | Provide Friendly Name of this SSO configuration  |
| Restricted Domain           | Enter domain name for which you want your users to login with for this SSO Configuration. You can add multiple domain names as well. eg - `domain1.com , domain2.com`. DronaHQ will automatically redirect to SSO url when we encounter any user’s sign in request with an email id belonging to the given restricted domain.
 |
| Client ID              | `Client ID` from your OAuth app created in OKTA. This property can be referenced in Token request as `{{auth.client_id}}`. |
| Client Secret | `Client Secret` from your OAuth app created in OKTA. This property can be referenced in Token request as `{{auth.client_secret}}`. |
| Scope      | OAuth scopes values seperated with a comma or space that you want DronaHQ to access data. For eg - `openid offline_access profile email` |
| Authorization Request | Authorization endpoint for your OpenID OKTA SSO provider. In this URL - `https://SAMPLE_DOMAINL/oauth2/v1/authorize` , replace the SAMPLE_DOMAIN with OKTA Domain of your account.|
| Access Token Request | Token endpoint for your OpenID OKTA SSO provider. In this URL - `https://SAMPLE_DOMAIN/oauth2/v1/token` , replace the SAMPLE_DOMAIN with OKTA Domain of your account. |
| Refresh Token Request | Token endpoint for your OpenID OKTA SSO provider. In this URL - `https://SAMPLE_DOMAIN/oauth2/v1/token` , replace the SAMPLE_DOMAIN with OKTA Domain of your account. This will be called, when using current access token retunrs `401 status code` response |
| Add Claim List | You can map your `User's ID, Name, Email and Group` with corresponding values in DronaHQ. Here, you need to provide exact path of corresponding key present in JWT Token received from Token endpoint. For eg - Add `{{idToken.email}}` to map against `DHQ User Email`, this will refer to `email` key present in `idToken` parameter. Similarly you can use `{{accessToken.email}}` incase `Email` is received in `Access Token` key's value.|
| Enable JIT user provisioning | Just in time (JIT) user provisioning enables DronaHQ to provision user accounts when users sign in via SSO for the `first time`. This means you won't have to manually invite each user to DronaHQ first. |


1. Save the draft. Again navigate back to the SSO configuration option. You can see the newly created OAuth.
