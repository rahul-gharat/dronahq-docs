---
sidebar_position: 5
---

import Thumbnail from '@site/src/components/Thumbnail';

# Connector permissions

DronaHQ enforces granular access control over the connector resources, allowing you to assign roles to specific users and groups. This feature is particularly valuable for limiting unauthorized modifications to the configured resources. Please refer to the table below for an overview of the different roles and their respective purposes.

| Role     | What it can do ?                                                                                                                                                                                          |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Owner    | The creator of the connector holds the exclusive right to set up permissions for other users and groups. This role can edit or delete the connector and configure resources for various data environments. |
| Editor   | This role can edit the connector and configure resources for various data environments.                                                                                                                               |
| Use Only | This role can only view the connector; any modifications made to the resources cannot be saved.                                                                                                                     |
| None     | This role has no access to the connector, and as a result, the connector is not visible to users with this role.                                                                                                                     |

## Setting permissions for a specific connector

To set up permissions for a connector, navigate to the connector listing page and click on the three dots (more options) for the desired connector. Then, select 'Edit permissions' to assign roles to users or groups.

When configuring individual or group permissions, the first entry is for 'All Users.' This option sets default permissions for all users. It's essential to keep in mind that permissions granted to all users take precedence over individual permissions when assigning permissions to connectors. For example, if a user is given a 'Preview Only' role for an app, but 'All Users' are granted an 'Editor' role, that individual user will end up with the permissions of the 'Editor' role. Hence, exercise caution to prevent unintended permission overriding. To be on the safe side, consider allowing limited permissions for all users by default.

| Term  | Description                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| User  | Refers to each individual within the organization.                                                    |
| Group | Refers to specific groups of people within the organization, such as Developers, Testers, and others. |

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/connector-permissions/connector-library-permissions-user-list.png" alt="Setting permissions for multiple users" />
  <figcaption align='center'><i>Setting permissions for multiple users</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/connector-permissions/connector-library-permissions-group-list.png" alt="Setting permissions for multiple groups" />
  <figcaption align='center'><i>Setting permissions for multiple groups</i></figcaption>
</figure>

## Setting permissions for individual user and group

To set connector permissions, access the user view by clicking on the 'Manage Users' option located to the left of the DronaHQ dashboard.

### Individual User

To set permissions for an individual user, click on the three dots (more options), then select 'Edit Permissions'. After that, navigate to the connector tab and set permissions for each connector according to your requirements.

:::info Active User

Editing connector permissions is only possible for active users.

:::

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/connector-permissions/user-view-edit-permission.png" alt="User view screen" />
  <figcaption align='center'><i>User view screen</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/connector-permissions/setting-connectors-permission-for-user.png" alt="Setting user permissions for connectors" />
  <figcaption align='center'><i>Setting user permissions for connectors</i></figcaption>
</figure>


### Group

To set permissions for a group, click on the 'Manage Groups' option located at the top, and then select 'Edit Permissions'. After that, navigate to the connector tab and set permissions for each connector according to your requirements.

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/connector-permissions/manage-group-option.png" alt="Manage group option" />
  <figcaption align='center'><i>Manage group option</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/connecting-datasource/concepts/connector-permissions/setting-connectors-permission-for-group.png" alt="Groups listing" />
  <figcaption align='center'><i>Groups listing</i></figcaption>
</figure>