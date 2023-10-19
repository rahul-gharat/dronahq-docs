---
sidebar_position: 1
---

# Configure Okta SAML SSO  

import Thumbnail from '@site/src/components/Thumbnail';

## Prerequisites

To set up Okta SAML SSO in DronaHQ, you will need:

1. An Okta account with permissions to create an SAML integration Application.
1. Manage Users access on self-hosted DronaHQ instance or DronaHQ Cloud to configure SSO configurations.

## Configure in OKTA

1. Navigate to the OKTA dashboard, Go to Admin section. From the left side menu, go to `Applications -> Applications`. 

<figure>
  <Thumbnail src="/img/sso/guides/sso-okta-menu-application.png" alt="Navigate to Application" />
  <figcaption align = "center"><i>Navigate to Application</i></figcaption>
</figure>

2. Download and open DronaHQ metadata file. To locate this file, Go to `DronaHQ -> Manage Users -> SSO CONFIGURATION -> + Add SSO -> SAML 2.0`. Under `Entity ID and Metadata URL`, open this url file that will be useful in next steps. 

3. Select `Create App Integration` and configure the app with below field options -

| Field | Description  | 
  | ----------------- |---------------- |
| Sign-on method            | SAML 2.0  |
| App Integration Name   | Give a suitable name to your application. Eg - `DronaHQ OKTA SSO`. |
| Logo | (optional) you can provide a logo for your app.|
| Single sign-on URL | It is the location where SAML assertion is sent with an `HTTP POST`, known as `SAML Assertion Consumer Service URL`. Locate this in the Metadata downloaded and paste it here. Ex - https://studio.dronahq.com/callback/saml |
| Audience URL | This, we have to fill with entity ID present in the same Metadata downloaded file. Copy and paste the same. Ex - https://studio.dronahq.com/saml/metadata |
| Attribute Statements | This is an important part where will provide two attributes of name and email with values user.firstname and user.email respectively. You can add other user attributes such as location, department, etc. that you can configure in DronaHQ in next steps |

<figure>
  <Thumbnail src="/img/sso/guides/sso-okta-saml-attribute.png" alt="Attribute Statements" />
  <figcaption align = "center"><i>Attribute Statements</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/sso/guides/sso-okta-saml-config.png" alt="SAML App Setup" />
  <figcaption align = "center"><i>SAML App Setup</i></figcaption>
</figure>


4. Click Next. Fill in the feedback form and then `finish`.

### Assign Users

Here we can add all the people related to the organization for the SAML SSO configuration.

<figure>
  <Thumbnail src="/img/sso/guides/sso-okta-saml-assignment.png" alt="Assignment" />
  <figcaption align = "center"><i>Assignment</i></figcaption>
</figure>

1. Go to `Assignments -> Assign -> Assign to people -> Click assign for the user -> Done`.

<figure>
  <Thumbnail src="/img/sso/guides/sso-okta-saml-add-people.png" alt="Assign Users" />
  <figcaption align = "center"><i>Assign Users</i></figcaption>
</figure>


Now that we have created our application on Okta for SAML, we will now configure SAML SSO on DronaHQ. 

## Configure in DronaHQ

In order to configure SAML in DronaHQ, we will need metadata file of OKTA. To get this file from OKTA, Go to `Okta SAML integration` and under `Sign on` there is `SAML Signing Certificates`.

Here we can find all the available active/inactive certificate along with the option to create a new certificate.

Click on `Actions -> View IdP Metadata of an active certificate` and it will open up a tab with metadata details.

<figure>
  <Thumbnail src="/img/sso/guides/sso-okta-saml-view-metadata.png" alt="View OKTA Metadata file" />
  <figcaption align = "center"><i>View OKTA Metadata file</i></figcaption>
</figure>

In the same screen, Click on `Actions ->  Download certificate` and it will download `.cer` file that you can keep it for later use.

<figure>
  <Thumbnail src="/img/sso/guides/sso-okta-saml-metadata.png" alt="OKTA Metadata file" />
  <figcaption align = "center"><i>OKTA Metadata file</i></figcaption>
</figure>

1. Now that we have metadata file, In DronaHQ, Go to `Manage Users -> SSO Configuration -> + ADD SSO -> SAML 2.0`

Enter form with below fields -

 | Field | Description  | 
  | ----------------- |---------------- |
| Name            | Provide Friendly Name of this SSO configuration  |
| Entity ID     |   The entity ID is present on Okta metadata file. Copy the ID and paste it. |
| Login URL / SSO URL | Enter the details of location of `singlesignonservice` from Okta metadata file for POST method. |
| X509 public certificate      | X509Certificate file in `.cer` format. This file we have downloaded from OKTA in previous step can be used here. |
| Binding type | Enter `HTTP POST`. |
| Restricted Domain           | Enter domain name for which you want your users to login with for this SSO Configuration. You can add multiple domain names as well. eg - `domain1.com , domain2.com`. DronaHQ will automatically redirect to SSO url when we encounter any user’s sign in request with an email id belonging to the given restricted domain. |
| Want Auth request signed |  Keep this default setting as `False`. |
| Add Claim List | We have already assigned Email and Name on Okta while integrating SAML. We will now enter same key name - `email` and `name` and map it to `DHQ User Name` and `DHQ User Email` respectively. |
| Enable JIT user provisioning | Toggle this `ON` so that you won’t have to manually invite each user to DronaHQ first. |
| Enable SCIM User Provisioning | Enable this in case you want to create, update and deactivate User accounts at your OKTA portal and sync it with DronaHQ user management. |

2. Save the draft. Again navigate back to the SSO configuration option. You can see the newly created SAML.

<figure>
  <Thumbnail src="/img/sso/guides/sso-dronahq-okta-saml-draft.png" alt="SAML in Draft state" />
  <figcaption align = "center"><i>SAML in Draft state</i></figcaption>
</figure>

3. You can click on `Test SSO` button and it will open SSO Login url in a popup window.

<figure>
  <Thumbnail src="/img/sso/guides/sso-dronahq-okta-saml-signin-url.png" alt="SAML Signin URL" />
  <figcaption align = "center"><i>SAML Signin URL</i></figcaption>
</figure>

4. Once you login successfully and if everything is set up correctly, then finally you will see a success message at the bottom.

<figure>
  <Thumbnail src="/img/sso/guides/sso-dronahq-okta-oauth-success.png" alt="SAML Signin Success" />
  <figcaption align = "center"><i>SAML Signin Success</i></figcaption>
</figure>

5. Now, that testing is successful, you can click on the more option for above SSO configuration and click on `Activate` to make it live.

<figure>
  <Thumbnail src="/img/sso/guides/sso-dronahq-okta-saml-active.png" alt="SAML SSO Active" />
  <figcaption align = "center"><i>SAML SSO Active</i></figcaption>
</figure>



## OKTA SAML in Action

Now, since our OKTA SAML SSO is live, we check in either DronaHQ End user portal - [Web](https://web.dronahq.io), [Android](https://play.google.com/store/apps/details?id=com.drona5) or [iOS](https://apps.apple.com/us/app/dronahq/id905354460) and see our configured okta saml sso in action.

Simply go to DronaHQ End user webapp and enter your email id with domain that matches the configured restricted domain specified in SSO configuration and Click `Continue`.

<figure>
  <Thumbnail src="/img/sso/guides/sso-dronahq-okta-saml-webapp.png" alt="SAML in WebApp" />
  <figcaption align = "center"><i>SAML in WebApp</i></figcaption>
</figure>

Instead of asking for password, it asks for Login via Okta SAML SSO provider. Click on it and open a popup window of okta and the user can login with Okta login credentials.

Go to `Manage User` section on DronaHQ and you will see the new user created since `JIT` was enabled.

