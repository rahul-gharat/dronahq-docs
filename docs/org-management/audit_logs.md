---
sidebar_position: 7
title: Audit logs
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Audit logs

DronaHQ provides different functionalities like developing and designing `apps`, creating `automations`, different `API and database` calls an so on. You may need to examine different actions and events to identify the issues that might have caused the unexpected response during execution. You can turn on and off audit logging by navigating to `Account Settings -> General & Security -> Audit logs`.


## Enabling Audit logs 

DronaHQ audit logs are categorized in 2 ways:
- Admin level events - All critical events that happen on the DronaHQ `creator portal`
- Run level events - All critical events that happen on the DronaHQ apps at runtime

<figure>
  <Thumbnail src="/img/org-management/audit-logs.png" alt="Audit logs" width='100%'/>
  <figcaption align = "center"><i>Audit logs</i></figcaption>
</figure>

## Viewing Audit logs

You can view all the audit logs by navigating to `Analytics -> Audit logs` where you will not only be able to view the analytics but also filter with different parameters like date range.

<figure>
  <Thumbnail src="/img/org-management/view-audit-logs.png" alt="View Audit logs" width='100%'/>
  <figcaption align = "center"><i>View Audit logs</i></figcaption>
</figure>

## List of events logged

- User Invited
- User Deactivated
- Group Created
- Admin Logged In
- Admin Logged Out
- Sheet Created
- Sheet Deleted
- Sheet Rename
- Sheet Permission Updated
- App Created
- App Deleted
- App Published
- App Unpublished
- App Made Live
- App Permission Updated
- App Owner Changed
- App Config Updated
- App Made Live
- Template Created
- API Added
- API Updated
- API Deleted
- API Call
- Db Query Added
- Db Query Updated
- Db Query Deleted
- Db Query
- Pdf Creation
- Lookup
- Insert Row
- Update Row
- Delete Row
- User Logged In
- User Logged Out
- Microapp Opened
- Password Reset Requested
- Password Changed
- Settings Updated
- API Category Added
- API Category Updated
- API Category Deleted
- Db Category Added
- Db Category Updated
- Db Category Deleted
- Environment Added
- Environment Updated
- Environment Deleted
- API Environment Updated