---
sidebar_position: 1
---

import Thumbnail from '@site/src/components/Thumbnail';

# App permissions

DronaHQ enforces granular access control over the app resources, allowing you to assign roles to specific users and groups. This feature is particularly valuable for limiting unauthorized modifications to the configured resources. Please refer to the table below for an overview of the different roles and their respective purposes.

| Role        | What it can do?    |
|-------------|---------------------|
| Owner       | The creator of the app holds the exclusive right to set up permissions for other users and groups. This role can edit or delete the app. |
| Publisher   | This role can publish the application. |
| Editor      | This role can edit, configure its functionality and preview the app. |
| Use Only    | This role can only view the app; any modifications made to the app cannot be saved. |
| None        | This role has no access to the app, and as a result, the app is not visible to users with this role. |
| Environment | This sets the environment list to which the app has access. |

## Setting permissions for a specific app

To set up permissions for an app, navigate to the app listing page and click on the three dots (more options) for the desired app. Then, select 'Edit permissions' to assign roles to users or groups.

When configuring individual or group permissions, the first entry is for 'All Creators.' This option sets default permissions for all creators. It's essential to keep in mind that permissions granted to individual users take precedence over any other permissions when assigning permissions to an app. For example, if a user is given a 'Preview Only' role for an app, but 'All Creators' are granted an 'Editor' role, that individual user will end up with the permissions of the 'Preview Only' role. 

Permission hierarchy starts with `Individual permission -> Group Permission -> All Creators permission -> Default permission` representing the highest to lowest permission priority, i.e. if no individual permission is given then it will look for permissions in groups to which use is assigned if not permission is set to groups then it will inherit all creator's permission, if no other permission is configured then it will inherit the default permission.

| Term  | Description                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| User  | Refers to each individual within the organization.                                                    |
| Group | Refers to specific groups of people within the organization, such as Developers, Testers, and others. |

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-permissions/app-library-permissions-user-list.png" alt="Setting permissions for multiple users" />
  <figcaption align='center'><i>Setting permissions for multiple users</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-permissions/app-library-permissions-group-list.png" alt="Setting permissions for multiple groups" />
  <figcaption align='center'><i>Setting permissions for multiple groups</i></figcaption>
</figure>

## Setting permissions for individual user and group

To set app permissions, access the user view by clicking on the 'Manage Users' option located to the left of the DronaHQ dashboard.

### Individual User

To set permissions for an individual user, click on the three dots (more options), then select 'Edit Permissions'. After that, navigate to the app tab and set permissions for each app according to your requirements.

:::info Active User

Editing app permissions is only possible for active users.

:::

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-permissions/user-view-edit-permission.png" alt="User view screen" />
  <figcaption align='center'><i>User view screen</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-permissions/setting-apps-permission-for-user.png" alt="Setting user permissions for apps" />
  <figcaption align='center'><i>Setting user permissions for apps</i></figcaption>
</figure>


### Group

To set permissions for a group, click on the 'Manage Groups' option located at the top, and then select 'Edit Permissions'. After that, navigate to the app tab and set permissions for each app according to your requirements.

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-permissions/manage-group-option.png" alt="Manage group option" />
  <figcaption align='center'><i>Manage group option</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-permissions/setting-apps-permission-for-group.png" alt="Groups listing" />
  <figcaption align='center'><i>Groups listing</i></figcaption>
</figure>

<figure>
  <Thumbnail src="/img/building-apps-concepts/app-permissions/editing-group-permission.png" alt="Groups listing" />
  <figcaption align='center'><i>Editing Group Permission</i></figcaption>
</figure>

:::info Inherited permission

Permissions which are inherited are highlighted using blue checkboxes

:::