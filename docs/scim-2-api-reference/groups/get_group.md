---
sidebar_position: 7
---

# Retrieve a Group

Retrieve a Group by ID.

`For DronaHQ Studio`
<div class="apidocs-header">
    <div class="method get">GET</div>
    <div class="endpoint">/api/scim/v2/Groups/&lt;id&gt;</div>
</div>

`For DronaHQ Self hosted`
<div class="apidocs-header">
    <div class="method get">GET</div>
    <div class="endpoint">/sso/scim/v2/Groups/&lt;id&gt;</div>
</div>

#### Headers
<table>
    <tr>
        <th>Key</th>
        <th>Value</th>
    </tr>
    <tr>
        <td>Accept</td>
        <td>application/json</td>
    </tr>
    <tr>
        <td>Authorization</td>
        <td>Bearer &lt;API Token&gt;</td>
    </tr>
</table>

#### Path Parameter

- `id` (required): Group ID to retrieve the specific group.

#### Example cURL

```bash
curl --location 'http://studio.dronahq.com/api/scim/v2/Groups/group-123' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
```
#### Responses
<table>
    <tr>
        <th>Status Code</th>
        <th>Description</th>
        <th>Response</th>
    </tr>
    <tr>
        <td>200</td>
        <td>Group retrieved successfully</td>
        <td>application/json</td>
    </tr>
    <tr>
        <td>400</td>
        <td>Internal server error</td>
        <td>empty</td>
    </tr>
</table>

#### Sample response
200 : Group retrieved successfully

```json
{
    "id": "123",
    "displayName": "Developers",
    "members": [
        {
            "value": 1,
            "display": "user1@example.com"
        },
        {
            "value": 2,
            "display": "user2@example.com"
        }
    ],
    "meta": {
        "location": "https://studio.dronahq.com/api/scim/v2/Groups/group-123",
        "created": "2023-08-04T08:38:02.3732123Z"
    }
}
```