---
sidebar_position: 1
---

# List Users

Retrieve a list of users based on the provided email filter

`For DronaHQ Studio`
<div class="apidocs-header">
    <div class="method get">GET</div>
    <div class="endpoint">/api/scim/v2/Users</div>
</div>

`For DronaHQ Self hosted`
<div class="apidocs-header">
    <div class="method get">GET</div>
    <div class="endpoint">/sso/scim/v2/Users</div>
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

### Query parameters

<table>
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>filter (optional)</td>
        <td>String</td>
        <td>Query for filtering documents. eg. userEmail eq "user@example.com"</td>
    </tr>
    <tr>
        <td>startIndex (optional)</td>
        <td>Integer</td>
        <td>Index of the first user to be returned</td>
    </tr>
    <tr>
        <td>count (optional)</td>
        <td>Integer</td>
        <td>Number of users to be returned</td>
    </tr>
</table>

### Example cURL

```bash
curl --location 'http://localhost:8080/api/scim/v2/Users?filter=userEmail eq "user@example.com"&startIndex=0&count=10' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
```

### Responses
<table>
    <tr>
        <th>Status Code</th>
        <th>Description</th>
        <th>Response</th>
    </tr>
    <tr>
        <td>200</td>
        <td>Success</td>
        <td>application/json</td>
    </tr>
        <tr>
        <td>401</td>
        <td>Unauthorized</td>
        <td>empty</td>
    </tr>
</table>

### Sample response

200 : Success

```json
{
    "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "Resources": [
        {
            "groups": [
                {
                    "display": "Default",
                    "value": 3966
                }
            ],
            "emails": [
                {
                    "value": "user@example.com",
                    "primary": true
                }
            ],
            "meta": {
                "location": "http://localhost:8080/api/scim/v2/Users/563504",
                "created": "2023-08-04T08:38:02.3732123Z"
            },
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:User"
            ],
            "name": {
                "givenName": null,
                "familyName": null
            },
            "photos": [],
            "nickName": null,
            "userName": "user@example.com",
            "displayName": "Rishabh Jain",
            "externalId": null,
            "timezone": null,
            "title": null,
            "active": true,
            "profileUrl": "",
            "id": "563504"
        }
    ],
    "startIndex": 1,
    "totalResults": 50,
    "itemsPerPage": 1
}
```
