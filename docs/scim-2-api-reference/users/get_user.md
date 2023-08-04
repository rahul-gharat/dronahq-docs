---
sidebar_position: 3
---

# Retrieve a User

Retrieve a User by ID.

`For DronaHQ Studio`
<div class="apidocs-header">
    <div class="method get">GET</div>
    <div class="endpoint">/api/scim/v2/Users/&#123;id&#125;</div>
</div>

`For DronaHQ Self hosted`
<div class="apidocs-header">
    <div class="method get">GET</div>
    <div class="endpoint">/sso/scim/v2/Users/&#123;id&#125;</div>
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

- `id` (required): User ID to retrieve the specific user.

#### Example cURL

```bash
curl --location 'http://studio.dronahq.com/api/scim/v2/Users/563505' \
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
        <td>User retrieved successfully</td>
        <td>application/json</td>
    </tr>
    <tr>
        <td>400</td>
        <td>Internal server error</td>
        <td>empty</td>
    </tr>
</table>

#### Sample response

200 : User retrieved successfully

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "id": "563505",
    "userName": "newuser@example.com",
    "active": true,
    "emails": [
        {
            "value": "newuser@example.com",
            "primary": true
        }
    ],
    "profileUrl": "https://example.com/user/newuser"
}
```