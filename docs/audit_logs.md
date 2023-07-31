---
sidebar_position: 61
---

import Thumbnail from '@site/src/components/Thumbnail';

# Audit Logs

DronaHQ platform provides different functionalities like developing and designing Microapps, building sheets, creating automations, different API calls an so on.  You may need to examine different actions and events to identify the issues that might have caused the unexpected response during execution. DronaHQ offers `Audit Logs`,  an `Add-on` feature provided on request, available in `Enterprise plan` . 

In `Audit Logs` the events are categorized into `run-level`  and `admin-level`. The `run-level` events include  `LOOKUP` function calls, `API` calls, `App Configuration` and so on while the `admin level` ones include  app creations or user deletions or granting permissions and many more. 

1. To view Audit Logs, under `Profile Settings` click `Analytics -> Audit Logs`.

    <figure>
    <Thumbnail src="/img/audit-logs/auditlogs-menu.png" alt="Audit Logs" />
    <figcaption align = "center"><i>Audit Logs</i></figcaption>
    </figure>

2. Under `Audit logs`  you will be able to see list of different events like `LOOKUP`, `DB Query` , `API Added`, and so on.

    <figure>
    <Thumbnail src="/img/audit-logs/auditlogs-page.png" alt="View  Audit Logs" />
    <figcaption align = "center"><i>View Audit Logs</i></figcaption>
    </figure>

3. To view for certain days say last 2 days, last 7 days and so on you can use the `Date Range` option in `Audit Logs`. 

    :::info NOTE

    `Date range` selection is limited to a period of only one month.

    :::

   In the `Date Range` Select the dates you want to view and click `Apply.`

    <figure>
    <Thumbnail src="/img/audit-logs/rangenew.png" alt="Custom Date Range" />
    <figcaption align = "center"><i>Custom Date Range</i></figcaption>
    </figure>
   

4. You will be able to view all the events in the specified dates.s

    <figure>
    <Thumbnail src="/img/audit-logs/dnnew2.png" alt="Date Range Filtered Results" />
    <figcaption align = "center"><i>Date Range Filtered Results</i></figcaption>
    </figure>

    Overall it provides you with the logging of data related to different types of calls. For further action if you want to view the data then you will be able to view items like `User Email`, `Channel ID`, `Plugin ID`, and so on.

    <figure>
    <Thumbnail src="/img/audit-logs/infonew.png" alt="Audit Log Detail" />
    <figcaption align = "center"><i>Audit Log Detail</i></figcaption>
    </figure>

   For our example for API calls it provides details like `Channel Id`, `Plugin ID`, `Response Code` and so on.

5. Click `Back` to return to `Audit logs.`

# List of events logged 
* User Invited
* User Deactivated
* Group Created
* Admin Logged In
* Admin Logged Out
* Sheet Created
* Sheet Deleted
* Sheet Rename
* Sheet Permission Updated
* App Created
* App Deleted
* App Published
* App Unpublished
* App Made Live
* App Permission Updated
* App Owner Changed
* App Config Updated
* App Made Live
* Template Created
* API Added
* API Updated
* API Deleted
* API Call
* Db Query Added
* Db Query Updated
* Db Query Deleted
* Db Query
* Pdf Creation
* Lookup
* Insert Row
* Update Row
* Delete Row
* User Logged In
* User Logged Out
* Microapp Opened
* Password Reset Requested
* Password Changed
* Settings Updated
* API Category Added
* API Category Updated
* API Category Deleted
* Db Category Added
* Db Category Updated
* Db Category Deleted
* Environment Added
* Environment Updated
* Environment Deleted
* API Environment Updated


:::info NOTE

 To enable Audit logs activate the admin event logging option provided in security settings. 

:::

![admin|690x113,60%](upload://1JZPsPAn073uFfByqaJS90Ot2rw.png) 

   Thus, `Audit Logs`  provides logging of Admin events as well as Microapp events. 