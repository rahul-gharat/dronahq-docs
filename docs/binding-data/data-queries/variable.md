---
sidebar_position: 4
title: Variable
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Variable

Variables let you define static JSON objects or strings or other values along with inline javascript that can be used to create an output value. 

## Static data

You can define different formats ranging from JSONs to string to numeric etc values. 

<figure>
  <Thumbnail src="/img/data-queries/static-json.png" alt="Static JSON" width='100%'/>
  <figcaption align = "center"><i>Static JSON</i></figcaption>
</figure>

```json
{
        "customer_info": {
            "customer field": "Customer data",
            "unformatted_customer_field": " customer \n stuff ",
            "total_value": "281.01",
            "associated_usernames": ["user1", "myuser", "online_user"]
        },
        "payments": [
            {
                "invoice_number": "101301",
                "date": "2022-09-11T16:12:34.494Z",
                "description": "recurring subscription",
                "amount": 110.48
            },
            {
                "invoice_number": "101302",
                "date": "2022-09-29T14:45:13.148Z",
                "description": "one time purchase",
                "amount": 24.49
            },
            {
                "invoice_number": "101303",
                "date": "2022-10-11T16:12:34.683Z",
                "description": "recurring subscription",
                "amount": 110.48
            },
            {
                "invoice_number": "101304",
                "date": "2022-10-12T11:45:22.182Z",
                "description": "recurring subscription deluxe",
                "amount": 35.56
            }
        ]
    } 
```

## Dynamic data

You can utilize other keywords, controls, data queries and also combine inline JS to build your data.

<figure>
  <Thumbnail src="/img/data-queries/dynamic-values.png" alt="Dynamic values" width='100%'/>
  <figcaption align = "center"><i>Dynamic values</i></figcaption>
</figure>

```json
{{moment().format("[Today is] dddd");}} and my device is {{DEVICETYPE}}
```

## Persistent Data

The Persistent data retain their values across multiple app launches. So if you exit any app and reopen it later, the persistent value would get the last saved value. For example, you can add variables to maintain the login id across screens, its value would not be reset, and they would get the last saved values.