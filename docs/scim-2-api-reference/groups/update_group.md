---
sidebar_position: 9
---

# Update a Group

Update an existing Group by adding or removing members.

`For DronaHQ Studio`
<div class="apidocs-header">
    <div class="method patch">PATCH</div>
    <div class="endpoint">/api/scim/v2/Groups/&#123;id&#125;</div>
</div>

`For DronaHQ Self hosted`
<div class="apidocs-header">
    <div class="method patch">PATCH</div>
    <div class="endpoint">/sso/scim/v2/Groups/&#123;id&#125;</div>
</div>

#### Headers
<table>
    <tr>
        <th>Key</th>
        <th>Value</th>
    </tr>
    <tr>
        <td>Content-Type</td>
        <td>application/json</td>
    </tr>
    <tr>
        <td>Authorization</td>
        <td>Bearer &lt;API Token&gt;</td>
    </tr>
</table>

#### Path Parameter

- `id` (required): Group ID to update the specific group.

#### Request Body

The request body must contain an array of members to add or remove from the group.

```json
{
    "members": [
        {
            "value": 3,
            "display": "user3@example.com"
        },
        {
            "value": 4,
            "display": "user4@example.com"
        }
    ]
}
```
#### Example cURL
```bash
curl --location --request PATCH 'http://localhost:8080/api/scim/v2/Groups/group-123' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX' \
--data-raw '{
    "members": [
        {
            "value": 3,
            "display": "user3@example.com"
        },
        {
            "value": 4,
            "display": "user4@example.com"
        }
    ]
}'
```
#### Responses
<table>
    <tr>
        <th>Status Code</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>200</td>
        <td>Group updated successfully</td>
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

#### Sample response
200 : Group created successfully

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
        "location": "http://localhost:8080/api/scim/v2/Groups/123",
        "created": "2023-08-04T08:38:02.3732123Z"
    }
}
```