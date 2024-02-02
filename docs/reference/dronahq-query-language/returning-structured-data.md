---
sidebar_position: 3
---

# Returning structured data

The following examples demonstrate how to use DQL to return structured data from JSON data.

## Contents

- [Example JSON](#example-json)
- [Return multiple objects as an array](#return-multiple-objects-as-an-array)
- [Return an array of a single field from multiple objects](#return-an-array-of-a-single-field-from-multiple-objects)
- [Collapse multiple objects into a single key-value pair](#collapse-multiple-objects-into-a-single-key-value-pair)
- [Collapse and group results by a shared field value](#collapse-and-group-results-by-a-shared-field-value)


## Example JSON
The examples below use this JSON data:

```json
{
    "name": "John Smith",
    "physical_address": {
        "street": "123 Park Avenue",
        "city": "Atlanta",
        "state": "GA",
        "zip": "12345"
    },
    "work_address": {
        "street": "583 W. Island Drive",
        "city": "Miami",
        "state": "FL",
        "zip": "44456"
    },
    "mailing_address": {
        "street": "232 Ravensburg Road",
        "city": "Durham",
        "state": "NC",
        "zip": "03948"
    },
    "phones": [
        {
            "type": "Home",
            "number": "123-456-7890"
        },
        {
            "type": "Cell",
            "number": "098-765-4321"
        },
        {
            "type": "Cell",
            "number": "888-777-5555"
        },
        {
            "type": "work",
            "number": "314-265-9078"
        }
    ]
}
```

## Return multiple objects as an array
The example below returns three objects as an array.

##### DQL
```bash
[physical_address, work_address, mailing_address]
```
##### Result
```bash
[
    {"street": "123 Park Avenue","city": "Atlanta","state": "GA","zip": "12345"},
    {"street": "583 W. Island Drive","city": "Miami","state": "FL","zip": "44456" },
    {"street": "232 Ravensburg Road","city": "Durham","state": "NC","zip": "03948"}
]
```

## Return an array of a single field from multiple objects
The example below gets the values of the city key from three objects and returns the values as an array.

##### DQL
```bash
[physical_address, work_address, mailing_address].city
```
##### Result
```bash
["Atlanta","Miami","Durham"]
```

## Collapse multiple objects into a single key-value pair
DQL can return an array of key-value pairs composed of values from an object. The example below gets the values of the type and number keys from objects in the phones array and returns them as an array of key-value pairs.

##### DQL
```string
phones.{"type": number}
```
##### Result
```bash
[
    {"Home": "123-456-7890"},
    {"Cell": "098-765-4321"},
    {"Cell": "888-777-5555"},
    {"work": "314-265-9078"}
]
```

## Collapse and group results by a shared field value
DQL can return an object with key-value pairs composed of values from an object. Group returned values in an array if they have the same key name in their respective objects. The example below groups the values of Cell keys from two different objects in the phones array.

##### DQL
```string
phones.{"type": number[]}
```
##### Result
```bash
{
    "Home": ["123-456-7890"],
    "Cell": ["098-765-4321","888-777-5555"],
    "work": ["314-265-9078"]
}
```





