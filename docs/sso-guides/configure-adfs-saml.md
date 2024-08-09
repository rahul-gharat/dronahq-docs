---
sidebar_position: 1
---

# Configure AD FS

import Thumbnail from '@site/src/components/Thumbnail';

## Prerequisites

To set up Active Directory Federation Services (AD FS) SSO in DronaHQ, you will need:

1. Access permissions to create a relying party trust in your ADFS settings.
1. Manage Users access on self-hosted DronaHQ instance or DronaHQ Cloud to configure SSO configurations.

## Creating a Relying party Trust in ADFS
Follow the [Relying Party Trust wizard](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/operations/create-a-relying-party-trust#to-create-a-claims-aware-relying-party-trust-manually) in Active Directory with the following settings.

1. In `Select Data Source`, select `Enter data about the relying party manually`.
1. In `Choose Profile`, select `AD FS profile`.
1. In `Configure Certificate`, do not upload a certificate.
1. In `Configure URL`, select `Enable support for SAML 2.0 WebSSO Protocol`. Download and Open DronaHQ metadata file. To locate this file, Go to `DronaHQ -> Manage Users -> SSO CONFIGURATION -> + Add SSO -> SAML 2.0`, Under Entity ID and Metadata URL open this url file. Configure URL is the location where SAML assertion is sent with an `HTTP POST`, known as `SAML Assertion Consumer Service URL`. Locate this in the Metadata downloaded and paste it here. Ex - https://studio.dronahq.com/callback/saml.
1. In `Configure Identifiers`, add your single-sign on domain without the protocol as a `Relying party trust identifier`. For example, use `dronahq.yourcompany.com` instead of `https://dronahq.yourcompany.com`.
Finish the wizard.

## Create rule to Send LDAP attributes as claims
Follow the steps to [send LDAP attributes as claims](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/operations/create-a-rule-to-send-ldap-attributes-as-claims).

1. On the `Choose rule type` page, select `Send LDAP Attributes as Claims`.
2. On the `Configure claim rule` page, choose `Active Directory` as the attribute store. Fill in the following settings.

| LDAP Attribute |	Outgoing Claim Type |
| -- | -- |
| Email addresses |	email |
| Email addresses	| AD FS 1.x Email address |
| Given Name	| name |

3. Select `Transform an Incoming Claim` and select the following settings.

| Setting |	Value |
| -- | -- |
| Incoming claim type |	AD FS 1.x Email Address |
| Outgoing claim type |	Name ID |
| Outgoing claim ID format | Email |

4. Select Pass through all claim values and save the settings.

## Configure in DronaHQ

In order to configure SAML in DronaHQ, we will need metadata file from your IDP. There is usually a button to download this from your IdP dashboard. Additionally, you can often find this by navigating to https://your.identityprovider.com/federationmetadata/2007-06/federationmetadata.xml.

1. Now that we have metadata file, In DronaHQ, Go to `Manage Users -> SSO Configuration -> + ADD SSO -> SAML 2.0`

Enter form with below fields -

| Field | Description  | 
| ----------------- |---------------- |
| Name            | Provide Friendly Name of this SSO configuration  |
| Entity ID     |   The entity ID is present in metadata file. Copy the ID and paste it. |
| Login URL / SSO URL | Enter the details of location of `singlesignonservice` from metadata file for POST method. |
| X509 public certificate      | X509Certificate file in `.cer` format. This file you can create following this [step](/sso/configuring-sso-with-saml#creating-x509-public-certificate) whose content you can locate in the metadata file. |
| Binding type | Enter `HTTP POST`. |
| Restricted Domain           | Enter domain name for which you want your users to login with for this SSO Configuration. You can add multiple domain names as well. eg - `domain1.com , domain2.com`. DronaHQ will automatically redirect to SSO url when we encounter any user’s sign in request with an email id belonging to the given restricted domain. |
| Want Auth request signed |  Locate this your IDP metadata file. Usually, Keep this default setting as `False`. |
| Add Claim List | We have already assigned Email and Name in ADFS. We will now enter same key name - `email` and `name` and map it to `DHQ User Name` and `DHQ User Email` respectively. |
| Enable JIT user provisioning | Toggle this `ON` so that you won’t have to manually invite each user to DronaHQ first. |
| Enable SCIM User Provisioning | Enable this in case you want to create, update and deactivate User accounts at your IDP portal and sync it with DronaHQ user management. |

2. Save the draft. Again navigate back to the SSO configuration option. You can see the newly created SAML.

<figure>
  <Thumbnail src="/img/sso/guides/sso-dronahq-okta-saml-draft.png" alt="SAML in Draft state" />
  <figcaption align = "center"><i>SAML in Draft state</i></figcaption>
</figure>

3. You can click on `Test SSO` button and it will open SSO Login url in a popup window.

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



## ADFS SAML in Action

Now, since our ADFS SAML SSO is live, we check in either DronaHQ End user portal - [Web](https://web.dronahq.io), [Android](https://play.google.com/store/apps/details?id=com.drona5) or [iOS](https://apps.apple.com/us/app/dronahq/id905354460) and see our configured adfs saml sso in action.

Simply go to DronaHQ End user webapp and enter your email id with domain that matches the configured restricted domain specified in SSO configuration and Click `Continue`.

<figure>
  <Thumbnail src="/img/sso/guides/sso-dronahq-okta-saml-webapp.png" alt="SAML in WebApp" />
  <figcaption align = "center"><i>SAML in WebApp</i></figcaption>
</figure>

Instead of asking for password, it asks for Login via SAML SSO provider. Click on it and open a popup window of your idp and the user can login with your idp login credentials.

Go to `Manage User` section on DronaHQ and you will see the new user created since `JIT` was enabled.

