---
sidebar_position: 5
---

# Enable or Disable a User

Enable or Disable a User by ID.

<div class="apidocs-header">
    <div class="method patch">PATCH</div>
    <div class="endpoint">/api/scim/v2/Users/&#123;id&#125;</div>
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

```json
{
  "Operations": [
    {
      "op": "replace",
      "value": {
        "active": true
      }
    }
  ]
}
```
To enable the user, set "active": true. To disable the user, set "active": false.

#### Example cURL
Replace {id} with the actual User ID you want to enable or disable:

```bash
curl --location --request PATCH 'http://localhost:8080/api/scim/v2/Users/{id}' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX' \
--data-raw '{
  "Operations": [
    {
      "op": "replace",
      "value": {
        "active": true
      }
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
        <td>User updated successfully</td>
        <td>empty</td>
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
