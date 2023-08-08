---
sidebar_position: 6
---

# Create a Group

Create a new group, checking if the group already exists before adding.

<div class="apidocs-header">
    <div class="method post">POST</div>
    <div class="endpoint">/api/scim/v2/Groups</div>
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
    <tr>
        <td>Content-Type</td>
        <td>application/json</td>
    </tr>
</table>

#### Request Body

The request body should contain the following parameters:

```json
{
    "displayName": "Group Name",
    "members": [
        {
            "value": "user1@example.com",
            "display": "User 1"
        },
        {
            "value": "user2@example.com",
            "display": "User 2"
        }
    ]
}
```
#### Example cURL
```bash
curl --location --request POST 'http://localhost:8080/api/scim/v2/Groups' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX' \
--header 'Content-Type: application/json' \
--data-raw '{
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
    ]
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
        <td>Group created successfully</td>
        <td>application/json</td>
    </tr>
    <tr>
        <td>400</td>
        <td>Invalid Request</td>
        <td>empty</td>
    </tr>
    <tr>
        <td>401</td>
        <td>Unauthorized</td>
        <td>empty</td>
    </tr>
    <tr>
        <td>500</td>
        <td>Internal Server Error</td>
        <td>empty</td>
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