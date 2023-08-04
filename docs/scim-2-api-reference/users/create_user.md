---
sidebar_position: 2
---

# Create a User

Create a new user, checking if the user already exists before adding.

`For DronaHQ Studio`
<div class="apidocs-header">
    <div class="method post">POST</div>
    <div class="endpoint">/api/scim/v2/Users</div>
</div>

`For DronaHQ Self hosted`
<div class="apidocs-header">
    <div class="method post">POST</div>
    <div class="endpoint">/sso/scim/v2/Users</div>
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

#### Request Body

```json
{
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

#### Example cURL
```bash
curl --location --request POST 'http://studio.dronahq.com/api/scim/v2/Users' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX' \
--data-raw '{
    "userName": "newuser@example.com",
    "active": true,
    "emails": [
        {
            "value": "newuser@example.com",
            "primary": true
        }
    ],
    "profileUrl": "https://example.com/user/newuser"
}'
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
        <td>User created successfully</td>
        <td>application/json</td>
    </tr>
    <tr>
        <td>400</td>
        <td>Internal server error</td>
        <td>empty</td>
    </tr>
</table>

#### Sample response
200 : User created successfully

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