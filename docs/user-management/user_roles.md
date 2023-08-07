---
sidebar_position: 4
title: User roles
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# User roles

All users in DronaHQ are categorized broadly in 4 types of roles in the decreasing order of privileges: 
- Owner
- Administrator
- Creator
- End-user

All these roles are fixed and have a particular definition which can't be modified for different accounts in DronaHQ. These roles can be defined while adding users or can be assigned after the users are in the system as well.

|  Role | What it means |
|  --- | --- |
| Owner | This is auto-assigned to the user who created the account. This user is like the super-admin of the account and has the highest privileges including having highest permissions for every app, connector or automation.  |
| Administrator | This is the 2nd highest privileged role in DronaHQ (almost similar to Owner except account deletion) and has access to Billing, App management, User management, Org management and general account or organization level settings in addition to all the privileges of Creators and End-users. For self-hosted edition of DronaHQ this role has the added permission to update controls, connectors and Fx functions which are Over-The-Air updates provided by DronaHQ. |
| Creator | This Role as the name defines has limited access to all the developer level functionality on DronaHQ. They have by default access to sections like Apps, connectors, Automation, Extensions etc. in addition to being End-users as well.  |
| End-user | These users will not have access to the DronaHQ `Creator-portal` and only has access to the DronaHQ `End-user portal` |

:::info Granular permissions

Since these roles are pre-defined and can't be modified at the account level, mostly granular permissions are required at app, connector or automation level for creators which are handled through [DronaHQ granular permissions for Creators](/user-management/granular_creator_permissions)

:::