---
sidebar_position: 1
title: Just in time user provisioning with SSO
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Just in time user provisioning with SSO

Just-in-time user provisioning for Single Sign-On (SSO) is a modern approach that streamlines the user onboarding process and enhances security for accessing various applications and services within an organization. With SSO, users can log in once using their credentials, and then seamlessly access multiple applications without the need to re-enter their login information repeatedly. DronaHQ's Just-in-time provisioning takes this convenience a step further by automatically creating user accounts on-the-fly when a user attempts to access an application for the first time.

When a user initiates the login process, the DronaHQ's SSO system detects their absence in the user accounts. At this point, just-in-time provisioning comes into play and dynamically generates the necessary user account with minimal required information, such as username and email. This agile provisioning process eliminates the need for administrators to manually create and maintain user accounts for each application, reducing administrative overhead and human error risks.

In conclusion, just-in-time user provisioning for SSO is an efficient, secure, and user-friendly approach to manage user access across multiple applications. It optimizes the onboarding process, reduces administrative burdens, and maintains a consistent and secure user experience throughout an organization's ecosystem of applications and services.

:::info Please Note

Just-in-time user provisioning works across all SSO configurations and only the mandatory field of user email is required. For all other details like groups etc. the admin will have to either manually update for the users or use the SCIM APIs.

:::

<figure>
  <Thumbnail src="/img/user-management/jit-provisioning.png" alt="JIT user provisioning" width='100%'/>
  <figcaption align = "center"><i>JIT user provisioning</i></figcaption>
</figure>