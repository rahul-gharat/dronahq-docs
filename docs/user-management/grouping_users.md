---
sidebar_position: 2
title: Grouping users
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Grouping users

With DronaHQ you can group your users in a single or multiple groups. This becomes important as your organizational users scale and it categorically is the first steps you would take towards:

- [Creator Permissions](/granular_creator_permissions)
- App catalogs for provisioning different apps for end-users

:::caution Please Note

You you need to have admin or owner level priviledges to access or modify these configurations.

:::

You can navigate to `Manage Users -> Manage Groups` to Add, Edit and Manage your user groups which you can assign to your users.

<figure>
  <Thumbnail src="/img/user-management/manage-groups.png" alt="Manage user groups" width='100%'/>
  <figcaption align = "center"><i>Manage user groups</i></figcaption>
</figure>

:::info Please Note

You can assign groups to users while inviting them or edit them later as well. Incase your account has SSO configured, you can pass claims and configure DronaHQ to auto detect and assign the groups to users while they are added. You can seamlessly sync groups from your IDP using SCIM as well.

:::