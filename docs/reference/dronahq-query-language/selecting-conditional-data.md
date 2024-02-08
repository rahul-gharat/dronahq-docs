---
sidebar_position: 2
---

# Selecting conditional data

You can use DronaHQ Query Language (DQL) to filter for specific data in your responses. Multiple responses return in an array. Single responses return as a single record. Sample data and DQL examples are below.

## Contents

- [Example JSON](#example-json)
- [Filter query results for objects with specific key-value pairs](#filter-query-results-for-objects-with-specific-key-value-pairs)
- [Navigate your filtered results](#navigate-your-filtered-results)
- [Return a single record](#return-a-single-record)
- [Check if a field has a specific value](#check-if-a-field-has-a-specific-value)
- [Get only unique payment amounts](#get-only-unique-payment-amounts)

## Example JSON
The examples below use this JSON data:

```json
{
    "customer info": {
        "customer field": "Customer data",
        "unformated_customer_field": " customer \n stuff ",
        "total_value": "281.01",
        "associated_usernames": ["user1, myuser, online_user"]
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
## Filter query results for objects with specific key-value pairs
The example below filters for objects in the payments array that have the key-value pair "description": "recurring subscription".

##### DQL
```bash
payments[description="recurring subscription"]
```
##### Result
```bash
[
    {
        "invoice_number": "101301",
        "date": "2022-09-11T16:12:34.494Z",
        "description": "recurring subscription",
        "amount": 110.48
    },
    {
        "invoice_number": "101303",
        "date": "2022-10-11T16:12:34.683Z",
        "description": "recurring subscription",
        "amount": 110.48
    }
]
```

## Navigate your filtered results
DQL uses the same syntax to navigate filtered query results as it does to navigate JSON data. The example below gets the values from the invoice.number fields in the payments array.

##### DQL
```bash
payments[description="recurring subscription"].invoice_number
```
##### Result
```bash
["101301","101303"]
```

## Return a single record
When a filter has a single result, it returns as a record instead of an array. The filter below returns a single result as a record.

##### DQL
```bash
payments[description="recurring subscription deluxe"].invoice_number
```
##### Result
```bash
["101304"]
```

## Check if a field has a specific value
DQL can check if your query results have a specific key-value pair and return true or false. The example below checks the first item in the payments array for the key-value pair "description": "recurring".

##### DQL
```bash
$contains(payments[0].description, "recurring")
```
##### Result
```bash
true
```

## Get only unique payment amounts
The $distinct function returns a single instance of any recurring values. In the example below, the 110.48 value appears twice in the data, but only once in the result.

##### DQL
```bash
$distinct(payments.amount)
```
##### Result
```bash
[110.48, 24.49, 35.56]
```