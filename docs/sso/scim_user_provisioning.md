---
sidebar_position: 5
title: SCIM user provisioning
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# SCIM user provisioning

SCIM, also known as System for Cross-domain Identity Management, represents the established industry standard for automating the provisioning of user accounts. This powerful protocol proves particularly valuable in scenarios where organizations rely on third-party Single Sign-On (SSO) providers such as Okta or Azure Active Directory for managing employee authentication. By leveraging SCIM, the seamless creation, updating, and deactivation of user accounts can be effortlessly synchronized across various applications, including the robust capabilities offered by DronaHQ. Consequently, companies utilizing DronaHQ alongside their preferred SSO provider can ensure efficient and automated user management processes, resulting in enhanced security and streamlined operations.

DronaHQ implements a comprehensive subset of the SCIM 2.0 API, specifically designed to seamlessly integrate with IDP vendors such as Okta. This allows for efficient user and role management within your applications.

To enable SCIM user provisioning, follow these steps:

1. Go to `Manage Users` &#8594; `SSO Configuration` &#8594; `Add SSO` &#8594; `Add SSO` &#8594; `Add SAML` &#8594; Fill in the information.
2. Now enable SCIM User Provisioning.
   <figure>
    <Thumbnail src="/img/sso/scim-user-provisioning/scim-user-provisioning-enable.png" alt="Enable" />
   </figure>

3. Generate the Authentication Token and copy the Auth Token.
4. Save the Authentication Token to Draft.

**DronaHQ setup is now complete.**

Next, follow the steps below in your Okta Account:

1. Go to `Admin` &#8594; `Applications`.
2. In the Applications page, click on `Create App Integration` and select `SAML 2.0` &#8594; Insert Configuration Settings.
3. In the General Setting, under App Settings, select `Edit` and then in Provisioning, choose `SCIM` and save it.
4. Now, the Provisioning Tab will be enabled. In the Provisioning Tab, go to Setting sections &#8594; Integration &#8594; SCIM Connection &#8594; Edit.
5. Enter SCIM Connector base URL: `https://<yourdomain.com>/api/scim/v2`, and select Supported provisioning actions. Also, enter the Auth token copied from DronaHQ.
   <figure>
    <Thumbnail src="/img/sso/scim-user-provisioning/scim-user-provisioning-connection.png" alt="Connection" />
   </figure>
6. Test and Save the Integration part.
7. In Settings, go to the To App Section &#8594; Edit.
8. Enable: `Create Users`, `Update User Attributes`, `Deactivate Users`, and Save it.

**How to Add a User to Okta and DronaHQ:**

1. To add a User Account that will be reflected on Okta and DronaHQ, go to `Directory` &#8594; `People` &#8594; `Add Person` &#8594; add information and save it.
2. This user is still not added to your DronaHQ App because it is created on part of Okta but not assigned to DronaHQ App. To perform that, go to `Applications` &#8594; select DronaHQ App integration &#8594; `Assignment Tab` &#8594; Click `Assign` &#8594; Assign to People &#8594; Search for your username.
3. Click `Assign` and then click `Done`. By performing these actions, it will replicate the creation of the user in DronaHQ. You can see their account added in the Manage User section.
   <figure>
    <Thumbnail src="/img/sso/scim-user-provisioning/scim-user-provisioning-assignpeople.png" alt="Assign People" />
   </figure>
   <figure>
    <Thumbnail src="/img/sso/scim-user-provisioning/scim-user-provisioning-peopleoutput.png" alt="People Output" />
   </figure>

**How to Add a Group to Okta and DronaHQ:**

1. To add a Group, go to `Directory` &#8594; `Groups` &#8594; `Add Group` &#8594; Enter Group Name.
2. To add people to the group, click on the specific group name, Click on `Assign People` button &#8594; Search for the user you want to add and click on the `+` button to assign people to that group. After that, click on `Done`.
3. This Group is still not added to DronaHQ, as it is not Pushed to DronaHQ. To push it, go to your application, go to `Push Groups Tab` &#8594; Click on `Push Groups` button.
4. Search for the group, select the group and Save it. This will replicate your Groups in DronaHQ.
5. One can see the push status, and it should turn to `Active` after a few seconds.
   <figure>
    <Thumbnail src="/img/sso/scim-user-provisioning/scim-user-provisioning-pushgroups.png" alt="Push Groups" />
   </figure>
6. To check groups in DronaHQ, go to `Manage Users` section &#8594; `Manage Groups`, and it will list all the Groups.
   <figure>
    <Thumbnail src="/img/sso/scim-user-provisioning/scim-user-provisioning-groupoutput.png" alt="Group Output" />
   </figure>
