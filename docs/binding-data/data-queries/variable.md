---
sidebar_position: 1
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

## Advanced

 1. When to Execute : Here you can write a condition which results in TRUE/FALSE to decide whether to execute this action or not.
 2. Error message : Here you can write a error message that will be displayed when the condition fails to execute.
 3. Run on App open - Toggle: This will make the dataquery to run on app open regardless of if it's referenced in any other control or dataquery.




#### Run on App Open

Previously, whenever a data query was saved and not binded to any control or is not 
triggered via actionflow, it wouldn’t hold a value and would return an empty string if tried 
to access without triggering unwanted behaviour. 

With this toggle enabled for any particular data query, it will run on app open 
regardless of if it’s referenced in any other control or dataquery.



Let’s say we create a VARIABLE called ``data_1`` which acts as a flag (Holds a boolean 
value), this value will not be accessible until the variable has been binded to any control 
or triggered using actionflow. 

<figure>
  <Thumbnail src="/img/data-queries/app-open-toggle.png" alt="Dynamic values" width='100%'/>
</figure>

 
 
Now if we enable the “Run on app open” toggle for any data query, it will automatically run when 
the app is opened and will hold the correct flag value. 

