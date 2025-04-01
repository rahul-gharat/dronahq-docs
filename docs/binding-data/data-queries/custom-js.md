---
sidebar_position: 1
title: Custom JS
---

import Thumbnail from '@site/src/components/Thumbnail';
import VersionedLink from '@site/src/components/VersionedLink';

# Custom JS

DronaHQ gives a way to write custom Javascript on any data in the app to transform or generate data in the format that you need. You can make use of the [JS libraries](/app-scripting-and-code/import-js-libraries) and [JS objects](/app-scripting-and-code/import-js-libraries) here as well. The output of this JS will be seen in the transformed response section and will be the final output of the Data query for the rest of the app. 


<figure>
  <Thumbnail src="/img/data-queries/custom-js.png" alt="Custom JS" width='100%'/>
  <figcaption align = "center"><i>Custom JS</i></figcaption>
</figure>


## DronaHQ imported JS libraries

The following JS libraries are auto imported by DronaHQ to be used in the JS code:

|  Libraries | Links |
|  --- | --- |
| underscore | https://underscorejs.org/|
| moment | https://momentjs.com/docs/ |
| papaparse | https://www.papaparse.com/docs |
| alasql | https://github.com/AlaSQL/alasql/wiki  |
| crypto | https://www.npmjs.com/package/crypto-js |
| jquery | https://api.jquery.com/ |


## Example usage

Imagine a scenario that you have a Tablegrid control with data already populated and you want to get all invoice numbers and populate them in a dropdown for users selection. Instead of doing a database or API call, you can create a custom JS type of a data query and take the Tablegrid data as input parameter to the JS code.

### Tablegrid data
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

### JS code 

```javascript
function JSCode( output, sample ) {
output = sample.payments.map(payment => payment.invoice_number);
return output;
}
```

### Output
```json
[
    "101301",
    "101302",
    "101303",
    "101304"
]
```
This dataquery can be referenced in any control (e.g. dropdown) with the following to get the required array of string.
```javascript
{{custom_js_dataquery}}
```

<figure>
  <Thumbnail src="/img/data-queries/dropdown-invoice.png" alt="Data from custom js" width='100%'/>
  <figcaption align = "center"><i>Data referencing the custom JS</i></figcaption>
</figure>

:::info Please Note

DronaHQ automatically imports moment.js, underscore.js, crypto.js, papaparse.js, alasql.js and jquery.js by default beyond which you can import your own libraries or script tags or build reusable JS functions using JS objects.

:::

## Advanced

 1. When to Execute : Here you can write a condition which results in TRUE/FALSE to decide whether to execute this action or not.
 2. Error message : Here you can write a error message that will be displayed when the condition fails to execute.
 3. Run on App open - Toggle: This will make the dataquery to run on app open regardless of if it's referenced in any other control or dataquery.
