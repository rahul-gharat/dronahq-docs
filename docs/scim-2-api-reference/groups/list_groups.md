---
sidebar_position: 5
---

# List Groups

Retrieve a list of Groups.

<div class="apidocs-header">
    <div class="method get">GET</div>
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
</table>

#### Query parameters

<table>
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>startIndex (optional)</td>
        <td>Integer</td>
        <td>Index of the first group to be returned</td>
    </tr>
    <tr>
        <td>count (optional)</td>
        <td>Integer</td>
        <td>Number of groups to be returned</td>
    </tr>
</table>

#### Example cURL

```bash
curl --location 'http://localhost:8080/api/scim/v2/Groups?startIndex=0&count=10' \
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
        <td>List of groups</td>
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
200 : List of groups

```json
{
    "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "startIndex": 1,
    "totalResults": 3,
    "itemsPerPage": 3,
    "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:Group"
    ],
    "Resources": [
        {
            "id": "1234",
            "displayName": "Administrators",
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
                "location": "http://localhost:8080/api/scim/v2/Groups/group-1",
                "created": "2023-08-04T08:38:02.3732123Z"
            }
        },
        {
            "id": "345",
            "displayName": "Developers",
            "members": [
                {
                    "value": 3,
                    "display": "user3@example.com"
                }
            ],
            "meta": {
                "location": "http://localhost:8080/api/scim/v2/Groups/group-2",
                "created": "2023-08-04T08:38:02.3732123Z"
            }
        },
        {
            "id": "487",
            "displayName": "Testers",
            "members": [
                {
                    "value": 4,
                    "display": "user4@example.com"
                },
                {
                    "value": 5,
                    "display": "user5@example.com"
                },
                {
                    "value": 6,
                    "display": "user6@example.com"
                }
            ],
            "meta": {
                "location": "http://localhost:8080/api/scim/v2/Groups/group-3",
                "created": "2023-08-04T08:38:02.3732123Z"
            }
        }
    ]
}
```