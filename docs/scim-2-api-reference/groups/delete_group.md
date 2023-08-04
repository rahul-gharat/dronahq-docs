---
sidebar_position: 10
---

# Delete a Group

Delete a Group by ID.

`For DronaHQ Studio`
<div class="apidocs-header">
    <div class="method delete">DELETE</div>
    <div class="endpoint">/api/scim/v2/Groups/&#123;id&#125;</div>
</div>

`For DronaHQ Self hosted`
<div class="apidocs-header">
    <div class="method delete">DELETE</div>
    <div class="endpoint">/sso/scim/v2/Groups/&#123;id&#125;</div>
</div>

#### Headers
<table>
    <tr>
        <th>Key</th>
        <th>Value</th>
    </tr>
    <tr>
        <td>Authorization</td>
        <td>Bearer &lt;API Token&gt;</td>
    </tr>
</table>

#### Path Parameter

- `id` (required): Group ID to delete the specific group.

#### Example cURL

```bash
curl --location --request DELETE 'http://localhost:8080/api/scim/v2/Groups/group-123' \
--header 'Authorization: Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
```
#### Responses
<table>
    <tr>
        <th>Status Code</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>200</td>
        <td>Group deleted successfully</td>
    </tr>
    <tr>
        <td>400</td>
        <td>Internal server error</td>
    </tr>
    <tr>
        <td>401</td>
        <td>Unauthorized</td>
    </tr>
</table>