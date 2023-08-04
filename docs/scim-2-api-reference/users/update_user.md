---
sidebar_position: 4
---

# Update a User

Update an existing User by ID.

`For DronaHQ Studio`
<div class="apidocs-header">
    <div class="method patch">PATCH</div>
    <div class="endpoint">/api/scim/v2/Users/&lt;id&gt;</div>
</div>

`For DronaHQ Self hosted`
<div class="apidocs-header">
    <div class="method patch">PATCH</div>
    <div class="endpoint">/sso/scim/v2/Users/&lt;id&gt;</div>
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
        <td>Content-Type</td>
        <td>application/json</td>
    </tr>
    <tr>
        <td>Authorization</td>
        <td>Bearer &lt;API Token&gt;</td>
    </tr>
</table>

#### Path Parameter

- `id` (required): User ID for the user to be updated.

#### Request Body

Provide the properties of the User that you want to update.

```json
{
  "userName": "updateduser@example.com",
  "active": false,
  "emails": [
    {
      "value": "updateduser@example.com",
      "primary": true
    }
  ],
  "profileUrl": "https://example.com/user/updateduser"
}
```

#### Example cURL
Replace {id} with the actual User ID you want to update:

```bash
curl --location --request PATCH 'http://studio.dronahq.com/api/scim/v2/Users/{id}' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX' \
--data-raw '{
  "userName": "updateduser@example.com",
  "active": false,
  "emails": [
    {
      "value": "updateduser@example.com",
      "primary": true
    }
  ],
  "profileUrl": "https://example.com/user/updateduser"
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
        <td>User updated successfully</td>
        <td>empty</td>
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