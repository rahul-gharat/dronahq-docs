---
sidebar_position: 5
---

import Thumbnail from '@site/src/components/Thumbnail';

# All creator permissions

DronaHQ enforces granular access control over the resources, allowing you to assign roles to specific users and groups. This feature is particularly valuable for limiting unauthorized modifications to the configured resources. There are two resources for which you can edit permissions

- [Apps](/building-apps-concepts/app-permissions/)
- [Connectors](/datasource-concepts/connector-permissions/)

## Permission hierarchy

Granular permission in the DronaHQ follows a hierarchy which in the end decides which permission will be applied to which resources

<figure>
  <Thumbnail src="/img/user-management/permission-hierarchy.png" alt="Setting permissions for multiple users" />
  <figcaption align='center'><i>Permission hierarchy</i></figcaption>
</figure>

- Individual user: If any resource has permissions configured for individual users then that permission will get priority over all the other permissions.
- User Group: Multiple users can be a part of multiple groups thus it gets the second highest priority allowing users to give permission to a group of users without giving them individual permission.
- All Creators: All creators is similar to a group but it allows you to give permission to all users but the permission assigned to this group is only applied if no other permission is given via individual permission or groups.
- Default Permission: If no permission is configured for any resource then all the resources will inherit the permission from default.
## Configuring permissions for all creators

There are multiple ways you can edit permission for Apps and Connectors as displayed in the above-linked articles for apps and connectors, but there might be cases where you want to apply permission to all users and resources for that you can use the `All creator permission editor`. To access it you need to click on the Manage users and on the top bar you can find the option `All Creator Permission click on it.

<figure>
  <Thumbnail src="/img/user-management/all-creator-option.png" alt="Setting permissions for multiple users" />
  <figcaption align='center'><i>All creator permission option</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/user-management/all-creator-permission-sidebar.png" alt="Setting permissions for multiple users" />
  <figcaption align='center'><i>All creator permission sidebar for apps</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/user-management/all-creator-permission-sidebar-connector.png" alt="Setting permissions for multiple users" />
  <figcaption align='center'><i>All creator permission sidebar for connector</i></figcaption>
</figure>

:::info Inherited permission

Permissions which are inherited are highlighted using blue checkboxes

:::

:::info Overriding permission

Resources which have permission assigned to them, for individual users or groups will display a warning symbol on the left.

:::